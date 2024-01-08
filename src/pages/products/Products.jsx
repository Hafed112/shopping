import { useEffect, useState } from 'react'
import './products.css'
import axios from "axios";
import Pagination from '../../pagination/Pagination';
import { Link } from 'react-router-dom';

const Products = () => {

  const [products,setProducts]=useState([]);
  const [filterTech,setfilterTech] =useState([])
  


  //checkbox filter
  const handleCheckbox=(e)=>{
      if(!filterTech.includes(e.target.value)){
        setfilterTech([...filterTech,e.target.value])
      }else{
        setfilterTech([...filterTech.filter(item=>item !== e.target.value)])
      }
      
  }
  
  const getProudcts = async()=>{
        try {
            const response = await axios.get(`http://localhost:4001/api/v1/product`);
            setProducts(response.data)
            // setLoading(false)
        } catch (error) {
            alert('error')
        }
  }

  const filterProduct = products.filter(product => 
    product.category.some(category =>filterTech.includes(category)))

   //because i'am using options u can filter like all product or filter specific product
    const productsExists = filterProduct.length>0 ? filterProduct : products;

  useEffect(()=>{
    getProudcts();
  },[])



    //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = productsExists.slice(indexOfFirstRecord, 
                                    indexOfLastRecord);

    

  
  const nPages = Math.ceil(productsExists.length / recordsPerPage)
  console.log(currentRecords)
  console.log(products)


  return (
    <>
     
     <div className="page-heading" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-content">
                        <h2>Check Our Products</h2>
                        <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="section" id="products">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">  
                    <div className="section-heading">
                        <h2>Our Latest Products</h2>
                        <span>Check out all of our products.</span>
                    </div>
                    <div className='container check'> 
                        <div className="custom-control custom-checkbox custom-control-inline"
                        >
                          <input type="checkbox" className="custom-control-input" id="defaultInline1" 
                            name='tech' value="men"
                            onChange={(e)=>handleCheckbox(e)}
                          />
                          <label className="custom-control-label text-lg" htmlFor="defaultInline1">men</label>
                        </div>

                        <div className="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" className="custom-control-input" id="defaultInline3" 
                            name='tech' value="women"
                            onChange={(e)=>handleCheckbox(e)}
                          />
                          <label className="custom-control-label" htmlFor="defaultInline3">women</label>
                        </div>

                        <div className="custom-control custom-checkbox custom-control-inline">
                          <input type="checkbox" className="custom-control-input" id="defaultInline2" 
                            name='tech' value="sweater"
                            onChange={(e)=>handleCheckbox(e)}
                          />
                          <label className="custom-control-label" htmlFor="defaultInline2">sweater</label>
                    </div>

                    <div className="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" className="custom-control-input" id="defaultInline5"
                        name='tech' value="jacket"
                        onChange={(e)=>handleCheckbox(e)} 
                      />
                      <label className="custom-control-label" htmlFor="defaultInline5">jacket</label>
                    </div>        
                </div>
              </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    currentRecords.map(product=>(
                        <>
                        <div className="col-lg-4" key={product?._id} id='product'>
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><Link to={`/product/${product._id}`}><i className="fa fa-eye"></i></Link></li>
                                            {/* <li><Link to="single-product.html"><i className="fa fa-star"></i></Link></li>
                                            <li>
                                              <Link to="single-product.html"><i className="fa fa-shopping-cart"></i></Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <img src={product?.cartImg} alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>{product?.title}</h4>
                                    <span>{product?.price}</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </>
                    ))
                }
                
         
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    </section>
    </>

  )
}

export default Products
