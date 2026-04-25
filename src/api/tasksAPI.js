const STORAGE_KEY = 'tasks'

const readTasks = () => {
  const savedTasks = localStorage.getItem(STORAGE_KEY)

  return savedTasks ? JSON.parse(savedTasks) : []
}

const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

const createTaskId = () => {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now())
}

const tasksAPI = {
  getAll: async () => {
    return readTasks()
  },

  getById: async (taskId) => {
    return readTasks().find((task) => task.id === taskId) ?? null
  },

  add: async (task) => {
    const tasks = readTasks()
    const addedTask = {
      ...task,
      id: createTaskId()
    }

    saveTasks([...tasks, addedTask])

    return addedTask
  },

  delete: async (id) => {
    const tasks = readTasks()
    saveTasks(tasks.filter((task) => task.id !== id))
  },

  deleteAll: async (taskIds) => {
    const idsToDelete = new Set(taskIds)
    const tasks = readTasks()

    saveTasks(tasks.filter((task) => !idsToDelete.has(task.id)))
  },

  toggleComplete: async (id, isDone) => {
    const tasks = readTasks()

    saveTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {...task, isDone}
        }

        return task
      })
    )
  },
}

export default tasksAPI
