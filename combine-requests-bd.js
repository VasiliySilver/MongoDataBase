db.users.bulkWrite([
    {
        insertOne: {
            "document": {name: "Alex", age: 47, email: "alex@test.ru"}
        }
    },
    {

        insertOne: {
            "document": {name: "Gourge", age: 20, email: "gourge@test.ru"}
        }
    },
    {
        deleteOne: {
            filter: {age: 43}
        }
    },
    {
        updateMany: {
            filter: {name: "Mike"},
            update: {$set: {email: "new_email@test.ru"}}
        }
    },
    {
        replaceOne: {
            filter: {name: "Jack"},
            replacement: {$set: {name: "Джэк", age: 46, email: "jack@mailmail.ru"}}
        }
    },
])


// добавляем запись
// добавляем запись
// удаляем запись
// обновляем все записи
// заменяем объект
