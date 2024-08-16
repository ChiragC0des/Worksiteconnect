import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import SupervisorDashboard from './SupervisorDashboard';
import WorkerDashboard from './WorkerDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/supervisor-dashboard" element={<SupervisorDashboard />} />
                <Route path="/worker-dashboard" element={<WorkerDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
