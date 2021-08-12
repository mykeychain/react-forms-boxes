import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function BoxList() {
    const [boxList, setBoxList] = useState([]);

    function onSubmit(formData) {
        const newBox = {...formData, id: uuid()};
        setBoxList(oldList => ([...oldList, newBox]))
    }

    function removeBox(evt) {
        setBoxList(oldList => (
            oldList.filter(box => box.id !== evt.target.id)
        ))
    }

    
}

// return <
//         Box
//         height={height}
//         width={width}
//         backgroundColor={backgroundColor}
//         />