import  { createContext } from 'react'


const DrawContext = createContext({
    drawstatus:false,
    toggleDrawer:()=>{}
});

export default DrawContext;
