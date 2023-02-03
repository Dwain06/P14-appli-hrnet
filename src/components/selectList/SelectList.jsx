import React from "react";

import "./selectList.css"

const SelectList = ({
    id = "",
    selectedItem,
    setSelectedItem,
    listName = "list",
    label = "Select an option",
    options = [
        {
            "name": "Option 1",
            "value": "OP1"
        },
        {
            "name": "Option 2",
            "value": "OP2"
        }],
}) => {

    const handleChange = (e) => {
        if (e.target.value === "undefined") setSelectedItem(undefined);
        else setSelectedItem(e.target.value);
    };

    return (
        <>
            <label htmlFor={listName}>{label}</label>
            <select name={listName} className="select-list" id={id} onChange={handleChange}>
                <option className="select-options" value="undefined">Please select an option...</option>
                {typeof options[0] === "object" && options.map((option, index) => (
                    <option className="select-options" value={option.value} key={index}>{option.name}</option>
                ))}
                {typeof options[0] === "string" && options.map((option, index) => (
                    <option className="select-options" value={option} key={index}>{option}</option>
                ))}
            </select>
        </>
      );
};

export default SelectList;
