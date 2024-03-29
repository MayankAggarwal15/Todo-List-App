import "./App.css";
import Header from "./components/Header";
import AddTodoItem from "./components/AddTodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import EditTodoItem from "./components/EditTodoItem";
import TodoItemsContextProvider from "./store/TodoItemsContextProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <center>
        <Header></Header>
        <TodoItemsContextProvider>
          <AddTodoItem></AddTodoItem>
          <WelcomeMessage></WelcomeMessage>
          <EditTodoItem></EditTodoItem>
          <TodoItems></TodoItems>
          <Footer></Footer>
        </TodoItemsContextProvider>
      </center>
    </>
  );
}

export default App;
