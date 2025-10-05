# SlaModule

### Блокування/Активація кур'єра

**put** `/sla/delivery-service-courier/{id}/update-status`

<p>Редагування статусу реалізовано як перемикач. <br>Якщо у кур'єра був статус <code>&quot;Активний&quot;</code> - запит змінить статус на <code>&quot;Заблокований&quot;</code>, і навпаки. <br><sup>*Важливо! Міняти статус можна тільки кур'єра, створеним продавцем</sup> <br>Якщо кур'єр задіяний в активних комбінаціях, і інших активних кур'єрів немає - заблокувати кур'єра не можна. Необхідно спершу заблокувати комбінацію.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID кур'єра магазину</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: DeliveryServiceCourier }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID кур'єра</p>
- **title** `String` **_(обов'язково)_** - <p>Назва кур'єра</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID кур'єра</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус кур'єра</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success": true,
    "content": {
         "id": 110124,
        "mdm_id": "3f3f560a-fc73-47f8-9a5c-bc932f754de9",
        "title": "Курьер Testing Market (Сквира)",
        "status": 1,
        "can_edit": true,
        "locality": {
            "id": 136,
            "mdm_id": "2ba4e3d0-2d69-495c-849d-3c7e3fac0b76",
            "name": "Сквира, Білоцерківський р-н, Київська обл.(Місто)",
            "region_title": "Київська",
            "status": 1
        }
    }
}
```

---

### Блокування/Активація пункту самовивозу

**put** `/sla/delivery-service-pickup/{id}/update-status`

<p>Редагування статусу реалізовано як перемикач. <br>Якщо у пункту самовивозу був статус <code>&quot;Активний&quot;</code> - запит змінить статус на <code>&quot;Заблокований&quot;</code>, і навпаки. <br><sup>*Важливо! Міняти статус можна тільки пунктам самовивозу, створеним продавцем</sup></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID пункту самовивозу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: DeliveryServicePickup }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **title** `String` **_(обов'язково)_** - <p>Назва пункту самовивозу</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID служби доставки</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус пункту самовивозу</p>
- **street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
        "id": 9099269,
        "title": "Из магазина Testing Market (Киев)",
        "mdm_id": "ce517c68-87ab-4294-b727-a2acc37fd630",
        "status": 1,
        "street": "Конча-Заспінська вул.",
        "house": "12",
        "latitude": "41.34534",
        "longitude": "41.90797",
        "can_edit": true,
        "locality": {
            "id": 1,
            "mdm_id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
            "name": "Київ",
            "region_title": "Київ",
            "status": 1
        }
    }
}
```

---

### Створення сла

**post** `/sla/create-sla`

<p>Створення сла</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **title** `String` **_(обов'язково)_** - <p>Назва</p>
- **combinations** `Object` **_(обов'язково)_** - <p>Комбінації делівері сервісів, які треба підключити до сла</p>
- **combinations.mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>ID служби доставки</p>
- **combinations.mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>ID методу доставки</p>
- **combinations.mdm_pickup_type_id** `String` _(опціонально)_ - <p>ID типу точки самовивозу (для кур'єрів не треба передавати)</p>
- **combinations.payment_methods** `Object` **_(обов'язково)_** - <p>Список методів оплат</p>
- **combinations.payment_methods.payment_method_id** `Object` **_(обов'язково)_** - <p>ID методу оплати</p>
- **combinations.payment_methods.number_of_payments** `Object` _(опціонально)_ - <p>Кількість платежів (треба передавати для методів оплати частинами)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **combinationErrors** `Object` **_(обов'язково)_** - <p>Можливі помилки збереження комбінацій</p>
- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:Object }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "combinationErrors": null
    }
}
```

---

### Створення кур'єра

**post** `/sla/delivery-service-courier/create`

<p>Нові кур'єри підв'язуються до індивідуального сервісу доставки магазину.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **locality_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **title** `String` **_(обов'язково)_** - <p>Назва кур'єра</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: DeliveryServiceCourier }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID кур'єра</p>
- **title** `String` **_(обов'язково)_** - <p>Назва кур'єра</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID кур'єра</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус кур'єра</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success": true,
    "content": {
         id": 11015,
        "mdm_id": null,
        "title": "test2",
        "status": 0,
        "can_edit": true,
        "locality": {
            "id": 270,
            "mdm_id": "6f4d79ec-87d0-44ba-a3a6-ceeef4b05823",
            "name": "Карпилівка, Камінь-Каширський р-н, Волинська обл.(Село)",
            "region_title": "Волинська",
            "status": 1
        }
    }
}
```

---

### Створення пункту самовивозу

**post** `/sla/delivery-service-pickup/create`

<p>Нові пункти самовивозу підв'язуються до індивідуального сервісу доставки магазину.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **locality_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **title** `String` **_(обов'язково)_** - <p>Назва пункту самовивозу</p>
- **street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **house** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **pickup_number** `String` _(опціонально)_ - <p>Номер точки самовивозу (або внутрішній номер в системі продавця)</p>
- **ext_id** `String` _(опціонально)_ - <p>ID для CRM систем</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:DeliveryServicePickup }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **title** `String` **_(обов'язково)_** - <p>Назва пункту самовивозу</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID служби доставки</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус пункту самовивозу</p>
- **street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
     "id": 9436315,
     "title": "З магазину Testing Market (Київ)",
     "mdm_id": "28f9e72b-88b7-405d-a78b-63fa229bda71",
     "status": 1,
     "street": "Петра Дорошенка вул.",
     "house": "12",
     "latitude": "41.4038",
     "longitude": "41.40338",
     "can_edit": true,
     "locality": {
              "id": 1,
              "mdm_id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
              "name": "Київ",
              "region_title": "Київ",
              "status": 1
      }
   }
}
```

---

### Редагування сла

**put** `/sla/update-sla`

<p>Якщо делівері сервіс підключений до сла і його не передати в запиті, то він просто не буде відредагований</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **title** `String` **_(обов'язково)_** - <p>Назва</p>
- **roz_id** `String` **_(обов'язково)_** - <p>ID сла</p>
- **combinations** `Object` **_(обов'язково)_** - <p>Комбінації делівері сервісів, які треба підключити до сла</p>
- **combinations.mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>ID служби доставки</p>
- **combinations.mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>ID методу доставки</p>
- **combinations.mdm_pickup_type_id** `String` _(опціонально)_ - <p>ID типу точки самовивозу (для кур'єрів не треба передавати)</p>
- **combinations.roz_id** `String` _(опціонально)_ - <p>ID комбінації (для нової комбінації не треба передавати, або можна залишити пустим)</p>
- **combinations.status** `Integer` **_(обов'язково)_** - <p>Статус комбінації</p>
- **combinations.payment_methods** `Object` **_(обов'язково)_** - <p>Список методів оплат</p>
- **combinations.payment_methods.payment_method_id** `Object` **_(обов'язково)_** - <p>ID методу оплати</p>
- **combinations.payment_methods.number_of_payments** `Object` _(опціонально)_ - <p>Кількість платежів (треба передавати для методів оплати частинами)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **combinationErrors** `Object` **_(обов'язково)_** - <p>Можливі помилки збереження комбінацій</p>
- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:Object }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "combinationErrors": null
    }
}
```

