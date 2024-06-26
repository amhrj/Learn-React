import { useState } from "react";

export default function ConditionalRendering2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome Back!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login!</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
