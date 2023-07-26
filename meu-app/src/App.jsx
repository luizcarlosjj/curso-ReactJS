import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";

function App(){
	return (
		<div>
			<BrowserRouter>
				<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/sobre" element={<Sobre/>} />
						<Route path="/contato" element={<Contato/>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;