---

### Пошук по точках самовивозу

**get** `/sla/delivery-service-pickup/search`

<p>У список виводяться тільки власні точки самовивозу. <br> <i>Переглянути точки зовнішніх служб доставки продавець не може</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID служби доставки</p>
- **mdm_id** `String` _(опціонально)_ - <p>Mdm ID служби доставки</p>
- **locality_id** `Integer` _(опціонально)_ - <p>ID населеного пункту</p>
- **status** `Integer` _(опціонально)_ - <p>Статус пункту самовивозу</p>
- **locality_status** `Integer` _(опціонально)_ - <p>Статус населеного пункту</p>
- **house** `String` _(опціонально)_ - <p>Будинок</p>
- **street** `String` _(опціонально)_ - <p>Вулиця</p>
- **title** `String` _(опціонально)_ - <p>Назва пункту самовивозу</p>
- **locality_name** `String` _(опціонально)_ - <p>Назва населеного пункту</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;deliveryServicePickups&quot;: DeliveryServicePickup[], &quot;_meta&quot;: MetaResponse } }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **title** `String` **_(обов'язково)_** - <p>Назва пункту самовивозу</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID служби доставки</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус пункту самовивозу</p>
- **street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "deliveryServicePickups":[
            {
              "id": 9436315,
              "title": "З магазину Testing Market (Київ)",
              "mdm_id": "28f9e72b-88b7-405d-a78b-63fa229bda71",
              "status": 1,
              "street": "Петра Дорошенка вул.",
              "house": "12",
              "latitude": "41.4038",
              "longitude": "41.40338",
              "locality": {
                  "id": 1,
                  "mdm_id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
                  "name": "Київ",
                  "region_title": "Київ",
                  "status": 1
              }
          }
        ],
        "_meta":{
            "totalCount":1,
            "pageCount":1,
            "currentPage":1,
            "perPage":20
        }
    }
}
```

---

### Пошук методів оплати

**get** `/sla/delivery-payment-method/search`

<p>Пошук методів оплати</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **payment_method_id** `Integer` _(опціонально)_ - <p>ID методу оплати</p>

**Request Body Parameters:**

- **sla_roz_id** `Integer` _(опціонально)_ - <p>Sla ID (якщо не передати, то шукаємо по стандартному sla магазину)</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **payment_method_id** `Integer` **_(обов'язково)_** - <p>ID методу оплати</p>
- **title** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус методу оплати</p>
- **isAvailableConnect** `Boolean` **_(обов'язково)_** - <p>Доступність підключення</p>
- **deliveryCombinations** `Object` **_(обов'язково)_** - <p>Комбінації доставки в рамках методу оплати</p>
- **deliveryCombination.mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>Id служби доставки</p>
- **deliveryCombination.mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>Id методу доставки</p>
- **deliveryCombination.mdm_pickup_type_id** `String` **_(обов'язково)_** - <p>ID типу точки самовивозу</p>
- **deliveryCombination.status** `Integer` **_(обов'язково)_** - <p>Статус доставки</p>
- **deliveryCombination.isAvailableConnect** `Boolean` **_(обов'язково)_** - <p>Доступність підключення</p>
- **partPayMethods** `Object` **_(обов'язково)_** - <p>Доступні методи оплати для оплати частинами (для інших типів повертаємо null)</p>
- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;deliveryPaymentMethods&quot;: DeliveryPaymentMethods[], &quot;_meta&quot;: MetaResponse }</p>
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
       "deliveryPaymentMethods": [
            {
                "payment_method_id": 5405,
                "title": "Apple Pay",
                "status": 0,
                "isAvailableConnect": true,
                "deliveryCombinations": [
                    {
                        "mdm_service_delivery_id": "5498e0a0-ae1b-488c-89d5-3ea6db053edf",
                        "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                        "mdm_pickup_type_id": "1f165587-2c5c-4446-9ae6-f6ce21371240",
                        "status": 0,
                        "isAvailableConnect": false
                    },
                    {
                        "mdm_service_delivery_id": "5498e0a0-ae1b-488c-89d5-3ea6db053edf",
                        "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                        "mdm_pickup_type_id": "1f165587-2c5c-4446-9ae6-f6ce21371240",
                        "status": 1,
                        "isAvailableConnect": true
                    },
                ],
                "partPayMethods": null
            },
            {
                "payment_method_id": 4552,
                "title": "Оплата частинами на 4 платежі",
                "status": 0,
                "isAvailableConnect": false,
                "deliveryCombinations": [
                    {
                        "mdm_service_delivery_id": "5498e0a0-ae1b-488c-89d5-3ea6db053edf",
                        "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                        "mdm_pickup_type_id": "1f165587-2c5c-4446-9ae6-f6ce21371240",
                        "status": 1,
                        "isAvailableConnect": true
                    },
                    {
                        "mdm_service_delivery_id": "5498e0a0-ae1b-488c-89d5-3ea6db053edf",
                        "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                        "status": 1,
                        "mdm_pickup_type_id": "1f165587-2c5c-4446-9ae6-f6ce21371240",
                        "isAvailableConnect": true
                    },
                ],
                "partPayMethods": [
                    {
                        "id": 4540,
                        "title": "Оплата частинами на 2 платежі",
                        "status": "active"
                    },
                    {
                        "id": 4546,
                        "title": "Оплата частинами на 3 платежі",
                        "status": "active"
                    },
                    {
                        "id": 4552,
                        "title": "Оплата частинами на 4 платежі",
                        "status": "active"
                    },
                    {
                        "id": 4558,
                        "title": "Оплата частинами на 5 платежів",
                        "status": "active"
                    },
                ]
            },
       ],
       "_meta": {
           "totalCount": 3,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 20
       }
   }
}
```

