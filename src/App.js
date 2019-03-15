import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import { dayTheme, nightTheme, GlobalStyle } from "./theme/globalStyle";

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
				<>
					<GlobalStyle />

            		<Header onClick={ this.handleClick }/>

            		<Home />
				</>
			</ThemeProvider>
    	);
	}
}

export default App;
