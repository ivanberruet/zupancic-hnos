import AnimatedText from "@amigos/components/AnimatedText";
import Layout from "@amigos/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
		<>
			<Head>
			<title>Estudio Zupancic | Inicio</title>
        <meta name="description" content="Generated by create next app" />
			</Head>
			<main className="flex flex-col min-h-screen pt-[60px] md:pt-[80px] lg:pt-[90px] bg-home bg-cover bg-center text-light">
				<Layout className="pt-24 lg:pt-32 xl:!pt-36"
				>
					<div className="w-full pl-6 flex flex-col gap-10 xl:gap-16">
						<p className="flex flex-col w-fit md:flex-row border-b-4 border-primary pb-2">
							<span className="text-4xl font-bold xl:text-5xl">
								{/* <span className="text-primary">E</span>STUDIO */}
								ESTUDIO
							</span>
							<span className="text-4xl font-bold md:ml-5 xl:text-5xl">
								{/* <span className="text-primary">Z</span>UPANCIC */}
								ZUPANCIC
							</span>
						</p>
						<AnimatedText text="Asesoramiento contable impositivo" className="w-full font-bold text-4xl xl:text-5xl" />
						<Link href={"/about"} className="px-6 py-2 bg-primary/90 w-fit xl:px-8 xl:py-4 hover:underline underline-offset-2">
							Más información
						</Link>
					</div>
				</Layout>
			</main>
		</>
  )
}
