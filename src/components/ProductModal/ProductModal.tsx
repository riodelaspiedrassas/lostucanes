'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import type { Producto } from '@/data/productos'
import styles from './ProductModal.module.css'

interface Props {
	producto: Producto | null
	onClose: () => void
}

export default function ProductModal({ producto, onClose }: Props) {
	const [current, setCurrent] = useState(0)
	const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null)

	const next = useCallback(() => {
		if (!producto) return
		setAnimDir('right')
		setTimeout(() => setAnimDir(null), 300)
		setCurrent((c) => (c + 1) % producto.fotos.length)
	}, [producto])

	const prev = useCallback(() => {
		if (!producto) return
		setAnimDir('left')
		setTimeout(() => setAnimDir(null), 300)
		setCurrent((c) => (c - 1 + producto.fotos.length) % producto.fotos.length)
	}, [producto])

	// Cerrar con Escape
	useEffect(() => {
		if (!producto) return
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
			if (e.key === 'ArrowRight') next()
			if (e.key === 'ArrowLeft') prev()
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [producto, next, onClose, prev])

	// Bloquear scroll del body
	useEffect(() => {
		document.body.style.overflow = producto ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [producto])

	if (!producto) return null

	const foto = producto.fotos[current]

	return (
		<div
			className={styles.backdrop}
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label={`Galería de ${producto.nombre}`}
		>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				{/* Header */}
				<div className={styles.header}>
					<div>
						<p className={styles.counter}>
							{current + 1} / {producto.fotos.length}
						</p>
						<h2 className={styles.title}>{producto.nombre}</h2>
					</div>
					<button
						className={styles.closeBtn}
						onClick={onClose}
						aria-label="Cerrar"
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path
								d="M4 4l12 12M16 4L4 16"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>

				{/* Carrusel */}
				<div className={styles.carouselWrapper}>
					{/* Imagen */}
					<div
						className={`${styles.imageWrap} ${
							animDir === 'right'
								? styles.slideRight
								: animDir === 'left'
									? styles.slideLeft
									: ''
						}`}
					>
						<Image
							src={foto.src}
							alt={foto.alt}
							fill
							className={styles.image}
							sizes="(max-width: 720px) 100vw, 800px"
							priority
						/>
					</div>

					{/* Flechas */}
					{producto.fotos.length > 1 && (
						<>
							<button
								className={`${styles.arrow} ${styles.arrowLeft}`}
								onClick={prev}
								aria-label="Foto anterior"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M13 4l-6 6 6 6"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<button
								className={`${styles.arrow} ${styles.arrowRight}`}
								onClick={next}
								aria-label="Foto siguiente"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M7 4l6 6-6 6"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</>
					)}
				</div>

				{/* Descripción + dots */}
				<div className={styles.footer}>
					<p className={styles.desc}>{producto.descripcion}</p>
					{producto.fotos.length > 1 && (
						<div className={styles.dots}>
							{producto.fotos.map((_, i) => (
								<button
									key={i}
									className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
									onClick={() => setCurrent(i)}
									aria-label={`Ir a foto ${i + 1}`}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
