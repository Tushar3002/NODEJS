import { Router } from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import { addWishlist, getWishList, removeWishList } from "../controllers/wishlist.controller.js";


const wishRouter=Router()


wishRouter.post('/',verifyToken,addWishlist)

wishRouter.get('/',verifyToken,getWishList)

wishRouter.delete('/:productId',verifyToken,removeWishList)

export default wishRouter