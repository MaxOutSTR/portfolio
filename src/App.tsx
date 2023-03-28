import './App.css'
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Main from './layouts/main/Main';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <h1>About</h1>
  },
  {
    path: '*',
    element: <h1>Route Not Found</h1>
  }
]);

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
