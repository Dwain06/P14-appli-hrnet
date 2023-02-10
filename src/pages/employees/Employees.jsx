import React, { useContext, useEffect } from "react";
import Header from "../../components/header/Header";

// Import components
import MainNav from "../../components/mainNav/MainNav";

//Import datas
import { EmployeesContext } from "../../context/employeesContext";

// Import packages
import { DataGrid } from "@mui/x-data-grid";
import MaterialTable from "@material-table/core";

const columns = [
    // { headerName: "Pic", field: "pic", width: 50, renderCell: (params) => {
    //     return (
    //         <div className="avatar--container">
    //             <span className="avatar">{params.row.lastName[0].toUpperCase()}</span>
    //         </div>
    //     )
    // } },
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

// const actionColumn = [
//     {
//         field: "action",
//         headerName: "Action",
//         renderCell: () => {
//             return (
//                 <div className="cellAction">
//                     <div className="deleteButton" onClick={(e) => deleteEmployee(e)}>Delete</div>
//                 </div>
//             )
//         }
//     }
// ]

const Login = () => {

    const { dispatch, employeesList } = useContext(EmployeesContext);

    useEffect(() => {
        document.title = "HRnet - Current Employees";
    }, []);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="deleteButton" onClick={() => deleteEmployee(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]

    const deleteEmployee = (id) => {
        const arr = [...employeesList]
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        console.log(objWithIdIndex)
        if (objWithIdIndex > -1) {
            arr.splice(objWithIdIndex, 1);
        }
        console.log(arr);
    }

    return (
        <>
            <Header />
            <MainNav />
            <div className="employees-list">
                <div className="employees-list--container">
                    <div className="employees-list--table">
                        {/* <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                rows={employeesList}
                                columns={columns.concat(actionColumn)}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection = {false}
                            />
                        </div> */}
                        <MaterialTable 
                            columns={columns} 
                            data={employeesList}
                            title="Employees list"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
