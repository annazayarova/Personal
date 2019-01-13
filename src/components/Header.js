import React, { PureComponent } from 'react';

import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
    height: 80px;
    line-height: 80px;
    position: fixed;
    width: 100%;
    z-index: 100
`;

const Logo = styled.div`
    font-family: "kotori_rosebold";
    font-size: 15px;
    left: 50px;
    position: absolute;

    @media (max-width: 576px) {
        left: 28px;
  }
`;

const Nav = styled.nav`
    font-family: "kotori_roseregular";
    font-size: 12px;
    position: absolute;
    right: 50px;
    text-transform: uppercase;

    @media (max-width: 576px) {
        right: 20px;
  }
`;

class Header extends PureComponent {
    render() {
        return (
            <Head>
                <Logo>
                    <Link to="/">
            	        Anna Zayarova
        	        </Link>
                </Logo>

                <Nav>
                    <Link rel="noopener noreferrer"
                        href="mailto:annazayarova@gmail.com">
                            Contact me
                    </Link>
        	    </Nav>
            </Head>
         );
    }
}

export default Header;
