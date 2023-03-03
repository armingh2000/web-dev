import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const activeAttrs = { className: 'nav-link active' };
	const inactiveAttrs = { className: 'nav-link' };
	const [activeLink, setActiveLink] = useState(0);

	const handleActiveLink = (idx) => {
		setActiveLink(idx);
	};

	const location = useLocation();

	useEffect(() => {
		// triggered on route change
		var idx;

		switch (location.pathname) {
			case '/':
				idx = 0;
				break;
			case '/projects':
				idx = 1;
				break;
			case '/about':
				idx = 2;
				break;
			default:
		}

		handleActiveLink(idx);
	}, [location.pathname]);

	return (
		<div>
			<nav className="navbar navbar-expand-lg" data-bs-theme="light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Armin Gholampoor
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link
								{...(activeLink === 0
									? activeAttrs
									: inactiveAttrs)}
								to="/">
								Home
							</Link>
							<Link
								{...(activeLink === 1
									? activeAttrs
									: inactiveAttrs)}
								to="/projects">
								Projects
							</Link>
							<Link
								{...(activeLink === 2
									? activeAttrs
									: inactiveAttrs)}
								to="/contact">
								Contact
							</Link>
							<a
								className="bi bi-linkedin"
								href="https://www.linkedin.com/in/armin-gholampoor-90b26b1b4/"
								target="_blank"></a>
							<a
								className="bi bi-envelope-at"
								href="mailto:armingh379@gmail.com"></a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
