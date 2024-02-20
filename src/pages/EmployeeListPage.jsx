import EmployeeItemTile from "../components/EmployeeItemTile.jsx";
import './EmployeeListPage.css'

export default function EmployeeListPage() {
    return (<div>
        <div>
            <div className="search-box-container mb-3">
                <input
                    type="email"
                    className="form-control search-input mt-2"
                    placeholder="Search Employee"
                />
                <button className="btn btn-primary add-employee-button">Enroll</button>
            </div>
        </div>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
        <EmployeeItemTile/>
    </div>)
}