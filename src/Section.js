import React, { Component } from "react";

const Section = ({ id }) => (
	<section id={id}>
		<a name={id}> </a>
		<h1>{id}</h1>
		{child}
	</section>
);


export default 