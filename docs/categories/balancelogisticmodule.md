# BalanceLogisticModule

### 1.2 Фільтри для пошуку операцій з балансу логістики

**get** `/balance-logistic/search-data`

<p>Фільтри для пошуку операцій з балансу логістики</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { operationTypes: operationTypes[], } }</p>
- **operation_types** `Object` **_(обов'язково)_** - <p>Типи операцій балансу логістики</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "operationTypes": [
            {
                "id": 34,
                "title": "Доставка відправлення"
            },
            {
                "id": 43,
                "title": "Зворотня доставка відправлення"
            },
            {
                "id": 35,
                "title": "Коригування рахунку +"
            },
            {
                "id": 36,
                "title": "Коригування рахунку -"
            },
            {
                "id": 33,
                "title": "Поповнення рахунку"
            }
        ]
    }
}
```

---

### 5.1 Створення платежу логістики

**post** `/balance-logistic/evo-payment`

<p>Створення платежу логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **invoice_id** `Integer` **_(обов'язково)_** - <p>ID рахунку на оплату</p>
- **browserColorDepth** `Number` **_(обов'язково)_** - <p>Глибина кольору монітора</p>
- **browserScreenHeight** `Number` **_(обов'язково)_** - <p>Висота монітора (роздільна здатність)</p>
- **browserScreenWidth** `Number` **_(обов'язково)_** - <p>Ширина монітора (роздільна здатність)</p>
- **browserJavaEnabled** `Boolean` **_(обов'язково)_** - <p>Чи включена джава в браузері</p>
- **browserLanguage** `String` **_(обов'язково)_** - <p>Локалізація в браузері</p>
- **browserTimeZone** `String` **_(обов'язково)_** - <p>Часова зона</p>
- **browserTimeZoneOffset** `String` **_(обов'язково)_** - <p>Зміщення часу локального часового пояса</p>
- **browserAcceptHeader** `String` **_(обов'язково)_** - <p>Формат відповіді який очікує отримати браузер</p>
- **browserUserAgent** `String` **_(обов'язково)_** - <p>UserAgent браузера</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **InvoiceBillingModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойсу</p>
- **InvoiceBillingModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceBillingStatuses">Статус рахунку</a></p>
- **InvoiceBillingModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceBillingModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для оплати інвойсу</p>
- **InvoiceBillingModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceBillingModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceBillingModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceBillingModel.evo_payment_allowed** `Number` **_(обов'язково)_** - <p>Можливість оплати карткою</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 1,
        "status": 2,
        "type": "BILL10",
        "payment_url": "https://pay.test/api/v1/checkout/11111111-f8cd-45b2-e105-e6153e0f8ace/form",
        "number": "РЗЛ-00002091",
        "date_of_invoice": "2023-12-12 10:47:44",
        "amount": 1,
        "evo_payment_allowed": true
    }
}
```

---

### 5.2 Отримання статусу платежа логістики

**get** `/balance-logistic/evo-payment-status`

<p>Отримання статусу платежа логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **invoice_id** `Integer` **_(обов'язково)_** - <p>Фільтр по id рахунку на оплату</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **status** `Integer` **_(обов'язково)_** - <p>Статус платежа</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "status": 2
    }
}
```

---

### 4.1 Створення інвойсу логістики

**post** `/balance-logistic/invoice`

<p>Створення інвойсу логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **amount** `Number` **_(обов'язково)_** - <p>Сума поповнення. <br>При поповненні балансу задається вручну.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **InvoiceBillingModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойсу</p>
- **InvoiceBillingModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceBillingStatuses">Статус рахунку</a></p>
- **InvoiceBillingModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceBillingModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для оплати інвойсу</p>
- **InvoiceBillingModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceBillingModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceBillingModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceBillingModel.evo_payment_allowed** `Number` **_(обов'язково)_** - <p>Можливість оплати карткою</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 1,
        "status": 2,
        "type": "BILL10",
        "payment_url": null,
        "number": "РЗЛ-00002091",
        "date_of_invoice": "2023-12-12 10:47:44",
        "amount": 1,
        "evo_payment_allowed": true
    }
}
```

---

### 3 Експорт у XLSX транзакцій логістики

**get** `/balance-logistic/export`

<p>Завантажити файл експорту транзакцій логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **operation_id** `Integer` _(опціонально)_ - <p>ID операції</p>
- **operation_type** `Integer` _(опціонально)_ - <p>Тип операції</p>
- **order_id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **ttn** `String` _(опціонально)_ - <p>ТТН</p>
- **created_from** `String` _(опціонально)_ - <p>Дата операції: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата операції: до</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл транзакцій логістики (.xlsx)</p>

