import React, { Component } from 'react';

import styled from "styled-components";

import Scramble from "./common/Scramble";
import ScrollOnTop from "./common/ScrollOnTop";
import DayOfWeek from "./common/DayOfWeek";
import Waves from "./common/Waves";

const Content = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 300px;
    overflow: hidden;
`;

const Index = styled.div`
    background: ${ props => props.theme.bg }
    height: 100vh;
    position: relative;
    width: 100%;
`;

const Title = styled.div`
    left: 190px;
    position: absolute;
    top: 30%;

    @media (max-width: 576px) {
        left: 25px;
    }
`;

const H1 = styled.h1`
    color: ${ props => props.theme.grey };
    font-family: "kotori_roseregular";
    font-size: 60px;
    font-weight: normal;
    line-height: 60px;
    margin: 0 0 20px;
    padding: 0;

    @media (max-width: 576px) {
        font-size: 40px;
        line-height: 40px;
        margin: 0 0 10px;
    }
`;

const H2 = styled.h2`
    color: ${ props => props.theme.text };
    font-family: "kotori_rosebold";
    font-size: 60px;
    font-weight: normal;
    line-height: 60px;
    margin: 0 0 20px;
    padding: 0;

    @media (max-width: 576px) {
        font-size: 40px;
        line-height: 40px;
        margin: 0 0 10px;
    }
`;

class Home extends Component {
    render() {
        return (
            <div>
	            <ScrollOnTop />

                <Content>
                    <Index>
    	                <Title>
    		                <H1>Hi, I'm Anna</H1>

                            <H2>Freelance</H2>

    		                <H2>Web Developer</H2>

                            <Scramble />
    	                </Title>
                    </Index>
                </Content>
            </div>
         );
    }
}

export default Home;
