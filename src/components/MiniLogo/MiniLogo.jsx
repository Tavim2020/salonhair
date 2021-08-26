import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'

const LogoMini = styled.img`
    object-fit: contain;
`;

const MiniLogo = ({width, height}) => {
    return (
        <LogoMini src={logo} alt={'Mini Logo'} title={'Logo'} style={{ width, height}}/>
    )
}

export default MiniLogo;
