import { NavLink, Outlet } from "react-router-dom"
const DUMMY_EVENTS = [
    {id:'e1',EventTitle:'Event-1'},
    {id:'e2',EventTitle:'Event-2'},
    {id:'e3',EventTitle:'Event-3'},
    {id:'e4',EventTitle:'Event-4'},
    {id:'e5',EventTitle:'Event-5'}
]

function EventPage(){
    return <>
        {DUMMY_EVENTS.map((e)=><ul>
            <li><NavLink to={`${e.id}`}>{e.EventTitle}</NavLink></li>
        </ul>)}   
        <main>
            <Outlet/>
        </main> 
    </>
}

export default EventPage