import nextMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

const withMDX = nextMDX({
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig)