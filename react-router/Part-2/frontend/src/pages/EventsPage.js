import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, defer, Await } from "react-router-dom"

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

function EventsPage() {
  const { events } = useLoaderData()

  return <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading......</p>}>
    <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>
  </Suspense>
}

export default EventsPage;


export async function loader() {
  return { events: loadEvents() }
}