import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AddCourse from "./pages/Addcourse";
import Course from "./pages/Course";
import EditCourse from "./pages/EditCourse";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllCourses from "./pages/AllCourses";
import Logout from "./pages/Logout";
import Commonlayout from "./layout/Commonlayout";
import Authlayout from "./layout/Authlayout";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
          <Route path="/all-courses" element={<AllCourses />} />
      </Route>

      {/* Public auth routes */}
      <Route element={<Authlayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Route>

    </Routes>
  );
}

export default App;