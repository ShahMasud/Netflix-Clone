import React from "react";
// import Sdata from "./Sdata";

function Card(props) {
    return(
      <>
    <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card_img" />
            <div className="card_info">
                <span className="card_category">{props.title}</span><br/><br/>
                <h3 className="card_title">{props.sname}</h3><br/>
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