import React from "react";

import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

export default function App() {
  const todolist=[
    {
      name:'computer',
      desc:"computer device"
    },
    {
      name:'software',
      desc:"set of instruction"

    }
  ]
  return (
    <>
      <div className="container bg-white shadow p-3 mb-5  rounded">
        <center>
          <Title />
          <AddTodo/>
          <TodoList todolist={todolist}/>
        </center>
      </div>
    </>
  );
}
