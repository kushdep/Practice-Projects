import { NavLink, useParams } from "react-router-dom"

function EventDetailPage(){
    const params = useParams()
    return<>
        <h1>{params.eventId}</h1>
        <NavLink to=".." relative="path">Back</NavLink>
    </> 
    
}

export default EventDetailPage