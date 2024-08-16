import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import SupervisorLogin from './components/SupervisorLogin';
import WorkerLogin from './components/WorkerLogin';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/supervisor" element={<SupervisorLogin />} />
                <Route path="/worker" element={<WorkerLogin />} />
            </Routes>
        </Router>
    );
}

export default App;
