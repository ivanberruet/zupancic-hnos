import AnimatedText from '@amigos/components/AnimatedText'
import Layout from '@amigos/components/Layout'
import Head from 'next/head'
import React from 'react'

export default function About() {
	return (
		<>
			<Head>
				<title>Zupancic Hnos. | Quiénes somos</title>
				<meta name="description" content="description"/>
			</Head>
			<main className="flex flex-col min-h-screen text-dark pt-[60px] md:pt-[80px] lg:pt-[90px]">
				<Layout className='pt-[60px] xl:!pt-28'>
					<AnimatedText text="¿Quiénes somos?" className='text-dark text-center text-4xl xl:text-5xl'/>
					<div className='w-full h-[300px] mx-auto my-10 bg-about bg-cover bg-center overflow-hidden'>
					</div>
					<div className='mt-12 flex flex-col gap-2 text-dark text-lg xl:w-[1200px] xl:text-xl'>
						<p>
							Somos un estudio contable formado por dos hermanos especializados en diferentes áreas de las finanzas y la contabilidad, lo que nos permitió complementarnos y formar un equipo sólido y eficiente. Juntos, trabajamos en el campo de la contabilidad y las finanzas, brindando servicios de asesoría a empresas y particulares.
							Nos enorgullece ofrecer soluciones personalizadas y cercanas a nuestros clientes. En nuestro estudio, valoramos la honestidad, la integridad y la transparencia. Trabajamos de manera cercana con cada uno de ellos para comprender sus necesidades y ayudarles a alcanzar sus objetivos. Cada cliente es único y creemos en la importancia de la atención personalizada y el servicio de alta calidad.
						</p>
						<p>
							Como profesionales en el campo de las finanzas y la contabilidad, nos mantenemos actualizados con las últimas regulaciones y leyes fiscales para garantizar que nuestros clientes estén en cumplimiento con las normativas aplicables.
							En definitiva, somos dos profesionales apasionados por nuestro trabajo y comprometidos con brindar el mejor servicio posible a nuestros clientes. Si está buscando un equipo de profesionales dedicados y eficientes para ayudarlo en sus necesidades contables y financieras, no dude en contactarnos. Estamos aquí para ayudarlo en todo lo que necesite.
						</p>
					</div>
				</Layout>
			</main>
		</>
	)
}
