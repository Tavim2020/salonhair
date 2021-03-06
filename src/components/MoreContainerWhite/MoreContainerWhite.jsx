import React from 'react';
import styled from 'styled-components';
import firstImage from '../../assets/hidratacaoImgOne.jpg';
import twoImg from '../../assets/hidratacaoImgTwo.jpg';
import threeImg from '../../assets/twoWoman.jpg';
import reconstrucao from '../../assets/reconstrucao.jpg';

const Containers = styled.section`
    width: 100vw;
    height: 38.5vw;
    background-color: var(--white);
`;

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100%;
    display: flex;
`;

const ContainerLeftWhite = styled.div`
    width: 70%;
    height: 100%;

    h2{
        font-family: var(--font-bebas-naue);
        font-size: 2.8vw;
        color: var(--black-color);
        margin-top: 6.5vw;
        text-align: center;
        text-decoration: underline;
    }

    p{
        width: 72%;
        margin-left: 10%;
        color: var(--black-color);
        font-family: var(--font-open);
        font-size: 1.6vw;
        margin-top: 5vw;
    }

    h3{
        color: var(--black-color);
        font-family: var(--font-open);
        font-size: 1.6vw;
        text-align: center;
        margin-top: 1vw;
    }

    div{
        display: flex;

        li:nth-child(1){
            margin-left: 10%;
            
        }
        
        li{
            list-style: disc;
            margin-right: 3vw;
            font-size: 1.5vw;
            font-family: var(--font-open);
        }
    }
`;


const ContainerRightWhite = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .womanSolo{
        width: 21vw;
        height: 32vw;
        object-fit: cover;
    }
    
    div{
        width: 92.5%;
        height: 34vw;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        img{
            width: 21vw;
            position: absolute;
            top: 3.5%;
        }

        .one{
            animation-name: moveImgOne;
            animation-duration: 2s;
            animation-delay: 0s;
            animation-iteration-count: 1;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
            animation-direction: normal;
            transform: translateX(-100%);

            @keyframes moveImgOne{
                100%{
                    transform: translateX(0%);
                }
            }
        }

        .two{
            animation-name: moveImgTwo;
            animation-duration: 2s;
            animation-delay: 0s;
            animation-iteration-count: 1;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
            animation-direction: normal;
            transform: translateX(100%);

            @keyframes moveImgTwo{
                100%{
                    transform: translateX(0%);
                }
            }
        }

        .three{
            animation-name: moveImgThree;
            animation-duration: 2s;
            animation-delay: 0s;
            animation-iteration-count: 1;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
            animation-direction: normal;
            transform: translateY(-100%);

            @keyframes moveImgThree{
                100%{
                    transform: translateY(0%);
                }
            }
        }
        
    }
    
    
`;

const ContainerImageSlide = styled.div`

`;

const MoreContainerWhite = ({reference, slide, reconstruction, hidratacao}) => {

    
    const [stateOneImg, setStateOneImg] = React.useState(true);
    const [stateTwoImg, setStateTwoImg] = React.useState(false);
    const [stateThreeImg, setStateThreeImg] = React.useState(false);


    React.useEffect(()=>{
        setTimeout(function init(){
            setStateOneImg(false);
            setStateTwoImg(true)

            setTimeout(()=>{
                setStateTwoImg(false);
                setStateThreeImg(true);

                setTimeout(()=>{
                    setStateThreeImg(false);
                    setStateOneImg(true);
                    setTimeout(init, 3000)
                }, 3000)

            }, 3000)

        }, 3000)
    }, [])

    return (
        <Containers ref={reference}>

            <Wrapper>

                <ContainerLeftWhite>

                    {hidratacao &&
                        <>
                            <h2>hidrata????o</h2>

                            <p>Tratamento est??tico em que utilizamos m??scaras de hidratantes para a 
                                reposi????o de ??gua nos fios, necess??rio para continuarem resistentes, 
                                male??veis e brilhantes. Recomend??vel para pessoas que utilizam secador 
                                e chapinha, assim como alisamentos e colora????es. Veja alguns benef??cios 
                                da hidrata????o:
                            </p>

                            <h3>Cabelo:</h3>

                            <div>

                                <li>Mais Brilhante;</li>

                                <li>Male??veis;</li>

                                <li>Sedosos;</li>

                                <li>Apar??ncia Mais Saud??vel;</li>

                            </div>

                            <h3>Fios:</h3>

                            <div>

                                    <li>Fios Mais Resistentes;</li>

                            </div>

                        </>
                    }

                    {reconstruction && 
                        (
                        
                            <>

                                <h2>reconstru????o</h2>

                                <p>
                                    Processo que n??s fazemos que ajuda a repor a queratina do cabelo,
                                     que ?? a prote??na respons??vel por manter a estrutura dos fios 
                                     e que ?? eliminada todos os dias devido ?? exposi????o solar, aos 
                                     alisamentos  com chapinha ou ao uso de qu??micos no cabelo, 
                                     deixando o cabelo mais poroso e quebradi??o.
                                </p>

                            </>

                        )
                    }


                    

                </ContainerLeftWhite>


                <ContainerRightWhite>

                    <ContainerImageSlide>

                        {slide && 
                            <div>

                                {stateOneImg && <img src={firstImage} className={'one'} alt={"Tratament for Woman"}/>}

                                {stateTwoImg && <img src={twoImg} className={'two'}alt={'Tratament for Woman'}/>}

                                {stateThreeImg && <img src={threeImg} className={'three'}alt={'Tratament for Woman'}/>}

                            </div>
                        }

                        {reconstruction && <img className={'womanSolo'} src={reconstrucao} alt="Woman" /> }


                    </ContainerImageSlide>


                </ContainerRightWhite>

            </Wrapper>
            
        </Containers>
    )
}

export default MoreContainerWhite;
