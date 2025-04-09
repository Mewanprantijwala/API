import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewUsers from "./Pages/Crud/ViewUsers";
import CreateUser from "./Pages/CRUD/CreateUser";
import Header from "./Layout/Header"; 
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          
          <Route path="/" element={<ViewUsers />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/UserHome" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
