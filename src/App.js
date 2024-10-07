import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from './JS/ProductForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProduct from './JS/EditProduct';
import ProductList from './JS/ProductList';
import Nav from "./JS/Nav.js";
const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
    };

    return (
      <Router>
        <div>
          <Nav />
            <Routes>
              <Route exact path='/' element={<ProductForm fetchProducts={fetchProducts} />} />
              <Route path='/ProductList' element={<ProductList fetchProducts={fetchProducts} />} />
              <Route path='/EditProduct/:id' element={<EditProduct />} /> {/* Nova rota para editar */}
            </Routes>
        </div>
      </Router>
    );
};

export default App;
