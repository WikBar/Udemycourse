import express from "express";
import Product from "../models/Product.js";

const productRoutes=express.Router();

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({products,
            pagination: {},
        });
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}
productRoutes.route('/').get(getProducts);
export default productRoutes;

