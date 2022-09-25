import React from "react";
import { useRef, useState } from "react";

function Todolist() {
  let tareaPendiente = useRef(null);
  const [nuevaTarea, setNuevaTarea] = useState([]);

  const addTask = (e) => {
    if (e.keyCode === 13 && tareaPendiente.value !== "") {
      setNuevaTarea(nuevaTarea.concat(tareaPendiente.value));
      tareaPendiente.value = "";
    }
  };

  const deleteTask = (index) => {
    nuevaTarea.splice(index, 1);
    setNuevaTarea([...nuevaTarea]);
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
                ref={(r) => (tareaPendiente = r)}
                type="text"
                id="input"
                class="list-group-item"
                placeholder="¿Qué es lo que necesitas hacer?"
              />
            </div>

            {!!nuevaTarea.length > 0 &&
              nuevaTarea.map((valor, index) => {
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
        <div className="card-footer text-muted">Cantidad de deberes que tengo que hacer: {nuevaTarea.length}</div>
      </div>
    </div>
  );
}

export default Todolist;
