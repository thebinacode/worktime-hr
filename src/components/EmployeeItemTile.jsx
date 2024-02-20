import './EmployeeItemTile.css'

const EmployeeItemTile = () => {
    return (
        <div className="employee-card">
            <img src="https://worktime.pythonanywhere.com/media/uploads/logos/20c879bb-02c9-4323-85dd-aa184abc770f.jpg"
                 width="100" height="100"/>
            <div>
                <h6 style={{margin: '0', padding: '0'}}>Jane Smith</h6>
                <p style={{margin: '0', padding: '0'}}>Department: Marketing</p>
                <p style={{margin: '0', padding: '0'}}>Start Date: February 15, 2019 (3 years)</p>
            </div>
        </div>
    )
}

export default EmployeeItemTile