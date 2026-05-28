import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { Product } from "./pages/Product"

export function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    )
}