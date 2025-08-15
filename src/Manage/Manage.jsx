import { useState } from "react";
import styles from "./Manage.module.css";
import EmployeeCard from "./List/EmployeeCard";
import { useEmployees } from "../context/EmployeeContext.jsx";

export default function Manage() {
  const { employees, addEmployee } = useEmployees();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    contract: "",
    photo: "",
  });
  

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!employee.name.trim()) return;
    addEmployee(employee);

    setEmployee({ name: "", age: "", contract: "", photo: "" });
    setIsFormVisible(false);
  };

  return (
    <div className={styles.manageWrapper}>
      <h2 className={styles.title}>Employee Manager</h2>

      {!isFormVisible && (
        <button
          className={styles.addButton}
          onClick={() => setIsFormVisible(true)}
        >
          Add New Employee
        </button>
      )}

      {isFormVisible && (
        <div className={styles.form}>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="contract"
            value={employee.contract}
            onChange={handleChange}
            placeholder="Contract Number"
          />
          <input
            type="text"
            name="photo"
            value={employee.photo}
            onChange={handleChange}
            placeholder="Photo URL"
          />
          <div className={styles.buttonGroup}>
            <button onClick={handleAdd}>Save</button>
            <button onClick={() => setIsFormVisible(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className={styles.list}>
        {employees.length === 0 ? (
          <p>No employees yet.</p>
        ) : (
          employees.map((emp) => <EmployeeCard key={emp.id} employee={emp} />)
        )}
      </div>
    </div>
  );
}
