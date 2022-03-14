import React from "react"

const Card =({className,text,mainText,image})=>{
    return(
        <div className={className}>
          <p id="btext">{text}</p>
          <p id="stext">{mainText}</p>
          <img src={image} alt="icons"/>
        </div>
    )
}
export default Card