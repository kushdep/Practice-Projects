import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage';
import EventPage,{loader as eventPageLoader} from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage from './pages/EventDetailPage';
import Root from './root-pages/Root';
import EventRootPage from './root-pages/EventRootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/events',
        element: <EventRootPage />,
        children: [
          { index:true, element: <EventPage />,loader: eventPageLoader},
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: ':eventId/edit', element: <HomePage /> }
        ]
      },
    ]
  },
])


function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
