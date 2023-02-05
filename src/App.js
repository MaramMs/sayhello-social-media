
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  {Home} from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

function App() {
  return (

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile  />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
  );
}

export default App;