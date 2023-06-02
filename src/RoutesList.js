import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies/Companies';
import CompanyDetail from './Companies/CompanyDetail';
import Jobs from './Jobs/Jobs';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import ProfileForm from './Forms/ProfileForm';

/** Render the NavBar and individual routes for jobs, companies, and company
 * handle.
 *
 * app -> RoutesList -> { NavBar, Home, Companies, CompanyDetail, Jobs }
 */

//TODO: if current user render the route components
function RoutesList({login, signup, logout}) {
  return (
    <div className='routes-list'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          {/* <Route path="/profile" element={<ProfileForm />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
    </div>
  );
}

export default RoutesList;