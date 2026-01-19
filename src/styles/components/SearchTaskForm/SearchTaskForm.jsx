import Field from "../Field/Field.jsx";
import {useContext} from "react";
import {TaskContext} from "../../../context/TaskContext.jsx";

const SearchTaskForm = () => {

  const {
    setSearchQuery,
    searchQuery,
  } = useContext(TaskContext)

  return(
    <form
      onSubmit={(event) => event.preventDefault()}
      className="todo__form"
    >
      <Field
        className="todo__field"
        label="Search task"
        id='search-task'
        type='search'
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm