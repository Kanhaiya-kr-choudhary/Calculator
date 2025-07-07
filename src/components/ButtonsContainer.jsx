import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonclicked }) => {
  const ButtonName = [
    "C",
    "%",
    "dlt",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {ButtonName.map((ButtonName) => (
        <button
          className={`${styles.buttons} btn btn-success`}
          onClick={() => onButtonclicked(ButtonName)}
        >
          {ButtonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
