import { ListGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useState, useEffect } from "react";

const statusTypes = [
  { id: 1, name: "Not Responeded" },
  {
    id: 2,
    name: "In",
  },
  {
    id: 3,
    name: "Out",
  },
  {
    id: 4,
    name: "Maybe",
  },
];

// for setting the list of players in state

const pokerList = [
  { name: "Andy", status: statusTypes[Math.floor(Math.random() * 4)].name },
  { name: "Andykp", status: statusTypes[0].name },
  { name: "Arnie", status: statusTypes[0].name },
  { name: "Brandon", status: statusTypes[0].name },
  { name: "Cary", status: statusTypes[0].name },
  { name: "Danny", status: statusTypes[0].name },
  { name: "Ed Papo", status: statusTypes[0].name },
  { name: "Glenn", status: statusTypes[0].name },
  { name: "Good Marty", status: statusTypes[0].name },
  { name: "Hank", status: statusTypes[0].name },
  { name: "Isaac", status: statusTypes[0].name },
  { name: "Jason", status: statusTypes[0].name },
  { name: "John", status: statusTypes[0].name },
  { name: "Lou", status: statusTypes[0].name },
  { name: "Mac", status: statusTypes[0].name },
  { name: "Mark", status: statusTypes[0].name },
  { name: "Michael", status: statusTypes[0].name },
  { name: "Mike M", status: statusTypes[0].name },
  { name: "Mike W", status: statusTypes[0].name },
  { name: "Paul", status: statusTypes[0].name },
  { name: "Pete", status: statusTypes[0].name },
  { name: "Pizza Danny", status: statusTypes[0].name },
  { name: "Ramy", status: statusTypes[0].name },
  { name: "Rashan", status: statusTypes[0].name },
  { name: "Rick", status: statusTypes[0].name },
  { name: "Robbie", status: statusTypes[0].name },
  { name: "Robert", status: statusTypes[0].name },
  { name: "Steve", status: statusTypes[0].name },
  { name: "Stu", status: statusTypes[0].name },
  { name: "Tom", status: statusTypes[0].name },
  { name: "Tori", status: statusTypes[0].name },
];

const List = () => {
  const [players, SetPlayers] = useState([]);

  useEffect(() => {
    SetPlayers(pokerList, []);
  }, []);
  console.log(players);

  return (
    <ListGroup>
      {players.map((item) => {
        return (
          <ListGroup.Item
            key={item.name}
            className="d-flex justify-content-between"
          >
            {item.name}
            <DropdownButton
              // onSelect={}
              id={item.name}
              // key={item.name}
              title={item.status}
            >
              <Dropdown.Item eventKey="option-1">Not Responded</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">In</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">Out</Dropdown.Item>
              <Dropdown.Item eventKey="option-4">Maybe</Dropdown.Item>
            </DropdownButton>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default List;
