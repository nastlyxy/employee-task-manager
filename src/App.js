import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Manage from "./Manage/Manage.jsx";
import EmployeePage from "./Manage/List/EmployeePage.jsx";
import Line from "./Line/Line.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <Line/>
      <Routes>
        <Route path="/" element={<Manage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
