import React, { useState, useEffect } from "react";

function lecture1() {
  const sayHello = () => console.log("hello");
  useEffect(() => {
    sayHello();
  }, []);
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div>
      <div>hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{number}</button>
    </div>
  );
}
export default lecture1;
