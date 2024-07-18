import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import WhatsApp from './WhatsApp'
import Instagram from './Instagram'
import Logo from './Logo'

export default function Footer() {
	return (
		<footer className='w-full border-t-2 border-solid border-primary font-medium text-xs text-light bg-dark'>
			<div className='flex gap-3 items-center justify-between flex-col p-6
			md:flex-row md:items-start md:gap-10'
			>
				<Logo className="!w-16 !h-16 self-center md:hidden lg:!flex" />
				<ul className='flex flex-col gap-1 items-center text-xs md:items-start'>
					<div className='font-bold underline underline-offset-2 mb-2'>Servicios:</div>
					<Link href={"/services"} className=''>Asesoramiento contable</Link>
					<Link href={"/services"} className=''>Asesoramiento fiscal</Link>
					<Link href={"/services"} className=''>Asesoramiento financiero</Link>
					<Link href={"/services"} className=''>Asesoramiento en gestión de proyectos y negocios</Link>
					<Link href={"/services"} className=''>Asesoramiento en recursos humanos</Link>
					<Link href={"/services"} className=''>Auditorías</Link>
					<Link href={"/services"} className=''>Análisis y reportes de gestión</Link>
				</ul>
				<ul className=' w-max flex flex-col gap-1 items-center text-xs md:items-start md:flex-auto md:flex-shrink-0 lg:!flex-none'>
					<div className='font-bold underline underline-offset-2 mb-2'>Información:</div>
					<Link href={process.env.NEXT_PUBLIC_WP_LINK} target='_blank'>
						<p className=''>Teléfono: +54 9 11 7364-7773</p>
					</Link>
					<Link href="mailto:info@zupancichnos.com.ar">
						<p className=''>Mail: info@estudiozupancic.com.ar</p>
					</Link>
					<p className=''>Ubicación: Buenos Aires, Argentina</p>
					<ul className='flex gap-1'>
						<Link href={process.env.NEXT_PUBLIC_WP_LINK} target='_blank' >
							<WhatsApp className='w-6 h-6' />
						</Link>
						<Link href="https://www.instagram.com/zupancichnos/" target='_blank'>
							<Instagram className='w-6 h-6' />
						</Link>
					</ul>

				</ul>
					<span>{new Date().getFullYear()} &copy; Todos los derechos reservados.</span>
			</div>
		</footer>	
	)
}
