import React from 'react';
import styled from 'styled-components';
import MiniLogo from '../MiniLogo/MiniLogo';
import TratamentWoman from '../../assets/tratamentWoman.png';
import firstImage from '../../assets/womanNutricao.jpg';
import twoImg from '../../assets/nutrition2.jpg';
import threeImg from '../../assets/nutrition3.jpg';
import { GlobalContext } from '../../context/GlobalContext';

const FirstContainer = styled.section`
    margin: 0 auto;
    width: 100%;
    height: 38.5vw;
    display: flex;
    background-color: var(--background-color-black);

    @media(max-width: 950px){
        height: 155vw;
        flex-direction: column;
    }
`;

const ContainerLogoAndImage = styled.div`
    width: 35%;
    height: 100%;
    display: ${({display, first, three, phone}) => display === first ? 'flex' : display === three && phone ? 'none' : display === three && !phone && 'flex'};;

    .logo{
        width: 50%;
        height: 40%;

        >img{
            width: 8vw;
            margin-left: 7vw;
        }
    }

    @media(max-width: 950px){
        margin: 0 auto;
        width: 90%;
        height: 15%;
        align-items: center;
        justify-content: center;
        margin-top: 10%;

        .logo{
            width: 60%;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;

            >img{
                width: 100%;
                height: 100%;
                margin-left: 0vw;
            }
        }
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
    

    @media(max-width: 950px){
        display: none;

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

    .h2Two{
        margin-top: 6.5vw;
    }

    p{
        width: 83.5%;
        margin-left: 10%;
        color: var(--white);
        font-family: var(--font-open);
        font-size: 1.6vw;
        margin-top: 6.5vw;
    }

    .pTwo{
        margin-top: 6.5vw;
        font-size: 1.6vw; 
        width: 86%;
    }

    blockquote{
        font-family: var(--font-bebas-naue);
        font-size: 1.6vw;
        color: var(--white);
        margin-top: 6.5vw;
        margin-left: 10%;
    }

    @media(max-width: 950px){
        margin: 0 auto;
        width: 90%;
        height: max-content;

        h2{
            font-size: 6vw;
            margin-top: 12.5vw;
        }

        .h2Two{
            margin-top: 15vw;
        }

        p{
            margin: 0 auto;
            width: 100%;
            margin-left: 0%;
            font-size: 4.6vw;
            margin-top: 8.5vw;
            margin-left: 0%;
            text-align: center;
            margin-bottom: 6vw;
        }

        .pTwo{
            margin-top: 6.5vw;
            font-size: 4.6vw; 
            width: 100%;
            height: 30%;
            margin-bottom: 13vw;
        }

        blockquote{
            font-size: 4.6vw;
            margin-top: 8.5vw;
            text-align: center;
            margin-left: 0%;
            margin-bottom: 6vw;
        }
    }

`;

const ContainerTwoWoman = styled.div`
    display: none;

    @media(max-width: 950px){
        display: initial;
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;

        > img{
            width: 50vw;
            filter: saturate(0%);
            pointer-events: none;
            object-fit: cover;
        }

        .one{
            width: 50vw;
        }
    }
`;

const ContainerFirstHome = ({miniLogo, woman, container, reference, slide }) => {

    const { firstContainerScroll, threeContainerScroll, mobile, setMobile } = React.useContext(GlobalContext);
    
    const [stateOneImg1, setStateOneImg1] = React.useState(true);
    const [stateTwoImg2, setStateTwoImg2] = React.useState(false);
    const [stateThreeImg3, setStateThreeImg3] = React.useState(false);
    
    const set1 = React.useRef(null);
    const set2 = React.useRef(null);
    const set3 = React.useRef(null);
    const set4 = React.useRef(null);
    



    React.useEffect(()=>{
        if(window.screen.width > 950){
            setMobile(false);
        }
        else{
            setMobile(true);
        }

        window.addEventListener('resize', ()=>{
            if(window.screen.width > 950){
                setMobile(false);
            }
            else{
                setMobile(true);
            }
        })

        if(mobile === false){
           set1.current = setTimeout(function init(){
                setStateOneImg1(false);
                setStateTwoImg2(true)
    
             set2.current =  setTimeout(()=>{
                    setStateTwoImg2(false);
                    setStateThreeImg3(true);
    
                set3.current = setTimeout(()=>{
                        setStateThreeImg3(false);
                        setStateOneImg1(true);
                       set4.current = setTimeout(init, 3000)
                    }, 3000)
    
                }, 3000)
    
            }, 3000)
        }
        else{
            clearTimeout(set1.current);
            clearTimeout(set2.current);
            clearTimeout(set3.current);
            clearTimeout(set4.current);
        }
    }, [mobile, setMobile])

    return (

       
            <FirstContainer ref={reference} >

                
                   
                        <ContainerLogoAndImage mini={miniLogo} 
                        first={firstContainerScroll.current} three={threeContainerScroll.current} display={reference.current}
                        phone={mobile}>


                                {miniLogo && 
                                    (
                                        <div className={'logo'}>

                                            <MiniLogo />

                                        </div>
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
                    
                
                

                <ContainerText >

                    {container === 'oneText' && 
                        (
                           <>
                                <h2>tratamento diferenciado</h2>

                                <p>Aqui o cuidado com seus cabelos é diferenciado com produtos de qualidade e 
                                visando o máximo de profissionalismo. Clientes sempre felizes e satisfeitos 
                                com os serviços prestados pois buscamos a beleza em sua essência.</p>

                                <blockquote>“a mulher sempre linda e plena”</blockquote>
                            </>
                        )
                    }

                    {container === 'twoText' &&
                         (
                            <>
                                 <h2 className={'h2Two'}>nutrição</h2>
 
                                 <p className={'pTwo'}>Indicada principalmente para pessoas que possuem algum tipo de química, 
                                     tintura ou  alisamento no cabelo. Nossa seção de nutrição consiste 
                                     em deixar seus cabelos brilhantes, macios e alinhados.</p>
 
                             </>
                         )
                        
                    }

                </ContainerText>

                <ContainerTwoWoman>
                    {woman && <img src={TratamentWoman} alt={'Beatiful Woman'} />}

                    {slide && 

                        <div>

                            <img src={firstImage} className={'one'} alt={"Tratament for Woman"}/>

                        </div>

                    }
                </ContainerTwoWoman>
                
            </FirstContainer>
       

        
    )
}

export default ContainerFirstHome;
