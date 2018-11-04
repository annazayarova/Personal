import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";

import { dayTheme, nightTheme, GlobalStyle } from "./theme/globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const ToggleTheme = styled.svg`
	cursor: pointer;
	fill: ${ props => props.theme.text };
  	height: 24px;
  	left: 190px;
  	position: absolute;
  	top: 23px;
  	width: 24px;
	z-index:101;

	@media (max-width: 576px) {
        left: 155px;
    }
`;

class App extends Component {
	state = {
		isDay: true,
		theme: dayTheme
	}

	handleClick = () => {
		const isDay = !this.state.isDay;

		this.setState({
			isDay: isDay,

			theme: isDay ? dayTheme : nightTheme
		});
	}

	render() {
		const { theme } = this.state;

		return (
			<ThemeProvider theme={ theme }>
				<div>
					<GlobalStyle />

					<ToggleTheme onClick={ this.handleClick }
						height="24"
						width="24"
						viewBox="0 0 24 24">
						<path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z" />
					</ToggleTheme>

            		<Header/>

            		<Home />

					<Footer />
				</div>
			</ThemeProvider>
    	);
  	}
}

export default App;
