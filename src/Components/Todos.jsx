import Styles from "../Styles/Todos.module.css";
const Todos = ({ todoArr }) => {
  return (
    <div className={Styles.container}>
      {todoArr.map((todo, index) => (
        <div className={Styles.box} key={index}>
          <h3>{todo.task}</h3>
        </div>
      ))}
    </div>
  );
};

export default Todos;
