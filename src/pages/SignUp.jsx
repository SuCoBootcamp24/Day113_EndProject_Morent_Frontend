import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }, [password, confirmPassword]);

  return (
    <section className=" flex justify-center items-center absolute inset-0 p-6">
      <form
        /* onSubmit={loginFunction} */
        className=" bg-navBG bg-opacity-40 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Register New Account
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="secondName" className="block text-gray-700">
            Second Name
          </label>
          <input
            onChange={(e) => setSecondName(e.target.value)}
            type="text"
            id="secondName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Confirm Password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="confirmPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full text-white font-bold py-2 rounded mb-12 ${
            error ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700"
          }`}
          disabled={!!error}
        >
          Sign Up
        </button>

        <div className="text-center mb-5">
          <Link to="/login">Already registred? Log In here</Link>
        </div>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
    </section>
  );
}