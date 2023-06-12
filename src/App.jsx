import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './routing/router';

const App = () => <RouterProvider router={routing} />;

export default App;
