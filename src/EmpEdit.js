import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({})

    useEffect(() => {
        fetch("http://localhost:8000/employees/" + empid)
            .then((Response) => Response.json())
            .then((Response) => {
                empdatachange(Response);
                idchange(Response.id);
                namechange(Response.name);
                emailchange(Response.email);
                phonechange(Response.phone);
                activechange(Response.isactive);
            })
            .catch((error) => console.log(error.message));
    }, []);

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active, activechange] = useState(true);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, name, email, phone, active };
        
        fetch("http://localhost:8000/employees/" + empid, {
            method: "PUT",
            headers: { "container-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((Response) => {
            if (Response.ok) {
                alert("Updated Successfully");
                navigate('/'); // Navigate back to the listing page
            } else {
                alert("Failed to update employee");
            }
        }).catch((Error) => {
            console.log(Error.message);
        });
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-log-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "" }}>
                            <div className="card-title">
                                <h2> Employee Edit</h2>
                            </div>
                            <div className="card body">
                                <div className="row">
                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
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
                                            <input required value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-log-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-log-12">
                                        <div className="form-check">
                                            <input type="checkbox" checked={active} onChange={e => activechange(e.target.checked)} className="form-control-input"></input>
                                            <label className="form-control-label">Is Active</label>
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

export default EmpEdit;