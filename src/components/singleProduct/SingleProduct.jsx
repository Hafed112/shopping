import { useEffect } from 'react'
import "./singleproduct.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SingleProduct = ({addToCart,OrderData,NbOrder,increment,decrement,product,setProduct,color,setColor,choseImg}) => {
  const {productId} = useParams();
  
 



  const getProduct =async()=>{
    try {
        const response=await axios.get(
            `https://api-offs.onrender.com/api/v1/product/${productId}`
        );
        setProduct(response.data);
        setColor(response.data.defaultColor)

    } catch (error) {
        alert('error');
    }
  }

  useEffect(()=>{
    getProduct();
  },[])


  
  

  return (
    <>
    <div className="page-heading" id="top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-content">
                        <h2>Single Product Page</h2>
                        <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="section" id="product">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="left-images">
                    <img src={choseImg} alt="" />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="right-content">
                    <h4>{product.title}</h4>
                    <span className="price">{product.price} DH</span>
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                    <span>{product.description}.</span>
                    <div className="quote">
                        <i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                    </div>
                    <div className="quantity-content">
                        <div className="left-content">
                            <h6>Color :</h6>
                        </div>
                        <div className="right-content">
                            <div className="quantity buttons_added">
                                 <div className="color-buttons">
                                    {
                                        product.color?.map(item=>(
                                            <>
                                            <input type="radio" 
                                                id={`color${item}`}
                                                name="color" 
                                                className="color-input" 
                                                onChange={(e)=>setColor(e.target.value)}
                                                value={item}
                                                checked={item ===color ? color :""}
                                            />
                                            <label key={item._id} htmlFor={`color${item}`} className="color-label" 
                                            style={{"backgroundColor": `${item}`}}></label>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quantity-content">
                        <div className="left-content">
                            <h6>No. of Orders</h6>
                        </div>
                        <div className="right-content">
                            <div className="quantity buttons_added">
                                <input type="button" value="-" className="minus" 
                                    onClick={decrement}
                                />
                                <input type="number" step="1" min="1" max="" name="quantity" value={NbOrder} title="Qty" className="input-text qty text" size="4" pattern=""  />
                                <input type="button" value="+" className="plus" 
                                  onClick={increment}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <h4>Total: {product.price * NbOrder} DH</h4>
                        <div className="main-border-button">
                            <button  onClick={()=>addToCart(NbOrder)}
                            >Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SingleProduct
