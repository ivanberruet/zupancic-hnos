import React from 'react'
import {motion} from "framer-motion"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Service({title, content}) {
	return (
		<motion.li className='relative w-full'
		initial={{y:200}}
		whileInView={{y:0}}
		transition={{duration:0.5, ease:"easeInOut"}}
		viewport={{once:true}}
		>
			<Accordion className='bg-light'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-primary' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='font-bold text-lg'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='whitespace-pre-line'>{content}</Typography>
        </AccordionDetails>
      </Accordion>
		</motion.li>
	)
}
