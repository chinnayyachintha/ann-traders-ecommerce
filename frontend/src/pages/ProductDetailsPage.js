import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/products/${productId}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Error fetching product details:", error));
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetailsPage;
