import React from 'react'

export default function Layout({children, className=""}) {
	return (
		<div className={`w-full h-full inline-block p-6 
		md:pt-[80px] md:px-10
		lg:!pt-[90px] lg:pb-24 
		xl:!pb-28 
		${className} `}>
			{children}
		</div>
	)
}
