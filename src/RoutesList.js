import { BrowserRouter, Routes, Route } from 'react';

function RoutesList() {
  return (
    <div className='routes-list'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Companies" element={<Companies />} />
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;