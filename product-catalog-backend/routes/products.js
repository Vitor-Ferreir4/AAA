const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

// READ
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send();

    await product.update(req.body);
    res.json(product);
});

// DELETE
router.delete('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send();

    await product.destroy();
    res.status(204).send();
});

module.exports = router;
