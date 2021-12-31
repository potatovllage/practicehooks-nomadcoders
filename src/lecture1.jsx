import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

function lecture1() {
  const sayHello = () => console.log("say hello");
  const title = useClick();
  return (
    <div>
      <div>hi</div>
    </div>
  );
}
export default lecture1;
