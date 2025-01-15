import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { Button } from "../ui/button";
import UpdateTodoModal from "./UpdateTodoModal";

export type TTodoCardProps = {
  _id: string;
  status: string;
  title: string;
  description: string;
  priority: string;
  isCompleted: boolean;
  date?: string;
};

const TodoCard = ({
  description,
  title,
  isCompleted,
  priority,
  _id,
}: TTodoCardProps) => {
  // NOTE for local store
  // const dispatch = useAppDispatch();

  // console.log(status, priority, date);

  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const toggleState = () => {
    const options = {
      id: _id,
      data: {
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };

    console.log(_id);
    if (isLoading) {
      return <p>Loading......</p>;
    }
    updateTodo(options);
  };

  const [deleteTodo, { isError }] = useDeleteTodoMutation();
  const handleDelete = (id: string) => {
    if (isError) {
      return <p>Error at delete </p>;
    }
    deleteTodo(id);
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 my-4 space-y-4 bg-white border rounded-md sm:flex-row sm:space-y-0">
      <div className="flex items-center flex-1 ">
        <input
          onChange={toggleState}
          className="mr-3"
          type="checkbox"
          name="complete"
          id="complete"
          defaultChecked={isCompleted}
        />
        <p className="flex-1 font-semibold text-center sm:text-left">{title}</p>
      </div>
      <div className="flex items-center justify-center flex-1 gap-2 sm:justify-start">
        <div
          className={`w-3 h-3 rounded-full ${
            priority === "medium" ? "bg-yellow-500" : ""
          } ${priority === "high" ? "bg-red-500" : ""} ${
            priority === "low" ? "bg-green-600" : ""
          }`}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1 text-center sm:text-left">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p className="flex-[2] text-center sm:text-left">{description}</p>
      <div className="space-x-4">
        <Button onClick={() => handleDelete(_id)} className="bg-red-500">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
        <UpdateTodoModal
          description={description}
          title={title}
          _id={_id}
          priority={priority}
        />
      </div>
    </div>
  );
};

export default TodoCard;
