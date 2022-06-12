import React from "react";
import background from "../img/bg1.jpg"
import Main from "./main/main.jsx";

const App = () => {
	return (
		<div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
			<Main />

			{/* <aside className="sidebar"></aside> */}
		</div>
	);
};

export default App;