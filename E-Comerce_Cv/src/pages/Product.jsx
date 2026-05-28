import { Footer } from "../components/Footer.jsx"
import { Header } from "../components/Header.jsx"
import { Link } from "react-router"
import { FiPlus, FiMinus, FiHeart  } from "react-icons/fi"
import { GoShieldCheck } from "react-icons/go"
import star from "/Img/star.svg"
import { useState } from "react"

export function Product(){
    const tallasDisponibles = [38, 39, 40, 41, 42, 43, 44]
    const [tallaSeleccionada, setTallaSeleccionada] = useState(null)

    return(
        <main className="min-h-screen bg-[#23272f] text-white">
            <Header />
            
            <section className="mt-5 max-w-7xl mx-auto flex flex-col gap-4 p-5">
                {/**--Path de páginas-- */}
                <nav className="flex gap-2">
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <h3>&gt;</h3>
                    <h3 className="font-bold">Patin freestyle</h3>
                </nav>
                
                {/**-- Seccion de img-detalles-cart -- */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/**--Imagen-- */}
                    <div className="w-full lg:basis-[35%] aspect-square bg-gray-400"></div>
                    {/**--Descripcion y detalles-- */}
                    <div className="w-full lg:basis-[40%] flex flex-col gap-5">
                        <h1 className="font-title text-6xl">Patin freestyle</h1>
                        <h2 className="font-body text-4xl">199'99€</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere architecto reiciendis id. 
                            Neque sed dicta dolorum soluta quae vero
                        </p>
                        <div className="font-body flex flex-col gap-5">
                            <div className="flex gap-3">
                                <div className="bg-amber-200 w-15 h-8"></div>
                                <div>
                                    <h2 className="font-bold top-0 left-0">Bota</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-amber-200 w-15 h-8"></div>
                                <div>
                                    <h2 className="font-bold">Ruedas</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-amber-200 w-15 h-8"></div>
                                <div>
                                    <h2 className="font-bold">Rodamientos</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-amber-200 w-15 h-8"></div>
                                <div>
                                    <h2 className="font-bold">Freno</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**--Cart de carrito y compra-- */}
                    <div className="bg-gray-700 w-full lg:basis-[25%] border rounded-sm p-4 font-body flex flex-col gap-5">
                        <div className="flex justify-between">
                            <h3>Talla</h3>
                            <h4>Guia de tallas</h4>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            {tallasDisponibles.map(talla => (
                                <button key={talla} 
                                        onClick={() => setTallaSeleccionada(talla)}
                                        className={`border rounded-md p-2 transition duration-300 cursor-pointer ${tallaSeleccionada === talla
                                            ? "bg-gray-900 text-white scale-105 shadow-md"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-black"
                                        }`}>
                                    {talla}
                                </button>
                            ))}
                        </div>
                        <div>
                            <h4>En stock - Recíbelo en 24/48h</h4>
                            <h4>Envio gratis en pedidos superiores a 59€</h4>
                        </div>
                        <div className="flex items-center gap-2 border w-30 h-12 justify-between">
                            <button className="cursor-pointer"><FiMinus className="justify-center"/></button>
                            <span>1</span>
                            <button className="cursor-pointer"><FiPlus /></button>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <button className="bg-green-600 rounded flex-1 h-12 cursor-pointer hover:bg-green-500 transition">AÑADIR AL CARRITO</button>
                            <button className="text-2xl border border-gray-400 h-12 p-2 rounded bg-gray-100 cursor-pointer"><FiHeart className="text-red-500" /></button>
                        </div>
                        <div className="bg-green-200 text-black rounded-sm p-2">
                            <div className="flex items-center gap-3">
                                <GoShieldCheck className="lg:text-5xl"/>
                                <div className="flex flex-col">
                                    <h4>Compra segura</h4>
                                    <h5 className="text-mist-800">30 dias para devoluciones. Garantía oficial</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/**--Seccion de sugerencias (otros productos)-- */}
                <div>
                    <h3>Combínalo con</h3>
                </div>
                {/**--Seccion de reseñas-- */}
                <div className="font-body">
                    <h3>Opiniones</h3>
                    <div className="flex gap-7">
                        <div className="flex flex-col bg-gray-400 w-40 items-center justify-center rounded gap-3 p-5 text-black">
                            <h2 className="text-5xl font-bold">4.6</h2>
                            <div className="flex">
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                            </div>
                            <h4>2343 opiniones</h4>
                        </div>
                        <div className="flex flex-col bg-gray-400 w-50 items-center justify-center rounded gap-3 p-5 text-black">
                            <h2 className="text-5xl">96%</h2>
                            <div className="flex">
                                <h3 className="font-bold">Recomiendan</h3>
                            </div>
                            <h4 className="text-sm">2343 recomendaciones</h4>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}