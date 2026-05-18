'use client'

import { useState } from 'react'
import { productos, type Producto } from '@/data/productos'
import ProductModal from '@/components/ProductModal/ProductModal'
import styles from './Productos.module.css'
import Image from 'next/image'

export default function Productos() {
	const [selected, setSelected] = useState<Producto | null>(null)

	return (
		<>
			<section className="section section-white" id="productos">
				<div className="container">
					<div className="section-header">
						<div>
							<div className="kicker">Productos</div>
							<h2>Producción diversificada con calidad y continuidad</h2>
						</div>
					</div>
					<p className="lead" style={{ maxWidth: '820px' }}>
						Nuestra estructura productiva combina sistemas a campo e
						invernaderos, permitiendo ofrecer volumen, estabilidad y adaptación
						a las necesidades comerciales.
					</p>

					<div className={`cards-3 ${styles.grid}`}>
						{productos.map((producto) => (
							<article
								className={`card ${styles.card}`}
								key={producto.nombre}
								onClick={() => setSelected(producto)}
								role="button"
								tabIndex={0}
								aria-label={`Ver fotos de ${producto.nombre}`}
								onKeyDown={(e) => e.key === 'Enter' && setSelected(producto)}
							>
								<div className={styles.cardImage}>
									<div className={styles.cardImageOverlay}>
										<Image
											src={producto.preview.src}
											alt={producto.preview.alt}
											width={380}
											height={165}
										/>
									</div>
								</div>
								<div className={`card-body ${styles.cardBody}`}>
									<div className={styles.cardMeta}>
										<h3>{producto.nombre}</h3>
										<span className={styles.photoCount}>
											{producto.fotos.length}{' '}
											{producto.fotos.length == 1 ? 'Foto' : 'Fotos'}
										</span>
									</div>
									<p>{producto.descripcion}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<ProductModal
				producto={selected}
				onClose={() => setSelected(null)}
				key={selected?.nombre || ''}
			/>
		</>
	)
}
