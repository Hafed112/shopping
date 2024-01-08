
const Pagination = ({nPages,currentPage,setCurrentPage}) => {

   const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
        <div className="col-lg-12">
                    <div className="pagination">
                        <ul>
                            {
                                pageNumbers.map(pgNumber=>(
                                    <>
                                    <li key={pgNumber} className={`page-item 
                                    ${currentPage == pgNumber ? 'active' : ''} `}>
                                        <a href="#product" 
                                            onClick={() => setCurrentPage(pgNumber)}
                                        >
                                            {pgNumber}
                                        </a>
                                    </li>
                                    </>
                                ))
                            }
                            
                        </ul>
                    </div>
        </div>
  )
}

export default Pagination
