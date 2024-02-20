import {Formik, useFormik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useSearchParams} from 'react-router-dom';

const EmployeeDetailPage = () => {
    const [departments, setDepartments] = useState([])
    const [profileImage, setProfile] = useState(null)
    const [isSaving, setSaving] = useState(false)
    const [employee, setEmployee] = useState(null)
    const [query, setQuery] = useSearchParams()


    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            department_id: '',
        },
        onSubmit: values => {
            const formData = new FormData()
            formData.set('first_name', values.first_name)
            formData.set('last_name', values.last_name)
            formData.set('department_id', values.department_id)
            formData.append('profile_image', profileImage)
            setSaving(true)

            const id = query.get("id")

            if (id) {
                axios.put(`https://worktime.pythonanywhere.com/employees/${id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then(() => navigate('/'))
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                axios.post("https://worktime.pythonanywhere.com/employees/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then(() => navigate('/'))
                    .catch((error) => {
                        console.log(error)
                    })
            }


        },
    });

    useEffect(() => {
        const id = query.get("id")
        fetch("https://worktime.pythonanywhere.com/employees/departments/")
            .then(response => response.json())
            .then(items => {
                setDepartments(items)
            })
            .catch(console.error)

        axios.get(`https://worktime.pythonanywhere.com/employees/${id}/`)
            .then(response => {
                const employee = response.data
                setEmployee(employee)
                formik.setValues(employee)
            })


    }, [query])

    return (
        <div className="mt-3">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {employee && <img
                    src={employee.profile_image}
                    width="160" height="160" style={{borderRadius: '5px'}}/>}
                <div className="mt-4"
                     style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h5>Alison Mack</h5>
                    <h6>Start Date: February 15, 2019 (3 years)</h6>
                    {isSaving && <h6>Saving Employee</h6>}
                </div>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first_name"
                               aria-describedby="emailHelp"
                               onChange={formik.handleChange}
                               name='first_name'
                               value={formik.values.first_name}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last_name"
                               aria-describedby="emailHelp"
                               name='last_name'
                               onChange={formik.handleChange}
                               value={formik.values.last_name}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="department_id" className="form-label">Department</label>
                        <select name='department_id' id="department_id" className="form-select"
                                value={formik.values.department_id}
                                onChange={formik.handleChange}>
                            <option>-----</option>
                            {departments.map(department => <option
                                key={department.id} value={department.id}
                                label={department.name}>{department.name}</option>)}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
                        <input className="form-control" type="file" id="profile_picture"
                               onChange={event =>
                                   setProfile(event.target.files[0])
                               }/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="d-flex justify-content-between my-3">
                <button className="btn btn-primary" style={{width: '50%'}}>Time In Employee</button>
                <div style={{width: '10px'}}></div>
                <button className="btn btn-secondary" style={{width: '50%'}}>Time Out Employee</button>
            </div>
            <ul className="list-group mt-3 mb-3">
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <h6 className="bg-primary p-2">12-02-2024</h6>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6>Entry</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Exit</h6>
                            <h6>12pm</h6>
                        </div>

                        <div>
                            <h6>Duration</h6>
                            <h6>12pm</h6>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default EmployeeDetailPage