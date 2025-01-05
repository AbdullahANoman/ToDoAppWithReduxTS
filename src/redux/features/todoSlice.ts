import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean | undefined;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "TODO",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleCheck: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id == action.payload);
      task!.isCompleted = !task?.isCompleted;
      console.log(task?.isCompleted);
    },
  },
});

export const { addTodo, removeTodo, toggleCheck } = todoSlice.actions;

export default todoSlice.reducer;
