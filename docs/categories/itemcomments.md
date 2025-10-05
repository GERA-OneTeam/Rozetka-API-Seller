# ItemComments

### 5.2 Деталі коментаря

**get** `/item-comments/{id}`

<p>Деталі коментаря</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID коментаря</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:ItemCommentsModel }</p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
**ExtraField:**

- **itemComments.children** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChildItemCommentDetails">ChildItemComment</a></b>[] <br>Список дочірніх відгуків (відповідей у гілці відгуків)</p>
- **itemComments.attachments** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemCommentAttachment">ItemCommentAttachment</a>[]</b>, інформація про вкладення</p>

#### Приклад відповіді

```json
{
  "success": true,
  "content": {
      "id": 44025200,
      "record_id": 19508412,
      "name": "Таланов Артём Александрович",
      "email": "talanov_artem@ukr.net",
      "parent_comment_id": "0",
      "user_id": "635862",
      "text": "Test",
      "status": "auto_activated",
      "positive_vote_count": 0,
      "negative_vote_count": 0,
      "created": "2019-07-24 15:30:52",
      "changed": "2019-07-24 15:30:52",
      "mark": 0,
      "is_important": false,
      "record": {
          "id": "19508412",
          "title": "Пригоди Марійки Михайлової"
      },
      "is_reade": true,
      "children": [],
      "parent_id": 0,
      "seller_id": 0,
      "rating": "",
      "dignity": "",
      "shortcomings": "",
      "from_buyer": 0,
      "allow_html": 0,
      "has_children": false,
      "is_un_reade_child": false,
      "item": {
          "id": 19508412,
          "name": "Пригоди Марійки Михайлової",
          "name_ua": null,
          "article": "",
          "price": "68.00",
          "catalog_category": {
              "id": 4326593,
              "name": "Художественная литература",
              "parent_id": 4326572
          },
          "catalog_id": 4326593,
          "group_id": null,
          "photo_preview": "https://rozetka.com.ua/goods/2097480/19508412_images_2097480616.jpg",
          "photo": [
              "https://rozetka.com.ua/goods/2097480/19508412_images_2097480539.jpg"
          ],
          "moderation_status": 0,
          "sla_id": 1163,
          "url": "https://rozetka.com.ua/19508412/p19508412",
          "sold": 5,
          "uploader_offer_id": "215944",
          "uploader_status": null
      },
      "dispute": {
        "item_review_id": 48765495,
        "sellers_comment": "Тест",
        "reason_title": "Фейковий відгук",
        "status": 1,
        "created_at": "2021-07-01 13:57:17"
      },
      "type": "comment",
      "attachments": [
          {
             "id": 123123,
             "href": "http://some_url.jpg",
             "comment_id": 99988811,
             "type": "images",
             "preview_image": "http://some_url.256x256.jpg",
             "big_image": "http://some_url/8428056.675x532.jpg",
             "comment_type": "comment"
         }
      ]
}
```

---

### 6 Відповіді на коментар

**get** `/item-comments/child-comments/{id}`

<p>Отримання відповідей на коментар</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {&quot;children&quot; : ItemComments[]} } <br> <a href="#success-examples-ItemComments-PutItemCommentsMarkAsRead-0_0_0-0">Example</a></p>
- **ChildItemComment.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **ChildItemComment.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **ChildItemComment.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **ChildItemComment.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **ChildItemComment.is_market** `Number` **_(обов'язково)_** - <p>Ознака коментаря (0 - від покупця, 1 - від продавця)</p>
- **ChildItemComment.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **ChildItemComment.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "children": [
           {
               "name": "Test",
               "id": 44815513,
               "text": "some_test",
               "status": "auto_activated",
               "created": "2019-12-26 14:36:03",
               "is_market": 1,
               "seller_id": null,
               "parent_id": 44363473
           },
           {
               "name": "Test",
               "id": 44815512,
               "text": "some_test",
               "status": "auto_activated",
               "created": "2019-12-26 14:34:47",
               "is_market": 1,
               "seller_id": null,
               "parent_id": 44363473
           },...
       ]
   }
}
```

---

### 2 Кількість коментарів

**get** `/item-comments/counts`

<p>Кількість непрочитаних відгуків про товари</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {} }</p>
- **unread** `Integer` **_(обов'язково)_** - <p>Кількість всіх непрочитаних відгуків і питань</p>
- **all** `Integer` **_(обов'язково)_** - <p>Кількість всіх відгуків і питань</p>
- **all_comment** `Integer` **_(обов'язково)_** - <p>Кількість відгуків про товар</p>
- **unread_comment** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних відгуків про товар</p>
- **all_question** `Integer` **_(обов'язково)_** - <p>Кількість питань про товар</p>
- **unread_question** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних питань про товар</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": {
         "all": 210,
         "unread": 19,
         "all_comment": 176,
         "unread_comment": 19,
         "all_question": 34,
         "unread_question": 19
    }
}
```

