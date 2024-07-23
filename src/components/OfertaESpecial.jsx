import "./OfertaESpecial.css";
import tenisEspecial from "../assets/tenisEspecial.png";
import ellipse from "../assets/Ellipse.png";

export default function OfertaESpecial() {
    return (
        <div className="oferta-especial flex flex-col md:flex-row items-center md:items-start md:justify-between p-4 md:p-8 lg:p-12 bg-white shadow-lg rounded-lg">
            
            <div className="relative img-ofep w-full md:w-1/2 lg:w-[550px] h-full">
                <span className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[466px]">
                    <img src={ellipse} alt="Ellipse" />
                </span>
                <img src={tenisEspecial} alt="Imagem do Produto" className="relative w-full h-auto mt-16 top-10 z-10" />
            </div>

            <div className="text-ofep justify-center mt-6 md:mt-0 md:ml-8 lg:ml-12 w-full md:w-1/2 lg:w-2/3 text-left md:text-left">
                <h2 className="font-[12px] text-[#C92071] font-bold text-left">Oferta Especial</h2>
                <h1 className="font-[48px] text-2xl md:text-3xl lg:text-4xl font-bold text-[#474747] mt-2">Air Jordan edição de colecionador</h1>
                <p className="font-[16px] text-[#474747] text-base md:text-lg lg:text-xl mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                </p>
                <a href="#" className="ofep-bt inline-block mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Ver Oferta
                </a>
            </div>
        </div>
    );
}
