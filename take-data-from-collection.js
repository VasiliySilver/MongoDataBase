
db.users.find()
db.users.find({}, {_id: 0}) // записи без id
db.users.find().limit(2) // только 2 записи
db.users.find({}, {_id: 0}).limit(2) // выборка без id
db.users.find({}, {_id: 0}).sort({age: 1}) // по возрастанию
db.users.find({}, {_id: 0}).sort({age: -1}) // по убыванию

// сначала сортировка по возрасту и только потом по email
db.users.find({}, {_id: 0}).sort({age: -1, email: 1})

db.users.find({age: 22}, {_id: 0}) // выборка по возрасту
db.users.find({age: 22, email: "bob@mail.ru"}, {_id: 0}) // выборка по возрасту и email
db.users.find({$or:[{age:23}, {email: "bob@test.ru"}]}, {_id: 0}) // выборка по возрасту и email
db.users.find({$or:[{age:23}, {email: "bob@test.ru"}]}, {_id: 0}).limit(1).sort({age:1})

// $lt:38 ('lt' - less than)ищем все поля у которых значение age < 38
db.users.find({$or:[{age:{$lt:38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age:1})

// $gt:38 ('gt' - greate than) , age > 38, email=bob, сортировка по возрастанию
db.users.find({$or:[{age:{$gt:38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age:1})

// {age:{$gte:38} greater-than-equal больше либо равно
db.users.find({$or:[{age:{$gte:38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age:1})

// {age:{$lte:38} less-than-equal меньше либо равно
db.users.find({$or:[{age:{$lte:38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age:1})

// {age:{eq:38} равно 38
db.users.find({$or:[{age:{eq:38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age:1})

// {age:{ne:38} НЕ равно 38
db.users.find({$or:[{age:{eq:38}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age:1})

// $in - есть в базе
db.users.find({name: {$in: ["Jack", "John", "Bob"]}}, {_id: 0})

// $nin - нет в базе
db.users.find({name: {$nin: ["Jack", "John", "Bob"]}}, {_id: 0})

// все объекты в которых есть (true) поле child
db.users.find({child: {$exists: true}}, {_id: 0})

// все объекты у которых нету (false) поля child
db.users.find({child: {$exists: false}}, {_id: 0})

// все объекты у которых размер массива favColors = 2 элементам
db.users.find({favColors: {$size:2}}, {id:0})

// Элемент у favColors под индексом 1 = Red
db.users.find({"favColors.1":"Red"}, {_id: 0})



/*------------------------------------------------------------------------------*/



// Сортировка
db.users.find({}, {_id: 0}).sort({age: -1, email: -1})

// Выборка по фильтру ИЛИ
db.users.find({$or: [{age: 21}, {email: "bob@test.ru"}]}, {_id: 0}).limit(1).sort({age: 1})

// Фильтрация объектов
db.users.find({$or: [{age: {$ne: 22}}, {email: "bob@test.ru"}]}, {_id: 0}).sort({age: 1})
// Дополнительные проверки: $eq, $ne, $lt, $gt, $gte, $lte

// Поиск на несколько значений
db.users.find({name: {$nin: ["Jack", "John", "Боб"]}}, {_id: 0})

// Отслеживание полей
db.users.find({ child: {$exists: false} }, {_id: 0})

// Проверка размерности массива
db.users.find({ favColors: {$size: 3} }, {_id: 0})

// Проверка на соответствие конкретного элемента
db.users.find({ "favColors.1": "Красный" }, {_id: 0})

// Проверка больше/меньше в массивах
db.users.find({ favColors: {$elemMatch: {$lte: 30}} }, {_id: 0})