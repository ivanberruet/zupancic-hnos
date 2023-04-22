import React from 'react'
import Image from 'next/image'
import InstragramLogo from "../../public/instagram.svg"

export default function Instagram({className}) {
	return (
		<Image src={InstragramLogo} alt='instagram' className={`${className}}`}/>
	)
}
