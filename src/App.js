/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AddBtnComponent from "./AddBtnComponent";
import "./App.css";
import FixList from "./FixList";
import MyListItem from "./MyListItem";
function App() {
  const [todo, setTodo] = useState([]);
  const [isRender, setIsRender] = useState(false);

  const onAdd = (newTodo) => {
    setTodo([...todo, { id: Date.now(), note: newTodo }]);
  };

  const onDelete = (vl) => {
    setTodo([...todo.filter((el) => el.id !== vl.id)]);
  };

  const onFixFix = (id, value) => {
    setTodo(
      todo.map((want) => {
        if (want.id === id) {
          return { ...want, note: value };
        } else {
          return want;
        }
      })
    );
  };
  const saveData = () => {
    window.localStorage.setItem("myList", JSON.stringify(todo));
  };
  useEffect(() => {
    console.log(todo);
    if (isRender) saveData();
    setIsRender(true);
  }, [todo]);

  const loadData = () => {
    setTodo(JSON.parse(window.localStorage.getItem("myList")));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <header>
        <h1>오늘 할일</h1>
      </header>
      <AddBtnComponent onAdd={onAdd} />
      {todo.map(function (task) {
        return (
          <MyListItem
            text={task.note}
            key={task}
            onDelete={() => onDelete(task)}
            onFix={(value) => onFixFix(task.id, value)}
          />
        );
      })}
    </>
  );
}

export default App;
