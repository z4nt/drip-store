import React, { useState }from "react"
import {useEffect} from "react"
import "./ProductCard.css"

export default function ProductCard({name, image, price, priceDiscount}){
    const [discountAvailable, setdiscountAvailable] = useState(false)

    useEffect(() =>{
        if(priceDiscount != undefined && priceDiscount < price){
            setdiscountAvailable(true)
        }else{
            setdiscountAvailable(false)
        }[price, priceDiscount]
    })
    
    return(
    <div className="caixa-produto">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p className={discountAvailable ? 'discounted-price' : ''}>{ discountAvailable ?<> <p><span className="preco-riscado">{price}</span> {priceDiscount}</p></> : <p className="preco">{price}</p>}</p>
    </div>
)
}