import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Contact from './Components/Contact/Contact';
import Login from './Components/LoginComponents/Login';
import Register from './Components/RegisterComponent/Register';
import Admin from './Components/Admin/Admin';
import { UserProvider } from './UserContext';
import JobForm from './Components/BrowseJobs/postJob';
import BrowseJobs from './Components/BrowseJobs/BrowseJobs';
function App() {
  return (
 <UserProvider>
    <Router>
      <NavbarControlled />
      <Routes>
        <Route path="/" element={<HomeWithBackground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/postjob" element={<JobForm />} />
        <Route path="/get-jobs" element={<BrowseJobs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

function NavbarControlled() {
  const location = useLocation();
  
  const isAdminRoute = location.pathname === "/admin";

  return isAdminRoute ? null : <Navbar />;
}

function HomeWithBackground() {
  return (
    <div className="background">
      <Home />
    </div>
  );
}

export default App;
