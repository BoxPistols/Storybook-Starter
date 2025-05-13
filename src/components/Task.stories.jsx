import Task from "./Task";

// stateもwatchしたいので、Task.jsxの中でuseStateを使う

export default {
  component: Task,
  title: "Components/Task",
  tags: ["autodocs"],
  argTypes: {
    task: {
      control: {
        type: "object",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <div style={{padding: "2rem"}}>
          <Story />
        </div>
      );
    },
  ],
  render: (args) => {
    return <Task {...args} />;
    day;
  },
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Task 1",
      state: "TASK_INBOX",
    },
  },
};
export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
