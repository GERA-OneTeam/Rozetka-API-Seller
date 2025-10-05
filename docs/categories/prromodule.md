# PrroModule

### 3.4 Відображення чека

**get** `/prro/receipt/{order_id}`

<p>Відображення (друк) чека</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, за яким створюється чек</p>
- **type** `String` _(опціонально)_ - <p>Тип документа</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **url** `String` **_(обов'язково)_** - <p>Посилання на документ</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "url": "https://kasa/c/TEST_123"
 }
}
```

---

### 3.3 Статус фіскалізації чека

**get** `/prro/receipt-status/{order_id}`

<p>Статус чека</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, за яким створюється чек</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **status** `Integer` **_(обов'язково)_** - <p>Статус фіскалізації чека <br></p> <ul> <li>0 - чек не фіскалізований</li> <li>1 - чек фіскалізований</li> </ul>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "status": 1
 }
}
```

---

### 2.3 Отримання статусу зміни

**get** `/prro/shift-status`

<p>Отримання статусу зміни</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **status** `Integer` **_(обов'язково)_** - <p>Статус зміни<br></p> <ul> <li>0 - зміна закрита</li> <li>1 - зміна відкрита</li> </ul>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
 "status": 0
 }
}
```

---

### 1.4 Отримання статусу підключення ПРРО

**get** `/prro/status`

<p>Отримання статусу підключення ПРРО</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **prro_status** `Integer` **_(обов'язково)_** - <p>Статус сервісу ПРРО<br></p> <ul> <li>0 - сервіс не підключений</li> <li>1 - сервіс підключений</li> </ul>
- **prro_service_name** `String` **_(обов'язково)_** - <p>Назва сервісу ПРРО</p>
- **shift_status** `Integer` **_(обов'язково)_** - <p>Статус зміни<br></p> <ul> <li>0 - зміна закрита</li> <li>1 - зміна відкрита</li> </ul>
- **prro_service** `String` **_(обов'язково)_** - <p>ID сервісу</p>
- **tax_code** `String` **_(обов'язково)_** - <p>Код податкової групи</p>
- **tax_name** `String` **_(обов'язково)_** - <p>Назва податкової групи</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "prro_status": 1,
     "prro_service": "vchasno",
     "prro_service_name": "Вчасно.Каса",
     "shift_status": 0,
     "tax_code": "8",
     "tax_name": "ПДВ 20% + ПФ 7.5%"

 }
}
```

---

### 4. Відображення операцій з нац кешбеку

**get** `/prro/transaction-details`

