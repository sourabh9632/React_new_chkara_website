import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Videos from "./components/Videos";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route  path="/"  element={<Home/>}/>
        <Route  path="/videos"  element={<Videos/>}/>
        <Route  path="/upload"  element={<Upload/>}/>
        <Route  path="/login"  element={<Login/>}/>
        <Route  path="/signup"  element={<Signup/>}/>
      </Routes>
<Footer/>
    </Router>
  );
}

export default App;