---

### 2 Баланс логістики продавця

**get** `/balance-logistic/balance`

<p>Баланс логістики продавця</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": {
        "balance": 520.02,
    }
}
```

---

### 1.1 Отримання операцій по балансу логістики

**get** `/balance-logistic/search`

<p>Отримання операцій по балансу логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **operation_id** `Integer` _(опціонально)_ - <p>ID операції</p>
- **operation_type** `Integer` _(опціонально)_ - <p>Тип операції</p>
- **order_id** `String` _(опціонально)_ - <p>ID замовлення</p>
- **ttn** `String` _(опціонально)_ - <p>ТТН</p>
- **created_from** `String` _(опціонально)_ - <p>Дата операції: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата операції: до</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` _(опціонально)_ - <p>Field sorting +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **operation_id** `Integer` **_(обов'язково)_** - <p>ID операції</p>
- **operation_type** `Integer` **_(обов'язково)_** - <p>Тип операції</p>
- **order_id** `String` **_(обов'язково)_** - <p>ID замовлення</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **ttn** `String` **_(обов'язково)_** - <p>ТТН</p>
- **transaction_ts** `Date` **_(обов'язково)_** - <p>Дата операції</p>
- **debit** `Number` **_(обов'язково)_** - <p>Списання</p>
- **credit** `Number` **_(обов'язково)_** - <p>Начислення</p>
- **balance** `Number` **_(обов'язково)_** - <p>Баланс</p>
- **operation_type_title** `String` **_(обов'язково)_** - <p>Назва типу операції</p>
- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: logisticBalances[] }</p>
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
        "logisticBalances": [
            {
                "operation_id": 96978565,
                "operation_type": 35,
                "order_id": null,
                "item_id": null,
                "ttn": null,
                "transaction_ts": "2022-09-27 17:16:07",
                "balance": -1000149.85,
                "debit": 0,
                "credit": 1,
                "operation_type_title": "Поповнення рахунку"
            }
        ],
        "_meta": {
           "totalCount": "1342",
            "pageCount": 68,
            "currentPage": 2,
            "perPage": 20
        }
    }
}
```

---

### 4.3 Файл рахунку логістики

**get** `/balance-logistic/invoices/download-invoice/{id}`

<p>Файл рахунку логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID рахунку логістики</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл рахунку</p>

---

### 4.2 Рахунки на оплату логістики

**get** `/balance-logistic/invoices/search`

<p>Рахунки на оплату логістики</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **number** `String` _(опціонально)_ - <p>Номер рахунку логістики</p>
- **amount** `Integer` _(опціонально)_ - <p>Сума виставленого рахунку</p>
- **status** `Integer` _(опціонально)_ - <p>Статус рахунку</p>
- **created_from** `String` _(опціонально)_ - <p>Дата виставлення рахунку: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата виставлення рахунку: до</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` _(опціонально)_ - <p>Field sorting +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **invoices** `Object[]` **_(обов'язково)_** - 
- **InvoiceBillingModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойсу</p>
- **InvoiceBillingModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceBillingStatuses">Статус рахунку</a></p>
- **InvoiceBillingModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceBillingModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для оплати інвойсу</p>
- **InvoiceBillingModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceBillingModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceBillingModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceBillingModel.evo_payment_allowed** `Number` **_(обов'язково)_** - <p>Можливість оплати карткою</p>
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
        "invoices": [
            {
                "id": 33,
                "status": 1,
                "type": "BILL10",
                "payment_url": null,
                "number": "МП-00000033",
                "date_of_invoice": "2023-08-28 11:27:43",
                "amount": 123,
                "evo_payment_allowed": false
            }
        ],
 "_meta":
     {
         "totalCount": 31,
         "pageCount": 2,
         "currentPage": 1,
         "perPage": 20
     }
}}
```

---

### 4.4 Фільтри для пошуку інвойсів логістики

**get** `/balance-logistic/invoices/search-data`

<p>Фільтри для пошуку інвойсів логістики</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { statuses: statuses[], } }</p>
- **statuses** `String` **_(обов'язково)_** - <p>Статус рахунку</p>

#### Приклад відповіді

```json
  "success": true,
  "content": {
        "statuses": [
            {
                "id": 1,
                "name": "Сплачено"
            },
            {
                "id": 2,
                "name": "Чекає на оплату"
            }
        ]
    }
}
```

---

