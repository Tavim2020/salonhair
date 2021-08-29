import React from 'react';



export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) =>{
    const [button, setButton] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    const firstContainerScroll = React.useRef(null);
    const twoContainerScroll = React.useRef(null);
    const threeContainerScroll = React.useRef(null);
    const fourContainerScroll = React.useRef(null);
    const ContatoContainerScroll = React.useRef(null);
    const [whats, setWhats] = React.useState(false);
    const map = React.useRef(null);
    const [mobile, setMobile] =  React.useState(false);

   

    
    return (
        <GlobalContext.Provider value={{
            button, 
            setButton,
            menu, 
            setMenu,
            firstContainerScroll,
            twoContainerScroll,
            threeContainerScroll,
            fourContainerScroll,
            ContatoContainerScroll,
            whats, 
            setWhats,
            map,
            mobile,
            setMobile,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}