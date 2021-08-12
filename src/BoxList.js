import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";

/** Loni will do this */
function BoxList() {
  const [boxList, setBoxList] = useState([]);

  /** onSubmit: updates state with formData and re-renders */
  function onSubmit(formData) {
    const newBox = { ...formData, id: uuid() };
    setBoxList((oldList) => [...oldList, newBox]);
  }

  /** removeBox: removes specified box from state and re-renders */
  function removeBox(id) {
    setBoxList((oldList) => oldList.filter((box) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm onSubmit={onSubmit} />
      {boxList.map(({ width, height, backgroundColor, id }) => (
        <Box
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          key={id}
          id={id}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
}

export default BoxList;