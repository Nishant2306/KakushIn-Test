// import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Test from './components/Test.js'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/Test" element={<Test />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
