export type Todo = {
  id: string
  title: string
  completed: boolean
}

export type State = {
  todos: Todo[]
  newTodoTitle: string
}

const state: State = {
  todos: [],
  newTodoTitle: '',
}

export default state