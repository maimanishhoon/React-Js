import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { userid } = useParams();
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      navigate(`/user/${userId}`);
    }
  };

  return (
    <div>
      <div className="text-7xl font-extrabold flex justify-center my-10 py-5 text-gray-600 ">This is your ID: "{userid}"</div>
      <form onSubmit={handleSubmit}>
        <input
         className = "border-2 rounded-xl border-black text-lg my-5 px-10 py-2 flex-row  justify-between space-x-4 "
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
        <button className="border-2  rounded-xl text-2xl py-2 px-5 text-md font-extrabold mx-4 hover:border-blue-500" type="submit">Search User</button>
      </form>
    </div>
  );
}

export default User;

