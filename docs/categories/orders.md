# Orders

### 8.9.1 Підтвердження фулфілмент замовлення

**post** `/orders/approve-ff-order/{id}`

<p>Підтвердження фулфілмент замовлення</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення (унікальний ID)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {OrderModel} }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
     "success":true,
     "content": {
         "id":101647918,
         "created":"2017-08-15 10:20:59",
         "changed": "2019-05-16 17:11:07",
         "amount":"340.00",
         "amount_with_discount":"340.00",
         "cost":"340.00",
         "cost_with_discount":"340.00",
         "status":3,
         "status_group":1,
         "items_photos":[],
         "seller_comment":[],
         "seller_comment_created":"",
         "current_seller_comment":"",
         "comment":"",
         "user_phone":"380112141214",
         "from_warehouse":0,
         "ttn":"34543542352346",
         "total_quantity":1,
         "can_copy": false,
         "created_type": 4,
         "payment_type_name":"Тестовый_кредит_маркет",
         "callback_off":0,
         "is_fulfillment": false,
         "duplicate_order_id": 112,
         "invoice_exist": true,
         "can_create_invoice": true,
         "chatUser": {
             "id":205752,
             "created":"2017-08-15 10:20:24",
             "updated":"2017-08-15 10:20:25",
             "subject":"Заказ № 101647918",
             "user":{
                 "id":10621442,
                 "has_email": true,
                 "contact_fio":"Юлия Шевченко",
                 "email":"true"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101647918,
             "type":0,
             "item_id":null,
             "user_id":10621442,
             "unread_messages_count": 0
         },
         "chatMessages": [{
             "chat_id":205506,
             "body":"Поздравляем! Поступил новый заказ № 101615935...",
             "created":"2017-08-14 22:15:25",
             "user_id":42,
             "sender_hide":1,
             "seller":null,
             "seller_id":null
         },...]
         "user": {
             "id":10621442,
             "has_email": true,
             "contact_fio": "Василенко Василь",
             "email":"true"
         },
         "delivery":{
             "delivery_service_id":5,
             "delivery_service_name": "Новая Почта",
             "recipient_title":"Шевченко Юлия",
             "place_id":35566,
             "place_street":"",
             "place_number":"363",
             "place_house":"Мини-отделение",
             "place_flat":"",
             "cost":"0.00",
             "reserve_date": "2022-03-28",
             "city":{
                 "id": 1,
                  "name": "Киев",
                  "region_title": "",
                  "title": "Киев",
                  "status": 1
             },
             "delivery_method_id": 1,
              "ref_id": "9e9c238c-5878-11e9-a703-005056b24375",
              "name_logo": "nova-pochta"
         },
         "purchases": [{
             "id":145735205,
             "cost":"280.00",
             "cost_with_discount":"249.00",
             "price":"280.10",
             "price_with_discount":"249.00",
             "quantity":1,
             "item_id":6629229,
             "item_name":"Сомнение. Манифест для тех, кто готов выйти из толпы",
             "kit_id":0,
             "item": {
                   "id": 38225280,
                   "name": "C++ для чайников, 7-е издание",
                   "name_ua": null,
                   "article": "",
                   "price_offer_id": "2972",
                   "price": "413.00",
                   "catalog_category": {
                       "id": 4326663,
                       "name": "Научная и техническая литература",
                       "parent_id": 4326572
                   },
                   "catalog_id": 4326663,
                   "group_id": null,
                   "photo_preview": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
                   "photo": [
                       "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg"
                   ],
                   "moderation_status": 0,
                   "sla_id": 11558,
                   "url": "https://rozetka.com.ua/38225280/p38225280",
                   "sold": 0,
                   "uploader_offer_id": "2972",
                   "uploader_status": null
               },
             "conf_details": null,
             "ttn": null,
             "order_status": null,
             "status": 1,
             "is_additional_item": false
         }],
         "status_available": [
           {
               "parent_id": 2,
               "child_id": 26,
               "id": 159,
               "delivery_type": 1,
               "market_group": 0
           },
           {
               "parent_id": 2,
               "child_id": 4,
               "id": 147,
               "delivery_type": 1,
               "market_group": 0
           }
         ],
         "is_access_change_order":true,
         "payment_type": "undefined",
          "credit_info": [],
         "order_status_history":[{
                 "status_id":2,
                 "created":"2017-08-15 09:30:29",
                 "status":{
                     "id":2,
                     "name":"Комплектується. Дані підтверджені",
                     "status_group":1,
                     "status":1
                 }
              }],
         "payment_type_title": "Готівкова",
         "payment_type_name": "Оплата під час отримання товару",
         "delivery_service": {
              "id": 5,
              "name": "Новая Почта",
              "type": 0,
              "status": 1,
              "can_edit": false,
              "can_use": true
          },
         "status_data": {
             "id": 5,
             "name": "Ожидает в пункте самовывоза",
             "name_ua": "Очікує в пункті самовивозу",
             "name_en": "Waiting at pickup station",
             "type": 1,
             "status": 1,
             "color": "#221F1F"
         },
         "status_payment": {
              "order_id":183962235,
              "status_payment_id":1,
              "name":"cancelled",
              "title":"Отменен",
              "value":1,
              "created_at":"2019-12-17 11:09:36"
         },
         "payment_status": "Очікує оплату",
         "can_edit": true,
         "feedback": [{
             "id": 11,
             "comment": "Some text"
         }],
         "feedback_count": 1,
         "is_promo": false,
         "is_access_change_order": true,
         "payment_invoice_id":59999999,
         "delivery_prices": {
           "delivery_price": "18.00",
           "post_pay_commission": "12.17"
         },
         "refund_status": null,
         "ff_can_approve": true,
         "is_review_request_send": 0,
         "review_request_status": "Відгук є",
         "reminder_to_check_payment_for_duplicates": {
              "to_show_reminder": false,
              "message": null
         },
         "delivery_commission_info": {
              "percentage_commission": "15",
              "absolute_commission": "5.00",
              "calculated_commission": "12.00"
         },
         "count_buyer_orders": 123,
         "rz_delivery_ttn_sender": {
              "city": "d2ab80d6-1c4e-4ff9-b789-092914d451c6",
              "info": null,
              "name": "Петров Петр Петрович",
              "type": "natural",
              "phones":["380664357902"],
              "address": "г.Киев, ул. Кирпаноса 26",
              "department": "25d64bf9-f1f2-422a-89c5-1d8837ab7d77"
         },
         "is_reserve_ending": false
     }
}
```

---

### 6.1 Створити файл експорту замовлень

**get** `/orders/create-export-file`

<p>Створити файл експорту замовлень (використовуючи параметри фільтру по замовленням)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc).</p>

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **item_id** `String` _(опціонально)_ - <p>ID товару в замовленні | Назва товару (пошук працює також по частині назви)</p>
- **status** `Integer` _(опціонально)_ - <p>Статус замовлення.</p>
- **delivery_id** `Integer` _(опціонально)_ - <p>ID служби доставки.</p>
- **created_from** `String` _(опціонально)_ - <p>Дата створення замовлення: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата створення замовлення: до</p>
- **changed_from** `String` _(опціонально)_ - <p>Дата зміни від...</p>
- **changed_to** `String` _(опціонально)_ - <p>Дата зміни до...</p>
- **userName** `String` _(опціонально)_ - <p>ПІБ отримувача</p>
- **user_phone** `String` _(опціонально)_ - <p>Телефон покупця</p>
- **seller_comment** `String` _(опціонально)_ - <p>Коментар продавця</p>
- **amountFrom** `Number` _(опціонально)_ - <p>Сума замовлення: від</p>
- **amountTo** `Number` _(опціонально)_ - <p>Сума замовлення: до</p>
- **ttn** `String` _(опціонально)_ - <p>ТТН <br> <ul> <li>0 - всі замовлення, які не мають ТТН</li> <li>1 - всі замовлення, які мають ТТН</li> <li>рядок від 4 символів * - пошук по ТТН і частковий пошук по ТТН</li> </ul> <sup> *Важливо: при передачі рядка менш 4х символів пошук поверне порожній масив даних<br> Дозволені символи: <code> літери, цифри </code> </sup></p>
- **user_feedback** `Number` _(опціонально)_ - <p>Наявність скарг на замовлення <br> <ul> <li>0 - всі замовлення на які є скарги</li> <li>1 - всі замовлення на які немає скарг</li> </ul></p>
- **localities** `String` _(опціонально)_ - <p>ID міста куди доставляється замовлення. <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>localities=1,25</code></p>
- **deliveries** `String` _(опціонально)_ - <p>ID служби доставки <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>deliveries=1,25</code></p>
- **payment_methods** `String` _(опціонально)_ - <p>ID методу оплати <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>payment_methods=1,4242</code></p>
- **type** `Number` _(опціонально)_ - <p>Типи замовлень (В обробці, Успішно завершені, Неуспішно завершені).</p>
- **types** `Number` _(опціонально)_ - <p>Типи замовлень (альтернативне групування по статусах)<br> <i>Замінює параметр <b>type</b>, разом два параметра не використовуються.</i> <ul> <li>1 - всі замовлення</li> <li>2 - в обробці</li> <li>3 - успішно завершені</li> <li>4 - нові</li> <li>5 - доставляються</li> <li>6 - неуспішно завершені</li> </ul></p>
- **is_viewed** `Boolean` _(опціонально)_ - <p>Чи переглянуто замовлення</p>
- **is_fulfillment** `Boolean` _(опціонально)_ - <p>Чи проходить замовлення по системі Фулфілмент</p>
- **is_promo** `Boolean` _(опціонально)_ - <p>Замовлення прийшло за рекламою (1 - так/ 0 - ні)</p>
- **status_payment_id** `Integer` _(опціонально)_ - <p>ID статусу оплати замовлення.</p>
- **has_market_review** `Boolean` _(опціонально)_ - <p>Чи є відгук про продавця  (1 - так/ 0 - ні)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":true
}
```

---

### 6.3 Завантажити файл експорту замовлень

**get** `/orders/download-export-file`

<p>Завантажити файл експорту замовлень</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл замовлень магазину (.xls)</p>

---

### 1.4.6 Отримання данних для редагування доставки в замовленні

**get** `/orders/available-deliveries`

