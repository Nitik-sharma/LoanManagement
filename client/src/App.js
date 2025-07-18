
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDash from './pages/Dashboard/AdminDash';
import UserDash from './pages/Dashboard/UserDash';
import Navbar from './components/Navbar';
import ApplyLoan from './pages/ApplyLoan';
import Blogs from './pages/Blogs';
import Admin from './pages/Admin';
import CreateBlogs from './pages/CreateBlogs';
import BlogPage from './pages/BlogPage';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/admin/dashboard' element={<ProtectedRoute><Admin/> </ProtectedRoute>} />
        <Route path='/apply' element={<ApplyLoan />} />
        <Route path='/create-blog' element={<ProtectedRoute><CreateBlogs /></ProtectedRoute>} />
        <Route path='/blog-page' element={<ProtectedRoute><BlogPage/></ProtectedRoute> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
