import LogoFooter from "../assets/logo-footer.svg";
import LogoFacebook from "../assets/icone-facebook.svg";
import LogoInstagram from "../assets/icone-instagram.svg";
import LogoTwitter from "../assets/icone-twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-zinc-800">
      <div className="mx-auto w-full max-w-screen-xl p-7 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <ul>
              <li>
                <a href="#" className="flex items-center">
                  <img src={LogoFooter} className="h-8 me-3"
                    alt="logo da digital college" />
                </a>
              </li>
              <li className="text-left mb-7 mt-4 text-white w-full lg:w-[50%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  minima magni ipsa beatae laborum earum iusto, doloribus qui
                  itaque tempora animi! Architecto alias ipsa est, id qui eum
                  asperiores quisquam.
                </p>
              </li>
            </ul>
            <div className="flex flex-row gap-10">
              <div>
                <img src={LogoFacebook} alt="logo da facebook" />
              </div>
              <div>
                <img src={LogoInstagram} alt="logo da Instagram" />
              </div>
              <div>
                <img src={LogoTwitter} alt="logo da Twiiter" />
              </div>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="mr-24 text-left">
              <ul className="text-white-500 font-medium text-white">
                <li className="mb-3">
                  <p className="mb-3 mr-10 text-sm font-semibold text-white-900 text-white">
                    Informação
                  </p>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Sobre Drip Store
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Segurança
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Wishlist
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Trabalhe conosco
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Meus pedidos
                  </a>
                </li>
              </ul>
            </div>
            <div className=" mr-24 text-left">
              <h2 className="mb-3 text-sm font-semibold text-white  dark:text-white">
                Categorias
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-white">
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Camisetas
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Calças
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Bonés
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Headphones
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Tênis
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[220px] text-left">
              <h2 className="mb-3 mr-10 text-sm font-semibold text-white  dark:text-white">
                Contato
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                    60150-161
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    (85) 3051-3411
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm  sm:text-center text-white dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Digital College
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
