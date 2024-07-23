import React, { useState } from "react"
import { useEffect } from "react"
import "./ProductCard.css"
import placeholderImage from '../assets/placeholder.svg';

export default function ProductCard({ name, image, price, priceDiscount, categoria }) {
    return (
        <div className="caixa-produto">
            {image ? (<div className="relative"><img className="img" src={image} alt={name} />
             { priceDiscount && <span className="absolute top-2 left-3 bg-[#E7FF86] rounded-full px-3 font-[700] text-[#474747]">30% OFF</span>}
            </div>) :
                (<div><img className="img" src={placeholderImage} alt={name} /></div>)}
            <p className="categoria">{categoria}</p>
            <p className="nome-produto">{name}</p>
            {priceDiscount ? <> <p className="precoS"><span className="preco-riscado font-[100]" >${price}</span><span className="discounted-price"> ${priceDiscount}</span></p></> :
                <p className="preco">${price}</p>}
        </div>
    )
}