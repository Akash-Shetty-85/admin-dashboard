
import './App.css';
import Footer from './Components/Footer';
import Table from './Components/Table';
import data from './bd.json'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/admin/dashboard' element={<Table data={data}/>}></Route>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
