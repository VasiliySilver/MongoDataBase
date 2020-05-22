// use db_name
// db_name - имя вашей будущей базы данных

db.createCollection("users")
// users - имя вашей коллекции


// use your_db
db.createCollection("users")
db.createCollection("articles")
// удалить коллекцию
db.articles.drop()