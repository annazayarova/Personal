import React, { Component } from 'react';

import styled from "styled-components";

const Foot = styled.footer`
    align-items: center;
    background: ${ props => props.theme.text }
    bottom: 0;
    display: flex;
    flex-direction: row;
    height: 300px;
    justify-content: center;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: -1;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const StyledLink = styled.a`
    color: ${ props => props.theme.bg };
    font-size: 15px;
    text-transform: uppercase;
    font-family: "kotori_roseregular";
    margin: 0 20px;

    @media (max-width: 576px) {
        display: block;
        margin: 15px auto
      }
`;

const Footer = () => {
    return (
        <Foot>
            <StyledLink rel="noopener noreferrer"
                href="https://www.behance.net/annazayarova"
                target="_blank">
                    Behance
            </StyledLink>

            <StyledLink rel="noopener noreferrer"
                href="https://www.github.com/annazayarova"
                target="_blank">
                    Github
            </StyledLink>

            <StyledLink rel="noopener noreferrer"
                href="http://www.linkedin.com/in/annazayarova"
                target="_blank">
                    LinkedIn
            </StyledLink>

            <StyledLink rel="noopener noreferrer"
                href="mailto:annazayarova@gmail.com">
                    Email
            </StyledLink>
        </Foot>
    );
}

export default Footer;
