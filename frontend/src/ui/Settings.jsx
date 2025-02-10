import { useSelector } from "react-redux";

function Settings()
{
    const username = useSelector((state)=>state.user.username)
    return(
        <div>
            Change Username {username}
        </div>
    )
}
export default Settings;