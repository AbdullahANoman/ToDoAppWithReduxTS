import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateTodoMutation } from "@/redux/api/api";
import { Textarea } from "../ui/textarea";

const UpdateTodoModal = ({
  _id,
  title,
  description,
  priority,
}: {
  description: string;
  title: string;
  _id: string;
  priority: string;
}) => {
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updatePriority, setUpdatePriority] = useState(priority);

  //NOTE mutation function get from the store

  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const options = {
      id: _id,
      data: {
        title: updateTitle,
        description: updateDescription,
        priority: updatePriority,
        isCompleted: false,
      },
    };
    updateTodo(options);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Your Task</DialogTitle>
          <DialogDescription>
            Update your task that you want to finish ..
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          {/* title  */}
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              placeholder="Title"
              onBlur={(e) => setUpdateTitle(e.target.value)}
              id="task"
              className="col-span-3"
              defaultValue={title}
            />
          </div>
          {/* description  */}
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              placeholder="Type your description here..."
              onBlur={(e) => setUpdateDescription(e.target.value)}
              id="description"
              className="col-span-3"
              defaultValue={updateDescription}
            />
          </div>
          {/* priority  */}
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right">Priority</Label>
            <Select
              defaultValue={updatePriority}
              onValueChange={(value) => setUpdatePriority(value)}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select your priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Priority</SelectLabel>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Update Task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;
