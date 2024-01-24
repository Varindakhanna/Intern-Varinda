import React from "react";

import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

export default function App() {
  return (
    <>
      <div className="container bg-white shadow p-3 mb-5  rounded">
        <center>
          <Title />
          <AddTodo/>
          <TodoList/>
        </center>
      </div>
    </>
  );
}
