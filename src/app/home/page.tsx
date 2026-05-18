import Navbar from '@/app/sections/Navbar/Navbar'
import Hero from '@/app/sections/Hero/Hero'
import Diferencial from '@/app/sections/Diferencial/Diferencial'
import QuienesSomos from '@/app/sections/QuienesSomos/QuienesSomos'
import Productos from '@/app/sections/Productos/Productos'
import Sustentabilidad from '@/app/sections/Sustentabilidad/Sustentabilidad'
import Contacto from '@/app/sections/Contacto/Contacto'
import Footer from '@/app/sections/Footer/Footer'

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Diferencial />
				<QuienesSomos />
				<Productos />
				<Sustentabilidad />
				<Contacto />
			</main>
			<Footer />
		</>
	)
}
