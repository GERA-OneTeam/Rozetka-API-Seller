# Fulfillment

### 2 Збереження контактної особи для Fulfillment

**post** `/fulfillments/seller-settings`

<p>Збереження даних контрагента Нової Пошти для Fulfillment</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **ref** `String` **_(обов'язково)_** - <p>UUID контрагента з Нової пошти</p>
- **description** `String` **_(обов'язково)_** - <p>Поле description з даних контрагента</p>
- **phones** `String` _(опціонально)_ - <p>Поле phones з даних контрагента</p>
- **last_name** `String` _(опціонально)_ - <p>Поле last_name з даних контрагента</p>
- **first_name** `String` _(опціонально)_ - <p>Поле first_name з даних контрагента</p>
- **middle_name** `String` _(опціонально)_ - <p>Поле middle_name з даних контрагента</p>
- **email** `String` _(опціонально)_ - <p>Поле email з даних контрагента</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: FulfilmentSenderSettings }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "ref": "917a9157-584e-11e5-8d8d-005056887b8d",
        "description": "Приватна особа",
        "last_name": "Приватна особа",
        "first_name": "",
        "middle_name": "",
        "phones": "",
        "email": "wq@wq.ru",
        "id": 1,
        "created_at": "2020-12-11 18:18:41"
    }
}
```

---

### 4 Завантажити файл заявки на зберігання

**get** `/fulfillments/invoice/file/{id}`

<p>Завантажити файл заявки на зберігання</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID заявки</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл заявки на зберігання (PDF)</p>

---

### 3 Пошук (фільтрація, сортування) заявки на зберігання

**get** `/fulfillments/invoice/search`

<p>Пошук (фільтрація, сортування) заявки на зберігання</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID заявки</p>
- **number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **delivery_date_from** `DateTime` _(опціонально)_ - <p>Планова дата і час доставки (від)</p>
- **delivery_date_to** `DateTime` _(опціонально)_ - <p>Планова дата і час доставки (до)</p>
- **date_start** `Date` _(опціонально)_ - <p>Дата створення заявки (від)</p>
- **date_end** `Date` _(опціонально)_ - <p>Дата створення заявки (до)</p>
- **delivery_address** `String` _(опціонально)_ - <p>Адреса доставки</p>
- **status** `Integer` _(опціонально)_ - <p>Статус заявки</p>
- **expand** `String` _(опціонально)_ - <p>Товари в заявці</p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці*<br> *<sup>Якщо передати 0 - всі записи виводяться на 1 сторінці</sup></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;fulfillmentInvoices&quot;:FFAccountModel[], &quot;_meta&quot;:_meta } }</p>
- **fulfillmentInvoices** `FFAccountModel[]` **_(обов'язково)_** - <p>Масив заявок на створення заявки на зберігання (FFAccountModel)</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **number** `String` **_(обов'язково)_** - <p>Номер заявки</p>
- **delivery_date** `String` **_(обов'язково)_** - <p>Планова дата і час доставки</p>
- **delivery_address** `String` **_(обов'язково)_** - <p>Адреса доставки</p>
- **date_from** `String` **_(обов'язково)_** - <p>Дата створення заявки</p>
- **status** `Object` **_(обов'язково)_** - <p>Статус заявки</p>
- **status.id** `Integer` **_(обов'язково)_** - <p>ID статуса</p>
- **status.title** `String` **_(обов'язково)_** - <p>Назва статуса</p>
- **file_exist** `Boolean` **_(обов'язково)_** - <p>Ознака існування файлу для скачування</p>
- **model.file_barcodes_exist** `Boolean` **_(обов'язково)_** - <p>Ознака існування файлу зі штрих-кодами</p>
**ExtraFields:**

- **items** `FFItemAccountModel[]` **_(обов'язково)_** - <p><a href="#api-Models-FFItemAccountModel">Товари в заявці на зберігання</a></p>
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
     "content":{
         "fulfillmentInvoices":[
             {
                 "id": 38,
                 "number": "0000000038",
                 "delivery_date": "2020-12-20 17:50:00",
                 "delivery_address": "Some Address",
                 "date_from": "2020-12-18",
                 "status":{"id": 1, "title": "Документ сформовано"},
                 "file_exist": true,
                 "file_barcodes_exist": true,
                 "items": [
                     {
                         "id": 27,
                         "item_id": 1111,
                         "name": "Test Item 1",
                         "quantity": 12,
                         "price": "175.00"
                     }
                 ]
             }
         ],
         "_meta":{
             "totalCount": 1,
             "pageCount": 1,
             "currentPage": 1,
             "perPage": 20
         }
     }
}
```

