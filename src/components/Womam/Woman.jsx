import React from 'react';
import WomanImage from '../../assets/woman.png';
import styled from 'styled-components';

const ImgWoman = styled.img`
    width:40vw;
    height: 41vw;

    @media(max-width: 500px){
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media(min-width: 501px) and (max-width: 950px){
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Woman = () => {
    return (
        <>
            <ImgWoman src={WomanImage}  alt={"Woman"} />
        </>
    )
}

export default Woman;
