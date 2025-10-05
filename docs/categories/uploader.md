# Uploader

### 2 Список завантажених прайсів

**get** `/item-price-updates/search`

<p>Список завантажених прайсів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` **_(обов'язково)_** - <p>номер сторінки</p>
- **sort** `String` **_(обов'язково)_** - <p>сортування</p>
- **pageSize** `Integer` **_(обов'язково)_** - <p>кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **uploaderLogXmls** `Ojbect[]` **_(обов'язково)_** - 
- **uploaderLogXmls.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **uploaderLogXmls.hash** `String` **_(обов'язково)_** - <p>Hash (технічне поле)</p>
- **uploaderLogXmls.place** `String` **_(обов'язково)_** - <p>Тип джерела інформації на даний момент: url, file</p>
- **uploaderLogXmls.status** `Integer` **_(обов'язково)_** - <p>Статус</p>
- **uploaderLogXmls.file** `String` **_(обов'язково)_** - <p>Файл</p>
- **uploaderLogXmls.size** `Integer` **_(обов'язково)_** - <p>Розмір файлу</p>
- **uploaderLogXmls.type** `String` **_(обов'язково)_** - <p>Тип файлу</p>
- **uploaderLogXmls.place_address** `String` **_(обов'язково)_** - <p>Адреса файлу в інтернеті або тимчасова назва файлу у нас на диску</p>
- **uploaderLogXmls.report** `String` **_(обов'язково)_** - <p>Звіт</p>
- **uploaderLogXmls.created_at** `Date` **_(обов'язково)_** - <p>Дата створення</p>
- **uploaderLogXmls.email** `String` **_(обов'язково)_** - <p>Email користувача, який запускав валідацію</p>
**Response Meta Fields:**

- **_meta** `Object` **_(обов'язково)_** - <p>Дані пагінації</p>
- **_meta.totalCount** `Integer` **_(обов'язково)_** - <p>Всього записів</p>
- **_meta.pageCount** `Integer` **_(обов'язково)_** - <p>Кількість сторінок</p>
- **_meta.currentPage** `Integer` **_(обов'язково)_** - <p>Поточна сторінка</p>
- **_meta.perPage** `Integer` **_(обов'язково)_** - <p>Кількість записів на сторінці</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
"success": true,
"content": {
 "uploaderLogXmls": [
       {
              "id": 524,
              "hash": "1234567qwerty",
              "place": "url",
              "place_address": "http://api.seller.com.ua/address",
              "file": null,
              "status": 1,
              "email": "testing.@mail.com",
              "report": null,
              "size": 0,
              "type": "Auto",
              "created_at": "2019-12-04 15:34:05"
       }
   ],
 "_meta": {
      "totalCount": 1,
      "pageCount": 1,
      "currentPage": 1,
      "perPage": 20
   }
}}
```

---

### 1 Завантажити файл

**post** `/item-price-updates/create`

<p>Завантажити файл прайса для валідації</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **logXmlValidates.place** `String` **_(обов'язково)_** - <p>Тип джерела інформації на даний момент: url, file</p>
- **logXmlValidates.place_address** `String` **_(обов'язково)_** - <p>адреса в інтернеті</p>
- **logXmlValidates.file_name** `String` **_(обов'язково)_** - <p>Ім'я файлу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID запису</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
     "success":true,
     "content":
         {
             "id":174
         }
}
```

---

