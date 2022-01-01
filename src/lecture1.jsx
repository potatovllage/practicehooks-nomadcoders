import React, { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

function lecture1() {
  const deleteWorld = () => console.log("Deleting the  world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
export default lecture1;
