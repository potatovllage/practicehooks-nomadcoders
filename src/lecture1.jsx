import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function lecture1() {
  const titleUpdater = useTitle("Loading...");
  return (
    <div>
      <div>hi</div>
    </div>
  );
}
export default lecture1;
