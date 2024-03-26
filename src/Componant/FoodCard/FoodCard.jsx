import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseCart from "../../Hooks/UseCart";
const FoodCard = ({ item }) => {
  const { image, name, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
const[,refetch]=UseCart()
  const handleAddToCart = (item) => {
    const orderSave={ItemId:_id,name,email:user.email,price,image}
 
    fetch('http://localhost:5000/savecart',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderSave)
     
    })
    .then(res=>res.json())
    .then(data=>{
  


      if(data.insertedId)
    
      {
        refetch();
     
       toast.success('add To cart');
     
      }
    })
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <ToastContainer />
      <figure className="px-10 pt-10">
        <img src={image} alt="Food" className="rounded-xl" />
      </figure>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes, whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn" onClick={()=>handleAddToCart(item)}>
            order now
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
