import { Routes, Route } from "react-router"
import { Home } from "./pages/Home.jsx"
import { Product } from "./pages/Product.jsx"
import { useState } from "react"
import { Header } from "./components/Header.jsx"

export function App(){
    const [cartItems, setCartItems] = useState([])

    function addToCart(productToCart){
        setCartItems((prevCart) => {
            const productExists = prevCart.find((item) => {
                return item.id === productToCart.id && item.size === productToCart.size
            })

            if (productExists) {
                return prevCart.map((item) => {
                    if (item.id === productToCart.id && item.size === productToCart.size) {
                        return {
                            ...item,
                            quantity: item.quantity + productToCart.quantity
                        }
                    }
                    return item
                })
            }
            return [...prevCart, productToCart]
        })
    }

    function increaseQuantity(productId, productSize){
        setCartItems((prevCart) =>{
            return prevCart.map((item) => {
                if(item.id === productId && item.size === productSize){
                    return {...item,
                            quantity:item.quantity + 1
                    }
                }
                return item
            })
        })
    }

    function decreaseQuantity(productId, productSize){
        setCartItems((prevCart) => {
            return prevCart.map((item) => {
                if(item.id === productId && item.size === productSize){
                    return {...item,
                            quantity: Math.max(1,item.quantity - 1)
                    }
                }
                return item
            })
        })
    }

    function removeFromCart(productId, productSize){
        setCartItems((prevCart) => {
            return prevCart.filter((item) =>{
                return !(item.id === productId && item.size === productSize)
            })
        })
    }

    return(
        <div className="bg-[#23272f]">
            <Header cartItems={cartItems}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product addToCart={addToCart}/>} />
            </Routes>
        </div>
    )
}