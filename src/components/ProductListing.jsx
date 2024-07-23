import React from "react";
import ProductCard from "./ProductCard";
import "./ProductListing.css"
import sapatoIMG from '../assets/sapato.png';
import seta from '../assets/seta.svg'

export default function ProductListing() {
    const products = [
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200,
            priceDiscount: 100
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200
        },
        {
            name: "K-WISS V8 - Masculino",
            image: sapatoIMG,
            categoria: "Tênis",
            price: 200
        }
    ]

    return (
        <>

            <div className="mx-14" >
                <div className="flex justify-between mb-2 mt-6 ">
                    <p className="text-[24px] text-[#474747] font-[700]">Produtos em alta</p>
                    <div className="flex align-middle items-center"><a href="" className="link-sem"><p className=" flex px-3 text-[#C92071] whitespace-nowrap" >Ver todos</p></a> <a href=""> <img className="w" src={seta} alt="" /> </a></div>
                </div>
                <div className="lista-produto ">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            categoria={product.categoria}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                        />
                    ))}
                </div>
            </div>
        </>
    )

}