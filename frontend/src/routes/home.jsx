import { useEffect, useState } from "react"

const Home = () => {
	const [hello, setHello] = useState()

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:3030/")
			if (res.ok) {
				const json = await res.json()
				return setHello(json)
			}
			throw {status: res.status, message: "Erro servidor"}
		})
	})
	return(
		<>
			<div style={{fontSize: '64px', display: 'flex', justifyContent: 'center'}}>Pagina Principal</div>
		</>
	)
}

export default Home
