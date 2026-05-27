import './App.css';
import HomePage from './pages/HomePage/HomePage';
    import { Routes, Route } from "react-router-dom";
import PaperSubmission from './pages/PaperSubmisssion/PaperSubmission';
import ProgrameComitte from './pages/ProgrameComitte/ProgrameComitte';
import AcceptedPapers from './pages/AcceptedPapers/AcceptedPapers';
import ContactUs from './pages/ContactUs/ContactUs';
import Venue from './pages/Venue/Venue';
import Topics from './pages/Topics/Topics';
import AboutMedicaps from './pages/AboutMedicaps/AboutMedicaps';
import Register from './pages/Register/Register';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/paperSubmission" element={<PaperSubmission />} />
                <Route path="/programeComitte" element={<ProgrameComitte />} />
                <Route path="/acceptedPapers" element={<AcceptedPapers />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/venue" element={<Venue />} />
                <Route path="/topics" element={<Topics/>} />
                <Route path="/aboutMedicaps" element={<AboutMedicaps/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </>
    );
}

export default App;
