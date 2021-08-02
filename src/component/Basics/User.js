import { map } from "async";
import React, { useState } from "react";
import Menu from "./menuApi";
import "./style.css";
import "./cursor.css";
import MenuCard from "./MenuCard";
import BuyerCard from "./BuyersOngoing";
import Navbar from "./Navbar";
import BuyerAddItems from "./BuyerAddItems";
import Resturant from "./Resturant";

function User() {
  const [state, setState] = useState(Menu);
  const [state2, setState2] = useState(Menu);
  const [page, setPage] = useState(6);
  const [home, sethome] = useState("")

  const pageChanger = (num) => {
    setPage(num);
  };

  const toHome = (home) => {

    console.log(home);

    sethome(home);

  }

  if (home === "home") {

    return (
      <Resturant />
    )

  }

  if (page === 6) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">I'm Seller</a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a
                    className="nav-link  cursor_pointer"
                    aria-current="page"
                  >
                    Home
                  </a> */}
                  <a
                    className="nav-link  cursor_pointer"
                    aria-current="page"
                    onClick={() => pageChanger(1)}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item cursor_pointer">
                  {/* <a className="nav-link " onClick={() => pageChanger(2)}> */}
                  <a className="nav-link " onClick={() => pageChanger(2)}>
                    Add Items
                  </a>
                </li>
                <li className="nav-item cursor_pointer">
                  <a className="nav-link active">Orders</a>
                </li>
                <li className="nav-item cursor_pointer">
                  <a className="nav-link cursor_pointer" onClick={() => toHome("home")}>to Home</a>
                  {/* <a className="nav-link cursor_pointer" >to Home</a> */}


                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        {

          state2.map((curElem) => {
            const { id, name, category, image, description, location, bakedTime, egg } = curElem;

            return(
              <>
              <div class="card mb-3">
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{name}</h5>

                <p class="card-text">Winner:Vinay</p>
                <a href="http://#region  ">Profile of vinay</a>

                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
              </>
            )

            

          })

        }

      </>
    )
  }

  if (page === 2) {
    return (
      <>
        <BuyerAddItems />
      </>
    );
  } else if (page === 1) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">I'm Seller</a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active cursor_pointer"
                    aria-current="page"
                    onClick={() => pageChanger(1)}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item cursor_pointer">
                  <a className="nav-link " onClick={() => pageChanger(2)}>
                    Add Items
                  </a>
                </li>
                <li className="nav-item cursor_pointer">
                  <a className="nav-link " onClick={()=>pageChanger(6)}>Orders</a>
                </li>
                <li className="nav-item cursor_pointer">
                  <a className="nav-link cursor_pointer" onClick={() => toHome("home")}>to Home</a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <h1 className="display-2">Ongoing Orders</h1>

        <BuyerCard menuData={state} />
      </>
    );
  }
}

export default User;
