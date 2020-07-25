import React from "react";
import withRoot from "./withRoot";
import AppLayout from "./components/layouts/AppLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export default withRoot(App);
