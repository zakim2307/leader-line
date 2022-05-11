import React from "react";
import NewWindow from "react-new-window";
import Bapp from "./Bapp";

export default function NewWin({ LeaderLine }) {
  return (
    <NewWindow
      features={{
        height: window.screen.height + "px",
        width: window.screen.width + "px",
        menubar: "no",
        toolbar: "no",
      }}>
      <Bapp LeaderLine={LeaderLine} />
    </NewWindow>
  );
}
