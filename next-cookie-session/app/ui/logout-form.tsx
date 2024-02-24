import { logout } from "../iron-session/app-router-server-component-and-action/actions";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  );
};

export default LogoutForm;
