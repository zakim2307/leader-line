import React from "react";
import NewWindow from "react-new-window";
import Bapp from "./Bapp";

export default function NewWin() {
  return (
    <NewWindow
      features={{
        height: window.screen.height + "px",
        width: window.screen.width + "px",
        menubar: "no",
        toolbar: "no",
      }}>
      <Bapp />
    </NewWindow>
  );
}
