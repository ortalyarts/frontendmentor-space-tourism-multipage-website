
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// import './App.css'
import Home from './pages/Home.jsx';
import RootLayout from './pages/RootLayout.jsx';
import Destinations, { loader as destinationsLoader } from './pages/Destinations.jsx';
import Crew from './pages/Crew.jsx';
import Technologies from './pages/Technologies.jsx';
import Destination from './pages/Destination.jsx';
import CrewSingle from './pages/CrewSingle.jsx';
import Technology from './pages/Technology.jsx';
import ErrorPage from './pages/Error.jsx';

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, 
        element: <Home /> 
      },
      { path: 'destinations', 
        element: <Destinations />,
        loader: destinationsLoader,
        children: [
          { path: ':destination', 
            element: <Destination />,
            loader: destinationsLoader,
          }
        ] 
      },
      { path: 'crew', 
        element: <Crew/>,
        loader: destinationsLoader,
        children: [
          { path: ':name', 
            element: <CrewSingle />,
            loader: destinationsLoader,
          }
        ]
      },
      { path: 'technology', 
        element: <Technologies />,
        loader: destinationsLoader,
        children: [
          { path: ':name', 
            element: <Technology />,
            loader: destinationsLoader,
          }
        ]
      },
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App
