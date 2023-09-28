// se utilizan las arrow funtions
// export const FistApp = () => <h1>First App</h1>;

// import { Fragment } from "react"

// importamos las prop-types para el tipado
import PropTypes from 'prop-types'


const name = 'Gustavo !!'

const getSaludo = (nombre) => `Hola ${nombre}`

// recibimos como parametro las properties as props, pero se desestructura
// export const FistApp = (props) => {

// desestructuramos las prosp y poniendoles valores por default
// export const FirstApp = ({nombre, apellido, edad = 24}) => {

export const FirstApp = ({nombre, apellido, sueldo, edad = 24}) => {

	// console.log("props ->", props)

	// se declara una variable pero si no se cambia dentro del componente es mejor sacarlo
	// const newMessage = 'Gustavo'

	return (
		// para poner mas de una linea de codigo se debe englobar en un padre, Fragmento
		// <Fragment>
		// 	<h1>Titulo</h1>
		// 	<p>un parrafo</p>
		// </Fragment>

		// <> es sinonimo a un Fragmento
		<>
			{/* Se imprime una varibale*/}
			{/* <h1> variable fuera del funtional component { name } </h1> */}
			{/* <h1> { getSaludo(name) } </h1> */}
			<h1> {getSaludo(`${nombre} ${apellido} tengo ${edad}`) } </h1>

			<p>un parrafo</p>
			<p>sueldo por default { sueldo } k</p>
		</>
	)
}

// se agregan las configuraciones de las propiedades del compomente como valores por default o requeridos
FirstApp.propTypes = {
	nombre: PropTypes.string.isRequired,
	apellido: PropTypes.string
}

FirstApp.defaultProps = {
	apellido: "No tiene apellido",
	sueldo: 280
}