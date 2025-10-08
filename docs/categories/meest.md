# Meest

### 2 Калькуляція вартості

**post** `/meests/calculate`

<p>Калькуляція вартості Meest Express</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **sendingDate** `String` _(опціонально)_ - <p>Дата відправлення в форматі  dd.MM.yyyy</p>
- **sender** `Object` **_(обов'язково)_** - <p><a href="#api-Models-MeestUserModel" class="nav-list-item">MeestUserModel</a> Дані відправника</p>
- **receiver** `Object` **_(обов'язково)_** - <p><a href="#api-Models-MeestUserModel" class="nav-list-item">MeestUserModel</a> Дані одержувача</p>
- **placesItems** `Array` **_(обов'язково)_** - <p><a href="#api-Models-MeestPlaceItem" class="nav-list-item">MeestPlaceItem</a>[] Дані про відправлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": {
  "data": {
    "costServices": "125",
    "estimatedDeliveryDate": "02.03.2020",
    "possibleDeliveryDates": [
      {
        "deliveryDate": "03.03.2020"
      },
      {
        "deliveryDate": "04.03.2020"
      },
    ]
  }
 }
}
```

---

### 1 Створення ТТН

**post** `/meests/create-ttn`

<p>Створення ТТН Meest Express</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **notation** `String` _(опціонально)_ - <p>Примітка</p>
- **sendingDate** `String` _(опціонально)_ - <p>Дата відправлення в форматі dd.mm.yyyy<br> <sup>Якщо параметр не переданий / порожній, то використовується поточна дата</sup></p>
- **payType** `String` **_(обов'язково)_** - <p>Тип оплати <br> <ul> <li><b>cash</b> - Готівковий</li> <li><b>noncash</b> - Безготівковий</li> </ul></p>
- **receiverPay** `Boolean` **_(обов'язково)_** - <p>Хто оплачує відправлення <br> <ul> <li><b>true</b> - одержувач</li> <li><b>false</b> - відправник</li> </ul></p>
- **COD** `Integer` _(опціонально)_ - <p>Накладений платіж / вартість зворотної відправки</p>
- **sender** `Object` **_(обов'язково)_** - <p><a href="#api-Models-MeestUserModel" class="nav-list-item">MeestUserModel</a> Дані відправника</p>
- **receiver** `Object` **_(обов'язково)_** - <p><a href="#api-Models-MeestUserModel" class="nav-list-item">MeestUserModel</a> Дані одержувача</p>
- **placesItems** `Array` **_(обов'язково)_** - <p><a href="#api-Models-MeestPlaceItem" class="nav-list-item">MeestPlaceItem</a>[] Дані про відправлення (доступний масив місць)</p>
- **expectedPickUpDate** `Object` _(опціонально)_ - <p><a href="#api-Models-MeestExpectedDate" class="nav-list-item">MeestExpectedDate</a> Бажана дата забору <br><code>Обов'язково заповнити якщо у відправника обрана доставка кур'єром</code></p>
- **cardForCOD** `Object` _(опціонально)_ - <p>Дані для зарахування післяплати на карту <br><code>Обов'язково заповнити якщо заповнено COD</code> <br><code>Заборонено передавати одночасно з contract_id</code></p>
- **cardForCOD.number** `String` **_(обов'язково)_** - <p>Номер картки</p>
- **cardForCOD.ownername** `String` _(опціонально)_ - <p>Ім'я власника</p>
- **cardForCOD.ownermobile** `String` **_(обов'язково)_** - <p>Номер телефона власника</p>
- **contract_id** `String` _(опціонально)_ - <p>ID контракта з Meest - для зарахування післяплати на розрахунковий рахунок юр особи <br><code>Обов'язково заповнити якщо заповнено COD</code> <br><code>Заборонено передавати одночасно з cardForCOD</code></p>
- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **DeliveryTtn.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки (включає комісію за накладений платіж)</p>
- **DeliveryTtn** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryTtn" class="nav-list-item">DeliveryTtnModel</a></b></p>
- **DeliveryTtn.id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **DeliveryTtn.ext_id** `String` **_(обов'язково)_** - <p>ID замовлення в сервісі доставки</p>
- **DeliveryTtn.ttn** `String` **_(обов'язково)_** - <p>Номер ТТН в сервісі доставки</p>
- **DeliveryTtn.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс <code>*Важливо!</code> Поле не використовується, повертаємо null, незабаром приберемо його з відповіді.</p>
- **DeliveryTtn.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення до якого прив'язана ТТН</p>
- **DeliveryTtn.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **DeliveryTtn.delivery_service_pickup_id** `Integer` **_(обов'язково)_** - <p>ID точки доставки</p>
- **DeliveryTtn.receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **DeliveryTtn.declared_price** `Number` **_(обов'язково)_** - <p>Заявлена вартість товару</p>
- **DeliveryTtn.status_updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення статусу замовлення</p>
- **DeliveryTtn.delivery_payer** `Integer` **_(обов'язково)_** - <p>Платник доставки:<br></p> <ul>      <li><b>0</b> - Відправник</li>      <li><b>1</b> - Одержувач</li>  </ul>
- **DeliveryTtn.payment_type** `Integer` **_(обов'язково)_** - <p>Тип платежу:<br></p>  <ul>         <li><b>0</b> - Готівкою</li>         <li><b>1</b> - Карта</li>  </ul>
- **DeliveryTtn.delivery_status_id** `String` **_(обов'язково)_** - <p>Id статусу доставки</p>
- **DeliveryTtn.delivery_address** `String` **_(обов'язково)_** - <p>Адреса доставки (кур'єром)</p>
- **DeliveryTtn.delivery_type** `Integer` **_(обов'язково)_** - <p>Тип доставки:<br></p> <ul>         <li><b>0</b> - На відділення</li>         <li><b>1</b> - На адресу</li>  </ul>
- **DeliveryTtn.oriented_delivery_date** `String` **_(обов'язково)_** - <p>Орієнтовна дата доставки</p>
- **DeliveryTtn.receiver_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **DeliveryTtn.comment** `String` **_(обов'язково)_** - <p>Коментар до ТТН</p>
- **DeliveryTtn.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису Дата створення ТТН</p>
- **DeliveryTtn.updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення запису Дата оновлення ТТН</p>
- **DeliveryTtn.cod_amount** `Number` **_(обов'язково)_** - <p>Сума накладного платежу</p>
- **DeliveryTtn.free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака акційного тарифу доставки</p>
- **DeliveryTtn.sender_pickup_name** `String` **_(обов'язково)_** - <p>Адреса відділення відправлення ТТН</p>
- **DeliveryTtn.group_id** `Number` **_(обов'язково)_** - <p>ID групи ТТН</p>
- **DeliveryTtn.type** `String` **_(обов'язково)_** - <p>Тип ТТН</p> <ul>         <li><b>EXPRESS</b></li>         <li><b>STANDARD</b></li>  </ul>
- **DeliveryTtn.post_pay_commission** `Number` **_(обов'язково)_** - <p>Сума комісії за накладений платіж</p>
- **DeliveryTtn.post_pay_by_recipient** `Boolean` **_(обов'язково)_** - <p>Хто має платити за комісію (true – одержувач, false – відправник)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "id": 71,
     "ext_id": "400304100",
     "ttn": "123412341234",
     "seller_id": 1234,
     "order_id": null,
     "delivery_service_id": 4,
     "delivery_service_pickup_id": null,
     "receiver_fio": "Петров Сергей",
     "declared_price": 1500,
     "status_updated_at": null,
     "delivery_price": 100,
     "delivery_payer": 1,
     "payment_type": 1,
     "delivery_address": null,
     "delivery_type": 0,
     "oriented_delivery_date": null,
     "receiver_phone": "+3809123456",
     "comment": "test",
     "updated_at": null,
     "created_at": "2020-01-27 16:03:49",
     "post_pay_commission": null
 }
}
```

---

### 7 Ініціалізація налаштувань Meest

**post** `/meests/create-ttn-settings`

<p>Ініціалізація налаштувань Meest (Створення налаштувань користувача. Здійснюється один раз)</p>

**Версія:** 0.0.2

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **selected_sender** `Object` **_(обов'язково)_** - <p>Обраний відправник <br> Допустимі значення: json, null</p>
- **selected_cargo** `Object` **_(обов'язково)_** - <p>Обраний вантаж <br> Допустимі значення: json, null</p>
- **count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **is_add_cost** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_order** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **is_add_items** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати назви і id товарів з замовлення</p>
- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 11845,
       "selected_sender": null,
       "selected_cargo": null,
       "count": null,
       "is_add_cost": null,
       "is_add_order": null,
       "is_add_items": null,
       "delivery_service_id": 4
   }
}
```

---

### 3 Отримання списку ТТН

**get** `/meests/ttn-list`

<p>Отримання списку ТТН Meest Express</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення прикріпленого до ТТН</p>
- **ext_id** `String` **_(обов'язково)_** - <p>Зовнішній ID замовлення (в службі доставки)</p>
- **ttn** `String` **_(обов'язково)_** - <p>Номер ТТН</p>
- **receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery_status_id** `String` _(опціонально)_ - <p>ID статусу замовлення <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>delivery_status_id=0,2</code></p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **meests** `DeliveryTtnModel[]` **_(обов'язково)_** - <p>Масив об'єктів ТТН</p>
- **DeliveryTtn.post_pay_deliver** `Integer` **_(обов'язково)_** - <p>Ознака яким чином отримати накладений платіж (null - без накладеного платіжу, 0 - готівкою, 1 - на розрахунковий рахунок (тільки для юр осіб), 2 - на картку)</p>
- **DeliveryTtn** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryTtn" class="nav-list-item">DeliveryTtnModel</a></b></p>
- **DeliveryTtn.id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **DeliveryTtn.ext_id** `String` **_(обов'язково)_** - <p>ID замовлення в сервісі доставки</p>
- **DeliveryTtn.ttn** `String` **_(обов'язково)_** - <p>Номер ТТН в сервісі доставки</p>
- **DeliveryTtn.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс <code>*Важливо!</code> Поле не використовується, повертаємо null, незабаром приберемо його з відповіді.</p>
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
- **DeliveryTtn.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису Дата створення ТТН</p>
- **DeliveryTtn.updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення запису Дата оновлення ТТН</p>
- **DeliveryTtn.cod_amount** `Number` **_(обов'язково)_** - <p>Сума накладного платежу</p>
- **DeliveryTtn.free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака акційного тарифу доставки</p>
- **DeliveryTtn.sender_pickup_name** `String` **_(обов'язково)_** - <p>Адреса відділення відправлення ТТН</p>
- **DeliveryTtn.group_id** `Number` **_(обов'язково)_** - <p>ID групи ТТН</p>
- **DeliveryTtn.type** `String` **_(обов'язково)_** - <p>Тип ТТН</p> <ul>         <li><b>EXPRESS</b></li>         <li><b>STANDARD</b></li>  </ul>
- **DeliveryTtn.post_pay_commission** `Number` **_(обов'язково)_** - <p>Сума комісії за накладений платіж</p>
- **DeliveryTtn.post_pay_by_recipient** `Boolean` **_(обов'язково)_** - <p>Хто має платити за комісію (true – одержувач, false – відправник)</p>
**ExtraFields:**

- **DeliveryTtn.delivery_service_pickup** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServicePickupDetails" class="nav-list-item">DeliveryServicePickup</a></b> <i>(ExtraField)</i></p>
- **DeliveryTtn.delivery_status_title** `String` **_(обов'язково)_** - <p>Назва статусу доставки <i>(ExtraField)</i></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "meests": [
            {
                "id": 34,
                "ext_id": "4321234",
                "ttn": "765445677654",
                "seller_id": 432,
                "order_id": null,
                "delivery_service_id": 4,
                "delivery_service_pickup_id": 4433,
                "receiver_fio": "Петров Сергей",
                "declared_price": 1500,
                "status_updated_at": "2020-01-27 16:03:49",
                "delivery_price": 100,
                "delivery_payer": 1,
                "payment_type": 1,
                "delivery_status_id": "e45667545756-ertr456",
                "delivery_address": null,
                "delivery_type": 0,
                "oriented_delivery_date": null,
                "receiver_phone": "+38076544567",
                "comment": "qwertyuiop",
                "updated_at": "2020-01-27 16:03:49",
                "created_at": "2020-01-27 16:03:49",
                "sender_pickup_name": "Україна, 49100, Дніпропетровська, Дніпровський, Дніпро, Героїв 3",
                "group_id": null,
                "type": null,
                "post_pay_commission": null
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

### 8 Отримання налаштувань Meest

**get** `/meests/ttn-settings`

<p>Отримання налаштувань Meest</p>

**Версія:** 0.0.2

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **selected_sender** `Object` **_(обов'язково)_** - <p>Обраний відправник <br> Допустимі значення: json, null</p>
- **selected-sender.type** `String` **_(обов'язково)_** - <p>Тип <br> Допустимі значення: company, individual</p>
- **selected-sender.client_id** `String` **_(обов'язково)_** - <p>ID користувача</p>
- **selected-sender.phone** `String` **_(обов'язково)_** - <p>Телефон відправника</p>
- **selected-sender.name** `String` **_(обов'язково)_** - <p>ПІБ відправника</p>
- **selected-sender.branchID** `String` **_(обов'язково)_** - <p>Id відділення</p>
- **selected-sender.cityID** `String` **_(обов'язково)_** - <p>Id міста у відправника</p>
- **selected-sender.regionID** `String` **_(обов'язково)_** - <p>Id регіона у відправника</p>
- **selected_cargo** `Object` **_(обов'язково)_** - <p>Обраний вантаж <br> Допустимі значення: json, null</p>
- **selected-cargo.weight** `Number` **_(обов'язково)_** - <p>Вага посилки в кг (max = 100) <br> Допустимі значення: float, null</p>
- **selected-cargo.description** `String` **_(обов'язково)_** - <p>Коментар до посилки (max = 100) <br> Допустимі значення: null</p>
- **selected-cargo.placesItems** `Array` **_(обов'язково)_** - <p><a href="#api-Models-MeestPlaceItem" class="nav-list-item">MeestPlaceItem</a>[] Дані про відправлення (доступний масив місць)</p>
- **count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **is_add_cost** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_order** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **is_add_items** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати назви і id товарів з замовлення</p>
- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": {
         "id": 2673,
         "selected_sender": {
             "name": "Петров Петр Петрович",
             "phone": "380664357902",
             "type": "individual",
             "cityID": "5cb61671-749b-11df-b112-00215aee3ebe",
             "branchID": "72921da2-464a-11e9-80dd-1c98ec135261",
             "regionID": "1520c190-d7f2-4987-8434-bb56d7572a36",
             "client_id": "asdf-ghjk-1234-5678"
         },
         "selected_cargo": {
             "weight": "15",
             "description": "Моё описание товара",
             "placesItems": [
                       {
                            "quantity": 1,
                            "weight": 5,
                            "insurance": 12,
                            "length": 1,
                            "width": 1,
                            "height": 1,
                            "volume": 0
                        },
                        {
                                "width": 2,
                                "height": 1,
                                "length": 1,
                                "volume": 0,
                                "weight": 5,
                                "quantity": 1,
                                "insurance": 12
                        }
                ],
         },
         "count": 0,
         "is_add_cost": false,
         "is_add_order": false,
         "is_add_items": false,
         "delivery_service_id": 4
     }
}
```

---

### 6 Отримання даних із замовлення

**get** `/meests/get-user-info/{orderId}`

<p>Отримання даних із замовлення для створення експрес накладної для Meest</p>

**Версія:** 0.0.2

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
- **placeNumber** `String` **_(обов'язково)_** - <p>Поштовий індекс</p>
- **country** `String` **_(обов'язково)_** - <p>Код країни доставки</p>
- **region** `String` **_(обов'язково)_** - <p>Назва області доставки</p>
- **district** `String` **_(обов'язково)_** - <p>Назва обласного району доставки</p>
- **city** `String` **_(обов'язково)_** - <p>Назва міста доставки</p>
- **street** `String` **_(обов'язково)_** - <p>Назва вулиці доставки</p>
- **houseNumber** `String` **_(обов'язково)_** - <p>Номер будинку доставки</p>
- **apartmentNumber** `String` **_(обов'язково)_** - <p>Номер квартири доставки</p>
- **branchId** `String` **_(обов'язково)_** - <p>ID відділення у Meest</p>
- **isReturnMoneyCost** `Boolean` **_(обов'язково)_** - <p>Ознака, чи включено зворотню доставку коштів</p>
- **delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Meest Express</p>
- **delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Meest Express</p>
- **delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Meest Express</p>
- **delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату для Meest Express</p>

#### Приклад відповіді

```json
{
    "success": boolean,
    "content": {
        "name": "Вася Пупкін",
        "phone": "380999999999",
        "amount": "496.00",
        "items": [
            {
                "id": 283349198,
                "name": "Енеїда Іван Котляревський",
                "name_ua":"Енеїда Іван Котляревський"
            }
        ],
        "deliveryType": "W2W",
        "placeNumber": "88888",
        "country": "UA",
        "region": "Закарпатська",
        "district": "Ужгородський",
        "city": "Ужгород",
        "street": "Кирила і Мефодія",
        "houseNumber": "99",
        "apartmentNumber": "100",
        "branchId": "6363b171-f192-11ec-80e7-000c29800ae7",
        "isReturnMoneyCost": false,
        "delivery_commission_info": {
             "percentage_commission": "1.5",
             "absolute_commission": "15.00",
             "calculated_commission": "20.00"
         }
    }
}
```

---

### 4 Пошук територіальних одиниць

**post** `/meests/search-locality`

<p>Пошук адміністративно-територіальних одиниць і підрозділів Meest Express<br> <code>Пагінація відсутня.</code></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **searchType** `String` **_(обов'язково)_** - <p>Тип пошуку <br> <ul> <li><b>searchCity</b> - місто</li> <li><b>searchRegion</b> - область</li> <li><b>searchBranch</b> - відділення</li> <li><b>searchAddress</b> - адреса</li> </ul> <b> Важливо! </b> Пошук по області, місту та адресою повертає максимум 15 записів.</p>
- **regionDescr** `String` _(опціонально)_ - <p>Шаблон пошуку по області <br><code>Обов'язково заповнити при searchType = searchRegion</code></p>
- **regionID** `String` _(опціонально)_ - <p>Унікальний ідентифікатор області <br><code>Обов'язково заповнити при searchType = searchCity</code></p>
- **cityDescr** `String` _(опціонально)_ - <p>Шаблон для пошуку населеного пункту <br><code>Обов'язково заповнити при searchType = searchCity</code></p>
- **cityID** `String` _(опціонально)_ - <p>Унікальний ідентифікатор міста <br><code>Обов'язково заповнити при searchType = searchBranch чи searchAddress</code></p>
- **addressDescr** `String` _(опціонально)_ - <p>Шаблон для пошуку вулиці <br><code>Обов'язково заповнити при searchType = searchAddress</code></p>
- **branchDescr** `String` _(опціонально)_ - <p>Назва відділення, адреса або номер <br><code>Обов'язково заповнити при searchType = searchBranch</code></p>
- **branchNo** `String` _(опціонально)_ - <p>Номер відділення <br></p>
- **branchId** `String` _(опціонально)_ - <p>Унікальний ідентифікатор відділення <br></p>
- **type** `String` _(опціонально)_ - <p>Ознака відділення що вказує чи підходить для відправки, або отримання посилки.<br> <code>sender</code> — повертає відділення для відправлення<br> <code>receiver</code> — повертає відділення для отримання</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **data** `Array` **_(обов'язково)_** - <p>Масив шуканих об'єктів</p>
- **MeestBranch** `Object` **_(обов'язково)_** - <p>Відділення Meest</p>
- **MeestBranch.branchID** `String` **_(обов'язково)_** - <p>ID відділення в системі Meest</p>
- **MeestBranch.branchNo** `String` **_(обов'язково)_** - <p>Номер відділення</p>
- **MeestBranch.branchType** `String` **_(обов'язково)_** - <p>Тип відділення</p>
- **MeestBranch.branchTypeID** `String` **_(обов'язково)_** - <p>ID типу відділення</p>
- **MeestBranch.branchTypeDescr** `String` **_(обов'язково)_** - <p>Опис типу відділення, і всіх важливих деталей по ньому (ua)</p>
- **MeestBranch.branchDescr** `Object` **_(обов'язково)_** - <p>Опис відділення</p>
- **MeestBranch.branchDescr.descrUA** `String` **_(обов'язково)_** - <p>Повна адреса відділення (ua)</p>
- **MeestBranch.branchDescr.descrSearchUA** `String` **_(обов'язково)_** - <p>Повна адреса відділення (для пошуку)</p>
- **MeestBranch.addressID** `String` **_(обов'язково)_** - <p>ID вулиці відділення (ua)</p>
- **MeestBranch.addressDescr** `Object` **_(обов'язково)_** - <p>Назва вулиці відділення (на різних мовах)</p>
- **MeestBranch.addressDescr.descrUA** `String` **_(обов'язково)_** - <p>Назва вулиці (ua)</p>
- **MeestBranch.addressDescr.descrRU** `String` **_(обов'язково)_** - <p>Назва вулиці (ru)</p>
- **MeestBranch.addressDescr.descrEN** `String` **_(обов'язково)_** - <p>Назва вулиці (en)</p>
- **MeestBranch.addressMoreInformation** `String` **_(обов'язково)_** - <p>Детальна інформація про місцезнаходження відділення</p>
- **MeestBranch.cityID** `String` **_(обов'язково)_** - <p>ID міста</p>
- **MeestBranch.cityDescr** `Object` **_(обов'язково)_** - <p>Назва міста (на різних мовах)</p>
- **MeestBranch.cityDescr.descrUA** `String` **_(обов'язково)_** - <p>Назва міста (ua)</p>
- **MeestBranch.cityDescr.descrRU** `String` **_(обов'язково)_** - <p>Назва міста (ru)</p>
- **MeestBranch.cityDescr.descrEN** `String` **_(обов'язково)_** - <p>Назва міста (en)</p>
- **MeestBranch.regionID** `String` **_(обов'язково)_** - <p>ID міста</p>
- **MeestBranch.regionDescr** `Object` **_(обов'язково)_** - <p>Назва області (на різних мовах)</p>
- **MeestBranch.regionDescr.descrUA** `String` **_(обов'язково)_** - <p>Назва області (ua)</p>
- **MeestBranch.regionDescr.descrRU** `String` **_(обов'язково)_** - <p>Назва області (ru)</p>
- **MeestBranch.regionDescr.descrEN** `String` **_(обов'язково)_** - <p>Назва області (en)</p>
- **MeestBranch.workingHours** `String` **_(обов'язково)_** - <p>Години роботи відділення</p>
- **MeestBranch.building** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **MeestBranch.zipCode** `String` **_(обов'язково)_** - <p>ZIP-код</p>
- **MeestBranch.latitude** `Number` **_(обов'язково)_** - <p>Широта (координати)</p>
- **MeestBranch.longitude** `Number` **_(обов'язково)_** - <p>Довгота (координати)</p>
- **MeestBranch.branchLimits** `MeestBranchLimits` **_(обов'язково)_** - <p><a href="#api-Models-MeestBranchLimits">Обмеження відділення</a></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success":true,
 "content":{
     "data":[
     {
         "regionID":"d15e3024-60b0-11de-be1e-0030485903e8",
         "regionKATUU":"4600000000",
         "regionDescr":{
             "descrUA":"ЛЬВІВСЬКА",
             "descrRU":"ЛЬВОВСКАЯ",
             "descrEN":"LVIVS`KA"
         },
         "countryID":"c35b6195-4ea3-11de-8591-001d600938f8",
         "descrCountry":{
             "descrUA":"УКРАЇНА",
             "descrRU":"УКРАИНА",
             "descrEN":"UKRAINE "
         }
     }
     ]
 }
}
```

```json
HTTP/1.1 200 OK
{

 "success":true,
 "content":{
     "data":[
         {
             "cityID":"5cb61a11-749b-11df-b112-00215aee3ebe",
             "cityKATUU":"4623683401",
             "cityDescr":{
                 "descrUA":"Конопниця",
                 "descrRU":"Конопница",
                 "descrEN":"Konopnytsia"
             },
             "districtID":"710c2705-41b9-11df-907f-00215aee3ebe",
             "districtDescr":{
                 "descrUA":"Пустомитівський",
                 "descrRU":"Пустомытовский",
                 "descrEN":"Pustomytivskyi"
             },
             "regionID":"d15e3024-60b0-11de-be1e-0030485903e8",
             "regionDescr":{
                 "descrUA":"ЛЬВІВСЬКА",
                 "descrRU":"ЛЬВОВСКАЯ",
                 "descrEN":"LVIVS`KA"
             },
             "countryID":"c35b6195-4ea3-11de-8591-001d600938f8",
             "isBranchInCity":false,
             "deliveryZone":"2",
             "deliveryDays":{
                 "Mon":false,
                 "Tue":true,
                 "Wed":false,
                 "Thu":false,
                 "Fri":true,
                 "Sat":false,
                 "Sun":false
             }
         },
 }
}
```

```json
HTTP/1.1 200 OK
{
"success": true,
"content": {
  "data": [
    {
      "addressID": "03e3e671-eda2-11df-b61a-00215aee3ebe",
      "addressDescr": {
        "descrUA": "вул. Центральна",
        "descrRU": "ул. Центральная",
        "descrEN": "Tsentralna st."
      },
      "cityID": "62c3d2e7-749b-11df-b112-00215aee3ebe"
    }
  ]
 }
}
```

```json
HTTP/1.1 200 OK
{
 "success":true,
 "content":{
     "data":[
     {
         "branchID":"1cc43d42-5d01-11e9-80df-1c98ec135261",
         "branchNo":8100,
         "branchType":"Міні-віділення",
         "branchTypeID":"91cb8fae-6a94-4b1d-b048-dc89499e2fe5",
         "branchTypeDesсr":"Міні-відділення: до 10 кг, прийом-видача відправлення, оплата карткою через сайт або термінали Приватбанк/EASY PAY/iBox.",
         "branchDescr":{
             "descrUA":"Львів-Червоної Калини просп.109",
             "descrSearchUA":"Львів просп. Червоної Калини,109"
         },
         "addressID":"da9107d2-e0d3-11df-9b37-00215aee3ebe",
         "addressDescr":{
             "descrUA":"просп. Червоної Калини",
             "descrRU":"просп. Красной Калины",
             "descrEN":"Chervonoi Kalyny ave."
         },
         "addressMoreInformation":"Маркет Сім23",
         "cityID":"62c3d54a-749b-11df-b112-00215aee3ebe",
         "cityDescr":{
             "descrUA":"Львів",
             "descrRU":"Львов",
             "descrEN":"Lviv"
         },
         "districtID":"8a199cde-41b9-11df-907f-00215aee3ebe",
         "districtDescr":{
             "descrUA":"Львів",
             "descrRU":"Львов",
             "descrEN":"Lviv"
         },
         "regionID":"d15e3024-60b0-11de-be1e-0030485903e8",
         "regionDescr":{
             "descrUA":"ЛЬВІВСЬКА",
             "descrRU":"ЛЬВОВСКАЯ",
             "descrEN":"LVIVS`KA"
         },
         "workingHours":"Пн-Сб 09:00-20:00, Нд 10:00-18:00",
         "building":"102",
         "zipCode":"79038",
         "latitude":49.815373,
         "longitude":24.077127,
         "branchLimits":{
             "weightTotalMax":29.99,
             "volumeTotalMax":0.08,
             "insuranceTotalMax":0,
             "weightPlaceMax":0,
             "quantityPlacesMax":0,
             "gabaritesMax":{
                 "length":61,
                 "width":37,
                 "height":35
             },
             "formatLimit":true,
             "cashPayUnavailible":true,
             "sendingOnly":false,
             "receivingOnly":false,
             "receiverCellPhoneRequired":true,
             "terminalCash":false
         }
     },{...}
 ]
 }
}
```

---

### 5 Друк ТТН

**get** `/meests/ttn-print/stickers`

<p>Друк стікерів</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Url Parameters:**

- **ttn** `String` **_(обов'язково)_** - <p>список ТТН для друку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл, прикріплений до повідомлення</p>

---

### 9 Зміна додаткових налаштувань для ТТН Meest

**put** `/meests/selected-settings`

<p>Зміна додаткових налаштувань для ТТН Meest</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Body Parameters:**

- **selected-sender** `Object` _(опціонально)_ - <p>Відправник</p>
- **selected-sender.phone** `String` **_(обов'язково)_** - <p>Телефон відправника</p>
- **selected-sender.type** `String` **_(обов'язково)_** - <p>Тип <br> Допустимі значення: company, individual</p>
- **selected-sender.client_id** `String` **_(обов'язково)_** - <p>ID користувача</p>
- **selected-sender.name** `String` **_(обов'язково)_** - <p>ПІБ відправника</p>
- **selected-sender.branchID** `String` **_(обов'язково)_** - <p>Id відділення доставки</p>
- **selected-sender.cityID** `String` **_(обов'язково)_** - <p>Id міста у відправника</p>
- **selected-sender.regionID** `String` **_(обов'язково)_** - <p>Id регіона у відправника</p>
- **selected-cargo** `Object` _(опціонально)_ - <p>Вантаж</p>
- **selected-cargo.weight** `Number` **_(обов'язково)_** - <p>Вага посилки в кг (max = 100) <br> Допустимі значення: float, null</p>
- **selected-cargo.description** `String` **_(обов'язково)_** - <p>Коментар до посилки (max = 100) <br> Допустимі значення: null</p>
- **selected-cargo.placesItems** `Array` _(опціонально)_ - <p><a href="#api-Models-MeestPlaceItem" class="nav-list-item">MeestPlaceItem</a>[] Дані про відправлення (доступний масив місць)</p>
- **setting-flags** `Object` _(опціонально)_ - <p>Параметри за замовчуванням</p>
- **setting-flags.is_add_cost** `Boolean` **_(обов'язково)_** - <p>Додавати вартість замовлення в &quot;Оголошена вартість&quot; у ТТН із замовлення</p>
- **setting-flags.is_add_items** `Boolean` **_(обов'язково)_** - <p>Додавати дані про товар в ТТН із замовлення</p>
- **setting-flags.is_add_order** `Boolean` **_(обов'язково)_** - <p>Додавати номер замовлення в ТТН із замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **selected_sender** `Object` **_(обов'язково)_** - <p>Обраний відправник <br> Допустимі значення: json, null</p>
- **selected-sender.type** `String` **_(обов'язково)_** - <p>Тип <br> Допустимі значення: company, individual</p>
- **selected-sender.client_id** `String` **_(обов'язково)_** - <p>ID користувача</p>
- **selected-sender.phone** `String` **_(обов'язково)_** - <p>Телефон відправника</p>
- **selected-sender.name** `String` **_(обов'язково)_** - <p>ПІБ відправника</p>
- **selected-sender.branchID** `String` **_(обов'язково)_** - <p>Id відділення</p>
- **selected-sender.cityID** `String` **_(обов'язково)_** - <p>Id міста у відправника</p>
- **selected-sender.regionID** `String` **_(обов'язково)_** - <p>Id регіона у відправника</p>
- **selected_cargo** `Object` **_(обов'язково)_** - <p>Обраний вантаж <br> Допустимі значення: json, null</p>
- **selected-cargo.weight** `Number` **_(обов'язково)_** - <p>Вага посилки в кг (max = 100) <br> Допустимі значення: float, null</p>
- **selected-cargo.description** `String` **_(обов'язково)_** - <p>Коментар до посилки (max = 100) <br> Допустимі значення: null</p>
- **selected-cargo.placesItems** `Array` **_(обов'язково)_** - <p><a href="#api-Models-MeestPlaceItem" class="nav-list-item">MeestPlaceItem</a>[] Дані про відправлення (доступний масив місць)</p>
- **count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **is_add_cost** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_order** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **is_add_items** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати назви і id товарів з замовлення</p>
- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": {
         "id": 2673,
         "selected_sender": {
             "name": "Петров Петр Петрович",
             "phone": "380664357902",
             "cityID": "5cb61671-749b-11df-b112-00215aee3ebe",
             "branchID": "72921da2-464a-11e9-80dd-1c98ec135261",
             "regionID": "1520c190-d7f2-4987-8434-bb56d7572a36"
         },
         "selected_cargo": {
             "weight": "15",
             "description": "Моё описание товара",
             "placesItems": [
               {
                    "quantity": 1,
                    "weight": 5,
                    "insurance": 12,
                    "length": 1,
                    "width": 1,
                    "height": 1,
                    "volume": 0
                },
                {
                        "width": 2,
                        "height": 1,
                        "length": 1,
                        "volume": 0,
                        "weight": 5,
                        "quantity": 1,
                        "insurance": 12
                }
        ],
         },
         "count": 0,
         "is_add_cost": false,
         "is_add_order": false,
         "is_add_items": false,
         "delivery_service_id": 4
     }
}
```

---

