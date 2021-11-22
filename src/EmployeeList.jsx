import React from "react";
import { List, Image } from "semantic-ui-react";

const EmployeeList = ({ employee }) => {
  return (
    <List>
      <List.Item>
        <Image avatar src={employee.avatar} />
        <List.Content>
          <List.Header>
            {`${employee.first_name} ${employee.last_name}`}
          </List.Header>
          <List.Description>{employee.email}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default EmployeeList;
