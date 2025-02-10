import AdminNavbar from "../components/AdminNavbar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="flex flex-col gap-8 text-indie-100 text-center h-screen overflow-hidden">
      <AdminNavbar />
      <Outlet/>
    </div>
  );
}
export default Admin;
