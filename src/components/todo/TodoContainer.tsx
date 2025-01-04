import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <Button className="text-xl font-semibold bg-primary-gradient">
          Add todo
        </Button>
        <Button className="text-xl font-semibold bg-primary-gradient">
          Filter
        </Button>
      </div>
      <div className="w-full h-full p-2 bg-primary-gradient rounded-xl">
        <div className="w-full h-full p-5 bg-white rounded-2xl ">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="flex items-center justify-center p-3 font-semibold bg-white rounded-lg">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
