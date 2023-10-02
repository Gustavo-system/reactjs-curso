import { useState } from "react"

// se desestructura la funcion del hook para hacer la logica en el componente  hijo
// export const AddCategory = ({ setCategorias } ) => {

export const AddCategory = ({ onNewCategory } ) => {

	const [inputValue, setInputValue] = useState('')

	// podemos desestructurar el event y obtener solo el target
	const onInputChange = ({ target }) => {
		// console.log(target.value)
		setInputValue(target.value)
	}

	// logica para agregar el componente hijo
	// const onSubmit = (event) => {
	// 	// console.log(event)
	// 	event.preventDefault();
	// 	// console.log(inputValue)

	// 	if(inputValue.trim().length <= 1) return;

	// 	// en este punto se usa el callback para no perder la referencia de los datos que ya se tienen
	// 	setCategorias( (categorias) => [inputValue, ...categorias])
	// 	setInputValue('');
	// }


	// logica para emitir un valor al componente padre
	const onSubmit = (event) => {
		event.preventDefault();
		// console.log("valor del input", inputValue)
		const valor = inputValue.trim()

		if(valor.length <= 1) return;

		onNewCategory(valor)
		setInputValue('');
	}

	return (
		<form onSubmit={ onSubmit }>
			<input 
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event) }
			/>
		</form>
	)
}
