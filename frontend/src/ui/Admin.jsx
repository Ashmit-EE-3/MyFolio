import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="md:flex md:flex-col grid grid-cols-12 gap-2 text-indie-100 text-center h-screen overflow-hidden">
      <AdminNavbar />
      <Sidebar/>
      <Outlet/>
    </div>
  );
}
export default Admin;
