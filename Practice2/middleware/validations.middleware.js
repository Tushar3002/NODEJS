export const validate=(schema)=>(req,res,next)=>{
    try {
        req.body=schema.parse(req.body)
        console.log(req.body);
        
        next()
    } catch (error) {
      return res.status(400).json({
        errors:error.message
      }) 
    }
}