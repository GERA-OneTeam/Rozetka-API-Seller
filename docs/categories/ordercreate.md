# OrderCreate

### 2.Отримання даних про доступні доставки і оплати

**post** `/v1/order-create/calculate`

<p>Отримання даних про доступні доставки і оплати</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **orders** `Object` **_(обов'язково)_** - <p>Перелік об'єктів замовлень<br> У поточній версії метод calculate вміщує split. Для того, щоб правильно передати товари для розбиття на замовлення, необхідно масив purchases помістити всередину дефолтного ключа <code>&quot;default&quot;</code> (див. приклад запиту)</p>
- **order.purchases** `PurchaseForm[]` **_(обов'язково)_** - <p>Масив товарів в замовленні</p>
- **order.purchases.item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.purchases.quantity** `Integer` **_(обов'язково)_** - <p>Кількість</p>
- **order.delivery** `DeliveryForm` **_(обов'язково)_** - <p><a href="#api-Models-DeliveryForm">Выбранная доставка</a></p>
- **order.payment_method_id** `Integer` _(опціонально)_ - <p>ID методу оплати<br> <ul><li>1 - Готівкова</li></ul></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {orders{}} }</p>
- **orders** `Object` **_(обов'язково)_** - <p>Дані по замовленнях <br> Перелік об'єктів замовлень <a href="#api-Models-OrderCalculateResponse">OrderCalculateResponse</a><br> Ключ кожного замовлення необхідний для подальшої обробки замовлення</p>
- **order.purchases** `PurchaseCO[]` **_(обов'язково)_** - <p>Масив товарів в замовленні <br> <a href="#api-Models-PurchaseCO"> Товар в замовленні </a></p>
- **order.delivery** `Object` **_(обов'язково)_** - <p>Дані про доступні доставки</p>
- **order.delivery.delivery_services_couriers** `DeliveryServiceCO[]` **_(обов'язково)_** - <p>Список доступних сервісів з методом доставки &quot;Кур'єр&quot; <br> <a href="#api-Models-DeliveryServiceCO">Сервіс доставки</a></p>
- **order.delivery.delivery_services_pickups** `DeliveryServiceCO[]` **_(обов'язково)_** - <p>Список доступних сервісів з методом доставки&quot;Самовивіз&quot; <b> зі вкладеними пунктами самовивозу</b> <br> <a href="#api-Models-DeliveryServiceCO">Сервіс доставки</a></p>
- **order.delivery.delivery_methods** `DeliveryMethodCO[]` **_(обов'язково)_** - <p>Список доступних методів доставки <br> <a href="#api-Models-DeliveryMethodCO"> Метод доставки </a></p>
- **order.delivery.active_delivery** `DeliveryForm` **_(обов'язково)_** - <p>Дані про активну (обрану) доставку <br> <a href="#api-Models-DeliveryForm">Обрана доставка</a></p>
- **order.delivery.locality** `LocalityCO` **_(обов'язково)_** - <p><a href="#api-Models-LocalityCO"> Місто </a></p>
- **order.payments** `PaymentMethodCO[]` **_(обов'язково)_** - <p>Список доступних методів оплати <br> <a href="#api-Models-PaymentMethodCO">Метод оплати </a></p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "orders": {
         "165_40":{
             "purchases":[
                 {
                     "item_id": 1928394,
                     "quantity": 2,
                     "cost": 900,
                     "cost_with_discount": 900,
                     "price": 450,
                     "price_with_discount": 450,
                     "old_price": 0,
                     "item":{
                         "id": 1928394,
                         "title": "Квітаріум (Банда Умников - 106651)",
                         "category":{"id": 98280, "title": "Настольные игры"},
                         "sla_rz_id": 40,
                         "url": "https://rozetka.com.ua/1928394/p1928394/",
                         "photo_preview": "https://i1.rozetka.ua/goods/11461551/78270716_images_1928394.png",
                         "stock_quantity": 2
                     }
                 },
                 {"item_id": 88991100, "quantity": 1...}
             ],
             "delivery":{
                 "delivery_services_couriers":[
                     {
                         "id": 5,
                         "title": "Новая Почта",
                         "active": true,
                         "pickups":[]
                     }
                 ],
                 "delivery_services_pickups":[
                     {
                         "id": 5,
                         "title": "Новая Почта",
                         "active": true,
                         "pickups":[
                             {
                                 "id": 15139,
                                 "deliveryServiceId": 5,
                                 "house": "135",
                                 "number": "1",
                                 "street": "ул. Пироговский путь",
                                 "schedule": "Пн-Пт: 08:00-22:00; Сб: 08:00-19:00; Вс: 09:00-18:00",
                                 "latitude": "50.354786",
                                 "longitude": "30.542884",
                                 "maximumHeight": 600,
                                 "maximumWeight": 1100,
                                 "forBreakable": true,
                                 "status": "active",
                                 "title": "1, ул. Пироговский путь 135"
                             },
                             {...}
                         ]
                     },
                     {
                         "id": 5282,
                         "title": "Джастин",
                         "active": false,
                         "pickups":[...]
                     }
                 ],
                 "delivery_methods":[
                     {
                         "id": 1,
                         "name": "pickups",
                         "needAddress": false,
                         "title": "Самовывоз",
                         "active": true
                     },
                     {
                         "id": 2,
                         "name": "couriers",
                         "needAddress": true,
                         "title": "Курьер",
                         "active": false
                     }
                 ],
                 "active_delivery":{
                     "service_id": 5,
                     "method_id": 1,
                     "pickup_id": null,
                     "pickup_title": null,
                     "street_id": null,
                     "street_title": null,
                     "delivery_window": null
                 },
                 "locality":{
                     "id": 1,
                     "title": "Киев",
                     "bigCity": true,
                     "regionTitle": null
                 }
             },
             "payments": [
                 {
                     "paymentMethodId": 1,
                     "title": "Наличная",
                     "type": "cash",
                     "disableCertificate": false,
                     "disableCoupon": false,
                     "infoIcon": "https://i1.rozetka.ua/payments_methods/info/0/47.png",
                     "canPayWithToken": false,
                     "emailRequire": false,
                     "additionalFields": [
                     ]
                 }
             ]
         }
     }
}
```

---

### 3.Створення замовлення

**post** `/v1/order-create/create`

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **orders** `Object` **_(обов'язково)_** - <p>Перелік об'єктів замовлень <br> Кожне замовлення повинно мати ключ у вигляді рядка, який можна отримати через <a href="#api-OrderCreate-PostCalculate">Отримання даних про доступні доставки та оплати</a><br> Обробка кожного замовлення йде по ключу, приклад ключа: <code>&quot;165_40&quot;</code></p>
- **orderKey** `String` _(опціонально)_ - <p>Ключ замовлення</p>
- **purchases** `PurchaseForm[]` **_(обов'язково)_** - <p>Масив <a href="#api-Models-PurchaseForm"> товарів в замовленні </a></p>
- **delivery** `DeliveryForm` **_(обов'язково)_** - <p><a href="#api-Models-DeliveryForm"> Обрана доставка </a></p>
- **recipient** `RecipientForm` **_(обов'язково)_** - <p><a href="#api-Models-RecipientForm"> Одержувач </a></p>
- **payment_method_id** `Integer` _(опціонально)_ - <p>ID методу оплати</p>
- **user_id** `Integer` _(опціонально)_ - <p>ID покупця *Не обов'язково до заповнення при повністю введених даних про одержувача</p>
- **comment** `String` _(опціонально)_ - <p>Коментар до замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Show-Warnings** `Boolean` **_(обов'язково)_** - <p>Отримання попереджень щодо невалідних полів, тощо <br> <i>Якщо немає необхідності отримувати попередження - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {orders{}} }</p>
- **orders** `Object` **_(обов'язково)_** - <p>Перелік об'єктів замовлень <br> Ключем кожного вкладеного об'єкта виступає ID створеного замовлення</p>
- **order.order_id** `Integer` **_(обов'язково)_** - <p>ID створеного замовлення</p>
- **order.orderKey** `String` **_(обов'язково)_** - <p>Ключ замовлення</p>
- **order.delivery_time** `Array` **_(обов'язково)_** - <p>Час доставки</p>
- **order.delivery_time_text** `String` **_(обов'язково)_** - <p>Час доставки в текстовому вигляді</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "orders":{
         "627136472":{
             "order_id": 627136472,
             "orderKey": "165_40",
             "delivery_time":[],
             "delivery_time_text": ""
         }
     }
 }
}
```

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "orders":{
         "627136472":{
             "order_id": 627136472,
             "orderKey": "165_40",
             "delivery_time":[],
             "delivery_time_text": ""
         }
     },
     "warnings":{
         "627136472":[
             "Номер телефона покупця в чорному списку, не рекомендуємо використовувати оплату готівкою"
         ]
     }
 }
}
```

---

### 1.Поділ товарів на замовлення

**post** `/v1/order-create/split`

**Версія:** 1.0.0

---

