import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
// const LandingPage = React.lazy(() => import("../views/LandingPage"));
// const QuizPage = React.lazy(() => import("../views/QuizPage"));
// const ErrorPage = React.lazy(() => import("../views/ErrorPage"));
// const Results = React.lazy(() => import("../views/Results"));
// const Loading = React.lazy(() => import("../views/Loading"));

import QuizPage from "../views/QuizPage";
import ErrorPage from "../views/ErrorPage";
import Results from "../views/Results";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Suspense fallback={<Loading />}> */}
        <Route path="/quiz" element={<QuizPage />} />
        {/* </Suspense> */}
        <Route path="/results" element={<Results />} />
        <Route path="*" exact={true} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
