import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import AboutMe from "./components/about/AboutMe";
import ProjectDetail from "./projects/ProjectDetail";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
        </Route>

        <Route path="/projects" element={<Layout />}>
          <Route path=":projectId" element={<ProjectDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
