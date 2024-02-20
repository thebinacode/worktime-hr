import './EmployeeItemTile.css'

const EmployeeItemTile = ({onEmployeeItemClicked, employee}) => {
    const {first_name, last_name, profile_image, department, date_joined} = employee
    return (
        <div className="employee-card" onClick={() => {
            onEmployeeItemClicked()
        }}>
            <img src={profile_image}
                 width="100" height="100"/>
            <div>
                <h6 style={{margin: '0', padding: '0'}}>{first_name} {last_name}</h6>
                <p style={{margin: '0', padding: '0'}}>Department: {department.name}</p>
                <p style={{margin: '0', padding: '0'}}>Start Date: {date_joined} (3 years)</p>
            </div>
        </div>
    )
}

export default EmployeeItemTile