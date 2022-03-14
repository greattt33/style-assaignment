import Contents from "./Contents"
import styled from "styled-components"

export const ContentStyle= styled(Contents)`
    display:flex;
    font-family:tohooma,vandana,sans-serif;
    flex-direction:column;
    width:100%;
    background-color:white;
    height:100%;
    justify-content:center;
    align-items:space-around;
    .cards{
        width:95%;
        height:80%;
        align-items:center;
        justify-content:center;
        display:flex;
        margin-bottom:20px;
        flex-direction:row;
        gap:20px;
    }
    #s-top-text{
        font-size:24px;
        font-weight:light;
        color:rgb(157, 170, 165);  
        margin:0px; 
    }
    #b-top-text{
        font-size:24px;
        font-weight:bold;
        margin:0px;   
    }
    #sm-top-text{
        font-size:15px;
       color:rgb(157, 170, 165);
        font-weight:regular; 
        margin:0px;  
    }
    .words{
        text-align:center;
        width:100%;
        height:20%;
        display:grid;
        place-items:center;
    }
`