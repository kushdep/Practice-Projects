import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import Root from './pages/Root';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:pId', element: <ProductDetail /> }
    ]
  }
])

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
