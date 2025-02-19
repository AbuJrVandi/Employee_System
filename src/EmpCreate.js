import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmpCreate =() => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const navigate=useNavigate();

    const handlesubmit=(e) => {
        e.preventDefault();
        const empdata={name,email,phone,active};
        

        fetch("http://localhost:8000/employees",{
            method:"POST",
            headers:{"container-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((Response)=>{
            alert("Save Successfully")
            navigate('/')
        }).catch((Error)=>{
            console.log(Error.massage)
        })
    
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-log-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":""}}>
                            <div className="card-title">
                                 <h2> Employee Create</h2>
                            </div>
                            <div className="card body">
                                
                                <div className="row">

                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disable" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-log-12">
                                        <div className="form-check">
                                        <input type="checkbox" className="form-control-input"></input>
                                            <label checked={active} onChange={e=>activechange(e.target.checked)} className="form-control-label">Is Active</label>
                                            
                                        </div>
                                    </div>

                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpCreate;