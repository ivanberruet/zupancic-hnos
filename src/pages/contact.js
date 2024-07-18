import AnimatedText from '@amigos/components/AnimatedText'
import Layout from '@amigos/components/Layout'
import { sendContactForm } from '@amigos/lib/api'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'

const initValues = {Nombre:"",Apellido:"",Email:"",Telefono:"",Mensaje:""}
const initState = {values: initValues}

export default function Contact() {
	
	const router = useRouter()
	const [state, setState] = useState(initState)
	const {values} = state

	const handleChange = ({target}) => 
		setState((prevState)=>({
			...prevState,
			values:{
				...prevState.values,
				[target.name]: target.value
			}
		}))

	
	const onSubmit = async (e)=>{
		e.preventDefault()

		setState((prevState)=>({
			...prevState,
			isLoading: true,
		}))
		
		try {
			await sendContactForm(values)
		} catch (error) {
			console.log(error)
		}
		alert("Mensaje enviado con éxito")
		router.push("/")
	}

	return (
		<>
			<Head>
				<title>Estudio Zupancic | Contacto</title>
				<meta name="description" content="description"/>
			</Head>
			<main className="flex flex-col min-h-screen text-dark pt-[60px] md:pt-[80px] lg:pt-[90px]">
				<Layout className='pt-[60px] xl:!pt-28'>
					<AnimatedText text="Contáctenos" className='text-dark text-center text-4xl'/>
					<div className='mt-6 mb-6 flex flex-col items-center gap-6 text-dark text-lg md:mt-12'>
						<p className='font-medium text-justify xl:text-xl'>
							Si tiene alguna pregunta o desea obtener más información sobre nuestros servicios, no dude en ponerse en contacto con nosotros. Puede hacerlo a través de whatsapp, correo electrónico, teléfono o mediante nuestro formulario de contacto en línea. Estamos comprometidos a responder a todas las consultas en el menor tiempo posible. En el estudio contable Zupancic, estamos listos para ayudarlo.
						</p>
						<div className='w-full lg:w-[400px] bg-dark/20 mt-6 p-4 rounded-md flex flex-col gap-2 shadow-xl'>
							<h2 className='font-bold text-xl mb-4 xl:text-2xl'>Consúltenos Directamente</h2>
							<div className='flex items-center gap-2'>
								<AiOutlinePhone className='text-primary' /> +54 9 11 7364-7773
							</div>
							<div className='flex items-center gap-2'>
								<AiOutlineMail className='text-primary' /> <Link href="mailto:info@zupancichnos.com.ar">info@estudiozupancic.com.ar</Link>
							</div>
							<div className='flex items-center gap-2'>
								<FiMapPin className='text-primary' /> Buenos Aires, Argentina
							</div>
						</div>
						<form className='w-full lg:w-[60%] mx-auto shadow-xl mt-6 p-4 rounded-md flex flex-col' onSubmit={onSubmit}>
							<h2 className='font-bold text-xl mb-4 self-center  xl:text-2xl'>O complete el formulario de contacto</h2>
							
							<label className='font-semibold' htmlFor="first-name">Nombre:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' 
								id='first-name'
								type="text" 
								name='Nombre' 
								defaultValue={values.firstName} 
								onChange={e => handleChange(e)}
								required={true}/>

							<label className='font-semibold' htmlFor="last-name">Apellido:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' 
								id='last-name'
								type="text" 
								name='Apellido' 
								defaultValue={values.lastName} 
								onChange={e => handleChange(e)}
								required={true}/>

							<label className='font-semibold' htmlFor="mail">Mail:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' 
								id='mail'
								type="text" 
								name='Email' 
								defaultValue={values.email} 
								onChange={e => handleChange(e)}
								required={true}/>

							<label className='font-semibold' htmlFor="phone">Teléfono:</label>
							<input className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' 
								id='phone'
								type="text" 
								name='Telefono' 
								defaultValue={values.phone} 
								onChange={e => handleChange(e)}
								required={true}/>

							<label className='font-semibold' htmlFor="content">Consulta:</label>
							<textarea className='bg-dark/10 rounded-md border border-transparent mb-6 px-2 py-1 focus-visible:outline-none text-base' 
								id='content'
								type="text" 
								name='Mensaje' 
								defaultValue={values.message} 
								onChange={e => handleChange(e)}
								required={true}/>
						
							<button
							type='submit' 
							className='bg-primary w-fit self-center px-6 py-2 rounded-lg text-light hover:scale-105'
							onSubmit={()=>onSubmit()}
							>Enviar</button>

						</form>
					</div>
				</Layout>
			</main>
		</>
		)
}