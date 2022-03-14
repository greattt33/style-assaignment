import styled from "styled-components"
import Card from "./Card"

export const CardStyle= styled(Card)`
  width:250px;
  height:250px;
  background-color:white;
  box-shadow:1px 2px 2px 2px whitesmoke;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:30px;
  position:relative;
  align-text:left;
  #btext{
      font-size:19px;
      font-weight:bold;
      align-text:left;
      width:80%;
      color:rgb(50, 58, 55);
      margin-top:20px;
      margin-bottom:0px;
  }
  #stext{
    font-size:15px;
    color:rgb(157, 170, 165);
    width:80%;
    margin:0px;
    word-wrap:break-word;
   }
   img{
       width:80px;
       height:80px;
       position:relative;
       left:60px; 
   }
`