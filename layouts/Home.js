import React from "react";
import Navbar from "./Navbar";

const Home = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Home;
