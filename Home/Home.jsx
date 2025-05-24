// import React, { useEffect, useState } from 'react'
// import ProductCard from './ProductCard';
// const Home = () => {
//   const [products,setProduct]=useState([]);
//   const [cart,setCart]=useState([]);
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res)=> res.json())
//     .then((data)=>setProduct(data))
//     .catch((err)=>console.error(err));
//   },[]);
//   const handleAddToCart=(product)=>{
//     setCart([...cart,product]);
//     alert("Added to cart:"+product.title);
//   };  
//   return (
// <div>
//   <h2>All Products</h2>
//   <div>
//     {products.map((product)=>(
//       <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>
//     ))}
//   </div>
// </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import './Home.css';
import ProductCard from './ProductCard';
const Home = () => {
  const [products,setProduct]=useState([]);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products'
)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setProduct(data)})
    .catch((err)=>console.error(err));
  },[]);

  const handleAddToCart = (product) => {
    setCart([...cart,product]);
    alert("Added to cart:"+product.title)
  }; 
  
  return (
    <div>
      {/* <section className="HomeSec">
              <h1>Welcome to Amazon</h1>
              <p>Discover unique product,not just another marketplace</p>
     </section> */}
    
     <div>
      {products.map((prod)=>(
        <ProductCard key={prod.id} product={prod} handleAddToCart={handleAddToCart}/>
      ))}
     </div>
     
    </div>
  )
}

export default Home





