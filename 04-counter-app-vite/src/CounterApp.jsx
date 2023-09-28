import PropTypes from 'prop-types'

// todos los hooks se incian con la palabra use
import { useState } from 'react'

export const CounterApp = ({ contador }) => {

	// esto es un hook que nos permite renderizar la vista
	const [counter, setCounter] = useState(contador)

	// se puede recibir el envento dentro de los parametros de la funcion
	// const addValue = ( event ) => {
	const addValue = () => {
		// console.log(event)
		// contador += 1
		// console.log("contador", contador)
		setCounter(counter + 1);
		// setCounter((c) => c + 1);
	}

	return (
		<>
			<h1>Counter App</h1>

			<h2>{counter}</h2>

			{/* se agrega la el evento de un boton */}
			{/* <button onClick={ (event) =>  addValue(event) }>
				+1
			</button> */}

			{/* por default la funcion envia como primera posicicon el event */}
			<button onClick={addValue}>
				+1
			</button>

			{/* usando hooks dentro del evento*/}
			{/* <button onClick={ () => setNumero( numero + 1 ) }>
				+1
			</button> */}

			{/* Tarea */}
			<button onClick={() => setCounter(counter - 1)}>
				-1
			</button>

			<button onClick={() => setCounter(contador)}>
				Restart
			</button>
		</>
	)
}

CounterApp.propTypes = {
	contador: PropTypes.number.isRequired,
}