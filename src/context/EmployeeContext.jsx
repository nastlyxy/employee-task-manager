import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();
export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
      tasks: [],
    };
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const getEmployeeById = (id) => {
    return employees.find(emp => emp.id === Number(id));
  }
  const removeEmployee = (id) => {
    setEmployees((prev) => prev.filter(emp => emp.id !== id));
  };

  const addTask = (employeeId, text, deadline) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: [...emp.tasks,
                {
                    id: Date.now(),
                    text,  
                    deadline,
                    createdAt: new Date().toLocaleDateString(),
                    done: false
                }

              ],
            }
          : emp
      )
    );
  }

  const removeTask = (employeeId, taskId) => {
    setEmployees((prev) => 
        prev.map((emp) =>
            emp.id === employeeId
            ? {
                ...emp,
                tasks: emp.tasks.filter((task) => task.id !== taskId),
                }
            : emp
        )
        );
    }
    
  const toggleTaskDone = (employeeId, taskId) => {
    setEmployees((prev) =>
        prev.map((emp) =>
            emp.id === employeeId
            ? {
                ...emp,
                tasks: emp.tasks.map((task) =>
                    task.id === taskId ? { ...task, done: !task.done } : task
                ),
                }
            : emp
        )
    );
    }  
  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, getEmployeeById, removeEmployee, addTask, removeTask, toggleTaskDone }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export const useEmployees = () => useContext(EmployeeContext);
    