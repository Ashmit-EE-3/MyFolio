import { NavLink, Outlet } from "react-router-dom";

function Settings() {
  return (
    <div className="flex flex-col font-poppins lg:gap-6 md:gap-4 min-h-screen overflow-hidden mx-auto text-[10px] md:text-[16px] gap-3 py-6">
      <nav className=" w-full xl:w-[40vw] px-10 flex justify-start">
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
