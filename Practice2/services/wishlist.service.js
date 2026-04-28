import { Product, User, WishList } from "../models/index.js"


export const addWishlist=async(userId,productId)=>{
    return await WishList.create({
        userId,
        productId
    })
}

export const getWishList=async(userId)=>{
    return await User.findByPk(userId,{
        include:[
            {
                model:Product,
                as:"wishlist",
                attributes:["id","name","price","imageUrl"],
            }
        ]
    })
}

export const removeWish=async(userId,productId)=>{
    return await WishList.destroy({
        where:{
            userId,productId
        }
    })
}