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
          <NavLink to="connect">Connect</NavLink>
          <NavLink to="read">Read</NavLink>
          <NavLink to="write">Write</NavLink>
          <NavLink to="writeRTDB">Write RTDB</NavLink>
          <NavLink to="readRTDB">Read RTDB</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>    
  );
}
