import {useState} from "react";
import axios from "axios";

export default function CreateDepartment() {
    const [name, setName] = useState('')
    const [error, setError] = useState(null)

    const handleSaveDepartment = () => {
        setError(null)
        axios.post("https://worktime.pythonanywhere.com/employees/departments/", {
            name: name
        }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                setError(error.message)
                console.error(error)
                console.log(JSON.stringify(error))
            })
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
             tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Department</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="search-box-container mb-3">
                            <input
                                type="name"
                                className="form-control search-input mt-2 has-validation"
                                placeholder="Department Name"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </div>
                        {error && (<div className="text-danger">
                            {error}
                        </div>)}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveDepartment}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}