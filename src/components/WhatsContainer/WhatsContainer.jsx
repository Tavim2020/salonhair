import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import MiniLogo from '../MiniLogo/MiniLogo';
import CloseIcon from '../../assets/close.png';

const Whats = styled.div`
    position: fixed;
    width: 70%;
    height: 50%;
    left: ${({menutrue}) => menutrue ? '25%' : '15%'};
    top: 25%;
    background-color: #000;
    border-width: 0.4vw;
    border-color: #fff;
    border-style: inset;
    z-index: auto;
    animation: ${({menutrue}) => menutrue ? 'moveRight 0ms 1 2s forwards linear' : 'moveLeft 0ms 1 2s forwards linear'};
    transition:  1s;
    z-index: 16000;
    @keyframes moveRight{
        to{
            left: 25%;
        }
    }

    @keyframes moveLeft{
        to{
            left: 15%;
        }
    }

    .top{
        width: 100%;
        height: 24%;
        display: flex;
        align-items: flex-end;


        div:nth-child(1){
            width: max-content;
            margin-left: 3vw;
        }
        div:nth-child(2){
            flex: 1;
            display: flex;
            justify-content: center;
            
            h2{
                font-family: var(--font-bebas-naue);
                font-size: 2.8vw;
                color: var(--white);
                text-align: center;
                margin-left: 2vw;
                text-decoration: underline;
            }
        }

        div:nth-child(3){
            width: max-content;
            margin-right: 3vw;
            img{
                width: 3vw;
                cursor: pointer;
                transition: transform 0.5s;
                &:hover{
                    transform: rotateZ(90deg);
                }
            }
        }
    }

    .bottom{
        width: 100%;
        height: 76%;
        display: flex;
        align-items: center;
        justify-content: center;

        div:nth-child(1){
            /* width: 40%; */
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            label{
                color: var(--white);
                font-weight: bold;
                font-size: 1.55vw;
                font-family: var(--font-bebas-naue);
            }

            textarea{
                min-width: 15vw;
                max-width: 23.5vw;
                min-height: 15vh;
                max-height: 25vh;
                outline: none;
                background-color: #ffffffe8;
                font-size: 1.6vw;
                color: #000;
                font-family: var(--font-open);
                padding: 1vw;
                letter-spacing: 0.07vw;
            }

        }
        
        div:nth-child(2){
            margin-left: 9.5vw;
            display: flex;
            justify-content: center;
            button{
                width: 12vw;
                height: 8vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #25D366;
                border: none;
                color: var(--white);
                font-size: 1.4vw;
                transition: transform 0.5s;
                cursor: pointer;
                font-weight: bold;

                &:hover{
                    transform: scale3d(1.05, 1.05, 1);
                }
            }
        }
    }

    @media(max-width: 950px){
        width: 95%;
        height: 60%;
        left: ${({menutrue}) => menutrue ? '2.5%' : '2.5%'};
        top: 20%;
        border-width: 1.2vw;
        animation: ${({menutrue}) => menutrue ? 'none' : 'none'};
       

        .top{
            width: 100%;
            height: 18%;
            align-items: center;
            justify-content: center;
            position: relative;


            div:nth-child(1){
                display: none;
            }
            div:nth-child(2){
                
                h2{
                    font-size: 6vw;
                    margin-left: 0vw;
                }
            }

            div:nth-child(3){
                margin-right: 0vw;
                img{
                    width: 11vw;
                    &:hover{
                        transform: initial;
                    }
                }
            }
        }

        .bottom{
            width: 100%;
            height: 62%;
            flex-direction: column;
            margin-top: 20%;

            div:nth-child(1){
                width: 90%;
                height: 50%;
                margin-bottom: 5%;
                label{
                    font-size: 4.5vw;
                    text-align: center;
                    margin-bottom: 3vw;
                }

                textarea{
                    min-width: 80%;
                    max-width: 100%;
                    min-height: 50%;
                    max-height: 100%;
                    font-size: 4.7vw;
                    padding: 2vw;
                    letter-spacing: 0.1vw;
                }

            }
            
            div:nth-child(2){
                width: 100%;
                height: 50%;
                margin-left: 0vw;
                margin-top: 10%;
                button{
                    width: 40vw;
                    height: 65%;
                    font-size: 4.4vw;

                    &:hover{
                        transform: initial;
                    }
                }
            }
        }


    }

`;

const WhatsContainer = () => {

    const { whats, setWhats, menu, mobile } = React.useContext(GlobalContext);

    const [textForWhats, setTextForWhats] = React.useState('');
    const textAreaInput = React.useRef(null);

    function moveToWhats(event){
        event.preventDefault();
        if(whats && textForWhats.trim().length >= 20){
            const numberSchool = +5516993936784;
            window.open(`https://api.whatsapp.com/send?phone=${numberSchool}&text=${textForWhats}`, '_blank')

        }
        else{
            alert('Por favor preencha o formulário com no minímo 20 caracteres sem espaços.');

            if(textAreaInput){
                textAreaInput.current.focus();
            } 
        }
    }

    function CloseWhats(){
        setWhats(false);
    }
   

    return (
        <Whats menutrue={menu}>
            <div className={'top'}>
                <div>
                    <MiniLogo width={'9vw'}  display={mobile && 'none'}/>
                </div>
                
                <div>
                    <h2>Formulário de Envio para WhatsApp</h2>
                </div>

                <div>

                    <img src={CloseIcon} alt="Icon Close" onClick={CloseWhats}/>

                </div>
            </div>
            <form className={'bottom'} onSubmit={moveToWhats}>
                    <div>
                        <label htmlFor="textArea">Digite o Que deseja Enviar:</label>
                        <textarea id="textArea" value={textForWhats} ref={textAreaInput}
                        cols="30" rows="10"
                         maxLength={'180'} required
                         onChange={({target}) => setTextForWhats(target.value)}/>
                    </div>
                    {console.log()}
                    <div>
                        <button type={'submit'}>
                            Enviar
                        </button>
                    </div>

            </form>
            
        </Whats>
    )
}

export default WhatsContainer;
