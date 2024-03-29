import { TodoItemsContext } from "../store/TodoItemsContext";
import { useContext } from "react";

const WelcomeMessage = () => {
  const message = "Welcome to Todo List App";

  const { editTodo, todoItems } = useContext(TodoItemsContext);

  if (todoItems.length === 0 && editTodo == false) {
    return (
      <center>
        <h2>{message}</h2>
      </center>
    );
  }
};

export default WelcomeMessage;
