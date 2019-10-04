import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import Input from "./Input";
import C from "./C";
import D from "./D";
import E from "./E";
import NoUseMemo from "./NoUseMemo";
import UseMemo from "./UseMemo";
import {Context} from "./Context";
import ChangeContext from "./ChangeContext";

import "./styles.css";

const B = () => <p>hey</p>;

function App() {
  const [value, setValue] = useState();
  const [secondInput, setSecondInput] = useState();
  const [isE, setIsE] = useState(true);
  const [context, setContext] = useState(false);


  return (
    <div className="App">
      <Context.Provider value={{
  value : context , 
  changeValue :useCallback( () => setContext(!context),[context]),
}}>
        <h1>Callbacks caching examdples:dddd</h1>

        <div className="part">
          <h3>Using useCallback hook:</h3>
          <Input onChange={useCallback(e => setValue(e.target.value), [])} />
          <p>Input value is: {value}</p>
        </div>

        <div className="part">
          <h3>Without useCallback hook:</h3>
          <Input
            onChange={function(e) {
              setSecondInput(e.target.value);
            }}
          />
          <p>Input value is: {secondInput}</p>
        </div>

        <div className="part">
          <h3>C</h3>
          <C Wrap={B} />
          {/* <C
          Wrap={useCallback(
            () => (
              <p>dddffffffffff</p>
            ),
            []
          )} */}
        </div>

        <div className="part">
          <h3>D</h3>
          <D onChange={useCallback(e => setValue(e.target.value), [])} />
        </div>

        <div className="part">
          <h3>E</h3>
          <E
            onChange={useCallback(e => setValue(e.target.value), [])}
            isE={isE}
          />
          <button onClick={useCallback(e => setIsE(!isE), [isE])}>
            changeIsE
          </button>
        </div>

        <div className="part">
          <h3>NoUseMemo</h3>
          <NoUseMemo />
        </div>

        <div className="part">
          <h3>UseMemo</h3>
          <UseMemo />
        </div>

        <div className="part">
          <h3>ChangeContext</h3>
          <ChangeContext />
        </div>


          {/* <button onClick={useCallback(e => setContext(!context), [context])}>
            changeContext
          </button> */}


      </Context.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
