/*Для записи данных в коллекцию используются два метода
db.insertOne({})
db.insertMany([{}])*/

db.users.insertOne(
    {
        "name":"Mike",
        "email":"mike@mail.ru",
        "age": 18,
        "hasCar":true,
        "favColors":["Green","Red","Black"],
        "child": {"name":"Jack","surname":"Charly","age":5}
    }
)
db.users.insertOne(
    {
        _id: 2,
        "name":"Jack",
        "email":"admin@mail.ru",
        "age": 43,
        "hasCar":false,
        "favColors":["Red","White"],
        "child": {"name":"Jack","surname":"Charly","age":5}
    }
)
db.users.insertOne(
    {
        "name":"George",
        "email":"admin@test.ru",
        "age": 22,
        "hasCar":false,
        "birthday": new Date('1996-11-27')
    }
)
db.users.insertMany([
    {
        "name":"Бол",
        "email":"admin@test.ru",
        "age": 22,
        "hasCar":false,
        "birthday": new Date('1996-11-27')
    },
    {
        "name":"Бол",
        "email":"admin@test.ru",
        "age": 22,
        "hasCar":false,
        "birthday": new Date('1996-11-27')
    },
    {
        "name":"Анна",
        "email":"anna@test.ru",
        "age": 22,
        "hasCar":false,
        "birthday": new Date('1996-11-27')
    },
    {
        "name":"Кирилk",
        "email":"admin@test.ru",
        "age": 29,
        "hasCar":false,
        "birthday": new Date('1996-11-27')
    },
])