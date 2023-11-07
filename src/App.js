import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LeftSide from './components/LeftSide';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='flex'>
          <LeftSide/>
          <RightPanel/>
        </div>
    </div>
  );
}

export default App;
