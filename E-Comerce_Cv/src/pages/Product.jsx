import { Footer } from "../components/Footer.jsx"
import { Header } from "../components/Header.jsx"
import { Link, useLocation } from "react-router"
import star from "/Img/star.svg"
import { useState, useEffect } from "react"

{/**Icons */}
import { FiPlus, FiMinus, FiHeart  } from "react-icons/fi"
import { GiSteeltoeBoots, GiCartwheel  } from "react-icons/gi"
import { FaToolbox, FaTruck, FaCheckCircle, FaRegStar, FaCartPlus } from "react-icons/fa"
import { GoShieldCheck } from "react-icons/go"
import { BsSignStopFill } from "react-icons/bs"
import { FaRulerCombined } from "react-icons/fa6"



export function Product({ addToCart }){
    const location = useLocation()
    const product = location.state?.product

    const tallasDisponibles = [38, 39, 40, 41, 42, 43, 44]
    const [tallaSeleccionada, setTallaSeleccionada] = useState(null)
    const [counterProduct, setCounterProduct] = useState(1)
    const [combineProd, setCombineProd] = useState([])


    useEffect(() => {
            async function loadProductImages() {
                try {
    
                  const response = await fetch("/api/pexels")
                  const data = await response.json()
                  
                  setCombineProd(data.combine || [])
                  
                } catch (error) {
                  console.error("Error al cargar las imágenes: ", error)
                }
            }
      
          loadProductImages()
        }, [])

    function handleAddCart(){
        if (!tallaSeleccionada) {
            alert("Selecciona una talla")
            return
        }else{
            const productToCart = {
                ...product,
                quantity: counterProduct,
                size: tallaSeleccionada
            }
            addToCart(productToCart)
        }
    }

    if (!product) {
        return(
            <main className="min-h-screen bg-[#23272f] text-white mt-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold font-title">Producto no encontrado</h1>
                </div>
                <Link to="/" className="text-amber-300 underline flex justify-center" >
                    Volver al inicio
                </Link>
            </main>
        )
    }

    return(
        <main className="min-h-screen bg-[#23272f] text-white">
            <section className="mt-5 max-w-7xl mx-auto flex flex-col gap-4 p-5">
                {/**--Path de páginas-- */}
                <nav className="flex gap-2">
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <h3>&gt;</h3>
                    <h3 className="font-bold">{product.name}</h3>
                </nav>
                
                {/**-- Seccion de img-detalles-cart -- */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/**--Imagen-- */}
                    <div className="w-full lg:basis-[35%] aspect-square bg-gray-400 rounded overflow-hidden">
                        <img src={product.image} alt={product.alt} className="w-full h-full object-cover" />
                    </div>
                    {/**--Descripcion y detalles-- */}
                    <div className="w-full lg:basis-[40%] flex flex-col gap-5">
                        <h1 className="font-title text-6xl">{product.name}</h1>
                        <h2 className="font-body text-4xl">{product.price.toString().replace(/\./g, "'")}€</h2>
                        <p>{product.description}
                        </p>
                        <div className="font-body flex flex-col gap-5">
                            <div className="flex gap-3">
                                <div className="w-15 h-8">
                                    <GiSteeltoeBoots className="w-full h-full"/>
                                </div>
                                <div>
                                    <h2 className="font-bold top-0 left-0">Bota</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-15 h-8">
                                    <GiCartwheel className="w-full h-full"/>
                                </div>
                                <div>
                                    <h2 className="font-bold">Ruedas</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className=" w-15 h-8">
                                    <FaToolbox className="w-full h-full"/>
                                </div>
                                <div>
                                    <h2 className="font-bold">Rodamientos</h2>
                                    <p className="text-gray-400">Estructura rigida con ventilacion lateral para mayor transpirabilidad y soporte</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className=" w-15 h-8">
                                    <BsSignStopFill className="w-full h-full"/>
                                </div>
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
                            <h3 className="text-2xl font-title">TALLA</h3>
                            <div className="flex gap-2 items-center cursor-pointer hover:underline">
                                <h4>Guia de tallas</h4>
                                <FaRulerCombined />
                            </div>
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
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center">
                                <FaCheckCircle className="text-green-400 w-5 h-5"/>
                                <h4><span className="text-green-400">En stock</span> - Recíbelo en 24/48h</h4>
                            </div>
                            <div className="flex gap-2 inset-s-auto">
                                <FaTruck className="w-5 h-5"/>
                                <h4>Envio gratis en pedidos superiores a 59€</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-sm w-30 h-12 justify-between px-3 p-1">
                            <button className="flex cursor-pointer justify-center items-center active:scale-80 transition-transform shadow-sm text-gray-200"
                                    onClick={() => setCounterProduct(prevCounterProduct => Math.max(1, prevCounterProduct - 1))}><FiMinus /></button>
                            <span className="select-none">{counterProduct}</span>
                            <button className="flex cursor-pointer justify-center items-center transform active:scale-80 transition-transform shadow-sm text-gray-200"
                                    onClick={() => setCounterProduct(counterProduct + 1)}><FiPlus /></button>
                        </div>
                        <div className="flex gap-3 justify-between">
                            <button className="bg-green-600 rounded flex-1 h-12 cursor-pointer hover:bg-green-500 transition transform active:scale-95"
                                    onClick={handleAddCart}>
                                AÑADIR AL CARRITO
                            </button>
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
                <div className="flex flex-col gap-5 font-body">
                    <h3 className="font-title text-3xl">Combínalo con</h3>
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {combineProd.map(prod => (
                                <div key={prod.id} className="flex flex-col gap-5 border p-5 rounded-2xl">
                                    <div className="w-full flex justify-center">
                                        <div className="w-full aspect-square overflow-hidden rounded-xl">
                                            <img src={prod.src.medium} alt={prod.alt} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center gap-3">
                                        <h3>Lorem, ipsum</h3>
                                        <span className="bg-gray-600 text-amber-50 flex items-center p-2 rounded hover:bg-gray-500 hover:text-green-500 cursor-pointer transform transition active:scale-95">
                                          <FaCartPlus className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-semibold">59,99€</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/**--Seccion de reseñas-- */}
                <div className="font-body flex flex-col gap-2">
                    <h3 className="font-title text-3xl">Valoraciones y Reseñas</h3>
                    <div className="flex flex-col items-center gap-7 md:flex-row my-5">
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
                    {/**--Opiniones de clientes-- */}
                    <div className="flex flex-col my-5 gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-5">
                                <svg className="w-15 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" shapeRendering="auto" aria-hidden="true"><defs><g id="mood-superHappy-1537a4fc"><path d="M22.45 17.34q-9.46-.26-18.92.21S2.68 29.83 13.4 30.3c9.6.42 9.03-12.96 9.03-12.96" fill="white"/><path d="M22.45 16.34q-9.46-.26-18.92.21c-.57.03-.96.44-1 1-.3 4.37 1.29 9.41 5 11.96 2.88 1.97 7.2 2.5 10.35.87 2.7-1.39 4.18-4.28 4.9-7.1.5-1.9.76-3.97.68-5.93-.05-1.28-2.05-1.29-2 0 .14 3.56-.62 8.2-3.5 10.6-2.35 1.95-6.15 1.7-8.71.27-2.27-1.26-3.6-3.56-4.23-6.02-.4-1.5-.6-3.06-.5-4.64l-1 1q9.46-.45 18.93-.2c1.29.02 1.29-1.98 0-2z" fill="black"/></g><g id="hair-bangs-1537a4fc"><path d="m19.85 24.31 32.94-.95 1.16 32.12 13.57-.19s10.17-16.35-3.2-37.07C49.99-4 12.29 4.16 5.5 25.82c-6.1 19.5 1.94 30.04 1.94 30.04l13.76.19-1.36-31.75z" fill="#000000"/></g><clipPath id="clip-1537a4fc"><rect width="80" height="80" rx="0" ry="0"/></clipPath></defs><g clipPath="url(#clip-1537a4fc)"><rect width="80" height="80" fill="#619eff"/><g transform="translate(40, 40) scale(0.81) translate(-40, -40)"><path d="M19.07 30.47s1.57-20.23 21.59-20.23S62.3 30.55 62.3 30.55s9.43-.8 9.43 7.6c0 8.42-9.28 7.13-9.28 7.13S60.9 67.15 42.03 67.15c-21.11 0-23.4-20.8-23.4-20.8s-9 .72-9.93-6.25c-1.08-8.2 10.37-9.64 10.37-9.64" fill="#ffd6c0"/><path d="m64.3 39.49.46-.41.1-.09c.12-.1-.13.1-.02.02l.24-.17q.5-.35 1.06-.62l.26-.12.05-.02.05-.02.58-.21q.6-.18 1.2-.28c.52-.08.85-.76.7-1.23-.18-.56-.67-.8-1.23-.7a9.3 9.3 0 0 0-4.87 2.43c-.38.36-.4 1.06 0 1.4.4.36 1 .4 1.4 0zm-51.8-1.16.14.01c-.27-.02-.11-.01-.04 0l.3.05.52.14.28.09.12.05c.02 0 .22.09.06.02-.14-.1 0-.04.03-.03l.15.06.26.13.47.3.27.22q.47.38.83.83c.33.4 1.07.37 1.41 0 .4-.43.36-.98 0-1.4a7.3 7.3 0 0 0-4.84-2.53c-.52-.06-1.02.5-1 1 .03.59.44.94 1 1m18.3-1.9v4.54c0 .52.46 1.02 1 1s1-.44 1-1V36.4c0-.52-.46-1.02-1-1s-1 .44-1 1M49.2 36l-.15 4.81a1 1 0 0 0 1 1c.56-.02.98-.44 1-1l.15-4.8a1 1 0 0 0-1-1 1 1 0 0 0-1 1" fill="black"/><use transform="translate(27.82 26.75)" href="#mood-superHappy-1537a4fc"/><use transform="translate(3.78 2.95)" href="#hair-bangs-1537a4fc"/></g></g></svg>
                                <h3 className="font-semibold">Carla Sánchez</h3>
                            </div>
                            <div className="flex">
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque temporibus voluptas iste tenetur excepturi provident a, eos.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-5">
                                <svg className="w-15 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" shapeRendering="auto" aria-hidden="true"><defs><g id="mood-hopeful-a4a4cc0a"><path d="M7.88 15.65c-1.18 1.26-2.17 2.74-2.36 4.49a4.4 4.4 0 0 0 1.78 4.03c1.26.9 2.88.8 4.07-.13a5.5 5.5 0 0 0 1.87-3.88c.1-.97-1.46-1.38-1.86-.5-.75 1.63.16 3.26 1.34 4.42a3.9 3.9 0 0 0 4.13.98 4.6 4.6 0 0 0 2.93-3.17 6.6 6.6 0 0 0-.82-4.87c-.64-1.1-2.37-.1-1.73 1.01.92 1.6 1.18 4-.71 5-.68.37-1.48.38-2.1-.1-.5-.38-1.64-1.54-1.31-2.25l-1.86-.5c-.14 1.34-1.44 3.63-2.97 2.23-1.74-1.59-.22-4 1.03-5.33.9-.94-.5-2.36-1.4-1.4z" fill="black"/></g><g id="hair-spiky-a4a4cc0a"><path d="m17.55 30.23 2.52-10.73 8.65 2.8 1.51-4.54 9.33 4.35 2.12-4.6 6.96 5.1 5.55-2.33L55.41 31l7.74-8.28-3.9-2.32.83-7.38-3.27.21-1-6.96-4.1 2.53-3.84-5.19-3.64 2.1-9.1-4.3-1 3.6-7.18-1.5v3.8h-9.21l1.64 4.22-8.4 3.16 4.5 2.95-4.5 4.22z" fill="#1d5dff"/></g><clipPath id="clip-a4a4cc0a"><rect width="80" height="80" rx="0" ry="0"/></clipPath></defs><g clipPath="url(#clip-a4a4cc0a)"><rect width="80" height="80" fill="#29e051"/><g transform="translate(40, 40) scale(0.81) translate(-40, -40)"><path d="M19.07 30.47s1.57-20.23 21.59-20.23S62.3 30.55 62.3 30.55s9.43-.8 9.43 7.6c0 8.42-9.28 7.13-9.28 7.13S60.9 67.15 42.03 67.15c-21.11 0-23.4-20.8-23.4-20.8s-9 .72-9.93-6.25c-1.08-8.2 10.37-9.64 10.37-9.64" fill="#ffd6c0"/><path d="m64.3 39.49.46-.41.1-.09c.12-.1-.13.1-.02.02l.24-.17q.5-.35 1.06-.62l.26-.12.05-.02.05-.02.58-.21q.6-.18 1.2-.28c.52-.08.85-.76.7-1.23-.18-.56-.67-.8-1.23-.7a9.3 9.3 0 0 0-4.87 2.43c-.38.36-.4 1.06 0 1.4.4.36 1 .4 1.4 0zm-51.8-1.16.14.01c-.27-.02-.11-.01-.04 0l.3.05.52.14.28.09.12.05c.02 0 .22.09.06.02-.14-.1 0-.04.03-.03l.15.06.26.13.47.3.27.22q.47.38.83.83c.33.4 1.07.37 1.41 0 .4-.43.36-.98 0-1.4a7.3 7.3 0 0 0-4.84-2.53c-.52-.06-1.02.5-1 1 .03.59.44.94 1 1m18.3-1.9v4.54c0 .52.46 1.02 1 1s1-.44 1-1V36.4c0-.52-.46-1.02-1-1s-1 .44-1 1M49.2 36l-.15 4.81a1 1 0 0 0 1 1c.56-.02.98-.44 1-1l.15-4.8a1 1 0 0 0-1-1 1 1 0 0 0-1 1" fill="black"/><use transform="translate(27.82 26.75)" href="#mood-hopeful-a4a4cc0a"/><use transform="translate(3.78 2.95)" href="#hair-spiky-a4a4cc0a"/></g></g></svg>
                                <h3 className="font-semibold">Santiago Gutierrez</h3>
                            </div>
                            <div className="flex items-center">
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <FaRegStar className="ml-0.5"/>
                                <FaRegStar className="ml-0.5"/>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque temporibus voluptas iste tenetur excepturi provident a, eos.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-5">
                                <svg className="w-15 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" shapeRendering="auto" aria-hidden="true"><defs><g id="mood-confused-a4a4cc0a"><path d="M2.54 22.05c.6-.5 2.22-2.29 2.9-2.12.4.1 1.03 1.1 1.3 1.41l1.57 1.74c.48.53 1.2.28 1.57-.2.88-1.15 2.48-1.99 3.68-2.78l-1.21-.16c1.02 1.14 2.36 2.7 3.9 3.1 1.34.36 2.28-.87 3.12-1.7l.87-.86.58-.58q.1-.2.28.28c.72.5 1.33 1.41 1.92 2.04.9.94 2.3-.48 1.4-1.4l-1.91-2.05c-.44-.47-.9-.97-1.6-.99-.6-.02-1.1.34-1.5.72-.7.64-1.36 1.35-2.03 2.01-.05.08-.52.64-.66.65-.08 0-.24-.16-.33-.19-.42-.18-.8-.59-1.13-.9q-.78-.7-1.5-1.5c-.27-.3-.85-.4-1.2-.16-1.52 1-3.28 2.04-4.4 3.5l1.57-.2q-1.13-1.27-2.3-2.53c-.51-.57-1.04-1.17-1.84-1.29s-1.45.3-2.06.8l-2.41 2c-.98.81.44 2.22 1.42 1.4z" fill="black"/></g><g id="hair-spiky-a4a4cc0a"><path d="m17.55 30.23 2.52-10.73 8.65 2.8 1.51-4.54 9.33 4.35 2.12-4.6 6.96 5.1 5.55-2.33L55.41 31l7.74-8.28-3.9-2.32.83-7.38-3.27.21-1-6.96-4.1 2.53-3.84-5.19-3.64 2.1-9.1-4.3-1 3.6-7.18-1.5v3.8h-9.21l1.64 4.22-8.4 3.16 4.5 2.95-4.5 4.22z" fill="#fff500"/></g><clipPath id="clip-a4a4cc0a"><rect width="80" height="80" rx="0" ry="0"/></clipPath></defs><g clipPath="url(#clip-a4a4cc0a)"><rect width="80" height="80" fill="#b6e3f4"/><g transform="translate(40, 40) scale(0.81) translate(-40, -40)"><path d="M19.07 30.47s1.57-20.23 21.59-20.23S62.3 30.55 62.3 30.55s9.43-.8 9.43 7.6c0 8.42-9.28 7.13-9.28 7.13S60.9 67.15 42.03 67.15c-21.11 0-23.4-20.8-23.4-20.8s-9 .72-9.93-6.25c-1.08-8.2 10.37-9.64 10.37-9.64" fill="#c26450"/><path d="m64.3 39.49.46-.41.1-.09c.12-.1-.13.1-.02.02l.24-.17q.5-.35 1.06-.62l.26-.12.05-.02.05-.02.58-.21q.6-.18 1.2-.28c.52-.08.85-.76.7-1.23-.18-.56-.67-.8-1.23-.7a9.3 9.3 0 0 0-4.87 2.43c-.38.36-.4 1.06 0 1.4.4.36 1 .4 1.4 0zm-51.8-1.16.14.01c-.27-.02-.11-.01-.04 0l.3.05.52.14.28.09.12.05c.02 0 .22.09.06.02-.14-.1 0-.04.03-.03l.15.06.26.13.47.3.27.22q.47.38.83.83c.33.4 1.07.37 1.41 0 .4-.43.36-.98 0-1.4a7.3 7.3 0 0 0-4.84-2.53c-.52-.06-1.02.5-1 1 .03.59.44.94 1 1m18.3-1.9v4.54c0 .52.46 1.02 1 1s1-.44 1-1V36.4c0-.52-.46-1.02-1-1s-1 .44-1 1M49.2 36l-.15 4.81a1 1 0 0 0 1 1c.56-.02.98-.44 1-1l.15-4.8a1 1 0 0 0-1-1 1 1 0 0 0-1 1" fill="black"/><use transform="translate(27.82 26.75)" href="#mood-confused-a4a4cc0a"/><use transform="translate(3.78 2.95)" href="#hair-spiky-a4a4cc0a"/></g></g></svg>
                                <h3 className="font-semibold">Adrian Ballesteros</h3>
                            </div>
                            <div className="flex">
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                                <img src={star} alt="star" className="w-5 h-full"/>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque temporibus voluptas iste tenetur excepturi provident a, eos.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}