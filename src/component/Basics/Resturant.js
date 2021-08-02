import React, { useState } from "react";
import "./cursor.css";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import MyOrders from "./myOrders";
import User from "./User";
import MarketPlace from "./MarketPlace";
import BuyerProfile from "./BuyerProfile";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
let noUse = 0;
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const [toMrket, setTOMrket] = useState("");
  
  const [toPage, setToPage] = useState("");

  const [prfil, setPrfil] = useState("")

  const toProfile=(change)=>{
    setPrfil(change)
  }

  if(prfil==="profile"){
    return<BuyerProfile/>
  }

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    const toMyOrders=(to)=>{
      setToPage(to);
  
    }



    setMenuData(updatedList);
  };


  let elemnt;
  const toMarket=(Elem)=>{
    elemnt = Elem;
    console.log(elemnt)
    setTOMrket("toMarket")
  }

  if(toMrket==="toMarket"){

    // console.log(noUse);

    console.log("ele :")

    return<MarketPlace Element={elemnt}/>

  }


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


  const filterLocation = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.location === category;
    });

    setMenuData(updatedList);
  };

  const filterEgg = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.egg === category;
    });

    setMenuData(updatedList);
  };


  const filterBake = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      // return parseInt(curElem.bakedTime) < parseInt(category);

      if (parseInt(curElem.bakedTime) < parseInt(category)) {
        return curElem;
      }

    });

    setMenuData(updatedList);
  };

  const filterBake2 = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {

      if (parseInt(curElem.bakedTime) >= parseInt(category)) {
        return curElem;
      }

    });

    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Cookie Smash</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle /navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active cursor_pointer" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cursor_pointer" onClick={()=>toMyOrders("orders")}>I'm Buyer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cursor_pointer" onClick={()=>toMyOrders("BuyersOngoing")}>I'm Seller</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled cursor_no" tabIndex="-1" aria-disabled="true">MarketPlace</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <button className="btn btn-outline-primary" style={{marginLeft:"0.5rem"}} type="submit" onClick={()=>toProfile("profile")}>Profile</button>
    </div>
  </div>
</nav>
      <h1 className="mt-5">Trending Now</h1>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://source.unsplash.com/1601x450/?chocolate cookie"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://source.unsplash.com/1602x450/?chocolate cookie"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1603x450/?chocolate cookie"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            Filter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle /navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"

                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  on Type
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"

                      onClick={() => filterItem("chocolate")}
                    >
                      chocolate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterItem("vanilla")}>
                      vanilla
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterItem("Oatmeal")}>
                      Oatmeal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterItem("Nutella")} >
                      Nutella
                    </a>
                  </li>

                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      All
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"

                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" onClick={() => filterLocation("mumbai")}>
                      mumbai
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterLocation("pune")}>
                      pune
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      All
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"

                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bake Time
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" onClick={() => filterBake("1")}>
                      less than 1 day
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterBake("6")}>
                      week ago
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterBake2("7")}>
                      more than a week
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      All
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"

                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  egg or egg-less
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" onClick={() => filterEgg("egg")}>
                      Egg
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => filterEgg("noegg")}>
                      Egg-less
                    </a>
                  </li>{" "}
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      All
                    </a>
                  </li> */}
                </ul>
              </li>

              {/* <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item">
                  All
                </a>
              </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
      {/* <MenuCard menuData={menuData} /> */}

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

                  <span className="card_tag  _subtle" onClick={()=>toMarket(id)}>Bid Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Resturant;
