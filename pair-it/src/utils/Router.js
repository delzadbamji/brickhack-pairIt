import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import QuizPage from "../views/QuizPage";
import ErrorPage from "../views/ErrorPage";
import Results from "../views/Results";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" exact={true} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
