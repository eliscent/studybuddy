import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./components/TaskList";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
<AuthProvider>
  <HashRouter>
    <Routes>
      <Route  path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </HashRouter>
</AuthProvider>
  );
}