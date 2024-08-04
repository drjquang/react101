import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="root-layout">
      <header>
        <nav>
          <h1>Select your app</h1>
          <NavLink to="/">Register</NavLink>
          <NavLink to="login">Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>    
  );
}
