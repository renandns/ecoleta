// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto do banco de dados
/* db.serialize(() => {
    //1 - Criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 - Inserir Dados
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?, ?, ?, ?, ?, ?, ?);
`
    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "PaperSider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    // 3 - Consultar os dados 
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

    // 4 - Deletar os dados

    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        if(err){
            return console.log(err)
        }
        
        console.log("Registro deletado com sucesso!")
    })

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

}) */
