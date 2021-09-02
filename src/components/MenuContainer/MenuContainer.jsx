import React from 'react';
import styled from 'styled-components';
import Close from '../../assets/close.png';
import ContainerMenuUser from '../ContainerMenuUser/ContainerMenuUser';
import MiniLogo from '../MiniLogo/MiniLogo';
import whatsapp from '../../assets/whatsapp.png';
import { GlobalContext } from '../../context/GlobalContext';

const Menu = styled.section`
    width: 20vw;
    height: 100vh;
    background-color: var(--black-color);
    transform: ${({menutrue}) => menutrue ? 'translateX(-100%)' : 'translateX(0%)'};
    position: fixed;
    top: 0%;
    left: 0%;
    animation-name: ${({menutrue}) => menutrue ? 'open' : 'close'};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    z-index: 15000;

    @keyframes open{
        to{
            transition: 1s;
            transform: translateX(0%);
            opacity: 1;
        }
    }

    @keyframes close{
        to{
            transition: transform 1s;
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    @media(max-width: 449px){
        width: 100vw;
        height: 73vh;
        transform: ${({menutrue}) => menutrue ? 'translateX(0%) translateY(-100%)' : 'translateX(0%) translateY(0%)'};
        right: 0%;

        @keyframes open{
            to{
                transition: 1s;
                transform: translateX(0%) translateY(0%);
                opacity: 1;
            }
        }

        @keyframes close{
            to{
                transition: transform 1s;
                transform: translateX(0%)  translateY(-100%);
                opacity: 0;
            }
        }
    }

    @media(min-width: 450px) and (max-width: 649px){
        width: 100vw;
        height: 82vh;
        transform: ${({menutrue}) => menutrue ? 'translateX(0%) translateY(-100%)' : 'translateX(0%) translateY(0%)'};
        right: 0%;

        @keyframes open{
            to{
                transition: 1s;
                transform: translateX(0%) translateY(0%);
                opacity: 1;
            }
        }

        @keyframes close{
            to{
                transition: transform 1s;
                transform: translateX(0%)  translateY(-100%);
                opacity: 0;
            }
        }
    }

   

    @media(min-width: 650px) and (max-width: 950px){
        width: 100vw;
        height: 96vh;
        transform: ${({menutrue}) => menutrue ? 'translateX(0%) translateY(-100%)' : 'translateX(0%) translateY(0%)'};
        right: 0%;

        @keyframes open{
            to{
                transition: 1s;
                transform: translateX(0%) translateY(0%);
                opacity: 1;
            }
        }

        @keyframes close{
            to{
                transition: transform 1s;
                transform: translateX(0%)  translateY(-100%);
                opacity: 0;
            }
        }
    }
`;

const IconClose = styled.div`
    margin: 0 auto;
    width: 80%;
    padding-top: 3vh;
    height: 17vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img{
        width: 3vw;
        transition: transform 0.5s;
        cursor: pointer;

        &:hover{
            transform: rotateZ(90deg);
        }
    }

    @media(max-width: 950px){
        width: 100%;
        padding-top: 0vh;
        height: 13vh;

        img{
            width: 10vw;
            transition: transform 0.5s;
            cursor: pointer;

            &:hover{
                transform: rotateZ(90deg);
            }
        }
    }
`;

const Welcome = styled.h3`
    font-family: var(--font-bebas-naue);
    color: var(--white);
    font-size: 1.7vw;
    text-align: center;
    margin-top: 1vh;

    @media(max-width: 950px){
        font-size: 5vw;
        margin-top: 1vh;
    }
`;

const ContainerLogo = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 950px){
        margin: 0 auto;
        width: 80%;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Contato = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 12vh;
    display: flex;
    flex-direction: column;

    h3{
        font-family: var(--font-bebas-naue);
        color: var(--white);
        font-size: 1.55vw;
        margin-left: 4.55vw;
        margin-top: 4vh;
        cursor: pointer;
    }

    img{
        width: 2vw;
        margin-left: 5.6vw;
        margin-top: 1vh;
        cursor: pointer;
    }

    @media(max-width: 950px){
        margin: 0 auto;
        width: 80%;
        height: 12vh;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 1.5vh;

        h3{
            font-size: 5vw;
            margin-left: 0vw;
            margin-top: 0vh;
        }

        img{
            width: 5vw;
            margin-left: 5vw;
            margin-top: 0vh;
        }
    }
`;



const MenuContainer = () => {

    const { menu, setMenu, ContatoContainerScroll, whats, setWhats } = React.useContext(GlobalContext);
    
    

    function CloseMenu(){
        setMenu(false);
    }

    function moveToContato(){
        
        if(ContatoContainerScroll.current){
            window.scroll({
                top: ContatoContainerScroll.current.offsetTop,
                behavior: 'smooth'
            })

        }
        
    }

    function sendWhatsTwo(){
        setWhats(!whats);
    }
  

    return (
        <Menu menutrue={menu}>

            <IconClose >
                    <img src={Close} alt={'Close'} onClick={CloseMenu}/>
            </IconClose>

            <Welcome>Bem-vindo ao nosso salão</Welcome>

            <ContainerLogo>

                <MiniLogo />

            </ContainerLogo>

            <ContainerMenuUser />


            <Contato>

                <h3 onClick={moveToContato}>contato</h3>

                <img src={whatsapp} alt={'Whatsapp'} onClick={sendWhatsTwo}/>

            </Contato>
            
        </Menu>
    )
}

export default MenuContainer;
