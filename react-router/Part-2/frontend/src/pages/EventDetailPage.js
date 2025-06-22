import { NavLink, useParams } from "react-router-dom"

function EventDetailPage() {
    const params = useParams()
    return <>
        <h1>Event Detail Page</h1>
        <h2>Event Id :- {params.eventId}</h2>
        <NavLink to=".." relative="path">Back</NavLink>
    </>

}

export default EventDetailPage