import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.pormission !== "granted") {
      Notification.requestPermission().then((Permissions) => {
        if (Permissions === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function lecture1() {
  const triggerNotif = useNotification("Can I steal your kimchi", {
    body: "I love kimchi don't you?",
  });
  return (
    <div>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
}
export default lecture1;
