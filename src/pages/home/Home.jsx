import { useState } from 'react'

import axios from 'axios'
import MainBanner from '../../components/mainBanner/MainBanner'
import PopularPr from '../../components/popularPr/PopularPr'
import ReviewClien from '../../components/reviewClien/ReviewClien'
import GetEmails from '../../components/getEmails/GetEmails'
const Home = () => {
  const [products,setProducts] = useState([])
  const getProducts = async()=>{
    const response = await axios.get(`http://localhost:4001/api/v1/product`);
    setProducts(response.data);
  }
  useState(()=>{
    getProducts()
  },[])

    const filtetMenPr = products.filter((product)=>product.category.includes('men'));
    const filterWomenPr=products.filter((product)=>product.category.includes('women'))
  return (
    <>
        <MainBanner/>
        <PopularPr menPr={filtetMenPr} womenPr={filterWomenPr}/>
        <ReviewClien/>
        <GetEmails/>
    </>
  )
}

export default Home
