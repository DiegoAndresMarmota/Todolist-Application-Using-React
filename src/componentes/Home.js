import React from "react";
import { useRef, useState } from "react";

/* Se inicia función*/
function Todolist() {
  /*Se crea una variable tareaPendiente, con un valor persitente de tipo "Null*/
  let tareaPendiente = useRef(null);

  /*Se crea un useState, para modificar cada nuevaTarea en setNuevaTarea*/
  const [nuevaTarea, setNuevaTarea] = useState([]);

  /*Se crea un const agregarTarea*/
  const agregarTarea = (evento) => {
    /*Si el evento(Enter) y el valor de la tareaPendiente no es igual a null */
    if (evento.keyCode === 13 && tareaPendiente.value !== "") {
      /*...concadenar nuevaTarea al inicial (nulo) de la tarePendiente */
      setNuevaTarea(nuevaTarea.concat(tareaPendiente.value));
      /*Mostrar valor de la TareaPendiente*/
      tareaPendiente.value = "";
    }
  };

  /*Se crea un const borrarTarea*/
  const borrarTarea = (index) => {
    /*Se agregan un nuevo elemento a nuevaTarea al indice*/
    nuevaTarea.splice(index, 1);
    /*Este nuevo elemento, llamado setNuevaTarea, se agrega al array existente de nuevaTarea*/
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
                onKeyUp={agregarTarea}
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
                      onClick={() => borrarTarea(index)}
                    >
                      Eliminar(X)
                    </i>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="card-footer text-muted">
          Cantidad de deberes que tengo que hacer: {nuevaTarea.length}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
