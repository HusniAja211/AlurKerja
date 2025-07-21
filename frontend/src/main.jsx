// mengimpor componen yang diperlukan
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// memulai aplikasi React
ReactDOM.createRoot(document.getElementById('root')).render(
  // membungkus aplikasi dengan BrowserRouter untuk mendukung routing
  <BrowserRouter>
    {/* Komponen yang berisi navigasi dan struktur halaman */}
    <App />
  </BrowserRouter>
);
