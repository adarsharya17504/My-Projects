module.exports.setFlash = function(req,res,next){
    req.flash;
    res.locals.flash = {
        "success" : req.flash("success"), //to get the success key value
        "error" : req.flash("error") //to get the error key value
    }
}