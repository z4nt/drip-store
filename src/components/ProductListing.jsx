import React from "react";
import ProductCard from "./ProductCard";
import "./ProductListing.css"
import sapatoIMG from '../assets/sapato.png';

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
        <div className="lista-produto">
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
    )

}