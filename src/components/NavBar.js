import React, { useState } from 'react'
import Logo from './Logo'
import {motion} from "framer-motion"
import CustomMobileLink from './CustomMobileLink'
import Link from 'next/link'
import CustomLink from './CustomLink'
import WhatsApp from './WhatsApp'
import Instagram from './Instagram'

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header
		className='fixed top-0 w-full h-[60px] p-6 font-medium text-xs flex items-center justify-between text-dark border-b-2 border-b-primary z-10 md:h-[80px] lg:h-[90px] bg-gray-200'>

			<div className='absolute left-[50%] top-3 translate-x-[-50%] bg'>
				<Logo />
			</div>

			{/*Mobile*/}
			<button className="flex flex-col justify-center items-center 
			md:hidden" 
			onClick={handleClick}
			>
				<span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
				<span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100 '}`}></span>
				<span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
			</button>

			{
				isOpen ? 
				<motion.div className="min-w-[70vw] flex flex-col justify-space-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 py-32 
				backdrop-blur-md bg-light/60 rounded-lg shadow-md"
				>
					<nav className="flex flex-col items-center justify-center text-lg">
						<CustomMobileLink href="/" title="Inicio" toggle={handleClick}/>
						<CustomMobileLink href="/about" title="Quiénes somos" toggle={handleClick}/>
						<CustomMobileLink href="/services" title="Servicios" toggle={handleClick}/>
						<CustomMobileLink href="/contact" title="Contacto" toggle={handleClick}/>
					</nav>
				</motion.div>			
				:
				null
			}
			
			{/*Desktop*/}
			<div className='w-full hidden
			md:inline-block md:text-xs
			lg:!text-base'>
				ESTUDIO CONTABLE
			</div>

			<div className="w-full hidden justify-between items-center 
			md:flex md:justify-end"
			>
				<nav>
					<CustomLink href="/" title="Inicio" className="mr-4" />
					<CustomLink href="/about" title="Quiénes somos" className="mr-4" />
					<CustomLink href="/services" title="Servicios" className="mr-4" />
					<CustomLink href="/contact" title="Contacto" className="mr-4" />
				</nav>
			</div>	

			
		</header>
	)
}
