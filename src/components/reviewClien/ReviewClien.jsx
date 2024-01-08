import { useEffect, useState } from "react"
import "./reviewClien.scss"
import axios from 'axios'

const ReviewClien = () => {
  const [reviews,setReviews] = useState([])
  const allReviews = async()=>{
     const response = await axios.get('https://api-offs.onrender.com/api/v1/reviewCustomer');
     setReviews(response.data)
  }

  useEffect(()=>{
    allReviews();
  },[])
  return (
    <section className="review-section">
       <h1 className="section-title">what our <span>customers</span> says about us</h1>
       {
        reviews.map((review)=>(
            <>
            <div className="review-container" key={review._id}>
                <div className="review-card">
                    <div className='user-dp' data-rating="4.9">
                        <img src={review.img} alt='' />
                    </div>
                    <h2 className="review-title">{review.title}</h2>
                    <p className="review">{review.body}</p>
                </div>
            </div>
            </>
        ))
       }
        
    </section>
  )
}

export default ReviewClien
