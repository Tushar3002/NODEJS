export const dynamicRoute=(req,res)=>{
    const username=req.params.username
    res.send(`Ohiyo ${username}`)
}

export const searchRoute=(req,res)=>{
    const data=req.query.page;
    res.send(`User Searched for Page Number = ${data}`)
}