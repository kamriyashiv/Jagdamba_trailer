import tableData from "./Tdata"
const Table=()=>{    
    return(<>
        <table className="table table-responsive table-hover table-bordered">
            <thead className="text-center bg-danger text-white">
                <tr>
                    <th>Cubic Capacity</th>
                    <th colSpan="3">Inner</th>
                    <th colSpan="4">Outer</th>
                    <th>Wheelbase</th>
                    <th>Weight Approx</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Length</th>
                    <th>Heigth</th>
                    <th>Width</th>
                    <th>Overall Length</th>
                    <th>Overall Height</th>
                    <th>Loading Heigth</th>
                    <th>Width</th>
                    <th>(Trailer)</th>
                    <th>(in Kgs)</th>   
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((val,index)=>{
                        return(
                            <>
                                <tr className="text-center" key={index}>
                                    <td>{val.Cubic_Capacity}</td>
                                    <td>{val.Length}</td>
                                    <td>{val.Hieght}</td>
                                    <td>{val.Width}</td>
                                    <td>{val.Overall_Length}</td>
                                    <td>{val.Overall_Height}</td>
                                    <td>{val.Loading_Heigth}</td>
                                    <td>{val.Width2}</td>
                                    <td>{val.Wheelbase}</td>
                                    <td>{val.Weight_Approx}</td>   
                                </tr>       
                            </>
                        )
                    })
                }
                                
            </tbody>
        </table>
    </>);
}

export default Table;