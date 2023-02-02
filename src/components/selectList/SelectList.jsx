import React from "react";

import "./selectList.css"

const SelectList = ({
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
        setSelectedItem(e.target.value);
    };

    return (
        <>
            <label htmlFor={listName}>{label}</label>
            <select name={listName} id="select-list" onChange={handleChange}>
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
