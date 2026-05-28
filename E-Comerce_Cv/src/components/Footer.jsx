import { FiInstagram } from "react-icons/fi"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoIosArrowRoundUp } from "react-icons/io"

export function Footer(){
    return(
        <footer className="bg-[#17191a] font-body mt-10">
                <div className="w-full max-w-7xl mx-auto items-center py-8">
                    <div id="footerSuperior" className="flex flex-col gap-8 lg:flex-row mt-5 justify-between items-center">
                        <div className="flex flex-col gap-5 max-w-80 text-center lg:text-left">
                            <a href="#logoHome" className="text-4xl font-title hover:text-yellow-500 transition duration-500 lg:w-fit rounded">Prime Roller Skates</a>
                            <h5 className="text-gray-400"><i>La tienda que necesitas para comprar lo que desees, para rodar a gusto y seguro</i></h5>
                        </div>
                        <nav className="flex items-center gap-4">
                            <a href="#logoHome" className="hover:text-gray-400 transition">Inicio</a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="hover:text-gray-400 transition">Servicios</a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="hover:text-gray-400 transition">Sobre mi</a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="hover:text-gray-400 transition">Contacto</a>
                        </nav>
                        <div className="flex gap-7">
                            <a href="https://www.instagram.com/e_nathan7" className="text-2xl hover:text-orange-400 transition"><FiInstagram/></a>
                            <a href="https://www.linkedin.com/in/emilio-haro-aa76bb175/" className="text-2xl hover:text-blue-400 transition"><FaLinkedin /></a>
                            <a href="https://github.com/emilio-devx" className="text-2xl hover:text-purple-400 transition"><FaGithub /></a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 my-10">
                        <div className="flex-1 h-px bg-white opacity-40"></div>
                    </div>
                    <div id="footerInferior" className="flex mt-5 justify-between">
                        <div className="text-gray-400 flex flex-col gap-3">
                            <h5 className="hover:underline transition cursor-pointer w-fit">Condiciones de Uso y Venta</h5>
                            <h5 className="hover:underline transition cursor-pointer w-fit">Aviso de privacidad</h5>
                            <h5 className="hover:underline transition cursor-pointer w-fit">Área legal</h5>
                            <h5 className="hover:underline transition cursor-pointer w-fit">Cookies</h5>
                        </div>
                        <div>
                            <a href="#logoHome" className="transition duration-300 flex gap-2 text-gray-400 items-center hover:text-white"><IoIosArrowRoundUp className="text-3xl"/>Volver Arriba</a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}