import { React, BrowserRouter, Routes, Route } from 'react';
import Home from './Home';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import Jobs from './Jobs';

function RoutesList() {
  return (
    <div className='routes-list'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;