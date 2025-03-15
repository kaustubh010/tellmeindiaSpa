"use client";

import React, { useState } from "react";
// import { createClient } from "@supabase/supabase-js";
import Navbar from "../components/Navbar";

// Initialize Supabase client
// const supabaseUrl = "http://46.202.164.76:8000"; // Replace with your Supabase URL
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzM1MTUxNDAwLAogICJleHAiOiAxODkyOTE3ODAwCn0.91DvvMrH32Ck85seftTg7STjTYRc7X7kUdwCkuHYPYc"; // Replace with your Supabase API Key
// const supabase = createClient(supabaseUrl, supabaseKey);


const DeleteAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Add user details to "deleted_users" table
      // const { error } = await supabase.from("deleted_users").insert([
      //   {
      //     name,
      //     email,
      //     password,
      //   },
      // ]);

      // if (error) {
      //   console.error("Error adding to deleted_users table:", error.message);
      //   setMessage("An error occurred. Please try again.");
      //   return;
      // }

      setMessage(
        "Your account will be deleted in 30 days. We will contact you via email to verify your identity."
      );

      // Clear input fields
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(135deg, #000000 25%, #1f2937 100%)",
        }}
        className="min-h-screen flex items-center justify-center bg-tech text-gray-100"
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-primary">
            Delete Account
          </h1>
          {message && (
            <p className="text-sm text-center mt-4 bg-gray-700 text-green-400 py-2 px-4 rounded">
              {message}
            </p>
          )}
          <form onSubmit={handleDeleteAccount} className="mt-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded mt-4 font-medium"
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
