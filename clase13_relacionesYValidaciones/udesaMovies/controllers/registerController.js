const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index: function(req, res){
        //Control de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            //Mostrar el formulario de registro
            return res.render('register');
        }
    },
    store: function(req, res){ 
        let errors = {}

        //chequear que email no esté vacío
        if(req.body.email == ""){
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        //Chequear que la contraseña no esté vacía    
        } else if(req.body.password == ""){
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register')
         //Chequear que repetir contraseña no esté vacío   
        } else if (req.body.retypePassword == ""){
            errors.message = "Retype password es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
            //Una vez que tenemos la información completa entonces podemos pasar a chequear con base de datos
        } else {
            //Buscamos un usaurio en base al email ingresado.
            users.findOne({
                where: [{email: req.body.email}]
            })
                .then(function(user){
                    //Si find encontró un usuario significa que está en uso ese email por lo que debemos avisarle al usuario que elija otro email
                    if(user != null){
                        errors.message = "El email ya está registrado por favor elija otro.";
                        res.locals.errors = errors;
                        return res.render('register');
                    } else {
                        // Si el email está libre recién ahora podemos guardar un usuario en la db
                        let user = {
                        name : req.body.name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10), 
                        }

                        users.create(user)
                            .then( user => {
                                return res.redirect('/login')
                            })
                            .catch(e => {console.log(e)});
                    }

                })
                .catch( error => { console.log(error) })

            }

    }
}

module.exports = registerController;