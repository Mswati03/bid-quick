"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { signIn } from "next-auth/react"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [googleLoginButtonText, setGoogleLoginButtonText] = useState("Sign Up with Google")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Clear any previous error
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        router.push("/api/auth/login");
      } else {
    
      }
    } catch (error) {
    
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoginButtonText("Signing up with Google...");
    await signIn("google");
    setGoogleLoginButtonText("Sign Up with Google");
  };

  const isFormValid = name !== "" && email !== "" && password !== "";

  return (
    <div className="mx-auto max-w-md space-y-6 mt-20 ">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your details to create an account
        </p>
      </div>
      <Card>
        <CardHeader title="Sign Up" />
        <CardContent>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={handleGoogleLogin}
            
            >
              <GoogleIcon className="w-5 h-5 mr-2" />
              {googleLoginButtonText}
            </Button>
            <div className="text-center py-4">
              <span className="text-gray-400">OR</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mb-2"
                />
              </div>
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full mt-5"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
            <Separator className="my-8" />
            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link href="/api/auth/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

function GoogleIcon(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      {props.children}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M17.1891 14.1152C16.4619 16.6256 12.6694 18.8144 9.19027 16.6256C6.37273 14.853 6.27434 11.5944 7.27665 9.62754C8.27897 7.66072 11.3889 5.41688 15.6856 7.99314L18.3308 5.41688C16.7993 3.71784 11.4349 1.40171 6.97039 4.58582C1.66738 8.368 2.56578 14.1917 4.56819 17.2425C5.80223 19.1226 9.30789 22.1457 15.1844 20.5513C19.5527 19.366 21.2253 14.4945 20.9759 10.6802H12.1771V14.2814H15.1844"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}