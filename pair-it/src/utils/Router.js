import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import QuizPage from "../views/QuizPage";
import ResultPage from "../views/ResultPage";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
