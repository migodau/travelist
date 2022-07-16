import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Checklist } from './pages/Checklist';
import { Home } from './pages/Home';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/checklist' element={<Checklist/>}/>
            </Routes>
        </Router>
    );
}