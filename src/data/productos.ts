export interface Producto {
	nombre: string
	descripcion: string
	fotos: { src: string; alt: string }[]
	preview: { src: string; alt: string }
}
import banana1 from '@public/assets/banana1.jpeg'
import banana2 from '@public/assets/banana2.jpeg'
import banana_prev from '@public/assets/banana_preview.jpeg'
import cane1 from '@public/assets/cane1.jpeg'
import cane2 from '@public/assets/cane2.jpeg'
import cane3 from '@public/assets/cane3.jpeg'
import cane4 from '@public/assets/cane4.jpeg'
import cane5 from '@public/assets/cane5.jpeg'
import cane6 from '@public/assets/cane6.jpeg'
import cane_prev from '@public/assets/cane_preview.jpeg'
import hortaliza1 from '@public/assets/berenjena1.jpg'
import hortaliza2 from '@public/assets/berenjena2.jpg'
import hortaliza3 from '@public/assets/berenjena3.jpg'
import hortaliza4 from '@public/assets/zapallito1.jpg'
import hortaliza_prev from '@public/assets/hortalizas_preview.jpg'
import hort_especiales from '@public/assets/ajies.jpg'
import hort_especiales_prev from '@public/assets/ajies_preview.jpg'
import mango1 from '@public/assets/mango1.jpg'
import mango_prev from '@public/assets/mango_preview.jpg'
import missing from '@public/assets/missing.jpg'
import pimiento1 from '@public/assets/pimiento1.jpeg'
import pimiento2 from '@public/assets/pimiento2.jpeg'
import pimiento3 from '@public/assets/pimiento3.jpeg'
import pimiento_prev from '@public/assets/pimiento_preview.jpeg'
import tomate1 from '@public/assets/cherry1.jpeg'
import tomate2 from '@public/assets/cherry2.jpg'
import tomate3 from '@public/assets/cherry3.jpeg'
import tomate4 from '@public/assets/perita1.jpeg'
import tomate5 from '@public/assets/perita2.jpeg'
import tomate6 from '@public/assets/perita3.jpeg'
import tomate_prev from '@public/assets/tomate_preview.jpeg'
//templates
import fruta_esp1 from '@public/assets/carambola_template.jpg'
import fruta_esp2 from '@public/assets/lichi_template.jpg'
import fruta_esp_prev from '@public/assets/frutas_preview.jpg'
type imageType = {
	src: string
	type: productType
}
type productType =
	| 'tomate'
	| 'pimiento'
	| 'banana'
	| 'hortaliza'
	| 'mango'
	| 'cane'
	| 'special_h'
	| 'special_f'
	| 'null'
const imagenes: imageType[] = [
	{ src: tomate1.src, type: 'tomate' },
	{ src: tomate2.src, type: 'tomate' },
	{ src: tomate3.src, type: 'tomate' },
	{ src: tomate4.src, type: 'tomate' },
	{ src: tomate5.src, type: 'tomate' },
	{ src: tomate6.src, type: 'tomate' },
	{ src: pimiento1.src, type: 'pimiento' },
	{ src: pimiento2.src, type: 'pimiento' },
	{ src: pimiento3.src, type: 'pimiento' },
	{ src: banana1.src, type: 'banana' },
	{ src: banana2.src, type: 'banana' },
	{ src: hortaliza1.src, type: 'hortaliza' },
	{ src: hortaliza2.src, type: 'hortaliza' },
	{ src: hortaliza3.src, type: 'hortaliza' },
	{ src: hortaliza4.src, type: 'hortaliza' },
	{ src: mango1.src, type: 'mango' },
	{ src: hort_especiales.src, type: 'special_h' },
	{ src: cane1.src, type: 'cane' },
	{ src: cane2.src, type: 'cane' },
	{ src: cane3.src, type: 'cane' },
	{ src: cane4.src, type: 'cane' },
	{ src: cane5.src, type: 'cane' },
	{ src: cane6.src, type: 'cane' },
	{ src: fruta_esp1.src, type: 'special_f' },
	{ src: fruta_esp2.src, type: 'special_f' },
]

const getImage = (type: productType): Producto['fotos'] => {
	const target = imagenes.filter((e) => e.type === type)
	if (!target.length) return [{ src: missing.src, alt: 'missing' }]
	const mapped: Producto['fotos'] = []
	target.forEach((e, ind) =>
		mapped.push({ src: e.src, alt: `${e.type}_${ind}` }),
	)
	return mapped
}

export const productos: Producto[] = [
	{
		nombre: 'Tomate',
		descripcion:
			'Producción a campo e invernadero. Variedades redondo, pera y cherry. Disponibilidad extendida durante el año y enfoque en calidad comercial y rendimiento.',
		fotos: getImage('tomate'),
		preview: {
			src: tomate_prev.src,
			alt: 'tomate',
		},
	},
	{
		nombre: 'Pimiento',
		descripcion:
			'Producción en invernaderos bajo manejo intensivo, con alta uniformidad, calidad y una oferta orientada a mercados exigentes.',
		fotos: getImage('pimiento'),
		preview: {
			src: pimiento_prev.src,
			alt: 'pimiento',
		},
	},
	{
		nombre: 'Hortalizas a campo',
		descripcion:
			'Producción con cosecha continua, buen volumen y frescura, permitiendo una oferta dinámica y flexible según la demanda.',
		fotos: getImage('hortaliza'),
		preview: {
			src: hortaliza_prev.src,
			alt: 'hortalizas',
		},
	},
	{
		nombre: 'Mango',
		descripcion:
			'Producción en finca especializada, con variedades Tommy Atkins y Osteen. Fruta de calidad comercial y ventana de cosecha estacional.',
		fotos: getImage('mango'),
		preview: {
			src: mango_prev.src,
			alt: 'mango',
		},
	},
	{
		nombre: 'Banana',
		descripcion:
			'Base histórica del sistema productivo. Manejo orientado a continuidad, calidad y consistencia como producto clave de la empresa.',
		fotos: getImage('banana'),
		preview: {
			src: banana_prev.src,
			alt: 'banana_prev',
		},
	},
	{
		nombre: 'Caña de azúcar',
		descripcion:
			'Producción en escala, con variedades adaptadas a la zona y manejo eficiente como parte estructural del sistema productivo.',
		fotos: getImage('cane'),
		preview: {
			src: cane_prev.src,
			alt: 'sugar cane',
		},
	},
	{
		nombre: 'Hortalizas especiales',
		descripcion:
			'Producción diversificada de hortalizas especiales orientadas a nichos de mercado, que incluye distintas variedades de ajíes, berenjenas y pimientos no convencionales.',
		fotos: getImage('special_h'),
		preview: {
			src: hort_especiales_prev.src,
			alt: 'ajies',
		},
	},
	{
		nombre: 'Frutas especiales',
		descripcion:
			'Producción proyectada de frutas especiales orientadas a diversificación y nuevos mercados, incluyendo cultivos como lichi y carambola, con enfoque en adaptación a la región y desarrollo de oferta diferenciada.',
		fotos: getImage('special_f'),
		preview: {
			src: fruta_esp_prev.src,
			alt: 'frutas especiales',
		},
	},
]
