"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { TriangleAlertIcon } from "lucide-react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const [googleLoginButtonText, setGoogleLoginButtonText] =
    useState("Login with Google");
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
    <div className="mx-auto max-w-md space-y-6 mt-20 ">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email and password to login to your account
        </p>
      </div>
      <Card>
        <CardHeader title="Login" />
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
                disabled={!email || !password}
                className="w-full mt-5"
              >
                {loginButtonText}
              </Button>
            </form>
            <Separator className="my-8" />
            <Link
              href="#"
              className="inline-block w-full text-center text-sm underline"
              prefetch={false}
            >
              Forgot your password?
            </Link>
            <Separator className="my-8" />
            <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <Link href="/api/auth/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
          </div>
        </CardContent>
      </Card>
      <Alert variant="destructive" className="mt-4">
        <TriangleAlertIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Password incorrect or invalid user.</AlertDescription>
      </Alert>
     
    </div>
  );
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