import React, {Component} from "react";

export default class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}

	handleChange(event) {
		let text = event.target.value;
		this.setState({
			text: text
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			text: ""
		});
	}

	render() {
		return (
			<div className={"comment-box"}>
				<div>hi</div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<textarea
						value={this.state.text}
						onChange={this.handleChange.bind(this)}/>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}