---

### Пошук служб доставки

**get** `/sla/delivery/search`

<p>Пошук служб доставки</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **roz_id** `Integer` _(опціонально)_ - <p>ID комбінації</p>
- **title** `String` _(опціонально)_ - <p>Назва комбінації</p>
- **sla_id** `Integer` _(опціонально)_ - <p>Sla ID (якщо не передати, то шукаємо по стандартному sla магазину)</p>
- **mdm_service_delivery_id** `String` _(опціонально)_ - <p>Id служби доставки</p>
- **mdm_method_delivery_id** `String` _(опціонально)_ - <p>Id методу доставки</p>
- **mdm_localities_segment_id** `String` _(опціонально)_ - <p>ID населеного пункту доставки</p>
- **mdm_pickup_type_id** `String` _(опціонально)_ - <p>Id типу точки самовивозу</p>
- **status** `Integer` _(опціонально)_ - <p>Статус комбінації</p>
- **delivery_service_type** `Integer` _(опціонально)_ - <p>Тип служби доставки (0 - служба зовнішньої доставки, 1 - власна служба доставки)</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;deliveries&quot;: Deliveries[], &quot;_meta&quot;: MetaResponse }</p>
- **roz_id** `Integer` **_(обов'язково)_** - <p>ID комбінації</p>
- **title** `String` **_(обов'язково)_** - <p>Назва комбінації</p>
- **mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>Id служби доставки</p>
- **mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>ID методу доставки</p>
- **mdm_localities_segment_id** `String` **_(обов'язково)_** - <p>ID населеного пункту доставки</p>
- **mdm_pickup_type_id** `String` **_(обов'язково)_** - <p>ID типу точки самовивозу</p>
- **mdm_pickup_type_name** `String` **_(обов'язково)_** - <p>Тип точки самовивозу</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус комбінації</p>
- **delivery_service_type** `Integer` **_(обов'язково)_** - <p>Тип служби доставки (0 - служба зовнішньої доставки, 1 - власна служба доставки)</p>
- **delivery_service_name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **delivery_service_logo** `String` **_(обов'язково)_** - <p>Лого служби доставки</p>
- **isAvailableConnect** `Boolean` **_(обов'язково)_** - <p>Доступність підключення</p>
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
       "deliveries": [
            {
                "roz_id": 68841,
                "title": "Самовывоз Нова Пошта (поштомати)",
                "mdm_service_delivery_id": "5498e0a0-ae1b-488c-89d5-3ea6db053edf",
                "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                "mdm_localities_segment_id": "eae995ea-961a-44cd-8566-e9923218e0a8",
                "mdm_pickup_type_id": "cd84ed9d-dc7c-4955-818c-4ccf0e7d2490",
                "mdm_pickup_type_name": "Поштомат",
                "status": 0,
                "isAvailableConnect": true,
                "delivery_service_name": "Нова Пошта (поштомати)",
                "delivery_service_type": 0,
                "delivery_service_logo": "https://content.rozetka.com.ua/files/vector_graphics/original/283271375.svg",
                "name": "Самовывоз Нова Пошта (поштомати)"
            },
            {
                "roz_id": 50334,
                "title": "Укрпочта",
                "mdm_service_delivery_id": "ab855495-4a4a-47ee-a069-6d54a0c05b08",
                "mdm_method_delivery_id": "dfc7ab36-e40d-4770-beeb-f0fe6aba405d",
                "mdm_localities_segment_id": "eae995ea-961a-44cd-8566-e9923218e0a8",
                "mdm_pickup_type_id": "cd84ed9d-dc7c-4955-818c-4ccf0e7d2490",
                "mdm_pickup_type_name": "Відділення",
                "status": 0,
                "isAvailableConnect": true,
                "delivery_service_name": "Нова Пошта (поштомати)",
                "delivery_service_type": 0,
                "delivery_service_logo": "https://content.rozetka.com.ua/files/vector_graphics/original/283271375.svg",
                "name": "Укрпочта"
            },
            {
                "roz_id": 50000,
                "title": "Курьер",
                "mdm_service_delivery_id": "ab855495-4a4a-47ee-a069-6d54a0c05b08",
                "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                "mdm_localities_segment_id": "eae995ea-961a-44cd-8566-e9923218e0a8",
                "mdm_pickup_type_id": "cd84ed9d-dc7c-4955-818c-4ccf0e7d2490",
                "mdm_pickup_type_name": "Магазин",
                "status": 1,
                "isAvailableConnect": true,
                "delivery_service_name": "Нова Пошта (поштомати)",
                "delivery_service_type": 1,
                "delivery_service_logo": "https://content.rozetka.com.ua/files/vector_graphics/original/283271375.svg",
                "name": "Курьер"
            }
       ],
       "_meta": {
           "totalCount": 3,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 20
       }
   }
}
```

---

### Лічильник товарів по Sla

**get** `/sla/item/counts`

<p>Лічильник товарів по Sla</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **slaIds** `String` _(опціонально)_ - <p>Список Sla ID (якщо не передавати, то повертаємо каунтер по дефолтному sla магазину) <i>Може приймати декілька значень через кому</i> <br>Приклад:<code>slaIds=14570,33972</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

**Response Body Parameters:**

- **sla_id** `Integer` **_(обов'язково)_** - <p>Sla ID</p>
- **item_counts** `Integer` **_(обов'язково)_** - <p>Кількість товарів</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": [
        {
            "sla_id": 14570,
            "item_counts": 147
        },
        {
            "sla_id": 33972,
            "item_counts": 0
        }
    ]
}
```

---

### Метод всіх можливих сервісів, методів і оплат для підключення

**get** `/sla/delivery/services`

<p>Метод всіх можливих сервісів, методів і оплат для підключення</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **service_delivery_name_uk** `String` **_(обов'язково)_** - <p>Назва сервісу доставки українською</p>
- **service_delivery_name_ru** `String` **_(обов'язково)_** - <p>Назва сервісу доставки російською</p>
- **service_delivery_name_en** `String` **_(обов'язково)_** - <p>Назва сервісу доставки англійською</p>
- **delivery_service_type** `Integer` **_(обов'язково)_** - <p>Тип служби доставки (0 - служба зовнішньої доставки, 1 - власна служба доставки)</p>
- **mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>ID служби доставки</p>
- **logo** `String` **_(обов'язково)_** - <p>Лого</p>
- **deliveryMethods** `Object` **_(обов'язково)_** - <p>Методи доставки</p>
- **deliveryMethods.mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>ID методу доставки</p>
- **deliveryMethods.method_delivery_name_uk** `String` **_(обов'язково)_** - <p>Назва методу доставки українською</p>
- **deliveryMethods.method_delivery_name_ru** `String` **_(обов'язково)_** - <p>Назва методу доставки російською</p>
- **deliveryMethods.method_delivery_name_en** `String` **_(обов'язково)_** - <p>Назва методу доставки англійською</p>
- **deliveryMethods.pickupTypes** `Object` _(опціонально)_ - <p>Методи самовивозу (не заповнено для інших методів доставки)</p>
- **deliveryMethods.pickupTypes.pickupType** `String` _(опціонально)_ - <p>ID методу самовивозу</p>
- **deliveryMethods.pickupTypes.pickupName** `String` _(опціонально)_ - <p>Назва методу самовивозу</p>
- **deliveryMethods.pickupTypes.payments** `Object` _(опціонально)_ - <p>Методи оплати</p>
- **deliveryMethods.pickupTypes.payments.id** `Integer` _(опціонально)_ - <p>ID методу оплати</p>
- **deliveryMethods.pickupTypes.payments.title_uk** `String` _(опціонально)_ - <p>Назва методу оплати українською</p>
- **deliveryMethods.pickupTypes.payments.title_ru** `String` _(опціонально)_ - <p>Назва методу оплати російською</p>
- **deliveryMethods.pickupTypes.payments.title_en** `String` _(опціонально)_ - <p>Назва методу оплати англійською</p>
- **deliveryMethods.pickupTypes.payments.pm_type** `String` _(опціонально)_ - <p>Тип методу оплати</p>
- **deliveryMethods.pickupTypes.payments.has_keys** `Boolean` _(опціонально)_ - <p>Наявність платіжних ключів</p>
- **deliveryMethods.pickupTypes.payments.is_pm_status_active** `Boolean` _(опціонально)_ - <p>Ознака блокування платіжного методу</p>
- **deliveryMethods.pickupTypes.payments.is_mpm_status_active** `Boolean` _(опціонально)_ - <p>Ознака блокування платіжного методу продавця</p>
- **deliveryMethods.pickupTypes.payments.is_old** `Boolean` _(опціонально)_ - <p>Ознака старого методу оплати</p>
- **deliveryMethods.pickupTypes.payments.is_available** `Boolean` _(опціонально)_ - <p>Можливість підключення</p>
- **deliveryMethods.pickupTypes.payments.disabled_message** `String` _(опціонально)_ - <p>Причина блокування методу оплати (приходить тільки якщо is_available=false)</p>
- **deliveryMethods.pickupTypes.payments.disabled_title** `String` _(опціонально)_ - <p>Повідомлення про причину блокування методу оплати (приходить тільки якщо is_available=false)</p>
- **deliveryMethods.payments** `Object` _(опціонально)_ - <p>Методи оплати (заповнено якщо метод доставки не самовивіз)</p>
- **deliveryMethods.payments.id** `Integer` _(опціонально)_ - <p>ID методу оплати</p>
- **deliveryMethods.payments.title_uk** `String` _(опціонально)_ - <p>Назва методу оплати українською</p>
- **deliveryMethods.payments.title_ru** `String` _(опціонально)_ - <p>Назва методу оплати російською</p>
- **deliveryMethods.payments.title_en** `String` _(опціонально)_ - <p>Назва методу оплати англійською</p>
- **deliveryMethods.payments.pm_type** `String` _(опціонально)_ - <p>Тип методу оплати</p>
- **deliveryMethods.payments.has_keys** `Boolean` _(опціонально)_ - <p>Наявність платіжних ключів</p>
- **deliveryMethods.payments.is_pm_status_active** `Boolean` _(опціонально)_ - <p>Ознака блокування платіжного методу</p>
- **deliveryMethods.payments.is_mpm_status_active** `Boolean` _(опціонально)_ - <p>Ознака блокування платіжного методу продавця</p>
- **deliveryMethods.payments.is_old** `Boolean` _(опціонально)_ - <p>Ознака старого методу оплати</p>
- **deliveryMethods.payments.is_available** `Boolean` _(опціонально)_ - <p>Можливість підключення</p>
- **deliveryMethods.payments.disabled_message** `String` _(опціонально)_ - <p>Причина блокування методу оплати (приходить тільки якщо is_available=false)</p>
- **deliveryMethods.payments.disabled_title** `String` _(опціонально)_ - <p>Повідомлення про причину блокування методу оплати (приходить тільки якщо is_available=false)</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "deliveryServices": [
            {
                "service_delivery_name_uk": "Нова Пошта",
                "service_delivery_name_ru": "Новая Почта",
                "service_delivery_name_en": "Nova poshta",
                "mdm_service_delivery_id": "bdbbcc43-c4c5-4557-bf19-3ef4c76d6b17",
                "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                "logo": "https://content.rozetka.com.ua/files/vector_graphics/original/283271375.svg",
                "is_open": true,
                "deliveryMethods": [
                    {
                        "method_delivery_name_uk": "Самовивіз",
                        "method_delivery_name_ru": "Самовывоз",
                        "method_delivery_name_en": "Pickup",
                        "pickupTypes": [
                            {
                                "pickupType": "1f165587-2c5c-4446-9ae6-f6ce21371240",
                                "pickupName": "Відділення",
                                "payments": [
                                    {
                                        "id": 4682,
                                        "title_ru": "Оплата на счет продавца",
                                        "title_uk": "Оплата на рахунок продавця",
                                        "title_en": "Оплата на рахунок продавця",
                                        "pm_type": "no_cash",
                                        "has_keys": true,
                                        "is_pm_status_active": true,
                                        "is_mpm_status_active": true,
                                        "is_old": false,
                                        "is_available": true
                                    },
                                    {
                                        "id": 4534,
                                        "title_ru": "Оплата частями от ПриватБанк (МП)",
                                        "title_uk": "Оплата частинами від ПриватБанк (МП)",
                                        "title_en": "Оплата частинами від ПриватБанк (МП)",
                                        "pm_type": "parent",
                                        "has_keys": true,
                                        "is_pm_status_active": true,
                                        "is_mpm_status_active": true,
                                        "is_old": false,
                                        "parents": [
                                            {
                                                "id": 4540,
                                                "title": "Оплата частями на 2 платежа",
                                                "number_of_payments": 2
                                            },
                                        ],
                                        "is_available": true
                                    },
                                    {
                                        "id": 1,
                                        "title_ru": "Оплата при получении товара",
                                        "title_uk": "Оплата під час отримання товару",
                                        "title_en": "Оплата під час отримання товару",
                                        "pm_type": "cash",
                                        "has_keys": true,
                                        "is_pm_status_active": true,
                                        "is_mpm_status_active": false,
                                        "is_old": false,
                                        "is_available": false,
                                        "disabled_message": "payment_disabled_market_status_title",
                                        "disabled_title": "Метод оплаты продавца заблокирован"
                                    },
                                    {
                                        "id": 5307,
                                        "title_ru": "Google Pay",
                                        "title_uk": "Google Pay",
                                        "title_en": "Google Pay",
                                        "pm_type": "google_pay",
                                        "has_keys": false,
                                        "is_pm_status_active": true,
                                        "is_mpm_status_active": true,
                                        "is_old": true,
                                        "is_available": false,
                                        "disabled_message": "payment_disabled_keys_title",
                                        "disabled_title": "Для данного метода оплаты отсутствуют платежные ключи"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "method_delivery_name_uk": "Кур'єр",
                        "method_delivery_name_ru": "Курьер",
                        "method_delivery_name_en": "Courier",
                        "payments": [
                            {
                                "id": 4682,
                                "title_ru": "Оплата на счет продавца",
                                "title_uk": "Оплата на рахунок продавця",
                                "title_en": "Оплата на рахунок продавця",
                                "pm_type": "no_cash",
                                "has_keys": true,
                                "is_pm_status_active": true,
                                "is_mpm_status_active": true,
                                "is_old": false,
                                "is_available": true
                            },
                            {
                                "id": 4242,
                                "title_ru": "LiqPay, PrivatPay, ApplePay, GooglePay",
                                "title_uk": "LiqPay, PrivatPay, ApplePay, GooglePay",
                                "title_en": "LiqPay, PrivatPay, ApplePay, GooglePay",
                                "pm_type": "card",
                                "has_keys": true,
                                "is_pm_status_active": true,
                                "is_mpm_status_active": true,
                                "is_old": false,
                                "is_available": true
                            }
                        ]
                    }
                ]
            },
        ]
    }
}
```

---

### Кількість товарів, які не пройшли перевірку для Rozetka Delivery

**get** `/sla/delivery/excluded-sla-items`

<p>Кількість товарів, які не пройшли перевірку для Rozetka Delivery</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **sla_roz_id** `Integer` _(опціонально)_ - <p>Sla ID (якщо не передати, то шукаємо по стандартному sla магазину)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

**Response Body Parameters:**

- **counts** `Integer` **_(обов'язково)_** - <p>Кількість товарів, які не пройшли перевірку</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "counts": 0
    }
}
```

---

### Пошук товарів для налаштування сла

**get** `/sla/item/search`

<p>Пошук товарів для налаштування сла</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **sla_roz_id** `Integer` _(опціонально)_ - <p>Sla ID</p>
- **id** `Integer` _(опціонально)_ - <p>ID</p>
- **name** `Integer` _(опціонально)_ - <p>Назва</p>
- **catalog_id** `Integer` _(опціонально)_ - <p>Категорія</p>
- **producer_id** `Integer` _(опціонально)_ - <p>Виробник</p>
- **status** `Integer` _(опціонально)_ - <p>Статус</p>
- **sell_status** `Integer` _(опціонально)_ - <p>Наявність</p>
- **uploader_price_offer_id** `String` _(опціонально)_ - <p>ID у прайсі</p>
- **article** `String` _(опціонально)_ - <p>Артикул</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна від</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна до</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

**Response Body Parameters:**

- **sla_roz_id** `Integer` **_(обов'язково)_** - <p>Sla ID</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **name** `Integer` **_(обов'язково)_** - <p>Назва</p>
- **catalog_id** `Integer` **_(обов'язково)_** - <p>Категорія</p>
- **producer_id** `Integer` **_(обов'язково)_** - <p>Виробник</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус</p>
- **sell_status** `Integer` **_(обов'язково)_** - <p>Наявність</p>
- **uploader_price_offer_id** `String` **_(обов'язково)_** - <p>ID у прайсі</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `String` **_(обов'язково)_** - <p>Ціна</p>
- **is_blocked_by_market** `Boolean` **_(обов'язково)_** - <p>Ознака заблокованого товару по магазину</p>
- **is_blocked_by_category** `Boolean` **_(обов'язково)_** - <p>Ознака заблокованого товару по категорії</p>
- **is_blocked_by_item** `Boolean` **_(обов'язково)_** - <p>Ознака заблокованого товару по товару</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "items": [
            {
                "id": 430491758,
                "name": "Тест прод",
                "sla_roz_id": 75454,
                "catalog_id": 4658026,
                "producer_id": 26,
                "price": "498.00",
                "status": 0,
                "sell_status": 8,
                "uploader_price_offer_id": "33",
                "article": "Артикул 001",
                "is_blocked_by_market": false,
                "is_blocked_by_category": true,
                "is_blocked_by_item": false,
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### Лічильник власних служб доставок

**get** `/sla/delivery/own-delivery-counts`

<p>Лічильник власних служб доставок</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **deliveryMdmServiceIds** `String` **_(обов'язково)_** - <p>Список id служб доставки <i>Може приймати декілька значень через кому</i> <br>Приклад:<code>deliveryMdmServiceIds=5498e0a0-ae1b-488c-89d5-3ea6db053edf,f7a78a43-7c21-4b4c-8db3-c5ccef7269a4</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

**Response Body Parameters:**

- **mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>ID служби доставки</p>
- **counts** `Integer` **_(обов'язково)_** - <p>Кількість власних служб доставки</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": [
        {
            "mdm_service_delivery_id": "6fb5492e-b6f3-4306-8f0a-258f915f4182",
            "counts": 10
        },
        {
            "mdm_service_delivery_id": "f7a78a43-7c21-4b4c-8db3-c5ccef7269a4",
            "counts": 15
        }
    ]
}
```

---

### Довідник кількості оплат по оплатам частинами

**get** `/sla/payment-method/child/search`

<p>Довідник кількості оплат по оплатам частинами</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **parent_id** `Integer` **_(обов'язково)_** - <p>ID батьківського методу оплати</p>
- **id** `Integer` _(опціонально)_ - <p>ID методу оплати</p>
- **number_of_payments** `Integer` _(опціонально)_ - <p>Кількість платежів</p>
- **status** `String` _(опціонально)_ - <p>Статус</p>
- **title** `String` _(опціонально)_ - <p>Назва</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID методу оплати</p>
- **title** `String` **_(обов'язково)_** - <p>Назва</p>
- **status** `String` **_(обов'язково)_** - <p>Статус</p>
- **number_of_payments** `Integer` **_(обов'язково)_** - <p>Кількість платежів</p>
- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;paymentMethods&quot;: paymentMethods[], &quot;_meta&quot;: MetaResponse } }</p>
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
        "paymentMethods": [
            {
                "id": 7339,
                "title": "Оплатити частинами від Rozetka 2",
                "status": "active",
                "number_of_payments": 2
            },
            {
                "id": 7229,
                "title": "Оплатити частинами від Rozetka 3",
                "status": "locked",
                "number_of_payments": 3
            },
            {
                "id": 7234,
                "title": "Оплатити частинами від Rozetka 4",
                "status": "active",
                "number_of_payments": 4
            },
            {
                "id": 7239,
                "title": "Оплатити частинами від Rozetka 5",
                "status": "locked",
                "number_of_payments": 5
            },
        ],
        "_meta": {
            "totalCount": 4,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### Пошук індивідуальних сла

**get** `/sla/search`

<p>Пошук індивідуальних сла</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **roz_id** `Integer` _(опціонально)_ - <p>ID сла</p>
- **title** `String` _(опціонально)_ - <p>Назва сла</p>
- **ff** `Boolean` _(опціонально)_ - <p>Ознака фулфілмент</p>
- **rz_self_pickup** `Boolean` _(опціонально)_ - <p>Ознака ROZETKA Delivery</p>
- **is_reserve** `Boolean` _(опціонально)_ - <p>Ознака сла кошик</p>
- **is_standard** `Boolean` _(опціонально)_ - <p>Ознака стандартного сла</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;slas&quot;: Slas[], &quot;_meta&quot;: MetaResponse }</p>
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
        "slas": [
            {
                "roz_id": 304664,
                "title": "TEST MAR-16680",
                "ff": false,
                "rz_self_pickup": false,
                "is_reserve": false,
                "is_standard": false,
                "deliveryServices": [
                    {
                        "roz_id": 1532990,
                        "title": "Деливери (Самовывоз)",
                        "mdm_service_delivery_id": "cc917097-6f93-4199-b37c-383f04cedee6",
                        "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
                        "delivery_service_name": "Делівері",
                        "delivery_service_type": 0,
                        "delivery_service_logo": "https://content2.rozetka.com.ua/files/vector_graphics/original/283271373.svg"
                    }
                ],
                "deliveryPaymentMethods": [
                    {
                        "payment_method_id": 6431,
                        "payment_method_type": "parent",
                        "title": "Оплата частями от ПриватБанк Marketplace"
                    },
                    {
                        "payment_method_id": 6653,
                        "payment_method_type": "parent",
                        "title": "Покупка частинами monobank Marketplace"
                    },
                    {
                        "payment_method_id": 7354,
                        "payment_method_type": "parent",
                        "title": "ПУМБ: Сплачуйте частинами"
                    }
                ]
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### Пошук по кур'єрам

**get** `/sla/delivery-service-courier/search`

<p>У список виводяться тільки кур'єри, створені продавцем. <br> <i>Переглянути кур'єрів зовнішніх служб доставки продавець не може</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID кур'єра</p>
- **mdm_id** `String` _(опціонально)_ - <p>Mdm ID кур'єра</p>
- **locality_id** `Integer` _(опціонально)_ - <p>ID населеного пункту</p>
- **status** `Integer` _(опціонально)_ - <p>Статус кур'єра</p>
- **locality_status** `Integer` _(опціонально)_ - <p>Статус населеного пункту</p>
- **title** `String` _(опціонально)_ - <p>Назва кур'єра</p>
- **locality_name** `String` _(опціонально)_ - <p>Назва населеного пункту</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;deliveryServiceCouriers&quot;: DeliveryServiceCourier[], &quot;_meta&quot;: MetaResponse } }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID кур'єра</p>
- **title** `String` **_(обов'язково)_** - <p>Назва кур'єра</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID кур'єра</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус кур'єра</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "deliveryServiceCouriers":[
            {
                "id": 91744,
                "mdm_id": "70ef37a8-2d71-4956-9f98-563bf86e0c39",
                "title": "Кур'єр Testing Market (Жовті Води)",
                "status": 1,
                "locality": {
                    "id": 236,
                    "mdm_id": "982d6ada-fca1-44fd-a01c-9e105ac0eb14",
                    "name": "Жовті Води, Дніпропетровська обл.(Місто)",
                    "region_title": "Дніпропетровська",
                    "status": 1
                }
            },
        ],
        "_meta":{
            "totalCount":1,
            "pageCount":1,
            "currentPage":1,
            "perPage":20
        }
    }
}
```

---

### Метод на додавання товарам сла

**post** `/sla/item/assign-sla`

<p>Метод на додавання товарам сла</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **sla_roz_id** `Integer` **_(обов'язково)_** - <p>Сла ID, який треба назначити до товарів</p>
- **ids** `Integer[]` _(опціонально)_ - <p>Список ID товарів у продавця. Для відправки всіх товарів в запиті варто надіслати лише пустий items[]</p>
- **excluded_ids** `Integer[]` _(опціонально)_ - <p>Список ID товарів для виключення із фільтрації</p>
- **filters** `Object` _(опціонально)_ - <p><a href="#api-Models-ItemFilterDetailsSlaModule">Фільтри</a></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **hasItemsError** `Boolean` **_(обов'язково)_** - <p>Ознака, яка показує що деякі товари заблоковані і не були перенесені в сла</p>
- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:Object }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "result": true,
        "hasItemsError": false
    }
}
```

---

### Редагування кур'єра

**put** `/sla/delivery-service-courier/{id}`

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID кур'єра магазину</p>

**Request Body Parameters:**

- **title** `String` _(опціонально)_ - <p>Назва кур'єра</p>
- **locality_id** `Integer` _(опціонально)_ - <p>ID населеного пункту</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: DeliveryServiceCourier }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID кур'єра</p>
- **title** `String` **_(обов'язково)_** - <p>Назва кур'єра</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID кур'єра</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус кур'єра</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 110124,
        "mdm_id": "3f3f560a-fc73-47f8-9a5c-bc932f754de9",
        "title": "Курьер Testing Market (Сквира)",
        "status": 1,
        "can_edit": true,
        "locality": {
            "id": 136,
            "mdm_id": "2ba4e3d0-2d69-495c-849d-3c7e3fac0b76",
            "name": "Сквира, Білоцерківський р-н, Київська обл.(Місто)",
            "region_title": "Київська",
            "status": 1
        }
    }
}
```

---

### Редагування пункту самовивозу

**put** `/sla/delivery-service-pickup/{id}`

<p>Редагування пунктів самовивозу, створених продавцем</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID пункту самовивозу</p>

**Request Body Parameters:**

- **street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **locality_id** `Integer` _(опціонально)_ - <p>ID населеного пункту</p>
- **title** `String` _(опціонально)_ - <p>Назва пункту самовивозу</p>
- **house** `String` _(опціонально)_ - <p>Номер будинку</p>
- **latitude** `String` _(опціонально)_ - <p>Широта</p>
- **longitude** `String` _(опціонально)_ - <p>Довгота</p>
- **pickup_number** `String` _(опціонально)_ - <p>Номер точки самовивозу (або внутрішній номер в системі продавця)</p>
- **ext_id** `String` _(опціонально)_ - <p>ID для CRM систем</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { DeliveryServicePickup } }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **title** `String` **_(обов'язково)_** - <p>Назва пункту самовивозу</p>
- **mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID служби доставки</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус пункту самовивозу</p>
- **street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **locality** `Object` **_(обов'язково)_** - <p>Населений пункт</p>
- **locality.id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **locality.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID населеного пункту</p>
- **locality.name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **locality.region_title** `String` **_(обов'язково)_** - <p>Назва регіону населеного пункту</p>
- **locality.status** `Integer` **_(обов'язково)_** - <p>Статус населеного пункту</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
        "id": 9099269,
        "title": "Из магазина Testing Market (Киев)",
        "mdm_id": "ce517c68-87ab-4294-b727-a2acc37fd630",
        "status": 1,
        "street": "Конча-Заспінська вул.",
        "house": "12",
        "latitude": "41.34534",
        "longitude": "41.90797",
        "can_edit": true,
        "locality": {
            "id": 1,
            "mdm_id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
            "name": "Київ",
            "region_title": "Київ",
            "status": 1
        }
    }
}
```

---

### Зміна статуса служби доставки

**put** `/sla/delivery/update-status`

<p>Зміна статуса служби доставки. Останню активну службу доставки вимкнути неможливо.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **sla_roz_id** `Integer` _(опціонально)_ - <p>Sla ID (якщо не передати, то шукаємо по стандартному sla магазину)</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус служби доставки</p>
- **mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>Id служби доставки</p>
- **mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>Id методу доставки</p>
- **mdm_pickup_type_id** `String` _(опціонально)_ - <p>ID типу точки самовивозу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: DeliverySlaModuleModel }</p>
- **roz_id** `Integer` **_(обов'язково)_** - <p>ID комбінації</p>
- **title** `String` **_(обов'язково)_** - <p>Назва комбінації</p>
- **mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>Id служби доставки</p>
- **mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>ID методу доставки</p>
- **mdm_localities_segment_id** `String` **_(обов'язково)_** - <p>ID населеного пункту доставки</p>
- **mdm_pickup_type_id** `String` **_(обов'язково)_** - <p>ID типу точки самовивозу</p>
- **mdm_pickup_type_name** `String` **_(обов'язково)_** - <p>Тип точки самовивозу</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус комбінації</p>
- **delivery_service_type** `Integer` **_(обов'язково)_** - <p>Тип служби доставки (0 - служба зовнішньої доставки, 1 - власна служба доставки)</p>
- **delivery_service_name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **delivery_service_logo** `String` **_(обов'язково)_** - <p>Лого служби доставки</p>
- **isAvailableConnect** `Boolean` **_(обов'язково)_** - <p>Доступність підключення</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "roz_id": 1490654,
        "title": "Meest ПОШТА (Самовывоз)",
        "mdm_service_delivery_id": "1a89d5af-c402-4938-a2f1-b2c1d042331a",
        "mdm_method_delivery_id": "b270e4b3-57dc-40d9-8996-188dca234dc6",
        "status": 1,
        "delivery_service_name": "Meest ПОШТА",
        "delivery_service_type": 0,
        "delivery_service_logo": "https://content1.rozetka.com.ua/files/vector_graphics/original/283271374.svg",
        "isAvailableConnect": true
    }
}
```

---

### Зміна статуса методу оплати

**put** `/sla/delivery-payment-method/update-status`

<p>Зміна статуса методу оплати. Останній активний метод оплати вимкнути неможливо.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **payment_method_id** `Integer` **_(обов'язково)_** - <p>ID метода оплати</p>
- **sla_roz_id** `Integer` _(опціонально)_ - <p>Sla ID (якщо не передати, то шукаємо по стандартному sla магазину)</p>
- **number_of_payments** `Integer` _(опціонально)_ - <p>Кількість платежів оплати частинами</p>
- **status** `Integer` _(опціонально)_ - <p>Статус метода оплати (якщо deliveryCombinations заповнено, то status передавати не обов'язково)</p>
- **deliveryCombinations** `Object` _(опціонально)_ - <p>Комбінації доставки в рамках методу оплати</p>
- **deliveryCombinations.mdm_service_delivery_id** `String` **_(обов'язково)_** - <p>ID служби доставки</p>
- **deliveryCombinations.mdm_method_delivery_id** `String` **_(обов'язково)_** - <p>ID методу доставки</p>
- **deliveryCombinations.mdm_pickup_type_id** `String` **_(обов'язково)_** - <p>ID типу точки самовивозу</p>
- **deliveryCombinations.status** `String` **_(обов'язково)_** - <p>Статус метода оплати</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success": true,
    "content": true,
}
```

---

