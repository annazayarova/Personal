import React from 'react';

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
        padding-left: 30px;
    }
`;

const StyledLink = styled.a`
    color: ${ props => props.theme.bg };
    font-size: 16px;
    font-family: "kotori_roseregular";
    margin-right: 40px;

    @media (max-width: 576px) {
        margin-right: 20px;
    }
`;
