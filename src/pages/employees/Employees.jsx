import React, { useContext, useEffect } from "react";
import Header from "../../components/header/Header";

// Import components
import MainNav from "../../components/mainNav/MainNav";

//Import datas
import { EmployeesContext } from "../../context/employeesContext";

// Import packages
import MaterialTable from "@material-table/core";

const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Birth date", field: "dateOfBirth" },
    { title: "Start date", field: "startDate" },
    { title: "City", field: "city" },
    { title: "Street", field: "street" },
    { title: "State", field: "state" },
    { title: "Zip code", field: "zipCode", width: 80 },
    { title: "Department", field: "department" },
];

const Employees = () => {
    const { dispatch, employeesList } = useContext(EmployeesContext);

    useEffect(() => {
        document.title = "HRnet - Current Employees";
    }, []);

    return (
        <>
            <Header />
            <MainNav />
            <div className="employees-list">
                <div className="employees-list--container">
                    <div className="employees-list--table">
                        <MaterialTable
                            columns={columns}
                            data={employeesList}
                            title="Employees list"
                            options={{
                                actionsColumnIndex: -1,
                            }}
                            editable={{
                                onRowDelete: (rowData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            dispatch({
                                                type: "DELETE_EMPLOYEE",
                                                payload: rowData.id,
                                            });
                                            resolve();
                                        }, 1000);
                                    }),
                            }}
                            localization={{ body: { editRow: { deleteText: "Are you sure you want to delete this user?" } } }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employees;
