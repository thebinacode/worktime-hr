import EmployeeItemTile from "../components/EmployeeItemTile.jsx";
import './EmployeeListPage.css'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CreateDepartment from "../components/CreateDepartment.jsx";
import axios from "axios";

export default function EmployeeListPage() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([])
    const [departments, setDepartments] = useState([])

    // GET, POST, PUT, PATCH, DELETE
    useEffect(() => {
        axios.get("https://worktime.pythonanywhere.com/employees/")
            .then(response => {
                setEmployees(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    useEffect(() => {
        fetch("https://worktime.pythonanywhere.com/employees/departments/")
            .then(response => response.json())
            .then(items => {
                setDepartments(items)
            })
            .catch(console.error)
    }, [])

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

            <CreateDepartment/>
        </div>
        <div className="d-flex justify-content-between mb-3">
            {departments.map(department => (
                <div className="d-flex flex-column p-3 rounded text-white" style={{backgroundColor: 'gray'}}
                     key={department.id}>
                    <h6>{department.name}</h6>
                    <h6>6 Employees</h6>
                </div>
            ))}

        </div>

        {employees.map(employee => <EmployeeItemTile
            onEmployeeItemClicked={() => navigate(`/employee?id=${employee.id}`)} employee={employee}
            key={employee.id}/>)}
    </div>)
}