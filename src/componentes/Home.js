import React from "react";
import { useRef, useState } from "react";

function Todolist() {
  let nombreRef = useRef(null);
  const [task, setTask] = useState([]);

  const addTask = (e) => {
    if (e.keyCode === 13 && nombreRef.value !== "") {
      setTask(task.concat(nombreRef.value));
      nombreRef.value = "";
    }
  };

  const deleteTask = (index) => {
    task.splice(index, 1);
    setTask([...task]);
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="card-title text-center">
            To-do List <i className="fas fa-tasks"></i>
          </h1>
          <ul className="list-group list-group-flush">
            <div className="input-group mb-2 list-group list-group-flush">
              <input
                onKeyUp={addTask}
                ref={(r) => (nombreRef = r)}
                type="text"
                id="input"
                class="list-group-item"
                placeholder="¿Qué es lo que necesitas hacer?"
              />
            </div>

            {!!task.length > 0 &&
              task.map((valor, index) => {
                return (
                  <li class="list-group-item" key={index}>
                    {valor}{" "}
                    <i
                      className="fas fa-trash float-right"
                      id="eliminar"
                      onClick={() => deleteTask(index)}
                    >Eliminar(X)</i>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="card-footer text-muted">Cantidad de deberes que tengo que hacer: {task.length}</div>
      </div>
    </div>
  );
}

export default Todolist;
