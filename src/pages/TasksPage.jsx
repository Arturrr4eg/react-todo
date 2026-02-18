import {TasksProvider} from "../context/TaskContext.jsx";
import ToDo from "../components/ToDo/ToDo.jsx";

const TasksPage = () => {
  return (
    <TasksProvider>
      <ToDo/>
    </TasksProvider>
  )
}

export default TasksPage