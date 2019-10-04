import React, { useRef  ,useContext   , memo} from "react";
import {Context} from "./Context";

export default  memo( () => {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;
  const context = useContext(Context);

  return (
    <>
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>

        <button
          onClick={context.changeValue}
          style={{backgroundColor: context.value ? "red" : "blue"}}>
          Toggle value
        </button>
        <p>{context.value ? "value is true" : "value is false"}</p>


        {/* <Context.Consumer>   従来のコンテクストAPIを使う場合
      {({value, changeValue}) => (
        <>
        <button
          onClick={changeValue}
          style={{backgroundColor: value ? "red" : "blue"}}>
          Toggle value
        </button>
        <p>{value ? "value is true" : "value is false"}</p>
        </>
      )}
    </Context.Consumer> */}
    </>
  );
});
          // <button onClick={useCallback(e => setContext(!context), [context])}>
          //   changeContext
          // </button>
