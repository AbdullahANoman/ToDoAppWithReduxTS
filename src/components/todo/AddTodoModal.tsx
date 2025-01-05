import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation } from "@/redux/api/api";
// import { addTodo } from "@/redux/features/todoSlice";
// import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  //! For Local State
  // const dispatch = useAppDispatch();

  //
  // NOTE  their will be doing that is when useAddTodoMutation called the return value is like that
  // NOTE [actualFunctionForPost,{data,isLoading,isError}] = useAddTodoMutation();
  
  const [addTodo, { isLoading, isError, isSuccess, data }] =
    useAddTodoMutation();
  console.log(data, isError, isLoading, isSuccess);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      _id: randomString,
      title: task,
      description,
      status: "pending",
      priority: "medium",
      date: "2025-01-05",
    };

    //* Pass the taskDetails

    addTodo(taskDetails);
    //PROBLEM their is some problem
    // dispatch(addTodo(taskDetails));
    //  const requestedId  = useAddTodoMutation(taskDetails)
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish ..
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="task"
              className="col-span-3"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add Task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
