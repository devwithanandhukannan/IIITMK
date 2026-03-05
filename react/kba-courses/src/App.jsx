import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import AddCourse from './pages/Addcourse';
import Course from './pages/course';
import EditCourse from './pages/EditCourse';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllCourses from './pages/AllCourses';
import Logout from './pages/Logout.jsx';
import Commonlayout from './layout/Commonlayout.jsx';
import Authlayout from './layout/Authlayout.jsx';

function App() {
  return (
    <>

      <Routes>
        <Route element={<Commonlayout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/course/:id' element={<Course />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add-course' element={<AddCourse />} />
          <Route path='/edit-course/:id' element={<EditCourse/>}/>
          <Route path='/all-courses' element={<AllCourses/>}/>
        </Route>
        
        <Route element={<Authlayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App