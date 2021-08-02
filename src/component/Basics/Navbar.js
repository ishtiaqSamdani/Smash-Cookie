import React, { useState } from "react";
import MyOrders from "./myOrders";

import Resturant from "./Resturant";
import BuyerCard from "./BuyersOngoing";
import User from "./User";

const Navbar = ({ filterItem, menuList }) => {

  const [toPage, setToPage] = useState("");

  const toMyOrders=(to)=>{
    setToPage(to);

  }

  if(toPage==="orders"){
    return(
      <>
      <MyOrders/>
      </>
    )
  }
  if(toPage==="BuyersOngoing"){

    return(
      <User/>
    )

  }
  return (
    <>
      {/* <nav className="nav-bar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle /navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>toMyOrders("orders")}>I'm Buyer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>toMyOrders("BuyersOngoing")}>I'm Seller</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" tabindex="-1" aria-disabled="true">MarketPlace</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>




    </>
  );
};

export default Navbar;
