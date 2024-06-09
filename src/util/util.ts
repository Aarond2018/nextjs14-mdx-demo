
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDir = path.join(process.cwd(), 'src', 'blog-posts')

export const getPostBySlug = async (slug: string) => {
  const formattedSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDir, `${formattedSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })
  return { meta: { ...frontmatter, slug: formattedSlug }, content }
}

export const getPostsMetaData = async () => {
  const files = fs.readdirSync(rootDir)
  let posts = []
  for (const fileName of files) {
    const { meta } = await getPostBySlug(fileName)
    posts.push(meta)
  }
  return posts
}