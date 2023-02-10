const employeesReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMPLOYEES":
            return state = {employeesList: action.payload};
        case "NEW_EMPLOYEE":
            return state = {employeesList: [...state.employeesList, action.payload]};

        default:
            return state;
      }
  };
  
  export default employeesReducer;