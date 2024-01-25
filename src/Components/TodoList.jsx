import React from "react";
import Error from "./Error";
import TodoItem from "./TodoItem";

export default function TodoList({ todolist }) {

  if(todolist.length==0)
  {
    return (
      <Error/>
    )
  }
  else
  {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th className="col-2">S.No</th>
            <th className="col-4">Title</th>
            <th className="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((item ,index)=>{
            return <TodoItem todo={item} indx={index}/>
          })}
          
        </tbody>
      </table>
    </div>
  
  );
        }
}
