import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../app/screens/Login';

const SignRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default SignRoutes;
