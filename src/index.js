import React from "react";
import ReactDOM from "react-dom";
import Calculator from "awesome-react-calculator";

import "./styles.css";

function onResultChange(result) {
  console.log(result);
}

function App() {
  return (
    <div className="App">
      <a
        className="fork-me"
        href="https://github.com/bgoonz/awesome-react-calculator"
      >
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
      <div className="calculator">
        <Calculator onResultChange={onResultChange} />
      </div>
      <div>
        <div className="heading"> Features </div>
        <ul className="align-left">
          <li>Try using Keyboard</li>
          <li>Try pasting any expression on Result Panel</li>
          <li>Open Console to see the logs</li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
