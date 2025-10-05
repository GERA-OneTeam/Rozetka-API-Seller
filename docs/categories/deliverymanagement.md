# DeliveryManagement

### 5 Отримання файлів маркувань для посилок

**get** `/delivery-services/label-files`

<p>Отримання файлів маркувань для посилок</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **file_type** `String` **_(обов'язково)_** - <p>Тип файлу <br><ul> <li><code>top</code> - Знак верх</li> <li><code>fragile</code> - Обережно крихке</li></p> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл маркування (.pdf)</p>

---

### 4 Фільтр по сервісам доставки

**get** `/delivery-services/search`

<p>У разі помилки валідації полів - повертає порожній масив даних.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID сервісу доставки</p>
- **status** `Integer` _(опціонально)_ - <p>Статус сервісу доставки</p>
- **type** `Integer` _(опціонально)_ - <p>Тип сервісу:</p> <ul>     <li>0 - зовнішній сервіс доставки</li>     <li>1 - сервіс доставки магазину</li> </ul>
- **name** `String` _(опціонально)_ - <p>Назва сервісу доставки</p>
- **delivery_method_id** `Integer` _(опціонально)_ - <p>ID методу доставки</p> <ul>     <li>1 - самовивіз</li>     <li>2 - кур'єр</li> </ul>
- **slas** `Array` _(опціонально)_ - <p>Масив ID SLA, через кому, в яких підв'язані сервіси</p>
- **sla_rz_ids** `Array` _(опціонально)_ - <p>Масив внутрішніх ID SLA, через кому, в яких підв'язані сервіси</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields<br></p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування по полю</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці*<br> *<sup>Якщо передати 0 - всі записи виводяться на 1 сторінці</sup></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;deliveryServices&quot;: DeliveryService[], &quot;_meta&quot;: MetaResponse }</p>
- **DeliveryService** `Object` **_(обов'язково)_** - <p>DeliveryServiceModel</p>
- **DeliveryService.id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **DeliveryService.name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **DeliveryService.status** `Integer` **_(обов'язково)_** - <p>Статус служби доставки</p>
- **DeliveryService.type** `Integer` **_(обов'язково)_** - <p>Тип служби доставки</p>
- **DeliveryService.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID</p>
- **DeliveryService.can_edit** `Boolean` **_(обов'язково)_** - <p>Можна редагувати</p>
- **DeliveryService.can_use** `Boolean` **_(обов'язково)_** - <p>Можна використовувати</p>
- **DeliveryService.is_default** `Boolean` **_(обов'язково)_** - <p>Чи є службою доставки за замовчуванням</p>
**ExtraFields:**

- **pickup.titleTranslate** `String` **_(обов'язково)_** - <p>Назва на обраній мові</p>
- **pickup.delivery_methods** `Integer[]` **_(обов'язково)_** - <p>ID методів доставки:</p> <ul>     <li>1 - самовивіз</li>     <li>2 - кур'єр</li> </ul>
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
    "success":true,
    "content":{
        "deliveryServices":[
            {
               "id": 5,
               "name": "Сторонними службами доставки",
               "type": 1,
               "status": 1,
               "can_edit": false,
               "can_use": true,
               "is_default": true,
               "titleTranslate": "Сторонними службами доставки",
               "delivery_methods": [1,2]
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

### 2 Фільтр по точках самовивозу

**get** `/delivery-service-pickups/search`

<p>Отримання доступних відділень<br> ID служби доставки та ID населеного пункту – обов'язкові параметри</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **locality_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **status** `Integer` _(опціонально)_ - <p>Статус пункту самовивозу</p>
- **ext_id** `String` _(опціонально)_ - <p>Ext id (Зовнішній ID точки самовивозу)</p>
- **street** `String` _(опціонально)_ - <p>Вулиця або номер відділення</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування по полю</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці*<br> *<sup>Якщо передати 0 - всі записи виводяться на 1 сторінці</sup></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;deliveryServicePickups&quot;: DeliveryServicePickup[], &quot;_meta&quot;: MetaResponse }</p>
- **DeliveryServicePickup** `Object` **_(обов'язково)_** - <p>Model</p>
- **pickup.id** `Integer` **_(обов'язково)_** - <p>ID точки самовивозу</p>
- **pickup.rz_id** `String` **_(обов'язково)_** - <p>ID точки самовивозу в системі Розетка</p>
- **pickup.title** `String` **_(обов'язково)_** - <p>Назва</p>
- **pickup.locality_id** `Integer` **_(обов'язково)_** - <p>ID місця доставки</p>
- **pickup.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **pickup.status** `Integer` **_(обов'язково)_** - <p>Статус</p>
- **pickup.pickup_number** `String` **_(обов'язково)_** - <p>Номер точки самовивозу</p>
- **pickup.street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **pickup.house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **pickup.place_id** `Integer` **_(обов'язково)_** - <p>Id відділення</p>
- **pickup.number** `Integer` **_(обов'язково)_** - <p>Номер відділення</p>
- **pickup.ext_id** `String` **_(обов'язково)_** - <p>Ext id (Зовнішній ID точки самовивозу)</p>
- **pickup.longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **pickup.latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **pickup.can_edit** `Boolean` **_(обов'язково)_** - <p>Можливість редагування</p>
- **pickup.street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **pickup.schedule** `Json` **_(обов'язково)_** - <p>Графік роботи</p>
- **pickup.max_weight** `Integer` **_(обов'язково)_** - <p>Максимальна допустима вага вантажу</p>
- **pickup.pickup_type** `Integer|Null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
**ExtraFields:**

- **pickup.locality** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-LocalityDetails" class="nav-list-item">Населений пункт</a></b></p>
- **pickup.titleTranslate** `String` **_(обов'язково)_** - <p>Назва в залежності від мови з хедерів</p>
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
    "success":true,
    "content":{
        "deliveryServicePickups":[
            {
               "id": 1753444,
               "rz_id": "3655ed9e-438f-4888-bc03-c33a638b67b5",
               "title": "Симоненка 111",
               "locality_id": 451,
               "delivery_service_id": 1,
               "status": 1,
               "place_id": 864364,
               "pickup_number": null,
               "number": null,
               "street": "Симоненка",
               "house": "111",
               "latitude": "50.52258342",
               "longitude": "30.78868938",
               "ext_id": "1e7b27f1-97de-49af-86c1-a8e5f57d4dc1",
               "can_edit": false,
               "street_rz_id": "dbad7ca5-b810-4abf-baac-815fcb1aec60",
               "schedule": {
                   "Sunday": {
                       "from": "10:00",
                       "to": "18:00"
                   }
               },
               "max_weight": "30.00",
               "pickup_type":0,
               "locality": {
                   "id": 451,
                   "uuid": "77b2c3e8-5a22-40bc-8dc8-6a5034a2b9f1",
                   "city_name": "Бровари",
                   "name": "Бровары",
                   "name_ua": "Бровари",
                   "name_en": "Brovary",
                   "region_title": "Киевская обл.",
                   "title": "Бровары, Киевская обл.(Місто)",
                   "status": 1
               },
               "titleTranslate": "Видача у ROZETKA (Бровари), Відділення Василя Симоненка 111"
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

### 1 Фільтр по населеним пунктам

**get** `/localities/search`

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;localities&quot;: Locality[], &quot;_meta&quot;: MetaResponse }</p>
- **Locality** `Object` **_(обов'язково)_** - <p>LocalityModel</p>
- **city.id** `Integer` **_(обов'язково)_** - <p>ID міста</p>
- **city.uuid** `String` **_(обов'язково)_** - <p>Ідентифікатор міста в сервісі</p>
- **city.city_name** `String` **_(обов'язково)_** - <p>Назва міста</p>
- **city.name** `String` **_(обов'язково)_** - <p>Назва міста <code>[deprecated]</code></p>
- **city.name_ua** `String` **_(обов'язково)_** - <p>Назва міста ua <code>[deprecated]</code></p>
- **city.name_en** `String` **_(обов'язково)_** - <p>Назва міста en <code>[deprecated]</code></p>
- **city.title** `String` **_(обов'язково)_** - <p>Повна назва міста</p>
- **city.region_title** `String` **_(обов'язково)_** - <p>Назва регіону (області)</p>
- **city.status** `Number` **_(обов'язково)_** - <p>Статус (1 - активний, 0 - заблокований)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "localities":[
            {
               "id": 1,
               "uuid": "b205d*****bbdf27",
               "name": "Киев",
               "name_ua": "Київ",
               "name_en": null,
               "region_title": "",
               "title": "Киев",
               "status": 1
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

### 3 Вулиці (пошук вулиць по містах)

**get** `/streets/search`

<p>Пошук вулиць</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **locality_id** `Integer` **_(обов'язково)_** - <p>ID міста <code>Обов'язкове поле</code></p>
- **rz_id** `String` _(опціонально)_ - <p>ID в системі Розетка</p>
- **name** `String` _(опціонально)_ - <p>Назва</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **street.rz_id** `String` **_(обов'язково)_** - <p>ID в системі Розетка</p>
- **street.name** `String` **_(обов'язково)_** - <p>Назва (залежить від мови, переданої в хедерах)</p>
- **street.type** `String` **_(обов'язково)_** - <p>Тип</p>
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
     "streets": [
         {
             "rz_id": "ab071e23-b0ba-49f5-891b-44fd72696cc3",
             "name": "Шевченко [Троєщина]",
             "type": "вулиця"
         },
         {
             "rz_id": "74991a68-4fba-477b-8256-d3030f9b7d34",
             "name": "Шевченко [Жуляни]",
             "type": "вулиця"
         },
         {
             "rz_id": "5e37d44b-064a-4903-bbf2-39fc223f99c3",
             "name": "Шевченко [Жуляни]",
             "type": "провулок"
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

