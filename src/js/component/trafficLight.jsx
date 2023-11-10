import React, { useState } from "react";

//create your first component
const TrafficLight = (props) => {
	//logic

	const [color, setColor] = useState("");
	const [faroMorado, setFaroMorado] = useState(false);

	return (

		<div className="container">
			<h1 className="text-center mt-5">Traffic Light</h1>
			<div>
				<div className="traffic-light traffic-light-morado">
					<input className={color == "colorRojo" ? "colorRojo selected" : "colorRojo"} type="radio" onClick={() => {
						setColor("colorRojo")
					}} />
					<input className={color == "colorAmarillo" ? "colorAmarillo selected" : "colorAmarillo"} type="radio" onClick={() => {
						setColor("colorAmarillo")
					}} />
					<input className={color == "colorVerde" ? "colorVerde selected" : "colorVerde"} type="radio" onClick={() => {
						setColor("colorVerde")
					}} />

					{faroMorado && <input className={color == "colorMorado" ? "colorMorado selected" : "colorMorado"} type="radio" onClick={() => {
						setColor("colorMorado")
					}} />}

				</div>
			</div>

			<button type="button" class="position-absolute bottom-0 start-50 translate-middle-x mb-4 btn btn-success" onClick={() => {
				setFaroMorado(true);
			}}>Agregar faro morado</button>

		</div>
	);
};

export default TrafficLight;
