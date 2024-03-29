import {TodoItemsContext}  from "./TodoItemsContext";
import TodoItemsReducer from "./TodoItemsReducer";
import { useReducer, useRef} from "react";

const TodoItemsContextProvider = ({ children }) => {

  const [todoItems, dispatchTodoAction] = useReducer(TodoItemsReducer,[]);

  const editTodo = useRef(false);
  const oldTask = useRef("");
  const oldDate = useRef("");

  const handleAddButton = (todoTaskInput, todoDateInput) => {

    const currentTodoTask = todoTaskInput.current.value;
    const currentDueDate = todoDateInput.current.value;

    const addItemAction = {
      type : "ADD_ITEM",
      payload : {
        currentTodoTask,
        currentDueDate
      }
    }

    dispatchTodoAction(addItemAction)

    todoTaskInput.current.value = "";
    todoDateInput.current.value = "";
  };

  const handleDeleteButton = (task) => {

    const deleteItemAction = {
      type : "DELETE_ITEM",
      payload : {
        task
      }
    }

    dispatchTodoAction(deleteItemAction)

  };

  const handleEditButton = (task, date) => {
    
    editTodo.current = true;
    oldTask.current = task;
    oldDate.current = date;

    handleDeleteButton(task)

  };

  const handleSaveButton = (newTodoTask, newTodoDate) => {

    editTodo.current = false;

    handleAddButton(newTodoTask, newTodoDate)
  };

  const handleCancelButton = (oldTask, oldDate) => {
    editTodo.current = false;

    const cancelItemAction = {
      type : "CANCEL_ITEM",
      payload : {
        oldTask,
        oldDate
      }
    }

    dispatchTodoAction(cancelItemAction)
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        editTodo: editTodo.current,
        oldTask: oldTask.current,
        oldDate: oldDate.current,
        handleAddButton,
        handleDeleteButton,
        handleEditButton,
        handleSaveButton,
        handleCancelButton,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
