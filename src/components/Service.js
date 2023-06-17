import React from 'react'
import {motion} from "framer-motion"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

export default function Service({title, content, img, className=""}) {
	return (
		<motion.li className={`relative w-full ${className}`}
		initial={{y:50}}
		whileInView={{y:0}}
		transition={{duration:0.5, ease:"easeInOut"}}
		viewport={{once:true}}
		>
			<Accordion className='bg-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-primary' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='font-bold text-lg xl:text-2xl'>{title}</Typography>
        </AccordionSummary>

        <AccordionDetails className='flex flex-col gap-6 overflow-hidden'>
          <Typography className='whitespace-pre-line text-justify lg:w-full xl:text-lg'>{content}</Typography>
					{/* <div className='w-full hidden lg:inline-block'>
						<Image src={img} alt="accounting" className=' w-full h-auto object-cover'/>
					</div> */}
        </AccordionDetails>
      </Accordion>
		</motion.li>
	)
}
