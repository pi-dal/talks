#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

/**
 * Find all talk directories (containing slides.md and package.json)
 */
function findTalkDirectories() {
  const talkDirs = []
  const items = fs.readdirSync(rootDir)
  
  for (const item of items) {
    const itemPath = path.join(rootDir, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'scripts' && item !== 'node_modules' && item !== 'dist') {
      const slidesPath = path.join(itemPath, 'slides.md')
      const packagePath = path.join(itemPath, 'package.json')
      if (fs.existsSync(slidesPath) && fs.existsSync(packagePath)) {
        talkDirs.push({ path: itemPath, name: item })
      }
    }
  }
  
  return talkDirs
}

/**
 * Build a single talk
 */
function buildTalk(talkDir) {
  console.log(`🔨 Building ${talkDir.name}...`)
  
  try {
    // Change to talk directory
    process.chdir(talkDir.path)
    
    // Install dependencies if node_modules doesn't exist
    if (!fs.existsSync('node_modules')) {
      console.log(`   Installing dependencies...`)
      execSync('pnpm install', { stdio: 'inherit' })
    }
    
    // Build the presentation
    execSync('pnpm run build', { stdio: 'inherit' })
    
    console.log(`✅ Built ${talkDir.name}`)
    return true
  } catch (error) {
    console.error(`❌ Failed to build ${talkDir.name}:`, error.message)
    return false
  }
}

/**
 * Copy built files to central dist directory
 */
function copyToDistribution(talkDirs) {
  const distDir = path.join(rootDir, 'dist')
  
  // Create dist directory
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }
  
  // Create index.html with links to all talks
  let indexContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Talks Collection</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
    h1 { color: #333; }
    .talk-list { list-style: none; padding: 0; }
    .talk-item { margin: 15px 0; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
    .talk-item a { text-decoration: none; color: #0066cc; font-weight: bold; }
    .talk-item a:hover { text-decoration: underline; }
    .talk-date { color: #666; font-size: 0.9em; }
  </style>
</head>
<body>
  <h1>📺 Talks Collection</h1>
  <ul class="talk-list">
`
  
  for (const talkDir of talkDirs) {
    const talkDistPath = path.join(talkDir.path, 'dist')
    const targetPath = path.join(distDir, talkDir.name)
    
    if (fs.existsSync(talkDistPath)) {
      // Copy talk dist to main dist
      if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true })
      }
      fs.cpSync(talkDistPath, targetPath, { recursive: true })
      console.log(`📦 Copied ${talkDir.name} to dist/`)
      
      // Add to index
      const dateMatch = talkDir.name.match(/^(\d{4}-\d{2}-\d{2})/)
      const date = dateMatch ? dateMatch[1] : 'Unknown date'
      const title = talkDir.name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ')
      
      indexContent += `    <li class="talk-item">
      <a href="${talkDir.name}/">${title}</a>
      <div class="talk-date">${date}</div>
    </li>
`
    }
  }
  
  indexContent += `  </ul>
  <footer>
    <p><small>Generated on ${new Date().toISOString().split('T')[0]}</small></p>
  </footer>
</body>
</html>`
  
  fs.writeFileSync(path.join(distDir, 'index.html'), indexContent)
  console.log('📋 Created index.html')
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Finding talk directories...')
  const talkDirs = findTalkDirectories()
  
  if (talkDirs.length === 0) {
    console.log('No talk directories found.')
    return
  }
  
  console.log(`Found ${talkDirs.length} talk(s):\n`)
  talkDirs.forEach(dir => console.log(`  - ${dir.name}`))
  console.log()
  
  let successCount = 0
  const originalCwd = process.cwd()
  
  for (const talkDir of talkDirs) {
    if (buildTalk(talkDir)) {
      successCount++
    }
    // Return to root directory
    process.chdir(originalCwd)
  }
  
  console.log(`\n📊 Build Summary: ${successCount}/${talkDirs.length} talks built successfully`)
  
  if (successCount > 0) {
    console.log('\n📦 Copying to distribution directory...')
    copyToDistribution(talkDirs.filter((_, index) => index < successCount))
    console.log(`\n✨ All builds complete! Distribution ready in ./dist/`)
  }
}

// Run the script
main()