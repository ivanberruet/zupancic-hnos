import { useRouter } from 'next/router'
import React from 'react'

export default function CustomLink({href,title,className=""}){
	const router = useRouter()

	return (
		<a href={href} className={`${className} relative group
		lg:text-base font-bold`
		}>
			{title}
			<span className={`
			h-[1px] inline-block bg-dark 
			absolute left-0 -bottom-0.5 
			group-hover:w-full transition-[width] ease duration-300 
			${router.asPath === href ? 'w-full' : 'w-0'} bg-dark`}
			>
				&nbsp;
			</span>
		</a>
	)
}

