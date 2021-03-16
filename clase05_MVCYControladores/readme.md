## Roadmap de clase 05

1. Repaso de NPM y Módulos: ejercicios "Autos".  
1.1 Node: un entorno de ejecución compuesto por el motro v8 de chrome y módulos: nativos, de terceros, ppios. Salvo los módulos ppios los demás estan gestionados por NPM.  
1.2 Creamos proyecto en NODE y creamos el módulo autos.

2. Repaso de express y rutas:  
2.1 Para que necesitamos express.  
2.2 ¿Qué es express-generator?  
2.3 ¿Qué es nodemon y para que lo necesitamos?  
2.4 Rutas: es lo primero que necesitamos definir para nuestra web.   
2.5 Llevemos el ejercio "Autos" a un esquema con rutas (estáticas y parametrizadas).  
3. Agregamos Controladores a nuestro sistema. Modifiquemos el puntos 2: App -> ruteador -> contolador -> navegador/ vista.  

4. Tema del día: MVC (Teoría)
5. Tema del día: Controladores
  
## Notas paso a paso 
`(by @maca)`  

Como crear una carpeta para correr mis proyectos con express y npm . 
1. express --view=ejs miCarpeta  // crea miCarpeta
2. npm install // instalo las dependencias dentro de miCarpeta - para verificar que estoy parado aca, uso ls . Para moverme dentro de otra carpeta uso cd. Para volver para atras una carpeta uso cd ..
3. npm start   // corro el proyecto


### ROUTING
1. dentro de App.js voy a tener   
    `app.use('/products', productsRouter) `  
donde `productsRouter` es:  
    `let productsRouter = require('./routes/products');`

2. dentro de miCarpeta > routes > products (o el archivo de ruta que necesite) voy a tener la logica del ruteo

``` 
const expess = require('express');  
const router = express.Router();  // tener en cuenta que la variable va en minuscula y la del método en Mayuscula. 

router.get('/', function(req, res){
    return res.send("estas en la pagina de productos...")
})
```

3. NUNCA olvidar de exportar el módulo!!  
    `module.exports = router;`

4. Una vez que hago estos cambios en mis archivos, si NO dejo de correr npm start entonces no va a cargar los cambios de ruteo que hice  
    - entonces con ctrl + C corto esta ejecucion
    - vuelvo a iniciarlo con npm start y listo!

AHORA USAMOS NODEMON para no tener que cortar y volver a correr la ejecucion!!
Siempre chequear que estoy parado dentro de la carpeta de mi proyecto, sino no va a correr la ejecución  
    - ahora en vez de hacer `npm start`  
    - ahora ponemos en terminal `nodemon` y listo!

5. Otro ejemplo de ruteo - puedo tener varias req de rutas en un mismo archivo
```
// con esto, por ejemplo si estoy en products, estoy diciendo que la ruta es /productos/marca   

router.get('/marca', function(req, res){  
    return res.send('Estas viendo todas las marcas de los productos')
})
```
6. Rutas parametrizadas
El parámetro esta en la URL (en este caso, nombre es el parámetro) y eso lo puedo ver usando el req, es decir, request.
```
router.get('/marca/:nombreParametro, function(req, res){
    return res.send(`estas viendo los productos de la marca ${req.params.nombreParametro}`)
})
```
--> con `req.params.nombreParametro` trae la ruta de `/marca/nombreParametro`

7. routing con parámetro optativo - para que no rompa la ruta. no muy usual
```
router.get('/marca/:parametroOptativo?, function(req, res){
    return res.send(`estas viendo los productos de la marca ${req.params.parametroOptativo}`)
})
```

RECUERDEN que la funcion
```
 function(req, res){
    //siempre RETORNA algo, entonces    
    return res.send('algo')
}
```

### CONTROLADOR
logica del proceso lo manejo con los controladores.
> en miCarpeta creo una carpeta que se llame Controllers
> en controlllers creo un archivo recursoController.js (para el usuario voy a crear usuarioController, para los productos - productController .. etc)   
> Recursos: los sustantivos (ó ENTIDADES) de mi sistema: usuario, login, registro, productos... etc 

Todo lo que vinimos haciendo hasta ahora de 
```
function(req, res){
    return res.send('algo')
}
```
ahora lo vamos a poner en mi controlador. Los controladores son objetos literales.  
Entonces lo que tenia de: 
```
router.get('/marca/:nombreParametro, function(req, res){
    return res.send(`estas viendo los productos de la marca ${req.params.nombreParametro}`)
})
``` 
Ahora en recursoController tengo: 
```
const autos = require('../autos/index') //para traer mis datos, sino no va a funcionar
//todo los métodos en autos de "porColor, porMarca" lospuedo borrar porque ahora queda toda esa lógica en el controlador

const recursoController = {
    autosPorMarca: function (req, res){
        return res.send(`estas viendo los productos de la marca ${req.params.nombreParametro}`)
    }, 
    masMetodos: ...etc
}
```
En el ruteador tengo  
```
router.get('/marca/:nombreParametro', recursoController.autosPorMarca)
```
// no pongo `.autosPorMarca()` (con los paréntesis al final) porque con esto fuerzo a que el método se ejecute si o si cuando js llega a ESA linea, y yo quiero que lo ejecute como `callback` sólo cuando el sistema lo necesite. 


    Conclusion 
    app -> ruteador -> controlador -> devuelve algo en vista
    Cada ruta tiene un ruteador y un controlador porque responde a un Recurso.
