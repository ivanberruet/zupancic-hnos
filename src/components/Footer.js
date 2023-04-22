import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import WhatsApp from './WhatsApp'
import Instagram from './Instagram'

export default function Footer() {
	return (
		<footer className='w-full border-t-2 border-soilid border-light font-medium text-xs text-light bg-dark'>
			<Layout className='flex gap-3 items-center justify-between flex-col py-6'>
					<div className='text-lg text-primary/90 font-bold'>Zupancic Hermanos</div>
				<ul className='flex flex-col gap-1 items-center text-xs'>
					<div className='font-bold underline underline-offset-2 mb-2'>Servicios:</div>
					<Link href={"/services"} className='italic'>Auditorías</Link>
					<Link href={"/services"} className='italic'>Asesoramiento fiscal</Link>
					<Link href={"/services"} className='italic'>Asesoramiento contable</Link>
					<Link href={"/services"} className='italic'>Asesoramiento financiero</Link>
					<Link href={"/services"} className='italic'>Análisis y reportes de gestión</Link>
					<Link href={"/services"} className='italic'>Asesoramiento en recursos humanos</Link>
					<Link href={"/services"} className='italic'>Asesoramiento en gestión de proyectos y negocios</Link>
				</ul>
				<ul className='flex flex-col gap-1 items-center text-xs'>
					<div className='font-bold underline underline-offset-2 mb-2'>Información:</div>
					<p className='italic'>Teléfono: (011) 11-31084537</p>
					<p className='italic'>Mail: zupancichnos6@gmail.com</p>
					<p className='italic'>Ubicación: Buenos Aires</p>
				</ul>
				<ul className='flex gap-1'>
					<Link href={"https://wa.link/xevqad"} target='_blank' >
						<WhatsApp className='w-6 h-6' />
					</Link>
					<Link href="https://www.instagram.com/zupancichnos/" target='_blank'>
						<Instagram className='w-6 h-6' />
					</Link>
				</ul>
				<span>{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
			</Layout>
		</footer>	
	)
}
