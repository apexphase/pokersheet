const PokerList = [
  { name: "Andy", status: "Not Responded" },
  { name: "Andykp", status: "Not Responded" },
  { name: "Arnie", status: "Not Responded" },
  { name: "Brandon", status: "Not Responded" },
  { name: "Cary", status: "Not Responded" },
  { name: "Danny", status: "Not Responded" },
  { name: "Ed Papo", status: "Not Responded" },
  { name: "Glenn", status: "Not Responded" },
  { name: "Good Marty", status: "Not Responded" },
  { name: "Hank", status: "Not Responded" },
  { name: "Isaac", status: "Not Responded" },
  { name: "Jason", status: "Not Responded" },
  { name: "John", status: "Not Responded" },
  { name: "Lou", status: "Not Responded" },
  { name: "Mac", status: "Not Responded" },
  { name: "Mark", status: "Not Responded" },
  { name: "Michael", status: "Not Responded" },
  { name: "Mike M", status: "Not Responded" },
  { name: "Mike W", status: "Not Responded" },
  { name: "Paul", status: "Not Responded" },
  { name: "Pete", status: "Not Responded" },
  { name: "Pizza Danny", status: "Not Responded" },
  { name: "Ramy", status: "Not Responded" },
  { name: "Rashan", status: "Not Responded" },
  { name: "Rick", status: "Not Responded" },
  { name: "Robbie", status: "Not Responded" },
  { name: "Robert", status: "Not Responded" },
  { name: "Steve", status: "Not Responded" },
  { name: "Stu", status: "Not Responded" },
  { name: "Tom", status: "Not Responded" },
  { name: "Tori", status: "Not Responded" },
];
const List = () => {
  return (
    <div className="Poker-list">
      {PokerList.map((item) => {
        return (
          <div className="Poker-item">
            {item.name} {item.status}
          </div>
        );
      })}
    </div>
  );
};

export default List;
