# MarketPaymentMethods

### 2 Активація методу оплати

**put** `/market-payment-methods/activate/{paymentMethodId}`

<p>Активація методу оплати доступного продавцеві</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **paymentMethodId** `Integer` **_(обов'язково)_** - <p>ID платіжного методу</p>

**Request Body Parameters:**

- **public_key** `String` **_(обов'язково)_** - <p>Публічний ключ</p>
- **private_key** `String` **_(обов'язково)_** - <p>Приватний ключ</p>
- **widget_token** `String` _(опціонально)_ - <p>Токен віджета <br> <i>є обов'язковим для деяких платіжних методів</i></p>
- **endpoints_key** `String` _(опціонально)_ - <p>Ключ ендпойнта <br> <i>є обов'язковим для деяких платіжних методів</i></p>
- **pos_id** `String` _(опціонально)_ - <p>POS ID <br> <i>є обов'язковим для деяких платіжних методів</i></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор платіжного методу</p>
- **name** `String` **_(обов'язково)_** - <p>Назва платіжного методу</p>
- **description** `String` **_(обов'язково)_** - <p>Опис платіжного методу</p>
- **must_has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **legal_person** `Object` **_(обов'язково)_** - <p>Юр.особа продавця, до якої підв'язаний даний метод оплати<br> Об'єкт <a href="#api-Models-MarketLegalPerson">MarketLegalPerson</a></p>
**ExtraFields:**

- **available_assign_legal_person** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо назначити юр.особу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 4524,
        "name": "Оплата картой Visa/MasterCard (TRNZ)",
        "description": "Самый простой и быстрый способ оплатить услуги банковской картой Visa/MasterCard.",
        "must_has_keys": true,
        "has_keys": true,
        "status": 1,
        "legal_person":{
             "id": 1,
             "full_name": "Test Test FOP",
             "status": "activated",
             "status_title": "Активный"
        },
        "available_assign_legal_person": true
    }
}
```

---

### 3 Деактивація методу оплати

**put** `/market-payment-methods/deactivate/{paymentMethodId}`

<p>Деактивація методу оплати доступного продавцеві</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **paymentMethodId** `Integer` **_(обов'язково)_** - <p>ID платіжного методу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор платіжного методу</p>
- **name** `String` **_(обов'язково)_** - <p>Назва платіжного методу</p>
- **description** `String` **_(обов'язково)_** - <p>Опис платіжного методу</p>
- **must_has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **legal_person** `Object` **_(обов'язково)_** - <p>Юр.особа продавця, до якої підв'язаний даний метод оплати<br> Об'єкт <a href="#api-Models-MarketLegalPerson">MarketLegalPerson</a></p>
**ExtraFields:**

- **available_assign_legal_person** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо назначити юр.особу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 4524,
        "name": "Оплата картой Visa/MasterCard (TRNZ)",
        "description": "Самый простой и быстрый способ оплатить услуги банковской картой Visa/MasterCard.",
        "must_has_keys": true,
        "has_keys": true,
        "status": 1,
        "legal_person":{
             "id": 1,
             "full_name": "Test Test FOP",
             "status": "activated",
             "status_title": "Активный"
        },
        "available_assign_legal_person": true
    }
}
```

---

### 1 Список платіжних методів

**get** `/market-payment-methods/list`

<p>Список доступних продавцеві платіжних методів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>Ідентифікатор платіжного методу</p>
- **must_has_keys** `Boolean` _(опціонально)_ - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **is_auto_hold** `Boolean` _(опціонально)_ - <p>Статус блокування двостадійної оплати</p>
- **has_keys** `Boolean` _(опціонально)_ - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **status** `Number` _(опціонально)_ - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **for_autohold** `Boolean` _(опціонально)_ - <p>Ознака, чи можливо керувати двостадійною оплатою</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;payment_methods&quot;: MarketPaymentMethodResponseModel[], } }</p>
- **has_active_dc** `Boolean` **_(обов'язково)_** - <p>Ознака чи активний даний метод оплати в будь-якій з активних комбінацій доставки</p>
- **for_autohold** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо керувати двостадійною оплатою</p>
- **id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор платіжного методу</p>
- **name** `String` **_(обов'язково)_** - <p>Назва платіжного методу</p>
- **description** `String` **_(обов'язково)_** - <p>Опис платіжного методу</p>
- **must_has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **legal_person** `Object` **_(обов'язково)_** - <p>Юр.особа продавця, до якої підв'язаний даний метод оплати<br> Об'єкт <a href="#api-Models-MarketLegalPerson">MarketLegalPerson</a></p>
**ExtraFields:**

- **available_assign_legal_person** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо назначити юр.особу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":{
     "payment_methods": [
             {
                 "id": 1,
                 "name": "Наличная",
                 "description": "Оплата наличными производится исключительно в национальной валюте.",
                 "is_auto_hold": false,
                 "must_has_keys": false,
                 "has_keys": false,
                 "is_auto_hold": false,
                 "status": 1,
                 "legal_person": null,
                 "has_active_dc": true
             },
             {
                 "id": 2,
                 "name": "Безналичными для физических лиц",
                 "description": "Мы являемся плательщиками НДС и налога на прибыль на общих основаниях. Счет может быть отправлен по электронной  почте или факсу",
                 "is_auto_hold": false,
                 "must_has_keys": false,
                 "has_keys": false,
                 "is_auto_hold": false,
                 "status": 1,
                 "legal_person":{
                     "id": 1,
                     "full_name": "Test Test FOP",
                     "status": "activated",
                     "status_title": "Активный"
                 },
                 "has_active_dc": true
             },
             {
                 "id": 4682,
                 "name": "Безналичный для юридических и физических лиц",
                 "description": null,
                 "is_auto_hold": false,
                 "must_has_keys": false,
                 "has_keys": false,
                 "is_auto_hold": true,
                 "status": 1,
                 "legal_person": null,
                 "has_active_dc": true
             }
         ]
     }
}
```

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 4524,
        "name": "Оплата картой Visa/MasterCard (TRNZ)",
        "description": "Самый простой и быстрый способ оплатить услуги банковской картой Visa/MasterCard.",
        "must_has_keys": true,
        "has_keys": true,
        "status": 1,
        "legal_person":{
             "id": 1,
             "full_name": "Test Test FOP",
             "status": "activated",
             "status_title": "Активный"
        },
        "available_assign_legal_person": true
    }
}
```

---

### 5 Двостадійна оплата

**put** `/market-payment-methods/set-auto-hold/{paymentMethodId}`

<p>Блокування коштів на картці клієнта для подальшого списання</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **paymentMethodId** `Integer` **_(обов'язково)_** - <p>ID метода оплати</p>

**Request Body Parameters:**

- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор платіжного методу</p>
- **name** `String` **_(обов'язково)_** - <p>Назва платіжного методу</p>
- **description** `String` **_(обов'язково)_** - <p>Опис платіжного методу</p>
- **must_has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **legal_person** `Object` **_(обов'язково)_** - <p>Юр.особа продавця, до якої підв'язаний даний метод оплати<br> Об'єкт <a href="#api-Models-MarketLegalPerson">MarketLegalPerson</a></p>
**ExtraFields:**

- **available_assign_legal_person** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо назначити юр.особу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 1,
       "name": "Готівкова",
       "description": "Оплата готівкою здійснюється виключно у національній валюті.",
       "is_auto_hold": true,
       "must_has_keys": false,
       "has_keys": false,
       "status": 1
   }
}
```

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 4524,
        "name": "Оплата картой Visa/MasterCard (TRNZ)",
        "description": "Самый простой и быстрый способ оплатить услуги банковской картой Visa/MasterCard.",
        "must_has_keys": true,
        "has_keys": true,
        "status": 1,
        "legal_person":{
             "id": 1,
             "full_name": "Test Test FOP",
             "status": "activated",
             "status_title": "Активный"
        },
        "available_assign_legal_person": true
    }
}
```

---

### 4 Перегляд методу оплати

**get** `/market-payment-methods/{paymentMethodId}`

<p>Перегляд методу оплати доступного продавцеві</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **paymentMethodId** `Integer` **_(обов'язково)_** - <p>ID платіжного методу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор платіжного методу</p>
- **name** `String` **_(обов'язково)_** - <p>Назва платіжного методу</p>
- **description** `String` **_(обов'язково)_** - <p>Опис платіжного методу</p>
- **must_has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **legal_person** `Object` **_(обов'язково)_** - <p>Юр.особа продавця, до якої підв'язаний даний метод оплати<br> Об'єкт <a href="#api-Models-MarketLegalPerson">MarketLegalPerson</a></p>
**ExtraFields:**

- **available_assign_legal_person** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо назначити юр.особу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 4524,
        "name": "Оплата картой Visa/MasterCard (TRNZ)",
        "description": "Самый простой и быстрый способ оплатить услуги банковской картой Visa/MasterCard.",
        "must_has_keys": true,
        "has_keys": true,
        "status": 1,
        "legal_person":{
             "id": 1,
             "full_name": "Test Test FOP",
             "status": "activated",
             "status_title": "Активный"
        },
        "available_assign_legal_person": true
    }
}
```

---

