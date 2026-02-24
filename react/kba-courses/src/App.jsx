import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import AddCourse from './pages/Addcourse';
import Course from './pages/course';
import EditCourse from './pages/EditCourse';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-course' element={<AddCourse />} />
        <Route path='/edit-course' element={<EditCourse/>}/>
      </Routes>

    </>
  )
}

export default App