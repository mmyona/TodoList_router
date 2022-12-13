import { useEffect, useState } from "react";
import DoDoneListItem from "./DoDoneListItem";

function DoingList() {
  let firstLists;
  const [lists, setLists] = useState([]);

  useEffect(() => {
    firstLists = [];
    for (let i = 0; i < localStorage.length; i++) {
      const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
      firstLists.push(value);
    }
    setLists(firstLists);
  }, []);

  let doingLists = lists.filter((el) => el.doing);

  return (
    <>
      <h1>Doing List</h1>
      <ul>
        {doingLists.map((list) => {
          return (
            <li key={list.uuid} className="listItems">
              <DoDoneListItem item={list} check={false} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DoingList;
