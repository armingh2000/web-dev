import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills'



function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Routes>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/skills" element={<Skills />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

// download resume
// add github
