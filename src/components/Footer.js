import React, { Component } from 'react';

import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <StyledLink rel="noopener noreferrer"
                href="https://www.github.com/annazayarova"
                target="_blank">
                    GitHub
            </StyledLink>

            <StyledLink rel="noopener noreferrer"
                href="https://www.behance.net/annazayarova"
                target="_blank">
                    Behance
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
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
    align-items: center;
    background: ${ props => props.theme.text }
    display: flex;
    flex-direction: row;
    height: 30vh;
    padding-left: 60px;
    width: 100%;

    @media (max-width: 576px) {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledLink = styled.a`
    color: ${ props => props.theme.bg };
    font-size: 16px;
    font-family: "kotori_roseregular";
    margin: 0 40px 0 0;

    @media (max-width: 576px) {
        margin: 15px 0
    }
`;
