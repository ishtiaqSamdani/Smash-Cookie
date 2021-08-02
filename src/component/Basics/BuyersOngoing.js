import React ,{useState} from "react";

const BuyerCard = ({ menuData }) => {

    const [data, setdata] = useState(menuData)

    const delItem=(index)=>{

        console.log(index);

        const updated=data.filter((curElem)=>{
          console.log(curElem.id);
            return curElem.id!==index;
        })

        setdata(updated);
    }
  return (
    <>
      <section className="main-card--cointainer">
        {data.map((curElem) => {
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

                  <span className="card_tag  _subtle" onClick={()=>delItem(id)}>close</span>
                  <span className="card_tag  _subtle">extend</span>

                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BuyerCard;
