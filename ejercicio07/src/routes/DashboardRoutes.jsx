import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { Home } from "../page/Home"
import { ProductosConfig } from "../page/ProductosConfig"
const DashboardRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={ <App/> } /> */}
            <Route path="/" element={ <ProductosConfig/> } />
            <Route path="/home" element={ <Home/> } />
        </Routes>
    </BrowserRouter>
  )
}
export default DashboardRoutes