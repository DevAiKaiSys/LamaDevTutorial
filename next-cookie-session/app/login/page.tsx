import React from "react";
import LoginForm from "../ui/login-form";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="login">
      <h1>Welcome to the LoginPage</h1>
      <LoginForm />
    </div>
  );
}
