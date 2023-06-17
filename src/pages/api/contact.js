import { mailOptions, transporter } from "@amigos/config/nodemailer";

const generateEmailContent = (data) => {
	const stringData = Object.entries(data).reduce((str,[key,value])=>
		str += `${key}: \n${value} \n \n`
	,"")

	return {
		text: stringData,
		html:`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>Nueva consulta</h1><p>Nombre: ${data.Nombre}</p><p>Apellido: ${data.Apellido}</p><p>Email: ${data.Email}</p><p>Teléfono: ${data.Telefono}</p><p>Mensaje: ${data.Mensaje}</p></body></html>`
	}
}

export default async function handler(req, res) {
	console.log(req.body);
	 if(req.method === "POST"){
	 	const data = req.body
		
	 	try {
	 		await transporter.sendMail({
	 			...mailOptions,
	 			subject: "Consulta - Zupancic Hermanos",
	 			...generateEmailContent(data)
	 		})
	 		return res.status(200).json({success: true})

	 	} catch (error) {
	 		console.log(error);
	 		return res.status(400).json({ message: error.message })
	 	}
	 }
	
	
	 return res.status(400).json({ message: 'Bad request' })
}
