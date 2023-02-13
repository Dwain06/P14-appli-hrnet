const employeesReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMPLOYEES":
            return (state = { employeesList: action.payload });
        case "NEW_EMPLOYEE":
            return (state = {
                employeesList: [...state.employeesList, action.payload],
            });
        case "DELETE_EMPLOYEE":
            const arr = [...state.employeesList];
            const idToDelete = action.payload;
            const objWithIdIndex = arr.findIndex((obj) => obj.id === idToDelete);
            if (objWithIdIndex > -1) {
                arr.splice(objWithIdIndex, 1);
            }
            return (state = { employeesList: [...arr] });

        default:
            return state;
    }
};

export default employeesReducer;
