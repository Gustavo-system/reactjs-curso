import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

// en un hook que se reciben argumentos posicionales
export const useFetchGifs = (categoria) => {


	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	
	// separamos la logica

	// const getImages = async () => {
	// 	const newImages = await getGifs( categoria )
	// 	setImages(newImages)
	// }

	useEffect( () => {
		getGifs(categoria).then(response => setImages(response))
		setIsLoading(false)

		// se peude separar la logica que va dentro del useEffect a una funcion como el ejemplo de abajo
		// getImages()
	}, [])

	return {
		// se puede regresar de esta forma
		// images: images,
		// se puede retornar de esta forma simplificada
		images,
		isLoading
	}

}