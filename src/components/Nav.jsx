
import '../index.css'



export default function Nav() {
    return (
        <nav className="flex flex-col border">
    <div className="px-[200px] items-center py-6 flex justify-between sm:p-0">
        <div className="">
            <img src="./images/logo.svg" alt="logo da digital college"/>
        </div>

        <form className="max-w-md mx-auto">
            <div className="relative">
              <div className="sm:mr-4 absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="sm:w-60 top-0 left-0 block w-[500px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar produto..." required />
            </div>
        </form>

        <div className="flex items-center justify-end gap-4">
            <div>
                Cadastre-se
            </div>
            <button class="bg-[#C92071] hover:bg-[#971655] text-white font-bold py-2 px-8 rounded">Entrar</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </div>
    </div>

    <div className="border px-[200px] py-2 flex gap-10">
        <div className="hover:text-rose-600 font-bold hover:underline hover:cursor-pointer">
            Home
        </div>
        <div className="hover:text-rose-600 hover:underline hover:cursor-pointer">
            Produtos
        </div>
        <div className="hover:text-rose-600 hover:underline hover:cursor-pointer">
            Categorias
        </div>
        <div className="hover:text-rose-600 hover:underline hover:cursor-pointer">
            Meus pedidos
        </div>
    </div>
</nav>
    )
}