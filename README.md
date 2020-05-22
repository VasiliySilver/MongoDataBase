#  Изучение MongoDB

MongoDB - современная, мощная, удобная и легкая система управления базами данных (сокращение: СУБД). Вся информация в MongoDB сохраняется в формате JSON, который легко адаптировать в читаемый формат в любом языке программирования. В базе данных используется NoSQL подход для работы с данными.

Монго является бесплатной системой и поставляется с открытым исходным кодом. Популярность система обрела благодаря стеку MEAN, в который входит Node JS, Angular, Express и MongoDb. Многие веб разработчики используют стек MEAN, где "M" - MongoDB, а остальные буквы соответствуют описаным выше технологиям.

Монго легко встраивается в различные проекты, имеет простую структуру и удобный функционал. Благодаря своей простоте, он за короткий промежуток времени обрел большую популярность среди программистов.


### 1 - Установка базы данных

---

- [Официальный сайт](https://www.mongodb.com/)
- [Инструкция для Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


### 2 - Создание базы данных

Для создания БД используйте следующий синтаксис:
```js
use db_name
// db_name - имя вашей будущей базы данных 
```

Для создания коллекций используйте синтаксис:
```js
db.createCollection("users")
// users - имя вашей коллекции
```
```
use yourbase
db.createCollection("users")
db.createCollection("articles")
db.articles.drop()
```
- [Пример](create-db.js)

### 3 - Добавление данных в коллекцию

Для записи данных в коллекцию используются два метода:
```
db.insertOne({})
db.insertMany([{}])
```
- [Пример](insert-one-many.js)
### 4 - Выборка данных из коллекции
Основная функция для поиска данных - find(). Функция принимает несколько объектов:

1. Фильтр для выборки объектов;
2. Указание объектов, что не будут получены из выборки.

Все полученные записи можно сортировать при помощи функции sort(), а также лимитировать по количеству при помощи функции limit().
- [Пример](take-data-from-collection.js)

### 5 - Обновление и удаление данных

##### Удаление объекта
Для удаления объекта необходимо прописать функцию deleteOne или же deleteMany. Первая функция удаляет лишь один объект по заданному фильтру, вторая же - удаляет все объекты по фильтру.

##### Обновление данных
Для обновления данных используйте функции updateOne или же updateMany. Функции принимают два параметра.

- Фильтр для выбора нужных объектов;
- Поля и значения, которые будут заменены (обновлены)

Все полученные записи можно сортировать при помощи функции sort(), а также лимитировать по количеству при помощи функции limit().

##### Замена объекта
Для замены объекта существует одна функция - replaceOne.
Фильтр для выбора нужных объектов;
Поля и значения, которые будут заменены (обновлены)

- [Пример](update-delete-data.js)

### 6 - Объединение запросов в БД
Для объединения запросов в MongoDB, используется специальная функция - bulkWrite(). Синтаксис функции немного не привычный, но все равно простой. 
Функция принимает объекты, где каждый объект описывает определенное действие (команду). В таких объектах необходимо прописывать действие: добавление данных, удаление, замена или обновление.

- [Пример](combine-requests-bd.js)

### 7 - Поиск на совпадение в тексте
Для поиска по тексту в определенном поле необходимо это поле изначально указать через метод createIndex(). Данный метод создает индексы для полей, после чего вы можете выполнять поиск по конкретным словам:
```
db.some.find({ $text: {$search: "текст"} })
```
- [Пример](search-for-match-in-text.js)
### 8 - Моментальная обработка данных

MongoDB позволяет сразу же при получении данных отсортировать данные таким образом, чтобы получить нужный результат.
В Монго есть несколько встроенных функций, помогающих работать с информацией. Вот некоторые из них:
- count() - позволяет подсчитать количество объектов и вывести их количество;
- distinct() - позволяет получить лишь уникальные значения и вывести их в формате массива;
- aggregate() - позволяет объединить данные по конкретному полю и вывести их сумму, объединение, разницу и многое другое
- [Пример](instant-data-processing.js)
