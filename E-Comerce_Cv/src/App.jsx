import "./App.css"
import logo from "/Img/LogoE-comerce.png"
import { FiSearch, FiMenu } from "react-icons/fi"

export function App () {
    return (
        <div className="min-h-screen bg-gray-700 text-white">
            <header className="">
                <div className="flex items-center justify-center gap-6">
                    <a href="#">
                        <img src={logo} alt="logo_EComerce" className="w-15"/>
                    </a>
                    <div><FiMenu className=""/><h3>Todas las categorías</h3></div>
                    <div className="relative">
                        <input type="text" className="border rounded pl-8 flex-1" placeholder="Buscar" name="search"/>
                        <FiSearch className="absolute top-1/2 left-2 -translate-y-1/2"/>
                    </div>
                    
                    <span>Mi cuenta</span>
                    <span>Mi cesta</span>
                    </div>
            </header>
            <section>
                cuerpo section
            </section>
            <footer>
                pie de página
            </footer>
        </div>
    )
}