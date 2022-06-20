import { Check, Circle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import styles from "./CheckButton.module.css";
interface CheckButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  taskId: string;
  onCheckChange: (index: string) => void;
}

export function CheckButton({
  taskId,
  checked,
  onCheckChange,
  ...props
}: CheckButtonProps) {
  return (
    <>
      <button
        className={checked ? styles.btnChecked : styles.btn}
        onClick={() => onCheckChange(taskId)}
        {...props}
      >
        {checked ? <Check size={12} weight={"bold"} /> : <Circle size={20} />}
      </button>
    </>
  );
}
