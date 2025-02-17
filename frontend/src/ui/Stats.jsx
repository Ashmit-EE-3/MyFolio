import { useSelector } from "react-redux";

function Stats()
{
    const project = useSelector((state)=>state.project)
    console.log("Project is : ",project)
    return(
        <>
        </>
    )
}
export default Stats;