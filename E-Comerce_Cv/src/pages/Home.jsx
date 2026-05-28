import "../App.css"
import { Link } from "react-router"
import { ProductCardSkeleton } from "../components/ProductCardSkeleton.jsx"
import { CategoryGridSkeleton } from "../components/CategoryGridSkeleton.jsx"
import { Footer } from "../components/Footer.jsx"
import { Header } from "../components/Header.jsx"
import cartImg from "/Img/carritoImg.svg"
import star from "/Img/star.svg"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { HiOutlineX } from "react-icons/hi"
import { useState, useEffect } from "react"

export function Home () {
    const [accOpened, setAccOpened] = useState(false)
    const [cartOpened, setCartOpened] = useState(false)
    
    const [usrInput, setUsrInput] = useState()
    const [pswInput, setPswInput] = useState()
    const name = "Santiago"
    const email = "santiago123@gmail.com"
    const password = "123"
    const [users, setUsers] = useState({name:"Santiago"})
    const [heroImages, setHeroImages] = useState([])
    const [productsImages, setProductsImages] = useState([])
    const [helmetImages, setHelmetImages] = useState([])
    const [protectionsImages, setProtectionsImages] = useState([])
    const [wheelsImages, setWheelsImages] = useState([])
    const [homeData, setHomeData] = useState()
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentImage = heroImages[currentIndex]
    const [loading, setLoading] = useState(true)
    
    {/**`${import.meta.env.VITE_API_URL}/home-data` */}
    function startSesion (){
        if (usrInput == email && pswInput === password) {
            setNameUser(name)
            setAccOpened(false)
        }
    }

    useEffect(() => {
        async function loadHomeImages() {
            try {
              setLoading(true)

              const response = await fetch("/api/pexels")
              const data = await response.json()

              setHeroImages(data.heroImages || [])
              setHelmetImages(data.helmets || [])
              setProtectionsImages(data.protections || [])
              setWheelsImages(data.wheels || [])
              setProductsImages(data.products || [])
            } catch (error) {
              console.error("Error al cargar las imágenes: ", error)
            } finally {
              setLoading(false)
            }
        }
  
      loadHomeImages()
    }, [])

    // Carrousell automático de imágenes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
        }, 4000);

        return () => clearInterval(interval) // --> Limpieza del buffer
    }, [heroImages.length])
    return (
        <div className="min-h-screen bg-[#23272f] text-white">
            {/** -- HEADER --*/}
            <Header />

            <section>
                {/**Contenido del Hero */}
                <div className="overflow-hidden relative w-full h-75 md:h-[450px] xl:h-[600px]">
                    <FiChevronLeft id="leftArrow" className="absolute bg-gray-600 opacity-50 hover:opacity-100 z-30 top-1/2 -translate-y-1/2 left-5 text-6xl transition cursor-pointer"
                        onClick={() => setCurrentIndex((prevIndex) => prevIndex == 0? (heroImages.length - 1) : (prevIndex-1))}/>
                    <div style={{transform: `translateX(-${currentIndex * 100}%)` }} className="flex transition-transform duration-500 h-full">
                        {heroImages.map(image => (
                            <div key={image.id} className="w-full h-full shrink-0">
                                
                                <img src={image.src.large2x} alt={image.alt} className="w-full h-full object-cover mask-b-from-50%"/>
                                
                            </div>
                        ))}
                    </div>
                    <FiChevronRight id="rightArrow" className="absolute bg-gray-600 opacity-50 hover:opacity-100 z-30 top-1/2 -translate-y-1/2 right-5 text-6xl transition cursor-pointer focus:p-5"
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)}/>
                    
                </div>
                {/**Productos hero */}
                <div className="grid text-sm grid-cols-2 sm:text-base lg:grid-cols-4 2xl:grid-cols-5 w-full max-w-7xl mx-auto items-center justify-center gap-3 -mt-20 px-4">
                    {loading 
                        ? Array.from({ length: 8 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                            ))
                        : productsImages.slice(0, 8).map((imgProd) => (
                        <Link to="/Product">
                            <div key={imgProd.id} className="text-center sm:text-left bg-white text-black rounded-xl shadow-lg overflow-hidden hover:cursor-pointer hover:bg-amber-300 transition duration-400">
                                <div className="h-32 sm:h-48">
                                    <img src={imgProd.src.medium} alt={imgProd.alt} loading="lazy" className="w-full h-full object-cover"/>
                                </div>
                                <div className="p-5 flex flex-col gap-2">
                                    <h3 className="font-body text-xl font-semibold">Patín Artístico</h3>
                                    <p className="font-body text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <h2 className="font-body text-lg sm:text-2xl font-bold">89'99€</h2>
                                    <span className="flex flex-col sm:flex-row items-center">
                                        <span className="flex gap-1 font-body">
                                            <h3>
                                                <b>8/10 </b>
                                            </h3>
                                            <h3 className="hidden sm:block">·</h3>
                                        </span>
                                        <span className="flex">
                                            <img src={star} alt="star" className="w-5 h-full"/>
                                            <h3 className="font-body cursor-pointer hover:underline">1000 reseñas</h3>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/** --Prod mas vendidos-- */}
                <div className=" bg-gray-600 mt-10">
                    <div className="grid w-full max-w-7xl mx-auto p-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">
                            <h2 className="text-2xl sm:text-4xl font-title">Productos más vendidos</h2>
                            <h3 className="font-body underline cursor-pointer">Ver más</h3>
                        </div>
                        <div className="grid text-sm grid-cols-2 sm:text-base lg:grid-cols-4 gap-3">
                            {loading
                            ? Array.from({ length: 4 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                                ))
                            : productsImages.slice(8,12).map((imgProd) => (
                                <div key={imgProd.id} className="text-center sm:text-left bg-white rounded-xl overflow-hidden hover:cursor-pointer hover:bg-amber-300 transition duration-400">
                                    <div className="h-32 sm:h-48">
                                        <img src={imgProd.src.medium} alt={imgProd.alt} loading="lazy" className="w-full h-full object-cover"/> 
                                    </div>
                                    <div className="p-5 flex flex-col gap-2 text-black">
                                        <h3 className="font-body text-xl font-semibold">Patín Agresivo</h3>
                                        <p className="font-body text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <h2 className="font-body text-lg sm:text-2xl font-bold">89'99€</h2>
                                        <span className="flex flex-col sm:flex-row items-center">
                                            <span className="flex gap-1 font-body">
                                                <h3>
                                                    <b>8/10 </b>
                                                </h3>
                                                <h3 className="hidden sm:block">·</h3>
                                            </span>
                                            <span className="flex items-center">
                                                <img src={star} alt="star" className="w-5 h-full"/>
                                                <h3 className="font-body cursor-pointer hover:underline">1000 reseñas</h3>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/**Grid divs*/}
                <div className="w-full max-w-7xl mx-auto items-center justify-center pt-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                        {loading ? (
                            <>
                              <CategoryGridSkeleton />
                              <CategoryGridSkeleton />
                              <CategoryGridSkeleton />
                            </>
                        ) : (
                            <>
                                {/** Cascos */}
                                <div className="bg-white grid grid-cols-2 p-8 gap-3 w-full lg:w-1/3">
                                    {helmetImages.map(helmet => (
                                        <div key={helmet.id} className="bg-white overflow-hidden cursor-pointer ">
                                            <div key={helmet.id} className="h-32 sm:h-45">
                                                <img src={helmet.src.medium} loading="lazy" alt={helmet.alt} className="w-full h-full object-cover"/>
                                            </div>
                                            <span className="text-black font-body">Casco</span>
                                        </div>
                                    ))}
                                    <span className="text-blue-500 font-body font-semibold cursor-pointer w-fit hover:underline">Ver más</span>
                                </div>
                                {/** Protecciones */}
                                <div className="bg-white grid grid-cols-2 p-8 gap-3 w-full lg:w-1/3">
                                    {protectionsImages.map(protecciones => (
                                        <div key={protecciones.id} className="bg-white overflow-hidden cursor-pointer">
                                            <div key={protecciones.id} className="h-32 lg:h-45">
                                                <img src={protecciones.src.medium} loading="lazy" alt={protecciones.alt} className="w-full h-full object-cover"/>
                                            </div>
                                            <span className="text-black font-body">Protección</span>
                                        </div>
                                    ))}
                                    <span className="text-blue-500 font-body font-semibold cursor-pointer w-fit hover:underline">Ver más</span>
                                </div>
                                {/** Ruedas */}
                                <div className="bg-white grid grid-cols-2 p-8 gap-3 w-full lg:w-1/3">
                                    {wheelsImages.map(ruedas => (
                                        <div key={ruedas.id} className="bg-white overflow-hidden cursor-pointer">
                                            <div key={ruedas.id} className="h-32 sm:h-45">
                                                <img src={ruedas.src.medium} loading="lazy" alt={ruedas.alt} className="w-full h-full object-cover"/>
                                            </div>
                                            <span className="text-black font-body">Ruedas</span>
                                        </div>
                                    ))}
                                    <span className="text-blue-500 font-body font-semibold cursor-pointer w-fit hover:underline">Ver más</span>
                                </div>
                            </>
                        )}
                    </div> 
                </div>
                {/** --PRODS OFERTA-- */}
                <div className="grid w-full max-w-7xl mx-auto p-8">
                        <h2 className="grid text-4xl font-title">Productos en Oferta</h2>
                        <div className="grid text-sm grid-cols-2 lg:grid-cols-4 sm:text-base gap-3">
                            {loading
                                ? Array.from({ length: 4 }).map((_, index) => (
                                    <ProductCardSkeleton key={index} />
                                    ))
                                : productsImages.slice(12,16).map((imgProd) => (
                                <div key={imgProd.id} className="bg-white rounded-xl overflow-hidden hover:cursor-pointer border hover:bg-amber-300 transition duration-400 relative">
                                    <h3 className="bg-red-500 absolute font-bold font-body p-1 rounded-xl">-50%</h3>
                                    <div className="h-32 sm:h-48">
                                        <img src={imgProd.src.medium} loading="lazy" alt={imgProd.alt} className="w-full h-full object-cover"/> 
                                    </div>
                                    <div className="p-5 flex flex-col gap-2 text-black text-center sm:text-left">
                                        <h3 className="font-body text-xl font-semibold">Patín fitness</h3>
                                        <p className="font-body text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <span className="flex flex-col sm:flex-row items-center sm:gap-3">
                                            <h2 className="font-body text-lg sm:text-3xl font-bold">44'99€</h2>
                                            <h3 className="font-body text-sm sm:text-xl line-through text-gray-500">89'99€</h3>
                                        </span>
                                        <span className="flex flex-col sm:flex-row items-center">
                                            <span className="flex gap-1 font-body">
                                                <h3>
                                                    <b>8/10 </b>
                                                </h3>
                                                <h3 className="hidden sm:block">·</h3>
                                            </span>
                                            <span className="flex items-center">
                                                <img src={star} alt="star" className="w-5 h-full"/>
                                                <h3 className="font-body cursor-pointer hover:underline">1000 reseñas</h3>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
            {/**Footer section */}
            <Footer />
        </div>
    )
}