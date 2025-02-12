import { NavLink, Outlet } from "react-router-dom";

function Settings()
{
    return(
        <div className="h-screen flex flex-col gap-6">
            <nav className="w-[40vw] mx-auto">
                <ul className="flex justify-start gap-4">
                    <NavLink to='account' className="p-2 rounded-lg">ACCOUNT</NavLink>
                    <NavLink to='billing' className="p-2 rounded-lg">BILLING</NavLink>
                </ul>
            </nav>
            <Outlet/>
        </div>

    )
}
export default Settings;