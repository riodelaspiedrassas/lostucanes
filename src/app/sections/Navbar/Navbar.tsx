'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
	{ href: '#inicio', label: 'Inicio' },
	{ href: '#quienes', label: 'Quiénes somos' },
	{ href: '#productos', label: 'Productos' },
	{ href: '#sustentabilidad', label: 'Sustentabilidad' },
	{ href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const close = () => {
			if (window.innerWidth > 720) setOpen(false)
		}
		window.addEventListener('resize', close)
		return () => window.removeEventListener('resize', close)
	}, [])

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [open])

	const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault()
		setOpen(false)
		const id = href.replace('#', '')
		const el = document.getElementById(id)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
			// Actualizar la URL sin forzar re-navegación
			history.replaceState(null, '', href)
		}
	}

	return (
		<>
			<header className={styles.nav}>
				<div className={`container ${styles.navInner}`}>
					<div>
						<div className={styles.brandTitle}>Los Tucanes</div>
						<div className={styles.brandSub}>Producción frutihortícola</div>
					</div>

					{/* Desktop links */}
					<nav className={styles.navLinks}>
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								onClick={(e) => scrollTo(e, l.href)}
							>
								{l.label}
							</a>
						))}
					</nav>

					{/* Botón hamburguesa */}
					<button
						className={styles.hamburger}
						onClick={() => setOpen((o) => !o)}
						aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
						aria-expanded={open}
					>
						<span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
						<span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
						<span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
					</button>
				</div>
			</header>

			{/* Overlay */}
			<div
				className={`${styles.overlay} ${open ? styles.overlayVisible : ''}`}
				onClick={() => setOpen(false)}
				aria-hidden="true"
			/>

			{/* Drawer mobile */}
			<div
				className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
				aria-hidden={!open}
			>
				<nav className={styles.drawerNav}>
					{links.map((l, i) => (
						<a
							key={l.href}
							href={l.href}
							className={styles.drawerLink}
							onClick={(e) => scrollTo(e, l.href)}
							style={{ transitionDelay: open ? `${i * 50 + 80}ms` : '0ms' }}
						>
							{l.label}
						</a>
					))}
				</nav>
				<div className={styles.drawerFooter}>
					Urundel, Salta · El Bananal, Yuto, Jujuy
				</div>
			</div>
		</>
	)
}