---

### 6 Список складів для відправки товарів по ФФ

**get** `/fulfillments/recipient-store/search`

<p>Пошук (фільтрація, сортування) складів для відправки товарів ФФ</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>UUID складу</p>
- **name** `String` _(опціонально)_ - <p>Назва складу</p>
- **address** `String` _(опціонально)_ - <p>Адреса</p>
- **item_ids** `String` _(опціонально)_ - <p>ID товарів для формування заявки на зберігання</p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування по полю</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці*<br> *<sup>Якщо передати 0 - всі записи виводяться на 1 сторінці</sup></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;recipientStores&quot;:FFStoresModel[], &quot;_meta&quot;:_meta } }</p>
- **recipientStores** `FFStoresModel[]` **_(обов'язково)_** - <p>Масив складів для відправки товарів по ФФ (FFStoresModel)</p>
- **model.id** `Integer` **_(обов'язково)_** - <p>UUID складу</p>
- **model.name** `String` **_(обов'язково)_** - <p>Назва складу</p>
- **model.address** `String` **_(обов'язково)_** - <p>Адреса</p>
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
        "recipientStores": [
            {
                "id": "61152834-388A-11EC-80DE-0CC47AFBBEE4",
                "name": "Львов",
                "address": "Львівська обл., м. Львів, вул. Зелена, буд. 301"
            },
            {
                "id": "1B2453A6-89AB-4ED3-BDCC-E677DCB2E226",
                "name": "Бровари",
                "address": "Київська обл., м. Бровари, Об'їздна дорога, буд. 62"
            }
        ],
        "_meta": {
            "totalCount": 2,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 5 Вивантажити файл з товарами фулфілмент

**get** `/fulfillments/invoices/export`

<p>Вивантажити файл з товарами фулфілмент</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ids** `Integer` **_(обов'язково)_** - <p>ID товарів</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл з товарами фулфілмент (XLS)</p>

---

### 1 Створення заявки на зберігання

**post** `/v1/fulfillments/create-invoice`

<p>Створення заявки на зберігання</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **items** `Item[]` **_(обов'язково)_** - <p>Товари в заявці<br> Масив об'єктів item, переданих в форматі: {&quot;item_id&quot;:1, &quot;quantity&quot;:1, &quot;name&quot;: &quot;test&quot;, &quot;price&quot;: 1}<br> Кількість товарних позицій в заявці не повинна перевищувати <code>35</code><br> Товари в заявці не повинні повторюватися, і повинні мати <code>available=1</code><br> див <a href="#api-ApiItems-GetGoodsAll">Всі товари</a></p>
- **items.id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка Маркетплейс</p>
- **items.quantity** `Integer` **_(обов'язково)_** - <p>Кількість <br> <code>Min = 1</code></p>
- **items.name** `Integer` **_(обов'язково)_** - <p>Назва</p>
- **items.price** `Integer` **_(обов'язково)_** - <p>Вартість</p>
- **delivery_date** `String` **_(обов'язково)_** - <p>Планова дата доставки <br> Формат: 2020-11-13 (рррр-мм-дд) або (Y-m-d) <br> Планова дата і час доставки не можуть бути менше поточних</p>
- **delivery_time** `String` **_(обов'язково)_** - <p>Плановий час доставки <br> Формат: 17:00:11 (чч: хх: сс) або (H:i:s) <br> Доступний час доставки з 10.00 до 18.00</p>
- **recipient_store** `String` **_(обов'язково)_** - <p>UUID склада</p>
- **date_from** `String` _(опціонально)_ - <p>Дата створення заявки, (Y-m-d)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 1440,
        "number": null,
        "delivery_date": "2022-12-07 10:00:00",
        "delivery_address": "Львівська обл., м. Львів, вул. Зелена, буд. 301",
        "date_from": "2022-09-09",
        "status": {
            "id": 2,
            "title": "Документ не сформовано"
        },
        "file_exist": false,
        "file_barcodes_exist": false
    }
}
```

---

