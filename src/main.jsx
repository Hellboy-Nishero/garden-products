import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'



createRoot(document.getElementById('root')).render(    
    <App />
)
