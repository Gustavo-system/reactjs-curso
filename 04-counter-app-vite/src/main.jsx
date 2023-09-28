import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

// function App() {
// 	// se declara las primeras lineas de un componente
// 	return (<h1>Hola mundo !!!</h1>)
// }


// importamos el archivo de estilos generales
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* primera componente */}
		{/* <App /> */}

		{/* le enviamos las props al momento de invoncar el companente */}
		{/* <FirstApp nombre="Chanchito" apellido="Feliz" edad={ 20 }/> */}

		{/* Tarea */}
		<CounterApp contador={ 10 }/>
	</React.StrictMode>
)