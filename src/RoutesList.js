import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import Jobs from './Jobs';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';

/** Render the NavBar and individual routes for jobs, companies, and company
 * handle.
 *
 * app -> RoutesList -> { NavBar, Home, Companies, CompanyDetail, Jobs }
 */

function RoutesList({login}) {
  return (
    <div className='routes-list'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;