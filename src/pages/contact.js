import AnimatedText from '@amigos/components/AnimatedText'
import Layout from '@amigos/components/Layout'
import Head from 'next/head'
import React from 'react'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'

export default function Contact() {
	return (
		<>
			<Head>
				<title>Zupancic Hnos. | Quiénes somos</title>
				<meta name="description" content="description"/>
			</Head>
			<main className="flex flex-col min-h-screen text-dark pt-[60px] md:pt-[80px] lg:pt-[90px]">
				<Layout className='pt-[60px] xl:!pt-28'>
					<AnimatedText text="Contáctenos" className='text-dark text-center text-4xl'/>
					<div className='mt-6 mb-6 flex flex-col items-center gap-6 text-dark text-lg md:mt-12'>
						<p className='font-medium xl:text-xl'>
							Si tiene alguna pregunta o desea obtener más información sobre nuestros servicios, no dude en ponerse en contacto con nosotros. Puede hacerlo a través de whatsapp, correo electrónico, teléfono o mediante nuestro formulario de contacto en línea. Estamos comprometidos a responder a todas las consultas en el menor tiempo posible. En el estudio contable Zupancic, estamos listos para ayudarlo.
						</p>
						<div className='w-full lg:w-[400px] bg-dark/20 mt-6 p-4 rounded-md flex flex-col gap-2 shadow-xl'>
							<h2 className='font-bold text-xl mb-4 xl:text-2xl'>Consúltenos Directamente</h2>
							<div className='flex items-center gap-2'>
								<AiOutlinePhone className='text-primary' /> (011) 11-31084537
							</div>
							<div className='flex items-center gap-2'>
								<AiOutlineMail className='text-primary' /> zupancichnos@gmail.com
							</div>
							<div className='flex items-center gap-2'>
								<FiMapPin className='text-primary' /> Buenos Aires
							</div>
						</div>
						<form className='w-full lg:w-[80%] mx-auto shadow-xl mt-6 p-4 rounded-md flex flex-col' action="/" method='POST'>
							<h2 className='font-bold text-xl mb-4 self-center  xl:text-2xl'>O enviénos un email</h2>
							
							<label className='font-semibold' htmlFor="first-name">Nombre:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' type="text" id='first-name'/>

							<label className='font-semibold' htmlFor="last-name">Apellido:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' type="text" id='last-name'/>

							<label className='font-semibold' htmlFor="mail">Mail:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' type="text" id='mail'/>

							<label className='font-semibold' htmlFor="phone">Teléfono:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' type="text" id='phone'/>

							<label className='font-semibold' htmlFor="content">Consulta:</label>
							<textarea className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' type="text" id='content'/>
						
							<button type='submit' className='bg-primary w-fit self-center px-6 py-2 rounded-lg text-light hover:scale-105'>Enviar</button>
						</form>
					</div>
				</Layout>
			</main>
		</>
		)
}