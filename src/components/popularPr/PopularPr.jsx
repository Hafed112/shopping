import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Proudct from '../product/Proudct';

const PopularPr = ({menPr,womenPr}) => {


  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
  };
 
 
  
  return (

    <>

    <section className="section" id="men">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-heading">
                        <h2>Mens Latest</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <Carousel 
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
        >
            {
                menPr.map(product => (
                    <Proudct key={product.id} product={product} />
                ))
            }
        </Carousel>;
    
    </section>
    <section className="section" id="men">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-heading">
                        <h2>Women Latest</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <Carousel 
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
        >
            {
                womenPr.map(product => (
                    <Proudct key={product.id} product={product} />
                ))
            }
        </Carousel>;
    
    </section>
 
    </>
  )
}

export default PopularPr
