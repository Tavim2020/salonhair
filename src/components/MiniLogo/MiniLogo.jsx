import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'

const LogoMini = styled.img`
    width: 80%;
    height: 70%;
    object-fit: contain;
    @media(max-width: 950px){
        width: 80%;
        height: 50%;
    }

    .mini{
        width: 9vw;

        @media(max-width: 950px){

        }
    }
`;

const MiniLogo = ({width, height, display}) => {
    return (
  
        <LogoMini src={logo} alt={'Mini Logo'} title={'Logo'} style={{ width, height, display}} />                  
    )
}

export default MiniLogo;
