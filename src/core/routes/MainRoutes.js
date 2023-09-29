import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/authentication/Login";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/auth/login" element={<Login></Login>} />
        </Routes>
    );
}

export default MainRoutes;