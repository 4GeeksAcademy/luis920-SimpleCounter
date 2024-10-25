import React, { useEffect, useState } from "react";
import Timer from "./Timer.jsx";
import Button from "./Button.jsx";

const Home = () => { 
	const [seconds,setSeconds] =useState(0)
	const [minuts,setMinuts] =useState(0)
	const [hours,setHours] =useState(0)

	useEffect(()=>{
		
	})

	return (
		<div className="timer-container" >
			<Timer/>
			<div >
				<h1>Timer</h1>
				<h2>10:30:25</h2>
			  <Button title={"Iniciar"}/>	
			  <Button title={"Detener"}/>
			  <Button title={"Reinicar"}/>	
			</div>
			
		</div>
	);
};

export default Home;
