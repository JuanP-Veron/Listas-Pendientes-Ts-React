

type TareaProps = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
  return (
    <div className='tarea'>
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}