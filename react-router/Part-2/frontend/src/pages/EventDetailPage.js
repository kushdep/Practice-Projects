import { redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail')
    console.log(data)
    return <>
        <EventItem event={data.event}/>
    </>

}

export default EventDetailPage

export async function loader({request,params}) {
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/'+id)  

    if(!response.ok){
        throw new Error("cannot fetch event")
    }else{
        return response
    }
} 

export async function action({request,params}) {
  const eventId = params.eventId
  const response = await fetch('http://localhost:8080/events/'+eventId,{
    method:request.method
  })
  if(!response.ok){
    throw new Error ("Cannot Delete Event")
  }
  return redirect('/events')
}
