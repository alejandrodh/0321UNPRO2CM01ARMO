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
        console.log(req.file);
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
        } else if(req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            errors.message = "El archivo debe ser jpg o png";
            res.locals.errors = errors;
            return res.render('register')
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
                        avatar: req.file.filename 
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

    },
    edit: function(req, res){
        //mostrar el form de edicion.
        let userId = req.params.userId;

        //Evitar que el usuario cambie el id en la url
        if(userId != req.session.user.id){
            //Redireccionar a la ruta del usuario logueado
            return res.redirect(`/register/edit/${req.session.user.id}`)
        } else {
            //Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(userId)
                .then( function(user){
                    return res.render('userEdit', { userEdit:user})
                })
                .catch( e => {console.log(e)})
        }
    },
    update: function(req, res){
        //Vamoa a actualizar un usuario
        let user ={
            name: req.body.name,
            email: req.body.email,
            password: '',
            avatar: '',
        }

        //Tenemos que pensar como completar password y avatar.
        if(req.body.password == ''){
            user.password = req.session.user.password;
        } else {
            user.password = bcrypt.hashSync(req.body.password, 10);
        }
        if(req.file == undefined){
            user.avatar = req.session.user.avatar;
        } else {
            user.avatar = req.file.filename;
        }

        db.User.update(user, {
            where:{
                id: req.session.user.id
            }
        })
            .then(function(id){
                //Vemos... Actualizar los datos de session y redirecciona a la home.
                user.id = req.session.user.id;
                req.session.user = user;
                return res.redirect('/');
                
            })
            .catch( e => {console.log(e)})



    }
}

module.exports = registerController;