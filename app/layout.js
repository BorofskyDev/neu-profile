import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Borofsky | Creative Fullstack Web Developer',
  description:
    "Fullstack developer with a passion for creating beautiful, functional, and accessible web applications. I specialize in Nextjs, SCSS, and MongoDB. I love to create and collaborate. Let's make something beautiful together.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
