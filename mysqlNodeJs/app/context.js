var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'NodeUser',
    password: 'lolkek',
    database: 'tasktracker'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log(err);
    }
});

module.exports = {
    getExample() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT 1+1', function (err, rows, fields) {
                console.log(rows)
                if (!err)
                    resolve(rows);
                else
                    throw err;
            });
        })
    },
    // createProject: (Name, Description) => {
    //     return new Promise((resolve, reject) => {
    //         connection.query("INSERT INTO projects (`Id`,`Name`,`Description`) VALUES (<{Id: }>,<{Name: }>,<{Description: }>);", function (err, rows, fields) {
    //             console.log(rows)
    //             if (!err)
    //                 resolve(rows);
    //             else
    //                 throw err;
    //         });
    //     })
    // }
}