import React, { useState } from "react";

/** Box: renders a new box
 * 
 *  Props:
 *  - id 
 *  - height
 *  - width
 *  - backgroundColor
 *  - removeBox (parent callback)
 * 
 *  BoxList -> Box
 */
function Box({ id, height, width, backgroundColor, removeBox }) {

  /** Removes the specified box. */
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

export default Box;