import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.jpg'
import Link from 'next/link'

export default function Logo({className=""}) {
	return (
		<div className={`w-24 h-24 flex justify-center items-center rounded-full overflow-hidden lg:w-32 lg:h-32 hover:contrast-125 ${className}`}>
			<Link href={"/"} className='w-full h-full flex justify-center items-center'>
				<Image src={logo} alt='logo' className='w-full h-full' width={100} height={100} priority/>
			</Link>
		</div>
	)
}
