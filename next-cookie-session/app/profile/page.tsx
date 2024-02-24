import React from "react";
import { getSession } from "../iron-session/app-router-server-component-and-action/actions";
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
    </div>
  );
}
