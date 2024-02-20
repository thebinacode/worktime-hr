const EmployeeDetailPage = () => {
    return (
        <div className="mt-3">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img
                    src="https://worktime.pythonanywhere.com/media/uploads/logos/20c879bb-02c9-4323-85dd-aa184abc770f.jpg"
                    width="160" height="160" style={{borderRadius: '5px'}}/>
                <div className="mt-4"
                     style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h5>Alison Mack</h5>
                    <h6>Start Date: February 15, 2019 (3 years)</h6>
                </div>
            </div>
            <div>
                <form className="mt-3">
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first_name" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last_name" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="work_department" className="form-label">Department</label>
                        <select id="work_department" className="form-select">
                            <option>-----</option>
                            <option>Legals</option>
                            <option>Technology</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
                        <input className="form-control" type="file" id="profile_picture"/>
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