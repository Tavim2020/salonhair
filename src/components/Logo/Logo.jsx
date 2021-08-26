import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'

const LogoContainer = styled.div`
    margin: 0 auto;
    width: 25vw;
    height: 45vh;
    display: flex;
    align-items: center; 
    justify-content: center;

    img{
        width: 20vw;
        height: 30vh;
        object-fit: contain;
        margin-top: 6vh;
    }

    @media(max-width: 950px){
        width: 60%;
        height: 30%;
        margin-bottom: 3vh;

        img{
            width: 35vw;
            height: 100%;
            margin-top: 0vh;
        }
    }
`;


const Logo = () => {
    return (
        <LogoContainer>
            <img src={logo} alt={'logo'}  style={{}} />
        </LogoContainer>
    )
}

export default Logo;
