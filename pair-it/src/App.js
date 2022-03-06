import "./App.css";
import React from "react";
import Router from "./utils/Router";
import { UserProvider } from "./utils/SequenceContext";
import { getQuestions } from "./utils/helpers";
import photo2 from "./constants/landing-page-2.png";
import photo3 from "./constants/landing-page-4.png";
let photo = [photo2, photo3];

function App() {
  const user = getQuestions();
  document.body.background = photo[Math.floor(Math.random() * 2)];
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100%";

  return (
    <UserProvider value={user}>
      <div className="App">
        <Router />
      </div>
    </UserProvider>
  );
}
export default App;
