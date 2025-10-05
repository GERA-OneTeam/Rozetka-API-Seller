# Calls

### 3 Зміна статусу звернення клієнта

**put** `/calls/change-status`

<p>Call Change Status</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **request_id** `Integer` **_(обов'язково)_** - <p>ID звернення клієнта</p>
- **status** `String` **_(обов'язково)_** - <p>Новий статус для звернення клієнта<br> <ul> <li><b>decided</b> - Вирішено</li> <li><b>not_decided</b> - Не вирішено</li> </ul></p>
- **status_comment** `String` _(опціонально)_ - <p>Коментар до статусу<br><code>Max:300 символів</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
- **call** `Object` **_(обов'язково)_** - <p>Model</p>
- **call.id** `Integer` **_(обов'язково)_** - <p>ID дзвінка</p>
- **call.request_type_name** `String` **_(обов'язково)_** - <p>Назва типу звернення</p>
- **call.message** `String` **_(обов'язково)_** - <p>Повідомлення звернення</p>
- **call.status_group** `Number` **_(обов'язково)_** - <p>Id групи статусів замовлень</p>
- **call.code_id** `Number` **_(обов'язково)_** - <p>Код товару</p>
- **call.comment** `String` **_(обов'язково)_** - <p>Коментар модератора звернення</p>
- **call.date_call** `Date` **_(обов'язково)_** - <p>Дата дзвінка</p>
- **call.order_id** `Number` **_(обов'язково)_** - <p>ID замовлення</p>
- **call.request_type** `Number` **_(обов'язково)_** - <p>Тип звернення</p> <ul>  <li>1 - Прохання зв'язатися</li>  <li>2 - Уточнення по доставці</li>  <li>3 - Скасування замовлення</li>  <li>4 - Скарга</li>  <li>5 - Повернення</li>  <li>6 - Виправлення інформації на сайті</li>  <li>7 - Питання по оплаті</li> </ul>
- **call.sending_type** `Number` **_(обов'язково)_** - <p>Адресат<br></p> <ul> <li>1 - Відділ залучення</li> <li>2 - Відділ підтримки</li> <li>3 - Розетка</li> <li>4 - Відділ контролю якості</li> </ul>
- **call.status_id** `Number` **_(обов'язково)_** - <p>Статус</p> <ul> <li>1 - Новий</li> <li>2 - В обробці</li> <li>3 - Не вирішено</li> <li>4 - Вирішено</li> <li>5 - Закрито</li> </ul>
- **call.user_login** `String` **_(обов'язково)_** - <p>Ім'я користувача</p>
- **call.user_phone** `String` **_(обов'язково)_** - <p>Контактний номер</p>
- **call.status_comment** `String` **_(обов'язково)_** - <p>Коментар статусу звернення</p>
- **call.seller_comment_info** `Object` **_(обов'язково)_** - <p>Додаткова інформація коментаря продавця</p>
- **call.seller_comment_info.seller_fio** `String` **_(обов'язково)_** - <p>ПІБ продавця</p>
- **call.seller_comment_info.date** `String` **_(обов'язково)_** - <p>Дата коментаря</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 264,
        "request_type_name": "Терміново! Прохання зв`язатись стосовно замовлення 177318319",
        "message": "Доброго дня! Зв`яжіться з клієнтом (valentyn  380733071775) для уточнення інформації по замовленню 177318319. Дякуємо!",
        "status_group": 1,
        "code_id": null,
        "comment": "13 sadc asda",
        "date_call": "2019-01-22 13:08:33",
        "order_id": 177318319,
        "request_type": 1,
        "sending_type": null,
        "status_id": 4,
        "user_login": "valentyn ",
        "user_phone": "380733071775"
    }
}
```

---

### 2 Деталі звернення клієнта

**get** `/calls/{id}`

<p>Call Details</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID звернення клієнта (унікальний ID)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
- **call** `Object` **_(обов'язково)_** - <p>Model</p>
- **call.id** `Integer` **_(обов'язково)_** - <p>ID дзвінка</p>
- **call.request_type_name** `String` **_(обов'язково)_** - <p>Назва типу звернення</p>
- **call.message** `String` **_(обов'язково)_** - <p>Повідомлення звернення</p>
- **call.status_group** `Number` **_(обов'язково)_** - <p>Id групи статусів замовлень</p>
- **call.code_id** `Number` **_(обов'язково)_** - <p>Код товару</p>
- **call.comment** `String` **_(обов'язково)_** - <p>Коментар модератора звернення</p>
- **call.date_call** `Date` **_(обов'язково)_** - <p>Дата дзвінка</p>
- **call.order_id** `Number` **_(обов'язково)_** - <p>ID замовлення</p>
- **call.request_type** `Number` **_(обов'язково)_** - <p>Тип звернення</p> <ul>  <li>1 - Прохання зв'язатися</li>  <li>2 - Уточнення по доставці</li>  <li>3 - Скасування замовлення</li>  <li>4 - Скарга</li>  <li>5 - Повернення</li>  <li>6 - Виправлення інформації на сайті</li>  <li>7 - Питання по оплаті</li> </ul>
- **call.sending_type** `Number` **_(обов'язково)_** - <p>Адресат<br></p> <ul> <li>1 - Відділ залучення</li> <li>2 - Відділ підтримки</li> <li>3 - Розетка</li> <li>4 - Відділ контролю якості</li> </ul>
- **call.status_id** `Number` **_(обов'язково)_** - <p>Статус</p> <ul> <li>1 - Новий</li> <li>2 - В обробці</li> <li>3 - Не вирішено</li> <li>4 - Вирішено</li> <li>5 - Закрито</li> </ul>
- **call.user_login** `String` **_(обов'язково)_** - <p>Ім'я користувача</p>
- **call.user_phone** `String` **_(обов'язково)_** - <p>Контактний номер</p>
- **call.status_comment** `String` **_(обов'язково)_** - <p>Коментар статусу звернення</p>
- **call.seller_comment_info** `Object` **_(обов'язково)_** - <p>Додаткова інформація коментаря продавця</p>
- **call.seller_comment_info.seller_fio** `String` **_(обов'язково)_** - <p>ПІБ продавця</p>
- **call.seller_comment_info.date** `String` **_(обов'язково)_** - <p>Дата коментаря</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 263,
        "request_type_name": "Терміново! Прохання зв`язатись стосовно замовлення 177318319",
        "message": "Доброго дня! Зв`яжіться з клієнтом (valentyn  380733071775) для уточнення інформації по замовленню 177318319. Дякуємо!",
        "status_group": 1,
        "code_id": null,
        "comment": "12 12312 123",
        "date_call": "2019-01-22 12:01:46",
        "order_id": 177318319,
        "request_type": 1,
        "sending_type": null,
        "status_id": 5,
        "user_login": "valentyn ",
        "user_phone": "380733071775",
        "status_comment": "тест"
    }
}
```

---

### 1 Пошук звернень клієнтів

**get** `/calls/search`

<p>Пошук звернень клієнтів</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` _(опціонально)_ - <p>Field sorting +/- (asc/desc).</p>

**Request Url Parameters:**

- **code_id** `Integer` _(опціонально)_ - <p>ID товару</p>
- **order_id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **request_type** `Integer` _(опціонально)_ - <p>Тип звернення (1 -Прохання зв'язатися, 2 - Уточнення по доставці, 3 - Скасування замовлення, 4 - Скарга, 5 - Повернення, 6 - Виправлення інформації на сайті, 7 - Питання по оплаті)</p>
- **status_id** `Integer` _(опціонально)_ - <p>Статус звернення (1 - Новий 2 - В обробці 3 - Не вирішено 4 - Вирішено 5)</p>
- **created_from** `String` _(опціонально)_ - <p>Дата створення звернення від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата створення звернення до</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;calls&quot;: Call[], &quot;_meta&quot;: MetaResponse }</p>
- **call** `Object` **_(обов'язково)_** - <p>Model</p>
- **call.id** `Integer` **_(обов'язково)_** - <p>ID дзвінка</p>
- **call.request_type_name** `String` **_(обов'язково)_** - <p>Назва типу звернення</p>
- **call.message** `String` **_(обов'язково)_** - <p>Повідомлення звернення</p>
- **call.status_group** `Number` **_(обов'язково)_** - <p>Id групи статусів замовлень</p>
- **call.code_id** `Number` **_(обов'язково)_** - <p>Код товару</p>
- **call.comment** `String` **_(обов'язково)_** - <p>Коментар модератора звернення</p>
- **call.date_call** `Date` **_(обов'язково)_** - <p>Дата дзвінка</p>
- **call.order_id** `Number` **_(обов'язково)_** - <p>ID замовлення</p>
- **call.request_type** `Number` **_(обов'язково)_** - <p>Тип звернення</p> <ul>  <li>1 - Прохання зв'язатися</li>  <li>2 - Уточнення по доставці</li>  <li>3 - Скасування замовлення</li>  <li>4 - Скарга</li>  <li>5 - Повернення</li>  <li>6 - Виправлення інформації на сайті</li>  <li>7 - Питання по оплаті</li> </ul>
- **call.sending_type** `Number` **_(обов'язково)_** - <p>Адресат<br></p> <ul> <li>1 - Відділ залучення</li> <li>2 - Відділ підтримки</li> <li>3 - Розетка</li> <li>4 - Відділ контролю якості</li> </ul>
- **call.status_id** `Number` **_(обов'язково)_** - <p>Статус</p> <ul> <li>1 - Новий</li> <li>2 - В обробці</li> <li>3 - Не вирішено</li> <li>4 - Вирішено</li> <li>5 - Закрито</li> </ul>
- **call.user_login** `String` **_(обов'язково)_** - <p>Ім'я користувача</p>
- **call.user_phone** `String` **_(обов'язково)_** - <p>Контактний номер</p>
- **call.status_comment** `String` **_(обов'язково)_** - <p>Коментар статусу звернення</p>
- **call.seller_comment_info** `Object` **_(обов'язково)_** - <p>Додаткова інформація коментаря продавця</p>
- **call.seller_comment_info.seller_fio** `String` **_(обов'язково)_** - <p>ПІБ продавця</p>
- **call.seller_comment_info.date** `String` **_(обов'язково)_** - <p>Дата коментаря</p>
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
        "calls": [
            {
                "id": 264,
                "request_type_name": "Терміново! Прохання зв`язатись стосовно замовлення 177318319",
                "message": "Доброго дня! Зв`яжіться з клієнтом (valentyn  380733071775) для уточнення інформації по замовленню 177318319. Дякуємо!",
                "status_group": 1,
                "code_id": null,
                "comment": "13 sadc asda",
                "date_call": "2019-01-22 13:08:33",
                "order_id": 177318319,
                "request_type": 1,
                "sending_type": null,
                "status_id": 5,
                "user_login": "valentyn ",
                "user_phone": "380733071775",
                "status_comment": "тест",
                "seller_comment_info": {
                    "seller_fio": "Іванов Гаврило",
                    "date": "2023-01-06 13:15:33"
                }
            },...
        ],
        "_meta": {
            "totalCount": 26,
            "pageCount": 2,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 4 Статуси і типи звернень клієнта

**get** `/calls/call-statuses-n-request-types`

<p>Call Statuses And Request Types</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;statuses&quot;:[], &quot;request_types&quot;:[] } }</p>
- **statuses** `Array` **_(обов'язково)_** - <p>Статуси звернень клієнта ( 1 - Новий, 2 - В обробці, 3 - Не вирішено, 4 - Вирішено, 5 - Закрито)</p>
- **request_types** `Array` **_(обов'язково)_** - <p>Типи звернень клієнта (1 - Прохання зв'язатися, 2 - Уточнення по доставці, 3 - Скасування замовлення, 4 - Скарга, 5 - Повернення, 6 - Виправлення інформації на сайті, 7 - Питання по оплаті)</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "statuses": [
            1,
            2,
            3,
            4,
            5
        ],
        "request_types": [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ]
    }
}
```

---

