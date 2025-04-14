import { create } from "zustand";
let currentId = 1;
const todoStore = (set, get) => ({
  //state
  todos: [],
  count: null,

  //actions or methods
  addTodo: function (todo) {
    const newTodo = {
      id: currentId++,
      task: todo,
      status: "Not Completed",
    };

    //updating the todos with newly added task(set)
    set({ todos: [...get().todos, newTodo] });
  },

  deleteTodo: function (id) {
    id = parseInt(id);
    const deleteAndUpdatedTodo = get().todos.filter((todo) => todo.id != id);
    set({ todos: deleteAndUpdatedTodo });
  },

  filterEvenTodos: () => {
    const evenTodos = get().todos.filter((todo) => todo.id % 2 == 0);
    set({ todos: evenTodos });
  },

  totalTodos: function () {
    const length = get().todos.length;
    set({ count: length });
  },

  //   increaseCount: () => set((state) => ({ count: state.count + 1 })),
});
const useTodoStore = create(todoStore);
export default useTodoStore;
