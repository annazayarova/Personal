import { Component } from "react";

class ScrollOnTop extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
    	return null;
  	}
}

export default ScrollOnTop;
