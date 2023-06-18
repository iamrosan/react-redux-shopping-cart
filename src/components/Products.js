import React, {useEffect, useState} from 'react';
import {add} from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../store/productSlice';
// import { STATUSES } from '../store/productSlice';


const Products = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    // const {data:products, status} = useSelector((state)=>state.product)

    useEffect(()=>{
                // dispatch(fetchProducts())
        const fetchProducts = async () =>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
            console.log('products:',products);
        }
        fetchProducts();
    },[])
    
    const addToCart = (product)=>{
        dispatch(add(product));
    }

    // if (status===STATUSES.LOADING){
    //     return <h5>LOADING !!!!!!!!</h5>
    // }

    // if (status===STATUSES.ERROR){
    //     return <h5>ERROR OCCURED DURING THE PROCESS !!!!!!!!</h5>
    // }
    return (

        <>
            <div className='productsWrapper'>
                {
                    products.map((curElem)=>{
                            return(<div className='card' key={curElem.id}>
                                <img src={curElem.image} alt="" />
                                <h4>{curElem.title}</h4>
                                <h5>Price: {curElem.price}</h5>
                                {/* <p>{curElem.description}</p> */}
                                <button onClick={()=>{addToCart(curElem)}} className='btn'>Add To Cart</button>
                            </div>)
                    })

                };
            </div>
        
        </>
  )
};

export default Products;