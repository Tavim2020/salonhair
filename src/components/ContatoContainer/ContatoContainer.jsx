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
`;

const BoxGeral = styled.div`
    margin: 0 auto;
    width: 88%;
    height: 60%;
    display: flex;
    align-items: center;
    margin-top: 5vw;
`;

const Information = styled.div`
    width: 50%;
    height: 100%;

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
`;

const M = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContatoContainer = () => {

    const { ContatoContainerScroll, setWhats, map, whats} = React.useContext(GlobalContext);

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

                <div id="mapid" style={{ height: '100%', width: '70%'}} ref={map}>

                </div>

                </M>

            </BoxGeral>
            
        </Contato>
    )
}

export default ContatoContainer;
