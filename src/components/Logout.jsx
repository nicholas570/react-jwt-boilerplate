import React from "react";

const Logout = () => {
  const handleSubmit = () => {
    localStorage.removeItem("Token");
    alert("Successfully Log out");
  };

  return (
    <form>
      <button type="button" onClick={handleSubmit}>
        Disconnect
      </button>
    </form>
  );
};

export default Logout;
