import AnimatedText from '@amigos/components/AnimatedText'
import Layout from '@amigos/components/Layout'
import Service from '@amigos/components/Service'
import Head from 'next/head'
import React from 'react'
import service1 from '../../public/service1.jpg'
import service2 from '../../public/service2.jpg'
import service3 from '../../public/service3.jpg'
import service4 from '../../public/service4.jpg'
import service5 from '../../public/service5.jpg'
import service6 from '../../public/service6.jpg'
import service7 from '../../public/service7.jpg'

export default function Services() {
	return (
		<>
			<Head>
				<title>Estudio Zupancic | Servicios</title>
				<meta name="description" content="description"/>
			</Head>
			<main className="flex flex-col min-h-screen text-dark pt-[60px] md:pt-[80px] lg:pt-[90px]">
			<Layout className='pt-[60px] xl:!pt-28'>
					<AnimatedText text="Nuestros servicios" className='text-dark text-center text-4xl xl:text-5xl'/>
					<p className='mt-12 text-lg font-medium xl:text-xl'>
						En nuestro estudio contable, ofrecemos una amplia variedad de servicios para ayudar a las personas y las empresas a gestionar sus finanzas de manera eficiente y efectiva. Nuestros servicios están diseñados para satisfacer las necesidades específicas de cada cliente y están respaldados por nuestro conocimiento profesional, capacidad y experiencia en el campo contable y financiero. A continuación, encontrarás una lista detallada de los servicios que ofrecemos:
					</p>
					<ul className='mt-12 mb-6 flex flex-col gap-10
					lg:grid lg:grid-cols-2'>
						<Service 
						title={"Asesoramiento contable"} 
						content={"El servicio de asesoramiento contable abarca la gestión y el control de los registros contables, así como la elaboración de estados financieros y la presentación de impuestos. En este sentido, desde nuestro estudio nos encargamos de llevar a cabo todas las tareas necesarias para que nuestros clientes cumplan con sus obligaciones contables y fiscales, asegurando la transparencia y la confidencialidad de la información financiera."}
						img={service1}
						/>
						<Service 
						title={"Asesoramiento fiscal"} 
						content={"El servicio de asesoramiento fiscal se enfoca en la optimización de la carga impositiva de nuestros clientes. Para ello, analizamos las necesidades de cada uno y ofrecemos un asesoramiento personalizado en materia fiscal, con el objetivo de minimizar los costos tributarios y maximizar los beneficios. Asimismo, nos encargamos de la presentación de impuestos y de la defensa de los intereses de nuestros clientes frente a la Administración Tributaria."}
						img={service2}
						/>
						<Service 
						title={"Asesoramiento financiero"} 
						content={"El servicio de asesoramiento financiero incluye la elaboración de planes de negocio, la gestión, la planificación financiera, entre otros. Estudiamos y analizamos la situación de cada cliente y ofrecemos un asesoramiento personalizado para mejorar su rendimiento. Brindamos herramientas y estrategias para la toma de decisiones."}
						img={service3}
						/>
						<Service 
						title={"Asesoramiento en gestión de proyectos y negocios"} 
						content={"El servicio de asesoramiento en gestión de proyectos incluye la asesoría en la planificación y ejecución de proyectos, la gestión de presupuestos y costos, la identificación de oportunidades, mejoras, entre otros. Brindamos un enfoque integral para la gestión de proyectos, ayudando a nuestros clientes a cumplir con sus objetivos de negocio de manera efectiva y eficiente."}
						img={service4}
						/>
						<Service 
						title={"Asesoramiento en recursos humanos"} 
						content={"En el servicio de asesoramiento en recursos humanos nos encargamos de todos los aspectos relacionados con la nómina de nuestros clientes, incluyendo la gestión de los registros de empleados, la liquidación de sueldos y la preparación de las cargas sociales correspondientes.\n Nos aseguramos de que nuestros clientes cumplan con todas las normativas y regulaciones en materia laboral y previsional, evitando así posibles multas y sanciones."}
						img={service6}
						/>
						<Service 
						title={"Auditorías"} 
						content={"El servicio de auditoría consiste en la revisión de los estados financieros de una empresa y la evaluación de los controles internos, con el objetivo de garantizar la transparencia y la fiabilidad de la información financiera. Llevamos a cabo auditorías financieras y de sistemas, para identificar riesgos y oportunidades de mejora en la gestión financiera y de negocios."}
						img={service7}
						/>
						<Service className="col-span-2"
						title={"Análisis y reportes de gestión"} 
						content={"El servicio de análisis y reportes de gestión se enfoca en ayudar a nuestros clientes a entender su desempeño y tomar decisiones a través del análisis de datos y la elaboración de informes.\n Se analizan datos financieros, operativos y de mercado para presentarlos de manera clara y concisa en informes personalizados que contengan información relevante y útil para la toma de decisiones.\n Entre las actividades que realizamos en este servicio se encuentran el análisis de indicadores financieros, la elaboración de informes de desempeño, la identificación de oportunidades de mejora y la elaboración de planes estratégicos. Además, nos encargamos de monitorear y actualizar regularmente la información para que nuestros clientes siempre tengan acceso a los datos más actualizados.\n Los informes que elaboramos pueden ser mensuales, trimestrales, semestrales o anuales, y están diseñados para satisfacer las necesidades específicas de cada empresa, con el objetivo de aumentar la rentabilidad, mejorar la eficiencia y reducir los costos."}
						img={service5}
						/>
					</ul>
				</Layout>
			</main>
		</>
	)
}
