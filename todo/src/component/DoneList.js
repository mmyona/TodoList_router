import { useEffect, useState } from "react";
import DoDoneListItem from "./DoDoneListItem";

function DoneList() {
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

  let doneLists = lists.filter((el) => el.done);

  return (
    <>
      <h1>Done List</h1>
      <ul>
        {"progress : " + doneLists.length + " / " + lists.length}
        {doneLists.map((list) => {
          return (
            <li key={list.uuid} className="listItems">
              <DoDoneListItem item={list} check={true} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DoneList;
