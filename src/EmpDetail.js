import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () =>{
    const {empid} =useParams();

    const[empdata,empdatachange]=useState({})

    useEffect(() => {
        fetch("http://localhost:8000/employees/"+ empid)
            .then((Response) => Response.json())
            .then((Response) => empdatachange(Response))
            .catch((error) => console.log(error.message))
    },[]);
    return(
        <div>
            <div className="card" style={{"textAlign":""}}>
                            <div className="card-title">
                                 <h2> Employee Details</h2>
                            </div>
                            <div className="card body"></div>
            { empdata && 
              <div> 
                <h1>The Employee name is : <b>{empdata.name}</b> ({empdata.id})</h1>
                <h3>Contact Details</h3>
                <h5>Email is: {empdata.email}</h5>
                <h5>Phone is: {empdata.phone}</h5>
                <Link className="btn btn-danger" to="/">Back to Listing</Link>
              </div>
            }
            </div>
        </div>
    );
    
}

export default EmpDetail;