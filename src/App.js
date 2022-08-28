import React, { Fragment, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home"
import Resume from "./component/Resume/Resume"
import "./App.css"
import Services from "./component/Features/Services"
import Projects from "./component/Features/Projects"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Fragment><Home/><Services/><Projects/><Resume/><Contact/></Fragment>}/>
        <Route path="/project" element={<Fragment><Projects/></Fragment>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
