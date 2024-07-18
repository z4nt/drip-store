import React from "react";
import ProductCard from "./ProductCard";
import "./ProductListing.css"

export default function ProductListing() {
    const products = [
        {
            name: "Nome do produto 1",
            image: "https://picsum.photos/292/321",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "Nome do produto 2",
            image: "https://picsum.photos/292/321",
            price: 49.9,
            priceDiscount: 39.9
        },
        {
            name: "Nome do produto 3",
            image: "https://picsum.photos/292/321",
            price: 100
        },
        {
            name: "Nome do produto 4",
            image: "https://picsum.photos/292/321",
            price: 250
        },
        {
            name: "Nome do produto 5",
            image: "https://picsum.photos/292/321",
            price: 300
        },
        {
            name: "Nome do produto 6",
            image: "https://picsum.photos/292/321",
            price: 150
        },
        {
            name: "Nome do produto 7",
            image: "https://picsum.photos/292/321",
            price: 450
        },
        {
            name: "Nome do produto 8",
            image: "https://picsum.photos/292/321",
            price: 120
        }
    ]

    return (
        <div className="lista-produto">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />
            ))}
        </div>
    )

}