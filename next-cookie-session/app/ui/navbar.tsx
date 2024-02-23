import Link from "next/link";
import LogoutForm from "./logout-form";

const Navbar = async () => {
  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      <LogoutForm />
    </nav>
  );
};

export default Navbar;
