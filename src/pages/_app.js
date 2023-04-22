import Footer from '@amigos/components/Footer'
import NavBar from '@amigos/components/NavBar'
import '@amigos/styles/globals.css'
import {Montserrat} from 'next/font/google'
import {ThemeProvider} from 'next-themes'
import Head from 'next/head'
import WhatsApp from '@amigos/components/WhatsApp'
import Link from 'next/link'


const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<title>Zupancic Hermanos</title>
			</Head>
			<main className={`${montserrat.className} relative bg-light dark:bg-dark w-full min-h-screen`}>
				<NavBar />
				<Component {...pageProps} />
				<Footer/>

				<Link href={"https://wa.link/xevqad"} className='fixed bottom-8 right-8'>
					<WhatsApp />
				</Link>

			</main>
		</>
	)
}
