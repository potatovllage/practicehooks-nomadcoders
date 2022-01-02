import React, { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

function lecture1() {
  const { y } = useScroll();
  return (
    <div style={{ heigth: "1000vh" }}>
      <h1 style={{ position: "fixed", color: x > 100 ? "red" : "blue" }}>
        hello
      </h1>
    </div>
  );
}
export default lecture1;
