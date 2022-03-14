import React from "react"
import home from "./images/home.jpg"
import bulb from "./images/bulb.jpg"
import search from "./images/search.jpg"
import desktop from "./images/desktop.jpg"
import {CardBoxStyle} from "./CardBox.style.js"
import {CardStyle} from "./Card.style.js"

const Contents=({className})=>{
    return(
        <div className={className}>
            <div className="words">
                 <p id="s-top-text">Reliable,Efficient</p>
                 <p id="b-top-text">Powered By Technology</p>
                 <p id="sm-top-text">lorem ipsium sagaster nin ipsium magasters ni tendo magnum</p>
            </div>
            <div className="cards">
              <CardStyle text="Supervisor" mainText="Monitor actic=vities to identify project roadblock" image={search}/>
              <CardBoxStyle>
                 <CardStyle text="Team Builder" mainText="Scan our talent network to build the best team for your project" image={home}/>
                 <CardStyle text="Karma" mainText="Regularly eveluate our talent to ensure quality" image={bulb}/>
              </CardBoxStyle>
              <CardStyle text="Calculator" mainText="Use data from past project to ensure better delivery" image={desktop}/>    
            </div>    
        </div>
    )
}
export default Contents