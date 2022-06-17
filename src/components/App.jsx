import React from "react";
import background from "../img/bg1.jpg"
import Main from "./main/main.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
const App = () => {

	return (
		<div className="wrapper active" style={{ backgroundImage: `url(${background})` }}>
			<Main />

			<Sidebar />
		</div>
	);
};

export default App;