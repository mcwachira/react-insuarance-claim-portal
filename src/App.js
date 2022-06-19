
import './App.css';
import { Routes, Route } from 'react-router-dom';
import InitialPage from './components/InitialPage/InitialPage.component';
import Disclaimer from './components/Disclaimer/Disclaimer.component';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<InitialPage />} />

        <Route path='disclaimer' element={<Disclaimer />} />

        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
