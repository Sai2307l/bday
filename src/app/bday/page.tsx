"use client";
import { signOut } from "next-auth/react";
import React from "react";

const handleclick = () => {
  console.log("Button clicked");
  signOut({ callbackUrl: "/" });
};

function page() {
  return (
    <div>
      <div>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => handleclick()}
        >
          Log Out
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">
          Welcome to the Birthday Page!
        </h1>
        <p className="text-center mt-4 text-gray-600">
          This is a placeholder for your birthday-related content.
        </p>
      </div>
    </div>
  );
}

export default page;
