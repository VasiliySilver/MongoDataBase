// Посчитать количество записей в БД по фильтру
db.users.count({name: "Mike"})

// Получить лишь уникальные значения
db.users.distinct("age")

// Объединение данных толко по Майку
db.users.aggregate([
    {$match: {name: "Mike"}},
    {$group: {_id: "$name", age: {$sum: "$age"}}}
])

// Объединение данных
db.users.aggregate([
    {$match: {name: "Mike"}},
    {$group: {_id: "$name", age: {$sum: "$age"}}}
])
// с помощью метода $sum можно подсчитать кто сколько заплатил