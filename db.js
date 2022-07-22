const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./ws.db")

db.serialize(function(){
    //Criar a tabela
    db.run(`
    CREATE TABLE IF NOT EXISTS ideias(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );`)

    //Consultar E Deletar dados da tabela
    /*db.all(`SELECT id FROM ideias WHERE title='abc'`, function(err, rows){
        if(err) return console.log(err)

        var arr = rows.map(function(obj) {
            return Object.keys(obj).map(function(key) {
                return obj[key];
            });
        });

        db.run(`DELETE FROM ideias WHERE id = ?`, [arr[0]], function(err){
            if(err) return console.log(err)
    
            console.log("Deletei", this)
        })
    })*/

})

module.exports = db