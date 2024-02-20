import EmployeeItemTile from "../components/EmployeeItemTile.jsx";
import './EmployeeListPage.css'
import {useNavigate} from "react-router-dom";

export default function EmployeeListPage() {
    const navigate = useNavigate();

    return (<div>
        <div>
            <div className="search-box-container mb-3">
                <input
                    type="email"
                    className="form-control search-input mt-2"
                    placeholder="Search Employee"
                />
            </div>
        </div>
        <div className="my-4">
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                    Create Department
                </button>

                <div style={{width: '20px'}}></div>
                <button type="button" className="btn btn-primary" onClick={() => {
                    navigate('/employee')
                }}>
                    Create Employee
                </button>
            </div>

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
                                    className="form-control search-input mt-2"
                                    placeholder="Department Name"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
            <div className="d-flex flex-column p-3 rounded text-white" style={{backgroundColor: 'gray'}}>
                <h6>Technology</h6>
                <h6>6 Employees</h6>
            </div>

            <div className="d-flex flex-column p-3 rounded text-white" style={{backgroundColor: 'gray'}}>
                <h6>Legals</h6>
                <h6>6 Employees</h6>
            </div>

            <div className="d-flex flex-column p-3 rounded text-white" style={{backgroundColor: 'gray'}}>
                <h6>Sales</h6>
                <h6>6 Employees</h6>
            </div>

            <div className="d-flex flex-column p-3 rounded text-white" style={{backgroundColor: 'gray'}}>
                <h6>Managment</h6>
                <h6>6 Employees</h6>
            </div>
        </div>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
        <EmployeeItemTile onEmployeeItemClicked={() => navigate('/employee/?id=67678666')}/>
    </div>)
}