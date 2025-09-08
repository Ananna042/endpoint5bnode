import express from 'express'
const app = express()
const PORT = 3000
app.use(express.json());

//GET
app.get('/', (req, res) => {
    res.send("este es el 1er endpoint hecho x express");
});

//endpoint con parametro
app.get('/api/user/:id', (req, res) => {
    //destructuracion, mas q todo en obj, como acceder al obj, puede ser con punto o declarar la variable y cierrp llaves

    const obj = {
        name: 'test',
        lasname: 'asd',
        test: {
            name: 'ana'
        }
    }
})

//otro ej
app.get('/api/user/:id', (req, res) => {
    //destrcturacion
    const {id} = req.params;
    if (typeof id == "string"){
        const indInt = parseInt(id); //parseint convierte de string  a
        console.log(idInt);
    }
    res.json({message: `este es el id dado ${id}`});
});


//query params
app.get('/api/search/', (req, res) => {
    const {name, lastname} = req.query;
    res.json({
        firstName: name, //renombramos
        lastname, //reutilizamos
    });
    //http://localhost:PORT/api/search?name=ana&lastname=anna
});

//POST
app.post("/api/user", (req, res) => {
    const { name, email} = req.body;
    res.json({message: "usuario creado", data: { name, email }});
});

//tarea
//test post
//update
//delete
//2puntos


//iniciar server
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en ${PORT}`);
});
