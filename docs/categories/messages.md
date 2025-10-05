# Messages

### 6 Завантажити файл

**get** `/messages/download-file/{id}`

<p>Зберегти прикріплений до повідомлення файл</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID файлу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл, прикріплений до повідомлення</p>

---

### 3 Відкрити чат

**get** `/messages/{id}`

<p>Відкрити чат продавця з покупцем<br> <i>При відкритті чат і всі внутрішні повідомлення від покупця відмічаються як прочитані</i><br> <b><h4 style="color:green;">Системні повідомлення для продавця і покупця недоступні по API</h4><b></p>

**Версія:** 0.0.3

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату (унікальний ID)</p>
- **expand** `String` **_(обов'язково)_** - <p>Extra fields<br> <code>messages, item, market, market_title, order, order_data, user_fio, order_status, unread_messages_count,has_auto_message</code><br> Починаючи з поточної версії для швидшого отримання відповіді рекомендуємо використовувати наступні параметри:<br> <code>order_data</code> замість <code>order, order_status</code><br> <code>market_title</code> замість <code>market</code><br></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: ChatModel }</p>
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
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)<br> <b><a href="#api-Models-OrderStatusDetails">OrderStatusDetails</a></b></p>
- **chat.order_data** `Object` **_(обов'язково)_** - <p>Дані про замовлення, <b><a href="#api-Models-ChatOrderDetails">Order Data</a></b></p>
- **chat.market_title** `String` **_(обов'язково)_** - <p>Назва продавця</p>
- **chat.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
         "success":true,
         "content":{
             "id":205506,
             "created":"2017-08-14 22:15:25",
             "updated":"2017-08-14 22:15:25",
             "subject":"Заказ № 101615935",
             "user":{
                 "id":36386171,
                 "has_email": true,
                 "contact_fio":" Дмитрий"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101615935,
             "type":0,
             "item_id":null,
             "user_id":36386171
         }
    }
```

```json
 HTTP/1.1 200 OK
{
         "success":true,
         "content":{
             "id":205506,
             "created":"2017-08-14 22:15:25",
             "updated":"2017-08-14 22:15:25",
             "subject":"Заказ № 101615935",
             "user":{
                 "id":36386171,
                 "has_email": true,
                 "contact_fio":" Дмитрий"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101615935,
             "type":0,
             "item_id":null,
             "user_id":36386171,
             "order": {
                 "id": 184558726,
                 "created": "2018-10-26 12:49:05",
                 "changed": "2018-10-26 13:24:08",
                 "amount": "321.00",
                 "amount_with_discount": "321.00",
                 "cost": "321.00",
                 "cost_with_discount": "321.00",
                 "status": 6,
                 "status_group": 2,
                 "items_photos": [
                     {
                         "id": 6934253,
                         "url": "https://rozetka.com.ua/goods/1438393/6934253_images_1438393493.jpg",
                         "item_name": "Test Name",
                         "item_url": "https://rozetka.com.ua/6934253/p6934253"
                     }
                 ],
                 "seller_comment": [
                     {
                         "comment": "13-23 номер не обслуж",
                         "created": "2018-10-26 10:24:07"
                     }
                 ],
                 "seller_comment_created": "2018-10-26 10:24:07",
                 "current_seller_comment": "13-23 номер не обслуж",
                 "comment": "",
                 "user_phone": "380689572356",
                 "from_warehouse": 0,
                 "ttn": "",
                 "total_quantity": 1,
                 "can_copy": false,
                 "created_type": 4
             },
             "messages":
             [{
                 "chat_id":205506,
                 "body":"Здравствуйте! Есть вопрос по заказу",
                 "created":"2017-08-14 22:15:25",
                 "receiver_id":42,
                 "sender":3,
                 "seller":null,
                 "seller_id":null,
                 "files":[
                     {
                         "id": 3,
                         "name": "d2afa457d366062cc27cf12b9ac833c6.png",
                         "size": 104839,
                         "chat_message_id": 2083388,
                         "chat_id": 205506,
                         "typeName": "IMG"
                     },
                 ],
                 "status": 0
             }],
             "item":null,
             "market":{
                 "test_market":0,
                 "logo":"http://rozetka.com.ua/sellers/9/9724.jpg",
                 "title":"Читайка",
                 "business_model": "b2c",
                 "market_requisite":{
                     "type": 2,
                     "name": "Штуль Любов",
                     "inn": "18722….",
                     "okpo": "",
                     "mfo": "300….",
                     "score": "26001060…... ",
                     "bank_name": "ПАТ КБ ",
                     "juridical_address": "04114, Україна, ...",
                     "physical_address": null,
                     "seller_can_edit": false
                 },
                 "updated":"2017-10-25 11:46:36",
                 "use_api":false,
                 "sms_template_id":1,
                 "check_stock":false,
                 "edit_timetable": true,
                 "combination_owox_parent_id": null,
                 "email": "nazdrin.d@sumatra.ua"
             },
             "unread_messages_count":1,
             "order_data":{
                 "id": 184558726,
                 "created": "2018-10-26 12:49:05",
                 "amount": "321.00",
                 "amount_with_discount": "321.00",
                 "total_quantity": 1,
                 "status": 6,
                 "status_data":{
                     "id": 6,
                     "name": "Посылка получена",
                     "name_uk": "Посилку отримано",
                     "name_en": "Delivered",
                     "status_group": 2,
                     "status": 1,
                     "color": "#00A046"
                 }
             },
             "market_title": "BL"
         }
    }
```

---

### 7.3 Відкрити чат

**get** `/messages/{id}`

<p>Відкрити чат продавця з покупцем<br> <i>При відкритті чат і всі внутрішні повідомлення від покупця відмічаються як прочитані</i><br> <b><h4 style="color:green;">Починаючи з поточної версії, системні повідомлення для продавця і покупця недоступні по API</h4><b></p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату (унікальний ID)</p>
- **expand** `String` **_(обов'язково)_** - <p>Extra fields<br> <code>messages, item, market, order, user_fio, order_status, unread_messages_count</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: ChatModel }</p>
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
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
         "success":true,
         "content":{
             "id":205506,
             "created":"2017-08-14 22:15:25",
             "updated":"2017-08-14 22:15:25",
             "subject":"Заказ № 101615935",
             "user":{
                 "id":36386171,
                 "has_email": true,
                 "contact_fio":" Дмитрий"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101615935,
             "type":0,
             "item_id":null,
             "user_id":36386171
         }
    }
```

```json
 HTTP/1.1 200 OK
{
         "success":true,
         "content":{
             "id":205506,
             "created":"2017-08-14 22:15:25",
             "updated":"2017-08-14 22:15:25",
             "subject":"Заказ № 101615935",
             "user":{
                 "id":36386171,
                 "has_email": true,
                 "contact_fio":" Дмитрий"
             },
             "read_market":null,
             "trash_market":0,
             "star_market":0,
             "order_id":101615935,
             "type":0,
             "item_id":null,
             "user_id":36386171,
             "order": {
                 "id": 184558726,
                 "created": "2018-10-26 12:49:05",
                 "changed": "2018-10-26 13:24:08",
                 "amount": "321.00",
                 "amount_with_discount": "321.00",
                 "cost": "321.00",
                 "cost_with_discount": "321.00",
                 "status": 26,
                 "status_group": 1,
                 "items_photos": [
                     {
                         "id": 6934253,
                         "url": "https://rozetka.com.ua/goods/1438393/6934253_images_1438393493.jpg",
                         "item_name": "Test Name",
                         "item_url": "https://rozetka.com.ua/6934253/p6934253"
                     }
                 ],
                 "seller_comment": [
                     {
                         "comment": "13-23 номер не обслуж",
                         "created": "2018-10-26 10:24:07"
                     }
                 ],
                 "seller_comment_created": "2018-10-26 10:24:07",
                 "current_seller_comment": "13-23 номер не обслуж",
                 "comment": "",
                 "user_phone": "380689572356",
                 "from_warehouse": 0,
                 "ttn": "",
                 "total_quantity": 1,
                 "can_copy": false,
                 "created_type": 4
             },
             "messages":
             [{
                 "chat_id":205506,
                 "body":"Здравствуйте! Есть вопрос по заказу",
                 "created":"2017-08-14 22:15:25",
                 "receiver_id":42,
                 "sender":3,
                 "seller":null,
                 "seller_id":null,
                 "files":[
                     {
                         "id": 3,
                         "name": "d2afa457d366062cc27cf12b9ac833c6.png",
                         "size": 104839,
                         "chat_message_id": 2083388,
                         "chat_id": 205506,
                         "typeName": "IMG"
                     },
                 ],
                 "status": 0
             }],
             "item":null,
             "market":{
                 "test_market":0,
                 "logo":"http://rozetka.com.ua/sellers/9/9724.jpg",
                 "title":"Читайка",
                 "business_model": "b2c",
                 "market_requisite":{
                     "type": 2,
                     "name": "Штуль Любов",
                     "inn": "18722….",
                     "okpo": "",
                     "mfo": "300….",
                     "score": "26001060…... ",
                     "bank_name": "ПАТ КБ ",
                     "juridical_address": "04114, Україна, ...",
                     "physical_address": null,
                     "seller_can_edit": false
                 },
                 "updated":"2017-10-25 11:46:36",
                 "use_api":false,
                 "sms_template_id":1,
                 "check_stock":false,
                 "edit_timetable": true,
                 "combination_owox_parent_id": null,
                 "email": "nazdrin.d@sumatra.ua"
             },
             "unread_messages_count":1
         }
    }
```

---

### 12.3 Відкрити чат

**get** `/messages/{id}`

<p>Відкрити чат продавця з покупцем <br><i>При відкритті чат відзначається як прочитаний</i></p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату (унікальний ID)</p>
- **expand** `String` **_(обов'язково)_** - <p>Extra fields (messages, item, market)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
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
- **user.has_email** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є у покупця e-mail</p>
- **user.contact_fio** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **user.email** `String` **_(обов'язково)_** - <p>E-mail покупця <code>[deprecated]</code><br> Технічне поле, приходить пустим рядком в разі якщо has_email == false, і зі значенням &quot;true&quot; якщо has_email == true</p>
- **ChatMessage** `Object` **_(обов'язково)_** - <p>ChatMessage</p>
- **chat_messages.id** `Integer` **_(обов'язково)_** - <p>ID повідомлення</p>
- **chat_messages.chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat_messages.body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_messages.created** `String` **_(обов'язково)_** - <p>Дата і час створення повідомлення</p>
- **chat_messages.read** `String` **_(обов'язково)_** - <p>Дата і час прочитання повідомлення отримувачем</p>
- **chat_messages.sender** `Number` **_(обов'язково)_** - <p>Відправник<br> <a href="#api-Messages">Детальніше...</a></p>
- **chat_messages.seller** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerDetails">SellerModel</a></b>, менеджер магазину</p>
- **chat_messages.seller_id** `String` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **chat_messages.files** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatAttachments">ChatAttachmentsModel</a></b>[]. Всі файли в повідомленні</p>
- **chat_messages.status** `Integer` **_(обов'язково)_** - <p>Статус модерації повідомлення <ul></p> <li>0 - Новий</li> <li>1 - На модерації</li> <li>2 - Заблокований модератором</li> <li>3 - Пройшов модерацію</li> <li>4 - Автоблокування</li> <li>5 - Автоматично пройшов модерацію</li> </ul>
- **chatAttachments** `Object` **_(обов'язково)_** - <p>ChatAttachments</p>
- **chatAttachments.id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chatAttachments.name** `String` **_(обов'язково)_** - <p>Назва файлу</p>
- **chatAttachments.size** `Integer` **_(обов'язково)_** - <p>Розмір файлу в байтах</p>
- **chatAttachments.chat_message_id** `Integer` **_(обов'язково)_** - <p>ID повідомлення, до якого прикріплений файл</p>
- **chatAttachments.chat_id** `Integer` **_(обов'язково)_** - <p>ID чату</p>
- **chatAttachments.typeName** `String` **_(обов'язково)_** - <p>Назва типу файлу</p>
- **Seller** `Object` **_(обов'язково)_** - <p>Model</p>
- **seller.id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.status** `Number` **_(обов'язково)_** - <p>Cтатус менеджера (0 - активний, 1 - видалений)</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.email_verified** `String` **_(обов'язково)_** - <p>Ознака, чи верифікований email</p>
- **seller.email_verification_date** `String` **_(обов'язково)_** - <p>Дата верифікації email</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова</p>
- **seller.seller_roles** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerRolesDetails">SellerRoles</a></b>[], список ролей менеджера</p>
- **seller.seller_phones** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerPhonesDetails">SellerPhone</a></b>[], список телефонів менеджера</p>
- **seller.notify_phone** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти смс-повідомлення менеджеру</p>
- **seller.notify_email** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти email-повідомлення менеджеру</p>
- **seller.two_step_auth** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно включати двофакторну авторизацію менеджеру</p>
- **seller.agent_id** `Integer|null` **_(обов'язково)_** - <p>Agent ID</p>
- **SellerRoles** `Object` **_(обов'язково)_** - <p>SellerRolesModel</p>
- **seller_rbac_auth_item.name** `String` **_(обов'язково)_** - <p>Назва ролі</p>
- **seller_rbac_auth_item.type** `Integer` **_(обов'язково)_** - <p>Тип (1 - роль, 2 - permission)</p>
- **seller_rbac_auth_item.description** `Text` **_(обов'язково)_** - <p>Опис ролі</p>
- **SellerPhone** `Object` **_(обов'язково)_** - <p>SellerPhoneModel</p>
- **seller_phone.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **seller_phone.phone_number** `String` **_(обов'язково)_** - <p>Телефон</p>
- **seller_phone.confirmed** `Boolean` **_(обов'язково)_** - <p>Чи є телефон підтвердженим</p>
- **seller_phone.confirmation_date** `Boolean` **_(обов'язково)_** - <p>Дата верифікації телефону</p>
- **Item** `Object` **_(обов'язково)_** - <p>Model</p>
- **Item.id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка</p>
- **Item.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **Item.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **Item.article** `String` **_(обов'язково)_** - <p>Артикул товару</p>
- **Item.price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у продавця</p>
- **Item.price** `Number` **_(обов'язково)_** - <p>Ціна товару</p>
- **Item.stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **Item.weight** `Number` **_(обов'язково)_** - <p>Вага товару</p>
- **Item.commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія по товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br></p>
- **Item.commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії по товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br></p>
- **Item.catalog_category** `Object` **_(обов'язково)_** - <p><a href="#api-Models-CatalogCategoryDetails">CatalogCategory</a>, Категорія товару</p>
- **Item.catalog_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **Item.group_id** `Integer` **_(обов'язково)_** - <p>ID групи</p>
- **Item.photo_preview** `String` **_(обов'язково)_** - <p>Фото-прев'ю, у вигляді посилання</p>
- **Item.photo** `String[]` **_(обов'язково)_** - <p><code>Deprecated</code> Перелік посилань на фото товару<br> Повертає тільки посилання на фото-прев'ю, для отримання якого краще використовувати поле <b><i>photo_preview</i></b></p>
- **Item.moderation_status** `Number` **_(обов'язково)_** - <p><code>Deprecated</code>: Статус товару на модерації <br> <a href="#api-Items-GetItemStatuses">ModerationStatuses</a></p>
- **Item.url** `String` **_(обов'язково)_** - <p>Item url в системі Розетка</p>
- **Item.sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **Item.uploader_offer_id** `String` **_(обов'язково)_** - <p>Id Оффера в Uploader</p>
- **Item.uploader_status** `Integer|null` **_(обов'язково)_** - <p>Статус товару в Uploader</p>
- **Item.sla_id** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>: Набір доставок товару<br> <sup>Замість цього поля бажано використовувати sla_rz_id</sup></p>
- **Item.sla_rz_id** `Integer` **_(обов'язково)_** - <p>Набір доставок товару</p>
- **Item.producer_name** `String` **_(обов'язково)_** - <p>Назва виробника</p>
- **Item.price_old** `Number` **_(обов'язково)_** - <p>Стара ціна</p>
- **Market** `Object` **_(обов'язково)_** - <p>MarketModel</p>
- **market.test_market** `Number` **_(обов'язково)_** - <p>Чи є продавець тестовим</p>
- **market.logo** `String` **_(обов'язково)_** - <p>Логотип продавця</p>
- **market.title** `String` **_(обов'язково)_** - <p>Назва продавця</p>
- **market.business_model** `String` **_(обов'язково)_** - <p>Бізнес модель</p>
- **market.marketRequisite** `Object` **_(обов'язково)_** - <p>Реквізити продавця <b><a href="#api-Models-MarketRequisiteDetails" class="nav-list-item">MarketRequisite</a></b>.</p>
- **market.updated** `String` **_(обов'язково)_** - <p>Дата оновлення даних про магазин</p>
- **market.use_api** `Boolean` **_(обов'язково)_** - <p>Чи використовує продавець API</p>
- **market.sms_template_id** `Integer` **_(обов'язково)_** - <p>ID шаблону SMS</p>
- **market.check_stock** `Boolean` **_(обов'язково)_** - <p>Враховувати залишки</p>
- **market.edit_timetable** `Boolean` **_(обов'язково)_** - <p>Дозволити продавцеві редагувати графік в ЛК</p>
- **market.combination_owox_parent_id** `Integer` **_(обов'язково)_** - <p>ID папки комбінацій в системе Розетка</p>
- **market.email** `Text` **_(обов'язково)_** - <p>Email магазину</p>
- **market.market_url** `String` **_(обов'язково)_** - <p>Посилання на магазин на Розетці</p>
- **market.show_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, чи працює магазин по системі Fulfillment</p>
- **market.min_order_amount** `Integer` **_(обов'язково)_** - <p>Мінімальна сума замовлення</p>
- **market.min_order_delivery** `Object[]` **_(обов'язково)_** - <p>Служби доставки для мін. суми замовлення</p>
- **market.min_order_delivery.mdm_id** `String` **_(обов'язково)_** - <p>ID (hash або текстовий ID)</p>
- **market.min_order_delivery.title** `String` **_(обов'язково)_** - <p>Назва служби доставки обраною мовою</p>
- **market.seller_can_edit_min_order_amount** `Boolean` **_(обов'язково)_** - <p>Ознака, чи доступне редагування мінімальної суми замовлення</p>
- **market.feedback_auto_req** `Boolean` **_(обов'язково)_** - <p>Ознака, чи и відправляти автоматично запит на відгук про товар</p>
- **market.is_auto_refund** `Boolean` **_(обов'язково)_** - <p>Автоматичне повернення коштів при відміні замовлення</p>
- **MarketRequisite** `Object` **_(обов'язково)_** - <p>MarketRequisiteModel</p>
- **market_requisite.type** `Number` **_(обов'язково)_** - <p>Тип юр. особи <br> Повний список типів можна отримати через запит <a href="#api-BusinessTypes-GetMarketBusinessTypes">Business Types</a></p>
- **market_requisite.name** `String` **_(обов'язково)_** - <p>Ім'я юр. особи</p>
- **market_requisite.inn** `String` **_(обов'язково)_** - <p>ІПН</p>
- **market_requisite.okpo** `String` **_(обов'язково)_** - <p>ЄДРПОУ (OKPO)</p>
- **market_requisite.mfo** `String` **_(обов'язково)_** - <p>МФО</p>
- **market_requisite.score** `String` **_(обов'язково)_** - <p>Р/р (Розрахунковий рахунок)</p>
- **market_requisite.bank_name** `String` **_(обов'язково)_** - <p>Назва банку продавця</p>
- **market_requisite.with_tax** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є продавець платником ПДВ</p>
- **market_requisite.juridical_address** `Text` **_(обов'язково)_** - <p>Юридична адреса</p>
- **market_requisite.physical_address** `Text` **_(обов'язково)_** - <p>Фізична адреса</p>
- **market_requisite.seller_can_edit** `boolean` **_(обов'язково)_** - <p>Може бути заповнений продавцем</p>
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
          "success":true,
          "content":{
              "id":205506,
              "created":"2017-08-14 22:15:25",
              "updated":"2017-08-14 22:15:25",
              "subject":"Заказ № 101615935",
              "user":{
                  "id":36386171,
                  "email":"test@gmail.com",
                  "login":"test@gmail.com",
                  "contact_fio":" Дмитрий"
              },
              "read_market":null,
              "trash_market":0,
              "star_market":0,
              "order_id":101615935,
              "type":0,
              "item_id":null,
              "user_id":36386171,
              "messages":
              [{
                  "chat_id":205506,
                  "body":"Поздравляем! Поступил новый заказ № 101615935...",
                  "created":"2017-08-14 22:15:25",
                  "receiver_id":42,
                  "sender":0,
                  "seller":null,
                  "seller_id":null,
                  "files":[
                      {
                          "id": 3,
                          "name": "d2afa457d366062cc27cf12b9ac833c6.png",
                          "size": 104839,
                          "chat_message_id": 2083388,
                          "chat_id": 205506,
                          "typeName": "IMG"
                      },
                  ]
              },{
                  "chat_id":205506,
                  "body":"Уважаемый (-ая), user!<br><br>\r\nПоздравляем! Вы совершили покупку (заказ № 101...)",
                  "created":"2017-08-14 22:15:25",
                  "receiver_id":36386171,
                  "sender":1,
                  "seller":{
                      "id":39,
                      "login":"Chytayka13",
                      "status":0,
                      "skype":"chytayka",
                      "fio":"Штуль Любов",
                      "email":"ll@rozetka.com.ua",
                      "lang":"ru",
                      "seller_roles":[{
                          "name":"default_owner",
                          "type":1,
                          "description":"Владелец",
                          "rule_name":null,
                          "data":null,
                          "created_at":1486413514,
                          "updated_at":null
                      }],
                      "seller_phones":[{
                          "id":394,
                          "phone_number":"+380325855252",
                          "confirmed":false
                      }],
                      "notify_phone":true,
                      "notify_email":true
                  },
                  "seller_id":39,
                  "files":[]
              }],
              "item":null,
              "market":{
                  "test_market":0,
                  "logo":"http://rozetka.com.ua/sellers/9/9724.jpg",
                  "title":"Читайка",
                  "business_model": "b2c",
                  "market_requisite":{
                      "type": 2,
                      "name": "Штуль Любов",
                      "inn": "18722….",
                      "okpo": "",
                      "mfo": "300….",
                      "score": "26001060…... ",
                      "bank_name": "ПАТ КБ ",
                      "juridical_address": "04114, Україна, ...",
                      "physical_address": null,
                      "seller_can_edit": false
                  },
                  "updated":"2017-10-25 11:46:36",
                  "use_api":false,
                  "sms_template_id":1,
                  "check_stock":false,
                  "edit_timetable": true,
                  "combination_owox_parent_id": null,
                  "email": "nazdrin.d@sumatra.ua"
              }
          }
   }
```

---

### 3 Відкрити чат

**get** `/messages/{id}`

<p>Відкрити чат продавця з покупцем <br><i>При відкритті чат відмічається як прочитаний</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату (унікальний ID)</p>
- **expand** `String` _(опціонально)_ - <p>Extra fields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
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
- **ChatMessage** `Object` **_(обов'язково)_** - <p>ChatMessage</p>
- **chat_messages.chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat_messages.body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_messages.created** `String` **_(обов'язково)_** - <p>Дата і час створення повідомлення</p>
- **chat_messages.sender** `Number` **_(обов'язково)_** - <p>Відправник<br> <a href="#api-Messages">Детальніше...</a></p>
- **chat_messages.seller** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerDetails">SellerModel</a></b>, менеджер магазину</p>
- **chat_messages.seller_id** `String` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **chat_messages.files** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatAttachments">ChatAttachmentsModel</a></b>[]. Всі файли в повідомленні</p>
- **chatAttachments** `Object` **_(обов'язково)_** - <p>ChatAttachments</p>
- **chatAttachments.id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chatAttachments.name** `String` **_(обов'язково)_** - <p>Назва файлу</p>
- **chatAttachments.size** `Integer` **_(обов'язково)_** - <p>Розмір файлу в байтах</p>
- **chatAttachments.chat_message_id** `Integer` **_(обов'язково)_** - <p>ID повідомлення, до якого прикріплений файл</p>
- **chatAttachments.chat_id** `Integer` **_(обов'язково)_** - <p>ID чату</p>
- **chatAttachments.typeName** `String` **_(обов'язково)_** - <p>Назва типу файлу</p>
- **Seller** `Object` **_(обов'язково)_** - <p>Model</p>
- **seller.id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.status** `Number` **_(обов'язково)_** - <p>Cтатус менеджера (0 - активний, 1 - видалений)</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.email_verified** `String` **_(обов'язково)_** - <p>Ознака, чи верифікований email</p>
- **seller.email_verification_date** `String` **_(обов'язково)_** - <p>Дата верифікації email</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова</p>
- **seller.seller_roles** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerRolesDetails">SellerRoles</a></b>[], список ролей менеджера</p>
- **seller.seller_phones** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerPhonesDetails">SellerPhone</a></b>[], список телефонів менеджера</p>
- **seller.notify_phone** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти смс-повідомлення менеджеру</p>
- **seller.notify_email** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти email-повідомлення менеджеру</p>
- **seller.two_step_auth** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно включати двофакторну авторизацію менеджеру</p>
- **seller.agent_id** `Integer|null` **_(обов'язково)_** - <p>Agent ID</p>
- **SellerRoles** `Object` **_(обов'язково)_** - <p>SellerRolesModel</p>
- **seller_rbac_auth_item.name** `String` **_(обов'язково)_** - <p>Назва ролі</p>
- **seller_rbac_auth_item.type** `Integer` **_(обов'язково)_** - <p>Тип (1 - роль, 2 - permission)</p>
- **seller_rbac_auth_item.description** `Text` **_(обов'язково)_** - <p>Опис ролі</p>
- **SellerPhone** `Object` **_(обов'язково)_** - <p>SellerPhoneModel</p>
- **seller_phone.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **seller_phone.phone_number** `String` **_(обов'язково)_** - <p>Телефон</p>
- **seller_phone.confirmed** `Boolean` **_(обов'язково)_** - <p>Чи є телефон підтвердженим</p>
- **seller_phone.confirmation_date** `Boolean` **_(обов'язково)_** - <p>Дата верифікації телефону</p>
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
- **Market** `Object` **_(обов'язково)_** - <p>MarketModel</p>
- **market.test_market** `Number` **_(обов'язково)_** - <p>Чи є продавець тестовим</p>
- **market.logo** `String` **_(обов'язково)_** - <p>Логотип продавця</p>
- **market.title** `String` **_(обов'язково)_** - <p>Назва продавця</p>
- **market.business_model** `String` **_(обов'язково)_** - <p>Бізнес модель</p>
- **market.marketRequisite** `Object` **_(обов'язково)_** - <p>Реквізити продавця <b><a href="#api-Models-MarketRequisiteDetails" class="nav-list-item">MarketRequisite</a></b>.</p>
- **market.updated** `String` **_(обов'язково)_** - <p>Дата оновлення даних про магазин</p>
- **market.use_api** `Boolean` **_(обов'язково)_** - <p>Чи використовує продавець API</p>
- **market.sms_template_id** `Integer` **_(обов'язково)_** - <p>ID шаблону SMS</p>
- **market.check_stock** `Boolean` **_(обов'язково)_** - <p>Враховувати залишки</p>
- **market.edit_timetable** `Boolean` **_(обов'язково)_** - <p>Дозволити продавцеві редагувати графік в ЛК</p>
- **market.combination_owox_parent_id** `Integer` **_(обов'язково)_** - <p>ID папки комбінацій в системе Розетка</p>
- **market.email** `Text` **_(обов'язково)_** - <p>Email магазину</p>
- **market.market_url** `String` **_(обов'язково)_** - <p>Посилання на магазин на Розетці</p>
- **market.show_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, чи працює магазин по системі Fulfillment</p>
- **market.min_order_amount** `Integer` **_(обов'язково)_** - <p>Мінімальна сума замовлення</p>
- **market.min_order_delivery** `Object[]` **_(обов'язково)_** - <p>Служби доставки для мін. суми замовлення</p>
- **market.min_order_delivery.mdm_id** `String` **_(обов'язково)_** - <p>ID (hash або текстовий ID)</p>
- **market.min_order_delivery.title** `String` **_(обов'язково)_** - <p>Назва служби доставки обраною мовою</p>
- **market.seller_can_edit_min_order_amount** `Boolean` **_(обов'язково)_** - <p>Ознака, чи доступне редагування мінімальної суми замовлення</p>
- **market.feedback_auto_req** `Boolean` **_(обов'язково)_** - <p>Ознака, чи и відправляти автоматично запит на відгук про товар</p>
- **market.is_auto_refund** `Boolean` **_(обов'язково)_** - <p>Автоматичне повернення коштів при відміні замовлення</p>
- **MarketRequisite** `Object` **_(обов'язково)_** - <p>MarketRequisiteModel</p>
- **market_requisite.type** `Number` **_(обов'язково)_** - <p>Тип юр. особи <br> Повний список типів можна отримати через запит <a href="#api-BusinessTypes-GetMarketBusinessTypes">Business Types</a></p>
- **market_requisite.name** `String` **_(обов'язково)_** - <p>Ім'я юр. особи</p>
- **market_requisite.inn** `String` **_(обов'язково)_** - <p>ІПН</p>
- **market_requisite.okpo** `String` **_(обов'язково)_** - <p>ЄДРПОУ (OKPO)</p>
- **market_requisite.mfo** `String` **_(обов'язково)_** - <p>МФО</p>
- **market_requisite.score** `String` **_(обов'язково)_** - <p>Р/р (Розрахунковий рахунок)</p>
- **market_requisite.bank_name** `String` **_(обов'язково)_** - <p>Назва банку продавця</p>
- **market_requisite.with_tax** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є продавець платником ПДВ</p>
- **market_requisite.juridical_address** `Text` **_(обов'язково)_** - <p>Юридична адреса</p>
- **market_requisite.physical_address** `Text` **_(обов'язково)_** - <p>Фізична адреса</p>
- **market_requisite.seller_can_edit** `boolean` **_(обов'язково)_** - <p>Може бути заповнений продавцем</p>
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
          "success":true,
          "content":{
              "id":205506,
              "created":"2017-08-14 22:15:25",
              "updated":"2017-08-14 22:15:25",
              "subject":"Заказ № 101615935",
              "user":{
                  "id":36386171,
                  "email":"dima.shkurka85@gmail.com",
                  "login":"dima.shkurka85@gmail.com",
                  "contact_fio":" Дмитрий"
              },
              "read_market":null,
              "trash_market":0,
              "star_market":0,
              "order_id":101615935,
              "type":0,
              "item_id":null,
              "user_id":36386171,
              "messages":
              [{
                  "chat_id":205506,
                  "body":"Поздравляем! Поступил новый заказ № 101615935...",
                  "created":"2017-08-14 22:15:25",
                  "receiver_id":42,
                  "sender":0,
                  "seller":null,
                  "seller_id":null
              },{
                  "chat_id":205506,
                  "body":"Уважаемый (-ая), user!<br><br>\r\nПоздравляем! Вы совершили покупку (заказ № 101...)",
                  "created":"2017-08-14 22:15:25",
                  "receiver_id":36386171,
                  "sender":1,
                  "seller":{
                      "id":39,
                      "login":"Chytayka13",
                      "status":0,
                      "skype":"chytayka",
                      "fio":"Штуль Любов",
                      "email":"ll@rozetka.com.ua",
                      "lang":"ru",
                      "seller_roles":[{
                          "name":"default_owner",
                          "type":1,
                          "description":"Владелец",
                          "rule_name":null,
                          "data":null,
                          "created_at":1486413514,
                          "updated_at":null
                      }],
                      "seller_phones":[{
                          "id":394,
                          "seller_id":39,
                          "phone_number":"+380507054385",
                          "confirmed":false
                      }],
                      "notify_phone":true,
                      "notify_email":true
                  },
                  "seller_id":39
              }],
              "item":null,
              "market":{
                  "test_market":0,
                  "logo":"http://rozetka.com.ua/sellers/9/9724.jpg",
                  "title":"Читайка",
                  "business_model":"b2c",
                  "market_requisite":{
                      "type":2,
                      "name":"Штуль Любов",
                      "inn":"18722….",
                      "okpo":"",
                      "mfo":"300….",
                      "score":"26001060…... ",
                      "bank_name":"ПАТ КБ ",
                      "juridical_address":"04114, Україна, ...",
                      "physical_address":null
                  },
                  "updated":"2017-10-25 11:46:36",
                  "use_api":false,
                  "sms_template_id":1,
                  "check_stock":false
              }
          }
   }
```

---

### 6 Пошук чатів

**get** `/messages/search`

<p>Фільтр по чатам<br> <b><h4 style="color:green;">Системні повідомлення для продавця і покупця недоступні по API</h4> <h4 style="color:green;">До списку не виводяться чати, де є тільки системні повідомлення</h4><b></p>

**Версія:** 0.0.3

#### Параметри запиту

**Request Url Parameters:**

- **msgType** `String` **_(обов'язково)_** - <p>Тип чату <code>Required</code><br><i>Якщо не передавати цей параметр, по дефолту будуть приходити тільки чати по товарах</i></p>
- **searchType** `Number` _(опціонально)_ - <p>Тип пошуку<br> <b>0</b> - по всіх параметрах <br> <b>1</b> - по відправнику <br> <b>2</b> - по темі <br> <b>3</b> - за змістом <br></p>
- **search** `String` _(опціонально)_ - <p>Строка пошуку (що шукаємо)</p>
- **id** `Integer` _(опціонально)_ - <p>Id чату</p>
- **star_market** `Number` _(опціонально)_ - <p>Відмічені повідомлення чи ні</p>
- **read** `Number` _(опціонально)_ - <p>Прочитано повідомлення чи ні</p>
- **has_response_to_user** `Number` _(опціонально)_ - <p>Чи є відповідь покупцю</p>
- **created_from** `Date` _(опціонально)_ - <p>Дата створення чату (від)</p>
- **created_to** `Date` _(опціонально)_ - <p>Дата створення чату (до)</p>
- **updated_from** `Date` _(опціонально)_ - <p>Дата останньої зміни чату (від)</p>
- **updated_to** `Date` _(опціонально)_ - <p>Дата останньої зміни чату (до)</p>
- **expand** `String` **_(обов'язково)_** - <p>Extra fields<br> <code>messages, item, market, market_title, order, order_data, user_fio, order_status, unread_messages_count,has_auto_message</code><br> Починаючи з поточної версії для швидшого отримання відповіді рекомендуємо використовувати наступні параметри:<br> <code>order_data</code> замість <code>order, order_status</code><br> <code>market_title</code> замість <code>market</code><br></p>

**Request Meta Parameters:**

- **page** `Number` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `String` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;chats&quot;: Chat[], &quot;_meta&quot;: MetaResponse }</p>
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
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)<br> <b><a href="#api-Models-OrderStatusDetails">OrderStatusDetails</a></b></p>
- **chat.order_data** `Object` **_(обов'язково)_** - <p>Дані про замовлення, <b><a href="#api-Models-ChatOrderDetails">Order Data</a></b></p>
- **chat.market_title** `String` **_(обов'язково)_** - <p>Назва продавця</p>
- **chat.has_auto_message** `Boolean` **_(обов'язково)_** - <p>Ознака чи було автоматично відправлено запит на відгук про товар</p>
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
        "chats":
        [{
            "id": 193611,
            "created": "2017-08-01 10:16:30",
            "updated": "2017-08-01 10:16:30",
            "subject": "Вопрос от пользователя Людмила",
            "user":{
                 "id": 38856538,
                 "has_email": true,
                 "contact_fio": "Людмила Гром"
            },
            "read_market": "2018-01-04 13:44:51.298054",
            "trash_market": 0,
            "star_market": 1,
            "order_id": null,
            "type": 2,
            "item_id": null,
            "user_id": 38856538,
            "order": {
                "id": 184558726,
                "created": "2018-10-26 12:49:05",
                "changed": "2018-10-26 13:24:08",
                "amount": "321.00",
               "amount_with_discount": "321.00",
                "cost": "321.00",
                "cost_with_discount": "321.00",
                "status": 26,
                "status_group": 1,
                "items_photos": [
                    {
                        "id": 6934253,
                        "url": "https://rozetka.com.ua/goods/1438393/6934253_images_1438393493.jpg",
                        "item_url": "https://rozetka.com.ua/6934253/p6934253"
                    }
                ],
                "seller_comment": [
                    {
                        "comment": "13-23 номер не обслуж",
                        "created": "2018-10-26 10:24:07"
                    }
                ],
                "seller_comment_created": "2018-10-26 10:24:07",
                "current_seller_comment": "13-23 номер не обслуж",
                "comment": "",
                "user_phone": "380689572356",
                "from_warehouse": 0,
                "ttn": "",
                "total_quantity": 1,
                "can_copy": false,
                "created_type": 4
             },
             "order_data":{
                "id": 184558726,
                "created": "2018-10-26 12:49:05",
                "amount": "321.00",
                "amount_with_discount": "321.00",
                "total_quantity": 1,
                "status": 6,
                "status_data":{
                    "id": 6,
                    "name": "Посылка получена",
                    "name_uk": "Посилку отримано",
                    "name_en": "Delivered",
                    "status_group": 2,
                    "status": 1,
                    "color": "#00A046"
                }
            },
            "market_title": "BL"
        }],
        "_meta":{
            "totalCount": 80,
            "pageCount": 4,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 7.6 Пошук чатів

**get** `/messages/search`

<p>Фільтр по чатам<br> <b><h4 style="color:green;">Починаючи з поточної версії, системні повідомлення для продавця і покупця недоступні по API</h4><h4 style="color:green;">До списку не виводяться чати, де є тільки системні повідомлення</h4><b></p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Url Parameters:**

- **msgType** `String` **_(обов'язково)_** - <p>Тип чату <code>Required</code><br><i>Якщо не передавати цей параметр, по дефолту будуть приходити тільки чати по товарах</i></p>
- **searchType** `Number` _(опціонально)_ - <p>Тип пошуку<br> <b>0</b> - по всіх параметрах <br> <b>1</b> - по відправнику <br> <b>2</b> - по темі <br> <b>3</b> - за змістом <br></p>
- **search** `String` _(опціонально)_ - <p>Строка пошуку (що шукаємо)</p>
- **id** `Integer` _(опціонально)_ - <p>Id чату</p>
- **star_market** `Number` _(опціонально)_ - <p>Відмічені повідомлення чи ні</p>
- **read** `Number` _(опціонально)_ - <p>Прочитано повідомлення чи ні</p>
- **has_response_to_user** `Number` _(опціонально)_ - <p>Чи є відповідь покупцю</p>
- **expand** `String` **_(обов'язково)_** - <p>Extra fields<br> <code>messages, item, market, order, user_fio, order_status, unread_messages_count</code></p>

**Request Meta Parameters:**

- **page** `Number` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `String` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;chats&quot;: Chat[], &quot;_meta&quot;: MetaResponse }</p>
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
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)</p>
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
        "chats":
        [{
            "id": 193611,
            "created": "2017-08-01 10:16:30",
            "updated": "2017-08-01 10:16:30",
            "subject": "Вопрос от пользователя Людмила",
            "user":{
                 "id": 38856538,
                 "has_email": true,
                 "contact_fio": "Людмила Гром"
            },
            "read_market": "2018-01-04 13:44:51.298054",
            "trash_market": 0,
            "star_market": 1,
            "order_id": null,
            "type": 2,
            "item_id": null,
            "user_id": 38856538,
            "order": {
                "id": 184558726,
                "created": "2018-10-26 12:49:05",
                "changed": "2018-10-26 13:24:08",
                "amount": "321.00",
               "amount_with_discount": "321.00",
                "cost": "321.00",
                "cost_with_discount": "321.00",
                "status": 26,
                "status_group": 1,
                "items_photos": [
                    {
                        "id": 6934253,
                        "url": "https://rozetka.com.ua/goods/1438393/6934253_images_1438393493.jpg",
                        "item_url": "https://rozetka.com.ua/6934253/p6934253"
                    }
                ],
                "seller_comment": [
                    {
                        "comment": "13-23 номер не обслуж",
                        "created": "2018-10-26 10:24:07"
                    }
                ],
                "seller_comment_created": "2018-10-26 10:24:07",
                "current_seller_comment": "13-23 номер не обслуж",
                "comment": "",
                "user_phone": "380689572356",
                "from_warehouse": 0,
                "ttn": "",
                "total_quantity": 1,
                "can_copy": false,
                 "created_type": 4
             }
        }],
        "_meta":{
            "totalCount": 80,
            "pageCount": 4,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 2 Пошук чатів

**get** `/messages/search`

<p>Фільтр за повідомленнями</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **msgType** `String` _(опціонально)_ - <p>Тип чату</p>
- **searchType** `Number` _(опціонально)_ - <p>Тип пошуку  <br><b>0</b> - по всіх параметрах <br><b>1</b> - по відправнику <br><b>2</b> - по темі <br><b>3</b> - за змістом</p>
- **search** `String` _(опціонально)_ - <p>Строка пошуку (що шукаємо)</p>

**Request Meta Parameters:**

- **page** `Number` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `String` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc). <i>Not Required</i></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;chats&quot;: Chat[], &quot;_meta&quot;: MetaResponse }</p>
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
        "chats":
        [{
            "id": 193611,
            "created": "2017-08-01 10:16:30",
            "updated": "2017-08-01 10:16:30",
            "subject": "Вопрос от пользователя Людмила",
            "user":{
                 "id": 38856538,
                 "email": "vgyyyy9@gmail.com",
                 "login": "vg######",
                 "contact_fio": "Людмила Гром"
            },
            "read_market": "2018-01-04 13:44:51.298054",
            "trash_market": 0,
            "star_market": 1,
            "order_id": null,
            "type": 2,
            "item_id": null,
            "user_id": 38856538
        }],
        "_meta":{
            "totalCount": 80,
            "pageCount": 4,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 1 Кількість чатів

**get** `/messages/counts`

<p>Кількість повідомлень і питань продавцеві</p>

**Версія:** 0.0.3

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **totalUnread** `Integer` **_(обов'язково)_** - <p>Всього непрочитаних чатів</p>
- **total** `Integer` **_(обов'язково)_** - <p>Всього чатів</p>
- **totalUnreadMessages** `Integer` **_(обов'язково)_** - <p>Всього непрочитаних повідомлень у чатах</p>
- **ordersChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень (чатів) про замовлення</p>
- **ordersChatAll** `Integer` **_(обов'язково)_** - <p>Кількість усіх повідомлень про замовлення</p>
- **orderMessagesUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень у чатах про замовлення</p>
- **itemSellerMessagesUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень у чатах про товари та запитаннях продавцю</p>
- **itemsChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про товари</p>
- **itemsChatFeatured** `Integer` **_(обов'язково)_** - <p>Кількість відмічених питань про товари</p>
- **itemsChatAll** `Integer` **_(обов'язково)_** - <p>Всього питань про товари</p>
- **sellerChatAll** `Integer` **_(обов'язково)_** - <p>Кількість усіх питання про магазин</p>
- **sellerChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про магазин</p>
- **deletedChats** `Integer` **_(обов'язково)_** - <p>Видалені чати</p>
- **customerRequestsUnread** `Integer` **_(обов'язково)_** - <p>Нові звернення в call-центр</p>
- **customerRequestsAll** `Integer` **_(обов'язково)_** - <p>Усі звернення в call-центр</p>
- **customerRequestsInProcessingCount** `Integer` **_(обов'язково)_** - <p>Кількість звернень до call-центру в обробці</p>
- **orderRefundAll** `Integer` **_(обов'язково)_** - <p>Кількість заявок на повернення</p>
- **orderRefundRead** `Integer` **_(обов'язково)_** - <p>Кількість прочитаних заявок на повернення</p>
- **orderRefundUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних заявок на повернення</p>
- **feedback** `Object` **_(обов'язково)_** - <p>Переписка з Розетка</p>
- **feedback.all** `Integer` **_(обов'язково)_** - <p>Кількість тикетів (всього)</p>
- **feedback.unread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних тикетів</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
      {
          "totalUnread":443,
          "total":1000,
          "totalUnreadMessages":20,
          "ordersChatUnread":443,
          "ordersChatAll":1000,
          "orderMessagesUnread":15,
          "itemSellerMessagesUnread":5,
          "itemsChatUnread":0,
          "itemsChatFeatured":6,
          "itemsChatAll":18
          "sellerChatAll":1000,
          "sellerChatUnread":6,
          "deletedChats":0,
          "customerRequestsUnread":18
          "customerRequestsAll":336,
          "customerRequestsInProcessingCount":7,
          "orderRefundAll": 43,
          "orderRefundRead": 29,
          "orderRefundUnread": 14,
          "feedback":{
              "all": 9,
              "unread": 9
          }
      }
}
```

---

### 7.1 Кількість чатів

**get** `/messages/counts`

<p>Кількість повідомлень і питань продавцеві</p>

**Версія:** 0.0.2

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **totalUnread** `Integer` **_(обов'язково)_** - <p>Всього непрочитаних чатів</p>
- **total** `Integer` **_(обов'язково)_** - <p>Всього чатів</p>
- **totalUnreadMessages** `Integer` **_(обов'язково)_** - <p>Всього непрочитаних повідомлень у чатах</p>
- **ordersChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень (чатів) про замовлення</p>
- **ordersChatAll** `Integer` **_(обов'язково)_** - <p>Кількість усіх повідомлень про замовлення</p>
- **orderMessagesUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень у чатах про замовлення</p>
- **itemSellerMessagesUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень у чатах про товари та запитаннях продавцю</p>
- **itemsChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про товари</p>
- **itemsChatFeatured** `Integer` **_(обов'язково)_** - <p>Кількість відмічених питань про товари</p>
- **itemsChatAll** `Integer` **_(обов'язково)_** - <p>Всього питань про товари</p>
- **sellerChatAll** `Integer` **_(обов'язково)_** - <p>Кількість усіх питання про магазин</p>
- **sellerChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про магазин</p>
- **deletedChats** `Integer` **_(обов'язково)_** - <p>Видалені чати</p>
- **customerRequestsUnread** `Integer` **_(обов'язково)_** - <p>Нові звернення в call-центр</p>
- **customerRequestsAll** `Integer` **_(обов'язково)_** - <p>Усі звернення в call-центр</p>
- **customerRequestsInProcessingCount** `Integer` **_(обов'язково)_** - <p>Кількість звернень до call-центру в обробці</p>
- **orderRefundAll** `Integer` **_(обов'язково)_** - <p>Кількість заявок на повернення</p>
- **orderRefundRead** `Integer` **_(обов'язково)_** - <p>Кількість прочитаних заявок на повернення</p>
- **orderRefundUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних заявок на повернення</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
      {
          "totalUnread":443,
          "total":1000,
          "totalUnreadMessages":20,
          "ordersChatUnread":443,
          "ordersChatAll":1000,
          "orderMessagesUnread":15,
          "itemSellerMessagesUnread":5,
          "itemsChatUnread":0,
          "itemsChatFeatured":6,
          "itemsChatAll":18
          "sellerChatAll":1000,
          "sellerChatUnread":6,
          "deletedChats":0,
          "customerRequestsUnread":18
          "customerRequestsAll":336,
          "customerRequestsInProcessingCount":7,
          "orderRefundAll": 43,
          "orderRefundRead": 29,
          "orderRefundUnread": 14
      }
}
```

---

### 7.1 Кількість чатів

**get** `/messages/counts`

<p>Кількість повідомлень і питань продавцеві</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **totalUnread** `Integer` **_(обов'язково)_** - <p>Всього непрочитаних повідомлень</p>
- **total** `Integer` **_(обов'язково)_** - <p>Всього повідомлень</p>
- **ordersChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень про замовлення</p>
- **ordersChatAll** `Integer` **_(обов'язково)_** - <p>Кількість усіх повідомлень про замовлення</p>
- **itemsChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про товари</p>
- **itemsChatFeatured** `Integer` **_(обов'язково)_** - <p>Кількість відмічених питань про товари</p>
- **itemsChatAll** `Integer` **_(обов'язково)_** - <p>Всього питань про товари</p>
- **sellerChatAll** `Integer` **_(обов'язково)_** - <p>Кількість усіх питання про магазин</p>
- **sellerChatUnread** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про магазин</p>
- **deletedChats** `Integer` **_(обов'язково)_** - <p>Видалені чати</p>
- **customerRequestsUnread** `Integer` **_(обов'язково)_** - <p>Нові звернення в call-центр</p>
- **customerRequestsAll** `Integer` **_(обов'язково)_** - <p>Усі звернення в call-центр</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "totalUnread":443,
          "total":1000,
          "ordersChatUnread":443,
          "ordersChatAll":1000,
          "itemsChatUnread":0,
          "itemsChatFeatured":6,
          "itemsChatAll":18
          "sellerChatAll":1000,
          "sellerChatUnread":6,
          "deletedChats":0,
          "customerRequestsUnread":18
          "customerRequestsAll":336
      }
}
```

---

### 1 Кількість чатів

**get** `/messages/counts`

<p>Кількість повідомлень і питань продавцеві</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **total** `Integer` **_(обов'язково)_** - <p>Всього повідомлень</p>
- **ordersChat** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень про замовлення</p>
- **itemsChat** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про товари</p>
- **deleted** `Integer` **_(обов'язково)_** - <p>Видалені чати</p>
- **itemsChatFeatured** `Integer` **_(обов'язково)_** - <p>Кількість відмічених питань про товари</p>
- **itemsChatAll** `Integer` **_(обов'язково)_** - <p>Всього питань про товари</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "total":443,
          "ordersChat":443,
          "itemsChat":0,
          "deleted":0,
          "itemsChatFeatured":6,
          "itemsChatAll":18
      }
}
```

---

### 7.2 Переписка по замовленню

**get** `/messages/{id}/order-chat`

<p>Отримання доступу до переписки по замовленню</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

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

#### Приклад відповіді

```json
 {
  "success": true,
  "content": {
    "id": 1516934,
    "created": "2019-10-30 18:39:03",
    "updated": "2019-11-02 16:00:38",
    "subject": "Заказ № 345366",
    "user": {
      "id": 545645,
      "email": "seller@mail.com",
      "login": "sellerLogin",
      "contact_fio": "Иванов Иван Иванович"
    },
    "read_market": null,
    "trash_market": 0,
    "star_market": 0,
    "order_id": 949327,
    "type": 0,
    "item_id": null,
    "user_id": 3727496
  }
}
```

```json
{
  "success": true,
  "content": {
      "id": 1516934,
      "created": "2018-10-09 17:25:16",
      "updated": "2020-01-20 11:27:37",
      "subject": "Заказ № 181462689",
      "user": {
          "id": 113970,
          "email": "testing@gmail.com",
          "login": "testlogin@gmail.com",
          "contact_fio": "Александр"
      },
      "read_market": "2020-01-20 09:27:37",
      "trash_market": 0,
      "star_market": 0,
      "order_id": 181462689,
      "type": 0,
      "item_id": null,
      "user_id": 113970,
      "messages": [
          {
              "chat_id": 1516934,
              "body": "Тестовое сообщение",
              "created": "2018-10-09 17:46:50",
              "receiver_id": 113970,
              "sender": 2,
              "seller": {
                  "id": 165,
                  "login": "testlogin",
                  "status": 0,
                  "skype": "testskype",
                  "fio": "Стеценко Наталія Олександрівна",
                  "email": "testing@gmail.com",
                  "agent_id": null,
                  "lang": "ru",
                  "seller_roles": [],
                  "seller_phones": [
                      {
                          "id": 6027,
                          "phone_number": "+380314256874",
                          "confirmed": false
                      },
                      {
                          "id": 61,
                          "phone_number": "+380314256874",
                          "confirmed": false
                      },
                      {
                          "id": 62,
                          "phone_number": "+380314256874",
                          "confirmed": false
                      }
                  ],
                  "notify_phone": false,
                  "notify_email": false
              },
              "seller_id": 165,
              "files": []
          },
          {
              "chat_id": 1516934,
              "body": "тестовое сообщение",
              "created": "2018-10-09 18:33:10",
              "receiver_id": 55,
              "sender": 3,
              "seller": null,
              "seller_id": null,
              "files": []
          }
      ],
      "item": null,
      "order": {
          "id": 181462689,
          "created": "2018-10-09 17:23:52",
          "changed": "2018-10-18 23:32:54",
          "amount": "360.00",
          "amount_with_discount": "360.00",
          "cost": "360.00",
          "cost_with_discount": "360.00",
          "status": 6,
          "status_group": 2,
          "items_photos": [
              {
                  "id": 24235428,
                  "url": "https://rozetka.com.ua/goods/2257699/24235428_images_2257699563.jpg",
                  "item_url": "https://rozetka.com.ua/24235428/p24235428",
                  "item_name": "Книга про довголіття"
              }
          ],
          "seller_comment": [
              {
                  "comment": "17-46 не отв",
                  "created": "2018-10-09 14:46:27"
              }
          ],
          "seller_comment_created": "2018-10-09 14:46:27",
          "current_seller_comment": "17-46 не отв",
          "comment": "",
          "user_phone": "380214574854",
          "from_warehouse": 0,
          "ttn": "9879946466",
          "total_quantity": 1,
          "can_copy": false,
          "created_type": 4,
          "is_viewed": true
      },
      "market": {
          "test_market": 0,
          "logo": "https://rozetka.com.ua/sellers/102/102792.jpg",
          "title": "test",
          "business_model": "b2c",
          "market_requisite": {
              "type": 2,
              "name": "Стеценко Наталія Олександрівна",
              "inn": "77474747747",
              "okpo": "77474747747",
              "mfo": "77474747747",
              "score": "77474747747",
              "bank_name": "Название банка",
              "juridical_address": "тестовый адрес",
              "physical_address": "",
              "seller_can_edit": false
          },
          "updated": "2020-01-20 10:53:19.0629",
          "use_api": false,
          "sms_template_id": 1,
          "check_stock": true,
          "edit_timetable": true,
          "combination_owox_parent_id": 77474,
          "email": "testing.rozetka@gmail.com"
      },
      "user_fio": "Александр"
  }
}
```

---

### 7.4 Створити повідомлення (відповісти)

**post** `/messages/create`

<p>Створення і відправка повідомлення покупцеві</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки (чату)</p>
- **sendEmailUser** `Number` **_(обов'язково)_** - <p>Відправляти e-mail покупцеві</p>
- **receiver_id** `Integer` **_(обов'язково)_** - <p>ID покупця (отримувача повідомлення)</p>
- **file** `File` **_(обов'язково)_** - <p>Прикріплений файл</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **ChatMessage** `Object` **_(обов'язково)_** - <p>ChatMessage</p>
- **chat_messages.id** `Integer` **_(обов'язково)_** - <p>ID повідомлення</p>
- **chat_messages.chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat_messages.body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_messages.created** `String` **_(обов'язково)_** - <p>Дата і час створення повідомлення</p>
- **chat_messages.read** `String` **_(обов'язково)_** - <p>Дата і час прочитання повідомлення отримувачем</p>
- **chat_messages.sender** `Number` **_(обов'язково)_** - <p>Відправник<br> <a href="#api-Messages">Детальніше...</a></p>
- **chat_messages.seller** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerDetails">SellerModel</a></b>, менеджер магазину</p>
- **chat_messages.seller_id** `String` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **chat_messages.files** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatAttachments">ChatAttachmentsModel</a></b>[]. Всі файли в повідомленні</p>
- **chat_messages.status** `Integer` **_(обов'язково)_** - <p>Статус модерації повідомлення <ul></p> <li>0 - Новий</li> <li>1 - На модерації</li> <li>2 - Заблокований модератором</li> <li>3 - Пройшов модерацію</li> <li>4 - Автоблокування</li> <li>5 - Автоматично пройшов модерацію</li> </ul>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "chat_id":205752,
          "body":"test message",
          "created":"2017-12-04 16:00:28",
          "receiver_id":10621442,
          "sender":2,
          "seller":{
              "id":39,
              "login":"Chytayka13",
              "status":0,
              "skype":"chytayka",
              "fio":"Штуль Любов  Дмитрівна",
              "email":"ll@rozetka.com.ua",
              "agent_id": null,
              "lang":"ru",
              "seller_roles":[{
                  "name":"default_owner",
                  "type":1,
                  "description":"Владелец",
                  "rule_name":null,
                  "data":null,
                  "created_at":1486413514,
                  "updated_at":null
              }],
              "seller_phones":[
                  {
                      "id":394,
                      "phone_number":"+380507054385",
                      "confirmed":false
                  }
              ],
              "notify_phone":true,
              "notify_email":true
          },
          "seller_id":39,
          "files":[
                  {
                      "id": 3,
                      "name": "d2afa457d366062cc27cf12b9ac833c6.png",
                      "size": 104839,
                      "chat_message_id": 2083388,
                      "chat_id": 205506,
                      "typeName": "IMG"
                  },
              ],
              "status": 0
     }
}
```

---

### 4 Створити повідомлення (відповісти)

**post** `/messages/create`

<p>Створення і відправка повідомлення покупцеві</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки (чату)</p>
- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення <br>Може бути null</p>
- **sendEmailUser** `Number` **_(обов'язково)_** - <p>Відправляти e-mail покупцеві</p>
- **receiver_id** `Integer` **_(обов'язково)_** - <p>ID покупця (отримувача повідомлення)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **ChatMessage** `Object` **_(обов'язково)_** - <p>ChatMessage</p>
- **chat_messages.chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat_messages.body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_messages.created** `String` **_(обов'язково)_** - <p>Дата і час створення повідомлення</p>
- **chat_messages.sender** `Number` **_(обов'язково)_** - <p>Відправник<br> <a href="#api-Messages">Детальніше...</a></p>
- **chat_messages.seller** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerDetails">SellerModel</a></b>, менеджер магазину</p>
- **chat_messages.seller_id** `String` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **chat_messages.files** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatAttachments">ChatAttachmentsModel</a></b>[]. Всі файли в повідомленні</p>
- **Seller** `Object` **_(обов'язково)_** - <p>Model</p>
- **seller.id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.status** `Number` **_(обов'язково)_** - <p>Cтатус менеджера (0 - активний, 1 - видалений)</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.email_verified** `String` **_(обов'язково)_** - <p>Ознака, чи верифікований email</p>
- **seller.email_verification_date** `String` **_(обов'язково)_** - <p>Дата верифікації email</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова</p>
- **seller.seller_roles** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerRolesDetails">SellerRoles</a></b>[], список ролей менеджера</p>
- **seller.seller_phones** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerPhonesDetails">SellerPhone</a></b>[], список телефонів менеджера</p>
- **seller.notify_phone** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти смс-повідомлення менеджеру</p>
- **seller.notify_email** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти email-повідомлення менеджеру</p>
- **seller.two_step_auth** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно включати двофакторну авторизацію менеджеру</p>
- **seller.agent_id** `Integer|null` **_(обов'язково)_** - <p>Agent ID</p>
- **SellerRoles** `Object` **_(обов'язково)_** - <p>SellerRolesModel</p>
- **seller_rbac_auth_item.name** `String` **_(обов'язково)_** - <p>Назва ролі</p>
- **seller_rbac_auth_item.type** `Integer` **_(обов'язково)_** - <p>Тип (1 - роль, 2 - permission)</p>
- **seller_rbac_auth_item.description** `Text` **_(обов'язково)_** - <p>Опис ролі</p>
- **SellerPhone** `Object` **_(обов'язково)_** - <p>SellerPhoneModel</p>
- **seller_phone.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **seller_phone.phone_number** `String` **_(обов'язково)_** - <p>Телефон</p>
- **seller_phone.confirmed** `Boolean` **_(обов'язково)_** - <p>Чи є телефон підтвердженим</p>
- **seller_phone.confirmation_date** `Boolean` **_(обов'язково)_** - <p>Дата верифікації телефону</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":
       {
          "chat_id":205752,
          "body":"test message",
          "created":"2017-12-04 16:00:28",
          "receiver_id":10621442,
          "sender":2,
          "seller":{
              "id":39,
              "login":"Chytayka13",
              "status":0,
              "skype":"chytayka",
              "fio":"Штуль Любов  Дмитрівна",
              "email":"ll@rozetka.com.ua",
              "lang":"ru",
              "seller_roles":[{
                  "name":"default_owner",
                  "type":1,
                  "description":"Владелец",
                  "rule_name":null,
                  "data":null,
                  "created_at":1486413514,
                  "updated_at":null
              }],
              "seller_phones":[
                  {
                      "id":394,
                      "seller_id":39,
                      "phone_number":"+380507054385",
                      "confirmed":false
                  }
              ],
              "notify_phone":true,
              "notify_email":true
          },
          "seller_id":39
     }
}
```

---

### 5 Видалити чат

**post** `/messages/{id}/delete-chat`

<p>Видалити чат</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату</p>

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

### 3 Масово видалити

**put** `/messages/mass-delete`

<p>Масово перенести повідомлення в &quot;Видалені&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **IDs** `json` **_(обов'язково)_** - <p>Список ID чатів, які потрібно змінити. <br><b>Приклад: </b>{&quot;205143&quot;:205143, &quot;205071&quot;:205071,...}</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{&quot;success&quot;: boolean, &quot;content&quot;: number}</p>
- **success** `Boolean` **_(обов'язково)_** - <p>Успішність виконання</p>
- **content** `Number` **_(обов'язково)_** - <p>Кількість змінених чатів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":2
}
```

---

### 1 Масово відмітити як важливі

**put** `/messages/mass-important`

<p>Масово відмітити повдомлення як важливі</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **IDs** `json` **_(обов'язково)_** - <p>Список ID чатів, які потрібно змінити. <br><b>Приклад: </b>{&quot;205143&quot;:205143, &quot;205071&quot;:205071,...}</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{&quot;success&quot;: boolean, &quot;content&quot;: number}</p>
- **success** `Boolean` **_(обов'язково)_** - <p>Успішність виконання</p>
- **content** `Number` **_(обов'язково)_** - <p>Кількість змінених чатів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":2
}
```

---

### 4 Масово відновити

**put** `/messages/mass-restore`

<p>Масово відновити повідомлення з &quot;Видалених&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **IDs** `json` **_(обов'язково)_** - <p>Список ID чатів, які потрібно змінити. <br><b>Приклад: </b>{&quot;205143&quot;:205143, &quot;205071&quot;:205071,...}</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{&quot;success&quot;: boolean, &quot;content&quot;: number}</p>
- **success** `Boolean` **_(обов'язково)_** - <p>Успішність виконання</p>
- **content** `Number` **_(обов'язково)_** - <p>Кількість змінених чатів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":2
}
```

---

### 2 Масово відмітити як непрочитані

**put** `/messages/mass-unread`

<p>Масово відмітити повдомлення як непрочитані</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **IDs** `json` **_(обов'язково)_** - <p>Список ID чатів, які потрібно змінити. <br><b>Приклад: </b>{&quot;205143&quot;:205143, &quot;205071&quot;:205071,...}</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{&quot;success&quot;: boolean, &quot;content&quot;: number}</p>
- **success** `Boolean` **_(обов'язково)_** - <p>Успішність виконання</p>
- **content** `Number` **_(обов'язково)_** - <p>Кількість змінених чатів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":2
}
```

---

### 7.5 Редагувати чат

**put** `/messages/{id}`

<p>Зміна одного чату (видалення, зміна важливості, зробити непрочитаним)</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату</p>
- **expand** `String` **_(обов'язково)_** - <p>Extra fields (messages, item, market, order, user_fio, order_status)</p>

**Request Body Parameters:**

- **star_market** `Number` _(опціонально)_ - <p>Прапор, позначає важливість чату у продавця</p>
- **read_market** `String` _(опціонально)_ - <p>Дата і час прочитання повідомлення продавцем. Якщо передати null - чат стане непрочитаним.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

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
**ExtraFields:**

- **chat.messages** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatMessageDetails">ChatMessageModel</a></b>[]. Всі повідомлення чату</p>
- **chat.order** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderDetails">OrderModel</a></b>. Замовлення</p>
- **chat.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b>. Продавець</p>
- **chat.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>. Товар, по якому створено обговорення</p>
- **chat.user_fio** `String` **_(обов'язково)_** - <p>ПІБ користувача</p>
- **chats.order_status** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення (якщо листування по замовленню)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{    "success":true,
     "content":{
         "id":205839,
         "created":"2018-05-02 14:25:47",
         "updated":"2018-05-04 13:33:26",
         "subject":"Вопрос от пользователя TestUser",
         "user":{
             "id":15090108,
             "email":"test@gmail.com",
             "login":"test@gmail.com",
             "contact_fio":"Tester Test"
          },
          "read_market":"2018-05-04 09:49:59",
          "trash_market":0,
          "star_market":0,
          "order_id":null,
          "type":2,
          "item_id":null,
          "user_id":15090108
     }
}
```

```json
HTTP/1.1 200 OK
{    "success":true,
     "content":{
         "id":205839,
         "created":"2018-05-02 14:25:47",
         "updated":"2018-05-04 13:33:26",
         "subject":"Вопрос от пользователя TestUser",
         "user":{
             "id":15090108,
             "email":"test@gmail.com",
             "login":"test@gmail.com",
             "contact_fio":"Tester Test"
          },
          "read_market":"2018-05-04 09:49:59",
          "trash_market":0,
          "star_market":0,
          "order_id":null,
          "type":2,
          "item_id":null,
          "user_id":15090108,
          "item":null,
          "market":{
             "test_market":0,
             "logo":"http://i2.rozetka.ua/sellers/9/9724.jpg",
             "title":"Читайка",
             "business_model": "b2c",
             "market_requisite":{
                 "type": 2,
                 "name": "Штуль Любов",
                 "inn": "18722….",
                 "okpo": "",
                 "mfo": "300….",
                 "score": "26001060…... ",
                 "bank_name": "ПАТ КБ ",
                 "juridical_address": "04114, Україна, ...",
                 "physical_address": null,
                 "seller_can_edit": false
             },
             "updated":"2017-10-25 11:46:36",
             "use_api":false,
             "sms_template_id":1,
             "check_stock":false,
             "edit_timetable": true,
             "combination_owox_parent_id": null,
             "email": "nazdrin.d@sumatra.ua"
          },
          "messages":
             [{
                 "chat_id":205506,
                 "body":"Здравствуйте! Есть вопрос по заказу",
                 "created":"2017-08-14 22:15:25",
                 "receiver_id":42,
                 "sender":3,
                 "seller":null,
                 "seller_id":null,
                 "files":[
                     {
                         "id": 3,
                         "name": "d2afa457d366062cc27cf12b9ac833c6.png",
                         "size": 104839,
                         "chat_message_id": 2083388,
                         "chat_id": 205506,
                         "typeName": "IMG"
                     },
                 ]
             }],
          "order": {
             "id": 184558726,
             "created": "2018-10-26 12:49:05",
             "changed": "2018-10-26 13:24:08",
             "amount": "321.00",
             "amount_with_discount": "321.00",
             "cost": "321.00",
             "cost_with_discount": "321.00",
             "status": 26,
             "status_group": 1,
             "items_photos": [
                 {
                     "id": 6934253,
                     "url": "https://i2.rozetka.ua/goods/1438393/6934253_images_1438393493.jpg",
                     "item_url": "https://rozetka.com.ua/6934253/p6934253"
                 }
             ],
             "seller_comment": [
                 {
                     "comment": "13-23 номер не обслуж",
                     "created": "2018-10-26 10:24:07"
                 }
             ],
             "seller_comment_created": "2018-10-26 10:24:07",
             "current_seller_comment": "13-23 номер не обслуж",
             "comment": "",
             "user_phone": "380689572356",
             "from_warehouse": 0,
             "ttn": "",
             "total_quantity": 1,
             "can_copy": false,
             "created_type": 4
          },
          "order_status": {
             "id": 5,
             "name": "Ожидает в пункте самовывоза",
             "name_ua": "Очікує в пункті самовивозу",
             "name_en": "Waiting at pickup station",
             "type": 1,
             "status": 1,
             "color": "#221F1F"
          }
     }
}
```

---

### 5 Редагувати чат

**put** `/messages/{id}`

<p>Зміна одного чату (видалення, зміна важливості, зробити непрочитаним)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID чату</p>

**Request Body Parameters:**

- **star_market** `Number` _(опціонально)_ - <p>Прапор, позначає важливість чату у продавця</p>
- **read_market** `String` _(опціонально)_ - <p>Дата і час прочитання повідомлення продавцем. Якщо передати null - чат стане непрочитаним.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

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

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{    "success":true,
     "content":{
         "id":205839,
         "created":"2018-05-02 14:25:47",
         "updated":"2018-05-04 13:33:26",
         "subject":"Вопрос от пользователя TestUser",
         "user":{
             "id":15090108,
             "email":"test@gmail.com",
             "login":"test@gmail.com",
             "contact_fio":"Tester Test"
          },
          "read_market":"2018-05-04 09:49:59",
          "trash_market":0,
          "star_market":0,
          "order_id":null,
          "type":2,
          "item_id":null,
          "user_id":15090108
     }
}
```

---

