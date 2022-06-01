import React from "react";
import "./App.less";
import background from "../img/bg1.jpg"

const App = () => {
	return (
		<div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
			<main className="main">

			</main>
			{/* <aside className="sidebar"></aside> */}
		</div>
	);
};

export default App;