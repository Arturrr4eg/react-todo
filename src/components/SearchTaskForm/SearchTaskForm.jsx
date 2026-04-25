import Field from "../Field/Field.jsx";
import {useContext} from "react";
import {TaskContext} from "../../context/TaskContext.jsx";

const SearchTaskForm = (props) => {
  const { styles } = props
  const {
    setSearchQuery,
    searchQuery,
  } = useContext(TaskContext)

  return(
    <form
      onSubmit={(event) => event.preventDefault()}
      className={styles.form}
    >
      <Field
        className={styles.field}
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