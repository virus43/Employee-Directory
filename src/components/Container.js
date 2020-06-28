import React from "react";
import EmployeeList from "./EmployeeList";
import Title from "./Title";


const employees = [
    {
      id: 1,
      name: "Howard Johnson",
      number: "555-443-9999",
      department: "Operations",
      start: "01/02/03",
      location: "Raleigh ,NC",
      email: "howard@gmail.com"
    },
    {
      id: 2,
      name:"Timmy Doogood",
      number: "444-333-1111",
      department: "Operations",
      start: "02/02/03",
      location: "Charlotte ,NC",
      email: "timmy@gmail.com"
    },
    {
      id: 3,
      name: "Pamela Dawson",
      number: "777-777-9900",
      department: "Accounting",
      start: "03/02/03",
      location: "Raleigh ,NC",
      email: "pamela@gmail.com"
    },
    {
      id: 4,
      name: "George Lucas",
      number: "888-888-9999",
      department: "Operations",
      start: "04/02/03",
      location: "Charlotte ,NC",
      email: "george@gmail.com"
    },
    {
      id: 5,
      name: "Fred Soprano",
      number: "222-444-5555",
      department: "Accounting",
      start: "05/02/03",
      location: "Raleigh ,NC",
      email: "fred@gmail.com"
    },
    {
      id: 6,
      name: "Tina Somero",
      number: "704-867-5309",
      department: "Accounting",
      start: "06/02/03",
      location: "Charlotte ,NC",
      email: "tina@gmail.com"
    },
    {
      id: 7,
      name: "Kyle Shanahan",
      number: "704-665-9982",
      department: "Accounting",
      start: "12/12/34",
      location: "Charlotte ,NC",
      email: "kyle@gmail.com"
    },{
      id: 8,
      name: "Vanessa Gates",
      number: "704-456-9032",
      department: "Operations",
      start: "08/24/76",
      location: "Raleigh ,NC",
      email: "vanessa@gmail.com"
    },{
      id: 9,
      name: "Elizabeth Banero",
      number: "704-905-3421",
      department: "Accounting",
      start: "07/15/78",
      location: "Charlotte ,NC",
      email: "elizabeth@gmail.com"
    },{
      id: 10,
      name: "Gary Fitzgerald",
      number: "704-987-4512",
      department: "Operations",
      start: "11/15/65",
      location: "Charlotte ,NC",
      email: "gary@gmail.com"
    }
  ];

class Container extends React.Component {

    render(){
    return (  
      <div>
        <Title />
        <EmployeeList employees={employees} />
        </div>
      );
    
    }    



}

export default Container;