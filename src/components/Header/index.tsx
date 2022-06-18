import logoTodo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoTodo} alt="Logo ToDo" />
    </header>
  );
}
