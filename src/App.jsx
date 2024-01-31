import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';
import { ModeProvider } from './modeContext';

const HeaderLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/products",
          element: <Products />
        }
      ]
    }
  ])
  return (
    <ModeProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </ModeProvider>
  )
}

export default App
