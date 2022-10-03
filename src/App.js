import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:title' element={<Blogs></Blogs>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
