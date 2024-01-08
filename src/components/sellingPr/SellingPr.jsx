import './sellingpr.scss'

const SellingPr = () => {
  return (
    <section className='best-selling-product-section'>
        <h1 className='section-title'>best selling products</h1>
        <div className='product-container'>
            <div className='product-cart'>
                <img src="https://m.media-amazon.com/images/I/61gmK0qlifL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="product-img" alt="" />
                <p className="product-name">lights →</p>
            </div>
            <div className='product-cart'>
                <img src="https://m.media-amazon.com/images/I/61gmK0qlifL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="product-img" alt="" />
                <p className="product-name">lights →</p>
            </div>
            <div className='product-cart'>
                <img src="https://m.media-amazon.com/images/I/61gmK0qlifL.__AC_SX300_SY300_QL70_FMwebp_.jpg" className="product-img" alt="" />
                <p className="product-name">lights →</p>
            </div>
            
        </div>
    </section>
  )
}

export default SellingPr
