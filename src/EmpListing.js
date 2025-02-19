import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);

    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate('/employee/detail/' + id)

    }

    const LoadEdit = (id) => {
        navigate('/employee/edit/' + id)
    }

    const RemoveFunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employees/" + id, {
                method: "DELETE",
            }).then((Response) => {
                if (Response.ok) {
                    alert("Removed Successfully");
                    empdatachange(empdata.filter(item => item.id !== id));
                } else {
                    alert("Failed to remove employee");
                }
            }).catch((Error) => {
                console.log(Error.message);
            });
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/employees")
            .then((Response) => Response.json())
            .then((Response) => empdatachange(Response))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2> Employee Information</h2>
                    
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</button>
                                            <button onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger">Remove</button>
                                            <button onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;