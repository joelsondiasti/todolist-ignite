import { ClipboardText } from "phosphor-react";
import appStyles from "../../styles/App.module.css";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

interface Task {
  id: string;
  task: string;
  checked: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: (value: Task[]) => void;
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
  function handleCheckChange(id: string) {
    var tasksChanged = tasks.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });

    setTasks(tasksChanged);
  }

  function handleDeleteTask(id: string){
    var tasksWithoutOne = tasks.filter(task=>task.id !== id)
    setTasks(tasksWithoutOne)
  }

  const completedTasks = tasks.filter((task) => task.checked);
  return (
    <div id={styles.tasks} className={appStyles.wrapper}>
      <header id={styles.taskHeader}>
        <p>
          Tarefas Criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas{" "}
          <span>{`${completedTasks.length} de ${tasks.length}`}</span>
        </p>
      </header>

      {tasks.length === 0 && (
        <section id={styles.emptyList}>
          <ClipboardText size={56} />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <h2>Crie tarefas e organize seus itens a fazer</h2>
        </section>
      )}

      {tasks.length > 0 && (
        <ul id={styles.taskList}>
          {/* {tasks.map((task, index) => (
            <li
              key={task.id}
              className={
                !task.checked ? taskstyles.task : `${taskstyles.task} ${taskstyles.scratch}`
              }
            >
              <CheckButton
                checked={task.checked}
                onCheckChange={handleCheckChange(index)}
              />
              <p>{task.task}</p>
              <Trash size={20} />
            </li>
          ))} */}
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              checked={task.checked}
              task={task.task}
              handleCheckChange={handleCheckChange}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
