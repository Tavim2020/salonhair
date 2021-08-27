import React from 'react'
import styled from 'styled-components';
import iconWoman from '../../assets/iconeMenu.png';
import { GlobalContext } from '../../context/GlobalContext';

const Iterable = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    cursor: pointer;

    &:hover{
        animation: moveGradient;
        animation-duration: 1s;
        animation-delay: 0ms;
        animation-iteration-count: 1;
        transition: background-image 0.5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        background-image: linear-gradient(90.13deg, #FFFFFF -17.19%, #FFFFFF -17.18%, rgba(0, 0, 0, 0.931775) 15.75%, #000000 129.57%);

        @keyframes moveGradient{
            10%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, #FFFFFF -1.83%, rgba(0, 0, 0, 0.931775) 15.75%, #000000 129.57%);
            }
            20%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, #FFFFFF 9.64%, rgba(0, 0, 0, 0.931775) 15.75%, #000000 129.57%);
            }
            30%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 27.22%, #000000 129.57%);
            }
            40%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 41.72%, #000000 129.57%);
            }
            50%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 56.27%, #000000 129.57%);
            }
            60%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 69.26%, #000000 129.57%);
            }
            70%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 88.37%, #000000 129.57%);
            }
            80%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 100.22%, #000000 129.57%);
            }
            90%{
                background-image: linear-gradient(90.13deg, #FFFFFF -17.16%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 112.07%, #000000 129.57%);
            }
            100%{
                background-image:  linear-gradient(90.13deg, #FFFFFF -17.18%, rgba(0, 0, 0, 0.931775) 15.75%, #FFFFFF 129.56%, #000000 129.57%);
            }
        }

        img{
            visibility: visible;
        }
    }

    img{
        width: 3vw;
        margin-right: 1vw;
        margin-left: 2.5vw;
        visibility: hidden;
    }

    h4{
        font-family: var(--font-bebas-naue);
        color: var(--white);
        font-size: 1.55vw;
    }

    @media(max-width: 950px){
        justify-content: center;
        padding-top: 1.5vh;
        padding-bottom: 1.5vh;

        img{
            width: 6vw;
            margin-right: 2vw;
            margin-left: 2.5vw;
            visibility: visible;
            display: none;
        }

        h4{
            font-size: 4.5vw;
        }

    }
`;

const MenuInterable = ({children, number}) => {

    const { firstContainerScroll, twoContainerScroll, 
        threeContainerScroll, fourContainerScroll} = React.useContext(GlobalContext);

    function moveScroll(event){
        const newNumber = Number(event.target.id)
        if( newNumber === 1){
            if(firstContainerScroll.current){
                window.scroll({
                    top: firstContainerScroll.current.offsetTop,
                    behavior: 'smooth'
                })

            }
        }
        else if(newNumber === 2){
            if(twoContainerScroll.current){
                window.scroll({
                    top: twoContainerScroll.current.offsetTop,
                    behavior: 'smooth'
                })

            }
        }

        else if(newNumber === 3){
            if(threeContainerScroll.current){
                window.scroll({
                    top: threeContainerScroll.current.offsetTop,
                    behavior: 'smooth'
                })

            }
        }

        else if(newNumber === 4){
            if(fourContainerScroll.current){
                window.scroll({
                    top: fourContainerScroll.current.offsetTop,
                    behavior: 'smooth'
                })

            }
        }

    }

    return (

            <Iterable onClick={moveScroll} id={number}>
                <img src={iconWoman} alt={'Woman Icon'} id={number}/>

                <h4 id={number}> {children}</h4>   
            </Iterable>
    )
}

export default MenuInterable
