import EmployeeListPage from "./pages/EmployeeListPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {

    return (
        <div className="container" style={{width: '60%'}}>
            <NavigationBar/>
            <EmployeeListPage/>
        </div>
    )
}

export default App
