// import React from 'react'

// const ProductCard = ({product,handleAddToCart}) => {

//   return (
//    <div style={{
//                 width:"250px",
//                 border:"1px solid black",
//                 borderRadius:"10px",
//                 padding:"15px",
//                 textAlign:"center",
//                 background:"#fff"
//    }}>
// <img src={product.image} alt={product.title} style={{height:"150px"}}/>
// <h4>{product.title.slice(0,30)}...</h4>
// <p>RS {product.price}</p>
// <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
//    </div>
//   )
// }

// export default ProductCard








import React from 'react'
import './ProductCard.css';
const ProductCard = ({product,handleAddToCart}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} style={{height:"15opx"}} className='product-img'/>
      <div className='product-detail'>
      <h3 className='product-name'>{product.title.slice(0,60)}</h3>
      <p className='product-price'>ID {product.id}</p>
      </div>
      
        <div className='btn-group'>
      <button onClick={()=> handleAddToCart(product)} className='add-btn'>Add to cart</button>
      </div>
    
    </div>
  )
}

export default ProductCard