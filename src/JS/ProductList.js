import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/ProductList.css';

const ProductList = ({ fetchProducts }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                    <Link to={`/edit/${product.id}`}> Editar</Link> {/* Link para editar */}
                    <button onClick={() => deleteProduct(product.id)}>Deletar</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
