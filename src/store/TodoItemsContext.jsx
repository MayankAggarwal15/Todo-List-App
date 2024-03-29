import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  editTodo: false,
  oldTask: "",
  oldDate: "",
  handleAddButton: () => {},
  handleDeleteButton: () => {},
  handleEditButton: () => {},
  handleSaveButton: () => {},
  handleCancelButton: () => {},
});
