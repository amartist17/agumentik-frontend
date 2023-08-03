import './App.css';
import Navbar from './components/Navbar/Navbar';
import GenerateInvoice from './components/pages/GenerateInvoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/generate-invoice" element={<GenerateInvoice />} />
              
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
