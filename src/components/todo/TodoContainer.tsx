import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  const { data,  isLoading } = useGetTodosQuery(undefined);

  if(isLoading){
    return <p>Loading...</p>
  }
  
  console.log(data);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="w-full h-full p-2 bg-primary-gradient rounded-xl">
        <div className="w-full h-full p-5 bg-white rounded-2xl ">
          {todos.length > 0 ? (
            <div>
              {todos.map((item, index) => (
                <TodoCard
                  key={index}
                  description={item.description}
                  title={item.title}
                  id={item.id}
                  isCompleted={item.isCompleted}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center p-3 font-semibold bg-white rounded-lg">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
