import React from "react";

export default function AddTodo() {
  return (
    <div className="pt-4 pb-4">
      <form>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue="Add Task.."
            /> 
          </div>

          <div className="col-5">
            <input
              type="date"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue="Add date.."
            />
          </div>

          <div className="col-2">
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
