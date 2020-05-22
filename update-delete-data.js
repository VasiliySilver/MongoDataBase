//                   фильтр  |  какое поле меняем
db.users.updateMany({age: 22}, {$set: {age: 23}})



// изменяем возраст на двадцать пять для ОДНОГО объекта
db.users.updateOne({age: 25}, {$set: {age: 23}})

// изменяем возраст на двадцать три для ВСЕХ объектов
db.users.updateMany({age: 22}, {$name: {age: 23}})


db.users.updateMany({age: 22}, {$name: "User", email: "test#mail.ru"})



// Обновление данных
db.users.updateMany({age: 23}, {$set: {name: "User", email: "test@mail.ru"}})


// Замена объекта целиком
db.users.replaceOne(
    {age: 23},
    {name: "New User", hasCar: 23, password: "234", hasWife: true}
)

// Удаление данных
db.users.deleteMany({age: {$gte: 22}, age: {$lte: 38}})