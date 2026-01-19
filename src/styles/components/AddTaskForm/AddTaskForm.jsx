import Field from "../Field/Field.jsx";
import Button from "../Button/Button.jsx";
import {useContext, useState} from "react";
import {TaskContext} from "../../../context/TaskContext.jsx";

const AddTaskForm = () => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
  } = useContext(TaskContext)

  const [error, setError] = useState('')

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

  const onSubmit = (event) => {
    event.preventDefault()
    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle)
    }
  }

  const onInput = (event) => {
    const {value} = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0
    setNewTaskTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
  }

  return (
    <form
      className="todo__form"
      onSubmit={onSubmit}
    >
      <Field
        error={error}
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button
        isDisabled={isNewTaskTitleEmpty}
        type='submit'
      >Add</Button>
    </form>
  )
}

export default AddTaskForm