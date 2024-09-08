"use client";
import React, { useState } from "react";
import { z } from "zod";
import LogoLink from "./LogoLink";

const formSchema = z.object({
  username: z.string().min(3),
});
const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <LogoLink applyPadding={false} />
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* Plaid Link Component*/}</div>
      ) : (
        <>FORM</>
      )}
    </section>
  );
};

export default AuthForm;