<p>Отримання данних для редагування доставки в замовленні</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **sla_rz_id** `Integer` **_(обов'язково)_** - <p>ID SLA в системі Розетка</p>
- **payment_method_id** `Integer` **_(обов'язково)_** - <p>ID методу оплати</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **delivery_methods** `Object` **_(обов'язково)_** - <p>Методи доставки</p>
- **delivery_methods.id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **delivery_methods.name** `String` **_(обов'язково)_** - <p>Назва методу доставки</p>
- **delivery_service_couriers** `Object` **_(обов'язково)_** - <p>Способи доставки кур'єром</p>
- **delivery_service_couriers.id** `Integer` **_(обов'язково)_** - <p>ID способу доставки кур'єром</p>
- **delivery_service_couriers.mdm_id** `String` **_(обов'язково)_** - <p>ID способу доставки кур'єром (hash)</p>
- **delivery_service_couriers.name** `String` **_(обов'язково)_** - <p>Назва способу доставки кур'єром</p>
- **delivery_service_pickups** `Object` **_(обов'язково)_** - <p>Способи доставки на відділення</p>
- **delivery_service_pickups.id** `Integer` **_(обов'язково)_** - <p>ID способу доставки на відділення</p>
- **delivery_service_pickups.mdm_id** `String` **_(обов'язково)_** - <p>ID способу доставки на відділення (hash)</p>
- **delivery_service_pickups.name** `String` **_(обов'язково)_** - <p>Назва способу доставки на відділення</p>
- **delivery_service_virtual** `Object` **_(обов'язково)_** - <p>Віртуальні способи доставки</p>
- **delivery_service_virtual.id** `Integer` **_(обов'язково)_** - <p>ID віртуального способу доставки</p>
- **delivery_service_virtual.mdm_id** `String` **_(обов'язково)_** - <p>ID віртуального способу доставки (hash)</p>
- **delivery_service_virtual.name** `String` **_(обов'язково)_** - <p>Назва віртуального способу доставки</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "delivery_methods": [
          {
              "id": 2,
              "name": "Кур'єр"
          },
          {
              "id": 1,
              "name": "Самовивіз"
          }
      ],
      "delivery_service_couriers": [
          {
              "id": 5,
              "mdm_id": "bdbbcc43-c4c5-4557-bf19-3ef4c76d6b17",
              "name": "Нова Пошта"
          }
      ],
      "delivery_service_pickups": [
          {
              "id": 5,
              "mdm_id": "bdbbcc43-c4c5-4557-bf19-3ef4c76d6b17",
              "name": "Нова Пошта"
          },
          {
              "id": 1234,
              "mdm_id": "some-hash-data",
              "name": "З магазину"
          }
      ],
      "delivery_service_virtual": [
          {
              "id": 5525,
              "mdm_id": "some-hash-data",
              "name": "Virtual"
          }
      ]
  }
}
```

---

### 6.2 Отримати дані експорту замовлень

**get** `/orders/get-export-data`

<p>Отримати дані експорту замовлень</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **export_file_created** `Boolean` **_(обов'язково)_** - <p>true – доступний, false – недоступний</p>
- **export_file_status** `Integer` **_(обов'язково)_** - <p>Статус експорту (0-файлу немає,1-у черзі на формування,2-доступний для скачування)</p>
- **export_file_date** `String` **_(обов'язково)_** - <p>Дата останнього сформованого файлу</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":{
         "export_file_created": true,
         "export_file_status": 2,
         "export_file_date": "2023-03-08 09:33:47"
     }
}
```

---

### 8.6.2 Доступні для замовлення методи оплати

**get** `/orders/available-payments`

<p>Перелік доступних для замовлення методів оплати<br> <code>*Важливо!</code> Методи оплати, що повертаються, залежать від статусу замовлення, поточного статусу оплати, типу оплати, методу доставки.<br> Якщо статус замовлення не відповідає тому, в якому доступна зміна оплати, список повернеться порожнім.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **payments** `Object[]` **_(обов'язково)_** - <p>Методи оплати</p>
- **payments.id** `Integer` **_(обов'язково)_** - <p>Id методу оплати</p>
- **payments.name** `String` **_(обов'язково)_** - <p>Назва методу оплати (залежно від вибраної мови)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content":{
     "payments":[
         {
             "id": 2,
             "name": "Безготівковий для фізичних осіб"
         }
     ]
   }
}
```

---

### 1.1 Кількість замовлень

**get** `/orders/counts-new`

<p>Кількості замовлень &quot;В обробці&quot;, &quot;Успішно завершені&quot;, &quot;Скасовані&quot;, &quot;Нові&quot;, &quot;Доставляються&quot;</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **inProgress** `Integer` **_(обов'язково)_** - <p>Кількість замовлень в обробці</p>
- **inDone** `Integer` **_(обов'язково)_** - <p>Кількість успішно завершених замовлень</p>
- **inNotDone** `Integer` **_(обов'язково)_** - <p>Кількість скасованих замовлень</p>
- **new** `Integer` **_(обов'язково)_** - <p>Кількість нових замовлень</p>
- **delivering** `Integer` **_(обов'язково)_** - <p>Кількість замовлень в процесі доставки</p>
- **unwatched** `Integer` **_(обов'язково)_** - <p>Кількість непереглянутих замовлень (у всіх статусах)</p>
- **all** `Integer` **_(обов'язково)_** - <p>Загальна кількість замовлень</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "inProgress": 8,
          "inDone": 236,
          "inNotDone": 251,
          "new":0,
          "delivering":757,
          "unwatched": 0,
          "all": 495
      }
}
```

---

### 1 Кількість замовлень

**get** `/orders/counts`

<p>Кількості замовлень &quot;В обробці&quot;, &quot;Успішно завершені&quot;, &quot;Скасовані&quot;</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **inProgress** `Integer` **_(обов'язково)_** - <p>Кількість замовлень в обробці</p>
- **inDone** `Integer` **_(обов'язково)_** - <p>Кількість успішно завершених замовлень</p>
- **inNotDone** `Integer` **_(обов'язково)_** - <p>Кількість скасованих замовлень</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "inProgress": 8,
          "inDone": 236,
          "inNotDone": 251
      }
}
```

---

### 1.2 Деталі замовлення

**get** `/orders/{id}`

<p>Отримання даних про замовлення по його ID</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення (унікальний ID)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields <br><i>item_details</i> is used with <i>purchases</i></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {OrderModel} }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatDetails" class="nav-list-item">Chat</a></b>. <br>Переписка с покупцем</p>
- **order.chatMessages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails" class="nav-list-item">ChatMessage</a></b>[] <br>Повідомлень переписки з покупцем</p>
- **order.credit_info** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderCreditInfoDetails" class="nav-list-item">OrderCreditInfo</a></b>[] <br>Інформація про кредит</p>
- **order.status_data** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusDetails" class="nav-list-item">OrderStatus</a></b> Розширена інформація про статус замовлення</p>
- **order.order_status_history** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusHistoryDetails" class="nav-list-item">OrderStatusHistory</a></b>[]. <br> Історія статусів замовлення</p>
- **order.user** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-UserDetails" class="nav-list-item">UserModel</a></b> <br> Інформація про покупця</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryDetails" class="nav-list-item">Delivery</a></b>. <br> інформація про доставку</p>
- **order.delivery_service** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServiceModelDetails" class="nav-list-item">DeliveryService</a></b>. <br> Інформація про службу доставки</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>[]. <br> Список товарів в замовленні</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetails" class="nav-list-item">StatusAvailable</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.status_available_detailed** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetailedModel" class="nav-list-item">StatusAvailableDetailed</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для редагування</p>
- **order.payment** `Object` **_(обов'язково)_** - <p>Всі дані про оплату замовлення в єдиному вкладеному об'єкті <br><b>*Рекомендується використовувати це поле замість усіх expand-полів, що належать до оплати та кредиту</b> <br><a href="#api-Models-OrderPaymentData" class="nav-list-item">OrderPaymentData</a></p>
- **order.payment_type** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **order.payment_method_id** `Boolean` **_(обов'язково)_** - <p>ID методу оплати</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **order.payment_type_title** `String` **_(обов'язково)_** - <p>Назва типу оплати</p>
- **order.status_payment** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusPayment" class="nav-list-item">Статус оплати </a></b> (об'єкт)</p>
- **order.payment_status** `String` **_(обов'язково)_** - <p>Статус оплати (найменування, строка)</p>
- **order.payment_invoice_id** `Integer` **_(обов'язково)_** - <p>Id рахунку на оплату замовлення</p>
- **order.credit_status** `String` **_(обов'язково)_** - <p>Статус кредиту<ul> <li>1 - Відхилений продавцем,</li> <li>2 - Новий,</li> <li>3 - В роботі,</li> <li>4 - Схвалений,</li> <li>5 - Відхилений,</li> <li>6 - Відмова клієнта від кредиту</li> </ul></p>
- **order.credit_broker** `String` **_(обов'язково)_** - <p>Кредитний брокер</p>
- **order.is_promo** `Boolean` **_(обов'язково)_** - <p>Чи наявні в замовленні товари по яким перейшли за рекламним посиланням</p>
- **order.can_edit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можна редагувати замовлення</p>
- **order.feedback** `UserFeedback[]` **_(обов'язково)_** - <p><b><a href="#api-Models-UserFeedback" class="nav-list-item">UserFeedback</a></b>[]. Список скарг на замовлення</p>
- **order.feedback_count** `Integer` **_(обов'язково)_** - <p>Кількість скарг на замовлення</p>
- **order.is_fixed_campaign_order** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є в замовленні товари додані з переходу з фіксованого рекламного оголошення</p>
- **order.is_free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака, чи проходить замовлення по безкоштовній доставці</p>
- **order.is_payed** `Boolean` **_(обов'язково)_** - <p>Ознака, чи замовлення сплачено картою</p>
- **order.is_receiver_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування даних отримувача</p>
- **order.delivery_prices** `Array` **_(обов'язково)_** - <p>Вартості доставки</p>
- **order.delivery_prices.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **order.delivery_prices.post_pay_commission** `Number` **_(обов'язково)_** - <p>Комісія за накладений платіж</p>
- **order.market_review** `Boolean` **_(обов'язково)_** - <p>Відгук про продавця</p>
- **order.last_update_status** `String` **_(обов'язково)_** - <p>Час останньої зміни статусу замовлення</p>
- **order.reminder_to_check_payment_for_duplicates** `Object` **_(обов'язково)_** - <p>Об'єкт для нагадування перевірки статуса оплати для дублів замовлень</p>
- **order.reminder_to_check_payment_for_duplicates.to_show_reminder** `Boolean` **_(обов'язково)_** - <p>Чи показувати нагадування</p>
- **order.reminder_to_check_payment_for_duplicates.message** `String` **_(обов'язково)_** - <p>Текст повідомлення нагадування</p>
- **order.invoice_exist** `Boolean` **_(обов'язково)_** - <p>Чи є в замовленні рахунки</p>
- **order.can_create_invoice** `Boolean` **_(обов'язково)_** - <p>Чи доступне створення рахунку</p>
- **order.need_label** `Boolean` **_(обов'язково)_** - <p>Чи потрібні посилці замовлення додаткові стікери</p>
- **order.delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж</p>
- **order.delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках</p>
- **order.delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні</p>
- **order.delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату</p>
- **order.rz_delivery_ttn_sender** `Object|null` **_(обов'язково)_** - <p><a href="#api-Models-RZDeliverySenderResponse">Відправник</a>, вказаний у ТТН для доставки через ROZETKA Delivery</p>
- **order.count_buyer_orders** `Number` **_(обов'язково)_** - <p>Кількість покупок клієнта (враховуються замовлення у всіх статусах, кількість замовлень клієнта на даний момент)</p>
- **order.is_reserve_ending** `Boolean` **_(обов'язково)_** - <p>Ознака, чи закінчується термін резерву (за два дні)</p>
- **order.has_kit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є комплект в замовленні</p>
- **order.carrier** `Object` **_(обов'язково)_** - <p>Перевізник РЗ Делівері</p>
- **order.carrier.carrier** `String|Null` **_(обов'язково)_** - <p>MDM ID перевізника</p>
- **order.carrier.carrier_inner_id** `Integer|Null` **_(обов'язково)_** - <p>ID перевізника</p>
- **order.carrier.carrier_track_num** `String|Null` **_(обов'язково)_** - <p>ТТН перевізника</p>
- **order.carrier.carrier_return_track_num** `String|Null` **_(обов'язково)_** - <p>Номер відстеження повернення перевізником</p>
- **order.carrier.is_carrier_meest** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є перевізником Meest</p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>
- **order.auto_refund** `Object` **_(обов'язково)_** - <p>Автоматичне повернення коштів</p>
- **order.auto_refund.is_auto** `Boolean` **_(обов'язково)_** - <p>Ознака автоматичного повернення коштів при скасуванні замовлення</p>
- **order.auto_refund.status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів (1-успішно, 2-неуспішно)</p>
- **order.auto_refund.error** `String` **_(обов'язково)_** - <p>Статус помилки</p>
- **order.is_smart** `Boolean` **_(обов'язково)_** - <p>Ознака чи замовлення преміум</p>
- **order.group_id** `Integer|Null` **_(обов'язково)_** - <p>ID групи замовлень<br> <small>*У разі, коли в групі всього 1 поточне замовлення - повертає null</small></p>
- **order.group_orders_count** `Integer` **_(обов'язково)_** - <p>Кількість замовлень у групі</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 31656,
       "created": "2019-08-29 12:46:51",
       "changed": "2020-06-03 13:03:47",
       "amount": "4013.43",
       "amount_with_discount": "4013.43",
       "cost": "4013.43",
       "cost_with_discount": "4013.43",
       "status": 26,
       "status_group": 1,
       "items_photos": [
           {
               "id": 45116,
               "url": "/assets/images/package.svg",
               "item_url": null,
               "item_name": "Дополнительная продажа"
           },
           {
               "id": 13165,
               "url": "https://rozetka.com.ua",
               "item_url": "https://rozetka.com.ua",
               "item_name": "Item name"
           }
       ],
       "seller_comment": [
           {
               "comment": "test_api",
               "created": "2020-03-18 12:52:26",
               "seller_id": 12345,
               "seller_fio": "Тестовий менеджер"
           }
       ],
       "seller_comment_created": "2020-03-19 13:46:35",
       "current_seller_comment": "text",
       "comment": "text",
       "user_phone": "380212532521",
       "recipient_phone": "380212532521",
       "user_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "recipient_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "from_warehouse": 0,
       "ttn": "",
       "total_quantity": 2,
       "can_copy": false,
       "created_type": 4,
       "is_viewed": true,
       "callback_off":0,
       "is_fulfillment": false,
       "duplicate_order_id": 112,
       "can_prolong": 1,
       "is_review_request_send": 1,
       "review_request_status": "Відгук є"
   }
}
```

```json
 HTTP/1.1 200 OK
 {
     "success":true,
     "content": {
         "id":101647918,
         "created":"2017-08-15 10:20:59",
         "changed": "2019-05-16 17:11:07",
         "amount":"340.00",
         "amount_with_discount":"340.00",
         "cost":"340.00",
         "cost_with_discount":"340.00",
         "status":3,
         "status_group":1,
         "items_photos":[],
         "seller_comment":[],
         "seller_comment_created":"",
         "current_seller_comment":"",
         "comment":"",
         "user_phone":"380112141214",
         "from_warehouse":0,
         "ttn":"34543542352346",
         "total_quantity":1,
         "can_copy": false,
         "created_type": 4,
         "payment_type_name":"Тестовый_кредит_маркет",
         "callback_off":0,
         "is_fulfillment": false,
         "duplicate_order_id": 112,
         "invoice_exist": true,
         "can_create_invoice": true,
         "chatUser": {
             "id":205752,
             "created":"2017-08-15 10:20:24",
             "updated":"2017-08-15 10:20:25",
             "subject":"Заказ № 101647918",
             "user":{
                 "id":10621442,
                 "has_email": true,
                 "contact_fio":"Юлия Шевченко",
                 "email":"true"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101647918,
             "type":0,
             "item_id":null,
             "user_id":10621442,
             "unread_messages_count": 0
         },
         "chatMessages": [{
             "chat_id":205506,
             "body":"Поздравляем! Поступил новый заказ № 101615935...",
             "created":"2017-08-14 22:15:25",
             "user_id":42,
             "sender_hide":1,
             "seller":null,
             "seller_id":null
         },...]
         "user": {
             "id":10621442,
             "has_email": true,
             "contact_fio": "Василенко Василь",
             "email":"true"
         },
         "delivery":{
             "delivery_service_id":5,
             "delivery_service_name": "Новая Почта",
             "recipient_title":"Шевченко Юлия",
             "place_id":35566,
             "place_street":"",
             "place_number":"363",
             "place_house":"Мини-отделение",
             "place_flat":"",
             "cost":"0.00",
             "reserve_date": "2022-03-28",
             "city":{
                 "id": 1,
                  "name": "Киев",
                  "region_title": "",
                  "title": "Киев",
                  "status": 1
             },
             "delivery_method_id": 1,
              "ref_id": "9e9c238c-5878-11e9-a703-005056b24375",
              "name_logo": "nova-pochta"
         },
         "purchases": [{
             "id":145735205,
             "cost":"280.00",
             "cost_with_discount":"249.00",
             "price":"280.10",
             "price_with_discount":"249.00",
             "quantity":1,
             "item_id":6629229,
             "item_name":"Сомнение. Манифест для тех, кто готов выйти из толпы",
             "kit_id":0,
             "item": {
                   "id": 38225280,
                   "name": "C++ для чайников, 7-е издание",
                   "name_ua": null,
                   "article": "",
                   "price_offer_id": "2972",
                   "price": "413.00",
                   "catalog_category": {
                       "id": 4326663,
                       "name": "Научная и техническая литература",
                       "parent_id": 4326572
                   },
                   "catalog_id": 4326663,
                   "group_id": null,
                   "photo_preview": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
                   "photo": [
                       "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg"
                   ],
                   "moderation_status": 0,
                   "sla_id": 11558,
                   "url": "https://rozetka.com.ua/38225280/p38225280",
                   "sold": 0,
                   "uploader_offer_id": "2972",
                   "uploader_status": null
               },
             "conf_details": null,
             "ttn": null,
             "order_status": null,
             "status": 1,
             "is_additional_item": false
         }],
         "status_available": [
           {
               "parent_id": 2,
               "child_id": 26,
               "id": 159,
               "delivery_type": 1,
               "market_group": 0
           },
           {
               "parent_id": 2,
               "child_id": 4,
               "id": 147,
               "delivery_type": 1,
               "market_group": 0
           }
         ],
         "is_access_change_order":true,
         "payment_type": "undefined",
          "credit_info": [],
         "order_status_history":[{
                 "status_id":2,
                 "created":"2017-08-15 09:30:29",
                 "status":{
                     "id":2,
                     "name":"Комплектується. Дані підтверджені",
                     "status_group":1,
                     "status":1
                 }
              }],
         "payment_type_title": "Готівкова",
         "payment_type_name": "Оплата під час отримання товару",
         "delivery_service": {
              "id": 5,
              "name": "Новая Почта",
              "type": 0,
              "status": 1,
              "can_edit": false,
              "can_use": true
          },
         "status_data": {
             "id": 5,
             "name": "Ожидает в пункте самовывоза",
             "name_ua": "Очікує в пункті самовивозу",
             "name_en": "Waiting at pickup station",
             "type": 1,
             "status": 1,
             "color": "#221F1F"
         },
         "status_payment": {
              "order_id":183962235,
              "status_payment_id":1,
              "name":"cancelled",
              "title":"Отменен",
              "value":1,
              "created_at":"2019-12-17 11:09:36"
         },
         "payment_status": "Очікує оплату",
         "can_edit": true,
         "feedback": [{
             "id": 11,
             "comment": "Some text"
         }],
         "feedback_count": 1,
         "is_promo": false,
         "is_access_change_order": true,
         "payment_invoice_id":59999999,
         "delivery_prices": {
           "delivery_price": "18.00",
           "post_pay_commission": "12.17"
         },
         "refund_status": null,
         "ff_can_approve": true,
         "is_review_request_send": 0,
         "review_request_status": "Відгук є",
         "reminder_to_check_payment_for_duplicates": {
              "to_show_reminder": false,
              "message": null
         },
         "delivery_commission_info": {
              "percentage_commission": "15",
              "absolute_commission": "5.00",
              "calculated_commission": "12.00"
         },
         "count_buyer_orders": 123,
         "rz_delivery_ttn_sender": {
              "city": "d2ab80d6-1c4e-4ff9-b789-092914d451c6",
              "info": null,
              "name": "Петров Петр Петрович",
              "type": "natural",
              "phones":["380664357902"],
              "address": "г.Киев, ул. Кирпаноса 26",
              "department": "25d64bf9-f1f2-422a-89c5-1d8837ab7d77"
         },
         "is_reserve_ending": false
     }
}
```

```json
 HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 746751484,
        "created": "2022-09-25 10:08:52",
        "changed": "2022-10-01 16:56:07",
        "amount": "1790.00",
        "amount_with_discount": "1790.00",
        "cost": "1790.00",
        "cost_with_discount": "1790.00",
        "status": 31,
        "status_group": 3,
        "items_photos": [
            {
                "id": 273834288,
                "url": "/assets/images/no-image.svg",
                "item_url": "https://rozetka.com.ua/273834288/p273834288",
                "item_name": "Кроссовки Aldex черные 070163906, 38",
                "item_price": "1780.00"
            }
        ],
        "seller_comment": [
            {
                "comment": "Причина відмови: малі, заміна на 39 розмір",
                "created": "2022-10-01 10:30:12",
                "seller_fio": ""
            },
            {
                "comment": "змінили розмір з 39 на 38",
                "created": "2022-09-25 09:00:32",
                "seller_fio": ""
            }
        ],
        "seller_comment_created": "2022-10-01 10:30:12",
        "current_seller_comment": "Причина відмови: малі, заміна на 39 розмір",
        "comment": "",
        "user_phone": "380633088093",
        "user_title": {
            "first_name": "Виталина",
            "last_name": "Сидорчук",
            "second_name": "Викторовна",
            "full_name": "Сидорчук Виталина Викторовна"
        },
        "user_rating": 2,
        "recipient_phone": null,
        "recipient_title": {
            "first_name": "Виталина",
            "last_name": "Сидорчук",
            "second_name": "Викторовна",
            "full_name": "Сидорчук Виталина Викторовна"
        },
        "from_warehouse": 0,
        "ttn": "20450593818718",
        "total_quantity": 1,
        "mk_created": false,
        "can_copy": false,
        "created_type": 4,
        "is_viewed": true,
        "callback_off": 0,
        "is_fulfillment": false,
        "duplicate_order_id": null,
        "is_delivery_edit_available": false,
        "can_prolong": false,
        "is_review_request_send": 0,
        "review_request_status": "Запрос на отзыв не отправлен",
        "group_id": null,
        "group_orders_count": 1
    }
}
```

---

### 1.2 Деталі замовлення

**get** `/orders/{id}`

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення (унікальний ID)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `Number` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.cost** `Number` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `Number` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Number` **_(обов'язково)_** - <p>Статус замовлення</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна</p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>Id дубля замовлення</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
- **Chat** `Object` **_(обов'язково)_** - <p>ChatModel</p>
- **chat.id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat.created** `String` **_(обов'язково)_** - <p>Дата і час створення переписки</p>
- **chat.updated** `String` **_(обов'язково)_** - <p>Дата й час останнього повідомлення переписки</p>
- **chat.subject** `String` **_(обов'язково)_** - <p>Тема переписки</p>
- **chat.user** `Object` **_(обов'язково)_** - <p>Користувач чату, <b><a href="#api-Models-UserDetails">User</a></p>
- **chat.read_market** `String` **_(обов'язково)_** - <p>Дата і час прочитання повідомлення продавцем</p>
- **chat.trash_market** `Number` **_(обов'язково)_** - <p>Чат перенесено в кошик продавцем</p>
- **chat.star_market** `Number` **_(обов'язково)_** - <p>Прапор, позначає важливість чату у продавця</p>
- **chat.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, якщо чат створений в рамках замовлення</p>
- **chat.type** `Number` **_(обов'язково)_** - <p>Тип чату (0 - замовлення, 1 - питання про товар, 2 - запитання продавцеві)</p>
- **chat.item_id** `Integer` **_(обов'язково)_** - <p>ID товару, якщо чат створений по товару</p>
- **chat.user_id** `Integer` **_(обов'язково)_** - <p>ID користувача (покупця)</p>
- **chats.unread_messages_count** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень від покупця в чаті</p>
- **User** `Object` **_(обов'язково)_** - <p>UserModel</p>
- **user.id** `Integer` **_(обов'язково)_** - <p>ID покупця</p>
- **user.email** `String` **_(обов'язково)_** - <p>E-mail покупця</p>
- **user.login** `String` **_(обов'язково)_** - <p>Логін покупця</p>
- **user.contact_fio** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **Delivery** `Object` **_(обов'язково)_** - <p>DeliveryModel</p>
- **delivery.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **delivery.recipient_title** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery.place_id** `Integer` **_(обов'язково)_** - <p>ID адреси доставки</p>
- **delivery.place_street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **delivery.place_number** `String` **_(обов'язково)_** - <p>Номер відділення служби доставки</p>
- **delivery.place_house** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **delivery.place_flat** `String` **_(обов'язково)_** - <p>Номер квартири</p>
- **delivery.cost** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **delivery.city** `Object` **_(обов'язково)_** - <p>Locality, Місто</p>
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
- **Purchase** `Object` **_(обов'язково)_** - <p>PurchaseModel</p>
- **purchase.id** `Integer` **_(обов'язково)_** - <p>ID покупки</p>
- **purchase.cost** `Number` **_(обов'язково)_** - <p>Загальна ціна покупки (ціна товару Х кількість)</p>
- **purchase.price** `Number` **_(обов'язково)_** - <p>Ціна за 1 товар</p>
- **purchase.quantity** `Integer` **_(обов'язково)_** - <p>Кількість товарів</p>
- **purchase.item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **purchase.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **purchase.item** `Object` **_(обов'язково)_** - <p>ItemModel (Товар)</p>
- **Item** `Object` **_(обов'язково)_** - <p>Model</p>
- **Item.id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка</p>
- **Item.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **Item.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **Item.article** `String` **_(обов'язково)_** - <p>Артикул товару</p>
- **Item.price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у продавця</p>
- **Item.price** `Number` **_(обов'язково)_** - <p>Ціна товару</p>
- **Item.catalog_category** `Object` **_(обов'язково)_** - <p>CatalogCategory <a href="#api-Models-CatalogCategoryDetails">CatalogCategoryModel</a>, Категорія товару</p>
- **Item.catalog_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **Item.group_id** `Integer` **_(обов'язково)_** - <p>ID групи</p>
- **Item.photo_preview** `String` **_(обов'язково)_** - <p>Фото-прев'ю, у вигляді посилання</p>
- **Item.photo** `String[]` **_(обов'язково)_** - <p>Список посилань на фото товару</p>
- **Item.moderation_status** `Number` **_(обов'язково)_** - <p><code>Deprecated</code>: Статус товару на модерації <br> <a href="#api-Items-GetItemStatuses">ModerationStatuses</a></p>
- **Item.url** `String` **_(обов'язково)_** - <p>Item url в системі Розетка</p>
- **Item.sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **Item.uploader_offer_id** `String` **_(обов'язково)_** - <p>Id Оффера в Uploader</p>
- **Item.uploader_status** `Integer|null` **_(обов'язково)_** - <p>Статус товару в Uploader</p>
- **Item.sla_id** `Integer` **_(обов'язково)_** - <p>Sla товару</p>
- **CatalogCategory** `Object` **_(обов'язково)_** - <p>CatalogCategoryModel</p>
- **catalog_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **catalog_category.parent_id** `Integer` **_(обов'язково)_** - <p>ID батьківської категорії</p>
- **catalog_category.name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>
- **OrderStatusHistory** `Object` **_(обов'язково)_** - <p>Model</p>
- **order_status_history.status_id** `Integer` **_(обов'язково)_** - <p>ID статусу</p>
- **order_status_history.created** `String` **_(обов'язково)_** - <p>Дата зміни статусу</p>
- **order_status_history.status** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusDetails" class="nav-list-item">OrderStatusModel</a></b>. <br> Статус замовлення</p>
- **OrderStatus** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення</p>
- **orderStatus.id** `Integer` **_(обов'язково)_** - <p>ID статусу замовлення</p>
- **orderStatus.name** `String` **_(обов'язково)_** - <p>Назва статусу (рос.)</p>
- **orderStatus.name_uk** `String` **_(обов'язково)_** - <p>Назва статусу (укр.)</p>
- **orderStatus.name_en** `String` **_(обов'язково)_** - <p>Назва статусу (англ.)</p>
- **orderStatus.status_group** `Number` **_(обов'язково)_** - <p>ID статус групи<br></p> <ul><li>1 - В обробці</li><li>2 - Успішно завершені</li><li>3 - Неуспішно завершені (скасовані)</li></ul>
- **orderStatus.status** `Number` **_(обов'язково)_** - <p>Статус (0 - заблокований, 1 - активний)</p>
- **orderStatus.color** `String` **_(обов'язково)_** - <p>Колір статусу</p>
- **orderStatus.title** `String` **_(обов'язково)_** - <p>Назва статусу на мові інтерфейсу</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p>ChatUser</p>
- **order.order_status_history** `Object[]` **_(обов'язково)_** - <p>OrderStatusHistory[]</p>
- **order.user** `Object` **_(обов'язково)_** - <p>UserModel</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p>Delivery</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p>Purchase[]</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p>StatusAvailable[]</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Access change order</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Опис кредиту</p>
- **order.credit_status** `String` **_(обов'язково)_** - <p>Статус кредиту <ul> <li>1 - Відхилений продавцем,</li> <li>2 - Новий,</li> <li>3 - В роботі,</li> <li>4 - Схвалений,</li> <li>5 - Відхилений,</li> <li>6 - Відмова клієнта від кредиту</li> </ul></p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
     "success":true,
     "content": {
         "id":101647918,
         "created":"2017-08-15 10:20:59",
         "amount":"340.00",
         "cost":"340.00",
         "cost_with_discount":"340.00",
         "status":3,
         "items_photos":[],
         "seller_comment":[],
         "seller_comment_created":"",
         "current_seller_comment":"",
         "comment":"",
         "user_phone":"380955062745",
         "from_warehouse":0,
         "ttn":"34543542352346",
         "total_quantity":1,
         "chatUser": {
             "id":205752,
             "created":"2017-08-15 10:20:24",
             "updated":"2017-08-15 10:20:25",
             "subject":"Заказ № 101647918",
             "user":{
                 "id":10621442,
                 "email":"shevchenko-yu@mail.ru",
                 "login":"shevchenko-yu@mail.ru",
                 "contact_fio":"Юлия Шевченко"
             },
             "read_market":null,
             "lastSent1":"2017-08-15 10:20:24",
             "lastSent2":"2017-08-15 10:20:25",
             "lastInbox2":"2017-08-15 10:20:24",
             "archive2":0,
             "trash_market":0,
             "star_market":0,
             "lastInbox2Id":477428,
             "lastSent1Id":477428,
             "lastSent2Id":477429,
             "order_id":101647918,
             "type":0,
             "item_id":null,
             "user_id":10621442
         },
         "user": {
             "id":10621442,
             "email":"shevchenko-yu@mail.ru",
             "login":"shevchenko-yu@mail.ru",
             "contact_fio":"Юлия Шевченко"
         },
         "delivery":{
             "delivery_service_id":5,
             "recipient_title":"Шевченко Юлия",
             "place_id":35566,
             "place_street":"",
             "place_number":"363",
             "place_house":"Мини-отделение",
             "place_flat":"",
             "cost":"0.00",
             "city":{
                 "id":1,
                 "name":"Киев",
                 "areaId":null,
                 "parent_id":null,
                 "name_ua":"Київ",
                 "region_title":null,
                 "ext_id":null
             }
         },
         "purchases": [{
             "id":145735205,
             "cost":"280.00",
             "price":"280.10",
             "quantity":1,
             "item_id":6629229,
             "item_name":"Сомнение. Манифест для тех, кто готов выйти из толпы",
             "item": {
                 "id":6629229,
                 "name":"Сомнение. Манифест для тех. кто готов выйти из толпы",
                 "name_ua":null,
                 "article":"42487",
                 "price":"280.10",
                 "catalog_category":{
                     "id":4326656,
                     "name":"Учебники, научно-методическая литература",
                     "parent_id":4326572
                 },
                 "catalog_id":4326656,
                 "group_id":5002910,
                 "photo_preview":null,
                 "photo":[],
                 "moderation_status":0
             }
         }],
         "status_available": [{
             "parent_id":3,
             "child_id":6,
             "id":67,
             "delivery_type":0
         }],
         "is_access_change_order":true,
         "order_status_history":[{
                 "status_id":2,
                 "created":"2017-08-15 09:30:29",
                 "status":{
                     "id":2,
                     "name":"Комплектується. Дані підтверджені",
                     "status_group":1,
                     "status":1
                 }
              }]
     }
}
```

---

### 1.3 Пошук по замовленням

**get** `/orders/search`

<p>Пошук по замовленням, вибірка всіх замовлень</p>

**Версія:** 0.0.3

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc)</p>

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **item_id** `String` _(опціонально)_ - <p>ID товару в замовленні | Назва товару (пошук працює також по частині назви)</p>
- **status** `Integer` _(опціонально)_ - <p>Статуси замовлень</p>
- **delivery_id** `Integer` _(опціонально)_ - <p>ID служби доставки.</p>
- **created_from** `String` _(опціонально)_ - <p>Дата створення замовлення: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата створення замовлення: до</p>
- **changed_from** `String` _(опціонально)_ - <p>Дата зміни від...</p>
- **changed_to** `String` _(опціонально)_ - <p>Дата зміни до...</p>
- **status_updated_from** `String` _(опціонально)_ - <p>Дата останньої зміни статусу від...</p>
- **status_updated_to** `String` _(опціонально)_ - <p>Дата останньої зміни статусу від до...</p>
- **userName** `String` _(опціонально)_ - <p>ПІБ отримувача</p>
- **user_phone** `String` _(опціонально)_ - <p>Телефон покупця</p>
- **seller_comment** `String` _(опціонально)_ - <p>Коментар продавця</p>
- **amountFrom** `Number` _(опціонально)_ - <p>Сума замовлення: від</p>
- **amountTo** `Number` _(опціонально)_ - <p>Сума замовлення: до</p>
- **ttn** `String` _(опціонально)_ - <p>ТТН <br> <ul> <li>0 - всі замовлення, які не мають ТТН</li> <li>1 - всі замовлення, які мають ТТН</li> <li>рядок від 4 символів * - пошук по ТТН і частковий пошук по ТТН</li> </ul> <sup> *Важливо: при передачі рядка менш 4х символів пошук поверне порожній масив даних<br> Дозволені символи: <code> літери, цифри </code> </sup></p>
- **user_feedback** `Number` _(опціонально)_ - <p>Наявність скарг на замовлення <br> <ul> <li>0 - всі замовлення на які є скарги</li> <li>1 - всі замовлення на які немає скарг</li> </ul></p>
- **localities** `String` _(опціонально)_ - <p>ID міста куди доставляється замовлення. <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>localities=1,25</code></p>
- **deliveries** `String` _(опціонально)_ - <p>ID служби доставки <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>deliveries=1,25</code></p>
- **payment_methods** `String` _(опціонально)_ - <p>ID методу оплати <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>payment_methods=1,4242</code></p>
- **type** `Number` _(опціонально)_ - <p>Типи замовлень (В обробці, Успішно завершені, Неуспішно завершені).</p>
- **types** `Number` _(опціонально)_ - <p>Типи замовлень (альтернативне групування по статусах)<br> <i>Замінює параметр <b>type</b>, разом два параметра не використовуються.</i> <ul> <li>1 - всі замовлення</li> <li>2 - в обробці</li> <li>3 - успішно завершені</li> <li>4 - нові</li> <li>5 - доставляються</li> <li>6 - неуспішно завершені</li> </ul></p>
- **is_viewed** `Boolean` _(опціонально)_ - <p>Чи переглянуто замовлення</p>
- **is_fulfillment** `Boolean` _(опціонально)_ - <p>Чи проходить замовлення по системі Фулфілмент</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **is_promo** `Boolean` _(опціонально)_ - <p>Замовлення прийшло за рекламою (1 - так/ 0 - ні)</p>
- **prro_receipt_status** `Boolean` _(опціонально)_ - <p>Статус фіскалізації чека (1 - чек фіскалізований/ 0 - чек не фіскалізований)</p>
- **status_payment_id** `Integer` _(опціонально)_ - <p>ID статусу оплати замовлення.</p>
- **has_market_review** `Boolean` _(опціонально)_ - <p>Чи є відгук про продавця  (1 - так/ 0 - ні)</p>
- **is_review_request_send** `Number` _(опціонально)_ - <p>Чи відправлений запит на відгук про магазин (0 - Не відправлено, 1 - Відправлено, 2 - Відгук вже є) <br><small>Значення <code>2</code> працює так само, як фільтр <code>has_market_review=1</code></small></p>
- **is_reserve_ending** `Boolean` _(опціонально)_ - <p>Чи закінчується термін резерву (за два дні)</p>
- **group_id** `Integer` _(опціонально)_ - <p>ID групи замовлень</p>
- **has_kit** `Boolean` _(опціонально)_ - <p>Ознака, чи є комплект в замовленні (1 - так / 0 - ні)</p>
- **carrier_inner_id** `Integer` _(опціонально)_ - <p>Ознака, який перевізник в замовленні (1 - RZ Delivery / 4 - Meest)<br> <small>При використанні цього фільтра відсікаються замовлення, в яких немає ТТН</small><br> <small>При використанні цього фільтра спрацьовує фільтрація по delivery_id=1</small></p>
- **has_refund** `Boolean` _(опціонально)_ - <p>Ознака, чи було повернення (1 - так / 0 - ні)</p>
- **refund_status** `Integer` _(опціонально)_ - <p>Статус повернення (1 - успішне повернення / 2 - помилка повернення)</p>
- **is_smart** `Integer` _(опціонально)_ - <p>Ознака чи замовлення преміум (1 - преміум / 2 - не преміум)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

**Response Body Parameters:**

- **orders** `Object[]` **_(обов'язково)_** - <p>Список <a href="#api-Models-OrderDetails">замовлень</a></p>
- **totalFields** `Object` **_(обов'язково)_** - <p>Загальні лічільники</p>
- **totalFields.amount** `Float` **_(обов'язково)_** - <p>Загальна вартість усіх замовлень по товарам</p>
- **totalFields.amount_with_discount** `Float` **_(обов'язково)_** - <p>Загальна вартість усіх замовлень по товарам зі знижками</p>
- **totalFields.cost** `Float` **_(обов'язково)_** - <p>Сума кінцевих сум замовлень, що включають вартість доставки</p>
- **totalFields.cost_with_discount** `Float` **_(обов'язково)_** - <p>Сума кінцевих сум замовлень, що включають вартість доставки, зі знижками</p>
- **user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatDetails" class="nav-list-item">Chat</a></b>. <br>Переписка с покупцем</p>
- **order.chatMessages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails" class="nav-list-item">ChatMessage</a></b>[] <br>Повідомлень переписки з покупцем</p>
- **order.credit_info** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderCreditInfoDetails" class="nav-list-item">OrderCreditInfo</a></b>[] <br>Інформація про кредит</p>
- **order.status_data** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusDetails" class="nav-list-item">OrderStatus</a></b> Розширена інформація про статус замовлення</p>
- **order.order_status_history** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusHistoryDetails" class="nav-list-item">OrderStatusHistory</a></b>[]. <br> Історія статусів замовлення</p>
- **order.user** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-UserDetails" class="nav-list-item">UserModel</a></b> <br> Інформація про покупця</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryDetails" class="nav-list-item">Delivery</a></b>. <br> інформація про доставку</p>
- **order.delivery_service** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServiceModelDetails" class="nav-list-item">DeliveryService</a></b>. <br> Інформація про службу доставки</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>[]. <br> Список товарів в замовленні</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetails" class="nav-list-item">StatusAvailable</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.status_available_detailed** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetailedModel" class="nav-list-item">StatusAvailableDetailed</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для редагування</p>
- **order.payment** `Object` **_(обов'язково)_** - <p>Всі дані про оплату замовлення в єдиному вкладеному об'єкті <br><b>*Рекомендується використовувати це поле замість усіх expand-полів, що належать до оплати та кредиту</b> <br><a href="#api-Models-OrderPaymentData" class="nav-list-item">OrderPaymentData</a></p>
- **order.payment_type** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **order.payment_method_id** `Boolean` **_(обов'язково)_** - <p>ID методу оплати</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **order.payment_type_title** `String` **_(обов'язково)_** - <p>Назва типу оплати</p>
- **order.status_payment** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusPayment" class="nav-list-item">Статус оплати </a></b> (об'єкт)</p>
- **order.payment_status** `String` **_(обов'язково)_** - <p>Статус оплати (найменування, строка)</p>
- **order.payment_invoice_id** `Integer` **_(обов'язково)_** - <p>Id рахунку на оплату замовлення</p>
- **order.credit_status** `String` **_(обов'язково)_** - <p>Статус кредиту<ul> <li>1 - Відхилений продавцем,</li> <li>2 - Новий,</li> <li>3 - В роботі,</li> <li>4 - Схвалений,</li> <li>5 - Відхилений,</li> <li>6 - Відмова клієнта від кредиту</li> </ul></p>
- **order.credit_broker** `String` **_(обов'язково)_** - <p>Кредитний брокер</p>
- **order.is_promo** `Boolean` **_(обов'язково)_** - <p>Чи наявні в замовленні товари по яким перейшли за рекламним посиланням</p>
- **order.can_edit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можна редагувати замовлення</p>
- **order.feedback** `UserFeedback[]` **_(обов'язково)_** - <p><b><a href="#api-Models-UserFeedback" class="nav-list-item">UserFeedback</a></b>[]. Список скарг на замовлення</p>
- **order.feedback_count** `Integer` **_(обов'язково)_** - <p>Кількість скарг на замовлення</p>
- **order.is_fixed_campaign_order** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є в замовленні товари додані з переходу з фіксованого рекламного оголошення</p>
- **order.is_free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака, чи проходить замовлення по безкоштовній доставці</p>
- **order.is_payed** `Boolean` **_(обов'язково)_** - <p>Ознака, чи замовлення сплачено картою</p>
- **order.is_receiver_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування даних отримувача</p>
- **order.delivery_prices** `Array` **_(обов'язково)_** - <p>Вартості доставки</p>
- **order.delivery_prices.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **order.delivery_prices.post_pay_commission** `Number` **_(обов'язково)_** - <p>Комісія за накладений платіж</p>
- **order.market_review** `Boolean` **_(обов'язково)_** - <p>Відгук про продавця</p>
- **order.last_update_status** `String` **_(обов'язково)_** - <p>Час останньої зміни статусу замовлення</p>
- **order.reminder_to_check_payment_for_duplicates** `Object` **_(обов'язково)_** - <p>Об'єкт для нагадування перевірки статуса оплати для дублів замовлень</p>
- **order.reminder_to_check_payment_for_duplicates.to_show_reminder** `Boolean` **_(обов'язково)_** - <p>Чи показувати нагадування</p>
- **order.reminder_to_check_payment_for_duplicates.message** `String` **_(обов'язково)_** - <p>Текст повідомлення нагадування</p>
- **order.invoice_exist** `Boolean` **_(обов'язково)_** - <p>Чи є в замовленні рахунки</p>
- **order.can_create_invoice** `Boolean` **_(обов'язково)_** - <p>Чи доступне створення рахунку</p>
- **order.need_label** `Boolean` **_(обов'язково)_** - <p>Чи потрібні посилці замовлення додаткові стікери</p>
- **order.delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж</p>
- **order.delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках</p>
- **order.delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні</p>
- **order.delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату</p>
- **order.rz_delivery_ttn_sender** `Object|null` **_(обов'язково)_** - <p><a href="#api-Models-RZDeliverySenderResponse">Відправник</a>, вказаний у ТТН для доставки через ROZETKA Delivery</p>
- **order.count_buyer_orders** `Number` **_(обов'язково)_** - <p>Кількість покупок клієнта (враховуються замовлення у всіх статусах, кількість замовлень клієнта на даний момент)</p>
- **order.is_reserve_ending** `Boolean` **_(обов'язково)_** - <p>Ознака, чи закінчується термін резерву (за два дні)</p>
- **order.has_kit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є комплект в замовленні</p>
- **order.carrier** `Object` **_(обов'язково)_** - <p>Перевізник РЗ Делівері</p>
- **order.carrier.carrier** `String|Null` **_(обов'язково)_** - <p>MDM ID перевізника</p>
- **order.carrier.carrier_inner_id** `Integer|Null` **_(обов'язково)_** - <p>ID перевізника</p>
- **order.carrier.carrier_track_num** `String|Null` **_(обов'язково)_** - <p>ТТН перевізника</p>
- **order.carrier.carrier_return_track_num** `String|Null` **_(обов'язково)_** - <p>Номер відстеження повернення перевізником</p>
- **order.carrier.is_carrier_meest** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є перевізником Meest</p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>
- **order.auto_refund** `Object` **_(обов'язково)_** - <p>Автоматичне повернення коштів</p>
- **order.auto_refund.is_auto** `Boolean` **_(обов'язково)_** - <p>Ознака автоматичного повернення коштів при скасуванні замовлення</p>
- **order.auto_refund.status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів (1-успішно, 2-неуспішно)</p>
- **order.auto_refund.error** `String` **_(обов'язково)_** - <p>Статус помилки</p>
- **order.is_smart** `Boolean` **_(обов'язково)_** - <p>Ознака чи замовлення преміум</p>
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
      "orders": [
          {
              "id": 248888186,
              "created": "2019-07-25 11:49:32",
              "changed": "2019-12-17 17:34:58",
              "amount": "640.00",
              "amount_with_discount": "640.00",
              "cost": "640.00",
              "cost_with_discount": "640.00",
              "status": 1,
              "status_group": 1,
              "items_photos": [
                  {
                      "id": 38221768,
                      "url": "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg",
                      "item_url": "https://rozetka.com.ua/38221768/p38221768",
                      "item_name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать"
                  }
              ],
              "seller_comment": [],
              "seller_comment_created": "",
              "current_seller_comment": "",
              "comment": "Test_order",
              "user_phone": "380954954374",
              "user_rating": 1,
              "from_warehouse": 0,
              "ttn": "",
              "total_quantity": 1,
              "mk_created": true,
              "can_copy": false,
              "created_type": 4,
              "is_viewed": true,
              "status_data": {
                  "id": 1,
                  "name": "Новый заказ",
                  "name_uk": "Нове замовлення",
                  "name_en": "New Order",
                  "status_group": 1,
                  "status": 1,
                  "color": "#FFAB00"
              },
              "payment_type": "cash",
              "payment_type_name": "Наличная",
              "credit_status": 0,
              "credit_info": [],
              "credit_broker": false,
              "callback_off":0,
              "is_fulfillment": false,
              "duplicate_order_id": 111,
              "is_delivery_edit_available": true,
              "can_prolong": true,
              "is_review_request_send": 1,
              "review_request_status": "Відгук є"
          }
      ],
      "_meta": {
          "totalCount": 1,
          "pageCount": 1,
          "currentPage": 1,
          "perPage": 20
      },
      "totalFields": {
          "amount": "16200.60",
          "amount_with_discount": "16200.60",
          "cost": "16200.60"
          "cost_with_discount": "16200.60"
      }
  }
}
```

```json
 HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "orders": [
          {
              "id": 248888186,
              "created": "2019-07-25 11:49:32",
              "changed": "2019-12-17 17:34:58",
              "amount": "640.00",
              "amount_with_discount": "640.00",
              "cost": "640.00",
              "cost_with_discount": "640.00",
              "status": 1,
              "status_group": 1,
              "items_photos": [
                  {
                      "id": 38221768,
                      "url": "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg",
                      "item_url": "https://rozetka.com.ua/38221768/p38221768",
                      "item_name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать"
                  }
              ],
              "seller_comment": [],
              "seller_comment_created": "",
              "current_seller_comment": "",
              "comment": "Test_order",
              "user_phone": "380954954374",
              "from_warehouse": 0,
              "user_rating": 1,
              "ttn": "",
              "total_quantity": 1,
              "mk_created": true,
              "can_copy": false,
              "created_type": 4,
              "is_viewed": true,
              "callback_off":0,
              "is_fulfillment": false,
              "duplicate_order_id": 111,
              "is_delivery_edit_available": true,
              "is_reserve_ending": false
              "chatUser": {
                  "id": 1645201,
                  "created": "2019-08-02 09:40:07",
                  "updated": "2019-08-02 09:40:07",
                  "subject": "Заказ № 248888186",
                  "user": {
                      "id": 39919762,
                      "has_email": true,
                      "contact_fio": "Василенко Василь",
                      "email":"true"
                  },
                  "read_market": null,
                  "trash_market": 0,
                  "star_market": 0,
                  "order_id": 248888186,
                  "type": 0,
                  "item_id": null,
                  "user_id": 39919762
              },
              "chatMessages": [],
              "order_status_history": [
                  {
                      "status_id": 1,
                      "created": "2019-08-02 09:40:07",
                      "status": {
                          "id": 1,
                          "name": "Новый заказ",
                          "name_uk": "Нове замовлення",
                          "name_en": "New Order",
                          "status_group": 1,
                          "status": 1,
                          "color": "#FFAB00",
                          "title": "Нове замовлення"
                      }
                  }
              ],
              "user": {
                  "id": 39919762,
                  "has_email": true,
                  "contact_fio": "Василенко Василь",
                  "email":"true"
              },
              "delivery": {
                  "delivery_service_id": 5,
                  "delivery_service_name": "Новая Почта",
                  "recipient_title": "Test",
                  "place_id": 15643,
                  "place_street": "просп. Победы",
                  "place_number": "76",
                  "place_house": "89а",
                  "place_flat": null,
                  "cost": null,
                  "reserve_date": "2022-03-28",
                  "city": {
                      "id": 1,
                      "name": "Киев",
                      "name_ua": "Київ",
                      "region_title": "",
                      "title": "Киев",
                      "status": 1
                  },
                  "delivery_method_id": 1,
                  "ref_id": "1692281f-e1c2-11e3-8c4a-0050568002cf",
                  "name_logo": "nova-pochta",
                  "email": null
              },
              "purchases": [
                  {
                      "id": 158280800,
                      "cost": "640.00",
                      "cost_with_discount": "640.00",
                      "price": "640.00",
                      "price_with_discount": "640.00",
                      "quantity": 1,
                      "item_id": 38221768,
                      "item_name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать",
                      "item": {
                          "id": 38221768,
                          "name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать",
                          "name_ua": null,
                          "article": "",
                          "price_offer_id": "12106",
                          "price": "195.00",
                          "catalog_category": {
                              "id": 4620235,
                              "name": "Бизнес литература",
                              "parent_id": 4326572
                          },
                          "catalog_id": 4620235,
                          "group_id": null,
                          "photo_preview": "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg",
                          "photo": [
                              "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg"
                          ],
                          "moderation_status": 0,
                          "sla_id": 11558,
                          "url": "https://rozetka.com.ua/38221768/p38221768",
                          "sold": 2,
                          "uploader_offer_id": "12106",
                          "uploader_status": null
                      },
                      "kit_id": 0,
                      "conf_details": null,
                      "ttn": null,
                      "order_status": null,
                      "status": 1,
                      "is_additional_item": false,
                      "is_smart": true
                  }
              ],
              "status_available": [
                  {
                      "parent_id": 1,
                      "child_id": 26,
                      "id": 1,
                      "delivery_type": 1,
                      "market_group": 0
                  }
              ],
              "status_data": {
                  "id": 1,
                  "name": "Новый заказ",
                  "name_uk": "Нове замовлення",
                  "name_en": "New Order",
                  "status_group": 1,
                  "status": 1,
                  "color": "#FFAB00"
              },
              "is_receiver_edit_available": false,
              "payment_method_id":1,
              "payment_type": "cash",
              "payment_type_title": "Готівкова",
              "payment_type_name": "Оплата під час отримання товару",
              "credit_status": 0,
              "credit_info": [],
              "delivery_service": {
                  "id": 5,
                  "name": "Новая Почта",
                  "type": 0,
                  "status": 1,
                  "can_edit": false,
                  "can_use": true
              },
              "credit_broker": false,
              "feedback": [{
                "id": 11,
                "comment": "Some text"
              }],
              "feedback_count": 1,
              "is_promo": false,
              "prro": {
                   "prro_receipt_status": 1,
                   "prro_receipt_service_name": "manual"
               },
              "market_review": {
                "id": 12345,
                "status": "active",
                "comment": "Тестовый коментарий к заказу",
                "vote": "like",
                 "vote_convenience": "excellent",
                 "vote_manager": "excellent",
                 "vote_delivery": "excellent",
                 "user": "Петро",
                 "review_convenience": null,
                 "review_manager": null,
                 "review_delivery": null,
                 "read": true
             },
             "last_update_status": "2023-04-13 11:19:09",
             "reminder_to_check_payment_for_duplicates": {
                 "to_show_reminder": false,
                 "message": null
             },
             "invoice_exist": true,
             "can_create_invoice": true
             "delivery_commission_info": {
                "percentage_commission": "15",
                "absolute_commission": "5.00",
                "calculated_commission": "12.00"
             },
             "count_buyers_orders": 273,
             "rz_delivery_ttn_sender":{
                "city": "d2ab80d6-1c4e-4ff9-b789-092914d451c6",
                "info": null,
                "name": "Петров Петр Петрович",
                "type": "natural",
                "phones":["380664357902"],
                "address": "г.Киев, ул. Кирпаноса 26",
                "department": "25d64bf9-f1f2-422a-89c5-1d8837ab7d77"
             },
             "has_kit":false,
             "is_smart: false,
             "carrier":{
                "carrier": null,
                "carrier_inner_id": null,
                "carrier_track_num": null,
                "carrier_return_track_num": null,
                "is_carrier_meest": false
             }
          }
      ],
      "_meta": {
          "totalCount": 1,
          "pageCount": 1,
          "currentPage": 1,
          "perPage": 20
      },
      "totalFields": {
          "amount": "16200.60",
          "amount_with_discount": "16200.60",
          "cost": "16200.60"
          "cost_with_discount": "16200.60"
      }
  }
}
```

---

### 1.3 Пошук по замовленням

**get** `/orders/search`

<p>Пошук по замовленням, вибірка всіх замовлень</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc)</p>

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **item_id** `String` _(опціонально)_ - <p>ID товару в замовленні | Назва товару (пошук працює також по частині назви)</p>
- **status** `Integer` _(опціонально)_ - <p>Статуси замовлень</p>
- **delivery_id** `Integer` _(опціонально)_ - <p>ID служби доставки.</p>
- **created_from** `String` _(опціонально)_ - <p>Дата створення замовлення: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата створення замовлення: до</p>
- **changed_from** `String` _(опціонально)_ - <p>Дата зміни від...</p>
- **changed_to** `String` _(опціонально)_ - <p>Дата зміни до...</p>
- **userName** `String` _(опціонально)_ - <p>ПІБ отримувача</p>
- **user_phone** `String` _(опціонально)_ - <p>Телефон покупця</p>
- **seller_comment** `String` _(опціонально)_ - <p>Коментар продавця</p>
- **amountFrom** `Number` _(опціонально)_ - <p>Сума замовлення: від</p>
- **amountTo** `Number` _(опціонально)_ - <p>Сума замовлення: до</p>
- **ttn** `String` _(опціонально)_ - <p>ТТН <br> <ul> <li>0 - всі замовлення, які не мають ТТН</li> <li>1 - всі замовлення, які мають ТТН</li> <li>рядок від 4 символів * - пошук по ТТН і частковий пошук по ТТН</li> </ul> <sup> *Важливо: при передачі рядка менш 4х символів пошук поверне порожній масив даних<br> Дозволені символи: <code> літери, цифри </code> </sup></p>
- **user_feedback** `Boolean` _(опціонально)_ - <p>Наявність скарг на замовлення <br> <ul> <li>0 - всі замовлення на які є скарги</li> <li>1 - всі замовлення на які немає скарг</li> </ul></p>
- **localities** `String` _(опціонально)_ - <p>ID міста куди доставляється замовлення. <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>localities=1,25</code></p>
- **deliveries** `String` _(опціонально)_ - <p>ID служби доставки <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>deliveries=1,25</code></p>
- **payment_methods** `String` _(опціонально)_ - <p>ID методу оплати <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>payment_methods=1,4242</code></p>
- **type** `Integer` _(опціонально)_ - <p>Типи замовлень (В обробці, Успішно завершені, Неуспішно завершені).</p>
- **types** `Integer` _(опціонально)_ - <p>Типи замовлень (альтернативне групування по статусах)<br> <i>Замінює параметр <b>type</b>, разом два параметра не використовуються.</i> <ul> <li>1 - всі замовлення</li> <li>2 - в обробці</li> <li>3 - успішно завершені</li> <li>4 - нові</li> <li>5 - доставляються</li> <li>6 - неуспішно завершені</li> </ul></p>
- **is_viewed** `Boolean` _(опціонально)_ - <p>Чи переглянуто замовлення</p>
- **is_fulfillment** `Boolean` _(опціонально)_ - <p>Чи проходить замовлення по системі Фулфілмент</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;orders&quot;: Order[], &quot;_meta&quot;: MetaResponse }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatDetails" class="nav-list-item">Chat</a></b>. <br>Переписка с покупцем</p>
- **order.chatMessages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails" class="nav-list-item">ChatMessage</a></b>[] <br>Повідомлень переписки з покупцем</p>
- **order.credit_info** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderCreditInfoDetails" class="nav-list-item">OrderCreditInfo</a></b>[] <br>Інформація про кредит</p>
- **order.status_data** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusDetails" class="nav-list-item">OrderStatus</a></b> Розширена інформація про статус замовлення</p>
- **order.order_status_history** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusHistoryDetails" class="nav-list-item">OrderStatusHistory</a></b>[]. <br> Історія статусів замовлення</p>
- **order.user** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-UserDetails" class="nav-list-item">UserModel</a></b> <br> Інформація про покупця</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryDetails" class="nav-list-item">Delivery</a></b>. <br> інформація про доставку</p>
- **order.delivery_service** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServiceModelDetails" class="nav-list-item">DeliveryService</a></b>. <br> Інформація про службу доставки</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>[]. <br> Список товарів в замовленні</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetails" class="nav-list-item">StatusAvailable</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.status_available_detailed** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetailedModel" class="nav-list-item">StatusAvailableDetailed</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для редагування</p>
- **order.payment** `Object` **_(обов'язково)_** - <p>Всі дані про оплату замовлення в єдиному вкладеному об'єкті <br><b>*Рекомендується використовувати це поле замість усіх expand-полів, що належать до оплати та кредиту</b> <br><a href="#api-Models-OrderPaymentData" class="nav-list-item">OrderPaymentData</a></p>
- **order.payment_type** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **order.payment_method_id** `Boolean` **_(обов'язково)_** - <p>ID методу оплати</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **order.payment_type_title** `String` **_(обов'язково)_** - <p>Назва типу оплати</p>
- **order.status_payment** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusPayment" class="nav-list-item">Статус оплати </a></b> (об'єкт)</p>
- **order.payment_status** `String` **_(обов'язково)_** - <p>Статус оплати (найменування, строка)</p>
- **order.payment_invoice_id** `Integer` **_(обов'язково)_** - <p>Id рахунку на оплату замовлення</p>
- **order.credit_status** `String` **_(обов'язково)_** - <p>Статус кредиту<ul> <li>1 - Відхилений продавцем,</li> <li>2 - Новий,</li> <li>3 - В роботі,</li> <li>4 - Схвалений,</li> <li>5 - Відхилений,</li> <li>6 - Відмова клієнта від кредиту</li> </ul></p>
- **order.credit_broker** `String` **_(обов'язково)_** - <p>Кредитний брокер</p>
- **order.is_promo** `Boolean` **_(обов'язково)_** - <p>Чи наявні в замовленні товари по яким перейшли за рекламним посиланням</p>
- **order.can_edit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можна редагувати замовлення</p>
- **order.feedback** `UserFeedback[]` **_(обов'язково)_** - <p><b><a href="#api-Models-UserFeedback" class="nav-list-item">UserFeedback</a></b>[]. Список скарг на замовлення</p>
- **order.feedback_count** `Integer` **_(обов'язково)_** - <p>Кількість скарг на замовлення</p>
- **order.is_fixed_campaign_order** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є в замовленні товари додані з переходу з фіксованого рекламного оголошення</p>
- **order.is_free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака, чи проходить замовлення по безкоштовній доставці</p>
- **order.is_payed** `Boolean` **_(обов'язково)_** - <p>Ознака, чи замовлення сплачено картою</p>
- **order.is_receiver_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування даних отримувача</p>
- **order.delivery_prices** `Array` **_(обов'язково)_** - <p>Вартості доставки</p>
- **order.delivery_prices.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **order.delivery_prices.post_pay_commission** `Number` **_(обов'язково)_** - <p>Комісія за накладений платіж</p>
- **order.market_review** `Boolean` **_(обов'язково)_** - <p>Відгук про продавця</p>
- **order.last_update_status** `String` **_(обов'язково)_** - <p>Час останньої зміни статусу замовлення</p>
- **order.reminder_to_check_payment_for_duplicates** `Object` **_(обов'язково)_** - <p>Об'єкт для нагадування перевірки статуса оплати для дублів замовлень</p>
- **order.reminder_to_check_payment_for_duplicates.to_show_reminder** `Boolean` **_(обов'язково)_** - <p>Чи показувати нагадування</p>
- **order.reminder_to_check_payment_for_duplicates.message** `String` **_(обов'язково)_** - <p>Текст повідомлення нагадування</p>
- **order.invoice_exist** `Boolean` **_(обов'язково)_** - <p>Чи є в замовленні рахунки</p>
- **order.can_create_invoice** `Boolean` **_(обов'язково)_** - <p>Чи доступне створення рахунку</p>
- **order.need_label** `Boolean` **_(обов'язково)_** - <p>Чи потрібні посилці замовлення додаткові стікери</p>
- **order.delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж</p>
- **order.delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках</p>
- **order.delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні</p>
- **order.delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату</p>
- **order.rz_delivery_ttn_sender** `Object|null` **_(обов'язково)_** - <p><a href="#api-Models-RZDeliverySenderResponse">Відправник</a>, вказаний у ТТН для доставки через ROZETKA Delivery</p>
- **order.count_buyer_orders** `Number` **_(обов'язково)_** - <p>Кількість покупок клієнта (враховуються замовлення у всіх статусах, кількість замовлень клієнта на даний момент)</p>
- **order.is_reserve_ending** `Boolean` **_(обов'язково)_** - <p>Ознака, чи закінчується термін резерву (за два дні)</p>
- **order.has_kit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є комплект в замовленні</p>
- **order.carrier** `Object` **_(обов'язково)_** - <p>Перевізник РЗ Делівері</p>
- **order.carrier.carrier** `String|Null` **_(обов'язково)_** - <p>MDM ID перевізника</p>
- **order.carrier.carrier_inner_id** `Integer|Null` **_(обов'язково)_** - <p>ID перевізника</p>
- **order.carrier.carrier_track_num** `String|Null` **_(обов'язково)_** - <p>ТТН перевізника</p>
- **order.carrier.carrier_return_track_num** `String|Null` **_(обов'язково)_** - <p>Номер відстеження повернення перевізником</p>
- **order.carrier.is_carrier_meest** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є перевізником Meest</p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>
- **order.auto_refund** `Object` **_(обов'язково)_** - <p>Автоматичне повернення коштів</p>
- **order.auto_refund.is_auto** `Boolean` **_(обов'язково)_** - <p>Ознака автоматичного повернення коштів при скасуванні замовлення</p>
- **order.auto_refund.status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів (1-успішно, 2-неуспішно)</p>
- **order.auto_refund.error** `String` **_(обов'язково)_** - <p>Статус помилки</p>
- **order.is_smart** `Boolean` **_(обов'язково)_** - <p>Ознака чи замовлення преміум</p>
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
      "orders": [
          {
              "id": 248888186,
              "created": "2019-07-25 11:49:32",
              "changed": "2019-12-17 17:34:58",
              "amount": "640.00",
              "amount_with_discount": "640.00",
              "cost": "640.00",
              "cost_with_discount": "640.00",
              "status": 1,
              "status_group": 1,
              "items_photos": [
                  {
                      "id": 38221768,
                      "url": "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg",
                      "item_url": "https://rozetka.com.ua/38221768/p38221768",
                      "item_name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать"
                  }
              ],
              "seller_comment": [],
              "seller_comment_created": "",
              "current_seller_comment": "",
              "comment": "Test_order",
              "user_phone": "380954954374",
              "from_warehouse": 0,
              "ttn": "",
              "total_quantity": 1,
              "mk_created": true,
              "can_copy": false,
              "created_type": 4,
              "is_viewed": true,
              "status_data": {
                  "id": 1,
                  "name": "Новый заказ",
                  "name_uk": "Нове замовлення",
                  "name_en": "New Order",
                  "status_group": 1,
                  "status": 1,
                  "color": "#FFAB00"
              },
              "payment_type": "cash",
              "payment_type_name": "Наличная",
              "credit_status": 0,
              "credit_info": [],
              "credit_broker": false,
              "callback_off":0,
              "is_fulfillment": false,
              "can_prolong": 1
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

```json
 HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "orders": [
          {
              "id": 248888186,
              "created": "2019-07-25 11:49:32",
              "changed": "2019-12-17 17:34:58",
              "amount": "640.00",
              "amount_with_discount": "640.00",
              "cost": "640.00",
              "cost_with_discount": "640.00",
              "status": 1,
              "status_group": 1,
              "items_photos": [
                  {
                      "id": 38221768,
                      "url": "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg",
                      "item_url": "https://rozetka.com.ua/38221768/p38221768",
                      "item_name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать"
                  }
              ],
              "seller_comment": [],
              "seller_comment_created": "",
              "current_seller_comment": "",
              "comment": "Test_order",
              "user_phone": "380954954374",
              "from_warehouse": 0,
              "ttn": "",
              "total_quantity": 1,
              "mk_created": true,
              "can_copy": false,
              "created_type": 4,
              "is_viewed": true,
              "callback_off":0,
              "is_fulfillment": false,
              "chatUser": {
                  "id": 1645201,
                  "created": "2019-08-02 09:40:07",
                  "updated": "2019-08-02 09:40:07",
                  "subject": "Заказ № 248888186",
                  "user": {
                      "id": 39919762,
                      "has_email": true,
                      "contact_fio": "Василенко Василь",
                      "email":"true"
                  },
                  "read_market": null,
                  "trash_market": 0,
                  "star_market": 0,
                  "order_id": 248888186,
                  "type": 0,
                  "item_id": null,
                  "user_id": 39919762
              },
              "chatMessages": [],
              "order_status_history": [
                  {
                      "status_id": 1,
                      "created": "2019-08-02 09:40:07",
                      "status": {
                          "id": 1,
                          "name": "Новый заказ",
                          "name_uk": "Нове замовлення",
                          "name_en": "New Order",
                          "status_group": 1,
                          "status": 1,
                          "color": "#FFAB00"
                      }
                  }
              ],
              "user": {
                  "id": 39919762,
                  "has_email": true,
                  "contact_fio": "Василенко Василь",
                  "email":"true"
              },
              "delivery": {
                  "delivery_service_id": 5,
                  "delivery_service_name": "Новая Почта",
                  "recipient_title": "Test",
                  "recipient_phone": "380950000000",
                  "another_recipient": false,
                  "place_id": 15643,
                  "pickup_rz_id": "",
                  "place_street": "просп. Победы",
                  "place_number": "76",
                  "place_house": "89а",
                  "place_flat": null,
                  "cost": null,
                  "reserve_date": "2022-03-28",
                  "city": {
                      "id": 1,
                      "uuid": "adCf281f-ad51-89rc-8c4a-98463468002cf",
                      "name": "Киев",
                      "name_ua": "Київ",
                      "name_en": "Kiev",
                      "region_title": "",
                      "title": "Киев",
                      "status": 1
                  },
                  "delivery_method_id": 1,
                  "ref_id": "1692281f-e1c2-11e3-8c4a-0050568002cf",
                  "name_logo": "nova-pochta",
                  "email": null
              },
              "purchases": [
                  {
                      "id": 158280800,
                      "cost": "640.00",
                      "cost_with_discount": "640.00",
                      "price": "640.00",
                      "price_with_discount": "640.00",
                      "quantity": 1,
                      "item_id": 38221768,
                      "item_name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать",
                      "item": {
                          "id": 38221768,
                          "name": "Феномен Инстаграма. Как раскрутить свой аккаунт и заработать",
                          "name_ua": null,
                          "article": "",
                          "price_offer_id": "12106",
                          "price": "195.00",
                          "catalog_category": {
                              "id": 4620235,
                              "name": "Бизнес литература",
                              "parent_id": 4326572
                          },
                          "catalog_id": 4620235,
                          "group_id": null,
                          "photo_preview": "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg",
                          "photo": [
                              "https://rozetka.com.ua/goods/4045622/38221768_images_4045622800.jpg"
                          ],
                          "moderation_status": 0,
                          "sla_id": 11558,
                          "url": "https://rozetka.com.ua/38221768/p38221768",
                          "sold": 2,
                          "uploader_offer_id": "12106",
                          "uploader_status": null
                      },
                      "kit_id": 0,
                      "conf_details": null,
                      "ttn": null,
                      "order_status": null,
                      "status": 1,
                      "is_additional_item": false
                  }
              ],
              "status_available": [
                  {
                      "parent_id": 1,
                      "child_id": 26,
                      "id": 1,
                      "delivery_type": 1,
                      "market_group": 0
                  }
              ],
              "status_data": {
                  "id": 1,
                  "name": "Новый заказ",
                  "name_uk": "Нове замовлення",
                  "name_en": "New Order",
                  "status_group": 1,
                  "status": 1,
                  "color": "#FFAB00"
              },
              "payment_type": "cash",
              "payment_type_name": "Наличная",
              "credit_status": 0,
              "credit_info": [],
              "delivery_service": {
                  "id": 5,
                  "name": "Новая Почта",
                  "type": 0,
                  "status": 1,
                  "can_edit": false,
                  "can_use": true
              },
              "credit_broker": false,
              "feedback": [{
                "id": 11,
                "comment": "Some text"
              }],
              "feedback_count": 1,
              "is_promo": false
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

### 7.3 Пошук по замовленням

**get** `/orders/search`

<p>Пошук по замовленням, вибірка всіх замовлень</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc).</p>

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **item_id** `String` _(опціонально)_ - <p>ID товару в замовленні | Назва товару (пошук працює також по частині назви)</p>
- **status** `Integer` _(опціонально)_ - <p>Статус замовлення.</p>
- **delivery_id** `Integer` _(опціонально)_ - <p>ID служби доставки.</p>
- **created_from** `String` _(опціонально)_ - <p>Дата створення замовлення: від (можна додавати години: хвилини: секунди)</p>
- **created_to** `String` _(опціонально)_ - <p>Дата створення замовлення: до (можна додавати години: хвилини: секунди)</p>
- **userName** `String` _(опціонально)_ - <p>ПІБ отримувача</p>
- **user_phone** `String` _(опціонально)_ - <p>Телефон покупця</p>
- **seller_comment** `String` _(опціонально)_ - <p>Коментар продавця</p>
- **amountFrom** `Number` _(опціонально)_ - <p>Сума замовлення: від</p>
- **amountTo** `Number` _(опціонально)_ - <p>Сума замовлення: до</p>
- **type** `Number` _(опціонально)_ - <p>Типи замовлення (В обробці, Успішно завершені, Неуспішно завершені).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;orders&quot;: Order[], &quot;_meta&quot;: MetaResponse }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `Number` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.cost** `Number` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `Number` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Number` **_(обов'язково)_** - <p>Статус замовлення</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна</p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>Id дубля замовлення</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p>ChatUser</p>
- **order.order_status_history** `Object[]` **_(обов'язково)_** - <p>OrderStatusHistory[]</p>
- **order.user** `Object` **_(обов'язково)_** - <p>UserModel</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p>Delivery</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p>Purchase[]</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p>StatusAvailable[]</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Access change order</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Опис кредиту</p>
- **order.credit_status** `String` **_(обов'язково)_** - <p>Статус кредиту <ul> <li>1 - Відхилений продавцем,</li> <li>2 - Новий,</li> <li>3 - В роботі,</li> <li>4 - Схвалений,</li> <li>5 - Відхилений,</li> <li>6 - Відмова клієнта від кредиту</li> </ul></p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "orders":[
            {
                "id":80765834,
                "created":"2017-01-18 23:51:49",
                "amount":"242.00",
                "cost":"242.00",
                "cost_with_discount":"242.00",
                "total_quantity":18,
                "mk_created": true,
                "status":2,
                "items_photos":[
                {
                    "id":11869019,
                    "url":"http://rozetka.com.ua/goods/1756916/11869019_images_1756916337.jpg"
                },
                {
                    "id":12316985,
                    "url":"http://rozetka.com.ua/goods/1776934/tmina_plodu_70154592_images_1776934357.jpg"
                }
                ],
                "seller_comment":[

                ],
                "seller_comment_created":"",
                "current_seller_comment":"",
                "comment":"",
                "user_phone":"380672673226",
                "from_warehouse":0,
                "ttn":null,
                "delivery":null
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

### 1.3.1 Пошук даних для фільтра замовлень

**get** `/orders/search-data`

<p>Пошук даних для фільтра замовлень</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **types** `Integer` **_(обов'язково)_** - <p>Типи замовлень (альтернативне групування по статусах) <ul> <li>2 - в обробці</li> <li>3 - успішно завершені</li> <li>4 - нові</li> <li>5 - доставляються</li> <li>6 - неуспішно завершені</li> </ul></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;search_delivers&quot;: Object[], &quot;search_status&quot;: [], &quot;search_localities&quot;: [], &quot;search_payment_methods&quot;: [] }</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "search_delivers": [
           {
               "id": 2698,
               "name": "Мои магазины"
           },
           {
               "id": 120,
               "name": "Курьер по Киеву"
           },
           {
               "id": 10,
               "name": "По вашему адресу"
           },
           {
               "id": 36,
               "name": "Из магазина_Melofon"
           },
           {
               "id": 60,
               "name": "Из магазина_Market"
           },
           {
               "id": 81,
               "name": "Из магазина_\"Основы\""
           },
           {
               "id": 5,
               "name": "Новая Почта"
           },
           {
               "id": 4,
               "name": "Мист Экспресс"
           },
           {
               "id": 5282,
               "name": "Джастин"
           }
       ],
       "search_status": [
           42,
           29,
           34,
           41,
           40,
           43,
           32,
           10,
           35,
           45,
           38,
           12,
           39,
           24,
           19,
           36,
           25,
           31,
           30,
           50,
           49,
           17,
           37,
           28,
           20,
           13,
           33,
           18,
           16,
           44,
           11
       ],
       "search_localities": [
           "Белозерка",
           "Бровары",
           "Винница",
           "Киев",
           "Мерефа"
       ],
       "search_payment_methods": [
           {
               "id": 1,
               "name": "Наличная"
           }
       ]
   }
}
```

---

### 1.3.2 Пошук даних для фільтра замовлень

**get** `/v1/orders/search-data`

<p>Пошук даних для фільтра замовлень</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **types** `Integer` **_(обов'язково)_** - <p>Типи замовлень (альтернативне групування по статусах) <ul> <li>2 - в обробці</li> <li>3 - успішно завершені</li> <li>4 - нові</li> <li>5 - доставляються</li> <li>6 - неуспішно завершені</li> </ul></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;search_delivers&quot;: Object[], &quot;search_status&quot;: [], &quot;search_localities&quot;: [], &quot;search_payment_methods&quot;: [] }</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "search_delivers": [
           {
               "id": 2698,
               "name": "Мои магазины"
           },
           {
               "id": 120,
               "name": "Курьер по Киеву"
           },
           {
               "id": 10,
               "name": "По вашему адресу"
           },
           {
               "id": 36,
               "name": "Из магазина_Melofon"
           },
           {
               "id": 60,
               "name": "Из магазина_Market"
           },
           {
               "id": 81,
               "name": "Из магазина_\"Основы\""
           },
           {
               "id": 5,
               "name": "Новая Почта"
           },
           {
               "id": 4,
               "name": "Мист Экспресс"
           },
           {
               "id": 5282,
               "name": "Джастин"
           }
       ],
       "search_status": [
          {
              "id": 31,
              "name": "Скасування. Замовлення відновлено"
          },
          {
              "id": 43,
              "name": "Брак"
          },
          {
              "id": 49,
              "name": "Скасування. Дубль замовлення"
          },
          {
              "id": 44,
              "name": "Скасування. Фейкове замовлення"
          },
          {
              "id": 71,
              "name": "Скасування. Товар повернувся"
          },
          {
              "id": 34,
              "name": "Скасування. Не влаштовує перевізник, спосіб доставки"
          },
          {
              "id": 10,
              "name": "Відправлення протерміновано"
          },
          {
              "id": 26,
              "name": "Обробляється менеджером"
          },
          {
              "id": 39,
              "name": "Скасування. Не підійшли характеристики товару (колір, розмір)"
          },
          {
              "id": 17,
              "name": "Скасування. Не влаштовує оплата"
          },
          {
              "id": 3,
              "name": "Передано до служби доставки"
          },
          {
              "id": 35,
              "name": "Скасування. Не влаштовує термін доставки"
          },
          {
              "id": 32,
              "name": "Скасування. Не влаштовує розгрупування замовлення"
          },
          {
              "id": 40,
              "name": "Скасування. Клієнт передумав"
          },
          {
              "id": 19,
              "name": "Повернення"
          },
          {
              "id": 33,
              "name": "Скасування. Не влаштовує вартість доставки"
          },
          {
              "id": 6,
              "name": "Посилку отримано"
          },
          {
              "id": 2,
              "name": "Комплектується. Дані підтверджені"
          },
          {
             "id": 13,
              "name": "Скасовано адміністратором"
          },
          {
              "id": 12,
              "name": "Відмова від товару"
          },
          {
              "id": 18,
              "name": "Скасування. Не вдалося зв'язатися з покупцем"
          },
          {
              "id": 5,
              "name": "Очікує в пункті самовивозу"
          },
         {
              "id": 11,
              "name": "Не забрано посилку"
          },
         {
              "id": 36,
              "name": "Скасування. Клієнт хоче безготівкову оплату. У продавця немає такої можливості"
          },
          {
              "id": 29,
              "name": "Скасування. Некоректна ціна на сайті"
          },
          {
              "id": 42,
              "name": "Немає в наявності"
          },
          {
              "id": 46,
              "name": "Відновлено під час продзвонювання"
          },
          {
              "id": 41,
              "name": "Скасування. Придбав на іншому сайті"
          },
          {
              "id": 45,
              "name": "Скасовано покупцем"
          },
          {
              "id": 28,
              "name": "Некоректні контактні дані"
          },
          {
              "id": 38,
              "name": "Скасування. Не влаштовує якість товару"
          },
          {
              "id": 4,
              "name": "Доставляється"
          }
       ],
       "search_localities": [
           "Белозерка",
           "Бровары",
           "Винница",
           "Киев",
           "Мерефа"
       ],
       "search_payment_methods": [
           {
               "id": 1,
               "name": "Наличная"
           }
       ]
   }
}
```

---

### 1.5 Статус оплати замовлення

**get** `/orders/status-payment/{id}`

<p>Отримання актуального статусу оплати замовлення. Ендпоінт має 5-ти хвилинний кеш.</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { OrderStatusPaymentModel } }</p>
- **OrderStatusPayment** `Object` **_(обов'язково)_** - <p>OrderStatusPaymentModel</p>
- **OrderStatusPayment.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **OrderStatusPayment.status_payment_id** `Integer` **_(обов'язково)_** - <p>ID статусу оплати</p>
- **OrderStatusPayment.name** `String` **_(обов'язково)_** - <p>Ключ статусу оплати</p>
- **OrderStatusPayment.title** `String` **_(обов'язково)_** - <p>Назва статусу оплати (відповідно до обраної мови)</p>
- **OrderStatusPayment.value** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>Числове значення (не використовується)</p>
- **OrderStatusPayment.payment_invoice_id** `Number` **_(обов'язково)_** - <p>ID рахунку на оплату</p>
- **OrderStatusPayment.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису про зміну статусу оплати</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
       "order_id":183962235,
       "status_payment_id":1,
       "name":"cancelled",
       "title":"Отменен",
       "value":1,
       "created_at":"2019-12-17 11:09:36"
    }
}
```

---

### 1.5 Статус оплати замовлення

**get** `/orders/status-payment/{id}`

<p>Отримання актуального статусу оплати замовлення. Ендпоінт має 5-ти хвилинний кеш.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { StatusPaymentModel } }</p>
- **StatusPaymentModel** `Object` **_(обов'язково)_** - <p>Model</p>
- **statusPayment.id** `Integer` **_(обов'язково)_** - <p>ID статусу оплати</p>
- **statusPayment.name** `String` **_(обов'язково)_** - <p>Назва</p>
- **statusPayment.title** `String` **_(обов'язково)_** - <p>Назва (назва відповідно до обраної мови)</p>
- **statusPayment.value** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>Числове значення (не використовується)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
       "id":2,
       "name":"paid",
       "title":"Оплачен",
       "value":1,
       "created_at":"2018-10-24 12:58:19",
       "updated_at":null
    }
}
```

---

### 2 Пошук статусів

**get** `/order-statuses/search`

<p>Фільтр (пошук) по статусах замовлень</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID статусу</p>
- **name** `String` _(опціонально)_ - <p>Найменування статусу</p>
- **status_group** `String` _(опціонально)_ - <p>ID групи статусів.</p>
- **expand** `String` _(опціонально)_ - <p>Optional Extra fields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;orderStatus&quot;: OrderStatus[], &quot;_meta&quot;: MetaResponse }</p>
- **OrderStatus** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення</p>
- **orderStatus.id** `Integer` **_(обов'язково)_** - <p>ID статусу замовлення</p>
- **orderStatus.name** `String` **_(обов'язково)_** - <p>Назва статусу (рос.)</p>
- **orderStatus.name_uk** `String` **_(обов'язково)_** - <p>Назва статусу (укр.)</p>
- **orderStatus.name_en** `String` **_(обов'язково)_** - <p>Назва статусу (англ.)</p>
- **orderStatus.status_group** `Number` **_(обов'язково)_** - <p>ID статус групи<br></p> <ul><li>1 - В обробці</li><li>2 - Успішно завершені</li><li>3 - Неуспішно завершені (скасовані)</li></ul>
- **orderStatus.status** `Number` **_(обов'язково)_** - <p>Статус (0 - заблокований, 1 - активний)</p>
- **orderStatus.color** `String` **_(обов'язково)_** - <p>Колір статусу</p>
- **orderStatus.title** `String` **_(обов'язково)_** - <p>Назва статусу на мові інтерфейсу</p>
- **orderStatus.status_available** `Object[]` **_(обов'язково)_** - <p>StatusAvailable[]. <i>(ExtraField)</i> <br> Список статусів, доступних для зміни з поточного</p>
- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID статусу</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>
- **status_available.market_group** `Integer` **_(обов'язково)_** - <p>Група продавця</p>
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
        "orderStatus":[
            {
               "id": 5,
               "name": "Ожидает в пункте самовывоза",
               "name_ua": "Очікує в пункті самовивозу",
               "name_en": "Waiting at pickup station",
               "type": 1,
               "status": 1,
               "status_available": [
                    {
                        "parent_id": 5,
                        "child_id": 3,
                        "delivery_type": 0
                    },
               ],
               "color": "#221F1F"
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

### 2 Пошук статусів

**get** `/order-statuses/search`

<p>Фільтр (пошук) по статусах замовлень</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID статусу</p>
- **name** `String` _(опціонально)_ - <p>Найменування статусу</p>
- **status_group** `String` _(опціонально)_ - <p>ID групи статусів.</p>
- **expand** `String` _(опціонально)_ - <p>Optional Extra fields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;orderStatus&quot;: OrderStatus[], &quot;_meta&quot;: MetaResponse }</p>
- **OrderStatus** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення</p>
- **orderStatus.id** `Integer` **_(обов'язково)_** - <p>ID статусу замовлення</p>
- **orderStatus.name** `String` **_(обов'язково)_** - <p>Назва статусу (рос.)</p>
- **orderStatus.name_uk** `String` **_(обов'язково)_** - <p>Назва статусу (укр.)</p>
- **orderStatus.name_en** `String` **_(обов'язково)_** - <p>Назва статусу (англ.)</p>
- **orderStatus.status_group** `Number` **_(обов'язково)_** - <p>ID статус групи<br></p> <ul><li>1 - В обробці</li><li>2 - Успішно завершені</li><li>3 - Неуспішно завершені (скасовані)</li></ul>
- **orderStatus.status** `Number` **_(обов'язково)_** - <p>Статус (0 - заблокований, 1 - активний)</p>
- **orderStatus.color** `String` **_(обов'язково)_** - <p>Колір статусу</p>
- **orderStatus.title** `String` **_(обов'язково)_** - <p>Назва статусу на мові інтерфейсу</p>
- **orderStatus.status_available** `Object[]` **_(обов'язково)_** - <p>StatusAvailable[]. <i>(ExtraField)</i> <br> Список статусів, доступних для зміни з поточного</p>
- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>
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
        "orderStatus":[
            {
               "id": 5,
               "name": "Сторонними службами доставки",
               "type": 1,
               "status": 1,
               "status_available": [
                    {
                        "parent_id": 5,
                        "child_id": 3,
                        "delivery_type": 0
                    },
               ]
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

### 1.4.8 Отримання додаткових данних про покупця в замовленні

**get** `/orders/user-info`

<p>Отримання додаткових данних покупця в замовленні</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **is_first_order** `Boolean` **_(обов'язково)_** - <p>Чи були у покупця ще замовлення окрім поточного</p>
- **has_app** `Boolean` **_(обов'язково)_** - <p>Чи встановлений у покупця додаток (канал для комунікації)</p>
- **has_email** `Boolean` **_(обов'язково)_** - <p>Чи є Email у покупця</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "is_first_order": false,
        "has_app": false,
        "has_email": true
    }
}
```

---

### 1.6 Статуси платежів

**get** `/payments/payment-statuses`

<p>Отримання всіх статусів оплати</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;payment_statuses&quot;: [StatusPaymentModel] } }</p>
- **StatusPaymentModel** `Object` **_(обов'язково)_** - <p>Model</p>
- **statusPayment.id** `Integer` **_(обов'язково)_** - <p>ID статусу оплати</p>
- **statusPayment.name** `String` **_(обов'язково)_** - <p>Назва</p>
- **statusPayment.title** `String` **_(обов'язково)_** - <p>Назва (назва відповідно до обраної мови)</p>
- **statusPayment.value** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>Числове значення (не використовується)</p>

#### Приклад відповіді

```json
   HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
       "payment_statuses": [
           {
               "id": 1,
               "name": "cancelled",
               "title": "Отменен",
               "value": 0
           },
           {
               "id": 2,
               "name": "paid",
               "title": "Оплачен",
               "value": 1
           },
           {
               "id": 3,
               "name": "unpaid",
               "title": "Ожидает оплаты",
               "value": 2
           },
           {
               "id": 4,
               "name": "unapproved",
               "title": "Проверяется",
               "value": 3
           },
           {
               "id": 5,
               "name": "part-paid",
               "title": "Частично оплачен",
               "value": 4
           },
           {
               "id": 6,
               "name": "expired",
               "title": "Срок действия истек",
               "value": 5
           },
           {
               "id": 7,
               "name": "hold",
               "title": "Сумма удержана",
               "value": 6
           },
           {
               "id": 8,
               "name": "returned",
               "title": "Возвращен",
               "value": 7
           },
           {
               "id": 9,
               "name": "part-returned",
               "title": "Оплачен(с частичным возвратом)",
               "value": 8
           },
           {
               "id": 10,
               "name": "ready_for_return",
               "title": "Ожидает возврата",
               "value": 9
           }
       ]
   }
}
```

---

### 4 Фільтр по зв'язаних статусам

**get** `/status-availables/search`

<p>Status Available Search</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **parent_id** `Integer` _(опціонально)_ - <p>ID материнського статусу</p>
- **child_id** `Integer` _(опціонально)_ - <p>ID дочірнього статусу</p>
- **delivery_type** `Integer` _(опціонально)_ - <p>Тип доставки</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;statusAvailables&quot;: StatusAvailable[], &quot;_meta&quot;: MetaResponse }</p>
- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID статусу</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>
- **status_available.market_group** `Integer` **_(обов'язково)_** - <p>Група продавця</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "statusAvailables":[
            {
               "parent_id": 5,
               "child_id": 3,
               "delivery_type": 0
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

### 4 Фільтр по зв'язаним статусам

**get** `/status-availables/search`

<p>Status Available Search</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **parent_id** `Integer` _(опціонально)_ - <p>ID материнського статусу</p>
- **child_id** `Integer` _(опціонально)_ - <p>ID дочірнього статусу</p>
- **delivery_type** `Integer` _(опціонально)_ - <p>Тип доставки</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;statusAvailables&quot;: StatusAvailable[], &quot;_meta&quot;: MetaResponse }</p>
- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "statusAvailables":[
            {
               "parent_id": 5,
               "child_id": 3,
               "delivery_type": 0
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

### 6 Експорт в XLS

**get** `/orders/export`

<p>Експорт в Excel (використовуючи параметри фільтру по замовленням)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc).</p>

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **id** `Integer` _(опціонально)_ - <p>ID замовлення</p>
- **item_id** `String` _(опціонально)_ - <p>ID товару в замовленні | Назва товару (пошук працює також по частині назви)</p>
- **status** `Integer` _(опціонально)_ - <p>Статус замовлення.</p>
- **delivery_id** `Integer` _(опціонально)_ - <p>ID служби доставки.</p>
- **created_from** `String` _(опціонально)_ - <p>Дата створення замовлення: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата створення замовлення: до</p>
- **userName** `String` _(опціонально)_ - <p>ПІБ отримувача</p>
- **user_phone** `String` _(опціонально)_ - <p>Телефон покупця</p>
- **seller_comment** `String` _(опціонально)_ - <p>Коментар продавця</p>
- **amountFrom** `Number` _(опціонально)_ - <p>Сума замовлення: від</p>
- **amountTo** `Number` _(опціонально)_ - <p>Сума замовлення: до</p>
- **type** `Number` _(опціонально)_ - <p>Типи замовлення (В обробці, Успішно завершені, Неуспішно завершені).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл замовлень магазину (.xls)</p>

---

### 1.4.4 Підтвердження кредиту

**put** `/orders/credit-approved/{id}`

<p>Підтвердження кредиту</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{success: true, content: {credit_status: 2}}</p>

---

### 1.4.3 Відхилення кредиту

**put** `/orders/credit-cancel/{id}`

<p>Відхилення кредиту</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{success: true, content: {credit_status: 1}}</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "credit_status": 1
      }
}
```

---

### 5 Зміна статусу кредиту

**put** `/orders/credit-status/{id}`

<p>Зміна статусу кредиту</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

**Request Body Parameters:**

- **status** `Number` **_(обов'язково)_** - <p>Статус кредиту</p> <ul>     <li>1 - Відхилений продавцем</li>     <li>2 - Новий</li>     <li>6 - Відмова клієнта від кредиту</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{success: true, content: {credit_status: 1}}</p>

---

### 5.1 Продовжити резерв замовлення

**post** `/orders/prolong/{id}`

<p>Продовжити термін резерву замовлення</p>

**Версія:** 0.0.3

#### Параметри запиту

**Request Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": boolean,
   "content": {"status": "ok"}
}
```

---

### 8 Відновлення замовлення

**post** `/orders/restore`

<p>Відновлення замовлення</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **purchases** `PurchaseModel[]` **_(обов'язково)_** - <p>список товарів</p>
- **purchases.id** `Integer` **_(обов'язково)_** - <p>ID покупки</p>
- **purchases.cost** `Number` **_(обов'язково)_** - <p>Загальна ціна покупки (ціна товару Х кількість)</p>
- **purchases.cost_with_discount** `Number` **_(обов'язково)_** - <p>Загальна ціна покупки зі знижкою</p>
- **purchases.price** `Number` **_(обов'язково)_** - <p>Ціна за 1 товар</p>
- **purchasse.quantity** `Integer` **_(обов'язково)_** - <p>Кількість товарів</p>
- **purchases.item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **purchases.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **purchases.status** `Integer` **_(обов'язково)_** - <p>статус товару 1 - актуальний товар, 2 - товар повернутий покупцем, 0 - видалений при редагуванні товару</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;status&quot;: string } }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
       "status": "ok"
    }
}
```

---

### 7.1 Зміна ознаки зворотньої доставки коштів

**put** `/orders/return-money`

<p>Зміна ознаки зворотньої доставки коштів<br> Впливає на дані для створення ЕН по замовленню</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **is_return_money_cost** `Boolean` **_(обов'язково)_** - <p>Ознака зворотньої доставки коштів</p> <ul>     <li>1 - включено зворотню доставку коштів</li>     <li>0 - виключено</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: true, &quot;content&quot;:{ &quot;is_return_money_cost&quot;: true } }</p>

---

### 1.4.2 Редагування замовлення (товари, кількість)

**put** `/orders/{id}`

<p>Редагування замовлення (додавання нового товару в замовлення, зміна кількості товарів, видалення товарів з замовлення)<br></p> <p style="color:darkgreen;">Редагування товарів в замовленні доступно тільки в статусі замовлення <b>"Обробляється менеджером" (26)</b></p> <p><span style="color:red;">Важливо!</span> При видаленні з замовлення товару з промо-ціною, і додаванні його назад - знижка не зберігається. При додаванні товару з промо-ціною, товар буде додано зі звичайною ціною. При видаленні основного товару з комплекту в замовленні - комплект буде розформовано, товари будуть додані без знижки. </p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

**Request Body Parameters:**

- **purchases** `Array` **_(обов'язково)_** - <p><a href="#api-Models-PurchaseDetails">PurchaseModel</a>[] <br>Список товарів, які були в замовленні, і які потрібно оновити.</p> <p>Для оновлення кількості товарів необхідно передати purchase.id, а також актуальну кількість в поле <i>purchase.quantity</i> <p>Для додавання нового товару в замовлення необхідно заповнити purchase.item_id і purchase.quantity </p> <ul><li>Атрибут <i>purchase.id</i> залишити null.</li> <li>Атрибут <i>purchase.ttn</i> залишити null.</li> <li>Атрибут <i>purchase.conf.details</i> не передавати</li> </ul> <p>Всі дані по вартості заповняться автоматично.</p>
- **purchases.id** `Integer` **_(обов'язково)_** - <p>ID товару в замовленні<br><b>purchase.id</b><br></p>
- **purchases.item_id** `Integer` _(опціонально)_ - <p>ID товару<br><b>purchase.item_id</b> <br><i>Not Required (якщо заповнене purchase.id)</i></p>
- **purchases.quantity** `Integer` **_(обов'язково)_** - <p>Кількість товарів<br><b>purchase.quantity</b></p>
- **purchases.price** `Integer` _(опціонально)_ - <p>Ціна товару<br><b>purchase.price</b><br><i>Доступний для товарів з ознакою is_additional_item = true і id = null.<br>Кількість для додаткових товарів по дефолту дорівнює &quot;1&quot;</i></p>
- **purchases.kit_id** `Integer` _(опціонально)_ - <p>ID набору товарів</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {OrderModel} }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatDetails" class="nav-list-item">Chat</a></b>. <br>Переписка з покупцем</p>
- **order.chatMessages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails" class="nav-list-item">ChatMessage</a></b>[] <br>Повідомлення переписки з покупцем</p>
- **order.user** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-UserDetails" class="nav-list-item">UserModel</a></b><br> Інформація про покупця</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryDetails" class="nav-list-item">Delivery</a></b>. <br> Інформація про доставку</p>
- **order.delivery_service** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServiceModelDetails" class="nav-list-item">DeliveryService</a></b>. <br> Інформація про службу доставки</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>[]. <br> Список товарів в замовленні</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetails" class="nav-list-item">StatusAvailable</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.feedback** `UserFeedback[]` **_(обов'язково)_** - <p><b><a href="#api-Models-UserFeedback" class="nav-list-item">UserFeedback</a></b>[]. Список скарг на замовлення</p>
- **order.feedback_count** `Integer` **_(обов'язково)_** - <p>Кількість скарг на замовлення</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для редагування</p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 31656,
       "created": "2019-08-29 12:46:51",
       "changed": "2020-06-03 13:03:47",
       "amount": "4013.43",
       "amount_with_discount": "4013.43",
       "cost": "4013.43",
       "cost_with_discount": "4013.43",
       "status": 26,
       "status_group": 1,
       "items_photos": [
           {
               "id": 45116,
               "url": "/assets/images/package.svg",
               "item_url": null,
               "item_name": "Дополнительная продажа"
           },
           {
               "id": 13165,
               "url": "https://rozetka.com.ua",
               "item_url": "https://rozetka.com.ua",
               "item_name": "Item name"
           }
       ],
       "seller_comment": [
           {
               "comment": "test_api",
               "created": "2020-03-18 12:52:26",
               "seller_id": 12345,
               "seller_fio": "Тестовий менеджер"
           }
       ],
       "seller_comment_created": "2020-03-19 13:46:35",
       "current_seller_comment": "text",
       "comment": "text",
       "user_phone": "380212532521",
       "recipient_phone": "380212532521",
       "user_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "recipient_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "from_warehouse": 0,
       "ttn": "",
       "total_quantity": 2,
       "can_copy": false,
       "created_type": 4,
       "is_viewed": true,
       "callback_off":0,
       "is_fulfillment": false,
       "duplicate_order_id": 112,
       "can_prolong": 1,
       "is_review_request_send": 1,
       "review_request_status": "Відгук є"
   }
}
```

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "id": 248889866,
      "created": "2019-07-25 16:16:57",
      "changed": "2020-01-20 14:32:47",
      "amount": "1700.00",
      "amount_with_discount": "1700.00",
      "cost": "1700.00",
      "cost_with_discount": "1700.00",
      "status": 26,
      "status_group": 1,
      "items_photos": [
          {
              "id": 57518763,
              "url": "https://rozetka.com.ua/goods/7970349/57518763_images_7970349267.png",
              "item_url": "https://rozetka.com.ua/57518763/p57518763",
              "item_name": "Маленькие истории о великих людях. Чарлз Дарвин"
          },
          {
              "id": 38225280,
              "url": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
              "item_url": "https://rozetka.com.ua/38225280/p38225280",
              "item_name": "C++ для чайников, 7-е издание"
          }
      ],
      "seller_comment": [
          {
              "comment": "test",
              "created": "2020-01-20 14:31:31"
          },
          {
              "comment": "123",
              "created": "2019-08-13 17:05:59"
          }
      ],
      "seller_comment_created": "2020-01-20 14:31:31",
      "current_seller_comment": "test",
      "comment": "Test_order",
      "user_phone": "380954954374",
      "from_warehouse": 0,
      "ttn": "",
      "total_quantity": 4,
      "can_copy": false,
      "created_type": 4,
      "is_viewed": true,
      "callback_off":0,
      "chatUser": {
          "id": 1645217,
          "created": "2019-08-02 09:40:10",
          "updated": "2019-08-02 09:40:10",
          "subject": "Заказ № 248889866",
          "user": {
              "id": 42458585,
              "has_email": true,
              "contact_fio": "Василенко Василь",
              "email":"true"
          },
          "read_market": null,
          "trash_market": 0,
          "star_market": 0,
          "order_id": 248889866,
          "type": 0,
          "item_id": null,
          "user_id": 42458585,
          "unread_messages_count": 0
      },
      "chatMessages": [],
      "user": {
          "id": 42458585,
          "has_email": true,
          "contact_fio": "Василенко Василь",
          "email":"true"
      },
      "delivery": {
          "delivery_service_id": 5,
          "delivery_service_name": "Новая Почта",
          "recipient_title": "Василь",
          "place_id": 15643,
          "place_street": "просп. Победы",
          "place_number": "76",
          "place_house": "89а",
          "place_flat": null,
          "cost": null,
          "city": {
              "id": 1,
              "name": "Киев",
              "name_ua": "Київ",
              "region_title": "",
              "title": "Киев",
              "status": 1
          },
          "delivery_method_id": null,
          "ref_id": "1692281f-e1c2-11e3-8c4a-0050568002cf",
          "name_logo": "nova-pochta",
          "email": null
      },
      "purchases": [
          {
              "id": 158281119,
              "cost": "420.00",
              "cost_with_discount": "420.00",
              "price": "210.00",
              "price_with_discount": "210.00",
              "quantity": 2,
              "item_id": 57518763,
              "item_name": "Маленькие истории о великих людях. Чарлз Дарвин",
              "item": {
                  "id": 57518763,
                  "name": "Маленькие истории о великих людях. Чарлз Дарвин",
                  "name_ua": null,
                  "article": "",
                  "price_offer_id": "18629",
                  "price": "210.00",
                  "catalog_category": {
                      "id": 4326593,
                      "name": "Художественная литература",
                      "parent_id": 4326572
                  },
                  "catalog_id": 4326593,
                  "group_id": null,
                  "photo_preview": "https://rozetka.com.ua/goods/7970349/57518763_images_7970349267.png",
                  "photo": [
                      "https://rozetka.com.ua/goods/7970349/57518763_images_7970349267.png"
                  ],
                  "moderation_status": 0,
                  "sla_id": 11558,
                  "url": "https://rozetka.com.ua/57518763/p57518763",
                  "sold": 1,
                  "uploader_offer_id": "18629",
                  "uploader_status": null
              },
              "kit_id": null,
              "conf_details": null,
              "ttn": null,
              "order_status": null,
              "status": 1,
              "is_additional_item": false
          },
          {
              "id": 158280819,
              "cost": "1280.00",
              "cost_with_discount": "1280.00",
              "price": "640.00",
              "price_with_discount": "640.00",
              "quantity": 2,
              "item_id": 38225280,
              "item_name": "C++ для чайников, 7-е издание",
              "item": {
                  "id": 38225280,
                  "name": "C++ для чайников, 7-е издание",
                  "name_ua": null,
                  "article": "",
                  "price_offer_id": "2972",
                  "price": "413.00",
                  "catalog_category": {
                      "id": 4326663,
                      "name": "Научная и техническая литература",
                      "parent_id": 4326572
                  },
                  "catalog_id": 4326663,
                  "group_id": null,
                  "photo_preview": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
                  "photo": [
                      "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg"
                  ],
                  "moderation_status": 0,
                  "sla_id": 11558,
                  "url": "https://rozetka.com.ua/38225280/p38225280",
                  "sold": 0,
                  "uploader_offer_id": "2972",
                  "uploader_status": null
              },
              "kit_id": 0,
              "conf_details": null,
              "ttn": null,
              "order_status": null,
              "status": 1,
              "is_additional_item": false
          }
      ],
      "status_available": [
          {
              "parent_id": 26,
              "child_id": 47,
              "id": 24,
              "delivery_type": 1,
              "market_group": 0
          },
          {
              "parent_id": 26,
              "child_id": 2,
              "id": 20,
              "delivery_type": 1,
              "market_group": 0
          }
      ],
      "is_access_change_order": true,
      "feedback": [{
           "id": 11,
           "comment": "Some text"
       }],
       "feedback_count": 1,
       "is_promo": false,
       "is_review_request_send": 1,
       "review_request_status": "Відгук є",
        "reminder_to_check_payment_for_duplicates": {
             "to_show_reminder": false,
             "message": null
       }
  }
}
```

---

### 1.4.1 Редагування замовлення (статус, ТТН)

**put** `/orders/{id}`

<p>Редагування замовлення (зміна статусу, додавання ТТН і коментаря продавця)</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **status** `Integer` **_(обов'язково)_** - <p>Новий статус замовлення</p>
- **seller_comment** `String` _(опціонально)_ - <p>Коментар продавця</p>
- **ttn** `String` _(опціонально)_ - <p>ТТН <br> <small>*<code>обов'язкове</code> поле при переході в статуси: 3, 61</small><br> <small>**<i>необов'язкове</i> поле при переході в статуси: 2</small> <br><br> Якщо ТТН додано зі статусом 2 - замовлення автоматично переводиться в статус 61<br> <small>*Після додавання ТТН в будь-якому статусі, трекінг замовлення почне відпрацьовувати автоматично. Надалі cамостійно переводити замовлення в інші статуси не потрібно.</small></p>
- **duplicate_order_id** `Integer` _(опціонально)_ - <p>ID дубля замовлення</p> <p>*<code>Обов'язковий</code> при зміні статуса на - 49 (Відміна. Дубль замовлення)</p>

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {OrderModel} }</p>
- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatDetails" class="nav-list-item">Chat</a></b>. <br>Переписка з покупцем</p>
- **order.chatMessages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails" class="nav-list-item">ChatMessage</a></b>[] <br>Повідомлень переписки з покупцем</p>
- **order.user** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-UserDetails" class="nav-list-item">UserModel</a></b><br> Інформація про покупця</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryDetails" class="nav-list-item">Delivery</a></b>. <br> Інформація про доставку</p>
- **order.delivery_service** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServiceModelDetails" class="nav-list-item">DeliveryService</a></b>. <br> Інформація про службу доставки</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>[]. <br> Список товарів в замовленні</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetails" class="nav-list-item">StatusAvailable</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.feedback** `UserFeedback[]` **_(обов'язково)_** - <p><b><a href="#api-Models-UserFeedback" class="nav-list-item">UserFeedback</a></b>[]. Список скарг на замовлення</p>
- **order.feedback_count** `Integer` **_(обов'язково)_** - <p>Кількість скарг на замовлення</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для редагування</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Опис кредиту</p>
- **order.total_quantity** `String` **_(обов'язково)_** - <p>Загальна вартість замовлення</p>
- **order.delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж</p>
- **order.delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках</p>
- **order.delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні</p>
- **order.delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату</p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 31656,
       "created": "2019-08-29 12:46:51",
       "changed": "2020-06-03 13:03:47",
       "amount": "4013.43",
       "amount_with_discount": "4013.43",
       "cost": "4013.43",
       "cost_with_discount": "4013.43",
       "status": 26,
       "status_group": 1,
       "items_photos": [
           {
               "id": 45116,
               "url": "/assets/images/package.svg",
               "item_url": null,
               "item_name": "Дополнительная продажа"
           },
           {
               "id": 13165,
               "url": "https://rozetka.com.ua",
               "item_url": "https://rozetka.com.ua",
               "item_name": "Item name"
           }
       ],
       "seller_comment": [
           {
               "comment": "test_api",
               "created": "2020-03-18 12:52:26",
               "seller_id": 12345,
               "seller_fio": "Тестовий менеджер"
           }
       ],
       "seller_comment_created": "2020-03-19 13:46:35",
       "current_seller_comment": "text",
       "comment": "text",
       "user_phone": "380212532521",
       "recipient_phone": "380212532521",
       "user_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "recipient_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "from_warehouse": 0,
       "ttn": "",
       "total_quantity": 2,
       "can_copy": false,
       "created_type": 4,
       "is_viewed": true,
       "callback_off":0,
       "is_fulfillment": false,
       "duplicate_order_id": 112,
       "can_prolong": 1,
       "is_review_request_send": 1,
       "review_request_status": "Відгук є"
   }
}
```

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "id": 248889866,
      "created": "2019-07-25 16:16:57",
      "changed": "2020-01-20 14:35:44",
      "amount": "1700.00",
      "amount_with_discount": "1700.00",
      "cost": "1700.00",
      "cost_with_discount": "1700.00",
      "status": 2,
      "status_group": 1,
      "items_photos": [
          {
              "id": 57518763,
              "url": "https://rozetka.com.ua/goods/7970349/57518763_images_7970349267.png",
              "item_url": "https://rozetka.com.ua/57518763/p57518763",
              "item_name": "Маленькие истории о великих людях. Чарлз Дарвин"
          },
          {
              "id": 38225280,
              "url": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
              "item_url": "https://rozetka.com.ua/38225280/p38225280",
              "item_name": "C++ для чайников, 7-е издание"
          }
      ],
      "seller_comment": [
          {
              "comment": "comment",
              "created": "2020-01-20 14:35:44"
          },
          {
              "comment": "test",
              "created": "2020-01-20 14:31:31"
          },
          {
              "comment": "123",
              "created": "2019-08-13 17:05:59"
          }
      ],
      "seller_comment_created": "2020-01-20 14:35:44",
      "current_seller_comment": "comment",
      "comment": "Test_order",
      "user_phone": "380954954374",
      "from_warehouse": 0,
      "ttn": "",
      "total_quantity": 4,
      "can_copy": false,
      "created_type": 4,
      "is_viewed": true,
      "callback_off":0,
      "chatUser": {
          "id": 1645217,
          "created": "2019-08-02 09:40:10",
          "updated": "2019-08-02 09:40:10",
          "subject": "Заказ № 248889866",
          "user": {
              "id": 42458585,
              "has_email": true,
              "contact_fio": "Василенко Василь",
              "email":"true"
          },
          "read_market": null,
          "trash_market": 0,
          "star_market": 0,
          "order_id": 248889866,
          "type": 0,
          "item_id": null,
          "user_id": 42458585,
          "unread_messages_count": 0
      },
      "chatMessages": [],
      "user": {
          "id": 42458585,
          "has_email": true,
          "contact_fio": "Василенко Василь",
          "email":"true"
      },
      "delivery": {
          "delivery_service_id": 5,
          "delivery_service_name": "Новая Почта",
          "recipient_title": "Василь",
          "place_id": 15643,
          "place_street": "просп. Победы",
          "place_number": "76",
          "place_house": "89а",
          "place_flat": null,
          "cost": null,
          "city": {
              "id": 1,
              "name": "Киев",
              "name_ua": "Київ",
              "region_title": "",
              "title": "Киев",
              "status": 1
          },
          "delivery_method_id": null,
          "ref_id": "1692281f-e1c2-11e3-8c4a-0050568002cf",
          "name_logo": "nova-pochta",
          "email": null
      },
      "purchases": [
          {
              "id": 158281119,
              "cost": "420.00",
              "cost_with_discount": "420.00",
              "price": "210.00",
              "price_with_discount": "210.00",
              "quantity": 2,
              "item_id": 57518763,
              "item_name": "Маленькие истории о великих людях. Чарлз Дарвин",
              "item": {
                  "id": 57518763,
                  "name": "Маленькие истории о великих людях. Чарлз Дарвин",
                  "name_ua": null,
                  "article": "",
                  "price_offer_id": "18629",
                  "price": "210.00",
                  "catalog_category": {
                      "id": 4326593,
                      "name": "Художественная литература",
                      "parent_id": 4326572
                  },
                  "catalog_id": 4326593,
                  "group_id": null,
                  "photo_preview": "https://rozetka.com.ua/goods/7970349/57518763_images_7970349267.png",
                  "photo": [
                      "https://rozetka.com.ua/goods/7970349/57518763_images_7970349267.png"
                  ],
                  "moderation_status": 0,
                  "sla_id": 11558,
                  "url": "https://rozetka.com.ua/57518763/p57518763",
                  "sold": 1,
                  "uploader_offer_id": "18629",
                  "uploader_status": null
              },
              "kit_id": null,
              "conf_details": null,
              "ttn": null,
              "order_status": null,
              "status": 1,
              "is_additional_item": false
          },
          {
              "id": 158280819,
              "cost": "1280.00",
              "cost_with_discount": "1280.00",
              "price": "640.00",
              "price_with_discount": "640.00",
              "quantity": 2,
              "item_id": 38225280,
              "item_name": "C++ для чайников, 7-е издание",
              "item": {
                  "id": 38225280,
                  "name": "C++ для чайников, 7-е издание",
                  "name_ua": null,
                  "article": "",
                  "price_offer_id": "2972",
                  "price": "413.00",
                  "catalog_category": {
                      "id": 4326663,
                      "name": "Научная и техническая литература",
                      "parent_id": 4326572
                  },
                  "catalog_id": 4326663,
                  "group_id": null,
                  "photo_preview": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
                  "photo": [
                      "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg"
                  ],
                  "moderation_status": 0,
                  "sla_id": 11558,
                  "url": "https://rozetka.com.ua/38225280/p38225280",
                  "sold": 0,
                  "uploader_offer_id": "2972",
                  "uploader_status": null
              },
              "kit_id": 0,
              "conf_details": null,
              "ttn": null,
              "order_status": null,
              "status": 1,
              "is_additional_item": false
          }
      ],
      "status_available": [
          {
              "parent_id": 2,
              "child_id": 26,
              "id": 159,
              "delivery_type": 1,
              "market_group": 0
          },
          {
              "parent_id": 2,
              "child_id": 4,
              "id": 147,
              "delivery_type": 1,
              "market_group": 0
          }
      ],
      "is_access_change_order": true,
      "payment_type_name": "Наличная",
      "delivery_service": {
          "id": 5,
          "name": "Новая Почта",
          "type": 0,
          "status": 1,
          "can_edit": false,
          "can_use": true
      },
      "feedback": [{
           "id": 11,
           "comment": "Some text"
       }],
       "feedback_count": 1,
       "is_promo": false,
       "is_review_request_send": 1,
       "review_request_status": "Відгук є",
       "delivery_commission_info": {
         "percentage_commission": "15",
         "absolute_commission": "5.00",
         "calculated_commission": "12.00"
     }
  }
}
```

---

### 1.4.1 Редагування замовлення

**put** `/orders/{id}`

<p>Редагування замовлення (зміна статусу, додавання ТТН і коментаря продавця)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

**Request Body Parameters:**

- **status** `Integer` **_(обов'язково)_** - <p>Новий статус замовлення</p>
- **seller_comment** `String` **_(обов'язково)_** - <p>Коментар продавця</p>
- **ttn** `String` **_(обов'язково)_** - <p>ТТН</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `Number` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.cost** `Number` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `Number` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Number` **_(обов'язково)_** - <p>Статус замовлення</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна</p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>Id дубля замовлення</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
- **Chat** `Object` **_(обов'язково)_** - <p>ChatModel</p>
- **chat.id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat.created** `String` **_(обов'язково)_** - <p>Дата і час створення переписки</p>
- **chat.updated** `String` **_(обов'язково)_** - <p>Дата й час останнього повідомлення переписки</p>
- **chat.subject** `String` **_(обов'язково)_** - <p>Тема переписки</p>
- **chat.user** `Object` **_(обов'язково)_** - <p>Користувач чату, <b><a href="#api-Models-UserDetails">User</a></p>
- **chat.read_market** `String` **_(обов'язково)_** - <p>Дата і час прочитання повідомлення продавцем</p>
- **chat.trash_market** `Number` **_(обов'язково)_** - <p>Чат перенесено в кошик продавцем</p>
- **chat.star_market** `Number` **_(обов'язково)_** - <p>Прапор, позначає важливість чату у продавця</p>
- **chat.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, якщо чат створений в рамках замовлення</p>
- **chat.type** `Number` **_(обов'язково)_** - <p>Тип чату (0 - замовлення, 1 - питання про товар, 2 - запитання продавцеві)</p>
- **chat.item_id** `Integer` **_(обов'язково)_** - <p>ID товару, якщо чат створений по товару</p>
- **chat.user_id** `Integer` **_(обов'язково)_** - <p>ID користувача (покупця)</p>
- **chats.unread_messages_count** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень від покупця в чаті</p>
- **User** `Object` **_(обов'язково)_** - <p>UserModel</p>
- **user.id** `Integer` **_(обов'язково)_** - <p>ID покупця</p>
- **user.email** `String` **_(обов'язково)_** - <p>E-mail покупця</p>
- **user.login** `String` **_(обов'язково)_** - <p>Логін покупця</p>
- **user.contact_fio** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **Delivery** `Object` **_(обов'язково)_** - <p>DeliveryModel</p>
- **delivery.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **delivery.recipient_title** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery.place_id** `Integer` **_(обов'язково)_** - <p>ID адреси доставки</p>
- **delivery.place_street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **delivery.place_number** `String` **_(обов'язково)_** - <p>Номер відділення служби доставки</p>
- **delivery.place_house** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **delivery.place_flat** `String` **_(обов'язково)_** - <p>Номер квартири</p>
- **delivery.cost** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **delivery.city** `Object` **_(обов'язково)_** - <p>Locality, Місто</p>
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
- **Purchase** `Object` **_(обов'язково)_** - <p>PurchaseModel</p>
- **purchase.id** `Integer` **_(обов'язково)_** - <p>ID покупки</p>
- **purchase.cost** `Number` **_(обов'язково)_** - <p>Загальна ціна покупки (ціна товару Х кількість)</p>
- **purchase.price** `Number` **_(обов'язково)_** - <p>Ціна за 1 товар</p>
- **purchase.quantity** `Integer` **_(обов'язково)_** - <p>Кількість товарів</p>
- **purchase.item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **purchase.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **purchase.item** `Object` **_(обов'язково)_** - <p>ItemModel (Товар)</p>
- **Item** `Object` **_(обов'язково)_** - <p>Model</p>
- **Item.id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка</p>
- **Item.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **Item.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **Item.article** `String` **_(обов'язково)_** - <p>Артикул товару</p>
- **Item.price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у продавця</p>
- **Item.price** `Number` **_(обов'язково)_** - <p>Ціна товару</p>
- **Item.catalog_category** `Object` **_(обов'язково)_** - <p>CatalogCategory <a href="#api-Models-CatalogCategoryDetails">CatalogCategoryModel</a>, Категорія товару</p>
- **Item.catalog_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **Item.group_id** `Integer` **_(обов'язково)_** - <p>ID групи</p>
- **Item.photo_preview** `String` **_(обов'язково)_** - <p>Фото-прев'ю, у вигляді посилання</p>
- **Item.photo** `String[]` **_(обов'язково)_** - <p>Список посилань на фото товару</p>
- **Item.moderation_status** `Number` **_(обов'язково)_** - <p><code>Deprecated</code>: Статус товару на модерації <br> <a href="#api-Items-GetItemStatuses">ModerationStatuses</a></p>
- **Item.url** `String` **_(обов'язково)_** - <p>Item url в системі Розетка</p>
- **Item.sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **Item.uploader_offer_id** `String` **_(обов'язково)_** - <p>Id Оффера в Uploader</p>
- **Item.uploader_status** `Integer|null` **_(обов'язково)_** - <p>Статус товару в Uploader</p>
- **Item.sla_id** `Integer` **_(обов'язково)_** - <p>Sla товару</p>
- **CatalogCategory** `Object` **_(обов'язково)_** - <p>CatalogCategoryModel</p>
- **catalog_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **catalog_category.parent_id** `Integer` **_(обов'язково)_** - <p>ID батьківської категорії</p>
- **catalog_category.name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
     "success":true,
     "content": {
         "id":101647918,
         "created":"2017-08-15 10:20:59",
         "amount":"340.00",
         "cost":"340.00",
         "cost_with_discount":"340.00",
         "status":20,
         "items_photos":[],
         "seller_comment":[{
             "comment":"testComment111",
             "created":"2017-12-05 09:04:19"
         }],
         "seller_comment_created":"2017-12-05 09:04:19",
         "current_seller_comment":"testComment111",
         "comment":"",
         "user_phone":"380955062745",
         "from_warehouse":0,
         "ttn":"34543542352346",
         "total_quantity":1,
         "chatUser": {
             "id":205752,
             "created":"2017-08-15 10:20:24",
             "updated":"2017-08-15 10:20:25",
             "subject":"Заказ № 101647918",
             "user":{
                 "id":10621442,
                 "email":"shevchenko-yu@mail.ru",
                 "login":"shevchenko-yu@mail.ru",
                 "contact_fio":"Юлия Шевченко"
             },
             "read_market":null,
             "lastSent1":"2017-08-15 10:20:24",
             "lastSent2":"2017-08-15 10:20:25",
             "lastInbox2":"2017-08-15 10:20:24",
             "archive2":0,
             "trash_market":0,
             "star_market":0,
             "lastInbox2Id":477428,
             "lastSent1Id":477428,
             "lastSent2Id":477429,
             "order_id":101647918,
             "type":0,
             "item_id":null,
             "user_id":10621442
         },
         "user": {
             "id":10621442,
             "email":"shevchenko-yu@mail.ru",
             "login":"shevchenko-yu@mail.ru",
             "contact_fio":"Юлия Шевченко"
         },
         "delivery":{
             "delivery_service_id":5,
             "delivery_service_name":"Новая Почта",
             "recipient_title":"Шевченко Юлия",
             "place_id":35566,
             "place_street":"",
             "place_number":"363",
             "place_house":"Мини-отделение",
             "place_flat":"",
             "cost":"0.00",
             "city":{
                 "id":1,
                 "name":"Киев",
                 "areaId":null,
                 "parent_id":null,
                 "name_ua":"Київ",
                 "region_title":null,
                 "ext_id":null
             }
         },
         "purchases": [{
             "id":145735205,
             "cost":"340.00",
             "price":"340.10",
             "quantity":1,
             "item_id":6629229,
             "item_name":"Сомнение. Манифест для тех, кто готов выйти из толпы",
             "item": {
                 "id":6629229,
                 "name":"Сомнение. Манифест для тех. кто готов выйти из толпы",
                 "name_ua":null,
                 "article":"42487",
                 "price":"340.10",
                 "catalog_category":{
                     "id":4326656,
                     "name":"Учебники, научно-методическая литература",
                     "parent_id":4326572
                 },
                 "catalog_id":4326656,
                 "group_id":5002910,
                 "photo_preview":null,
                 "photo":[],
                 "moderation_status":0
             }
         }],
         "status_available": [{
             "parent_id":3,
             "child_id":6,
             "id":67,
             "delivery_type":0
         }],
         "is_access_change_order":true
     }
}
```

---

### 1.7 Створення покупця (пошук по телефону і створення)

**post** `/users/create`

<p>Створення покупця (пошук по телефону і створення)</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields, Доп.поля у відповіді запиту</p>

**Request Body Parameters:**

- **phone** `String` **_(обов'язково)_** - <p>Телефон</p>
- **last_name** `String` **_(обов'язково)_** - <p>Прізвище</p>
- **first_name** `String` **_(обов'язково)_** - <p>Ім'я</p>
- **second_name** `String` _(опціонально)_ - <p>По-батькові</p>
- **locality_id** `Integer` **_(обов'язково)_** - <p>ID міста</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **User** `Object` **_(обов'язково)_** - <p>UserModel</p>
- **user.id** `Integer` **_(обов'язково)_** - <p>ID покупця</p>
- **user.has_email** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є у покупця e-mail</p>
- **user.contact_fio** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **user.email** `String` **_(обов'язково)_** - <p>E-mail покупця <code>[deprecated]</code><br> Технічне поле, приходить пустим рядком в разі якщо has_email == false, і зі значенням &quot;true&quot; якщо has_email == true</p>
- **user.addresses** `UserAddress[]` **_(обов'язково)_** - <p><a href="#api-Models-UserAddressDetails">Адреси покупця</a></p>
- **user.phones** `UserPhone[]` **_(обов'язково)_** - <p><a href="#api-Models-UserPhoneDetails">Телефони покупця</a></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success":true,
 "content":{
     "id":163602518,
     "has_email":false,
     "contact_fio":"Тестовый Тест Тестович",
     "email":"",
     "phones":[
         {
             "id":137329667,
             "phone":"380789989999",
             "status":"system",
         }
     ],
     "addresses":[
         {
             "id":285127985,
             "street":null,
             "house":null,
             "flat":null,
             "user_id":163602518,
             "locality_id":1,
             "status":"untested"
         }
     ]
 }
}
```

---

### 8.6.3 Зміна методу оплати замовлення

**put** `/orders/update-payment`

<p>Зміна методу оплати замовлення<br> <b>Враховує:</b></p> <ul>      <li>поточний статус замовлення: зміна дозволена лише у статусах <code>26, 47, 48</code></li>      <li>поточний статус оплати замовлення: змінити метод оплати для сплачених замовлень не можна</li>      <li>поточний тип оплати замовлення</li>      <li>поточний спосіб доставки замовлення</li>      <li>доступність обраного способу оплати в наборах доставки продавця</li> </ul>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **expand** `String` **_(обов'язково)_** - <p>Додаткові поля відповіді (відповідають полям в Order)</p>

**Request Body Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>
- **payment_method_id** `Integer` **_(обов'язково)_** - <p>Id методу оплати</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>
**ExtraFields:**

- **order.chatUser** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatDetails" class="nav-list-item">Chat</a></b>. <br>Переписка с покупцем</p>
- **order.chatMessages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails" class="nav-list-item">ChatMessage</a></b>[] <br>Повідомлень переписки з покупцем</p>
- **order.credit_info** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderCreditInfoDetails" class="nav-list-item">OrderCreditInfo</a></b>[] <br>Інформація про кредит</p>
- **order.status_data** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusDetails" class="nav-list-item">OrderStatus</a></b> Розширена інформація про статус замовлення</p>
- **order.order_status_history** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusHistoryDetails" class="nav-list-item">OrderStatusHistory</a></b>[]. <br> Історія статусів замовлення</p>
- **order.user** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-UserDetails" class="nav-list-item">UserModel</a></b> <br> Інформація про покупця</p>
- **order.delivery** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryDetails" class="nav-list-item">Delivery</a></b>. <br> інформація про доставку</p>
- **order.delivery_service** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServiceModelDetails" class="nav-list-item">DeliveryService</a></b>. <br> Інформація про службу доставки</p>
- **order.purchases** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>[]. <br> Список товарів в замовленні</p>
- **order.status_available** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetails" class="nav-list-item">StatusAvailable</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.status_available_detailed** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-StatusAvailableDetailedModel" class="nav-list-item">StatusAvailableDetailed</a></b>[]. <br> Список статусів, які доступні для замовлення в поточному статусі.</p>
- **order.is_access_change_order** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для редагування</p>
- **order.payment** `Object` **_(обов'язково)_** - <p>Всі дані про оплату замовлення в єдиному вкладеному об'єкті <br><b>*Рекомендується використовувати це поле замість усіх expand-полів, що належать до оплати та кредиту</b> <br><a href="#api-Models-OrderPaymentData" class="nav-list-item">OrderPaymentData</a></p>
- **order.payment_type** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **order.payment_method_id** `Boolean` **_(обов'язково)_** - <p>ID методу оплати</p>
- **order.payment_type_name** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **order.payment_type_title** `String` **_(обов'язково)_** - <p>Назва типу оплати</p>
- **order.status_payment** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusPayment" class="nav-list-item">Статус оплати </a></b> (об'єкт)</p>
- **order.payment_status** `String` **_(обов'язково)_** - <p>Статус оплати (найменування, строка)</p>
- **order.payment_invoice_id** `Integer` **_(обов'язково)_** - <p>Id рахунку на оплату замовлення</p>
- **order.credit_status** `String` **_(обов'язково)_** - <p>Статус кредиту<ul> <li>1 - Відхилений продавцем,</li> <li>2 - Новий,</li> <li>3 - В роботі,</li> <li>4 - Схвалений,</li> <li>5 - Відхилений,</li> <li>6 - Відмова клієнта від кредиту</li> </ul></p>
- **order.credit_broker** `String` **_(обов'язково)_** - <p>Кредитний брокер</p>
- **order.is_promo** `Boolean` **_(обов'язково)_** - <p>Чи наявні в замовленні товари по яким перейшли за рекламним посиланням</p>
- **order.can_edit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можна редагувати замовлення</p>
- **order.feedback** `UserFeedback[]` **_(обов'язково)_** - <p><b><a href="#api-Models-UserFeedback" class="nav-list-item">UserFeedback</a></b>[]. Список скарг на замовлення</p>
- **order.feedback_count** `Integer` **_(обов'язково)_** - <p>Кількість скарг на замовлення</p>
- **order.is_fixed_campaign_order** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є в замовленні товари додані з переходу з фіксованого рекламного оголошення</p>
- **order.is_free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака, чи проходить замовлення по безкоштовній доставці</p>
- **order.is_payed** `Boolean` **_(обов'язково)_** - <p>Ознака, чи замовлення сплачено картою</p>
- **order.is_receiver_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування даних отримувача</p>
- **order.delivery_prices** `Array` **_(обов'язково)_** - <p>Вартості доставки</p>
- **order.delivery_prices.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **order.delivery_prices.post_pay_commission** `Number` **_(обов'язково)_** - <p>Комісія за накладений платіж</p>
- **order.market_review** `Boolean` **_(обов'язково)_** - <p>Відгук про продавця</p>
- **order.last_update_status** `String` **_(обов'язково)_** - <p>Час останньої зміни статусу замовлення</p>
- **order.reminder_to_check_payment_for_duplicates** `Object` **_(обов'язково)_** - <p>Об'єкт для нагадування перевірки статуса оплати для дублів замовлень</p>
- **order.reminder_to_check_payment_for_duplicates.to_show_reminder** `Boolean` **_(обов'язково)_** - <p>Чи показувати нагадування</p>
- **order.reminder_to_check_payment_for_duplicates.message** `String` **_(обов'язково)_** - <p>Текст повідомлення нагадування</p>
- **order.invoice_exist** `Boolean` **_(обов'язково)_** - <p>Чи є в замовленні рахунки</p>
- **order.can_create_invoice** `Boolean` **_(обов'язково)_** - <p>Чи доступне створення рахунку</p>
- **order.need_label** `Boolean` **_(обов'язково)_** - <p>Чи потрібні посилці замовлення додаткові стікери</p>
- **order.delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж</p>
- **order.delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках</p>
- **order.delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні</p>
- **order.delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату</p>
- **order.rz_delivery_ttn_sender** `Object|null` **_(обов'язково)_** - <p><a href="#api-Models-RZDeliverySenderResponse">Відправник</a>, вказаний у ТТН для доставки через ROZETKA Delivery</p>
- **order.count_buyer_orders** `Number` **_(обов'язково)_** - <p>Кількість покупок клієнта (враховуються замовлення у всіх статусах, кількість замовлень клієнта на даний момент)</p>
- **order.is_reserve_ending** `Boolean` **_(обов'язково)_** - <p>Ознака, чи закінчується термін резерву (за два дні)</p>
- **order.has_kit** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є комплект в замовленні</p>
- **order.carrier** `Object` **_(обов'язково)_** - <p>Перевізник РЗ Делівері</p>
- **order.carrier.carrier** `String|Null` **_(обов'язково)_** - <p>MDM ID перевізника</p>
- **order.carrier.carrier_inner_id** `Integer|Null` **_(обов'язково)_** - <p>ID перевізника</p>
- **order.carrier.carrier_track_num** `String|Null` **_(обов'язково)_** - <p>ТТН перевізника</p>
- **order.carrier.carrier_return_track_num** `String|Null` **_(обов'язково)_** - <p>Номер відстеження повернення перевізником</p>
- **order.carrier.is_carrier_meest** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є перевізником Meest</p>
- **order.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>
- **order.auto_refund** `Object` **_(обов'язково)_** - <p>Автоматичне повернення коштів</p>
- **order.auto_refund.is_auto** `Boolean` **_(обов'язково)_** - <p>Ознака автоматичного повернення коштів при скасуванні замовлення</p>
- **order.auto_refund.status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів (1-успішно, 2-неуспішно)</p>
- **order.auto_refund.error** `String` **_(обов'язково)_** - <p>Статус помилки</p>
- **order.is_smart** `Boolean` **_(обов'язково)_** - <p>Ознака чи замовлення преміум</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 31656,
       "created": "2019-08-29 12:46:51",
       "changed": "2020-06-03 13:03:47",
       "amount": "4013.43",
       "amount_with_discount": "4013.43",
       "cost": "4013.43",
       "cost_with_discount": "4013.43",
       "status": 26,
       "status_group": 1,
       "items_photos": [
           {
               "id": 45116,
               "url": "/assets/images/package.svg",
               "item_url": null,
               "item_name": "Дополнительная продажа"
           },
           {
               "id": 13165,
               "url": "https://rozetka.com.ua",
               "item_url": "https://rozetka.com.ua",
               "item_name": "Item name"
           }
       ],
       "seller_comment": [
           {
               "comment": "test_api",
               "created": "2020-03-18 12:52:26",
               "seller_id": 12345,
               "seller_fio": "Тестовий менеджер"
           }
       ],
       "seller_comment_created": "2020-03-19 13:46:35",
       "current_seller_comment": "text",
       "comment": "text",
       "user_phone": "380212532521",
       "recipient_phone": "380212532521",
       "user_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "recipient_title": {
           "first_name": "First",
           "last_name": "Last",
           "second_name": "Second",
           "full_name": "Last First Second"
       },
       "from_warehouse": 0,
       "ttn": "",
       "total_quantity": 2,
       "can_copy": false,
       "created_type": 4,
       "is_viewed": true,
       "callback_off":0,
       "is_fulfillment": false,
       "duplicate_order_id": 112,
       "can_prolong": 1,
       "is_review_request_send": 1,
       "review_request_status": "Відгук є"
   }
}
```

```json
 HTTP/1.1 200 OK
 {
     "success":true,
     "content": {
         "id":101647918,
         "created":"2017-08-15 10:20:59",
         "changed": "2019-05-16 17:11:07",
         "amount":"340.00",
         "amount_with_discount":"340.00",
         "cost":"340.00",
         "cost_with_discount":"340.00",
         "status":3,
         "status_group":1,
         "items_photos":[],
         "seller_comment":[],
         "seller_comment_created":"",
         "current_seller_comment":"",
         "comment":"",
         "user_phone":"380112141214",
         "from_warehouse":0,
         "ttn":"34543542352346",
         "total_quantity":1,
         "can_copy": false,
         "created_type": 4,
         "payment_type_name":"Тестовый_кредит_маркет",
         "callback_off":0,
         "is_fulfillment": false,
         "duplicate_order_id": 112,
         "invoice_exist": true,
         "can_create_invoice": true,
         "chatUser": {
             "id":205752,
             "created":"2017-08-15 10:20:24",
             "updated":"2017-08-15 10:20:25",
             "subject":"Заказ № 101647918",
             "user":{
                 "id":10621442,
                 "has_email": true,
                 "contact_fio":"Юлия Шевченко",
                 "email":"true"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101647918,
             "type":0,
             "item_id":null,
             "user_id":10621442,
             "unread_messages_count": 0
         },
         "chatMessages": [{
             "chat_id":205506,
             "body":"Поздравляем! Поступил новый заказ № 101615935...",
             "created":"2017-08-14 22:15:25",
             "user_id":42,
             "sender_hide":1,
             "seller":null,
             "seller_id":null
         },...]
         "user": {
             "id":10621442,
             "has_email": true,
             "contact_fio": "Василенко Василь",
             "email":"true"
         },
         "delivery":{
             "delivery_service_id":5,
             "delivery_service_name": "Новая Почта",
             "recipient_title":"Шевченко Юлия",
             "place_id":35566,
             "place_street":"",
             "place_number":"363",
             "place_house":"Мини-отделение",
             "place_flat":"",
             "cost":"0.00",
             "reserve_date": "2022-03-28",
             "city":{
                 "id": 1,
                  "name": "Киев",
                  "region_title": "",
                  "title": "Киев",
                  "status": 1
             },
             "delivery_method_id": 1,
              "ref_id": "9e9c238c-5878-11e9-a703-005056b24375",
              "name_logo": "nova-pochta"
         },
         "purchases": [{
             "id":145735205,
             "cost":"280.00",
             "cost_with_discount":"249.00",
             "price":"280.10",
             "price_with_discount":"249.00",
             "quantity":1,
             "item_id":6629229,
             "item_name":"Сомнение. Манифест для тех, кто готов выйти из толпы",
             "kit_id":0,
             "item": {
                   "id": 38225280,
                   "name": "C++ для чайников, 7-е издание",
                   "name_ua": null,
                   "article": "",
                   "price_offer_id": "2972",
                   "price": "413.00",
                   "catalog_category": {
                       "id": 4326663,
                       "name": "Научная и техническая литература",
                       "parent_id": 4326572
                   },
                   "catalog_id": 4326663,
                   "group_id": null,
                   "photo_preview": "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg",
                   "photo": [
                       "https://rozetka.com.ua/goods/4045609/38225280_images_4045609504.jpg"
                   ],
                   "moderation_status": 0,
                   "sla_id": 11558,
                   "url": "https://rozetka.com.ua/38225280/p38225280",
                   "sold": 0,
                   "uploader_offer_id": "2972",
                   "uploader_status": null
               },
             "conf_details": null,
             "ttn": null,
             "order_status": null,
             "status": 1,
             "is_additional_item": false
         }],
         "status_available": [
           {
               "parent_id": 2,
               "child_id": 26,
               "id": 159,
               "delivery_type": 1,
               "market_group": 0
           },
           {
               "parent_id": 2,
               "child_id": 4,
               "id": 147,
               "delivery_type": 1,
               "market_group": 0
           }
         ],
         "is_access_change_order":true,
         "payment_type": "undefined",
          "credit_info": [],
         "order_status_history":[{
                 "status_id":2,
                 "created":"2017-08-15 09:30:29",
                 "status":{
                     "id":2,
                     "name":"Комплектується. Дані підтверджені",
                     "status_group":1,
                     "status":1
                 }
              }],
         "payment_type_title": "Готівкова",
         "payment_type_name": "Оплата під час отримання товару",
         "delivery_service": {
              "id": 5,
              "name": "Новая Почта",
              "type": 0,
              "status": 1,
              "can_edit": false,
              "can_use": true
          },
         "status_data": {
             "id": 5,
             "name": "Ожидает в пункте самовывоза",
             "name_ua": "Очікує в пункті самовивозу",
             "name_en": "Waiting at pickup station",
             "type": 1,
             "status": 1,
             "color": "#221F1F"
         },
         "status_payment": {
              "order_id":183962235,
              "status_payment_id":1,
              "name":"cancelled",
              "title":"Отменен",
              "value":1,
              "created_at":"2019-12-17 11:09:36"
         },
         "payment_status": "Очікує оплату",
         "can_edit": true,
         "feedback": [{
             "id": 11,
             "comment": "Some text"
         }],
         "feedback_count": 1,
         "is_promo": false,
         "is_access_change_order": true,
         "payment_invoice_id":59999999,
         "delivery_prices": {
           "delivery_price": "18.00",
           "post_pay_commission": "12.17"
         },
         "refund_status": null,
         "ff_can_approve": true,
         "is_review_request_send": 0,
         "review_request_status": "Відгук є",
         "reminder_to_check_payment_for_duplicates": {
              "to_show_reminder": false,
              "message": null
         },
         "delivery_commission_info": {
              "percentage_commission": "15",
              "absolute_commission": "5.00",
              "calculated_commission": "12.00"
         },
         "count_buyer_orders": 123,
         "rz_delivery_ttn_sender": {
              "city": "d2ab80d6-1c4e-4ff9-b789-092914d451c6",
              "info": null,
              "name": "Петров Петр Петрович",
              "type": "natural",
              "phones":["380664357902"],
              "address": "г.Киев, ул. Кирпаноса 26",
              "department": "25d64bf9-f1f2-422a-89c5-1d8837ab7d77"
         },
         "is_reserve_ending": false
     }
}
```

---

### 3 Експорт замовлення в PDF

**get** `/orders/generate-pdf/{id}`

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл замовлення (.pdf)</p>

---

### 9 Перелік доставок, що використовуються у замовленнях [DEPRECATED]

**get** `/orders/search-delivers`

<p>Дані про доставки, що використовуються у замовленнях</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **SearchDelivers** `Object` **_(обов'язково)_** - <p>SearchDeliversModel</p>
- **SearchDelivers.id** `Integer` **_(обов'язково)_** - <p>ID статусу</p>
- **SearchDelivers.name** `String` **_(обов'язково)_** - <p>Найменування статусу</p>

#### Приклад відповіді

```json
 {
    "success": true,
    "content": {
        "search_delivers": [
            {
                "id": 4,
                "name": "Міст Експрес"
            },
            {
                "id": 5,
                "name": "Нова Пошта"
            },
            {
                "id": 2024,
                "name": "Укрпошта"
            },
            {
                "id": 5282,
                "name": "Джастін"
            }
        ]
    }
}
```

---

### 1.4.5 Зміна доставки замовлення

**post** `/orders/update-delivery`

<p>Зміна доставки замовлення (спосіб доставки, служба доставки, вулиця і номер відділення)<br> Обов'язкові поля: <br></p> <ul> <li>для доставки кур'єром: place_street, place_house, place_flat <br></li> <li>для доставки на відділення: place_id</li> </ul>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **order.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення<br> <i> Доставка редагується тільки в наступних статусах замовлення: <code>26, 47, 48</code> <br> І тільки при наявній оплаті (cash) </i></p>
- **order.delivery** `Object` **_(обов'язково)_** - <p>Доставка</p>
- **order.delivery.delivery_method_id** `Integer` **_(обов'язково)_** - <p>Спосіб доставки</p> <ul><li>1 - Самовивіз</li> <li>2 - Кур'єр</li></ul>
- **order.delivery.delivery_service_id** `Integer` **_(обов'язково)_** - <p>Служба доставки</p>
- **order.delivery.city** `Object` **_(обов'язково)_** - <p>Місто доставки</p>
- **order.delivery.city.id** `Integer` **_(обов'язково)_** - <p>ID міста доставки</p>
- **order.delivery.place_id** `Integer` _(опціонально)_ - <p>Номер відділення доставки* <br><code>Обов'язкове поле при обраному методі доставки - Самовивіз </code></p>
- **order.delivery.place_street** `String` _(опціонально)_ - <p>Вулиця доставки* <br><code>Обов'язкове поле при обраному методі доставки - Кур'єр </code></p>
- **order.delivery.place_house** `String` _(опціонально)_ - <p>Номер дома доставки* <br><code>Обов'язкове поле при обраному методі доставки - Кур'єр </code></p>
- **order.delivery.street_id** `Integer` _(опціонально)_ - <p>ID вулиці* <br><code>Обов'язкове поле при обраному методі доставки - Кур'єр </code></p>
- **order.delivery.place_flat** `String` _(опціонально)_ - <p>Номер квартири доставки</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Delivery** `Object` **_(обов'язково)_** - <p>DeliveryModel</p>
- **delivery.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **delivery.delivery_service_name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **delivery.recipient_title** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery.recipient_first_name** `String` **_(обов'язково)_** - <p>Ім'я одержувача</p>
- **delivery.recipient_last_name** `String` **_(обов'язково)_** - <p>Прізвище одержувача</p>
- **delivery.recipient_second_name** `String` **_(обов'язково)_** - <p>По батькові одержувача</p>
- **delivery.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **delivery.another_recipient** `Boolean` **_(обов'язково)_** - <p>Прапор, який відповідає за те, що в замовленні покупець і одержувач відрізняються</p>
- **delivery.delivery_method_id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **delivery.place_id** `Integer` **_(обов'язково)_** - <p>ID адреси доставки</p>
- **delivery.pickup_rz_id** `String` **_(обов'язково)_** - <p>ID адреси доставки в системі Розетка</p>
- **delivery.pickup_type** `Integer|Null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **delivery.place_street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **delivery.place_number** `String` **_(обов'язково)_** - <p>Номер відділення служби доставки</p>
- **delivery.place_house** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **delivery.place_flat** `String` **_(обов'язково)_** - <p>Номер квартири</p>
- **delivery.cost** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **delivery.city** `Object` **_(обов'язково)_** - <p>Locality, Населений пункт</p>
- **delivery.ref_id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор адреси точки видачі в НП.</p>
- **delivery.name_logo** `Integer` **_(обов'язково)_** - <p>Назва лого служби доставки транслітом.</p>
- **delivery.street_directory_id** `Number` **_(обов'язково)_** - <p>Id вулиці</p>
- **delivery.street_id** `Number` **_(обов'язково)_** - <p>Id вулиці</p>
- **delivery.email** `String` **_(обов'язково)_** - <p>email одержувача</p>
- **delivery.reserve_date** `String` **_(обов'язково)_** - <p>Дата резерву</p>
- **delivery.delivery_date** `String` **_(обов'язково)_** - <p>Дата доставки</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "delivery_service_id": 5,
        "delivery_service_name": "Новая Почта",
        "recipient_title": "Іван Іванов",
        "recipient_phone": "067123456",
        "another_recipient": false,
        "place_id": 21033,
        "place_street": "вул. Тестова",
        "place_number": "320",
        "place_house": "20",
        "place_flat": null,
        "cost": null,
        "city": {
            "id": 1,
            "uuid": "b205d*****bbdf27",
            "city_name": "Киев",
            "name": "Киев",
            "name_ua": "Київ",
            "name_en": "Kyiv",
            "region_title": "",
            "title": "Киев",
            "status": 1
        },
        "delivery_method_id": 2,
        "ref_id": "663****4375",
        "name_logo": "nova-pochta",
        "email": null,
        "street_directory_id": null,
        "street_id": 23
    }
}
```

---

### 1.4.7 Зміна одержувача в замовленні

**post** `/orders/update-receiver`

<p>Изменение получателя в заказе<br> Обов'язкові поля:<br></p> <ul> <li>order_id, recipient_title</li> </ul>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення<br> <i> Доставка редагується лише в наступних статусах замовлення: <code>26, 47, 48</code><br> і при оплаті готівкою (cash) або карткою (no cash, card, privat24, apple_pay, google_pay)</i> а також способами оплати Безготівковий для фіз осіб, Безготівковий для фіз та юр осіб</i></p>
- **recipient_title** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **recipient_phone** `String` _(опціонально)_ - <p>Телефон одержувача</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Delivery** `Object` **_(обов'язково)_** - <p>DeliveryModel</p>
- **delivery.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **delivery.delivery_service_name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **delivery.recipient_title** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery.recipient_first_name** `String` **_(обов'язково)_** - <p>Ім'я одержувача</p>
- **delivery.recipient_last_name** `String` **_(обов'язково)_** - <p>Прізвище одержувача</p>
- **delivery.recipient_second_name** `String` **_(обов'язково)_** - <p>По батькові одержувача</p>
- **delivery.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **delivery.another_recipient** `Boolean` **_(обов'язково)_** - <p>Прапор, який відповідає за те, що в замовленні покупець і одержувач відрізняються</p>
- **delivery.delivery_method_id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **delivery.place_id** `Integer` **_(обов'язково)_** - <p>ID адреси доставки</p>
- **delivery.pickup_rz_id** `String` **_(обов'язково)_** - <p>ID адреси доставки в системі Розетка</p>
- **delivery.pickup_type** `Integer|Null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **delivery.place_street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **delivery.place_number** `String` **_(обов'язково)_** - <p>Номер відділення служби доставки</p>
- **delivery.place_house** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **delivery.place_flat** `String` **_(обов'язково)_** - <p>Номер квартири</p>
- **delivery.cost** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **delivery.city** `Object` **_(обов'язково)_** - <p>Locality, Населений пункт</p>
- **delivery.ref_id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор адреси точки видачі в НП.</p>
- **delivery.name_logo** `Integer` **_(обов'язково)_** - <p>Назва лого служби доставки транслітом.</p>
- **delivery.street_directory_id** `Number` **_(обов'язково)_** - <p>Id вулиці</p>
- **delivery.street_id** `Number` **_(обов'язково)_** - <p>Id вулиці</p>
- **delivery.email** `String` **_(обов'язково)_** - <p>email одержувача</p>
- **delivery.reserve_date** `String` **_(обов'язково)_** - <p>Дата резерву</p>
- **delivery.delivery_date** `String` **_(обов'язково)_** - <p>Дата доставки</p>

#### Приклад відповіді

```json
 {
    "success": true,
    "content": {
        "delivery_service_id": 1,
        "delivery_service_name": "Видача у ROZETKA",
        "recipient_title": "Тест тестович",
        "recipient_phone": null,
        "another_recipient": false,
        "place_id": 277138,
        "pickup_rz_id": null,
        "place_street": "дорога Миколаївська (дорога)",
        "place_number": "3005",
        "place_house": "126",
        "place_flat": null,
        "cost": null,
        "city": {
            "id": 30,
            "uuid": "d2ab80d6-1c4e-4ff9-b789-092914d451c6",
            "city_name": "Одеса",
            "name": "Одесса",
            "name_ua": "Одеса",
            "name_en": "Odesa",
            "region_title": "",
            "title": "Одеса",
            "status": 1
        },
        "delivery_method_id": 1,
        "ref_id": "4e2eefc2-1da1-11e6-b35b-001ec93df11f",
        "name_logo": "octopus",
        "email": null,
        "street_directory_id": null,
        "street_id": null
    }
}
```

---

### 7.2 Встановити статус відправлено запит на відгук

**put** `/orders/review-request-status`

<p>Встановити статус відправлено запит на відгук</p>

**Версія:** 0.0.3

#### Параметри запиту

**Request Body Parameters:**

- **order_ids** `Integer` **_(обов'язково)_** - <p>Масив ID замовлень <br><i>Також доступні всі фільтри з (<a href="#api-Orders-GetOrderSearch">orders/search</a>)</i></p>
- **types** `Number` **_(обов'язково)_** - <p>Типи замовлень (альтернативне групування по статусах)<br> <i>Замінює параметр <b>type</b>, разом два параметра не використовуються.</i> <ul> <li>1 - всі замовлення</li> <li>2 - в обробці</li> <li>3 - успішно завершені</li> <li>4 - нові</li> <li>5 - доставляються</li> <li>6 - неуспішно завершені</li> </ul></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": boolean,
   "content": {"status": "ok"}
}
```

---

