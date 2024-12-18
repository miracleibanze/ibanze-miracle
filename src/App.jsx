import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageSwitcherStairs from "./components/design/PageSwitcherStairs";
import ProjectDetail from "./components/ProjectDetails";
import SkillsDetails from "./components/SkillsDetails";
import BackToHome from "./components/design/BackToHome";

const App = () => {
  return (
    <>
      <Navbar />
      <BackToHome />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageSwitcherStairs />
              <Hero />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route
          path="/skill/details/:index"
          element={
            <>
              <PageSwitcherStairs />
              <SkillsDetails />
            </>
          }
        />
        <Route
          path="/project/details/:index"
          element={
            <>
              <PageSwitcherStairs />
              <ProjectDetail />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
