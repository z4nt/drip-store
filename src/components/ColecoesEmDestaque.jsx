import React from 'react';
import './Colecoes.css';
import collection1 from '../assets/collection-1-camisa.png';
import collection2 from '../assets/collection-2-tenis.png';
import collection3 from '../assets/collection-3-fone.png';
import camisa from '../assets/camisaR.svg'
import calca from '../assets/calca.svg'
import calca2 from '../assets/calca2.svg'
import fone from '../assets/fone.svg'
import tenis from '../assets/tenisP.svg'




export default function ColecoesEmDestaque() {
    return (
        <div>
            <header className="text-left ml-24 mb-4 mt-5">
                <p className="text-[#474747] text-[24px] font-bold">Coleções em destaque</p>
            </header>

            <div className="flex gap-5 items-center justify-center mx-24">
                <div id='' className="relative bg-[#D8E3F2] w-[405px] h-[232px] rounded-md">
                <img className='relative rounded-md ml-36 left-7 h-[100%] ' src={collection1} alt="Imagem de uma camisa" />
                    <span className="absolute top-0 left-2 w-[80px] ml-6 desconto-allan bg-[#E7FF86] rounded-full font-[700] text-[#474747]">30% off</span>
                    <span className="left-8 top-9  desconto-allan font-[700] text-[24px] text-left text-[#1F1F1F] w-[200px] h-[100px] font-bold">Novo drop Supreme</span>
                    <button className="absolute bottom-0 mb-8 ml-6 h-12 w-[143px] font-[700] bg-white left-2 rounded text-[#C92071]">Comprar</button>
                </div>
                <div id='' className="relative bg-[#D8E3F2] w-[405px] h-[232px] rounded-md">
                <img className='relative rounded-md ml-44 h-[97%] mt-1 left-3 top-1' src={collection2} alt="Imagem de uma camisa" />
                    <span className="absolute top-0 left-2 w-[80px] ml-6 desconto-allan bg-[#E7FF86] rounded-full font-[700] text-[#474747]">30% off</span>
                    <span className="left-8 top-9  desconto-allan font-[700] text-[24px] text-left text-[#1F1F1F] w-[100px] h-[100px] font-bold">Coleção Adidas</span>
                    <button className="absolute bottom-0 mb-8 ml-6 h-12 w-[143px] font-[700] bg-white left-2 rounded text-[#C92071]">Comprar</button>
                </div>
                <div id='' className="relative bg-[#D8E3F2] w-[405px] h-[232px] rounded-md">
                <img className='relative rounded-md ml-48 h-[100%] left-1' src={collection3} alt="Imagem de uma camisa" />
                    <span className="absolute top-0 left-2 w-[80px] ml-6 desconto-allan bg-[#E7FF86] rounded-full font-[700] text-[#474747]">30% off</span>
                    <span className="left-8 top-9  desconto-allan font-[700] text-[24px] text-left text-[#1F1F1F] w-[200px] h-[100px] font-bold">Novo</span>
                    <span className="left-8 top-16  desconto-allan font-[700] text-[24px] text-left text-[#1F1F1F] w-[200px] h-[100px] font-bold">Beats Bass</span>
                    <button className="absolute bottom-0 mb-8 ml-6 h-12 w-[143px] font-[700] bg-white left-2 rounded text-[#C92071]">Comprar</button>
                </div>
            </div>

            <div className="meio">
                <p className="mt-16 mb-4 text-[#474747] text-[24px] font-bold">Coleções em destaque</p>
            </div>

            <div className='mb-32'>
                <figure className="flex justify-center items-center gap-8">
                    <div className="icones-direção bg-white rounded-full w-[104px] h-[104px] flex items-center justify-center">
                        <img src={camisa} alt="" />
                    </div>
                    <div className="icones-direção bg-white rounded-full w-[104px] h-[104px] flex items-center justify-center">
                        <img src={calca} alt="" />
                    </div>
                    <div className="icones-direção bg-white rounded-full w-[104px] h-[104px] flex items-center justify-center">
                        <img src={calca2} alt="" />
                    </div>
                    <div className="icones-direção bg-white rounded-full w-[104px] h-[104px] flex items-center justify-center">
                        <img src={fone} alt="" />
                    </div>
                    <div className="icones-direção bg-white rounded-full w-[104px] h-[104px] flex items-center justify-center">
                        <img src={tenis} alt="" />
                    </div>
                </figure>
            </div>
        </div>
    );
}
