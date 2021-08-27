import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerButton = styled.div`
    margin: 0 auto;
    width: 75%;
`;

const MainButton = styled.button`
    margin: 0 auto;
    width: 100%;
    height: 7vw;
    background-color: var(--marsala);
    border-radius: 10vw;
    border: none;
    font-size: 3vw;
    font-family: var(--font-bebas-naue);
    color: var(--white);
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover{
        background-color: #9e6f6e;
    }

    @media(max-width: 500px){
        height: 8.5vh;
        background-color: var(--marsala);
        border-radius: 10vw;
        font-size: 6vw;

        &:hover{
            background-color: var(--marsala);
        }
    }

    @media(min-width: 501px) and (max-width: 800px){
        height: 8.5vh;
        background-color: var(--marsala);
        border-radius: 10vw;
        font-size: 5vw;

        &:hover{
            background-color: var(--marsala);
        }
    }
`;

const Button = () => {
    return (
        <ContainerButton>
         
            <Link to={'/home'}>
                <MainButton>
                    Entrar
                </MainButton>
            </Link>

        </ContainerButton>
    )
}

export default Button;
