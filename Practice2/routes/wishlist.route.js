import { Router } from "express";
import { isUser, verifyToken } from "../middleware/auth.middleware.js";
import { addWishlist, getWishList, removeWishList } from "../controllers/wishlist.controller.js";


const wishRouter=Router()


wishRouter.post('/',verifyToken,isUser, addWishlist)

wishRouter.get('/',verifyToken,isUser,getWishList)

wishRouter.delete('/:productId',verifyToken,isUser,removeWishList)

export default wishRouter