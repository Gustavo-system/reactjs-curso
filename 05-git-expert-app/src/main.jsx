import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

	<GifExpertApp />

	/*
	El stric mode solo se usa en desarrollo esto no afecta en produccion
	Es solo para buenas practicas y corroborar el comportamiento del sistema
	*/
	// <React.StrictMode>
	// 	<GifExpertApp />
	// </React.StrictMode>,
)
