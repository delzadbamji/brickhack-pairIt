import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
// import notFound404 from "../views/notFound404";
import Results from "../views/Results";
// import QuizPage from "../views/QuizPage";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<Results />} />
        {/* <Route path="/quiz" element={<QuizPage />} /> */}
        {/* <Route path="*" exact={true} element={<notFound404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
