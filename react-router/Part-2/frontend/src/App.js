import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage';
import EventPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage from './pages/EventDetailPage';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    children:[
      { path: '/', element: <HomePage /> },
      { path: '/events', element: <EventPage /> },
      { path: '/events/new', element: <NewEventPage /> },
      { path: '/events/:eventId', element: <EventDetailPage /> },
      { path: '/events/:eventId/edit', element: <HomePage /> }
    ]
  },
])


function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
