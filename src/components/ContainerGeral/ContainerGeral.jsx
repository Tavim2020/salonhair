import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
`;

const ContainerGeral = ({ children, display, flexDirection, 
    alignItems, justifyContent, position, width, margin}) => {
    return (
        <Container style={{ display, flexDirection, 
        alignItems, justifyContent, position, width, margin}}>
            {children}
        </Container>
    )
}

export default ContainerGeral
