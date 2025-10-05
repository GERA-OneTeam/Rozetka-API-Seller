# MarketReviews

### 3 Рейтинг магазину

**get** `/markets/{id}/rating`

<p>Рейтинг магазину</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Market ID</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: MarketRatingModel }</p>
- **MarketRating** `Object` **_(обов'язково)_** - <p>MarketRatingModel</p>
- **marketReviews.id** `Integer` **_(обов'язково)_** - <p>ID рейтингу</p>
- **marketReviews.rank** `Number` **_(обов'язково)_** - <p>Рейтинг</p>
- **marketReviews.count_votes** `Integer` **_(обов'язково)_** - <p>Кількість відгуків</p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення рейтингу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":{
         "id":5445,
         "rank":100,
         "count_votes":570,
         "created":"2016-06-24 00:00:02"
     }
}
```

---

### 1 Кількість відгуків

**get** `/market-reviews/counts`

<p>Кількість відгуків про магазин</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {} }</p>
- **unread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних відгуків</p>
- **all** `Integer` **_(обов'язково)_** - <p>Кількість всіх відгуків</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": {
         "unread": 15,
         "all": 80
    }
}
```

---

### 4 Пошук за відгуками про магазин

**get** `/market-reviews/search`

<p>Пошук за відгуками про магазин. Вибірка всіх відгуків про магазин.</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування (asc/desc)</p>

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>Id відгуку</p>
- **order_id** `Integer` _(опціонально)_ - <p>Id замовлення</p>
- **search** `String` _(опціонально)_ - <p>Пошук по номеру замовлення або імені покупця</p>
- **order_status** `Integer` _(опціонально)_ - <p>Статус замовлення</p>
- **status_review** `String` _(опціонально)_ - <p>Статус відгуку</p>
- **vote** `String` _(опціонально)_ - <p>Оцінка відгуку</p>
- **read_search** `Boolean` _(опціонально)_ - <p>Відгук прочитаний або не прочитаний</p>
- **comment_search** `Boolean` _(опціонально)_ - <p>Наявність текстового коментаря</p>
- **reply_search** `Boolean` _(опціонально)_ - <p>Відгук прочитаний або не прочитаний</p>
- **important_search** `Boolean` _(опціонально)_ - <p>Відмітка важливості коментаря</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields<br> <code>purchases</code> - товари в замовленні</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { marketReviews: MarketReviews[], _meta:MetaResponse }}</p>
- **MarketReviews** `Object` **_(обов'язково)_** - <p>MarketReviewsModel</p>
- **marketReviews.id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviews.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviews.user** `String` **_(обов'язково)_** - <p>ПІБ користувача, який залишив відгук</p>
- **marketReviews.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails" class="nav-list-item">OrderModel</a></b>. <br>Детальна інформація про замовлення</p>
- **marketReviews.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення <br><i>Може бути null</i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення коментаря</p>
- **marketReviews.vote_convenience** `String` **_(обов'язково)_** - <p>Актуальність ціни і наявності <br><i>Може бути null</i></p>
- **marketReviews.vote_manager** `String` **_(обов'язково)_** - <p>Якість обслуговування <br><i>Може бути null</i></p>
- **marketReviews.vote_delivery** `String` **_(обов'язково)_** - <p>Дотримання термінів доставки <br><i>Може бути null</i></p>
- **marketReviews.review_convenience** `String` **_(обов'язково)_** - <p>Коментар зручності вибору товару <br><i>Може бути null</i></p>
- **marketReviews.review_manager** `String` **_(обов'язково)_** - <p>Коментар консультації менеджера <br><i>Може бути null</i></p>
- **marketReviews.review_delivery** `String` **_(обов'язково)_** - <p>Коментар доставки товару <br><i>Може бути null</i></p>
- **marketReviews.vote** `String` **_(обов'язково)_** - <p>Загальна оцінка</p>
- **marketReviews.status** `String` **_(обов'язково)_** - <p>Статус коментаря</p>
- **marketReviews.read** `Boolean` **_(обов'язково)_** - <p>Коментар прочитаний</p>
- **marketReviews.read_ts** `Datetime` **_(обов'язково)_** - <p>Дата прочитання коментаря</p>
- **marketReviews.problem_solved** `Boolean` **_(обов'язково)_** - <p>Ознака, що проблема озвучена в коментарі вирішена</p>
- **marketReviews.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketReviewDispute" class="nav-list-item">MarketReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **marketReviews.blocking_reason_title** `String` **_(обов'язково)_** - <p>Текст іншої причини</p>
- **MarketReviewReply** `Object` **_(обов'язково)_** - <p>MarketReviewReplyModel</p>
- **marketReviewReply.id** `Integer` **_(обов'язково)_** - <p>ID відповіді на відгук</p>
- **marketReviewReply.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviewReply.market_review_id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviewReply.type** `Integer` **_(обов'язково)_** - <p>Тип відповіді на відгук<br> <i> null - Відповідь на відгук</i></p>
- **marketReviewReply.comment** `String` **_(обов'язково)_** - <p>Текст відповіді на відгук</p>
- **marketReviewReply.status** `String` **_(обов'язково)_** - <p>Статус відповіді на відгук<br> <i>1. Новий;<br> 2. На модерації;<br> 3. Заблокований;<br> 4. Опублікований;<br> 5. Заблокований антиматом;</i></p>
- **marketReviewReply.user_type** `Integer` **_(обов'язково)_** - <p>Ознака хто надіслав відгук<br> <i> 1 - продавець<br> 2 - покупець </i></p>
- **marketReviews.upated_at** `String` **_(обов'язково)_** - <p>Дата оновлення відповіді</p>
- **ReasonBlockingReview** `Object` **_(обов'язково)_** - <p>ReasonBlockingReviewModel</p>
- **ReasonBlockingReview.id** `Integer` **_(обов'язково)_** - <p>ID причини блокування</p>
- **ReasonBlockingReview.title** `String` **_(обов'язково)_** - <p>Назва причини блокування</p>
**MarketReview ExtraField:**

- **marketReviews.purchases** `Purchase[]` **_(обов'язково)_** - <p>Масив товарів в замовленні (<b><a href="#api-Models-PurchaseDetails" class="nav-list-item">Purchase</a></b>)</p>
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
        "marketReviews":[{
            "id":6098971,
            "order_id":100326002,
            "user":"#### Елена",
            "order": {
                "id":100326002,
                "created":"2017-08-03 16:01:36",
                "changed": "2018-05-08 06:00:05",
                "amount":"143.00",
                "amount_with_discount":"143.00",
                "cost":"143.00",
                "cost_with_discount":"143.00",
                "order_status":6,
                "status_group":2,
                "status_review":"active",
                "vote":"like",
                "important":1,
                "read":read,
                "comment":1,
                "reply":1,
                "items_photos": [
                        {
                            "id": 12016271,
                            "url": "https://rozetka.com.ua/goods/1755862/tazalok_70285040_images_1755862662.jpg",
                            "item_name": "LASSA TRANSWAY 235/65 R16C 115/113R"
                            "item_url": "https://rozetka.com.ua/9144622/p9144622",
                            "item_price":"143.00"
                        }
                     ],
                "seller_comment":[],
                "seller_comment_created":"",
                "current_seller_comment":"",
                "comment":"",
                "user_phone":"380972156373",
                "from_warehouse":0,
                "ttn":"20400057167652",
                "total_quantity":1,
                "can_copy": false,
                "created_type": 4
            },
            "comment":"test",
            "created_at":"2017-08-07 10:34:59",
            "vote_convenience":"good",
            "vote_manager":"good",
            "vote_delivery":"excellent",
            "review_convenience":null,
            "review_manager":null,
            "review_delivery":null,
            "vote":"middle",
            "status":"active",
            "read":true,
            "read_ts":"2017-08-09 14:09:10.401746",
            "problem_solved": false,
            "reply": {
                "id": 257,
                "order_id": 620185008,
                "market_review_id": 637840,
                "type": null,
                "comment": "Reply test for 637840",
                "reason": null,
                "status": 4,
                "updated_at": null,
                "created_at": "2021-03-04 10:11:28",
                "user_type": 1
            },
            "dispute": {
                 "market_review_id": 653164,
                 "sellers_comment": "Коментар",
                 "reason_title": "Нецензурна лексика",
                 "status": 2,
                 "created_at": "2021-06-02 09:10:00"
             },
             "reasonBlockingReview": {
                "id": 4,
                "title": "Питання вирішене"
            },
            "blocking_reason_title": "Текст іншої причини",
            "purchases":[{
              "id": 158281119,
              "cost": "143.00",
              "cost_with_discount": "143.00",
              "price": "143.00",
              "price_with_discount": "143.00",
              "quantity": 1,
              "item_id": 12016271,
              "item_name": "LASSA TRANSWAY 235/65 R16C 115/113R",
              "item": {
                  "id": 12016271,
                  "name": "LASSA TRANSWAY 235/65 R16C 115/113R",
                  "name_ua": null,
                  "article": "",
                  "price_offer_id": "18629",
                  "price": "143.00",
                  "catalog_category": {},
                  "catalog_id": 4326593,
                  "group_id": null,
                  "photo_preview": "https://rozetka.com.ua/goods/1755862/tazalok_70285040_images_1755862662.jpg",
                  "photo": [
                      "https://rozetka.com.ua/goods/1755862/tazalok_70285040_images_1755862662.jpg"
                  ],
                  "moderation_status": 0,
                  "sla_id": 11558,
                  "url": "https://rozetka.com.ua/9144622/p9144622",
                  "sold": 1,
                  "uploader_offer_id": null,
                  "uploader_status": null
              },
              "kit_id": null,
              "conf_details": null,
              "ttn": null,
              "order_status": null,
              "status": 1,
              "is_additional_item": false
          }]
        }],
        "_meta":{
            "totalCount":380,
            "pageCount":19,
            "currentPage":1,
            "perPage":20
        }
    }
}
```

---

### 4 Пошук за відгуками про магазин

**get** `/market-reviews/search`

<p>Пошук за відгуками про магазин. Вибірка всіх відгуків про магазин.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { marketReviews: MarketReviews[], _meta:MetaResponse }}</p>
- **MarketReviews** `Object` **_(обов'язково)_** - <p>MarketReviewsModel</p>
- **marketReviews.id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviews.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviews.user** `String` **_(обов'язково)_** - <p>ПІБ користувача, який залишив відгук</p>
- **marketReviews.order** `Object` **_(обов'язково)_** - <p>OrderModel. <br>Детальна інформація про замовлення</p>
- **marketReviews.comment** `String` **_(обов'язково)_** - <p>коментар до замовлення <br><i>Може бути null</i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення коментаря</p>
- **marketReviews.vote_convenience** `String` **_(обов'язково)_** - <p>Актуальність ціни і наявності <br><i>Може бути null</i></p>
- **marketReviews.vote_manager** `String` **_(обов'язково)_** - <p>Якість обслуговування <br><i>Може бути null</i></p>
- **marketReviews.vote_delivery** `String` **_(обов'язково)_** - <p>Дотримання термінів доставки <br><i>Може бути null</i></p>
- **marketReviews.vote_payment** `String` **_(обов'язково)_** - <p>Оцінка процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.review_convenience** `String` **_(обов'язково)_** - <p>Коментар зручності вибору товару <br><i>Може бути null</i></p>
- **marketReviews.review_manager** `String` **_(обов'язково)_** - <p>Коментар консультації менеджера <br><i>Може бути null</i></p>
- **marketReviews.review_delivery** `String` **_(обов'язково)_** - <p>Коментар доставки товару <br><i>Може бути null</i></p>
- **marketReviews.review_payment** `String` **_(обов'язково)_** - <p>Коментар процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.vote** `String` **_(обов'язково)_** - <p>Загальна оцінка</p>
- **marketReviews.status** `String` **_(обов'язково)_** - <p>Статус коментаря</p>
- **marketReviews.read** `Boolean` **_(обов'язково)_** - <p>Коментар прочитаний</p>
- **marketReviews.read_ts** `Datetime` **_(обов'язково)_** - <p>Дата прочитання коментаря</p>
- **marketReviews.problem_solved** `Boolean` **_(обов'язково)_** - <p>Ознака, що проблема озвучена в коментарі вирішена</p>
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
        "marketReviews":[{
            "id":6098971,
            "order_id":100326002,
            "user":"#### Елена",
            "order": {
                "id":100326002,
                "created":"2017-08-03 16:01:36",
                "changed": "2018-05-08 06:00:05",
                "amount":"143.00",
                "amount_with_discount":"143.00",
                "cost":"143.00",
                "cost_with_discount":"143.00",
                "status":6,
                "status_group": 2,
                "items_photos": [
                        {
                            "id": 12016271,
                            "url": "https://rozetka.com.ua/goods/1755862/tazalok_70285040_images_1755862662.jpg"
                        }
                    ],
                "seller_comment":[],
                "seller_comment_created":"",
                "current_seller_comment":"",
                "comment":"",
                "user_phone":"380972156373",
                "from_warehouse":0,
                "ttn":"20400057167652",
                "total_quantity":1,
                "can_copy": false,
                    "created_type": 4
            },
            "comment":null,
            "created_at":"2017-08-07 10:34:59",
            "vote_convenience":"good",
            "vote_manager":"good",
            "vote_delivery":"excellent",
            "vote_payment":"excellent",
            "review_convenience":null,
            "review_manager":null,
            "review_delivery":null,
            "review_payment":null,
            "vote":"middle",
            "status":"active",
            "read":true,
            "read_ts":"2017-08-09 14:09:10.401746",
            "problem_solved": false
        }],
        "_meta":{
            "totalCount":380,
            "pageCount":19,
            "currentPage":1,
            "perPage":20
        }
}}
```

---

### 4 Пошук за відгуками про магазин

**get** `/market-reviews/search`

<p>Пошук за відгуками про магазин. Вибірка всіх відгуків про магазин.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>

**Request Url Parameters:**

- **sort** `Column` _(опціонально)_ - <p>Параметр сортування (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { marketReviews: MarketReviews[], _meta:MetaResponse }}</p>
- **MarketReviews** `Object` **_(обов'язково)_** - <p>MarketReviewsModel</p>
- **marketReviews.id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviews.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviews.user** `String` **_(обов'язково)_** - <p>ПІБ користувача, який залишив відгук</p>
- **marketReviews.order** `Object` **_(обов'язково)_** - <p>OrderModel. <br>Детальна інформація про замовлення</p>
- **marketReviews.comment** `String` **_(обов'язково)_** - <p>коментар до замовлення <br><i>Може бути null</i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення коментаря</p>
- **marketReviews.vote_convenience** `String` **_(обов'язково)_** - <p>Актуальність ціни і наявності <br><i>Може бути null</i></p>
- **marketReviews.vote_manager** `String` **_(обов'язково)_** - <p>Якість обслуговування <br><i>Може бути null</i></p>
- **marketReviews.vote_delivery** `String` **_(обов'язково)_** - <p>Дотримання термінів доставки <br><i>Може бути null</i></p>
- **marketReviews.vote_payment** `String` **_(обов'язково)_** - <p>Оцінка процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.review_convenience** `String` **_(обов'язково)_** - <p>Коментар зручності вибору товару <br><i>Може бути null</i></p>
- **marketReviews.review_manager** `String` **_(обов'язково)_** - <p>Коментар консультації менеджера <br><i>Може бути null</i></p>
- **marketReviews.review_delivery** `String` **_(обов'язково)_** - <p>Коментар доставки товару <br><i>Може бути null</i></p>
- **marketReviews.review_payment** `String` **_(обов'язково)_** - <p>Коментар процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.vote** `String` **_(обов'язково)_** - <p>Загальна оцінка</p>
- **marketReviews.status** `String` **_(обов'язково)_** - <p>Статус коментаря</p>
- **marketReviews.read** `Boolean` **_(обов'язково)_** - <p>Коментар прочитаний</p>
- **marketReviews.read_ts** `Datetime` **_(обов'язково)_** - <p>Дата прочитання коментаря</p>
- **marketReviews.problem_solved** `Boolean` **_(обов'язково)_** - <p>Ознака, що проблема озвучена в коментарі вирішена</p>
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
        "marketReviews":[{
            "id":6098971,
            "order_id":100326002,
            "user":"#### Елена",
            "order": {
                "id":100326002,
                "created":"2017-08-03 16:01:36",
                "amount":"143.00",
                "amount_with_discount":"143.00",
                "cost":"143.00",
                "cost_with_discount":"143.00",
                "status":6,
                "items_photos":[],
                "seller_comment":[],
                "seller_comment_created":"",
                "current_seller_comment":"",
                "comment":"",
                "user_phone":"380972156373",
                "from_warehouse":0,
                "ttn":"20400057167652",
                "total_quantity":1
            },
            "comment":null,
            "created_at":"2017-08-07 10:34:59",
            "vote_convenience":"good",
            "vote_manager":"good",
            "vote_delivery":"excellent",
            "vote_payment":"excellent",
            "review_convenience":null,
            "review_manager":null,
            "review_delivery":null,
            "review_payment":null,
            "vote":"middle",
            "status":"active",
            "read":true,
            "read_ts":"2017-08-09 14:09:10.401746"
        }],
        "_meta":{
            "totalCount":380,
            "pageCount":19,
            "currentPage":1,
            "perPage":20
        }
}}
```

---

### 8 Фільтри для пошуку відгуків про магазин

**get** `/market-reviews/search-data`

<p>Фільтри для пошуку відгуків про магазин</p>

**Версія:** 0.0.2

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { status_review: status_review[], vote: vote[], read: read[], important: important[], order_status: order_status[], review_with_comments: number, review_with_replies: number, } }</p>
- **status_review** `String` **_(обов'язково)_** - <p>Статус відгуку</p>
- **vote** `String` **_(обов'язково)_** - <p>Оцінка відгуку</p>
- **read** `Boolean` **_(обов'язково)_** - <p>Ознака, чи був відгук прочитаний</p>
- **important** `Boolean` **_(обов'язково)_** - <p>Ознака, чи відмічен відгук як важливий</p>
- **order_status** `Integer` **_(обов'язково)_** - <p>Статус замовлення</p>
- **review_with_comments** `Integer` **_(обов'язково)_** - <p>Кількість відгуків з коментарями</p>
- **review_with_replies** `Integer` **_(обов'язково)_** - <p>Кількість відгуків з відповіддю на коментар</p>

#### Приклад відповіді

```json
 "success": true,
 "content": {
     "status_review": [
         "active",
         "locked"
     ],
     "vote": [
         "dislike",
         "like",
         "middle"
     ],
     "read": [
         false,
         true
     ],
     "important": [
         false,
         true
     ],
     "order_status": [
         6,
         13,
         19,
         31,
         40,
         42,
         44,
         45,
         46
     ],
     "review_with_comments": 72,
     "review_with_replies": 263
  }
}
```

---

### 5 Створення відповіді на відгук

**post** `/market-review-replies/reply`

<p>Створення відповіді на відгук</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **comment** `String` **_(обов'язково)_** - <p>Текст відповіді на відгук</p>
- **market_review_id** `Integer` **_(обов'язково)_** - <p>Id відгука про магазин</p>
- **order_id** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **MarketReviewReply** `Object` **_(обов'язково)_** - <p>MarketReviewReplyModel</p>
- **marketReviewReply.id** `Integer` **_(обов'язково)_** - <p>ID відповіді на відгук</p>
- **marketReviewReply.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviewReply.market_review_id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviewReply.type** `Integer` **_(обов'язково)_** - <p>Тип відповіді на відгук<br> <i> null - Відповідь на відгук</i></p>
- **marketReviewReply.comment** `String` **_(обов'язково)_** - <p>Текст відповіді на відгук</p>
- **marketReviewReply.status** `String` **_(обов'язково)_** - <p>Статус відповіді на відгук<br> <i>1. Новий;<br> 2. На модерації;<br> 3. Заблокований;<br> 4. Опублікований;<br> 5. Заблокований антиматом;</i></p>
- **marketReviewReply.user_type** `Integer` **_(обов'язково)_** - <p>Ознака хто надіслав відгук<br> <i> 1 - продавець<br> 2 - покупець </i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення відповіді</p>
- **marketReviews.upated_at** `String` **_(обов'язково)_** - <p>Дата оновлення відповіді</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 3,
        "order_id": 3211,
        "type": null,
        "market_review_id": 1234,
        "comment": "Дякуємо за відгук!",
        "reason": null,
        "status": 1
    }
}
```

---

### 6 Отримати відповіді на відгук

**get** `/market-review-replies/search`

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id відгука про магазин</p>
- **status** `String` **_(обов'язково)_** - <p>Статус відповіді на відгук<br> <i>1. Новий;<br> 2. На модерації;<br> 3. Заблокований;<br> 4. Опублікований;<br> 5. Заблокований антиматом;</i></p>
- **order_id** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>
- **created_at** `String` **_(обов'язково)_** - <p>Дата створення відповіді</p>
- **market_review_id** `Integer` **_(обов'язково)_** - <p>Id відгука про магазин</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **MarketReviewReply** `Object` **_(обов'язково)_** - <p>MarketReviewReplyModel</p>
- **marketReviewReply.id** `Integer` **_(обов'язково)_** - <p>ID відповіді на відгук</p>
- **marketReviewReply.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviewReply.market_review_id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviewReply.type** `Integer` **_(обов'язково)_** - <p>Тип відповіді на відгук<br> <i> null - Відповідь на відгук</i></p>
- **marketReviewReply.comment** `String` **_(обов'язково)_** - <p>Текст відповіді на відгук</p>
- **marketReviewReply.status** `String` **_(обов'язково)_** - <p>Статус відповіді на відгук<br> <i>1. Новий;<br> 2. На модерації;<br> 3. Заблокований;<br> 4. Опублікований;<br> 5. Заблокований антиматом;</i></p>
- **marketReviewReply.user_type** `Integer` **_(обов'язково)_** - <p>Ознака хто надіслав відгук<br> <i> 1 - продавець<br> 2 - покупець </i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення відповіді</p>
- **marketReviews.upated_at** `String` **_(обов'язково)_** - <p>Дата оновлення відповіді</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "marketReviewReplies": [
            {
                "id": 7,
                "order_id": 12345,
                "market_review_id": 12345,
                "type": null,
                "comment": "Дякуємо за відгук!",
                "reason": null,
                "status": 1,
                "updated_at": "2020-11-17 21:08:32",
                "created_at": "2020-11-17 23:08:34"
            }, ...
        ],
        "_meta": {
            "totalCount": 7,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 7 Оновлення відповіді на відгук

**post** `/market-review-replies/update-reply`

<p>Оновлення відповіді на відгук</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **comment** `String` **_(обов'язково)_** - <p>Текст відповіді на відгук</p>
- **market_review_id** `Integer` **_(обов'язково)_** - <p>Id відгука про магазин</p>
- **order_id** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **MarketReviewReply** `Object` **_(обов'язково)_** - <p>MarketReviewReplyModel</p>
- **marketReviewReply.id** `Integer` **_(обов'язково)_** - <p>ID відповіді на відгук</p>
- **marketReviewReply.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviewReply.market_review_id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviewReply.type** `Integer` **_(обов'язково)_** - <p>Тип відповіді на відгук<br> <i> null - Відповідь на відгук</i></p>
- **marketReviewReply.comment** `String` **_(обов'язково)_** - <p>Текст відповіді на відгук</p>
- **marketReviewReply.status** `String` **_(обов'язково)_** - <p>Статус відповіді на відгук<br> <i>1. Новий;<br> 2. На модерації;<br> 3. Заблокований;<br> 4. Опублікований;<br> 5. Заблокований антиматом;</i></p>
- **marketReviewReply.user_type** `Integer` **_(обов'язково)_** - <p>Ознака хто надіслав відгук<br> <i> 1 - продавець<br> 2 - покупець </i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення відповіді</p>
- **marketReviews.upated_at** `String` **_(обов'язково)_** - <p>Дата оновлення відповіді</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 3,
        "order_id": 3211,
        "type": null,
        "market_review_id": 1234,
        "comment": "Дякуємо за відгук!",
        "reason": null,
        "status": 1
    }
}
```

---

### 2.1 Відмітити як прочитане

**post** `/market-reviews/{id}/mark-as-read`

<p>Відмітити відгук як прочитаний</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгука</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: MarketReviews }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":null
}
```

---

### 2 Відмітити як прочитане

**post** `/market-reviews/{id}/mark-as-read`

<p>Відмітити відгук як прочитаний</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: MarketReviews }</p>
- **MarketReviews** `Object` **_(обов'язково)_** - <p>MarketReviewsModel</p>
- **marketReviews.id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviews.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviews.user** `String` **_(обов'язково)_** - <p>ПІБ користувача, який залишив відгук</p>
- **marketReviews.order** `Object` **_(обов'язково)_** - <p>OrderModel. <br>Детальна інформація про замовлення</p>
- **marketReviews.comment** `String` **_(обов'язково)_** - <p>коментар до замовлення <br><i>Може бути null</i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення коментаря</p>
- **marketReviews.vote_convenience** `String` **_(обов'язково)_** - <p>Актуальність ціни і наявності <br><i>Може бути null</i></p>
- **marketReviews.vote_manager** `String` **_(обов'язково)_** - <p>Якість обслуговування <br><i>Може бути null</i></p>
- **marketReviews.vote_delivery** `String` **_(обов'язково)_** - <p>Дотримання термінів доставки <br><i>Може бути null</i></p>
- **marketReviews.vote_payment** `String` **_(обов'язково)_** - <p>Оцінка процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.review_convenience** `String` **_(обов'язково)_** - <p>Коментар зручності вибору товару <br><i>Може бути null</i></p>
- **marketReviews.review_manager** `String` **_(обов'язково)_** - <p>Коментар консультації менеджера <br><i>Може бути null</i></p>
- **marketReviews.review_delivery** `String` **_(обов'язково)_** - <p>Коментар доставки товару <br><i>Може бути null</i></p>
- **marketReviews.review_payment** `String` **_(обов'язково)_** - <p>Коментар процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.vote** `String` **_(обов'язково)_** - <p>Загальна оцінка</p>
- **marketReviews.status** `String` **_(обов'язково)_** - <p>Статус коментаря</p>
- **marketReviews.read** `Boolean` **_(обов'язково)_** - <p>Коментар прочитаний</p>
- **marketReviews.read_ts** `Datetime` **_(обов'язково)_** - <p>Дата прочитання коментаря</p>
- **marketReviews.problem_solved** `Boolean` **_(обов'язково)_** - <p>Ознака, що проблема озвучена в коментарі вирішена</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":null
}
```

---

### 2 Відмітити як прочитане

**post** `/market-reviews/{id}/mark-as-read`

<p>Відмітити відгук як прочитаний</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгука</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: null }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":null
}
```

---

### 2.3 Відмітити відгуки як важливі

**put** `/market-reviews/update-important`

<p>Відмітити відгуки як важливі</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Body Parameters:**

- **reviewsIds** `Integer[]` **_(обов'язково)_** - <p>массив ID відгуків</p>
- **value** `Boolean` **_(обов'язково)_** - <p>Ознака, чи відзначений відгук як важливий</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:number }</p>
- **content** `Integer` **_(обов'язково)_** - <p>кількість оновлених відгуків</p>

#### Приклад відповіді

```json
    "success": true,
    "content": 6
}
```

---

### 2.2 Відмітити відгуки як прочитані

**put** `/market-reviews/update-read`

<p>Відмітити відгуки як прочитані</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Body Parameters:**

- **reviewsIds** `Integer[]` **_(обов'язково)_** - <p>Массив ID відгуків</p>
- **value** `Boolean` **_(обов'язково)_** - <p>Ознака, чи був відгук прочитаний</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:number }</p>
- **content** `Integer` **_(обов'язково)_** - <p>кількість оновлених відгуків</p>

#### Приклад відповіді

```json
    "success": true,
    "content": 6
}
```

---

