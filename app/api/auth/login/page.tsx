"use client"
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const [googleLoginButtonText, setGoogleLoginButtonText] = useState("Login with Google");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginButtonText("Logging in...");
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      // Handle error
      console.error(result.error);
      setLoginButtonText("Login");
    } else {
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoginButtonText("Logging in with Google...");
    await signIn("google");
    setGoogleLoginButtonText("Login with Google");
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!email || !password}
          className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${
            !email || !password ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loginButtonText}
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          {googleLoginButtonText}
        </button>
      </div>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}