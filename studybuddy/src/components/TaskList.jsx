import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";

export default function TaskList() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "users", user.uid, "tasks"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setTasks(taskList);
    });

    return () => unsub();
  }, [user]);

  const addTask = async () => {
    if (!input.trim()) return;

    await addDoc(
      collection(db, "users", user.uid, "tasks"),
      {
        title: input,
        done: false,
        createdAt: serverTimestamp()
      }
    );

    setInput("");
  };

  const deleteTask = async (id) => {
    await deleteDoc(
      doc(db, "users", user.uid, "tasks", id)
    );
  };

const toggleDone = async (task) => {
  await updateDoc(
    doc(db, "users", user.uid, "tasks", task.id),
    {
      done: !task.done
    }
  );

  setMessage(
    !task.done
      ? "Task completed ✅"
      : "Task marked as active"
  );

  setTimeout(() => {
    setMessage("");
  }, 2000);
};
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>📋 Today's Tasks</h2>
      <p>
  Click a task to mark it as completed ✅
      </p>
{message && (
  <div className="toast">
    {message}
  </div>
)}
      <div>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleDone(task)}
              style={{
                textDecoration: task.done
                  ? "line-through"
                  : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {task.title}
            </span>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
            >
            Delete
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}