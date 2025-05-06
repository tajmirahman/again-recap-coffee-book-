import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Error from "../Error/Error";

const routes=createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>
    }
])

export default routes;