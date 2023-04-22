import React from 'react'
import wpLogo from '../../public/wp.svg'
import Image from 'next/image'

export default function WhatsApp({className}) {
	return (
		<Image src={wpLogo} alt='whatsApp' className={`w-14 h-14 ${className}`}/>
		)
}
