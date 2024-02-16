import { inter, inconsolata, permanentMarker, playfairDisplay } from './fonts'
import '@/styles/global.scss'

export const metadata = {
  title: 'Joel Borofsky | Creative Fullstack Web Developer',
  description:
    "Fullstack developer with a passion for creating beautiful, functional, and accessible web applications. I specialize in Nextjs, SCSS, and MongoDB. I love to create and collaborate. Let's make something beautiful together.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${inconsolata.variable} ${permanentMarker.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
