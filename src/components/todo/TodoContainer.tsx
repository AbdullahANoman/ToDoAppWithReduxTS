// import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // get todos from local
  // const { todos } = useAppSelector((state) => state.todos);

  //NOTE PollingInterval or another fetch method used to not developerFriendly
  // const { data: todos, isLoading } = useGetTodosQuery(undefined, {
  //   pollingInterval: 1000,
  // });
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(todos.data);
  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="w-full h-full p-2 bg-primary-gradient rounded-xl">
        <div className="w-full h-full p-5 bg-white rounded-2xl ">
          {todos?.data?.length > 0 ? (
            <div>
              {todos?.data?.map((item: TTodoCardProps, index: number) => (
                <TodoCard key={index} {...item} />
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
