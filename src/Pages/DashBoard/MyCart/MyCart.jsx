import React from 'react';
import UseCart from '../../../Hooks/UseCart';

const MyCart = () => {
const [cart,refetch]=UseCart()
console.log(cart)
const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/savecart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>{ 
        refetch()
        console.log(data)});
  };
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>email</th>
  
              <th>role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((user, index) => {
              return (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                 <img className='w-20 p-1' src={user.image} alt=""  />
                  <td>{user?.name}</td>
              
                  <td
                    className="btn 
           "
           onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </td>
                  <td
                    className="btn 
           "
                  
                  >
                    admin
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default MyCart;