# FeedbackController

### 2.1 Вибір теми при зверненні до підрозділу

**get** `/feedbacks/child-feedback-by-department`

<p>Отримання підрозділів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **parent_id** `Integer` **_(обов'язково)_** - <p>ID підрозділу</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Data** `Array` **_(обов'язково)_** - 
- **data.title_lang_ru** `String` **_(обов'язково)_** - <p>Тема звернення <br></p>
- **data.id** `Integer` **_(обов'язково)_** - <p>ID теми звернення</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": {
    "data": [
      {
        "title_lang_ru": "Сбои",
        "id": 102
      },
      {
        "title_lang_ru": "Логика работы",
        "id": 103
      }
    ]
  }
}
```

---

### 1 Отримання відділень

**get** `/feedbacks/get-contact-departments`

<p>Отримання відділень</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Data** `Array` **_(обов'язково)_** - 
- **data.id** `Integer` **_(обов'язково)_** - <p>ID відділення <br> <i>3 = відділ якості, 6 = відділ підтримки, 8 = технічна підтримка</i></p>
- **data.email** `String` **_(обов'язково)_** - <p>Пошта відділення</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": {
    "data": [
      {
        "id": 3,
        "email": "some_mail@rozetka.com.ua"
      },
      {
        "id": 6,
        "email": "some_mail@rozetka.com.ua"
      },
      {
        "id": 8,
        "email": "some_mail@rozetka.com.ua"
      }
    ]
  }
}
```

---

### 2.2 Список підказок до теми звернення

**get** `/feedbacks/theme-hints`

