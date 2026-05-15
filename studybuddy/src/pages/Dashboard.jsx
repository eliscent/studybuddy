import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Navbar";

import DashboardStats from "../components/DashboardStats";
import Pomodoro from "../components/Pomodoro";
import TaskList from "../components/TaskList";
import QuoteCard from "../components/QuoteCard";

import "../styles/dashboard.css";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <main className="dashboard">
        <h1 className="dashboard-title">
          Dashboard 🚀
        </h1>

        {/* TOP */}
        <div className="top-section">

          <div className="card">
            <DashboardStats />
          </div>

          <div className="card">
            <QuoteCard />
          </div>

        </div>

        {/* BOTTOM */}
        <div className="bottom-section">

          <div className="card">
            <Pomodoro />
          </div>

          <div className="card">
            <TaskList />
          </div>

        </div>

      </main>
    </>
  );
}