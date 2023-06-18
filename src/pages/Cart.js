import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../store/cartSlice';
const Cart = () => {

  const dispatch = useDispatch();
  const selectedProducts = useSelector((state)=>state.cart);


  const removeItem = (productId) =>{
    dispatch(remove(productId));
  };

  return (
     <div className='cartWrapper' style={{marginTop:20,}}>
        <div>

        </div>
        {
          selectedProducts.map((curElem)=>{
            return(
              <div key={curElem.id} className="cartCard">
                  <img src={curElem.image} alt="" />
                  <h4>{curElem.title}</h4>
                  <h5>Price:{curElem.price}</h5>
                  <button className='btn' onClick={()=>{removeItem(curElem.id)}} >Remove</button>
              </div>
            )
          })
          
        }
    </div>
  )
}

export default Cart;