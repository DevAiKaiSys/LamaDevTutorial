import Link from "next/link";
import LogoutForm from "./logout-form";
import { getSession } from "../iron-session/app-router-server-component-and-action/actions";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
};

export default Navbar;
