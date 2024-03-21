import { useState } from "react";
import "./App.css";
import { HookForm } from "./components/HookForm";
/*
  author: required
  tittel: minst 3 bokstaver
  content: minst 5 bokstaver

  logges (error) hvis ikke feltene er godkjent
  logge verdier hvis godkjent
*/

function App() {
	return (
		<>
			<div className="container">
				<HookForm />
			</div>
		</>
	);
}

export default App;