---

### 2 Кількість коментарів

**get** `/item-comments/counts`

<p>Кількість непрочитаних відгуків про товари</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: number }</p>
- **content** `Integer` **_(обов'язково)_** - <p>Кількість відгуків</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": 15
}
```

---

### 5.1 Пошук по коментарях

**get** `/item-comments/search`

<p>Вибірка відгуків про товари</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування (asc/desc).</p>

**Request Url Parameters:**

- **commentId** `Integer` _(опціонально)_ - <p>ID відгука</p>
- **isRead** `Number` _(опціонально)_ - <p>Відгук прочитаний або не прочитаний</p>
- **goodsId** `Integer` _(опціонально)_ - <p>ID товару</p>
- **createdFrom** `String` _(опціонально)_ - <p>Фільтр за датою створення відгуку (від)</p>
- **createdTo** `String` _(опціонально)_ - <p>Фільтр за датою створення відгуку (до)</p>
- **isImportant** `Number` _(опціонально)_ - <p>Відгук відзначений як важливий або не відзначен</p>
- **type** `String` _(опціонально)_ - <p>Тип, питання або коментар</p>
- **mark** `String` _(опціонально)_ - <p>Оцінки на відгук про товар, вказані рядком через кому</p>
- **status** `String` _(опціонально)_ - <p>Статус відгуку</p>
- **isAnswered** `Number` _(опціонально)_ - <p>Фільтр по наявності в чаті коментарів покупця на який немає відповідей продавця</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { itemComments: ItemComments[], _meta:MetaResponse }} <br> <a href="#success-examples-ItemComments-GetItemCommentsSearch-0_0_0-0">Example</a></p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
**ExtraField:**

- **itemComments.children** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChildItemCommentDetails">ChildItemComment</a></b>[] <br>Список дочірніх відгуків (відповідей у гілці відгуків)</p>
- **itemComments.attachments** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemCommentAttachment">ItemCommentAttachment</a>[]</b>, інформація про вкладення</p>
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
        "itemComments":[
                {
                         "id": 44025200,
                        "record_id": 19508412,
                        "name": "Таланов Артём Александрович",
                        "email": "talanov_artem@ukr.net",
                        "parent_comment_id": "0",
                        "user_id": "635862",
                        "text": "",
                        "status": "auto_activated",
                        "positive_vote_count": 0,
                        "negative_vote_count": 0,
                        "created": "2019-07-24 15:30:52",
                        "changed": "2019-07-24 15:30:52",
                        "mark": 0,
                        "is_important": false,
                        "record": {
                            "id": "19508412",
                            "title": "Пригоди Марійки Михайлової"
                        },
                        "is_reade": true,
                        "children": [],
                        "parent_id": 0,
                        "seller_id": 0,
                        "rating": "",
                        "dignity": "",
                        "shortcomings": "",
                        "from_buyer": 0,
                        "allow_html": 0,
                        "has_children": false,
                        "is_un_reade_child": false,
                        "item": {
                            "id": 19508412,
                            "name": "Пригоди Марійки Михайлової",
                            "name_ua": null,
                            "article": "",
                            "price": "68.00",
                            "catalog_category": {
                                "id": 4326593,
                                "name": "Художественная литература",
                                "parent_id": 4326572
                            },
                            "catalog_id": 4326593,
                            "group_id": null,
                            "photo_preview": "https://rozetka.com.ua/goods/2097480/19508412_images_2097480616.jpg",
                            "photo": [
                                "https://rozetka.com.ua/goods/2097480/19508412_images_2097480539.jpg"
                            ],
                            "moderation_status": 0,
                            "sla_id": 1163,
                            "url": "https://rozetka.com.ua/19508412/p19508412",
                            "sold": 5,
                            "uploader_offer_id": "215944",
                            "uploader_status": null
                        },
                        "dispute": {
                          "item_review_id": 48765495,
                          "sellers_comment": "Тест",
                          "reason_title": "Фейковий відгук",
                          "status": 1,
                          "created_at": "2021-07-01 13:57:17"
                        },
                        "type": "comment",
                        "orders_created": "2023-05-05 14:15:09",
                        "orders_completed": "1",
                        "orders_id": 769161347
                    },
        ,{...}],
        "_meta":{
            "totalCount":380,
            "pageCount":19,
            "currentPage":1,
            "perPage":20
        }
}}
```

