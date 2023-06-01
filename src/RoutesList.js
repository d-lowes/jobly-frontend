import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import Jobs from './Jobs';
import NavBar from './NavBar';

/** Render the NavBar and individual routes for jobs, companies, and company
 * handle.
 *
 * app -> RoutesList -> { NavBar, Home, Companies, CompanyDetail, Jobs }
 */

//FIXME: route to handle any path that is not defined
function RoutesList() {
  return (
    <div className='routes-list'>
      <BrowserRouter>
        <NavBar />
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