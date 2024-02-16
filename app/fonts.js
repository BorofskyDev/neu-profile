import {
  Inconsolata,
  Inter,
  Permanent_Marker,
  Playfair_Display,
} from 'next/font/google'

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-link',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400'],
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400', '500', '600', '700', '800', '900'],
})
