import "./product.css"
import { Link } from "react-router-dom"
const Proudct = ({product}) => {
    console.log(product)


  return (
    <div className="container-item">
      <div className="item">
        <div className="thumb thumbToimg">
            <div className="hover-content">
                <ul>
                    <li>
                        <Link to={`/product/${product._id}`}><i className="fa fa-eye"></i></Link>
                    </li>
                    {/* <li>
                        <a href="single-product.html">
                            <i className="fa fa-star"></i>
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="single-product.html"><i className="fa fa-shopping-cart"></i></a>
                    </li> */}
                </ul>
            </div>
            <img  src={product?.cartImg} alt="" />
        </div>
        <div className="down-content">
            <h4>{product?.title}</h4>
            <span>{product?.price}DH</span>
         
        </div>
    </div>
</div>
  )
}

export default Proudct
