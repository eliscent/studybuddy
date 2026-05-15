import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">

      <h2>StudyBuddy ✨</h2>

      <div className="navbar-right">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/documentation">
          Documentation
        </Link>

        {user ? (
          <>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}