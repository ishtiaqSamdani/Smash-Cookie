import React,{useState}from 'react'
import MenuCard from './MenuCard'
import Menu from "./menuApi.js";

function MarketPlace({ Element }) {

    const [data, setdata] = useState(Menu)

    // const delItem=(Element)=>{

    //     // console.log(index);

    //     const updated=data.filter((curElem)=>{
    //         return curElem.id!==index;
    //     })

    //     setdata(updated);
    // }



    return (
        <>
            <div class="card mb-3">
                <img src="https://source.unsplash.com/1600x450/?chocolate cookie,cookie" class="card-img-top" alt="cookieImg" />
                <div class="card-body">
                    <h5 class="card-title" >Enter your Bid</h5>


                    <form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">Enter Your Bid $</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
    </div>
  </div>

 

  

  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={()=>alert("Your Bid has been Placed")}>Submit</button>
  </div>
</form>




                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Time Remaining : 1 Day</small></p>
                </div>
            </div>

           
        </>
    )
}

export default MarketPlace
