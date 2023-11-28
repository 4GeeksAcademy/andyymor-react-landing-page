import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
        
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className ="ms-auto collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="w-100 d-flex justify-content-end navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
	);
};

export default Navbar;