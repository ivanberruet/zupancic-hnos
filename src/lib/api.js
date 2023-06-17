export const sendContactForm = async (data) => fetch('/api/contact',{
	method:"POST",
	body: JSON.stringify(data),
	headers: {
		"Content-Type": "application/json",
		Accept: "Application/json",
	},
}).then((res)=>{
	if(!res.ok) throw new Error("Error al enviar mensaje")
	return res.json()
})