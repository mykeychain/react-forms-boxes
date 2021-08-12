import React, { useState } from "react";

function Box({ id, height, width, backgroundColor, removeBox }) {

  function handleRemove(evt) {
    removeBox(id)
  }

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
    display: "inline-block"
  }

  return (
    <div className="Box">
      <div className="Box-actual" style={style}></div>
      <button className="Box-remove" onClick={handleRemove}>X</button>
    </div>
  );
}
