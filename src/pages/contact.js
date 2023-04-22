import AnimatedText from '@amigos/components/AnimatedText'
import Layout from '@amigos/components/Layout'
import Head from 'next/head'
import React from 'react'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/Ai'
import {FiMapPin} from 'react-icons/fi'

export default function Contact() {
	return (
		<>
			<Head>
				<title>Zupancic Hnos. | Quiénes somos</title>
				<meta name="description" content="description"/>
			</Head>
			<main className="flex flex-col min-h-screen pt-20  text-dark">
				<Layout className='pt-[60px] items-center'>
					<AnimatedText text="Contáctenos" className='text-dark text-center text-4xl'/>
					<div className='mt-12 mb-6 flex flex-col gap-6 text-dark text-lg'>
						<p className='font-medium'>
							Si tiene alguna pregunta o desea obtener más información sobre nuestros servicios, no dude en ponerse en contacto con nosotros. Puede hacerlo a través de whatsapp, correo electrónico, teléfono o mediante nuestro formulario de contacto en línea. Estamos comprometidos a responder a todas las consultas en el menor tiempo posible. En el estudio contable Zupancic, estamos listos para ayudarlo.
						</p>
						<div className='bg-dark/20 mt-6 p-4 rounded-md flex flex-col gap-2 shadow-xl'>
							<h2 className='font-bold text-xl mb-4'>Consúltenos Directamente</h2>
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
						<form className='bg-dark/20 shadow-xl mt-6 p-4 rounded-md flex flex-col' action="/" method='POST'>
							<h2 className='font-bold text-xl mb-4'>Enviénos un Mensaje</h2>
							
							<label htmlFor="first-name">Nombre</label>
							<input className='bg-transparent border border-transparent border-b-dark border-b-1 mb-6' type="text" id='first-name'/>

							<label htmlFor="last-name">Apellido</label>
							<input className='bg-transparent border border-transparent border-b-dark border-b-1 mb-6' type="text" id='last-name'/>

							<label htmlFor="mail">Mail</label>
							<input className='bg-transparent border border-transparent border-b-dark border-b-1 mb-6' type="text" id='mail'/>

							<label htmlFor="phone">Teléfono</label>
							<input className='bg-transparent border border-transparent border-b-dark border-b-1 mb-6' type="text" id='phone'/>

							<label htmlFor="content">Consulta</label>
							<textarea className='bg-transparent border border-transparent border-b-dark border-b-1 mb-6' type="text" id='content'/>
						</form>
					</div>
				</Layout>
			</main>
		</>
		)
}