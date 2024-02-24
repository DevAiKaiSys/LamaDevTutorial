"use client";

import { login } from "../iron-session/app-router-server-component-and-action/actions";

const LoginForm = () => {
  return (
    <form action={login}>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
