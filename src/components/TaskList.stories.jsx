import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "Components/TaskList",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    tasks: [
      {...TaskStories.Default.args.task, id: "1", title: "Task 1"},
      {...TaskStories.Default.args.task, id: "2", title: "Task 2"},
      {...TaskStories.Default.args.task, id: "3", title: "Task 3"},
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    tasks: [],
  },
};
