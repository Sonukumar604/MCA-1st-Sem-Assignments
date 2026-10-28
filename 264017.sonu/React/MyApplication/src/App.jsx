import { ConditionalRenedering } from "./components/ConditionalRendering";
import Counter from "./components/Counter";
import MyProfile from "./components/MyProfile";
import State from "./components/State";

function App() {
  const details = {
    name: "Sonu kumar",
    class: "MCA",
    college: "MAIMT",
  };
  const subjects = ["JAVA", "DS", "CST"];

  return (
    <div>
      <ul>
        <li>
          <MyProfile studentDetails={details} skills={subjects} />
          <h1>This is my first App</h1>
        </li>
      </ul>
      <ConditionalRenedering />
      <State />
      <Counter />
    </div>
  );
}

export default App;
