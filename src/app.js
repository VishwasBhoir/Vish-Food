import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";


const App = () => {
  return (
    <div>
      <Header />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
