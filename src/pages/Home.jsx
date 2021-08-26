import React from 'react';
import styled from 'styled-components';
import ContainerGeral from '../components/ContainerGeral/ContainerGeral';
import MenuContainer from '../components/MenuContainer/MenuContainer';
import { GlobalContext } from '../context/GlobalContext';
import ContainerFirstHome from '../components/ContainerFirstHome/ContainerFirstHome';
import MoreContainerWhite from '../components/MoreContainerWhite/MoreContainerWhite';
import ContatoContainer from '../components/ContatoContainer/ContatoContainer';
import WhatsContainer from '../components/WhatsContainer/WhatsContainer';


const Container = styled.main`
    width: 100vw;
    height: 100%;
    display: flex;
    position: relative;
`;


const ButtonOpenMenu = styled.div`
    width: 4vw;
    height: 4.5vw;
    position: fixed;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    cursor: pointer;
    transition: ${({menutrue}) => menutrue ? 'opacity 0.4s' : 'opacity 3s'};
    opacity: ${({menutrue}) => menutrue ? '0' : '1'};

    svg{
        width: 3vw;
    }
`;





const Home = () => {

    const { menu, setMenu, twoContainerScroll, firstContainerScroll, threeContainerScroll,
        fourContainerScroll, ContatoContainerScroll, whats, map} = React.useContext(GlobalContext);

    const menuOpen = React.useRef();

    function MenuTrueFunction(){
        setMenu(true);
    }

     React.useEffect(() =>{
        if(twoContainerScroll.current && threeContainerScroll.current && menuOpen &&
            fourContainerScroll.current && ContatoContainerScroll.current ){
            window.addEventListener('scroll', ()=>{
                if((window.scrollY >= twoContainerScroll.current.offsetTop - 60 &&
                    window.scrollY <= threeContainerScroll.current.offsetTop -60) || (
                    window.scrollY >= fourContainerScroll.current.offsetTop - 60 &&
                    window.scrollY <= ContatoContainerScroll.current.offsetTop -60) ){
                        
                    menuOpen.current.style.backgroundColor = 'rgba(0, 0, 0, 80%)';
                    menuOpen.current.children[0].style.fill = '#fff';
                }
                else{
                    menuOpen.current.style.backgroundColor = '#ffff';
                    menuOpen.current.children[0].style.fill = '#000';
                }

            })

        }
    }, [threeContainerScroll, twoContainerScroll, fourContainerScroll, ContatoContainerScroll]);


    React.useEffect(()=>{
        if(whats && map.current){
            map.current.style.zIndex = '-1';
        }
        else{
            map.current.style.zIndex = '1000';
        }
    }, [whats, map])

    return (
        <Container>

            <MenuContainer /> 
                

            <ButtonOpenMenu onClick={MenuTrueFunction} menutrue={menu} ref={menuOpen}>

                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
                </svg>

            </ButtonOpenMenu>

           <ContainerGeral
           width={'100%'}>

                <ContainerFirstHome miniLogo={true} woman={true} 
                container={'oneText'} reference={firstContainerScroll}/>

                <MoreContainerWhite reference={twoContainerScroll} slide={true} hidratacao={true}/>

                <ContainerFirstHome container={'twoText'} reference={threeContainerScroll} slide={true} />

                <MoreContainerWhite reference={fourContainerScroll} reconstruction={true}  slide={false}/>

                <ContatoContainer />

           </ContainerGeral>

           {whats && <WhatsContainer />}

        </Container>
    )
}

export default Home;
