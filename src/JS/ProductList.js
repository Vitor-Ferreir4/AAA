import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/ProductList.css';

const ProductList = ({ fetchProducts }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        };

        loadProducts();
    }, []); // Chama apenas uma vez ao montar o componente

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    return (
        <ul>
            {products.length === 0 ? (
                <li>Nenhum produto encontrado.</li>
            ) : (
                products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <Link to={`/edit/${product.id}`}> Editar</Link>
                        <button onClick={() => deleteProduct(product.id)}>Deletar</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default ProductList;
