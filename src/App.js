import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import TransferMoney from './Components/TransferMoney';
import Statement from './Components/Statement';

function App() {
  return (
    <div className="App " >
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/transfer' element={<TransferMoney />} />
          <Route path='/statement' element={<Statement />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
