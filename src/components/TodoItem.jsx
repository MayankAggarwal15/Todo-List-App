import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = ({ todoTask, dueDate }) => {
  const { handleDeleteButton, handleEditButton } = useContext(TodoItemsContext);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <h5>{todoTask}</h5>
        </div>

        <div className="col-3">
          {dueDate != "" && (
            <h5>{`${dueDate.split("-")[2]}-${dueDate.split("-")[1]}-${
              dueDate.split("-")[0]
            }`}</h5>
          )}
        </div>

        <div className="col-3">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleEditButton(todoTask, dueDate)}
          >
            <FaRegEdit size={30} color="white" />
            {/* Edit */}
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteButton(todoTask)}
          >
            <MdDeleteForever size={30} />
            {/* Delete */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
