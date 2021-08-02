import React,{ useState } from 'react'

import "./style.css";
import Menu from "./menuApi.js";
import Menu2 from './onGoingOrders';
import Menu3 from './WonOrders';
import Menu4 from './lostOrders';
import MenuCard from "./MenuCard";

import Resturant from './Resturant';


const MyOrders=()=> {
const [count, setCount] = useState(2);
const [menuData, setMenuData] = useState(Menu2);
const [menuData3, setMenuData3] = useState(Menu3);
const [menuData4, setMenuData4] = useState(Menu4);
const [state, setstate] = useState("")
const Page=(Won)=>{
    setCount(Won);
}

const Home=(home)=>{
  setstate(home)
}

if(state==="home"){
  return(
    <Resturant/>
  )
}

if(count===1){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">I'm Buyer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle /navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item cursor_pointer">
            <a className="nav-link  cursor_pointer" aria-current="page"  onClick={()=>Page(2)}>Ongoing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active cursor_pointer" onClick={()=>Page(1)}>Won</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cursor_pointer" onClick={()=>Page(3)}>lost</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cursor_pointer" onClick={()=>Home("home")}>to Home</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<MenuCard menuData={menuData3} />


    </>
  )

}
else if(count===2){


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<a className="navbar-brand">I'm Buyer</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle /navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item cursor-pointer">
        <a className="nav-link active cursor_pointer" aria-current="page"  onClick={()=>Page(2)}>Ongoing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link cursor_pointer" onClick={()=>Page(1)}>Won</a>
    </li>
    <li className="nav-item">
      <a className="nav-link cursor_pointer" onClick={()=>Page(3)}>lost</a>
    </li>
    <li className="nav-item">
          <a className="nav-link cursor_pointer" onClick={()=>Home("home")}>to Home</a>
        </li>
  </ul>
  <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
</div>
</div>
</nav>

<MenuCard menuData={menuData} />



    </>
)

}
else{
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<a className="navbar-brand">I'm Buyer</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle /navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item cursor-pointer">
        <a className="nav-link  cursor_pointer" aria-current="page"  onClick={()=>Page(2)}>Ongoing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link cursor_pointer" onClick={()=>Page(1)}>Won</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active cursor_pointer" onClick={()=>Page(3)}>lost</a>
    </li>
    <li className="nav-item">
          <a className="nav-link cursor_pointer" onClick={()=>Home("home")}>to Home</a>
        </li>
  </ul>
  <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
</div>
</div>
</nav>

<MenuCard menuData={menuData4} />



    </>
)
}
  


}

export default MyOrders
