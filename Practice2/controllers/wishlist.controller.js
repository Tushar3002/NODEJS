import { success } from "zod";
import * as WishListServices from "../services/wishlist.service.js";

export const addWishlist = async (req, res) => {
  try {
    const data = await WishListServices.addWishlist(
        req.user.id,
        req.body.productId
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getWishList = async (req, res) => {
  try {
    const data = await WishListServices.getWishList(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const removeWishList=async(req,res)=>{
    try {
        const data=await WishListServices.removeWish(
            req.user.id,
            req.params.productId
        )   
        res.status(200).json({success:true})    
    } catch (error) {
               res.status(500).json({error: error.message})
 
    }
}