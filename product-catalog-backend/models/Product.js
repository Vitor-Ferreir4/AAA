const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false // Desabilita as colunas createdAt e updatedAt
});

module.exports = Product;
