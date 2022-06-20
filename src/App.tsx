import { useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import "./styles/global.css";

interface Task {
  id: string;
  task: string;
  checked: boolean;
}

const faketasks = [
  {
    id: "1",
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    checked: true,
  },
  {
    id: "2",
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    checked: false,
  },
  {
    id: "3",
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    checked: false,
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(faketasks);

  return (
    <>
      <Header />
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}
export default App;
