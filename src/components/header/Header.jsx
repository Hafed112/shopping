import "./header.scss"
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({orderLenght}) => {

 // search location of active link 
 const location = useLocation();

    //destructuring pathname from location
 const { pathname } = location;


 const splitLocation = pathname.split("/");
  

 //for sticky navbar
 const [show,setShow]=useState(false);
 const controlHeader = ()=>{
    if(window.scrollY > 100){
        setShow(true);
    }else{
        setShow(false);
    }
 }
  
  useEffect(()=>{
    window.addEventListener('scroll',controlHeader);
    return ()=>{
        window.removeEventListener('scroll',controlHeader)
    }
  },[]);

  return (
    <>	
    <header className={`${show && 'background-header'} header-area header-sticky`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <Link to="index.html" className="logo">
                            <img src="assets/images/logo.png" />
                        </Link>
                        <ul className="nav">
                            <li className="scroll-to-section">
                                <Link to="/" 
                                className={splitLocation[1]==="" ? "active" :""}>
                                    Home
                                </Link>
                            </li>
                          
                            
                            <li className="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li>
                                        <Link to="/products">Products</Link></li>
                                  
                                    <li><Link to="contact.html">Contact Us</Link></li>
                                </ul>
                            </li>
                            
                            <li className="scroll-to-section">
                                <Link to="/shopcart">
                                    <Badge badgeContent={orderLenght} color="primary">
                                            <ShoppingCartOutlinedIcon  style={{ fontSize:"25px" }}/>
                                    </Badge>
                                </Link>
                            </li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default Header;
