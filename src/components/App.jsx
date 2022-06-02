import React from "react";
import "./App.less";
import Header from "./header/header.jsx";

import background from "../img/bg1.jpg"

const App = () => {
	return (
		<div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
			<main className="main">
				<Header />
				<div className="tasks-container">
					<div className="task"></div>
				</div>

				<footer className="add-task">

				</footer>
			</main>
			{/* <aside className="sidebar"></aside> */}
		</div>
	);
};

export default App;