"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";

const LoginPage = () => {
  // State variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can add your login logic here
    console.log("Login submitted");
  };

  return (
    <section className="w-screen h-screen flex items-center">
      <div className="w-3/5 h-full flex items-center justify-center bg-[#D1EAF8]">
        <div className="w-2/3 h-2/5 bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="w-2/5 h-full flex justify-center items-center">
        <Image src="/login2.png" width={400} height={400} alt=""></Image>
      </div>
    </section>
  );
};

export default LoginPage;
