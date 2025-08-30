import { Await, redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList"
import { Suspense } from "react"

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail')
    return <>
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading....</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
    <Suspense>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  </>

}

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw new Error("cannot fetch event")
  } else {
    const resp = await response.json()
    return resp.event
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw { message: "could not fetch events" }
    // return json({ message: "could not fetch events" }, { status:500})
  } else {
    const resp = await response.json()
    return resp.events
  }
}

export default EventDetailPage

export async function loader({ request, params }) {
  return {
    event: await loadEvent(params.eventId),
    events: loadEvents()
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
  })
  if (!response.ok) {
    throw new Error("Cannot Delete Event")
  }
  return redirect('/events')
}
