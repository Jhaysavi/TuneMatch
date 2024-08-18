import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Genres from './Pages/Register/Genres/Genres';
import Artists from './Pages/Register/Artists/Artists';
import './App.css'
import Home from './Pages/Home/Home';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/genres" element={<Genres />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
