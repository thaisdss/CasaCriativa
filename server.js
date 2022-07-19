//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


const ideias = [
    {
        img:"https://cdn-icons-png.flaticon.com/512/2729/2729007.png",
        title:"Cursos de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/2729/2729005.png",
        title:"Exercícios",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/2729/2729027.png",
        title:"Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/2729/2729032.png",
        title:"Karaokê",
        category:"Diversão em Família",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    }
]

//Configurar arquivos estatícos (CSS, Scripts, Imagens)
server.use(express.static("public"))

//Configuração do Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //boolean
})

//Criei uma rota /
//Capturo o pedido do cliente para responder
server.get("/", function(req,  res) {

    const reversedIdeias = [...ideias].reverse()

    let lastIdeias = []
    for( let ideia of reversedIdeias){
        if(lastIdeias.length < 2){
            lastIdeias.push(ideia)
        }
    }

    return res.render("index.html", {ideias : lastIdeias})
})

server.get("/ideias", function(req,  res) {
    
    const reversedIdeias = [...ideias].reverse()

    return res.render("ideias.html", {ideias: reversedIdeias})
})

//Liguei meu servidor na porta 3000
server.listen(3000)