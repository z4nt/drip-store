import React, { useState }from "react"
import {useEffect} from "react"
import "./ProductCard.css"
import placeholderImage from '../assets/placeholder.svg';

export default function ProductCard({name, image, price, priceDiscount, categoria}){
    // const [discountAvailable, setdiscountAvailable] = useState(false)

    // useEffect(() =>{
    //     if(priceDiscount != undefined && priceDiscount < price){
    //         setdiscountAvailable(true)
    //     }else{
    //         setdiscountAvailable(false)
    //     }[price, priceDiscount]
    // })
    
    return(
    <div className="caixa-produto">
        {image ? <div><img className="img" src={image} alt={name}/></div> : <div><img className="img" src={placeholderImage} alt={name}/></div> }
        <p className="categoria">{categoria}</p>
        <p className="nome-produto">{name}</p>
        { priceDiscount ?<> <p className="precoS"><span className="preco-riscado" >R${price}</span><span className="discounted-price"> R${priceDiscount}</span></p></> : 
        <p className="preco">R${price}</p>}
    </div>
)
}