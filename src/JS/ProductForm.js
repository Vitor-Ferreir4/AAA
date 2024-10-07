import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/ProductForm.css';

const ProductForm = ({ fetchProducts }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/products', { name, price, description });
        fetchProducts();
        setName('');
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" required />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
            <button type="submit">Adicionar Produto</button>
        </form>
    );
};

export default ProductForm;
