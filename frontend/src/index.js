import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <div>
      <h1>This is a react Application</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);