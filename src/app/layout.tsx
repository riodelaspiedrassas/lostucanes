import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Los Tucanes — Producción frutihortícola',
	description:
		'Producción frutihortícola con escala, calidad y trazabilidad desde el norte argentino.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${inter.className} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	)
}
