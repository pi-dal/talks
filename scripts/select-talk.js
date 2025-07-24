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
 * Find all talk directories
 */
function findTalkDirectories() {
  const talkDirs = []
  const items = fs.readdirSync(rootDir)
  
  for (const item of items) {
    const itemPath = path.join(rootDir, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'scripts' && item !== 'node_modules' && item !== 'dist') {
      const slidesPath = path.join(itemPath, 'slides.md')
      if (fs.existsSync(slidesPath)) {
        talkDirs.push({ path: itemPath, name: item })
      }
    }
  }
  
  return talkDirs.sort((a, b) => b.name.localeCompare(a.name)) // Sort by date (newest first)
}

/**
 * Main function
 */
function main() {
  const talkDirs = findTalkDirectories()
  
  if (talkDirs.length === 0) {
    console.log('No talk directories found.')
    return
  }
  
  if (talkDirs.length === 1) {
    console.log(`Starting development server for: ${talkDirs[0].name}`)
    process.chdir(talkDirs[0].path)
    execSync('pnpm run dev', { stdio: 'inherit' })
    return
  }
  
  console.log('📺 Available talks:')
  talkDirs.forEach((dir, index) => {
    console.log(`  ${index + 1}. ${dir.name}`)
  })
  
  console.log(`\nSelect a talk to develop (1-${talkDirs.length}):`)
  
  // Interactive selection
  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      const selection = parseInt(chunk.trim())
      if (selection >= 1 && selection <= talkDirs.length) {
        const selectedTalk = talkDirs[selection - 1]
        console.log(`Starting development server for: ${selectedTalk.name}`)
        process.chdir(selectedTalk.path)
        
        // Install dependencies if needed
        if (!fs.existsSync('node_modules')) {
          console.log('Installing dependencies...')
          execSync('pnpm install', { stdio: 'inherit' })
        }
        
        execSync('pnpm run dev', { stdio: 'inherit' })
      } else {
        console.log('Invalid selection. Please try again.')
      }
      process.exit(0)
    }
  })
}

// Run the script
main()