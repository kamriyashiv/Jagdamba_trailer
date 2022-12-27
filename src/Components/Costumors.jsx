import Img from "../img";
const Costumors =()=>{
    
    return<>
       <article>
            <div className="mainCostomer py-3">
                <div className="">
                    <div className="text-center p-3">
                        <h2><strong>OUR DISCERNING CUSTOMERS</strong></h2>
                    </div>
                    <div className="Cbox d-flex flex-wrap">
                       {
                        Img.Customers.map((val)=>{
                            return(
                                <div className="CimgBox m-1 ">
                                     <img src={val} className="w-100"/>
                                </div>
                            )
                        })
                       }
                    </div>
                </div>
            </div>
       </article>
    </>
}

export default Costumors;