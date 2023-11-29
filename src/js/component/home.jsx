import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
// import Cards from './cards.jsx';
import Rows from "./rows.jsx";
import Footer from "./footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
<div className="text-center">

<Navbar />

<Jumbotron />

<Rows />

<Footer />



</div>

)
};

export default Home;
