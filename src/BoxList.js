import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxList, setBoxList] = useState([]);

  function handleSubmit(formData) {
    const newBox = { ...formData, id: uuid() };
    setBoxList((oldList) => [...oldList, newBox]);
  }

  function removeBox(evt) {
    setBoxList((oldList) => oldList.filter((box) => box.id !== evt.target.id));
  }

  return (
    <div>
      <NewBoxForm handleSubmit={handleSubmit} />
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