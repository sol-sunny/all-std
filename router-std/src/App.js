import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Error from './pages/Error';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
    { index: true, element: <Home /> },   //index:true라는 뜻은 path: '/'가 투루이면 홈페이지를 보여주라는 뜻
    { path: '/videos', element: <Videos /> },
    { path: '/videos/:videoId', element: <VideoDetail /> }
    ],
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
