import React from 'react';
//pagination will be added 
const FoodCard = ({item}) => {
    const {image,name,price,recipe,_id}=item
    console.log(image,price,recipe)
    const handleaddToCart=(id)=>{
     
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image}alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn " onClick={()=>handleaddToCart(item)}>order now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;