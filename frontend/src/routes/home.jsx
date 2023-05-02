import { useEffect, useState } from "react"
import MainComponent from "../components/mainComponent";

const Home = () => {
	const [hello, setHello] = useState("")

	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:5000/", {
				headers: {
					"Content-Type": "application/json"
				}
			})
			if (res.ok) {
				await new Promise((res, rej) => {
					setTimeout(() => {
						res()
					}, 2000)
				})
				const json = await res.json()
				return setHello(json)
			}
			throw {status: res.status, message: "Erro servidor"}
		})();
	}, [])
	if (hello === "") {
		return (
			<MainComponent data="Carregando..." />
		)
	}
	return(
		<MainComponent data={hello.message} />
	)
}

export default Home
