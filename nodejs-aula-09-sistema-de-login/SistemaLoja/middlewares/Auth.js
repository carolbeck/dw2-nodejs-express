//MIDDLEWARE DE AUTENTCAÇÃO

function Auth(req,res, next){
    //verificar se existe uma sessão para o usuário
    if (req.session.usuario !=undefined) {
        //permite o prosseguimento
        next()
        //se não existir a sessão
    } else {
        res.render("login");
    }
}
export default Auth;