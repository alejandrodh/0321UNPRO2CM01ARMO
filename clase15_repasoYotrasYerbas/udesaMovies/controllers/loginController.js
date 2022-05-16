const bcrypt = require('bcryptjs');
const db = require('../database/models');

const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        //Control de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
        //Mostramos el form de login
        return res.render('login');
        }
    },
    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( user => {
            let errors = {};
            //¿Está el email en la base de datos
            if(user == null){
                //crear un mensaje de error
                errors.message = "El email no existe"
                //Pasar el mensaje a la vista
                res.locals.errors = errors
                //renderizar la vista
                return res.redirect('login');
            } else if(bcrypt.compareSync(req.body.password, user.password) == false){
                //crear un mensaje de error
                errors.message = "La contraseña es incorrecta"
                //Pasar el mensaje a la vista
                res.locals.errors = errors
                //renderizar la vista
                return res.redirect('login');
            } else {
                req.session.user = user;
                console.log('en login controller');
                console.log(req.session.user);
                
                //Si tildó recordame => creamos la cookie.
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
                }
                return res.redirect('/');        
            }
        })
        .catch( e => {console.log(e)})           
    },
    logout: function(req,res){
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
         res.clearCookie('userId');
        
        //redireccionar a hone
        return res.redirect('/')
    }
    
}

module.exports = loginController;