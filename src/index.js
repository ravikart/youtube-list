import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

const renderContent = () => {
  return (
    <div className="ui container">
      <App />
    </div>
  );
};

ReactDOM.render(renderContent(), document.querySelector("#root"));
