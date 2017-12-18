import React, { Component } from "react";

const NavbarItem = ({ section, active }) => {
	let activeState = "";

	if (active) {
		activeState = "active";
	}

	return (
		<li className={activeState}>
			<a href=`#${section}`>{section}</a>
		</li>
	);
};

const Navbar = ({ sections }) => {
	return (
		<nav role="navigation" classNameName="navbar navbar-inverse">
			<div className="container-fluid navbar-inverse">
				<div className="navbar-header navbar-inverse">
					<a className="navbar-brand" href="#">
						Odin&#39s Mead
					</a>
				</div>
				<ul className="nav navbar-nav navbar-inverse"> 
				<NavbarItem section="Home" active=true/>
				sections.map(section=>{
					<NavbarItem section=`${section}`/>


				})
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
