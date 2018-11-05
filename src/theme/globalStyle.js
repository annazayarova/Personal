import { createGlobalStyle } from "styled-components";

export const dayTheme = {
	bg: "white",
	text: "black",
	grey: 'rgb(185, 185, 185)',
	red: '#FA5851'
};

export const nightTheme = {
	bg: "#000",
	text: "white",
	grey: 'white',
	red: '#FA5851'
};

export const GlobalStyle = createGlobalStyle`
	body {
		background: ${ props => props.theme.bg };
		font-family: "kotori_roseregular";
		font-smoothing: antialiased;
		font-size:15px;
		line-height:15px;
		margin: 0;
  		padding: 0;
  		text-rendering: optimizeLegibility;
	}

a {
	color: ${props => props.theme.text};
	text-decoration:none;
}

img {
	width: 100%;
}

a {
	text-decoration:none
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
