import Todo from "./pages/Todo";
import { useAppSelector } from "./redux/hook";

function App() {
  const todo = useAppSelector((state) => state.todo);
  console.log(todo);

  return (
    <>
      <Todo/>
    </>
  );
}

export default App;
