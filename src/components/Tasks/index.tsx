import { Circle, Trash } from "phosphor-react";
import appStyles from "../../styles/App.module.css";
import styles from './Tasks.module.css';
export function Tasks() {
  return (
    <div id={styles.tasks} className={appStyles.wrapper}>
      <header id={styles.taskHeader}>
        <p>
          Tarefas Criadas <span>5</span>
        </p>
        <p>
          Concluídas <span>2 de 5</span>
        </p>
      </header>
      <ul id={styles.taskList}>
        <li>
            <button><Circle size={20}/></button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt molestias, sunt eligendi. Voluptate iste perspiciatis, nam sequi.</p>
            <Trash size={20}/>
        </li>
        <li>
            <button><Circle size={20}/></button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt molestias, sunt eligendi. Voluptate iste perspiciatis, nam sequi.</p>
            <Trash size={20}/>
        </li>
        <li>
            <button><Circle size={20}/></button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt molestias, sunt eligendi. Voluptate iste perspiciatis, nam sequi.</p>
            <Trash size={20}/>
        </li>
      </ul>
    </div>
  );
}
