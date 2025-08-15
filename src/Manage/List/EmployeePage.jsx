import styles from "./EmployeePage.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEmployees } from "../../context/EmployeeContext.jsx";

export default function EmployeePage() {
  const { id } = useParams();
  const { getEmployeeById, addTask, removeTask, toggleTaskDone } =
    useEmployees();
  const employee = getEmployeeById(id);

  const [taskText, setTaskText] = useState("");
  const [deadline, setDeadline] = useState("");

  if (!employee) return <p>Employee not found</p>;

  const handleAddTask = () => {
    if (!taskText.trim()) return;
    addTask(employee.id, taskText, deadline);
    setTaskText("");
    setDeadline("");
  };

  return (
    <div className={styles.page}>
        <div className={styles.details}>
         <img
        src={employee.photo}
        alt={employee.name}
        className={styles.bigPhoto}
      />
      <div>
        <h2>{employee.name}</h2>
        <p>
          <strong>Age:</strong> {employee.age}
        </p>
        <p>
          <strong>Contract No.:</strong> {employee.contract}
        </p>
      </div>
        </div>
     
      <div className={styles.tasks}>
        <h3>Add New Task</h3>
        <div className={styles.taskForm}>
          <input
            type="text"
            placeholder="Task description"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button onClick={handleAddTask} className={styles.addButton}>Add Task</button>
        </div>
        <h3>Tasks:</h3>
        <ul>
          {employee.tasks.length === 0 ? (
            <li>No active tasks</li>
          ) : (
            employee.tasks.map((task) => (
              <li key={task.id} className={styles.taskItem}>
                <span
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                  }}
                >
                  {task.text} — due {task.deadline || "no deadline"}
                </span>
                <div className={styles.buttons}>
                <button onClick={() => toggleTaskDone(employee.id, task.id)} className={styles.doneButton}>
                  {task.done ? "Undo" : "Done"}
                </button>
                <button onClick={() => removeTask(employee.id, task.id)} className={styles.deleteButton}>
                  Delete
                </button>
              </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <button onClick={() => window.history.back()} className={styles.backButton}>
            Back to Employee List
        </button>
    </div>
  );
}
