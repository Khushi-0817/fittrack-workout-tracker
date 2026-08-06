import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./context/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <Routes>

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          user ? <Navigate to="/" replace /> : <Login />
        }
      />

      <Route
        path="/signup"
        element={
          user ? <Navigate to="/" replace /> : <Signup />
        }
      />

    </Routes>
  );
}

export default App;