<p>Список підказок до теми звернення</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **theme_id** `Integer` **_(обов'язково)_** - <p>ID теми</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **hints** `FeedbackThemeHintModel[]` **_(обов'язково)_** - <p>Список підказок</p>
- **FeedbackThemeHint** `Object` **_(обов'язково)_** - <p>Підказка до теми звернення</p>
- **FeedbackThemeHint.link** `String` **_(обов'язково)_** - <p>Посилання на статтю</p>
- **FeedbackThemeHint.title** `String` **_(обов'язково)_** - <p>Заголовок обраною мовою</p>
- **FeedbackThemeHint.description** `String` **_(обов'язково)_** - <p>Опис обраною мовою</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content":{
     "hints":[
         {
             "link": "http://url",
             "title": "Назва підказки",
             "description": "Опис підказки"
         }
     ]
 }
}
```

---

### 2 Отримання підрозділів

**get** `/feedbacks/parent-feedback-by-department`

<p>Отримання підрозділів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **department_id** `Integer` _(опціонально)_ - <p>ID Відділення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Data** `Array` **_(обов'язково)_** - 
- **data.title_lang_ru** `String` **_(обов'язково)_** - <p>Назва підрозділу <br> <i>title_lang_uk, title_lang_title_lang_en, title_lang_ru</i></p>
- **data.id** `Integer` **_(обов'язково)_** - <p>ID підрозділу</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": {
    "data": [
      {
        "title_lang_ru": "Обслуживание заказов",
        "id": 58
      },
      {
        "title_lang_ru": "Жалобы по заказу",
        "id": 59
      },
      {
        "title_lang_ru": "Вопросы о доставке",
        "id": 176
      },
      {
        "title_lang_ru": "Вопросы по отзыву о товаре / магазину. Рейтинг.",
        "id": 177
      }
    ]
  }
}
```

---

### 3 Список батьківських та дочірніх тем

**get** `/feedbacks/search-themes`

<p>Отримання батьківських та дочірніх тем з фільтрацією по відділах та ID<br> Замінює наступні ендпоінти:<br></p> <ul> <li><a href="#api-FeedbackController-GetParentFeedbackByDepartment">31.2 Отримання підрозділів</a></li> <li><a href="#api-FeedbackController-GetChildFeedbackByDepartment">31.2.1 Вибір теми при зверненні до підрозділу</a></li> <li><a href="#api-FeedbackController-GetFeedbackThemeHint">31.2.2 Список підказок до теми звернення</a></li> </ul><br> <code>За замовчуванням</code> повертає батьківські теми верхнього рівня, з усіма дочірніми другого рівня і т.д.<br> <code>Фільтр з id</code> працює для теми будь-якого рівня

**Версія:** 0.0.0

#### Параметри запиту

**Request URL Parameters:**

- **department_id** `Integer` _(опціонально)_ - <p>ID відділу</p>
- **id** `Integer` _(опціонально)_ - <p>ID теми</p>
- **sort** `String` _(опціонально)_ - 

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **FeedbackTheme** `Object` **_(обов'язково)_** - <p>Тема звернення</p>
- **FeedbackTheme.id** `Integer` **_(обов'язково)_** - <p>ID теми</p>
- **FeedbackTheme.title** `String` **_(обов'язково)_** - <p>Тема обраною мовою</p>
- **FeedbackTheme.hints** `FeedbackHintModel[]` **_(обов'язково)_** - <p>Список підказок до теми, об'єкти <a href="#api-Models-FeedbackThemeHint">Підказка до теми звернення</a></p>
- **FeedbackTheme.children** `Array[]` **_(обов'язково)_** - <p>Список дочірніх тем, об'єкти <a href="#api-Models-FeedbackTheme">Тема звернення</a></p>
- **FeedbackThemeHint** `Object` **_(обов'язково)_** - <p>Підказка до теми звернення</p>
- **FeedbackThemeHint.link** `String` **_(обов'язково)_** - <p>Посилання на статтю</p>
- **FeedbackThemeHint.title** `String` **_(обов'язково)_** - <p>Заголовок обраною мовою</p>
- **FeedbackThemeHint.description** `String` **_(обов'язково)_** - <p>Опис обраною мовою</p>
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
     "themes":[{
         "id": 80,
         "title": "Документообіг",
         "hints":[],
         "children": [
             {"id": 81, "title": "Зміна юридичної особи", "hints":[], "children":[]…},
             {
                 "id": 82,
                 "title": "Розірвання договору",
                 "hints": [
                     {
                         "link": "http://url",
                         "title": "Назва підказки",
                         "description": "Опис підказки"
                     }
                 ]
             },
             {"id": 83, "title": "Зміна адреси для кореспонденції", "hints":[], "children":[]…},
             {"id": 84, "title": "Зміна назви та (або) логотипу", "hints":[], "children":[]…}
         ]
     }],
     "_meta":{"totalCount": 1, "pageCount": 1, "currentPage": 1, "perPage": 20}
}
```

---

### 7 Оцінити тікет з розділу Переписка з ROZETKA

**post** `/feedbacks/create-opinion`

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **feedback_id** `Integer` **_(обов'язково)_** - <p>Id тікета</p>
- **opinion_result** `Integer` **_(обов'язково)_** - <p>Оцінка тікету (1-добре, 2-погано)</p>
- **opinion_comment** `String` _(опціонально)_ - <p>Коментар до оцінки тікету</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "status": true,
  }
}
```

---

### 6 Отримання подробиць тікету

**get** `/feedbacks/{id}`

<p>Отримання подробиць тікету</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ID** `Integer` **_(обов'язково)_** - <p>тікету (унікальний ID)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
- **Feedback** `Object` **_(обов'язково)_** - <p>FeedbackModel</p>
- **feedback.id** `Integer` **_(обов'язково)_** - <p>ID тікета</p>
- **feedback.text** `Text` **_(обов'язково)_** - <p>Текст тікета</p>
- **feedback.files** `String` **_(обов'язково)_** - <p>Файли, які додано до повідомлення</p>
- **feedback.countFiles** `String` **_(обов'язково)_** - <p>Кількість файлів</p>
- **feedback.is_from_zendesk** `String` **_(обов'язково)_** - <p>Тікет с Zendesk чи ні</p>
- **feedback.ticket_created** `String` **_(обов'язково)_** - <p>Дата та час створення тікету</p>
- **feedback.date_status_changed** `String` **_(обов'язково)_** - <p>Дата зміни статусу тікету</p>
- **feedback.status_details** `Object` **_(обов'язково)_** - <p>Деталі статусу тікету</p>
- **feedback.status_details.id** `String` **_(обов'язково)_** - <p>ID статусу</p>
- **feedback.status_details.name** `String` **_(обов'язково)_** - <p>Назва статусу</p>
- **feedback.status_details.color** `String` **_(обов'язково)_** - <p>Колір статусу</p>
- **feedback.status** `String` **_(обов'язково)_** - <p><code>Deprecated</code>: Статус <ul></p> <li>new - Новий</li> <li>open - Відкритий</li> <li>pending - В режимі очікування</li> <li>hold - На утримані</li> <li>solved - Вирішений</li> <li>closed - Закритий</li> </ul>
- **feedback.status_color** `Array` **_(обов'язково)_** - <p><code>Deprecated</code>: Колір статуса <ul></p> <li>F2B500 (помаранчевий)- new</li> <li>31A3DB (блакитний) - open</li> <li>31A3DB (блакитний) - pending</li> <li>777575 (сірий) - hold</li> <li>00A046 (зелений) - solved</li> <li>00A046 (зелений) - closed</li> </ul>
- **feedback.fio** `String` **_(обов'язково)_** - <p>ПІБ продавця</p>
- **feedback.theme** `String` **_(обов'язково)_** - <p>Підтема</p>
- **feedback.parent_theme** `String` **_(обов'язково)_** - <p>Тема</p>
- **feedback.read** `Boolean` **_(обов'язково)_** - <p>Чи є непрочитані повідомлення в рамках тікету</p>
- **feedback.available_for_opinion** `Boolean` **_(обов'язково)_** - <p>Ознака того, що тікет доступний для оцінки</p>
- **feedback.opinion_ready** `Boolean` **_(обов'язково)_** - <p>Ознака того, що тікет оцінений</p>
- **feedback.opinion_result** `Integer` **_(обов'язково)_** - <p>Оцінка тікету (1-добре, 2-погано)</p>
- **feedback.seller** `Object` **_(обов'язково)_** - <p>Продавець (автор тікета), <b><a href="#api-Models-SellerDetails">Seller</a></p>
- **feedback.comments** `Object` **_(обов'язково)_** - <p>Коментарі, <b><a href="#api-Models-FeedbackCommentsDetails">Comments</a></p>
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
- **FeedbackComments** `Object` **_(обов'язково)_** - <p>FeedbackCommentsModel</p>
- **feedback_comments.id** `Integer` **_(обов'язково)_** - <p>ID коментаря</p>
- **feedback_comments.comment** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **feedback_comments.files** `String` **_(обов'язково)_** - <p>Файли, які додано до повідомлення</p>
- **feedback_comments.created_at** `String` **_(обов'язково)_** - <p>Дата та час створення коментаря</p>
- **feedback_comments.isRead** `Boolean` **_(обов'язково)_** - <p>Ознака прочитаного коментаря</p>
- **feedback_comments.seller** `Object` **_(обов'язково)_** - <p>Продавець (автор коментаря), <b><a href="#api-Models-SellerDetails">Seller</a></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "id": 238405,
      "text": "Test 1",
      "files": "",
      "seller": {
          "id": 18809,
          "login": "Budanov",
          "status": 0,
           "skype": "testSkype",
          "fio": "Буданов Виталий",
          "email": "testing.rozetka+18809@gmail.com",
          "agent_id": null,
          "lang": "ru",
          "seller_roles": [
              {
                  "name": "default_admin",
                  "type": 1,
                  "description": "Администратор",
                  "rule_name": null,
                  "data": null,
                  "created_at": 1486413514,
                  "updated_at": null
              },
              {
                 "name": "promo_analytics",
                  "type": 1,
                  "description": "promo_analytics",
                  "rule_name": null,
                  "data": null,
                  "created_at": null,
                  "updated_at": null
              },
              {
                  "name": "item_analytics",
                  "type": 2,
                  "description": "item_analytics",
                  "rule_name": null,
                  "data": null,
                  "created_at": null,
                  "updated_at": null
              }
          ],
          "seller_phones": [
              {
                  "id": 37051,
                  "phone_number": "+380954954372",
                  "confirmed": false
              }
          ],
          "notify_phone": true,
          "notify_email": true
      },
      "status": "hold",
      "comments": [
          {
              "id": 20,
              "comment": "test8",
              "seller": {
                  "id": 18809,
                  "login": "Budanov",
                  "status": 0,
                  "skype": "testSkype",
                  "fio": "Буданов Виталий",
                  "email": "testing.rozetka+18809@gmail.com",
                  "agent_id": null,
                  "lang": "ru",
                  "seller_roles": [
                      {
                          "name": "default_admin",
                          "type": 1,
                          "description": "Администратор",
                          "rule_name": null,
                          "data": null,
                          "created_at": 1486413514,
                          "updated_at": null
                      },
                      {
                          "name": "promo_analytics",
                          "type": 1,
                          "description": "promo_analytics",
                          "rule_name": null,
                          "data": null,
                          "created_at": null,
                          "updated_at": null
                      },
                      {
                          "name": "item_analytics",
                          "type": 2,
                          "description": "item_analytics",
                          "rule_name": null,
                          "data": null,
                          "created_at": null,
                          "updated_at": null
                      }
                  ],
                  "seller_phones": [
                      {
                          "id": 37051,
                          "phone_number": "+380954954372",
                          "confirmed": false
                      }
                  ],
                  "notify_phone": true,
                  "notify_email": true
              },
              "files": null,
              "created_at": "2021-08-25 14:52:03"
          }
      ],
      "fio": "Буданов Виталий",
      "created_at": "2021-08-13 13:24:39",
      "updated_at": "2021-08-25 14:41:05",
      "theme": "Промоактивности",
      "parent_theme": "Акции, реклама"
  }
}
```

---

### 5 Отримання інформації про продавця

**get** `/markets/{id}`

<p>Отримання інформації про продавця</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>Extrafields (manager_fio,department,is_show_support)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

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

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
  "success": true,
  "content": {
    "test_market": 0,
    "logo": "",
    "title": "MarketTitle",
    "market_url": "https://rozetka.com.ua/seller/name",
    "business_model": "b2c",
    "market_requisite": {
      "type": 2,
      "name": "TESTER",
      "inn": "1123456789097654",
      "okpo": "545232345",
      "mfo": null,
      "score": "123456789097654",
      "bank_name": "",
      "juridical_address": "03022, Київська обл., Київ,Тестова, 14",
      "physical_address": "03022, Київська обл., Київ, Тестова, 7",
      "seller_can_edit": true
    },
    "updated": "2020-08-12 18:03:18.811907",
    "use_api": false,
    "sms_template_id": 1,
    "check_stock": false,
    "edit_timetable": true,
    "combination_owox_parent_id": 183944,
    "email": "test.@gmail.com",
    "manager_fio": {
      "uk": "Олександр (2835)",
      "ru": "Александр (2835)",
      "en": "Alexandr (2835)",
      "phone": "",
      "email": ""
    },
    "department": {
      "id": 6,
      "name": "Отдел поддержки"
    },
    "is_show_support": true
  }
}
```

---

### 4 Відправлення форми для зворотного зв'язку

**post** `/feedbacks/save-form`

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **language** `String` **_(обов'язково)_** - <p>Мова звернення (uk, en, ru)</p>
- **theme** `Integer` **_(обов'язково)_** - <p>ID теми звернення</p>
- **text** `String` **_(обов'язково)_** - <p>Текст звернення</p>
- **files** `Array` **_(обов'язково)_** - <p>Прикріплені файли <br><i>Allowed values 'jpg','png','doc','docx','pdf','xls','xlsx','zip','xml','mp3','wma','ogg','m4a','aac'</i> <br><i>Allowed size 10 MB</i></p>
- **files.clientFilename** `String` **_(обов'язково)_** - <p>Назва файлу <br></p>
- **files.data** `String` **_(обов'язково)_** - <p>Файл, зашифрований в base64 рядок <br><i>перед строкою конкатенувати mime тип файлу</i></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
   HTTP/1.1 200 OK
{
   "success":true,
   "content":true
}
```

---

