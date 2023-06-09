import { useRouter } from 'next/router'
import React from 'react'

export default function CustomMobileLink({href,title,className="",toggle}) {
	const router = useRouter()

	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<button href={href} className={`${className} relative group text-dark my-2`} onClick={handleClick}>
			{title}
			<span 
			className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
			${router.asPath === href ? 'w-full' : 'w-0'} 
			bg-dark`
			}
			>
				&nbsp;
			</span>
		</button>
	)
}
