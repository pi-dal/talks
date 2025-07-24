#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

/**
 * Parse frontmatter from a markdown file
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/
  const match = content.match(frontmatterRegex)
  
  if (!match) return {}
  
  const frontmatter = {}
  const lines = match[1].split('\n')
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    
    const key = line.substring(0, colonIndex).trim()
    const value = line.substring(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '')
    frontmatter[key] = value
  }
  
  return frontmatter
}

/**
 * Extract date from various sources
 */
function extractDate(talkDir) {
  const slidesPath = path.join(talkDir, 'slides.md')
  
  try {
    // Try to get date from slides.md frontmatter
    if (fs.existsSync(slidesPath)) {
      const content = fs.readFileSync(slidesPath, 'utf8')
      const frontmatter = parseFrontmatter(content)
      
      // Look for various date fields (prefer 'date' over 'coverDate')
      if (frontmatter.date) {
        return new Date(frontmatter.date)
      }
      if (frontmatter.coverDate && frontmatter.coverDate !== '2025') {
        return new Date(frontmatter.coverDate)
      }
    }
    
    // Fallback to file modification date
    const stats = fs.statSync(slidesPath)
    return stats.mtime
  } catch (error) {
    console.warn(`Warning: Could not extract date for ${talkDir}, using current date`)
    return new Date()
  }
}

/**
 * Generate new directory name from talk metadata
 */
function generateNewDirName(talkDir, date) {
  const slidesPath = path.join(talkDir, 'slides.md')
  let slug = path.basename(talkDir).toLowerCase()
  
  try {
    if (fs.existsSync(slidesPath)) {
      const content = fs.readFileSync(slidesPath, 'utf8')
      const frontmatter = parseFrontmatter(content)
      
      // Prefer slug over title for URL generation
      if (frontmatter.slug) {
        slug = frontmatter.slug
      } else if (frontmatter.title) {
        // Convert title to URL-friendly format
        slug = frontmatter.title
          .replace(/[？]/g, '') // Remove question marks
          .replace(/[（）]/g, '') // Remove Chinese parentheses  
          .replace(/[^\w\s\u4e00-\u9fff-]/g, '') // Keep Chinese characters, alphanumeric, spaces, hyphens
          .trim()
          .replace(/\s+/g, '-')     // Replace spaces with hyphens
          .replace(/-+/g, '-')      // Replace multiple hyphens with single
          .replace(/^-|-$/g, '')    // Remove leading/trailing hyphens
          .substring(0, 50)         // Limit length
        
        // If slug is still empty or too short, use directory name
        if (!slug || slug.length < 3) {
          slug = path.basename(talkDir).toLowerCase()
        }
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not extract slug for ${talkDir}`)
  }
  
  const dateStr = date.toISOString().split('T')[0] // YYYY-MM-DD format
  return `${dateStr}-${slug}`
}

/**
 * Move directory contents to new location
 */
function moveTalkDirectory(oldPath, newPath) {
  if (fs.existsSync(newPath)) {
    console.error(`Error: Target directory ${newPath} already exists`)
    return false
  }
  
  try {
    // Create new directory
    fs.mkdirSync(newPath, { recursive: true })
    
    // Move all contents
    const items = fs.readdirSync(oldPath)
    for (const item of items) {
      const oldItemPath = path.join(oldPath, item)
      const newItemPath = path.join(newPath, item)
      fs.renameSync(oldItemPath, newItemPath)
    }
    
    // Remove old directory
    fs.rmdirSync(oldPath)
    console.log(`✅ Moved: ${path.basename(oldPath)} → ${path.basename(newPath)}`)
    return true
  } catch (error) {
    console.error(`Error moving ${oldPath} to ${newPath}:`, error.message)
    return false
  }
}

/**
 * Find all talk directories (containing slides.md)
 */
function findTalkDirectories() {
  const talkDirs = []
  const items = fs.readdirSync(rootDir)
  
  for (const item of items) {
    const itemPath = path.join(rootDir, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'scripts' && item !== 'node_modules') {
      const slidesPath = path.join(itemPath, 'slides.md')
      if (fs.existsSync(slidesPath)) {
        talkDirs.push(itemPath)
      }
    }
  }
  
  return talkDirs
}

/**
 * Check if directory already follows the YYYY-MM-DD format
 */
function isAlreadyOrganized(dirName) {
  const datePattern = /^\d{4}-\d{2}-\d{2}/
  return datePattern.test(dirName)
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
  
  const reorganizations = []
  
  for (const talkDir of talkDirs) {
    const dirName = path.basename(talkDir)
    
    if (isAlreadyOrganized(dirName)) {
      console.log(`⏭️  Skipping: ${dirName} (already organized)`)
      continue
    }
    
    const date = extractDate(talkDir)
    const newDirName = generateNewDirName(talkDir, date)
    const newPath = path.join(rootDir, newDirName)
    
    console.log(`📅 ${dirName}`)
    console.log(`   Date: ${date.toISOString().split('T')[0]}`)
    console.log(`   New name: ${newDirName}`)
    console.log()
    
    reorganizations.push({ oldPath: talkDir, newPath, oldName: dirName, newName: newDirName })
  }
  
  if (reorganizations.length === 0) {
    console.log('All talks are already organized!')
    return
  }
  
  // Confirm reorganization
  console.log(`\n📦 Planning to reorganize ${reorganizations.length} talk(s). Continue? (y/N)`)
  
  // For automated usage, you can skip confirmation by setting environment variable
  if (process.env.AUTO_CONFIRM === 'true') {
    console.log('Auto-confirming due to AUTO_CONFIRM=true')
    executeReorganization(reorganizations)
    return
  }
  
  // Interactive confirmation
  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      const answer = chunk.trim().toLowerCase()
      if (answer === 'y' || answer === 'yes') {
        executeReorganization(reorganizations)
      } else {
        console.log('Reorganization cancelled.')
      }
      process.exit(0)
    }
  })
}

function executeReorganization(reorganizations) {
  console.log('\n🚀 Starting reorganization...\n')
  
  let successCount = 0
  for (const { oldPath, newPath, oldName, newName } of reorganizations) {
    if (moveTalkDirectory(oldPath, newPath)) {
      successCount++
    }
  }
  
  console.log(`\n✨ Reorganization complete! ${successCount}/${reorganizations.length} talks reorganized.`)
  
  if (successCount > 0) {
    console.log('\n📝 Next steps:')
    console.log('1. Update any build scripts or documentation that reference old directory names')
    console.log('2. Update git remotes if using version control')
    console.log('3. Run "pnpm install" in each talk directory if needed')
  }
}

// Run the script
main()