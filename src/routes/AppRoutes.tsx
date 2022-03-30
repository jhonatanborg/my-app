import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../app/screens/Home';
import { Projects } from '../app/screens/Projects';
import { Surveys } from '../app/screens/Surveys';
import { Dashboard } from '../app/screens/Dashboard';
import { Respondents } from '../app/screens/Respondents';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/pesquisas" element={<Surveys />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/respondents" element={<Respondents />} />
        </Routes>
    );
};

export default AppRoutes;