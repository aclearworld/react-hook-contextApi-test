import React, { useRef , memo } from "react";

const B = () => <p>i am child</p>;

const Child = ({Wrap}) => {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;
  return (
    <>
      <Wrap />
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>
    </>
  );
};

export default memo( () => {
  const componentRerenderedTimes = useRef(0);
  componentRerenderedTimes.current++;
  return (
    <>
      <p>
        Input component was rerendered {componentRerenderedTimes.current} times
      </p>
      <Child Wrap={B}></Child>
    </>
  );
});
