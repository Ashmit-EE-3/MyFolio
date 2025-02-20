import { useSelector } from "react-redux";

function Stats()
{
    const project = useSelector((state)=> state.project.project[0]) ; 
    console.log(project) ; 
    return(
        <p>
        </p>
    )
}
export default Stats;