module.exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role };
};
  
module.exports.isAuth = (req, res, done) => {
    if(req.user){
        done();
    }  
    else{
        res.send(401);
    }
};
  
  