import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import New from './new.jsx';
import Faltu from './faltu.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New />
    <Faltu />
  </StrictMode>,
)
