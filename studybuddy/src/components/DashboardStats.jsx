import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

import {
  collection,
  onSnapshot
} from "firebase/firestore";

export default function DashboardStats() {
  const { user } = useAuth();

  const [taskCount, setTaskCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const [sessionsToday, setSessionsToday] = useState(0);
  const [focusMinutes, setFocusMinutes] = useState(0);

  // 📋 TASKS
  useEffect(() => {
    if (!user) return;

    const unsub = onSnapshot(
      collection(db, "users", user.uid, "tasks"),
      (snapshot) => {
        const tasks = snapshot.docs.map((doc) => doc.data());

        setTaskCount(tasks.length);

        setCompletedTasks(
          tasks.filter((task) => task.done).length
        );
      }
    );

    return () => unsub();
  }, [user]);

  // 🍅 POMODORO
  useEffect(() => {
    if (!user) return;

    const unsub = onSnapshot(
      collection(db, "users", user.uid, "pomodoroSessions"),
      (snapshot) => {
        const sessions = snapshot.docs.map((doc) => doc.data());

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const todaySessions = sessions.filter((session) => {
          if (!session.createdAt) return false;

          return (
            session.createdAt.toDate() >= today
          );
        });

        setSessionsToday(todaySessions.length);

        const totalMinutes = todaySessions.reduce(
          (acc, session) =>
            acc + session.duration / 60,
          0
        );

        setFocusMinutes(totalMinutes);
      }
    );

    return () => unsub();
  }, [user]);

  return (
    <div>
      <h2>📊 Your Stats</h2>

      <ul>
        <li>Total tasks: {taskCount}</li>

        <li>
          Completed tasks: {completedTasks}
        </li>

        <li>
          Pomodoro sessions today: {sessionsToday}
        </li>

        <li>
          Focus minutes today: {focusMinutes}
        </li>
      </ul>
    </div>
  );
}