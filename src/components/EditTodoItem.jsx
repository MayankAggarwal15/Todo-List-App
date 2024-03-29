import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { MdOutlineSaveAs } from "react-icons/md";
import { MdOutlineCancelPresentation } from "react-icons/md";

const EditTodoItem = () => {
  const newTodoTask = useRef();
  const newTodoDate = useRef();

  const { oldTask, oldDate, editTodo, handleSaveButton, handleCancelButton } =
    useContext(TodoItemsContext);

  if (editTodo == true) {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <input
                ref={newTodoTask}
                type="text"
                className="form-control"
                defaultValue={oldTask}
              ></input>
            </div>

            <div className="col-3">
              <input ref={newTodoDate} type="date" defaultValue={oldDate} />
            </div>

            <div className="col-3">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => handleSaveButton(newTodoTask, newTodoDate)}
              >
                <MdOutlineSaveAs size={30} />
                {/* Save */}
              </button>

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleCancelButton(oldTask, oldDate)}
              >
                <MdOutlineCancelPresentation size={30} />
                {/* Cancel */}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default EditTodoItem;