---

### 5.1 Пошук по коментарях

**get** `/item-comments/search`

<p>Вибірка відгуків про товари</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування (asc/desc).</p>

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **parent_id** `Number` _(опціонально)_ - <p>ID материнського відгуку</p>
- **mark** `String` _(опціонально)_ - <p>Оцінки на відгук про товар, вказані рядком через кому</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { itemComments: ItemComments[], _meta:MetaResponse }} <br> <a href="#success-examples-ItemComments-GetItemCommentsSearch-0_0_0-0">Example</a></p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
**ExtraField:**

- **itemComments.children** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChildItemCommentDetails">ChildItemComment</a></b>[] <br>Список дочірніх відгуків (відповідей у гілці відгуків)</p>
- **itemComments.attachments** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemCommentAttachment">ItemCommentAttachment</a>[]</b>, інформація про вкладення</p>
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
        "itemComments":[{
            "id":27845,
            "parent_id":null,
            "seller_id":null,
            "status":"auto_activated",
            "name":"Юлия",
            "text":"Коли я прочитала книгу років 12-13 назад, залишилася в захваті.",
            "rating":0,
            "mark":5,
            "positive_vote_count":0,
            "negative_vote_count":0,
            "dignity":"безпомилковий вибір, навіть якщо слово &quot;філософія&quot; наводить жах.",
            "shortcomings":"Інші книги Коельо не такі хороші",
            "created":"2017-08-12 12:55:35",
            "changed":"2017-08-12 12:55:36",
            "is_reade":true,
            "is_important":false,
            "from_buyer":0,
            "allow_html":0,
            "record":{
                "id":"6492232",
                "title":"Алхімік"
            },
            "has_children":false,
            "is_un_reade_child":false,
            "details":null
        },{...}],
        "_meta":{
            "totalCount":380,
            "pageCount":19,
            "currentPage":1,
            "perPage":20
        }
}}
```

---

### 3 Створити коментар

**post** `/item-comments/create-comment`

<p>Створення відповіді користувачу. Відповідь відправляється в Розетку, в базі створюється запис з відповіддю в статусі &quot;unapproved&quot;.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **is_reade** `Integer` **_(обов'язково)_** - <p>Чи прочитаний материнський відгук</p>
- **parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **text** `String` **_(обов'язково)_** - <p>Текст відповіді</p>
- **item_id** `Number` **_(обов'язково)_** - <p>ID товару</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {comment: ItemComment} }</p>
- **name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків</p>
- **created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **is_market** `Number` **_(обов'язково)_** - <p>Чи був коментар залишений працівником магазина</p>
- **seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>

#### Приклад відповіді

```json
   HTTP/1.1 200 OK
{
    "success":true,
    "content": {
        "comment":{
            "name":"Читайка",
            "id":28521,
            "text":"Данная книга будет в продаже с января.",
            "status":"unapproved",
            "created":null,
            "is_market": 1,
            "seller_id":39,
            "parent_id":3058
        }
    }
}
```

---

### 3 Створити коментар

**post** `/item-comments/create-comment`

<p>Створення відповіді користувачу. Відповідь відправляється в Розетку, в базі створюється запис з відповіддю в статусі &quot;unapproved&quot;.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **is_reade** `Integer` **_(обов'язково)_** - <p>Чи прочитаний материньский відгук</p>
- **parent_id** `Integer` **_(обов'язково)_** - <p>ID материньского відгука</p>
- **text** `String` **_(обов'язково)_** - <p>Текст відповіді</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {comment: ItemComment} }</p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Приклад відповіді

```json
   HTTP/1.1 200 OK
{
    "success":true,
    "content": {
        "comment":{
            "id":28521,
            "parent_id":3058,
            "seller_id":39,
            "status":"unapproved",
            "name":"Читайка",
            "text":"Дана книга буде в продажу з січня.",
            "rating":null,
            "mark":null,
            "positive_vote_count":null,
            "negative_vote_count":null,
            "dignity":null,
            "shortcomings":null,
            "created":null,
            "changed":null,
            "is_reade":1,
            "is_important":null,
            "from_buyer":null,
            "allow_html":null,
            "record":{
                "id":"7748044",
                "title":"АллатРа - (9789662690071)"
            },
        }
    }
}
```

---

### 1 Позначки важливості

**put** `/item-comments/change-important/{id}`

<p>Відмітити відгук як важливий, або навпаки зняти позначку важливості.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгука</p>

**Request Body Parameters:**

- **status** `Boolean` **_(обов'язково)_** - <p>Значення позначки. Важливий - true, не важливий - false</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {&quot;is_important&quot;: boolean} }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "is_important": true
}}
```

