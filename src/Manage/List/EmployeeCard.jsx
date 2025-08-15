import styles from "./EmployeeCard.module.css";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../../context/EmployeeContext.jsx";

export default function EmployeeCard({ employee }) {

  const navigate = useNavigate();
  const { removeEmployee } = useEmployees();

  const handleClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if(window.confirm(`Are you sure you want to delete this employee - ${employee.name}?`)) {
      removeEmployee(employee.id);
    }
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.info}>
        <img src={employee.photo} alt={employee.name} className={styles.photo} />
      <div>
        <h3 className={styles.title}>{employee.name}</h3>
        <div className={styles.subtitle}><div className={styles.dot}></div>Active tasks: {employee.tasks.length}</div>
      </div>
      </div>
      
      <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
    </div>
  );
}
