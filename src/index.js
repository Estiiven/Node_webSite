// se ejecuta en consola
console.log("test mesaggee");

const express = require("express"); 
const app = express();
//modulo de Node que recoconoce directorios para linux, windws o mac
const path = require("path");//path trayectoria

/*configuraciones - Settings*/
//variable creada para alojar el puerto y ser accesida de manera practica
app.set("puerto", 8989);
//se configura la carpeta vistas y se le da la direccion
app.set("views", path.join(__dirname, "vistas"));
//para usar la extension html preprocesada por ejs
app.engine("html", require("ejs").renderFile);
//express esta integrado con ejs (moros de plantilla), por eso no se necesita importarlo
app.set("view engine", "ejs");

/*middlewares de express, validar autorozaciones, preprocesar datos mediate funciones*/

/*rutas- routers*/
//descripcion: cada vez que un user entre a la direccion "/", se manejara con una funcion(pet, res) para responder con un archivo .html
/*app.get("/", (peticion, respuesta) => {
  //mostrar la variable title en pantalla con ejs
  respuesta.render("index", { title: "primer sitio web"});
})*/ //nota: se tarslado a rutas.index.js

//se invova el archivo rutas.js- separado en otro archivo y carpeta para el orden
app.use(require("./rutas/rutas"));

/*static files- archivos estaticos*/
app.use(express.static(path.join(__dirname, "public")));

/*se pone el servidora escuchar, se muestra en consola*/
app.listen(app.get("puerto"),() => {
  console.log("servidor en puerto", app.get("puerto"));
});
