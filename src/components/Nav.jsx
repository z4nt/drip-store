import "../index.css";
import Logo from "../assets/logo.svg";
export default function Nav() {
  return (
    <nav className="flex flex-col" style={{ flexGrow: 2 }}>
      <div className="px-[200px] items-center py-6 flex justify-between">
        <div>
          <img src={Logo} alt="logo da digital college" />
        </div>

        <div class="w-72">
          <div class="relative h-10 w-full min-w-[200px] ">
            <input
              type="seach"
              placeholder="Pesquisar..."
              class="peer h-full w-full rounded-[7px] bg-gray-50 px-3 py-2"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <div>Cadastre-se</div>
          <button class="bg-[#C92071] hover:bg-[#971655] text-white font-bold py-2 px-8 rounded">
            Entrar
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="px-[200px] py-2 flex gap-10">
        <div className="hover:text-rose-600 font-bold hover:underline hover:cursor-pointer">
          Home
        </div>
        <div className="text-gray-600">Produtos</div>
        <div className="text-gray-600">Categorias</div>
        <div className="text-gray-600">Meus pedidos</div>
      </div>
    </nav>
  );
}
