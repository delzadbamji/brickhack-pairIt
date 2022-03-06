import "./App.css";
import React from "react";
import Router from "./utils/Router";
import { UserProvider } from "./utils/SequenceContext";
import { getQuestions } from "./utils/helpers";
function App() {
  const user = getQuestions();
  return (
    <UserProvider value={user}>
      <div className="App">
        <Router />
      </div>
    </UserProvider>
  );
}
export default App;
