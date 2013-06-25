var pg = require('pg') //postgres

var client, query;

function init() {
   // pstgres://username:password@localhost:5432/dbname
   client = new pg.Client('postgres://kkostya:pass@localhost:5432/kkostya')
   client.connect()
}

function stop() {
   client.end.bind(client) 
}

function initDb() { //initialize db for the first time
   client.query('CREATE TABLE users (name varchar(30), passwd varchar(50), date date, upvotes int, downvotes int)')
   client.query('CREATE TABLE posts (title varchar(150), comment varchar(1000), upvotes int, downvotes int, poster varchar(30), date date)')
}


function addUser(usrname, passwd) {
   client.query('INSERT INTO users VALUES ($1, $2, NOW(), 0, 0)', [usrname, passwd])
}

function postComment(title, comment, poster) {
   client.query('INSERT INTO posts VALUES ($1, $2, 0, 0, $3, NOW())', [title, comment, poster])
}

init()
addUser('kostya', 'mypassword')
addUser('testUser', 'testUser')
console.log('\n---\n')
stop()

function addPost(title, content, user) {}
