

import { where } from "sequelize";
import { Product } from "../models/Product.model.js";

//create

export const createProduct=async(req,res)=>{
    try {
        const product=await Product.create(req.body)
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

//get

export const getAllProduct=async(req,res)=>{
    try {
        const product=await Product.findAll()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getSingleProduct=async(req,res)=>{
    try {
        const product=await Product.findByPk(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//update

export const updateProduct=async(req,res)=>{
    try {
        const product=await Product.update(req.body,{
            where:{id:req.params.id}
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//delete

export const deleteProduct=async(req,res)=>{
    try {
        const product=await Product.destroy({ where:{id:req.params.id}})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}