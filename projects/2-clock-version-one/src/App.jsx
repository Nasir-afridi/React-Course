import "./App.css";
import ClockName from "./components/ClockName";
import ClockDesp from "./components/ClockDesp";
import ClockTime from "./components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockName></ClockName>
      <ClockDesp></ClockDesp>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
