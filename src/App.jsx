import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* uncomment this if you need a separator between 2 components */}
      {/* <div className="gradient"></div> */}
    </Routes>
  );
}
