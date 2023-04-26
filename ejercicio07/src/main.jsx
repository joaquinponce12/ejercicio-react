import React from 'react'
import ReactDOM from 'react-dom/client'
import DashboardRoutes from './routes/DashboardRoutes'
import App from './App'


// --- BOOTSTRAP ---
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardRoutes/>
  </React.StrictMode>,
)
