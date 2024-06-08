"use client";

import { signOut, useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  // ========== Session ==========
  const { status } = useSession();

  // ========== Function ==========
  const logOutHandler = () => {
    signOut();
  };

  // ========== Rendering ==========
  return (
    <header>
      <p>Todo App</p>
      {status === "authenticated" ? (
        <button onClick={logOutHandler}>
          Logout
          <FiLogOut />
        </button>
      ) : null}
    </header>
  );
};

export default Header;
