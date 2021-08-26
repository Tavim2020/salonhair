import React from 'react';
import styled from 'styled-components';
import Background from '../assets/background-introdution.jpg'
import ContainerGeral from '../components/ContainerGeral/ContainerGeral';
import IntrodutionContainerTextAndlogo from '../components/introdutionContainerTextAndLogo/IntrodutionContainerTextAndlogo';
import Woman from '../components/Womam/Woman';

const IntroducaoContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    background-position-y: 70%;
    background-repeat: no-repeat;

    @media(max-width: 950px){
        background-image: none;
        background-color: #000;
    }
`;

const WrapperWoman = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;  

    @media(max-width: 950px){
        display: none;
    }
`;

const Introducao = () => {
    return (
        <IntroducaoContainer>

            <ContainerGeral 
            display={'flex'}
            width={'85%'}
            margin={'0 auto'}>

                <WrapperWoman>

                    <Woman />

                </WrapperWoman>

                <IntrodutionContainerTextAndlogo />

            </ContainerGeral>
            
        </IntroducaoContainer>
    )
}

export default Introducao;
