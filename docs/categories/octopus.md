# Octopus

### 9. Фільтри для пошуку ТТН

**get** `/delivery-rozetka/search-data`

<p>Фільтри для пошуку ТТН модуля ROZETKA Delivery</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { delivery_statuses: delivery_statuses[], } }</p>
- **delivery_statuses** `String` **_(обов'язково)_** - <p>Статуси замовлень</p>

#### Приклад відповіді

```json
  "success": true,
  "content": {
      "delivery_statuses": [
            {
                "id": "10010",
                "name": "Заплановані відправлення"
            },
            {
                "id": "10020",
                "name": "Замовлення пройшло реєстр передачі. Реєстр завершено"
            },
            {
                "id": "10030",
                "name": "Прийнято від продавця"
            },
            {
                "id": "40050",
                "name": "Клієнт відмовився"
            },
            {
                "id": "40070",
                "name": "Вийшов термін зберігання"
            },
            {
                "id": "60030",
                "name": "Замовлення видано отримувачу"
            }
        ]
  }
}
```

---

### 3. Створення ТТН із замовлення

**post** `/delivery-rozetka/create-order-ttn`

<p>Створення ТТН із замовлення. <br> <b>Дані про отримувача беруться із замовлення.Дані про статус оптали передаються в параметрах has_paid, cost, якщо параметри не передали - то беруться зі замовлення</b></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **payer** `String` **_(обов'язково)_** - <p>Платник</p>
- **places** `Integer` **_(обов'язково)_** - <p>Кількість транспортних місць у відправленні</p>
- **params** `Object` **_(обов'язково)_** - <p>Габарити <br><b><a href="#api-Models-OctopusParams">RozetkaDeliveryParams</a></b></p>
- **sender** `Object` **_(обов'язково)_** - <p>Відправник <br><b><a href="#api-Models-OctopusSender">RozetkaDeliverySender</a></b></p>
- **description** `String` _(опціонально)_ - <p>Опис відправлення (максимум 100 символів)</p>
- **has_paid** `Boolean` _(опціонально)_ - <p>Ознака, чи оплачене замовлення повністю (true - замовлення оплачене повністю, false - замовлення не оплачене повністю і очікується зворотна доставка коштів)</p>
- **cost** `Number` _(опціонально)_ - <p>Сума зворотної доставки коштів (сума накладеного платежу). <br> *Поле <code>обов'язкове</code> якщо задане поле has_paid=false.<br> Якщо has_paid=true (замовлення оплачене повністю), то cost=0</br> Якщо has_paid=false (замовлення не оплачене повністю), то cost&gt;0, але не більше суми замовлення</p>
- **carrier** `Integer` _(опціонально)_ - <p>ID перевізника<br> <b>1</b> - ROZETKA Delivery <b>4</b> - Meest</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **DeliveryTtn.id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **DeliveryTtn.ext_id** `String` **_(обов'язково)_** - <p>ID замовлення в сервісі доставки</p>
- **DeliveryTtn.ttn** `String` **_(обов'язково)_** - <p>Номер ТТН в сервісі доставки</p>
- **DeliveryTtn.seller_id** `Integer` **_(обов'язково)_** - <p>ID продавця в системі Розетка</p>
- **DeliveryTtn.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення до якого прив'язана ТТН</p>
- **DeliveryTtn.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **DeliveryTtn.delivery_service_pickup_id** `Integer` **_(обов'язково)_** - <p>ID точки доставки</p>
- **DeliveryTtn.receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **DeliveryTtn.declared_price** `Number` **_(обов'язково)_** - <p>Заявлена вартість товару</p>
- **DeliveryTtn.status_updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення статусу замовлення</p>
- **DeliveryTtn.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **DeliveryTtn.delivery_payer** `Integer` **_(обов'язково)_** - <p>Платник доставки:<br></p> <ul>      <li><b>0</b> - Відправник</li>      <li><b>1</b> - Одержувач</li>  </ul>
- **DeliveryTtn.payment_type** `Integer` **_(обов'язково)_** - <p>Тип платежу:<br></p>  <ul>         <li><b>0</b> - Готівкою</li>         <li><b>1</b> - Карта</li>  </ul>
- **DeliveryTtn.delivery_status_id** `String` **_(обов'язково)_** - <p>Id статусу доставки</p>
- **DeliveryTtn.delivery_address** `String` **_(обов'язково)_** - <p>Адреса доставки (кур'єром)</p>
- **DeliveryTtn.delivery_type** `Integer` **_(обов'язково)_** - <p>Тип доставки:<br></p> <ul>         <li><b>0</b> - На відділення</li>         <li><b>1</b> - На адресу</li>  </ul>
- **DeliveryTtn.oriented_delivery_date** `String` **_(обов'язково)_** - <p>Орієнтовна дата доставки</p>
- **DeliveryTtn.receiver_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **DeliveryTtn.comment** `String` **_(обов'язково)_** - <p>Коментар до ТТН</p>
- **DeliveryTtn.original_info** `String` **_(обов'язково)_** - <p>Данные по которым создавалась ТТН</p>
- **DeliveryTtn.created_at** `String` **_(обов'язково)_** - <p>Дата оновлення запису Дата оновлення ТТН</p>
- **DeliveryTtn.free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака акційного тарифу доставки</p>
- **DeliveryTtn.cod_amount** `Integer` **_(обов'язково)_** - <p>Сума зворотної доставки коштів (сума накладеного платежу). <br>Значення встановлюється в полі cost в тілі запита на створення ТТН</p>
- **DeliveryTtn.has_prepaid** `Boolean` **_(обов'язково)_** - <p>Ознака, чи оплачене замовлення повністю (true - замовлення оплачене повністю, false - замовлення не оплачене повністю і очікується зворотна доставка коштів).<br> Значення встановлюється в полі has_paid в тілі запита на створення ТТН</p>
- **DelveryTtn.is_carrier_meest** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є перевізником Meest</p>
- **DelveryTtn.carrier_track_num** `String|Null` **_(обов'язково)_** - <p>ТТН перевізника</p>
- **order.need_label** `Boolean` **_(обов'язково)_** - <p>Ознака чи потрібні посилці замовлення додаткові стікери</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "ext_id": "UNK-400975992",
       "ttn": "UNK-400975992",
       "seller_id": 165,
       "order_id": "35563694",
       "delivery_service_id": 1,
       "delivery_status_id": "10010",
       "oriented_delivery_date": "2021-08-20 12:00:00",
       "status_updated_at": null,
       "receiver_fio": "'ТОВ Контрагент'",
       "receiver_phone": "380935215614",
       "delivery_address": "г.Южноукраинск, бульвар Цветочный 5",
       "declared_price": null,
       "delivery_price": 0,
       "delivery_payer": null,
       "payment_type": null,
       "delivery_service_pickup_id": null,
       "delivery_type": "door-door",
       "comment": "заказ 23423-25673 включая новогодний подарок",
       "cod_amount": 0,
       "original_info": null,
       "has_prepaid": true,
       "is_carrier_meest": false,
       "carrier_track_num": null,
       "created_at": "2021-08-25 15:44:16",
       "id": 313,
   }
}
```

---

### 1. Пошук населеного пункту за назвою

**get** `/delivery-rozetka/find-cities`

<p>Пошук населеного пункту за назвою</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **city_name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: OctopusCity[] }</p>
**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID населеного пункту</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва населеного пункту українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва населеного пункту російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва населеного пункту англійською</p>
- **type** `Object` **_(обов'язково)_** - <p>Тип населеного пункту</p>
- **type.name_uk** `String` **_(обов'язково)_** - <p>Назва типу населеного пункту українською</p>
- **type.name_ru** `String` **_(обов'язково)_** - <p>Назва типу населеного пункту російською</p>
- **type.name_en** `String` **_(обов'язково)_** - <p>Назва типу населеного пункту англійською</p>
- **type.short_name_uk** `String` **_(обов'язково)_** - <p>Коротка назва типу населеного пункту українською</p>
- **type.short_name_ru** `String` **_(обов'язково)_** - <p>Коротка назва типу населеного пункту російською</p>
- **type.short_name_en** `String` **_(обов'язково)_** - <p>Коротка назва типу населеного пункту англійською</p>
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-OctopusRegion">RozetkaDeliveryRegion</a></b></p>
- **district** `Object|Null` **_(обов'язково)_** - <p>Район області <br><b><a href="#api-Models-OctopusDistrict">RozetkaDeliveryDistrict</a></b></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
         {
             "id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
             "name_uk": "Київ",
             "name_ru": "Киев",
             "name_en": "Kyiv",
             "type": {
                 "name_uk": "Місто",
                 "name_ru": "Город",
                 "name_en": "City",
                 "short_name_uk": "м",
                 "short_name_ru": "г",
                 "short_name_en": "c"
             },
             "region": {
                 "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
                 "name_uk": "Київ",
                 "name_ru": "Киев",
                 "name_en": "Kyiv"
             },
             "district": {
                 "id": "884b421d-4c53-4159-9799-f39d34bfcc29",
                 "name_uk": "Київ",
                 "name_ru": "Киев",
                 "name_en": "Kyiv",
                 "region": {
                     "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
                     "name_uk": "Київ",
                     "name_ru": "Киев",
                     "name_en": "Kyiv"
                 }
             }
         },
         {
             "id": "bb638753-7c7b-42b7-97c8-31fe1fab2e92",
             "name_uk": "Вертокиївка",
             "name_ru": "Вертокиевка",
             "name_en": "Vertokyivka",
             "type": {
                 "name_uk": "Село",
                 "name_ru": "Село",
                 "name_en": "Village",
                 "short_name_uk": "с",
                 "short_name_ru": "с",
                 "short_name_en": "v"
             },
             "region": {
                 "id": "4419e272-27dc-4ec5-b61c-f7b7af3a818b",
                 "name_uk": "Житомирська",
                 "name_ru": "Житомирская",
                 "name_en": "Zhytomyrska"
             },
             "district": {
                 "id": "eade0b62-6afc-4bfc-a5ac-189aac39c7d4",
                 "name_uk": "Житомирський",
                 "name_ru": "Житомирский",
                 "name_en": "Zhytomyrskyi",
                 "region": {
                     "id": "4419e272-27dc-4ec5-b61c-f7b7af3a818b",
                     "name_uk": "Житомирська",
                     "name_ru": "Житомирская",
                     "name_en": "Zhytomyrska"
                 }
             }
         }
    ]
}
```

---

### 1.1 Пошук населеного пункту для відправки/отримання

**get** `/delivery-rozetka/find-pickup-cities`

<p>Пошук населеного пункту для відправки/отримання</p>

**Версія:** 0.0.0

#### Параметри запиту

- **id** `String` _(опціонально)_ - <p>ID міста (hash)<br> Пошук працює лише по повному ID</p>
- **city_name** `String` _(опціонально)_ - <p>Назва міста</p>
- **receive_available** `Boolean` _(опціонально)_ - <p>Чи доступне отримання</p>
- **send_available** `Boolean` _(опціонально)_ - <p>Чи доступне відправлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: models[] }</p>
- **models** `Array` **_(обов'язково)_** - <p>Список міст</p>
- **id** `String` **_(обов'язково)_** - <p>ID міста (використовується для пошуку відділень)</p>
- **city_name** `String` **_(обов'язково)_** - <p>Назва міста</p>
- **region_name** `String` **_(обов'язково)_** - <p>Назва області</p>
- **district_name** `String` **_(обов'язково)_** - <p>Назва району</p>
- **receive_available** `Boolean` **_(обов'язково)_** - <p>Чи доступне отримання</p>
- **send_available** `Boolean` **_(обов'язково)_** - <p>Чи доступне відправлення</p>
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
     "models":[
         {
             "id": "b3558ed2-2f47-412e-93f8-3ee78a224fa7",
             "city_name": "Вишгород",
             "region_name": "Київська",
             "district_name": "Вишгородський",
             "receive_available": true,
             "send_available": true
         },
         {"id": "d2ab80d6-1c4e-4ff9-b789-092914d451c6", "city_name": "Одеса", "region_name": "Одеська",…}
     ],
     "_meta":{"totalCount": 2, "pageCount": 1, "currentPage": 1, "perPage": 10}
 }
}
```

```json
{
 "id": "b3558ed2-2f47-412e-93f8-3ee78a224fa7",
 "city_name": "Вишгород",
 "region_name": "Київська",
 "district_name": "Вишгородський",
 "receive_available": true,
 "send_available": true
}
```

---

### 2.2 Отримання відділень за населеним пунктом для отримувача

**get** `/delivery-rozetka/find-receiver-pickups`

<p>Отримання відділень за населеним пунктом для отримувача</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **city_id** `String` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **pickup_name** `String` _(опціонально)_ - <p>Назва відділеня</p>
- **pickup_id** `String` _(опціонально)_ - <p>ID відділення</p>
- **page** `Integer` _(опціонально)_ - <p>Пагінація. Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Пагінація. Кількість елементів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **pickup_id** `String` **_(обов'язково)_** - <p>ID відділення</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва відділення українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва відділення російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва відділення англійською</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця розміщення відділення <br><b><a href="#api-Models-OctopusStreet">RozetkaDeliveryStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, в якому знаходиться відділення</p>
- **schedules** `RozetkaDeliveryPickupSchedules[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **schedule** `RozetkaDeliveryScheduleDefault` **_(обов'язково)_** - <p>Графік роботи <br><b><a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></b></p>
- **pickupChildren** `Boolean` **_(обов'язково)_** - <p>Чи доступне ваідділення для отримання посилом з MeestExpress</p>
- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content":  [
         "receiverPickups": [
             {
                 "pickup_id": "a609d688-abef-410e-a257-f2cba57d7340",
                 "name_uk": "АЗС пр-т Перемоги, 11Б",
                 "name_ru": "АЗС пр-т Победы, 11Б",
                 "name_en": "Filling station 16",
                 "street": null,
                 "house_number": "11Б",
                 "schedule":{
                     "Monday":{"from": "09:00", "to": "20:00"},
                     "Tuesday":{"from": "09:00", "to": "20:00"},
                     "Wednesday":{"from": "09:00", "to": "20:00"},
                     "Thursday":{"from": "09:00", "to": "20:00"},
                     "Friday":{"from": "09:00", "to": "20:00"},
                     "Saturday":{"from": "09:00", "to": "20:00"},
                     "Sunday":{"from": "10:00", "to": "19:00"}
                 },
                 "schedules":[]
             },
             {
                 "pickup_id": "403b3ee0-7f2c-4898-86ed-ef5d513405a3",
                 "name_uk": "Київ, бульвар Кольцова, 14Д",
                 "name_ru": "Киев, бульвар Кольцова, 14Д",
                 "name_en": "Kiev, boulevard Koltsova, 14D",
                 "street": {
                     "id": "60c028fc-04d6-4c9e-98c6-90a302bf500a",
                     "name_uk": "Кольцова",
                     "name_ru": "Кольцова",
                     "name_en": "Koltsova",
                     "city": {
                         "id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
                         "name_uk": "Київ",
                         "name_ru": "Киев",
                         "name_en": "Kyiv",
                         "type": {
                             "name_uk": "Місто",
                             "name_ru": "Город",
                             "name_en": "City",
                             "short_name_uk": "м",
                             "short_name_ru": "г",
                             "short_name_en": "c"
                         },
                         "region": {
                             "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
                             "name_uk": "Київ",
                             "name_ru": "Киев",
                             "name_en": "Kyiv"
                         },
                         "district": {
                             "id": "884b421d-4c53-4159-9799-f39d34bfcc29",
                             "name_uk": "Київ",
                             "name_ru": "Киев",
                             "name_en": "Kyiv",
                             "region": {
                                 "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
                                 "name_uk": "Київ",
                                 "name_ru": "Киев",
                                 "name_en": "Kyiv"
                             }
                         }
                     },
                     "house_numbers": null
                 },
                 "house_number": "14Д",
                 "schedule":{
                     "Monday":{"from": "09:00", "to": "20:00"},
                     "Tuesday":{"from": "09:00", "to": "20:00"},
                     "Wednesday":{"from": "09:00", "to": "20:00"},
                     "Thursday":{"from": "09:00", "to": "20:00"},
                     "Friday":{"from": "09:00", "to": "20:00"},
                     "Saturday":{"from": "09:00", "to": "20:00"},
                     "Sunday":{"from": "10:00", "to": "19:00"}
                 },
                 "schedules":[
                     {
                         "id": "448337ce-a985-4b44-ac28-00dde0613c4f",
                         "name_uk": "31/12/23 скорочений день",
                         "name_ru": null,
                         "name_en": null,
                         "start_date": "2023-12-31",
                         "end_date": "2023-12-31",
                         "start_time": "09:00:00",
                         "end_time": "16:00:00",
                         "status":{
                             "id": "db6b4c18-ece5-4b27-8d13-df6482518acd",
                             "name_uk": "Активно",
                             "name_ru": "Активно",
                             "name_en": "Active"
                         }
                     },
                 ],
                 "pickupChildren": true
             }
         ],
         "_meta": {
             "totalCount": 4,
             "pageCount": 1,
             "currentPage": 1,
             "perPage": 5
         }
    ]
}
```

---

### 2.1 Отримання відділень за населеним пунктом для відправника

**get** `/delivery-rozetka/find-sender-pickups`

<p>Отримання відділень за населеним пунктом для відправника</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **city_id** `String` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **pickup_name** `String` _(опціонально)_ - <p>Назва відділеня</p>
- **page** `Integer` _(опціонально)_ - <p>Пагінація. Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Пагінація. Кількість елементів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **pickup_id** `String` **_(обов'язково)_** - <p>ID відділення</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва відділення українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва відділення російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва відділення англійською</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця розміщення відділення <br><b><a href="#api-Models-OctopusStreet">RozetkaDeliveryStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, в якому знаходиться відділення</p>
- **schedules** `RozetkaDeliveryPickupSchedules[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **schedule** `RozetkaDeliveryScheduleDefault` **_(обов'язково)_** - <p>Графік роботи <br><b><a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></b></p>
- **pickupChildren** `Boolean` **_(обов'язково)_** - <p>Чи доступне ваідділення для отримання посилом з MeestExpress</p>
- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content":  [
         "senderPickups": [
             {
                 "pickup_id": "a609d688-abef-410e-a257-f2cba57d7340",
                 "name_uk": "АЗС пр-т Перемоги, 11Б",
                 "name_ru": "АЗС пр-т Победы, 11Б",
                 "name_en": "Filling station 16",
                 "street": null,
                 "house_number": "11Б",
                 "schedule":{
                     "Monday":{"from": "09:00", "to": "20:00"},
                     "Tuesday":{"from": "09:00", "to": "20:00"},
                     "Wednesday":{"from": "09:00", "to": "20:00"},
                     "Thursday":{"from": "09:00", "to": "20:00"},
                     "Friday":{"from": "09:00", "to": "20:00"},
                     "Saturday":{"from": "09:00", "to": "20:00"},
                     "Sunday":{"from": "10:00", "to": "19:00"}
                 },
                 "schedules":[]
             },
             {
                 "pickup_id": "403b3ee0-7f2c-4898-86ed-ef5d513405a3",
                 "name_uk": "Київ, бульвар Кольцова, 14Д",
                 "name_ru": "Киев, бульвар Кольцова, 14Д",
                 "name_en": "Kiev, boulevard Koltsova, 14D",
                 "street": {
                     "id": "60c028fc-04d6-4c9e-98c6-90a302bf500a",
                     "name_uk": "Кольцова",
                     "name_ru": "Кольцова",
                     "name_en": "Koltsova",
                     "city": {
                         "id": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
                         "name_uk": "Київ",
                         "name_ru": "Киев",
                         "name_en": "Kyiv",
                         "type": {
                             "name_uk": "Місто",
                             "name_ru": "Город",
                             "name_en": "City",
                             "short_name_uk": "м",
                             "short_name_ru": "г",
                             "short_name_en": "c"
                         },
                         "region": {
                             "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
                             "name_uk": "Київ",
                             "name_ru": "Киев",
                             "name_en": "Kyiv"
                         },
                         "district": {
                             "id": "884b421d-4c53-4159-9799-f39d34bfcc29",
                             "name_uk": "Київ",
                             "name_ru": "Киев",
                             "name_en": "Kyiv",
                             "region": {
                                 "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
                                 "name_uk": "Київ",
                                 "name_ru": "Киев",
                                 "name_en": "Kyiv"
                             }
                         }
                     },
                     "house_numbers": null
                 },
                 "house_number": "14Д",
                 "schedule":{
                     "Monday":{"from": "09:00", "to": "20:00"},
                     "Tuesday":{"from": "09:00", "to": "20:00"},
                     "Wednesday":{"from": "09:00", "to": "20:00"},
                     "Thursday":{"from": "09:00", "to": "20:00"},
                     "Friday":{"from": "09:00", "to": "20:00"},
                     "Saturday":{"from": "09:00", "to": "20:00"},
                     "Sunday":{"from": "10:00", "to": "19:00"}
                 },
                 "schedules":[
                     {
                         "id": "448337ce-a985-4b44-ac28-00dde0613c4f",
                         "name_uk": "31/12/23 скорочений день",
                         "name_ru": null,
                         "name_en": null,
                         "start_date": "2023-12-31",
                         "end_date": "2023-12-31",
                         "start_time": "09:00:00",
                         "end_time": "16:00:00",
                         "status":{
                             "id": "db6b4c18-ece5-4b27-8d13-df6482518acd",
                             "name_uk": "Активно",
                             "name_ru": "Активно",
                             "name_en": "Active"
                         }
                     },
                 ]
             }
         ],
         "_meta": {
             "totalCount": 4,
             "pageCount": 1,
             "currentPage": 1,
             "perPage": 5
         }
    ]
}
```

---

### 8. Отримання налаштувань передзаповнення

**get** `/delivery-rozetka/settings`

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **sender** `Object` **_(обов'язково)_** - <p>Параметри відправника</p>
- **sender.type** `String` **_(обов'язково)_** - <p>Тип (физ-natural, юр-legal)</p>
- **sender.city** `String` **_(обов'язково)_** - <p>Назва міста або UUID</p>
- **sender.address** `String` **_(обов'язково)_** - <p>Адреса</p>
- **sender.department** `String` **_(обов'язково)_** - <p>UUID відділення</p>
- **sender.name** `String` **_(обов'язково)_** - <p>Імʼя (ПІБ або назва організації + данні для индитифікування)</p>
- **sender.phones** `String[]` **_(обов'язково)_** - <p>Телефони</p>
- **sender.info** `String` **_(обов'язково)_** - <p>Информація (Якщо юр лице, то на основі якого договору чи довіреності)</p>
- **sender.carrier** `Integer` **_(обов'язково)_** - <p>Служба доставки відділення відправлення <i>1 - RZ Delivery, 4 - Meest</i></p>
- **parcels** `Array[RozetkaDeliveryParams]` **_(обов'язково)_** - <p>Параметри посилки (для кількох місць)</p>
- **parcels.weight** `Number` **_(обов'язково)_** - <p>Вага, в кілограмах</p>
- **parcels.length** `Number` **_(обов'язково)_** - <p>Довжина, в сантиметрах</p>
- **parcels.width** `Number` **_(обов'язково)_** - <p>Ширина, в сантиметрах</p>
- **parcels.height** `Number` **_(обов'язково)_** - <p>Висота, в сантиметрах</p>
- **parcels.volume** `Number` **_(обов'язково)_** - <p>Обʼємна вага, в кілограмах</p>
- **parcels.description** `String` **_(обов'язково)_** - <p>Опис</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "is_add_items": true,
       "sender": {
           "type": "legal",
           "city": "Киев",
           "address": "г.Киев, ул. Кирпаноса 26",
           "department": "25029323-59b2-4726-8d23-85bd7ffb4b90",
           "name": "'ТОВ Контрагент'",
           "phones": null,
           "info": "",
           "carrier": 1
       },
       "parcels": [
           {
               "weight": null,
               "length": "15.00",
               "width": "25.50",
               "height": "30.00",
               "volume": "2.87",
               "description": "Книги"
           }
       ]
   }
}
```

---

### 5.1. Масовий друк ТТН

**post** `/delivery-rozetka/ttn-print-batch`

<p>Масовий друк ТТН</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **track_numbers** `String[]` **_(обов'язково)_** - <p>Список номерів ТТН<br></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл ТТН</p>

---

### 7. Додавання налаштувань передзаповнення

**post** `/delivery-rozetka/settings`

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Request Body Parameters:**

- **is_add_items** `Boolean` _(опціонально)_ - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **sender** `Object` _(опціонально)_ - <p>Параметри відправника <b><a href="#api-Models-OctopusPresetSender" class="nav-list-item">RozetkaDeliveryPresetSender</a></b></p>
- **parcels** `Array[RozetkaDeliveryParams]` _(опціонально)_ - <p>Параметри посилки (можна вказати для кількох місць) <b><a href="#api-Models-OctopusParams" class="nav-list-item">RozetkaDeliveryParams</a></b></p>
**Response Body Parameters:**

- **is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **sender** `Object` **_(обов'язково)_** - <p>Параметри відправника</p>
- **sender.type** `String` **_(обов'язково)_** - <p>Тип (физ-natural, юр-legal)</p>
- **sender.city** `String` **_(обов'язково)_** - <p>Назва міста або UUID</p>
- **sender.address** `String` **_(обов'язково)_** - <p>Адреса</p>
- **sender.department** `String` **_(обов'язково)_** - <p>UUID відділення</p>
- **sender.name** `String` **_(обов'язково)_** - <p>Імʼя (ПІБ або назва організації + данні для индитифікування)</p>
- **sender.phones** `String[]` **_(обов'язково)_** - <p>Телефони</p>
- **sender.info** `String` **_(обов'язково)_** - <p>Информація (Якщо юр лице, то на основі якого договору чи довіреності)</p>
- **sender.carrier** `Integer` **_(обов'язково)_** - <p>Служба доставки відділення відправлення <i>1 - RZ Delivery, 4 - Meest</i></p>
- **parcels** `Array[RozetkaDeliveryParams]` **_(обов'язково)_** - <p>Параметри посилки (для кількох місць)</p>
- **parcels.weight** `Number` **_(обов'язково)_** - <p>Вага, в кілограмах</p>
- **parcels.length** `Number` **_(обов'язково)_** - <p>Довжина, в сантиметрах</p>
- **parcels.width** `Number` **_(обов'язково)_** - <p>Ширина, в сантиметрах</p>
- **parcels.height** `Number` **_(обов'язково)_** - <p>Висота, в сантиметрах</p>
- **parcels.volume** `Number` **_(обов'язково)_** - <p>Обʼємна вага, в кілограмах</p>
- **parcels.description** `String` **_(обов'язково)_** - <p>Опис</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "is_add_items": true,
       "sender": {
           "type": "legal",
           "city": "Киев",
           "address": "г.Киев, ул. Кирпаноса 26",
           "department": "25029323-59b2-4726-8d23-85bd7ffb4b90",
           "name": "'ТОВ Контрагент'",
           "phones": null,
           "info": "",
           "carrier": 1
       },
       "parcels": [
           {
               "weight": null,
               "length": "15.00",
               "width": "25.50",
               "height": "30.00",
               "volume": "2.87",
               "description": "Книги"
           }
       ]
   }
}
```

---

### 4. Отримання списку ТТН

**get** `/delivery-rozetka/ttn-list`

<p>Отримання списку ТТН модуля ROZETKA Delivery</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення прикріпленого до ТТН</p>
- **ext_id** `String` **_(обов'язково)_** - <p>Зовнішній ID замовлення (в службі доставки)</p>
- **ttn** `String` **_(обов'язково)_** - <p>Номер ТТН</p>
- **receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery_status_id** `String` _(опціонально)_ - <p>ID статусу замовлення <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>delivery_status_id=0,2</code></p>
- **date_from** `String` _(опціонально)_ - <p>Від дати створення ТТН</p>
- **date_to** `String` _(опціонально)_ - <p>До дати створення ТТН</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **is_reserve_ending** `Boolean` _(опціонально)_ - <p>Чи закінчується термін резерву (за два дні)</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **DeliveryTtn** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryTtn" class="nav-list-item">DeliveryTtnModel</a></b></p>
- **DeliveryTtn.id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **DeliveryTtn.ext_id** `String` **_(обов'язково)_** - <p>ID замовлення в сервісі доставки</p>
- **DeliveryTtn.ttn** `String` **_(обов'язково)_** - <p>Номер ТТН в сервісі доставки</p>
- **DeliveryTtn.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **DeliveryTtn.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення до якого прив'язана ТТН</p>
- **DeliveryTtn.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **DeliveryTtn.delivery_service_pickup_id** `Integer` **_(обов'язково)_** - <p>ID точки доставки</p>
- **DeliveryTtn.receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **DeliveryTtn.declared_price** `Number` **_(обов'язково)_** - <p>Заявлена вартість товару</p>
- **DeliveryTtn.status_updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення статусу замовлення</p>
- **DeliveryTtn.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **DeliveryTtn.delivery_payer** `Integer` **_(обов'язково)_** - <p>Платник доставки:<br></p> <ul>      <li><b>0</b> - Відправник</li>      <li><b>1</b> - Одержувач</li>  </ul>
- **DeliveryTtn.payment_type** `Integer` **_(обов'язково)_** - <p>Тип платежу:<br></p>  <ul>         <li><b>0</b> - Готівкою</li>         <li><b>1</b> - Карта</li>  </ul>
- **DeliveryTtn.delivery_status_id** `String` **_(обов'язково)_** - <p>Id статусу доставки</p>
- **DeliveryTtn.delivery_address** `String` **_(обов'язково)_** - <p>Адреса доставки (кур'єром)</p>
- **DeliveryTtn.delivery_type** `Integer` **_(обов'язково)_** - <p>Тип доставки:<br></p> <ul>         <li><b>0</b> - На відділення</li>         <li><b>1</b> - На адресу</li>  </ul>
- **DeliveryTtn.oriented_delivery_date** `String` **_(обов'язково)_** - <p>Орієнтовна дата доставки</p>
- **DeliveryTtn.receiver_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **DeliveryTtn.comment** `String` **_(обов'язково)_** - <p>Коментар до ТТН (дані з поля description при створенні ТТН)</p>
- **DeliveryTtn.created_at** `String` **_(обов'язково)_** - <p>Дата створення</p>
- **DeliveryTtn.free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака акційного тарифу доставки</p>
- **DeliveryTtn.has_prepaid** `Boolean` **_(обов'язково)_** - <p>Ознака, чи оплачене замовлення повністю (true - мамовлення оплачене повністю, false - замовлення не оплачене повністю і очікується зворотня доставка коштів). Значення встановлюється в полі has_paid в тілі запита на створення ТТН</p>
- **DeliveryTtn.post_pay_commission** `Number` **_(обов'язково)_** - <p>Сума комісії за накладений платіж</p>
- **DelveryTtn.is_carrier_meest** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є перевізником Meest</p>
- **DelveryTtn.carrier_track_num** `String|Null` **_(обов'язково)_** - <p>ТТН перевізника</p>
- **DelveryTtn.carrier_return_track_num** `String|Null` **_(обов'язково)_** - <p>Номер відстеження повернення перевізником</p>
- **ttn.sender** `Object|null` **_(обов'язково)_** - <p>Відправник</p>
- **ttn.sender.name** `String|null` **_(обов'язково)_** - <p>Ім'я (ПІБ або назва організації + дані, що ідентифікують)</p>
- **ttn.sender.address** `String|null` **_(обов'язково)_** - <p>Адреса</p>
- **ttn.sender.city** `String|null` **_(обов'язково)_** - <p>Назва або UUID міста</p>
- **ttn.sender.department** `String|null` **_(обов'язково)_** - <p>UUID відділення</p>
- **ttn.sender.department_schedule** `RozetkaDeliveryScheduleDefault|null` **_(обов'язково)_** - <p>Графік роботи відділення <a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></p>
- **ttn.sender.department_schedules** `RozetkaDeliveryPickupSchedules[]|[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **ttn.sender.department_type** `Integer|null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **ttn.sender.phones** `String[]|null` **_(обов'язково)_** - <p>Телефони <br><small>(може бути декілька, перший - основний, інші інформаційні)</small></p>
- **ttn.sender.type** `String|null` **_(обов'язково)_** - <p>Тип</p> <ul>     <li><code>natural</code> - Фіз.особа</li>     <li><code>legal</code> - Юр.особа</li> </ul>
- **ttn.receiver** `Object|null` **_(обов'язково)_** - <p>Отримувач</p>
- **ttn.receiver.name** `String|null` **_(обов'язково)_** - <p>Ім'я (ПІБ або назва організації + дані, що ідентифікують)</p>
- **ttn.receiver.address** `String|null` **_(обов'язково)_** - <p>Адреса</p>
- **ttn.receiver.city** `String|null` **_(обов'язково)_** - <p>Назва або UUID міста</p>
- **ttn.receiver.department** `String|null` **_(обов'язково)_** - <p>UUID відділення</p>
- **ttn.receiver.department_schedule** `RozetkaDeliveryScheduleDefault|null` **_(обов'язково)_** - <p>Графік роботи відділення <a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></p>
- **ttn.receiver.department_schedules** `RozetkaDeliveryPickupSchedules[]|[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **ttn.receiver.department_type** `Integer|null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **ttn.receiver.phones** `String[]|null` **_(обов'язково)_** - <p>Телефони <br><small>(може бути декілька, перший - основний, інші інформаційні)</small></p>
- **ttn.receiver.type** `String|null` **_(обов'язково)_** - <p>Тип</p> <ul>     <li><code>natural</code> - Фіз.особа</li>     <li><code>legal</code> - Юр.особа</li> </ul>
**ExtraFields:**

- **DeliveryTtn.delivery_service_pickup** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServicePickupDetails" class="nav-list-item">DeliveryServicePickup</a></b> <i>(ExtraField)</i></p>
- **DeliveryTtn.delivery_status_title** `String` **_(обов'язково)_** - <p>Назва статусу доставки <i>(ExtraField)</i></p>
- **DeliveryTtn.need_label** `Boolean` **_(обов'язково)_** - <p>Чи потрібні посилці додаткові стікери <i>(ExtraField)</i></p>
- **DeliveryTtn.is_reserve_ending** `Boolean` **_(обов'язково)_** - <p>Чи закінчується термін резерву (за два дні) <i>(ExtraField)</i></p>
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
               "id": 316,
               "ext_id": "UNK-924937442",
               "ttn": "UNK-924937442",
               "seller_id": 165,
               "order_id": 35563694,
               "delivery_service_id": 1,
               "delivery_service_pickup_id": null,
               "receiver_fio": "'ТОВ Контрагент'",
               "declared_price": null,
               "status_updated_at": null,
               "delivery_price": "0.00",
               "delivery_payer": null,
               "payment_type": null,
               "delivery_status_id": "10010",
               "delivery_address": "г.Южноукраинск, бульвар Цветочный 5",
               "delivery_type": 0,
               "oriented_delivery_date": "2021-08-26 12:00:00",
               "receiver_phone": "380935215614",
               "comment": "заказ 23423-25673 включая новогодний подарок",
               "updated_at": null,
               "created_at": "2021-08-25 18:46:54",
               "cod_amount": null,
               "free_delivery": false,
               "post_pay_commission": 123,
               "has_prepaid": true,
               "sender":{
                 "name": "Петров Петр Петрович",
                 "address": "г.Киев, ул. Кирпаноса 26",
                 "city": "d2ab80d6-1c4e-4ff9-b789-092914d451c6",
                 "department": "25d64bf9-f1f2-422a-89c5-1d8837ab7d77",
                 "phones":["380999999999"],
                 "type": "natural"
              },
              "is_carrier_meest": false,
              "carrier_track_num": null
           },
           ...
       ],
       "_meta": {
           "totalCount": 5,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 20
       }
   }
}
```

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "models": [
           {
               "id": 316,
               "ext_id": "UNK-924937442",
               "ttn": "UNK-924937442",
               "seller_id": 165,
               "order_id": 35563694,
               "delivery_service_id": 1,
               "delivery_service_pickup_id": null,
               "receiver_fio": "'ТОВ Контрагент'",
               "declared_price": null,
               "status_updated_at": null,
               "delivery_price": "0.00",
               "delivery_payer": null,
               "payment_type": null,
               "delivery_status_id": "10010",
               "delivery_address": "г.Южноукраинск, бульвар Цветочный 5",
               "delivery_type": 0,
               "oriented_delivery_date": "2021-08-26 12:00:00",
               "receiver_phone": "380935215614",
               "comment": "заказ 23423-25673 включая новогодний подарок",
               "updated_at": null,
               "created_at": "2021-08-25 18:46:54",
               "cod_amount": null,
               "free_delivery": false,
               "delivery_service_pickup": null,
               "delivery_status_title": "",
               "post_pay_commission": 123,
               "need_label": false,
               "is_reserve_ending": false
           },
           ...
       ],
       "_meta": {
           "totalCount": 5,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 20
       }
   }
}
```

---

### 6. Отримання даних із замовлення

**get** `/delivery-rozetka/get-user-info/{orderId}`

<p>Отримання даних із замовлення для створення експрес накладної для модуля ROZETKA Delivery</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **orderId** `Integer` **_(обов'язково)_** - <p>Номер замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **name** `String` **_(обов'язково)_** - <p>П.І.Б. отримувача</p>
- **phone** `String` **_(обов'язково)_** - <p>Номер телефону отримувача</p>
- **amount** `Number` **_(обов'язково)_** - <p>Сума замовлення зі знижкою</p>
- **items** `Object[]` **_(обов'язково)_** - <p>Список товарів з замовлення</p>
- **deliveryType** `String` **_(обов'язково)_** - <p>Тип доставки</p>
- **items.id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор товару</p>
- **items.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **items.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **country** `String` **_(обов'язково)_** - <p>Код країни доставки</p>
- **region** `String` **_(обов'язково)_** - <p>Назва області доставки</p>
- **district** `String` **_(обов'язково)_** - <p>Назва обласного району доставки</p>
- **city** `String` **_(обов'язково)_** - <p>Назва міста доставки</p>
- **street** `String` **_(обов'язково)_** - <p>Назва вулиці доставки</p>
- **houseNumber** `String` **_(обов'язково)_** - <p>Номер будинку доставки</p>
- **apartmentNumber** `String` **_(обов'язково)_** - <p>Номер квартири доставки</p>
- **cityId** `String` **_(обов'язково)_** - <p>UUID міста</p>
- **departmentId** `String` **_(обов'язково)_** - <p>UUID відділення</p>
- **departmentType** `Integer|Null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **regionId** `String` **_(обов'язково)_** - <p>UUID області</p>
- **districtId** `String` **_(обов'язково)_** - <p>UUID обласного району доставки</p>
- **streetId** `String` **_(обов'язково)_** - <p>UUID вулиці</p>
- **itemDimensions** `Object` **_(обов'язково)_** - <p>Рекомендовані габарити товару</p>
- **itemDimensions.width** `Integer` **_(обов'язково)_** - <p>Ширина, см</p>
- **itemDimensions.height** `Integer` **_(обов'язково)_** - <p>Висота, см</p>
- **itemDimensions.length** `Integer` **_(обов'язково)_** - <p>Довжина, см</p>
- **itemDimensions.weight** `Number` **_(обов'язково)_** - <p>Вага, кг</p>
- **delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж в Delivery Rozetka</p>
- **delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках в Delivery Rozetka</p>
- **delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні в Delivery Rozetka</p>
- **delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату в Delivery Rozetka</p>
- **isReturnMoneyCost** `Boolean` **_(обов'язково)_** - <p>Ознака, чи включено зворотню доставку коштів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
  "success": true,
  "content": {
      "name": "Павел Пупкин",
      "phone": "380999999999",
      "amount": "1292.00",
      "items": [
          {
              "id": 231819397,
              "name": "Енеїда Іван Котляревський",
              "name_ua":"Енеїда Іван Котляревський"
          }
      ],
      "deliveryType": "W2W",
      "placeNumber": "Магазин №1",
      "country": "UA",
      "region": "Київська",
      "district": "Києво-Святошинський",
      "city": "Київ",
      "street": "пр. С. Бандеры",
      "houseNumber": "6 (м. Почайна)",
      "apartmentNumber": "",
      "cityId": "b205dde2-2e2e-4eb9-aef2-a67c82bbdf27",
      "departmentId": "b205dde2-test-test",
      "departmentType": 0,
      "regionId": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
      "districtId": "884b421d-4c53-4159-9799-f39d34bfcc29",
      "streetId": null,
      "itemDimensions": {
            "item_id": 338338564,
            "width": 1,
            "height": 1,
            "length": 1,
            "weight": 1
        },
       "delivery_commission_info": {
          "percentage_commission": "1.5",
          "absolute_commission": "15.00",
          "calculated_commission": "20.00"
      },
      "isReturnMoneyCost": true
  }
}
```

---

### 11 Отримання файлів маркувань для посилок

**get** `/delivery-rozetka/label-files`

<p>Отримання файлів маркувань для посилок</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **file_type** `String` **_(обов'язково)_** - <p>Тип файлу <br>top - Знак верх, fragile - Обережно крихке</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл маркування (.pdf)</p>

---

