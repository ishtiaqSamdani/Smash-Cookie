import React,{useState} from "react";
import User from "./User";

import Resturant from "./Resturant";
import Menu from "./menuApi";


function BuyerAddItems() {
  const [page, setPage] = useState(2);
  
  const [home, sethome] = useState("")

  const [state2, setState2] = useState(Menu)

  const pageChanger = (num) => {
    setPage(num);
  };

  const toHome=(home)=>{

    console.log(home);

    sethome(home);

  }

  if(home==="home"){

    return(
      <Resturant/>
    )

  }

  if(page===1){
    return (
      <>
      <User/>
      </>
    )
  }
  if(page===6){
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
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
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
              <li className="nav-item">
                <a className="nav-link " aria-current="page" onClick={() => pageChanger(1)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Add Items</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " onClick={() => pageChanger(6)}>Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link "onClick={()=>toHome("home")}>to Home</a>
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
      <h1 className="display-3 ml-3 bold">Fill to upload product</h1>
 
      <div className="container mt-3">
        <form className="row row-cols-lg-auto g-3 align-items-center">
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Item's name" aria-label="Item's name" aria-describedby="button-addon2"/>
</div>

          <div className="col-12">
            <label className="visually-hidden" for="inlineFormSelectPref">
              Preference
            </label>
            <select className="form-select" id="inlineFormSelectPref">
              <option selected>Category</option>
              <option value="1">chocolate</option>
              <option value="2">vanilla</option>
              <option value="3">Oatmeal</option>
              <option value="3">Nutella</option>
            </select>
          </div>
          <div className="col-12">
            <label className="visually-hidden" for="inlineFormSelectPref">
              Preference
            </label>
            <select className="form-select" id="inlineFormSelectPref">
              <option selected>Location</option>
              <option value="1">mumbai</option>
              <option value="2">pune</option>
            </select>
          </div>

          <div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="text" className="form-control" placeholder="Price(in Rupees)" aria-label="Amount (to the nearest dollar)"/>
</div>
          <div className="input-group mb-3">
  <span className="input-group-text">Baked Time</span>
  <input type="text" className="form-control" placeholder="Baked Time(in days)" aria-label="Amount (to the nearest dollar)"/>
</div>


<div className="col-12">
            <label className="visually-hidden" for="inlineFormSelectPref">
              Preference
            </label>
            <select className="form-select" id="inlineFormSelectPref">
              <option selected>Egg or no-egg</option>
              <option value="1">egg is present</option>
              <option value="2">no-egg is present</option>
            </select>
          </div>
          <div className="input-group mb-3">
  <label className="input-group-text" for="inputGroupFile01">Upload Image</label>
  <input type="file" className="form-control" id="inputGroupFile01"/>
</div>

<div className="input-group">
  <span className="input-group-text">description</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
          <div className="col-12">
            <div className="form-check">
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BuyerAddItems;
