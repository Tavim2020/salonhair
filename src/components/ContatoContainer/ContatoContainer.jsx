import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';
import whatsapp from '../../assets/whatsapp.png';
import L from 'leaflet';


const Contato = styled.section`
    width: 100%;
    height: 38.5vw;
    background-color: var(--background-color-black);
    padding-top: 6vw;

    h2{
        text-align: center;
        font-size: 2.8vw;
        color: var(--white);
        font-family: var(--font-bebas-naue);
    }

    @media(max-width: 950px){
        width: 100%;
        height: 155vw;
        padding-top: 10vw;
       

        h2{
            font-size: 6vw;
        }
    }
`;

const BoxGeral = styled.div`
    margin: 0 auto;
    width: 88%;
    height: 60%;
    display: flex;
    align-items: center;
    margin-top: 5vw;

    @media(max-width: 950px){
        width: 90%;
        height: 123vw;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10vw;
    }
`;

const Information = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    p{
        width: 77%;
        margin-left: 11.5%;
        color: var(--white);
        font-family: var(--font-open);
        font-size: 1.7vw;
    }

    img{
        margin-top: 4vw;
        margin-left: 24%;
        width: 3vw;
        cursor: pointer;
    }

    @media (max-width: 950px){
        width: 100%;
        height: 45%;

        p{
            width: 100%;
            margin-left: 0%;
            font-size: 4.5vw;
        }

        img{
            margin-top: 8vw;
            margin-left: 45%;
            width: 10vw;
        }
    }
`;

const M = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 950px){
        width: 100%;
        height: 55%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

const ContatoContainer = () => {

    const { ContatoContainerScroll, setWhats, map, whats, mobile} = React.useContext(GlobalContext);
   

    React.useEffect(() => {
        // create map
        const position = [-20.7204, -47.8876];
    
    var mymap = L.map('mapid').setView(position, 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: `${process.env.REACT_APP_TOKEN}`,
    }).addTo(mymap);


        L.marker(position).addTo(mymap);
  }, []);


    function sendWhats(){
        setWhats(!whats);
    }
    const [widthMap, setWidthMap] = React.useState('70%');
    const [heightMap, setHeightMap] = React.useState('100%');

    React.useEffect(()=>{
        if(mobile){
            setWidthMap('100%');
            setHeightMap('100%');
            
        }
        else{
            setWidthMap('70%');
            setHeightMap('100%');
        }

    }, [mobile])

    return (
        <Contato ref={ContatoContainerScroll}>

            <h2>Contato</h2>

            <BoxGeral>

                <Information>

                    <p><strong>Endereço:</strong> Rua Fictícia João Caetano Costa Pereira</p>
                    <p><strong>Bairro:</strong> Adaito Silva Gonçalvez</p>
                    <p><strong>Número:</strong> 1234</p>
                    <p><strong>E-mail:</strong> ficticio@email.com</p>
                    <p><strong>Telefone:</strong> (12)1234-1234</p>

                    <img src={whatsapp} alt="whatsapp" onClick={sendWhats}/>

                </Information>

                <M>

                <div id="mapid" style={{ height: heightMap, width: widthMap}} ref={map}>

                </div>

                </M>

            </BoxGeral>
            
        </Contato>
    )
}

export default ContatoContainer;
