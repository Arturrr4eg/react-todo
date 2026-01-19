import ToDo from "./styles/components/ToDo/ToDo.jsx";
import {TasksProvider} from "./context/TaskContext.jsx";



const App = () => {
  return (
    <TasksProvider>
      <ToDo/>
    </TasksProvider>

  )
}

export default App
