import { Link, Outlet } from "react-router-dom";
export function Layout() {
  return (
    <div>
      <div>
        <Link to="/menu">Меню</Link>
        <Link to="/cart">Коризна</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
