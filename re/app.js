import React, { Component } from 'react';
import Comment from "./comment_box";
export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Introduction to test driven Development</h1>
				<Comment/>
			</div>
		);
	}
}