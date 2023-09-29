import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import VoituresList from "../../pages/voitures/VoituresList";
import MarquesList from "../../pages/marques/MarquesList";
import DetailMarque from "../../pages/marques/DetailMarque";
import AjoutVoiture from "../../pages/voitures/AjoutVoiture";
import ModifierVoiture from "../../pages/voitures/ModifierVoiture";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/voitures" caseSensitive element={<VoituresList />} />
            <Route path="/voituresList" caseSensitive element={<VoituresList />} />
            <Route path="/voitures/list" caseSensitive element={<VoituresList />} />
            <Route path="/voitures/ajout" caseSensitive element={<AjoutVoiture />} />
            <Route path="/marquesList" caseSensitive element={<MarquesList />} />
            <Route path="marques/detail/:brandID" caseSensitive element={<DetailMarque />} />
            <Route path="voitures/modifier/:voitureId" caseSensitive element={<ModifierVoiture />} />

        </Routes>
    );
}
export default MainRoutes;