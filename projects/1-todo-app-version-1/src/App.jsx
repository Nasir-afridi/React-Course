import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItem1 from "./components/Additem1";
import AddItem2 from "./components/Additem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <AddItem1></AddItem1>
        <AddItem2></AddItem2>
      </div>
    </center>
  );
}

export default App;
