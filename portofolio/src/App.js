import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Components/pages';
import Cal from './Components/kalkulator/kalkulator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/kalkulator/" element={<Cal />} />
      </Routes>
    </Router>
  );
}

export default App;
