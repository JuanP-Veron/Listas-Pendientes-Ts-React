import { Tarea } from "./Tarea"

type PropsListasTareas = {
    listaTarea: string[]
    borrarTarea: (index: number) => void
}

export const ListasTareas = ({ listaTarea, borrarTarea }: PropsListasTareas) => {
  return (
    <div className="lista-tareas">
        {listaTarea.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
        ))}
    </div>
  )
}
