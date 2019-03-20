//invoco express
const express = require("express");
//Router: para crear multuiples rutas y mantenerlas en archivos por separado
const router = express.Router();

/*rutas- routers*/
//descripcion: cada vez que un user entre a la direccion "/", se manejara con una funcion(pet, res) para responder con un archivo .html
router.get("/", (peticion, respuesta) => {
  //mostrar la variable title en pantalla con ejs
  respuesta.render("index.html", { title: "Tituloo de inicio"});
});

router.get("/contacto", (peticion, respuesta) => {
  respuesta.render("contacto.html", { title: "Titulo de contacto"});
});

module.exports = router;
