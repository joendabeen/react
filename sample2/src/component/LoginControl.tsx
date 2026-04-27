import { useState } from "react";
import Greeting from "./Greeting";
import { LoginButton, LogoutButton } from "./Button";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}
