import React from "react";
// import Sdata from "./Sdata";
import Images from "./images";
import Heading from "./Heading";

function Card(props) {
    return(
      <>
    <div className="cards">
        <div className="card">
            <Images imgsrc={props.imgsrc} />
            <div className="card_info"> 
                <span className="card_category">{props.title}</span><br/><br/>
                <Heading sname= {props.sname} /> <br/>
                <a href={props.link} target="_blank" >
                <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
    </>
  );
}
  export default Card;