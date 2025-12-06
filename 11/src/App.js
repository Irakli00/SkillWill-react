import "./App.css";
import { Book } from "./book";

function App() {
  return (
    <div className="App">
      <main>
        <Book
          title={"Lord of the rings"}
          img={"https://picsum.photos/240/240"}
          desc={"Very cool book"}
          characters={["Gendalf", "Sam", "Frodo"]}
          onClick={(char) => console.log(char)}
        ></Book>
      </main>
    </div>
  );
}

export default App;
