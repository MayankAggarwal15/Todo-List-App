const TodoItemsReducer = (currTodoItems, todoAction) => {
  let newTodoItems = currTodoItems;

  if (todoAction.type == "ADD_ITEM") {
    if (todoAction.payload.currentTodoTask === "") alert("Enter Todo Task");
    else {
      if (todoAction.payload.currentDueDate != "") {
        const prevTodoItems = currTodoItems.filter(
          (item) => item.dueDate <= todoAction.payload.currentDueDate && item.dueDate != ""
        );
        const nextTodoItems = currTodoItems.filter(
          (item) => item.dueDate > todoAction.payload.currentDueDate && item.dueDate != ""
        );
        const emptyTodoItems = currTodoItems.filter(
          (item) => item.dueDate == ""
        );

        newTodoItems = [
          ...prevTodoItems,
          { todoTask: todoAction.payload.currentTodoTask, dueDate: todoAction.payload.currentDueDate },
          ...nextTodoItems,
          ...emptyTodoItems,
        ];
      } else if (todoAction.payload.currentDueDate == "") {
        newTodoItems = [
          ...currTodoItems,
          { todoTask: todoAction.payload.currentTodoTask, dueDate: todoAction.payload.currentDueDate },
        ];
      }

    }
  } else if (todoAction.type == "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.todoTask !== todoAction.payload.task);
    

  } else if (todoAction.type == "CANCEL_ITEM") {

    const prevTodoItems = currTodoItems.filter(
        (item) => item.dueDate <= todoAction.payload.oldDate && item.dueDate != ""
    );
    const nextTodoItems = currTodoItems.filter(
        (item) => item.dueDate > todoAction.payload.oldDate && item.dueDate != ""
    );
    const emptyTodoItems = currTodoItems.filter((item) => item.dueDate == "");

    newTodoItems = [
        ...prevTodoItems,
        { todoTask: todoAction.payload.oldTask, dueDate: todoAction.payload.oldDate },
        ...nextTodoItems,
        ...emptyTodoItems,
    ];

  }

  return newTodoItems;
};

export default TodoItemsReducer;
