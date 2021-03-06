import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Woman from '../Womam/Woman';

const ContainerRight = styled.div`
    width: 45%;
    height: 90.03vh;
    margin-top: 3%;
    background-color: var(--black-color);
    

    h3{
        color: var(--white);
        font-family: var(--font-dancing);
        font-size: 2.3vw;
        text-align: center;
        margin-bottom: 6vh;
    }

    h2{
        color: var(--beige);
        font-family: var(--font-dancing);
        font-size: 2.9vw;
        text-align: center;
        margin-bottom: 6vh;
    }


    @media(max-width: 501px){
        margin: 0 auto;
        width: 90%;
        height: 94vh;
        margin-top: 3%;
        background-color: none;
        
        h3{
            font-size: 6.5vw;
            text-align: center;
            margin-bottom: 5vh;
        }

        h2{
            color: var(--beige);
            font-family: var(--font-dancing);
            font-size:7vw;
            text-align: center;
            margin-bottom: 5vh;
        }
    }


    @media(min-width: 501px) and (max-width: 800px){
        margin: 0 auto;
        width: 90%;
        height: 94vh;
        margin-top: 3%;
        background-color: none;
        
        h3{
            font-size: 5.5vw;
            text-align: center;
            margin-bottom: 4vh;
        }

        h2{
            color: var(--beige);
            font-family: var(--font-dancing);
            font-size:6vw;
            text-align: center;
            margin-bottom: 4vh;
        }
    }

    @media(min-width: 801px) and (max-width: 950px){
        margin: 0 auto;
        width: 90%;
        height: 94vh;
        margin-top: 3%;
        background-color: none;
        
        h3{
            font-size: 5vw;
            text-align: center;
            margin-bottom: 3vh;
        }

        h2{
            color: var(--beige);
            font-family: var(--font-dancing);
            font-size:5.5vw;
            text-align: center;
            margin-bottom: 3vh;
        }
    }
    
`;

const WrapperWoman = styled.div`
    display: none;

    img{
        display: none;
    }
   
    @media(max-width: 500px){
        margin: 0 auto;
        width: 65vw;
        height: 28%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3vh;

        img{
            display: initial;
        }
    }

    @media(min-width: 501px) and (max-width: 800px){
        margin: 0 auto;
        width: 55vw;
        height: 32%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3vh;

        img{
            display: initial;
        }
    }

    @media(min-width: 801px) and (max-width: 950px){
        margin: 0 auto;
        width: 55vw;
        height: 27%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3vh;

        img{
            display: initial;
        }
    }
`;

const IntrodutionContainerTextAndlogo = () => {

    
    return (
        <ContainerRight>

            <Logo />

            <h3>A beleza em sua Total Essencia.</h3>

            <WrapperWoman>

                <Woman />

            </WrapperWoman>

            <h2>Bem Vindo ao Nosso Sal??o</h2>

            <Button />

        </ContainerRight>
    )
}

export default IntrodutionContainerTextAndlogo;
