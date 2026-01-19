import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm.jsx";
import ToDoInfo from "../ToDoInfo/ToDoInfo.jsx";
import ToDoList from "../ToDoList/ToDoList.jsx";
import {
  useContext
} from "react";
import Button from "../Button/Button.jsx";
import {TaskContext} from "../../../context/TaskContext.jsx";

const ToDo = () => {

  const {firstIncompleteTaskRef} = useContext(TaskContext)

  return (

    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo
      />
      <Button
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: "smooth"})}
      >
        Show first incomplete task
      </Button>
      <ToDoList />
    </div>

  )
}

export default ToDo