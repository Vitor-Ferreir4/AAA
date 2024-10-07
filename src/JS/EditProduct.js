import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = ({ fetchProducts }) => {
  const {id} = useParams(); // Pega o ID do produto a ser editado
  const navigate = useNavigate(); // Para redirecionar após a edição

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Busca o produto pelo ID ao carregar a página
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/1`);
      const { nome_produto, preco, descricao } = response.data;
      setName(nome_produto);
      setPrice(preco);
      setDescription(descricao);
    };

    fetchProduct();
  }, [1]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/products/1`, { name, price, description });
    fetchProducts(); // Atualiza a lista de produtos
    navigate('/Lista'); // Redireciona para a página de lista de produtos
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Produto</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditProduct;
