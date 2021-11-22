import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "semantic-ui-react";
import EmployeeList from "./EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get("https://reqres.in/api/users?per_page=5");
    setEmployees(response.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <li id={`employee-${employee.id}`} key={employee.id}>
        <EmployeeList employee={employee} />
      </li>
    );
  });

  return (
    <React.Fragment>
      <Header as="h1" data-cy="employee-header">
        Employee List
      </Header>
      <ul data-cy="employee-list">{employeeList}</ul>
    </React.Fragment>
  );
};

export default App;
