import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

	const [categorias, setCategorias] = useState(['pokemon', 'cars'])

	const onAddCategory = (event) => {

		console.log("evento emitido del hijo al padre", event)

		// la vaiable event se puede nombrar como sea, en este caso se reasigna para fines visuales
		const nuevaCategoria = event;

		// validamos que no exista ese valor en el array
		if (categorias.includes(nuevaCategoria)) return;


		setCategorias([nuevaCategoria, ...categorias])
		// setCategorias(categoria => [...categoria, 'Rico Pollo'])
	}

	return (
		<>
			<h1>GifExpertApp</h1>

			{/* <button onClick={onAddCategory}>Agregar</button> */}

			{/* <AddCategory setCategorias={setCategorias}/> */}
			<AddCategory onNewCategory={(event) => onAddCategory(event)} />

			{/* retornamos con toda la estructura en el body */}
			{/* { categorias.map((categoria) => { return <li key={categoria}> {categoria}</li> })} */}

			{/* retornamos todo en una sola linea de las arrow funtions */}
			{
				categorias.map((categoria) => <GifGrid key={categoria} categoria={categoria} /> )
			}

		</>
	)
}
