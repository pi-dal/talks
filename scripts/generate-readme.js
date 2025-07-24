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
 * Find all talk directories and extract metadata
 */
function getTalks() {
  const talks = []
  const items = fs.readdirSync(rootDir)
  
  for (const item of items) {
    const itemPath = path.join(rootDir, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'scripts' && item !== 'node_modules' && item !== 'dist') {
      const slidesPath = path.join(itemPath, 'slides.md')
      if (fs.existsSync(slidesPath)) {
        try {
          const content = fs.readFileSync(slidesPath, 'utf8')
          const frontmatter = parseFrontmatter(content)
          
          // Extract date from directory name or frontmatter
          const dateMatch = item.match(/^(\d{4}-\d{2}-\d{2})/)
          const date = dateMatch ? dateMatch[1] : frontmatter.date || 'Unknown'
          
          talks.push({
            dir: item,
            title: frontmatter.title || item,
            date: date,
            slug: frontmatter.slug || item.replace(/^\d{4}-\d{2}-\d{2}-/, ''),
            info: frontmatter.info || '',
            coverAuthor: frontmatter.coverAuthor || '',
            theme: frontmatter.theme || 'default'
          })
        } catch (error) {
          console.warn(`Warning: Could not parse ${slidesPath}:`, error.message)
        }
      }
    }
  }
  
  // Sort by date (newest first)
  return talks.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Group talks by year
 */
function groupTalksByYear(talks) {
  const groups = {}
  
  for (const talk of talks) {
    const year = talk.date.split('-')[0]
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(talk)
  }
  
  return groups
}

/**
 * Generate README content
 */
function generateReadme() {
  const talks = getTalks()
  const groupedTalks = groupTalksByYear(talks)
  const domain = 'talks.pi-dal.com'
  
  let readme = `# Talks

My presentation slides, built with [Slidev](https://sli.dev).

## 🎤 Talks
`

  // Generate talks by year
  const years = Object.keys(groupedTalks).sort((a, b) => b - a) // Newest first
  
  for (const year of years) {
    readme += `\n### ${year}\n\n`
    
    for (const talk of groupedTalks[year]) {
      const url = `https://${domain}/${talk.dir}/`
      readme += `- [**${talk.title}**](${url})`
      
      if (talk.date !== 'Unknown') {
        readme += ` - ${talk.date}`
      }
      
      readme += '\n'
      
      // Add info/description if available
      if (talk.info) {
        const info = talk.info.replace(/^##\s*/, '').split('\n')[0].trim()
        if (info && info !== talk.title && info !== '|') {
          readme += `  <br><small><em>${info}</em></small>\n`
        }
      }
      
      readme += '\n'
    }
  }

  // Add development section
  readme += `
## 🛠️ Development

### Setup
\`\`\`bash
# Install dependencies
pnpm install

# Organize talks by metadata
pnpm run organize

# Start development server
pnpm run dev
\`\`\`

### Build & Deploy
\`\`\`bash
# Build all talks
pnpm run build:all

# Deploy to Cloudflare Pages
# (Automatically triggered on git push)
\`\`\`

## 🌐 Live Site

Visit [${domain}](https://${domain}) to view all presentations.

## 📝 License

Content: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)  
Code: [MIT](./LICENSE)
`

  return readme
}

/**
 * Main function
 */
function main() {
  try {
    const readmeContent = generateReadme()
    const readmePath = path.join(rootDir, 'README.md')
    
    fs.writeFileSync(readmePath, readmeContent)
    console.log('✅ README.md generated successfully!')
    
    // Also log the talks found
    const talks = getTalks()
    console.log(`📊 Found ${talks.length} talk(s):`)
    for (const talk of talks) {
      console.log(`  - ${talk.date}: ${talk.title}`)
    }
  } catch (error) {
    console.error('❌ Error generating README:', error.message)
    process.exit(1)
  }
}

// Run the script
main()