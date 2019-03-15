import React, { Component } from 'react';

import styled from "styled-components";

import DayOfWeek from "./common/DayOfWeek";
import Footer from "./Footer";
import Scramble from "./common/Scramble";
import ScrollOnTop from "./common/ScrollOnTop";
import Waves from "./common/Waves";

class Home extends Component {
    render() {
        return (
            <Content>
                <ScrollOnTop />

    	        <Title>
    		        <H2>Web Development</H2>

                    <Scramble />
    	        </Title>

                <Footer />
            </Content>
        );
    }
}

export default Home;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    width: 100%;
`;

const Title = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 70vh;
    padding-left: 60px;

    @media (max-width: 576px) {
    }
`;

const H2 = styled.h2`
    color: ${ props => props.theme.text };
    font-family: "kotori_rosebold";
    font-size: 60px;
    margin-bottom: 20px;
    padding: 0;

    @media (max-width: 576px) {
        font-size: 40px;
    }
`;
