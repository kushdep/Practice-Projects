import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

function EventRootPage(){
    return <>
        <EventsNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
}

export default EventRootPage

