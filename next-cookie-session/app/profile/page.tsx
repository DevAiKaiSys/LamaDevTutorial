import React from "react";
import {
  changePremium,
  changeUsername,
  getSession,
} from "../iron-session/app-router-server-component-and-action/actions";
import { redirect } from "next/navigation";

type Props = {};

export default async function Page({}: Props) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b>{session.username}</b>
      </p>
      <span>
        You are a <b>{session.isPro ? "Premium" : "Free"}</b> user
      </span>
      <form action={changePremium}>
        <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
      </form>

      <form action={changeUsername}>
        <input
          type="text"
          name="username"
          required
          placeholder={session.username}
        />
        <button>Update</button>
      </form>
    </div>
  );
}
