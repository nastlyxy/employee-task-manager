import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Manage from "./Manage/Manage.jsx";
import EmployeePage from "./Manage/List/EmployeePage.jsx";
import Line from "./Line/Line.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Line/>
      <Routes>
        <Route path="/" element={<Manage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
