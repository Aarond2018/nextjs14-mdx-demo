import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='p-4 border-b flex gap-4 items-center'>
      <Link href="/" className='text-xl font-semibold'>My-App</Link>
      <Link href="/blog">Blog</Link>
    </header>
  )
}