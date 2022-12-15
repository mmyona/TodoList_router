function TodoListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  const handleDoing = () => {
    //lists와 local storage 값을 모두 바꿔줌
    item.doing = true;
    item.done = false;
    const targetList = JSON.parse(localStorage.getItem(item.id));
    targetList.doing = true;
    targetList.done = false;
    localStorage.setItem(item.id, JSON.stringify(targetList));
  };
  const handelDone = () => {
    //lists와 local storage 값을 모두 바꿔줌
    item.done = true;
    item.doing = false;
    const targetList = JSON.parse(localStorage.getItem(item.id));
    targetList.done = true;
    targetList.doing = false;
    localStorage.setItem(item.id, JSON.stringify(targetList));
  };

  const handleRewrite = (e) => {
    item.content = e.target.value;
    const targetList = JSON.parse(localStorage.getItem(item.id));
    targetList.content = e.target.value;
    localStorage.setItem(item.id, JSON.stringify(targetList));
  };

  return (
    <div className="todolist">
      <textArea onChange={handleRewrite}>{item.content}</textArea>
      <button onClick={handleDoing}>DOING</button>
      <button onClick={handelDone}>DONE</button>
      <button onClick={handleDeleteClick}>DELETE</button>
    </div>
  );
}

export default TodoListItem;