<p>Відображення операцій з нац кешбеку</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення (Обов'язковий, якщо не передали invoice_id)</p>
- **invoice_id** `String` **_(обов'язково)_** - <p>ID рахунку (Обов'язковий, якщо не передали order_id) <br> <i> Можна передати одне значення або кілька через кому </i></p>
- **rrn** `String` _(опціонально)_ - <p>Ідентифікатор транзакції</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **transaction-details** `Object` **_(обов'язково)_** - <p>TransactionDetailsModel</p>
- **transaction-details.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **transaction-details.invoice_id** `Integer` **_(обов'язково)_** - <p>ID рахунку</p>
- **transaction-details.merchant_id** `String` **_(обов'язково)_** - <p>ID марчанту</p>
- **transaction-details.sum_transaction** `Number` **_(обов'язково)_** - <p>Cума транзакції</p>
- **transaction-details.terminal_id** `String` **_(обов'язково)_** - <p>Ідентифікатор платіжного пристрою</p>
- **transaction-details.mask** `String` **_(обов'язково)_** - <p>Маска</p>
- **transaction-details.rrn** `String` **_(обов'язково)_** - <p>Ідентифікатор транзакції</p>
- **transaction-details.auth_code** `String` **_(обов'язково)_** - <p>Код авторизації</p>
- **transaction-details.payment_type_name** `String` **_(обов'язково)_** - <p>Назва банку</p>
- **transaction-details.pay_system** `String` **_(обов'язково)_** - <p>Назва платіжної системи</p>
- **transaction-details.created_at** `String` **_(обов'язково)_** - <p>Дата створення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "transaction-details": [
            {
                "order_id": 813396601,
                "invoice_id": 83581,
                "merchant_id": "111",
                "sum_transaction": "11.00",
                "terminal_id": "33",
                "mask": "11",
                "rrn": "3333",
                "auth_code": null,
                "payment_type_name": null,
                "pay_system": null,
                "created_at": "2024-11-19 09:45:49"
            }
        ]
    }
}
```

---

### 1.1 Авторизація у Checkbox

**post** `/prro/checkbox/sign-in`

<p>Авторизація у Checkbox</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **login** `String` **_(обов'язково)_** - <p>Логін</p>
- **password** `String` **_(обов'язково)_** - <p>Пароль</p>
- **license_key** `String` **_(обов'язково)_** - <p>Ключ ліцензії</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Результат запису даних авторизації</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": true
}
```

---

### 1.2.1 Авторизація ручного управління

**post** `/prro/manual/sign-in`

<p>Авторизація ручного управління</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Авторизація ручного управління</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": true
}
```

---

### 2.2 Закрити зміну

**post** `/prro/close-shift`

<p>Закрити зміну</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Зміна закрита</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": true
}
```

---

### 3.1 Додавання фіскального чеку

**post** `/prro/create-receipt`

<p>Додавання фіскального чеку</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, за яким створюється чек</p>
- **payment_method_type** `String` _(опціонально)_ - <p>Метод оплати чека</p>
- **url** `String` _(опціонально)_ - <p>url для ручного керування чеком</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Чек створений</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": true
}
```

---

### 1.3 Вихід із ПРРО

**post** `/prro/logout`

<p>Вихід із ПРРО</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Результат виходу із ПРРО</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": true
}
```

---

### 2.1 Відкрити зміну

**post** `/prro/open-shift`

<p>Відкрити зміну</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Зміна відкрита</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": true
}
```

---

### 1.2 Авторизація у Вчасно-Каса

**post** `/prro/vchasno/sign-in`

<p>Авторизація у Вчасно-Каса</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **token** `String` **_(обов'язково)_** - <p>Токен</p>
- **fiscal_number** `String` _(опціонально)_ - <p>Фіскальний номер</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Результат запису даних авторизації</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": true
}
```

---

### 3.2 Зміни чека

**put** `/prro/change-receipt/{order_id}`

<p>Створення чека</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, за яким створюється чек</p>

**Request Body Parameters:**

- **url** `String` **_(обов'язково)_** - <p>Посилання на чек</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **content** `Boolean` **_(обов'язково)_** - <p>Чек змінено</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": true
}
```

---

### 4.1 Отримання даних для пошуку

**get** `/prro/search-data`

<p>Отримання даних для пошуку</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **tax_groups** `Array` **_(обов'язково)_** - <p>Список податкових груп</p>
- **tax_groups.tax_code** `String` **_(обов'язково)_** - <p>Код податкової групи</p>
- **tax_groups.tax_name** `String` **_(обов'язково)_** - <p>Назва податкової групи</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "tax_groups": [
            {
                "tax_code": 1,
                "tax_name": "ПДВ 20%"
            },
            {
                "tax_code": 2,
                "tax_name": "Без ПДВ"
            }
        ]
    }
}
```

---

### 4.3 Оновлення даних податкової групи для Чекбокс

**put** `/prro/checkbox-tax-settings`

<p>Оновлення даних податкової групи для Чекбокс</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **tax_code** `String` **_(обов'язково)_** - <p>Код податкової групи</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **service_name** `String` **_(обов'язково)_** - <p>Назва сервісу</p>
- **tax_code** `String` **_(обов'язково)_** - <p>Код податкової групи</p>
- **tax_name** `String` **_(обов'язково)_** - <p>Назва податкової групи</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "service_name": "checkbox",
        "tax_code": "7",
        "tax_name": "Не є об'єктом ПДВ"
    }
}
```

---

### 4.2 Оновлення даних податкової групи для Вчасно

**put** `/prro/vchasno-tax-settings`

<p>Оновлення даних податкової групи для Вчасно</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **tax_code** `String` **_(обов'язково)_** - <p>Код податкової групи</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **service_name** `String` **_(обов'язково)_** - <p>Назва сервісу</p>
- **tax_code** `String` **_(обов'язково)_** - <p>Код податкової групи</p>
- **tax_name** `String` **_(обов'язково)_** - <p>Назва податкової групи</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "service_name": "vchasno",
        "tax_code": "7",
        "tax_name": "Не є об'єктом ПДВ"
    }
}
```

---

