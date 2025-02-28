import { NavLink, Outlet } from "react-router-dom";

function Settings() {
  return (
    <div className="flex flex-col font-poppins gap-6 h-screen overflow-y-auto">
      <nav className="w-[40vw] mx-auto">
        <ul className="flex justify-start gap-4">
          <NavLink to="account" className="p-2 rounded-lg">
            ACCOUNT
          </NavLink>
          <NavLink to="billing" className="p-2 rounded-lg">
            BILLING
          </NavLink>
        </ul>
      </nav>
      <main className="mb-20">
        <Outlet />
      </main>
    </div>
  );
}
export default Settings;
