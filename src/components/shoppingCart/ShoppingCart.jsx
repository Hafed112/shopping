import { useState } from "react";
import "./shopCart.css"
const ShoppingCart = ({NbOrder,increment,decrement,OrderData,removeProduct}) => {

  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAdress]=useState("");

  console.log(OrderData)
  const pricesArray = OrderData.map(product=>product.price);
  const OrderSubTotal = pricesArray.reduce((accumulator,currentPrice)=>accumulator+currentPrice,0);
  const OrderTotal = OrderSubTotal+35;

  const [data,setData]=useState({});

  const [newError,setNewError]=useState({});
  const [valid,setValid]=useState(false);
 
  
 const handleData=(e)=>{
	const error={};
	let isValid=false;
	e.preventDefault();

	const Checknumber = /^[0-9]+$/.test(phone);
	if(!phone.trim()||phone.length>10 || !Checknumber){
		isValid=false;
		error.phone="phone number is not valid";
	}
	
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!email.trim() || !emailRegex.test(email)){
		isValid=false;
		error.email="the email not valid";
	}
	if(!address.trim()){
		isValid=false;
		error.address="you have to write the address";
	}
	if(address.length>255){
		isValid=false;
		error.address="this adress is to long";
	}
	console.log(error)

	if(!isValid){
		setNewError(error);
		
	}
	
	setData({phone,email,address,OrderData});
	setValid(true)
	

	
 }
 console.log(valid);

  return (
	<>

    <div className="px-4 px-lg-0 do">
	
	<div className="container text-white py-5 text-center">
		<h1 className="display-4">Bootstrap 4 shopping cart</h1>
		<p className="lead mb-0">Build a fully structred shopping cart page using Bootstrap 4. </p>
	</div>

	<div className="pb-5">
		<div className="container">
		<div className="row">
			<div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

			<div className="table-responsive">
				<table className="table">
				<thead>
					<tr>
					<th scope="col" className="border-0 bg-light">
						<div className="p-2 px-3 text-uppercase">Product</div>
					</th>
					<th scope="col" className="border-0 bg-light">
						<div className="py-2 text-uppercase">Price</div>
					</th>
					<th scope="col" className="border-0 bg-light">
						<div className="py-2 text-uppercase">Quantity</div>
					</th>
					<th scope="col" className="border-0 bg-light">
						<div className="py-2 text-uppercase">Remove</div>
					</th>
					</tr>
				</thead>
				<tbody>
					{
						OrderData?.map((item,index)=>(
							<>
							<tr key={index}>
								<th scope="row">
									<div className="p-2">
									<img src={item.choseImg} alt="" width="70" className="img-fluid rounded shadow-sm" />
									<div className="ml-3 d-inline-block align-middle">
										<h5 className="mb-0"><a href="#" className="text-dark d-inline-block">{item.productTitle}</a></h5><span className="text-muted font-weight-normal font-italic">Category: 
										{
											<span style={{ fontSize:16,color:"black"}}>
												{item.productCategory.toString()}
											</span>
										}
										</span>
									</div>
									</div>
								</th>
								<td className="align-middle"><strong>{item.price}DH</strong></td>
								<td className="align-middle"><strong>{item.NbOrder}</strong></td>
								<td className="align-middle">
									<button style={{border:"none",backgroundColor:"white"}} href="#" className="text-dark" onClick={()=>removeProduct(item.id)}>
										<i className="fa fa-trash"></i>
									</button>
								</td>
							</tr>
							</>
						))
					}
					
					
				</tbody>
				</table>
			</div>
			</div>
		</div>

		<div className="row py-5 p-4 bg-white rounded shadow-sm">
			<div className="col-lg-6">
			<div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Shipping</div>
			<div className="p-4">
				<p className="font-italic mb-4">Fill out this form for shipping</p>

				<div className="input-group mb-4 border rounded-pill p-2">
				<input type="text" placeholder="Phone Number" aria-describedby="button-addon3" className="form-control border-0"
					value={phone} 
					onChange={(e)=>setPhone(e.target.value)}
				/>
			
				</div>
				{
					(newError.phone ?<div className="error-msg">
                              {newError.phone} 
                    </div>:null)
				}

				<div className="input-group mb-4 border rounded-pill p-2">
				<input type="text" placeholder="Email" aria-describedby="button-addon3" className="form-control border-0" 
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
				/>	
				</div>
				{
					(newError.email?<div className="error-msg">
						{newError.email} </div>:null
					)
				}

				<div className="input-group mb-4 border rounded p-1">
					<textarea name="" id="" cols="10" rows="10" placeholder="Address" aria-describedby="button-addon3" className="form-control border-0"
						value={address}
						onChange={(e)=>setAdress(e.target.value)}
					></textarea>
					
				</div>
				{
						(newError.address ?<div className="error-msg">
							{newError.address} </div>:null
						)
				}

				
			</div>
		
			</div>
			<div className="col-lg-6">
			<div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
			<div className="p-4">
				<p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
				<ul className="list-unstyled mb-4">
				<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>
					{OrderSubTotal && OrderSubTotal}DH
					</strong></li>
				<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>35.00 DH</strong></li>
				<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>0.00 DH</strong></li>
				<li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
					<h5 className="font-weight-bold">{OrderTotal && OrderTotal}DH</h5>
				</li>
				</ul><button className="btn btn-dark rounded-pill py-2 btn-block" 
				onClick={handleData}>Procceed to checkout</button>
				
				{
					(
						Object.keys(newError).length===0 && valid===true?
						<div className="success-msg">Successfully submitted ✓</div>:null
					)
				}
			</div>
			</div>
		</div>

		</div>
	</div>
</div>
</>
  )
}

export default ShoppingCart
