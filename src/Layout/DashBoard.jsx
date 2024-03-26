/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import UseCart from '../Hooks/UseCart';
const DashBoard = () => {
  const [cart]=UseCart();
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
      <Outlet></Outlet>
       <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
          
           <button className='btn'><Link to='mycart'>MyCart</Link></button>
        
           <ul className="menu p-4 w-80">

                    <li><Link to="/dashboard/home"><FaHome></FaHome> User Home</Link></li>
                  
                    <li><Link to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</Link></li>
                    <li><Link to="/dashboard/history"><FaWallet></FaWallet> Payment History</Link></li>
                    <li><Link to="/dashboard/alluser"><FaWallet></FaWallet> All user</Link></li>
                    <li>
                        <Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </Link>

                    </li>
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome> Home</Link> </li>
                    <li><Link to="/menu"> Our Menu</Link></li>
                    <li><Link to="/order/salad">Order Food</Link></li>
                </ul>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;