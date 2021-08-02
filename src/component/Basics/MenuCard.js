import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import MarketPlace from "./MarketPlace";
import Resturant from "./Resturant";

import noUse from  "./Resturant";






const MenuCard = ({ menuData }) => {

  const [toMrket, setTOMrket] = useState("")
  let elemnt;
  const toMarket=(Elem)=>{
    elemnt = Elem;
    setTOMrket("toMarket")
  }

  if(toMrket==="toMarket"){

    console.log(noUse);

    return<MarketPlace Element={elemnt}/>

  }


  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description,location,bakedTime,egg } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-author _subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-author _subtle">location: {location}</span>
                    <span className="card-author _subtle">bakedtime: {bakedTime}</span>
                    <span className="card-author _subtle">{egg}</span>

                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="_images_" className="card_media" />

                  <span className="card_tag  _subtle" onClick={()=>toMarket(id, name, category, image, description,location,bakedTime,egg)}>Bid Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
