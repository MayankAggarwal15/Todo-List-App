import { useRef, useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { MdOutlineAdd } from "react-icons/md";

const AddTodoItem = () => {
  const todoTaskInput = useRef();
  const todoDateInput = useRef();

  const { handleAddButton } = useContext(TodoItemsContext);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              ref={todoTaskInput}
              type="text"
              className="form-control"
              placeholder="Enter Your Task Here...."
            ></input>
          </div>

          <div className="col-3">
            <input ref={todoDateInput} type="date" />
          </div>

          <div className="col-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleAddButton(todoTaskInput, todoDateInput)}
            >
              <MdOutlineAdd size={30} />
              {/* Add */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodoItem;
