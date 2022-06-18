import { PlusCircle } from "phosphor-react";
import appStyles from "../../styles/App.module.css";
import styles from "./Search.module.css";

export function Search() {
  return (
    <main className={appStyles.wrapper}>
      <form className={styles.mainform}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={20} />{" "}
        </button>
      </form>
    </main>
  );
}
