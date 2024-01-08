import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import SingleProduct from './components/singleProduct/SingleProduct'

import Home from './pages/home/Home'
import Products from './pages/products/Products'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import uuid from 'react-uuid';



const cartFromLocalStorage=JSON.parse(localStorage.getItem('cart')) ||[];

function App() {


  //for number of Orders
  const [NbOrder,setNbOrder]=useState(1);

  const increment = ()=>{
    setNbOrder(NbOrder+1);
  }
  const decrement = ()=>{
    setNbOrder(NbOrder>1 ? NbOrder-1 : 1);
  }

  const [OrderData,setOrderData]=useState(cartFromLocalStorage); 
  const orderLenght  = OrderData.length;

  const [product,setProduct]=useState([]);
  const [color,setColor]=useState("");

  console.log(OrderData)

   //this code if i choise color the image change to clothes with this color
  const choseColor = product.img?.find(img=>img[color]);
  const choseImg = choseColor ? choseColor[color] :product?.cartImg
  console.log(choseImg)

  //this for singleProduct
  const addToCart = (NbOrder) =>{
    const price=product?.price * NbOrder
    const productTitle=product.title
    const productCategory=product.category
    const productId=product._id
      const id=uuid();
    setOrderData([...OrderData,{id,productId,choseImg,color,NbOrder,price,productTitle,productCategory}])
  }

  //remove product from shopCart

  const removeProduct = (id) =>{
     const updatedOrderData = OrderData.filter(order => order.id !== id);
      setOrderData(updatedOrderData);

      // Update localStorage with the modified OrderData
      localStorage.setItem('cart', JSON.stringify(updatedOrderData));
  }


  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(OrderData));

  },[OrderData])


   

  return (
    <>
    <Router>
    <Header orderLenght={orderLenght}/>
    <div className='dev'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:productId/' element={
        <SingleProduct 
          addToCart={addToCart} OrderData={OrderData} 
          NbOrder={NbOrder} increment={increment} decrement={decrement}
          product={product} setProduct={setProduct} color={color} setColor={setColor} choseImg={choseImg}
        />
        }/>
        <Route path='/shopcart' element={<ShoppingCart 
          NbOrder={NbOrder} increment={increment} decrement={decrement}
          OrderData={OrderData} removeProduct={removeProduct}
        />
        }/>
      </Routes>
    </div>
    <Footer/>
    </Router>
    </>
  )
}

export default App
