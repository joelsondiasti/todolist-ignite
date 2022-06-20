import { Trash } from "phosphor-react";
import { CheckButton } from "../../CheckButton";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  checked: boolean;
  task: string;
  handleCheckChange: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function Task({ id, checked, task, handleCheckChange, handleDeleteTask}: TaskProps) {
  return (
    <li
      key={id}
      className={!checked ? styles.task : `${styles.task} ${styles.scratch}`}
    >
      <CheckButton
        checked={checked}
        taskId = {id}
        onCheckChange={handleCheckChange}
      />
      <p>{task}</p>
      <button onClick={()=>handleDeleteTask(id)}><Trash size={20} /></button>
    </li>
  );
}
