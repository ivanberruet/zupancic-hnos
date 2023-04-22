import React from 'react'

export default function Layout({children, className=""}) {
	return (
		<div className={`w-full h-full inline-block px-6 ${className} `}>
			{children}
		</div>
	)
}
