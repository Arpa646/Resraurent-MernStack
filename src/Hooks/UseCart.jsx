import React, { useContext } from 'react';
import {
    useQuery,
  
  } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';
const UseCart = () => {
const {user}=useContext(AuthContext)
  
const {refetch, data:cart=[] } = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async () => {
        const response = await fetch(`http://localhost:5000/savecart?email=${user.email}` )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
   
        return response.json()
      },
  })

  console.log(cart)

return[cart,refetch]

};

export default UseCart;