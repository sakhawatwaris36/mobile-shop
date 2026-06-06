import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img17pro from "./assets/17pro.png";

export default function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit() {
    setError("");
    setSuccess("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid complete email (example@gmail.com) ❌");
      return;
    }

    if (password.length < 8) {
      setError("Password kam az kam 8 characters ka hona chahiye ❌");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password match nahi kar raha ❌");
      return;
    }

    const user = {
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setSuccess("Signup Successful ✅");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div
      className="w-full relative bg-black/30 bg-blend-multiply bg-cover bg-center flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${img17pro})`,
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 text-white text-2xl bg-white/20 px-3 py-1 rounded-full hover:bg-white/40 transition"
      >
        ←
      </button>

      <div className="w-[25rem] bg-white/5 rounded-3xl backdrop-brightness-50 border border-white/30 p-10 py-20">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-white text-2xl font-semibold">
            Register
          </h1>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-4 w-[20rem] px-4 bg-white/20 text-white placeholder-white/40 rounded-[3rem] outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-4 w-[20rem] px-4 bg-white/20 text-white placeholder-white/40 rounded-[3rem] outline-none"
          />

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="py-4 w-[20rem] px-4 bg-white/20 text-white placeholder-white/40 rounded-[3rem] outline-none"
          />

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-400 text-sm">
              {success}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="bg-white/20 py-2 w-28 rounded-3xl text-white hover:bg-white/50 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}