---

### 1 Позначки важливості

**put** `/item-comments/change-important/{id}`

<p>Помітити відгук як важливий, або навпаки зняти позначку важливості.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгука</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: ItemComments }</p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
            "id":24075,
            "parent_id":null,
            "seller_id":null,
            "status":"auto_activated",
            "name":"Дмитрий",
            "text":"Добрий день, коли дана книга надійде в продаж?",
            "rating":0,
            "mark":5,
            "positive_vote_count":0,
            "negative_vote_count":0,
            "dignity":"",
            "shortcomings":"",
            "created":"2017-07-28 02:31:48",
            "changed":"2017-07-28 02:31:49",
            "is_reade":true,
            "is_important":true,
            "from_buyer":0,
            "allow_html":0,
            "record":{
                "id":"7732168",
                "title":"Японська мова в ситуаціях міжкультурного спілкування"
            },
}}
```

---

### 4 Позначити як прочитане (Відкрити коментар)

**put** `/item-comments/mark-as-read/{id}`

<p>Відкрити відгук і відмітити його як прочитаний.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: {&quot;is_reade&quot;: boolean} } <br> <a href="#success-examples-ItemComments-PutItemCommentsMarkAsRead-0_0_0-0">Example</a></p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
**ExtraField:**

- **itemComments.children** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChildItemCommentDetails">ChildItemComment</a></b>[] <br>Список дочірніх відгуків (відповідей у гілці відгуків)</p>
- **itemComments.attachments** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemCommentAttachment">ItemCommentAttachment</a>[]</b>, інформація про вкладення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": {
         "id": 38226554,
         "record_id": 9392492,
         "name": "Артем Копт",
         "email": "6770940@gmail.com",
         "parent_comment_id": "0",
         "user_id": "18624470",
         "text": "",
         "status": "auto_activated",
         "positive_vote_count": 0,
         "negative_vote_count": 0,
         "created": "2019-01-31 15:14:48",
         "changed": "2019-01-31 15:14:48",
         "mark": 5,
         "is_important": true,
         "record": {
             "id": "9392492",
             "title": "Большая кулинарная книга - (9785699501557)"
         },
         "is_reade": true,
         "children": [],
         "parent_id": 0,
         "seller_id": 0,
         "rating": "",
         "dignity": "",
         "shortcomings": "",
         "from_buyer": 0,
         "allow_html": 0,
         "has_children": false,
         "is_un_reade_child": false
     },
     "dispute": {
         "item_review_id": 48765495,
         "sellers_comment": "Тест",
         "reason_title": "Фейковий відгук",
         "status": 1,
         "created_at": "2021-07-01 13:57:17"
     },
}
```

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "id": 26761111,
      "record_id": 6309111,
      "name": "Гость",
      "email": "tinka3times@gmail.com",
      "parent_comment_id": 0,
      "user_id": "13374717",
      "text": "Книга замечательная! Мотивирует, написана интересно, читается легко, на одном дыхании.",
      "status": "auto_activated",
      "positive_vote_count": 0,
      "negative_vote_count": 0,
      "created": "2018-03-20 16:21:46",
      "changed": "2018-03-20 16:21:46",
      "mark": 5,
      "is_important": false,
      "record": {
          "id": "6309111",
          "title": "Кради как художник.10 уроков творческого самовыражения"
      },
      "is_reade": true,
      "children": [
          {
              "name": "«BL»",
              "id": 44815685,
              "text": "some_test SEO-анализ текста от Text.ru - это уникальный сервис, не имеющий аналогов. Возможность подсветки «воды», заспамленности и ключей в тексте позволяет сделать анализ текста интерактивным и легким для восприятияSEO-анализ текста от Text.ru - SEO-анализ текста от Text.ru - это уникальный сервис, не паорваповвофыафыафы",
              "status": "auto_activated",
              "created": "2020-01-14 16:50:10",
              "is_market": 1,
              "seller_id": null,
              "parent_id": 26761111
          },
          {
              "name": "«BL»",
              "id": 44815558,
              "text": "some_test",
              "status": "locked",
              "created": "2020-01-09 14:23:23",
              "is_market": 1,
              "seller_id": null,
              "parent_id": 26761111
          }
      ],
      "parent_id": 0,
      "seller_id": 0,
      "rating": "",
      "dignity": "Хорошая книга",
      "shortcomings": "",
      "from_buyer": 0,
      "allow_html": 0,
      "has_children": true,
      "is_un_reade_child": false,
      "item": {
          "id": 6309111,
          "name": "Кради как художник.10 уроков творческого самовыражения",
          "name_ua": null,
          "article": "",
          "price_offer_id": "97",
          "price": "365.00",
          "catalog_category": {
              "id": 4326656,
              "name": "Учебники",
              "parent_id": 4326572
          },
          "catalog_id": 4326656,
          "group_id": 5161915,
          "photo_preview": "https://rozetka.com.ua/goods/1401699/6309111_images_1401699135.jpg",
          "photo": [
              "https://rozetka.com.ua/goods/1401699/6309111_images_1401699135.jpg"
          ],
          "moderation_status": 0,
          "sla_id": 40,
          "url": "https://rozetka.com.ua/6309111/p6309111",
          "sold": 74,
          "uploader_offer_id": "97",
          "uploader_status": 4
      },
      "dispute": {
        "item_review_id": 48765495,
        "sellers_comment": "Тест",
        "reason_title": "Фейковий відгук",
        "status": 1,
        "created_at": "2021-07-01 13:57:17"
      },
  }
}
```

---

### 4 Позначити як прочитане (Відкрити коментар)

**put** `/item-comments/mark-as-read/{id}`

<p>Відкрити відгук і відмітити його як прочитаний.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID відгука</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: ItemComments } <br> <a href="#success-examples-ItemComments-PutItemCommentsMarkAsRead-0_0_0-0">Example</a></p>
- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
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
**ExtraField:**

- **itemComments.children** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChildItemCommentDetails">ChildItemComment</a></b>[] <br>Список дочірніх відгуків (відповідей у гілці відгуків)</p>
- **itemComments.attachments** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemCommentAttachment">ItemCommentAttachment</a>[]</b>, інформація про вкладення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
            "id":24075,
            "parent_id":null,
            "seller_id":null,
            "status":"auto_activated",
            "name":"Дмитрий",
            "text":"Добрий день, коли дана книга надійде в продаж?",
            "rating":0,
            "mark":5,
            "positive_vote_count":0,
            "negative_vote_count":0,
            "dignity":"",
            "shortcomings":"",
            "created":"2017-07-28 02:31:48",
            "changed":"2017-07-28 02:31:49",
            "is_reade":true,
            "is_important":false,
            "from_buyer":0,
            "allow_html":0,
            "record":{
                "id":"7732168",
                "title":"Японська мова в ситуаціях міжкультурного спілкування"
            },
            "is_un_reade_child":false
            "children":[
                0: {
                    "id":24098,
                    "parent_id":24075,
                    "seller_id":39,
                    "status":"active",
                    "name":"Читайка",
                    "text":"Добрий день, Дмитро,\n\nКнига йде під замовлення, термін очікування 1-1.5 тижні.\nПопередньо потрібно оформити замовлення на цю книгу.\n\nЗ повагою, \nОлена\nменеджер інтернет-магазину "Читайка"",
                    "rating":0,
                    "mark":5,
                    "positive_vote_count":0,
                    "negative_vote_count":0,
                    "dignity":"",
                    "shortcomings":"",
                    "created":"2017-07-28 09:22:49",
                    "changed":"2017-07-28 13:53:50",
                    "is_reade":true,
                    "is_important":false,
                    "from_buyer":0,
                    "allow_html":0,
                    "record":{
                        "id":"7732168",
                        "title":"Японська мова в ситуаціях міжкультурного спілкування"
                    },
                },...
            ],
            "item":{
                "id":7732168,
                "name":"Японська мова в ситуаціях міжкультурного спілкування",
                "name_ua":null,
                "article":"52261",
                "price":"185.00",
                "catalog_category":{
                    "id":4326656,
                    "name":"Учебники, научно-методическая литература",
                    "parent_id":4326572
                },
                "catalog_id":4326656,
                "group_id":null,
                "photo_preview":null,
                "photo":[],
                "moderation_status":0
            }
}}
```

---

### 7 Зміна стану коментарів

**post** `/item-comments/mass/{state}`

<p>Массова зміна стану коментарів. Дозваляє встановити виділеним коментарям стан &quot;Непрочитані&quot; та/або &quot;Важливі&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **state** `String` **_(обов'язково)_** - <p>Статус коменатрів. Можливі значення: <br> <i><code>unread</code></i> - &quot;Непрочитані&quot; <br> <i><code>important</code></i> - &quot;Важливі&quot; <br></p>

**Request Body Parameters:**

- **commentIds** `Array` **_(обов'язково)_** - <p>Масив, що складається з ID обраних коментарів</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
   HTTP/1.1 200 OK
{
    "success": true,
    "content": true
}
```

---

