# RozetkaPayModule

### 1.1 Пошук RozetkaPay транзакцій

**get** `/rozetka-pay-transactions/search`

<p>Пошук RozetkaPay транзакцій</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **method** `Integer` _(опціонально)_ - <p>Тип операції</p>
- **status** `Integer` _(опціонально)_ - <p>Статус операції</p>
- **pay_way** `Integer` _(опціонально)_ - <p>Спосіб оплати</p>
- **processed_at_from** `Date` _(опціонально)_ - <p>Дата списання від</p>
- **processed_at_to** `Date` _(опціонально)_ - <p>Дата списання до</p>
- **invoice_id** `String` _(опціонально)_ - <p>ID платежа <br><i>від трьох символів</i></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID операції</p>
- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **card_mask** `Integer` **_(обов'язково)_** - <p>Маска карти</p>
- **merchant_fee_amount** `Number` **_(обов'язково)_** - <p>Комісія</p>
- **method** `Integer` **_(обов'язково)_** - <p>Тип операції</p>
- **method_title** `String` **_(обов'язково)_** - <p>Назва типа операції</p>
- **order_description** `String` **_(обов'язково)_** - <p>Призначення платежа</p>
- **pay_way** `Integer` **_(обов'язково)_** - <p>Спосіб оплати</p>
- **pay_way_title** `String` **_(обов'язково)_** - <p>Назва способа оплати</p>
- **payment_amount** `Number` **_(обов'язково)_** - <p>Сума списання</p>
- **payment_original_amount** `Number` **_(обов'язково)_** - <p>Сума замовлення</p>
- **payment_recipient_amount** `Number` **_(обов'язково)_** - <p>Сума до зачислення</p>
- **processed_at** `Date` **_(обов'язково)_** - <p>Дата списання коштів</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус операції</p>
- **status_title** `String` **_(обов'язково)_** - <p>Назва статуса операції</p>
- **invoice_id** `String` **_(обов'язково)_** - <p>ID платежа</p>
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
        "models": [
            {
                "id": 12,
                "order_id": 1234567,
                "card_mask": "12345******6789",
                "merchant_fee_amount": 14.01,
                "method": 4,
                "method_title": "Списання коштів",
                "order_description": "Оплата за товар згідно замовлення №793196444 на суму 123 грн, в т.ч. ПДВ",
                "pay_way": 1,
                "pay_way_title": "Онлайн оплата карткою",
                "payment_amount": 123,
                "payment_original_amount": 123,
                "payment_recipient_amount": null,
                "processed_at": "2023-12-04 10:33:11",
                "invoice_id": "12345",
                "status": 2,
                "status_title": "В очікуванні"
            }
        ],
        "_meta": {
            "totalCount": 20,
            "pageCount": 2,
            "currentPage": 1,
            "perPage": 10
        }
    }
}
```

---

### 1.2 Отримати дані для пошука RozetkaPay транзакцій

**get** `/rozetka-pay-transactions/search-data`

<p>Отримати дані для пошука RozetkaPay транзакцій</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **methods** `Array` **_(обов'язково)_** - <p>Типи операції</p>
- **methods.method** `Integer` **_(обов'язково)_** - <p>Тип операції</p>
- **methods.method_title** `String` **_(обов'язково)_** - <p>Назва типа операції</p>
- **pay_ways** `Array` **_(обов'язково)_** - <p>Способи оплати</p>
- **pay_ways.pay_way** `Integer` **_(обов'язково)_** - <p>Спосіб оплати</p>
- **pay_ways.pay_way_title** `String` **_(обов'язково)_** - <p>Назва способа оплати</p>
- **statuses** `Array` **_(обов'язково)_** - <p>Статуси</p>
- **statuses.status** `Integer` **_(обов'язково)_** - <p>Статус операції</p>
- **statuses.status_title** `String` **_(обов'язково)_** - <p>Назва статуса операції</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "methods": [
            {
                "method": 1,
                "method_title": "Утримання суми транзакції"
            },
            {
                "method": 4,
                "method_title": "Списання коштів"
            }
        ],
        "pay_ways": [
            {
                "pay_way": 1,
                "pay_way_title": "Онлайн оплата карткою"
            },
            {
                "pay_way": 4,
                "pay_way_title": "Онлайн оплата Google Pay"
            },
            {
                "pay_way": 5,
                "pay_way_title": "Онлайн оплата Apple Pay"
            }
        ],
        "statuses": [
            {
                "status": 2,
                "status_title": "Успішно"
            },
            {
                "status": 3,
                "status_title": "Невдало"
            }
        ]
    }
}
```

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": null
}
```

---

