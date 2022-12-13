import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

function App() {
  let firstLists;
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);

  //처음에 화면이 렌더링될 때, 이전까지 local storage에 저장되어 있던 데이터들을 받아옴
  useEffect(() => {
    firstLists = [];
    for (let i = 0; i < localStorage.length; i++) {
      const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
      firstLists.push(value);
    }
    setLists(firstLists);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //만약 입력이 없을 시에는 alert 창이 뜨고 + 리스트에는 추가되지 않음
    if (!input) alert("Write todo List!");
    else {
      const todo = {
        id: uuid(),
        content: input,
        done: false,
        doing: false,
      };
      localStorage.setItem(todo.id, JSON.stringify(todo));
      setLists((prev) => [...prev, todo]);
      setInput("");
    }
  };
  const clearClick = () => {
    setInput("");
  };
  const handleDelete = (id) => {
    localStorage.removeItem(id);
    const newLists = lists.filter((list) => list.id !== id);
    setLists(newLists);
  };

  //local storage 내의 모든 데이터를 삭제하는 함수
  const clearAll = () => {
    localStorage.clear();
    setLists([]);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <button onClick={clearAll}>CLAER ALL LIST</button>
      </div>
      <input
        onChange={handleInputChange}
        placeholder="Write Todo here"
        value={input}
        onKeyUp={(e) => {
          handleKeyUp(e);
        }}
      ></input>
      <button onClick={handleSubmit}>ADD</button>
      <button onClick={clearClick}>CLEAR</button>
      <TodoList lists={lists} onDelete={handleDelete} />
    </>
  );
}

export default App;
