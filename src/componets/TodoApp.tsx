import { useState } from "react"
import { ListasTareas } from "./ListasTareas"

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>("")

    const [listaTareas, setListaTareas] = useState<string[]>([])

    const AggBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    }
    const AggUnaTarea = () => {
        if(nuevaTarea.trim() === "") return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea("")
    }

  return (
    <div>
        <h1>Lista de Tareas con Ts</h1>
        <div>
            <input
             type="text"
             value={nuevaTarea}
             onChange={(e) => setNuevaTarea(e.target.value)}
             placeholder="Nueva Tarea"
              />
              <button onClick={AggUnaTarea}>Nueva Tarea</button>
        </div>
        <ListasTareas listaTarea={listaTareas} borrarTarea={AggBorrarTarea} />

    </div>
  )
}