import React, { useState } from "react";

/** NewBoxForm: controlled component for adding new box to boxList 
 * 
 *  props:
 *  - onSubmit (parent callback)
 * 
 *  state:
 *  - formData: { height, width, backgroundColor }
 * 
 *  BoxList -> NewBoxForm
*/
function NewBoxForm({ onSubmit }) {
    const initialState = {
        height: "",
        width: "",
        backgroundColor: "",
    };

    const [formData, setFormData] = useState(initialState);

    /** handleChange: sets state with current form values. */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    /** handleSubmit: invokes parent callback for submit.
     *  clears form on submit
     */
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(formData);
        setFormData(initialState);
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="height">height: </label>
            <input
                type="text"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}>
            </input>
            <label htmlFor="width">width: </label>
            <input
                type="text"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}>
            </input>
            <label htmlFor="backgroundColor">background color: </label>
            <input
                type="text"
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}>
            </input>
            <button>Add a New Box</button>
        </form>
    )
}

export default NewBoxForm;