import React, { useState } from 'react'

import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import MarketPlace from './MarketPlace';

function BiddingPlace() {
    
  const [menuData, setMenuData] = useState(Menu);
    return (
        <>

<MarketPlace menuData={menuData} />
            
        </>
    )
}

export default BiddingPlace
