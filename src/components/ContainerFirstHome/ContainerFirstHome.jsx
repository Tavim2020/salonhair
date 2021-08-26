import React from 'react';
import styled from 'styled-components';
import MiniLogo from '../MiniLogo/MiniLogo';
import TratamentWoman from '../../assets/tratamentWoman.png';
import firstImage from '../../assets/womanNutricao.jpg';
import twoImg from '../../assets/nutrition2.jpg';
import threeImg from '../../assets/nutrition3.jpg';

const FirstContainer = styled.section`
    margin: 0 auto;
    width: 100%;
    height: 38.5vw;
    display: flex;
    background-color: var(--background-color-black);
`;

const ContainerLogoAndImage = styled.div`
    width: 35%;
    height: 100%;
    display: flex;

    >img{
        margin-top: 2.4vw;
        margin-left: 5vw;
    }
`;

const ContainerImage = styled.div`
    width: ${({mini}) => mini ? 'maxContent' : '100%'};
    display: flex;
    align-items: ${({mini}) => mini ? 'flex-end' : 'center'};
    justify-content: ${({mini}) => mini ? 'flex-end' : 'center'};
    margin-left: ${({mini}) => mini ? '-28%' : '30%'};;
    
    > img{
        width: 34vw;
        filter: saturate(0%);
        pointer-events: none;
        object-fit: cover;
    }

    div{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        img{
            width: 21vw;
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
            transform: translateY(100%);

            @keyframes moveImgThree{
                100%{
                    transform: translateY(0%);
                }
            }
        }
        
    }
    
`;

const ContainerText = styled.div`
    width: 60%;
    height: 100%;

    h2{
        font-family: var(--font-bebas-naue);
        font-size: 2.8vw;
        color: var(--white);
        margin-top: 7.5vw;
        text-align: center;
        text-decoration: underline;
    }

    p{
        width: 83.5%;
        margin-left: 10%;
        color: var(--white);
        font-family: var(--font-open);
        font-size: 1.6vw;
        margin-top: 6.5vw;
    }

    blockquote{
        font-family: var(--font-bebas-naue);
        font-size: 1.6vw;
        color: var(--white);
        margin-top: 6.5vw;
        margin-left: 10%;
    }

`;

const ContainerFirstHome = ({miniLogo, woman, container, reference, slide}) => {

    
    const [stateOneImg1, setStateOneImg1] = React.useState(true);
    const [stateTwoImg2, setStateTwoImg2] = React.useState(false);
    const [stateThreeImg3, setStateThreeImg3] = React.useState(false);


    React.useEffect(()=>{
        setTimeout(function init(){
            setStateOneImg1(false);
            setStateTwoImg2(true)

            setTimeout(()=>{
                setStateTwoImg2(false);
                setStateThreeImg3(true);

                setTimeout(()=>{
                    setStateThreeImg3(false);
                    setStateOneImg1(true);
                    setTimeout(init, 3000)
                }, 3000)

            }, 3000)

        }, 3000)
    }, [])

    return (

       
            <FirstContainer ref={reference} >

                <ContainerLogoAndImage mini={miniLogo}>

                    {miniLogo && 
                        (
                            <MiniLogo 
                            width={'10vw'}
                            height={'14vh'}/>

                        )
                    }

                    <ContainerImage mini={miniLogo}>

                        {woman && <img src={TratamentWoman} alt={'Beatiful Woman'} />}

                        {slide && 

                            <div>

                                {stateOneImg1 && <img src={firstImage} className={'one'} alt={"Tratament for Woman"}/>}

                                {stateTwoImg2 && <img src={twoImg} className={'two'}alt={'Tratament for Woman'}/>}

                                {stateThreeImg3 && <img src={threeImg} className={'three'}alt={'Tratament for Woman'}/>}

                            </div>

                        }

                    </ContainerImage>


                </ContainerLogoAndImage>

                <ContainerText>

                    {container === 'oneText' && 
                        (
                           <>
                                <h2>tratamento diferenciado</h2>

                                <p>Aqui o cuidado com seus cabelos é diferenciado com produtos de qualidade e 
                                visando o máximo de profissionalismo. Clientes sempre felizes e satisfeitos 
                                com os serviços prestados pois buscamos a beleza em sua essencia.</p>

                                <blockquote>“a mulher sempre linda e plena”</blockquote>
                            </>
                        )
                    }

                    {container === 'twoText' &&
                         (
                            <>
                                 <h2 style={{marginTop: '6.5vw'}}>nutrição</h2>
 
                                 <p style={{marginTop: '6.5vw', fontSize: '1.6vw', width: '86%'}}>Indicada principalmente para pessoas que possuem algum tipo de química, 
                                     tintura ou  alisamento no cabelo. Nossa seção de nutrição consiste 
                                     em deixar seus cabelos brilhantes, macios e alinhados.</p>
 
                             </>
                         )
                        
                    }

                </ContainerText>
                
            </FirstContainer>
       

        
    )
}

export default ContainerFirstHome;
