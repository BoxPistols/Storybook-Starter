import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "Components/TaskList",
  tags: ["autodocs"],
  decoderators: [
    (Story) => {
      return (
        <div style={{padding: "1rem"}}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    tasks: [
      {...TaskStories.Default.args.task, id: "1", title: "Task 1"},
      {
        ...TaskStories.Default.args.task,
        id: "2",
        title: "Task 2",
        state: "TASK_PINNED",
      },
      {
        ...TaskStories.Default.args.task,
        id: "3",
        title: "Task 3",
        state: "TASK_ARCHIVED",
      },
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
