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
`;

const MiniLogo = () => {
    return (
        <LogoMini src={logo} alt={'Mini Logo'} title={'Logo'} />
    )
}

export default MiniLogo;
