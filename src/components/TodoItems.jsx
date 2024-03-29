import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={`${item.todoTask} : ${item.dueDate}`}
          todoTask={item.todoTask}
          dueDate={item.dueDate}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
