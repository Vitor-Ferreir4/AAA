import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from './JS/ProductForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProduct from './JS/EditProduct';
import ProductList from './JS/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
    };

    return (
      <Router>
        <div>
            <Routes>
              <Route exact path='/' element={<ProductForm fetchProducts={fetchProducts} />} />
              <Route path='/Lista' element={<ProductList fetchProducts={fetchProducts} />} />
              <Route path='/edit/:id' element={<EditProduct />} /> {/* Nova rota para editar */}
            </Routes>
        </div>
      </Router>
    );
};

export default App;
