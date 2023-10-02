import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({categoria}) => {

	// separamos la logica para que sea un componenete mas pequeño y optimizado
	// const [images, setImages] = useState([])
	
	// useEffect( () => {
	// 	getGifs(categoria).then(response => setImages(response))
	// }, [])

	const { images, isLoading } = useFetchGifs(categoria)

	return (
		<>
			<h3>{ categoria }</h3>

			{
				isLoading && ( <h2>Cargando ...</h2> )
			}

			<div className="card-grid">
				{ images.map(({id, title, url}) => <GifItem key={id} title={title} url={url}/> )}
			</div>
		</>
	)
}