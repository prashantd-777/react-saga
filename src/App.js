import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from "./Header";
import MainContainer from "./pages/MainContainer";
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainContainer />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
