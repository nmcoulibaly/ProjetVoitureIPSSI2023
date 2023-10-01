import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import VoituresList from "../../pages/voitures/VoituresList";
import MarquesList from "../../pages/marques/MarquesList";
import DetailMarque from "../../pages/marques/DetailMarque";
import Login from "../../pages/authentication/Login";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login></Login>} />
            <Route path="/voituresList" caseSensitive element={<VoituresList />} />
            <Route path="/marquesList" caseSensitive element={<MarquesList />} />
            <Route path="marques/detail/:brandID" caseSensitive element={<DetailMarque />} />

        </Routes>
    );
}
export default MainRoutes;