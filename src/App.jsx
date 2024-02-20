import EmployeeListPage from "./pages/EmployeeListPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EmployeeDetailPage from "./pages/EmployeeDetailPage.jsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <EmployeeListPage/>,
    },
    {
        path: '/employee',
        element: <EmployeeDetailPage/>
    },
])

function App() {

    return (
        <div className="container" style={{width: '60%'}}>
            <NavigationBar/>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
