import './App.css';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Routes>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
