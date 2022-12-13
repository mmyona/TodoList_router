function DoDoneListItem({ item, check }) {
  const handleDeleteClick = () => {
    if (!{ check }) {
      //doing=true인 경우 => doing 리스트에서 item을 삭제
      item.doing = false;
      const targetList = JSON.parse(localStorage.getItem(item.id));
      targetList.doing = false;
      localStorage.setItem(item.id, JSON.stringify(targetList));
    } else {
      //done=true인 경우 => done 리스트에서 item을 삭제
      item.done = false;
      const targetList = JSON.parse(localStorage.getItem(item.id));
      targetList.done = false;
      localStorage.setItem(item.id, JSON.stringify(targetList));
    }
  };
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

  return (
    <div className="todolist">
      <p>{item.content}</p>
      {check ? (
        <button onClick={handleDoing}>DOING</button>
      ) : (
        <button onClick={handelDone}>DONE</button>
      )}
      <button onClick={handleDeleteClick}>DELETE</button>
    </div>
  );
}

export default DoDoneListItem;
