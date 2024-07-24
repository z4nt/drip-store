import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import tenis from '../assets/tenis.svg';
import bolinhas from '../assets/bolinhas.svg';
import { Navigation, Pagination } from 'swiper/modules';

function Carousel() {
  return (

    <section class="items-center h-full lg:h-[550px]">
      <div class="w-full relative">

        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">

          <SwiperSlide>
            <section
              class="px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] flex flex-col-reverse lg:flex-row items-center bg-[#F5F5F5] gap-4 lg:gap-[20px] h-full lg:h-[550px] relative">
              <div
                class="flex flex-col gap-2 py-4 items-center text-center lg:text-left lg:items-start w-full lg:w-[500px]">
                <p class="text-xl text-[#C92071] font-bold">
                  Melhores ofertas personalizadas
                </p>
                <p class="text-5xl text-[#1F1F1F] font-bold">
                  Queima de<br />estoque Nike 🔥
                </p>
                <p>
                  Consequat culpa exercitation mollit nisi
                  excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <button
                  class="bg-[#C92071] text-white font-bold py-2 px-4 rounded hover:bg-[#C92071] mt-3 pt-2 pb-3 w-[200px]">
                  Ver Ofertas
                </button>
              </div>
              <div class="md:ml-auto">
                <img
                  class="w-full h-auto xl:w-[680px] xl:h-[460px]"
                  src={tenis}
                  alt="Imagem" />
              </div>
              <img
                class="absolute right-10 top-5"
                src={bolinhas}
                alt="bolinha" />
            </section>

          </SwiperSlide>
          <SwiperSlide>
            <section
              class="px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] flex flex-col-reverse lg:flex-row items-center bg-[#F5F5F5] gap-4 lg:gap-[20px] h-full lg:h-[550px]">
              <div
                class="flex flex-col gap-2 py-4 items-center text-center lg:text-left lg:items-start w-full lg:w-[500px] ">
                <p class="text-xl text-[#C92071] font-bold">
                  Melhores ofertas personalizadas
                </p>
                <p class="text-5xl text-[#1F1F1F] font-bold">
                  Queima de<br />estoque Nike 🔥
                </p>
                <p>
                  Consequat culpa exercitation mollit nisi
                  excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <button
                  class="bg-[#C92071] text-white font-bold py-2 px-4 rounded hover:bg-[#C92071] mt-3 pt-2 pb-3 w-[200px]">
                  Ver Ofertas
                </button>
              </div>
              <div class="md:ml-auto">
                <img
                  class="w-full h-auto xl:w-[680px] xl:h-[460px]"
                  src={tenis}
                  alt="Imagem" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              class="px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] flex flex-col-reverse lg:flex-row items-center bg-[#F5F5F5] gap-4 lg:gap-[20px] h-full lg:h-[550px]">
              <div
                class="flex flex-col gap-2 py-4 items-center text-center lg:text-left lg:items-start w-full lg:w-[500px]">
                <p class="text-xl text-[#C92071] font-bold">
                  Melhores ofertas personalizadas
                </p>
                <p class="text-5xl text-[#1F1F1F] font-bold">
                  Queima de<br />estoque Nike 🔥
                </p>
                <p>
                  Consequat culpa exercitation mollit nisi
                  excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <button
                  class="bg-[#C92071] text-white font-bold py-2 px-4 rounded hover:bg-[#C92071] mt-3 pt-2 pb-3 w-[200px]">
                  Ver Ofertas
                </button>
              </div>
              <div class="md:ml-auto">
                <img
                  class="w-full h-auto xl:w-[680px] xl:h-[460px]"
                  src={tenis}
                  alt="Imagem" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              class="px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] flex flex-col-reverse lg:flex-row items-center bg-[#F5F5F5] gap-4 lg:gap-[20px] h-full lg:h-[550px]">
              <div
                class="flex flex-col gap-2 py-4 items-center text-center lg:text-left lg:items-start w-full lg:w-[500px] ">
                <p class="text-xl text-[#C92071] font-bold">
                  Melhores ofertas personalizadas
                </p>
                <p class="text-5xl text-[#1F1F1F] font-bold">
                  Queima de<br />estoque Nike 🔥
                </p>
                <p>
                  Consequat culpa exercitation mollit nisi
                  excepteur do <br />
                  do tempor laboris eiusmod irure consectetur.
                </p>
                <button
                  class="bg-[#C92071] text-white font-bold py-2 px-4 rounded hover:bg-[#C92071] mt-3 pt-2 pb-3 w-[200px]">
                  Ver Ofertas
                </button>
              </div>
              <div class="md:ml-auto">
                <img
                  class="w-full h-auto xl:w-[680px] xl:h-[460px]"
                  src={tenis}
                  alt="Imagem" />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
}

export default Carousel;
