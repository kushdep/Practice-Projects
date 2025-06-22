import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Homepage';
import EventPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EventDetailPage from './pages/EventDetailPage';
import Root from './root-pages/Root';
import EventsNavigation from './components/EventsNavigation';
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
          { index:true, element: <EventPage /> },
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
