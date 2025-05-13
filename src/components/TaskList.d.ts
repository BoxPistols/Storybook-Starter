import { Task } from "./Task";

interface TaskListProps {
  loading?: boolean;
  tasks: Task[];
  onToggleTask: (id: string, newState: string) => void;
}

declare function TaskList(props: TaskListProps): JSX.Element;

export default TaskList;
