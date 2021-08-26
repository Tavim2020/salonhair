import React from 'react';
import styled from 'styled-components';
import MenuInterable from '../MenuInterable/MenuInterable';


const MenuUser = styled.div`
    width: 100%;
    height: max-content;
`;

const ContainerMenuUser = () => {


    return (
        <MenuUser>
           
                <MenuInterable number={1}>
                    tratamento capilar
                </MenuInterable>  
                
                <MenuInterable number={2}>
                    hidratação
                </MenuInterable>

                <MenuInterable number={3}>
                    nutrição
                </MenuInterable>

                <MenuInterable number={4}>
                    Reconstrução
                </MenuInterable>
            
        </MenuUser>
    )
}

export default ContainerMenuUser;
