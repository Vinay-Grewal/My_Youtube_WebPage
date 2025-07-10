import { Provider } from 'react-redux';
import './App.css';

import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ResultsPage from './components/ResultsPage';
import Home from './components/Home';

const appRouter=createBrowserRouter([{
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>

      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"results",
        element:<ResultsPage/>
      },
    ]
}])
const App=()=> {
  
  return (
    <Provider store={store}>
    <div>
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
