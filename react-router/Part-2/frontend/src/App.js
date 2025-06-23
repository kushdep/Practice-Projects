import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage';
import EventPage, { loader as eventPageLoader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage';
import Root from './root-pages/Root';
import Error from './pages/Error';
import EventRootPage from './root-pages/EventRootLayout';
import EditEventPage from './pages/EditEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/events',
        element: <EventRootPage />,
        children: [
          { index: true, element: <EventPage />, loader: eventPageLoader },
          { path: 'new', element: <NewEventPage /> },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: 'edit', element: <EditEventPage /> }
            ]
          },
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
