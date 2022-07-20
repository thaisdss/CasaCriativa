//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db")

//Configurar arquivos estatícos (CSS, Scripts, Imagens)
server.use(express.static("public"))

//Habilitar uso do req.body
server.use(express.urlencoded({extended: true}))

//Configuração do Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //boolean
})

//Criei uma rota /
//Capturo o pedido do cliente para responder
server.get("/", function(req,  res) {

    db.all(`SELECT * FROM ideias`, function(err, rows){
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reversedIdeias = [...rows].reverse()

    let lastIdeias = []
    for( let ideia of reversedIdeias){
        if(lastIdeias.length < 2){
            lastIdeias.push(ideia)
        }
    }

    return res.render("index.html", {ideias : lastIdeias})
    })
})

server.get("/ideias", function(req,  res) {

    db.all(`SELECT * FROM ideias`, function(err, rows){
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reversedIdeias = [...rows].reverse()

        return res.render("ideias.html", {ideias: reversedIdeias})
    })
})

server.post("/", function(req, res){
    //Inserir dado na tabela
    const query = `
    INSERT INTO ideias(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?);
    ` 

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]


    db.run(query, values, function(err){
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        return res.redirect("/ideias")
    })
})

//Liguei meu servidor na porta 3000
server.listen(3000)