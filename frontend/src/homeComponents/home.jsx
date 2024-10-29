import React, { Component } from "react";
import Navbar from "./navbar";
import Cards from "./cards";
import Footer from "./footer";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Cards />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
