import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

import appStyles from "../../styles/App.module.css";
import styles from "./Search.module.css";

interface Task {
  id: string;
  task: string;
  checked: boolean;
}

interface CreateTasksProps {
  tasks: Task[];
  setTasks: (value: Task[]) => void;
}

export function CreateTask({ tasks, setTasks }: CreateTasksProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { id: uuid(), task: newTaskText, checked: false }]);
    setNewTaskText("");
  }

  return (
    <main className={appStyles.wrapper}>
      <form onSubmit={handleCreateNewTask} className={styles.mainform}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar <PlusCircle size={20} />{" "}
        </button>
      </form>
    </main>
  );
}
