import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import AboutMe from "./components/about/AboutMe";
import AllProjects from "./projects/AllProjects";
import ProjectDetail from "./projects/ProjectDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
        </Route>

        <Route path="/projects" element={<Layout />}>
          <Route path="" element={<AllProjects />} />
          <Route path=":projectId" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
