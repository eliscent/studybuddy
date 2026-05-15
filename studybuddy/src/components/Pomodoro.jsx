import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Pomodoro() {
  const { user } = useAuth();

  const presets = {
    short: 15 * 60,
    focus: 25 * 60,
    deep: 50 * 60
  };
  const breakMessages = [
  "Break time ☕",
  "Great work - take a breather 🌿",
  "Focus session complete ✅",
  "Nice job staying focused ✨",
  "Time to stretch and recharge 💫",
  "You earned a short break 🌙",
  "Another session completed 📚"
];

  const [time, setTime] = useState(presets.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus");
  const [sessionsToday, setSessionsToday] = useState(0);

  const [message, setMessage] = useState("");

  // ⏱ timer
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval);

            setIsRunning(false);

            saveSession();

            // ✅ feedback käyttäjälle
            const randomMessage =
  breakMessages[
    Math.floor(
      Math.random() * breakMessages.length
    )
  ];

setMessage(randomMessage);

            setTimeout(() => {
              setMessage("");
            }, 4000);

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // 💾 save session
  const saveSession = async () => {
    if (!user) return;

    await addDoc(
      collection(db, "users", user.uid, "pomodoroSessions"),
      {
        duration: presets[mode],
        mode,
        createdAt: serverTimestamp()
      }
    );

    setSessionsToday((prev) => prev + 1);
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setTime(presets[newMode]);
    setIsRunning(false);

    setMessage("");
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;

    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div>
      <h2>🍅 Pomodoro</h2>

      <p>Sessions today: {sessionsToday}</p>

      <h1>{formatTime(time)}</h1>

      {/* ✅ feedback message */}
      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      <div>
        <button onClick={() => changeMode("short")}>
          15 min
        </button>

        <button onClick={() => changeMode("focus")}>
          25 min
        </button>

        <button onClick={() => changeMode("deep")}>
          50 min
        </button>
      </div>

      <div>
        <button onClick={() => setIsRunning(true)}>
          Start
        </button>

        <button onClick={() => setIsRunning(false)}>
          Pause
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setTime(presets[mode]);

            setMessage("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}