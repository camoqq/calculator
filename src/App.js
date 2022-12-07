import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  const AC = () => {
    setResult("");
  };
  const del = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const equal = () => {
    try {
      setResult(eval(result));
    } catch {
      setResult("error");
    }
  };
  return (
    <div className="cont">
      <div className="app">
        <div className="one">
          <form>
            <input type="text" value={result} />
          </form>
        </div>

        <div className="btn">
          <button className="ac span2" onClick={AC}>
            AC
          </button>
          <button onClick={del} value="">
            Del
          </button>
          <button onClick={handleClick} value="/">
            &divide;
          </button>
          <button onClick={handleClick} value="7">
            7
          </button>
          <button onClick={handleClick} value="8">
            8
          </button>
          <button onClick={handleClick} value="9">
            9
          </button>
          <button onClick={handleClick} value="*">
            &times;
          </button>
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} value="6">
            6
          </button>
          <button onClick={handleClick} value="-">
            -
          </button>
          <button onClick={handleClick} value="1">
            1
          </button>
          <button onClick={handleClick} value="2">
            2
          </button>
          <button onClick={handleClick} value="3">
            3
          </button>
          <button onClick={handleClick} value="+">
            +
          </button>
          <button onClick={handleClick} value="0">
            0
          </button>
          <button onClick={handleClick} value=".">
            .
          </button>
          <button onClick={equal} className="span2">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
