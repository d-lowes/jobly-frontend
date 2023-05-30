import { BrowserRouter, Routes, Route } from 'react';

function RoutesList() {
  return (
    <div className='routes-list'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;