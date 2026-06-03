import { Routes, Route } from "react-router"
import { Home } from "./pages/Home.jsx"
import { Product } from "./pages/Product.jsx"
import { useState } from "react"
import { Header } from "./components/Header.jsx"

export function App(){
    const [cartItems, setCartItems] = useState([])

    function addToCart(product){
        setCartItems([...cartItems, product])
    }

    return(
        <div className="bg-[#23272f]">
            <Header cartItems={cartItems} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product addToCart={addToCart}/>} />
            </Routes>
        </div>
    )
}