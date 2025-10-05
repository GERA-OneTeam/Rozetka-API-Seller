# Sellers

### 1.1 Створення менеджера

**post** `/sellers`

<p>Create Seller</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **seller.id** `Null` **_(обов'язково)_** - <p>ID</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова (ru, uk, en)</p>
- **seller.seller_roles** `Object` **_(обов'язково)_** - <p>Cписок ролей менеджера. <br>Ключі списку повинні відповідати <i>default_admin, default_content, default_finance, default_orders</i><br> Значення - тільки <b>boolean</b></p>
- **seller.seller_phones** `Object[]` _(опціонально)_ - <p>SellerPhone[], список телефонів менеджера</p>
- **seller.seller_phones.id** `String` **_(обов'язково)_** - <p>ID нового телефону, має приходити порожнім рядком або ж не вказувати цей ключ.</p>
- **seller.seller_phones.phone_number** `String` **_(обов'язково)_** - <p>Номер телефона</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 6584,
        "login": "test1111",
        "status": 0,
        "skype": null,
        "fio": "wadwf",
        "email": "jkh1j@kjnh.ru",
        "agent_id": null,
        "lang": "uk",
        "seller_roles": [
            {
                "name": "default_content",
                "type": 1,
                "description": "Контент менеджер"
            }
        ],
        "seller_phones": [
            {
                "id": 4356,
                "phone_number": "+380111111111",
                "confirmed": false
            }
        ],
        "notify_phone": false,
        "notify_email": true
    }
}
```

---

### 1.1 Створення менеджера

**post** `/sellers`

<p>Create Seller</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова (ru, uk, en)</p>
- **seller.seller_roles** `Object` **_(обов'язково)_** - <p>Cписок ролей менеджера. <br>Ключі списку повинні відповідати <i>default_admin, default_content, default_finance, default_orders</i><br> Значення - тільки <b>boolean</b></p>
- **seller.seller_phones** `Object[]` _(опціонально)_ - <p>SellerPhone[], список телефонів менеджера</p>
- **seller.seller_phones.id** `String` **_(обов'язково)_** - <p>ID нового телефону, має приходити порожнім рядком або ж не вказувати цей ключ.</p>
- **seller.seller_phones.phone_number** `String` **_(обов'язково)_** - <p>Номер телефону</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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
      "content":{
          "id":2829,
          "login":"New1",
          "status":0,
          "skype":null,
          "fio":"Новый",
          "email":"new1@new.ww1",
          "lang":"ru",
          "seller_roles":[
              {
              "name":"default_admin",
              "type":1,
              "description":"Администратор",
              "rule_name":null,
              "data":null,
              "created_at":1485507523,
              "updated_at":null
              }
          ],
          "seller_phones":[
              {
              "id":1173,
              "seller_id":2829,
              "phone_number":"+380123123123",
              "confirmed":null
              }
          ],
          "notifyPhone":null,
          "notifyEmail":true,
      }
  }
```

---

### 1.2 Видалення менеджера

**delete** `/sellers/{id}`

<p>Delete Seller</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>

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

### 4 Перелік доступних ролей менеджера

**get** `/roles/search`

<p>Перелік доступних ролей менеджера</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **sellerRbacAuthItems** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів <b><a href="#api-Models-SellerRolesDetails">SellerRolesModel</a></b></p>
- **SellerRoles** `Object` **_(обов'язково)_** - <p>SellerRolesModel</p>
- **seller_rbac_auth_item.name** `String` **_(обов'язково)_** - <p>Назва ролі</p>
- **seller_rbac_auth_item.type** `Integer` **_(обов'язково)_** - <p>Тип (1 - роль, 2 - permission)</p>
- **seller_rbac_auth_item.description** `Text` **_(обов'язково)_** - <p>Опис ролі</p>
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
     "sellerRbacAuthItems":[
         {"name": "default_admin", "type": 1, "description": "Администратор"},
         {"name": "default_content", "type": 1, "description": "Контент менеджер"},
         {"name": "default_finance", "type": 1, "description": "Менеджер по финансам"},
         {"name": "default_orders", "type": 1, "description": "Менеджер по обработке заказов"}
     ],
     "_meta":{
         "totalCount": 4,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 0
     }
 }
}
```

---

### 1.3 Інформація про менеджера

**get** `/sellers/{id}`

<p>Інформація про менеджера магазину</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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
**ExtraFields:**

- **seller.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b></p>
- **seller.agent** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-AgentDetails">AgentModel</a></b></p>
- **seller.time_table** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-TimeTableDetails">TimeTableModel</a></b></p>
- **seller.time_table_excluded_dates** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-TimetableExcludedDatesDetails">TimetableExcludedDatesModel</a></b></p>
- **seller.permissions** `Array[]` **_(обов'язково)_** - <p>список дозволів менеджера</p>
- **seller.personal_cabinet_settings** `Object` **_(обов'язково)_** - <p>налаштування особистого кабінету</p>
- **seller.seller_roles_feedback** `SellerRoles[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerRolesDetails">SellerRoles</a></b>[], список ролей менеджера для управління доступами до звернень</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
          "success":true,
          "content":{
              "id":39,
              "login":"test",
              "status":5,
              "skype":"testskype",
              "fio":"Иванов Иван Иванович",
              "email":"test@google.com",
              "agent_id": null,
              "lang":"uk",
              "seller_roles":[
                  {
                  "name":"default_owner",
                  "type":1,
                  "description":"Владелец"
                  }
              ],
              "seller_phones":[
                  {
                  "id":144,
                  "phone_number":"+380115414141",
                  "confirmed":false
                  }
              ],
              "notifyPhone":true,
              "notifyEmail":true,
              "two_step_auth": true
         }
}
```

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "id": 39,
      "login": "test login",
      "status": 0,
      "skype": "test skype",
      "fio": "Oleksii",
      "email": "testemail@gmail.com",
      "agent_id": null,
      "lang": "uk",
      "seller_roles": [
          {
              "name": "default_admin",
              "type": 1,
              "description": "Администратор"
          }
      ],
      "seller_phones": [
          {
              "id": 18038,
              "phone_number": "+3805412547854",
              "confirmed": false
          }
      ],
      "notify_phone": true,
      "notify_email": true,
      "two_step_auth": true,
      "market": {
          "test_market": 0,
          "logo": "https://rozetka.com.ua/sellers/1351/1351032.jpg",
          "title": "Test title",
          "business_model": "b2c",
          "market_requisite": {
              "type": 2,
              "name": "Стеценко Наталія Олександрівна",
              "inn": "7447874477",
              "okpo": "7447874477",
              "mfo": "7447874477",
              "score": "7447874477",
              "bank_name": "Название банка",
              "juridical_address": "тестовый адрес",
              "physical_address": "wqe123rf",
              "seller_can_edit": false
          },
          "updated": "2020-01-20 16:44:20.458677",
          "use_api": false,
          "sms_template_id": 1,
          "check_stock": false,
          "edit_timetable": true,
          "combination_owox_parent_id": 484,
          "email": "testing.rozetka@gmail.com",
          "feedback_auto_req": false
      },
      "agent": [],
      "time_table": [
          {
              "id": 3905,
              "is_day_off": false,
              "day_of_week": 1,
              "time_start": "09:00:00",
              "time_end": "14:00:00",
              "created_at": "2019-02-06 15:30:06",
              "day_start": null,
              "day_end": null,
              "type": 0,
              "updated_at": "2020-01-20 15:04:25"
          }
      ],
      "time_table_excluded_dates": [
          {
              "id": 3802,
              "comment_en": "Women's Day",
              "comment_ru": "Международный Женский День",
              "comment_uk": "Міжнародний Жіночий День",
              "date_end": "2019-03-08",
              "date_start": "2019-03-08",
              "is_default": true,
              "is_active": 1
          }
      ],
      "permissions": [
          "order_edit",
          "correspondence",
          "questions",
          "account_edit",
          "goods_active",
          "goods_not_active",
          "goods_synchronization",
          "balance",
          "market_requisite_read_only",
          "market_requisite_edit"
      ]
  }
}
```

---

### 1.3 Інформація про менеджера

**get** `/sellers/{id}`

<p>Інформація про менеджера магазину</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **Number**  **_(обов'язково)_** - <p>} id ID менеджера</p>
- **String**  **_(обов'язково)_** - <p>[expand] ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":4567,
        "login":"Salaka",
        "status":5,
        "skype":"nori.s",
        "fio":"Иванов Иван Иванович",
        "email":"test@google.com",
        "lang":"uk",
        "seller_roles":[
            {
            "name":"default_owner",
            "type":1,
            "description":"Владелец",
            "rule_name":null,
            "data":null,
            "created_at":1485507523,
            "updated_at":null
            }
        ],
        "seller_phones":[
            {
            "id":144,
            "seller_id":1086,
            "phone_number":"+380112151214",
            "confirmed":false
            }
        ],
        "notifyPhone":true,
        "notifyEmail":true,
    }
}
```

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":4567,
        "login":"Salaka",
        "status":5,
        "skype":"nori.s",
        "fio":"Иванов Иван Иванович",
        "email":"test@google.com",
        "lang":"uk",
        "seller_roles":[
            {
            "name":"default_owner",
            "type":1,
            "description":"Владелец",
            "rule_name":null,
            "data":null,
            "created_at":1485507523,
            "updated_at":null
            }
        ],
        "seller_phones":[
            {
            "id":144,
            "seller_id":1086,
            "phone_number":"+380999999999",
            "confirmed":false
            }
        ],
        "notifyPhone":true,
        "notifyEmail":true,
        "market":{
           "test_market":0,
           "logo":"http://rozetka.com.ua/sellers/9/0000001.jpg",
           "title":"TestMarket",
           "business_model":"b2c",
           "market_requisite":{
                 "type":2,
                 "name":"Ivan",
                 "inn":"18722...",
                 "okpo":"",
                 "mfo":"300....",
                 "score":"260.....",
                 "bank_name":"ПАТ "...",  м. Київ",
                 "juridical_address":"04114, Україна, м. Київ, вул. Авто...",
                 "physical_address":null
           },
           "updated":"2017-12-06 16:47:37.778379",
           "use_api":false,
           "sms_template_id":1,
           "check_stock":false
        }
    }
}
```

---

### 1.4 Пошук менеджера

**get** `/sellers/search`

<p>У видачі без параметрів список всіх менеджерів магазину.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>фільтр по id менеджера</p>
- **fio** `String` _(опціонально)_ - <p>фільтр по ПІБ менеджера</p>
- **email** `String` _(опціонально)_ - <p>фільтр по email менеджера</p>
- **not_in** `String` _(опціонально)_ - <p>ID менеджера. <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>not_in=1,25</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **sellers** `Object[]` **_(обов'язково)_** - <p>SellerModel[]</p>
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
  "sellers": [
         {
             "id": 3345,
             "login": "login",
             "status": 0,
             "skype": "testskype"
             "fio": "Коваленко ",
             "email": "test@gmail.com",
             "agent_id": null,
             "lang": "ru",
             "seller_roles": [
                 {
                     "name": "default_finance",
                     "type": 1,
                     "description": "Менеджер по финансам",
                     "rule_name": null,
                     "data": null,
                     "created_at": 1486413514,
                     "updated_at": null
                 },
             ],
             "seller_phones": [
                 {
                     "id": 1650,
                     "phone_number": "+380111234567",
                     "confirmed": false
                 }
             ],
             "notify_phone": false,
             "notify_email": true
         }
     ],
     "_meta": {
         "totalCount": 2,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 20
      }
   }
}
```

---

### 5.1 Логи зміни статусів магазину

**get** `/market/status-history`

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc).</p>

**Request Url Parameters:**

- **status** `Integer` _(опціонально)_ - <p>Статус магазину</p>
- **created_from** `String` _(опціонально)_ - <p>Дата зміни статусу магазину: від</p>
- **created_to** `String` _(опціонально)_ - <p>Дата зміни статусу магазину: до</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;historyStatusMarkets&quot;: historyStatusMarket[], &quot;_meta&quot;: MetaResponse }</p>
**historyStatusMarket:**

- **status** `String` **_(обов'язково)_** - <p>ID статусу</p>
- **change_reason** `String` **_(обов'язково)_** - <p>причина зміни статусу <br></p>
- **created** `String` **_(обов'язково)_** - <p>Дата зміни статусу в форматі Y-m-d H:i:s</p>
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
        "historyStatusMarkets": [
            {
                "status": 6,
                "change_reason": "За нарушение правил работы",
                "created": "2020-10-07 12:30:07"
            },
            {
                "status": 2,
                "change_reason": "-",
                "created": "2020-10-07 12:29:53"
            },
            {
                "status": 6,
                "change_reason": "-",
                "created": "2020-10-07 12:24:56"
            },
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

### 5.2 Отримання статусу магазину

**get** `/balances/status`

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **content** `Integer` **_(обов'язково)_** - <p><a href="#api-Models-MarketStatusesList">Статус магазину</a></p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
    "success": true,
    "content": 6
}
```

---

### 6.1 Двостадійна оплата

**put** `/markets/auto-hold`

<p><a href="#api-MarketPaymentMethods-SetAutoHoldMarketPaymentMethod">Актуальний метод</a></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>
- **saved** `Boolean` **_(обов'язково)_** - <p>Результат виконання операції</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
         "saved":true
    }
}
```

---

### 8 Отримання каунтерів магазину

**get** `/markets/{id}/market-counters`

<p>Отримання каунтерів магазину</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Market ID</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>
- **Sellers.balance** `String` **_(обов'язково)_** - <p>Баланс магазину</p>
- **Sellers.new_orders** `Integer` **_(обов'язково)_** - <p>Кількість нових замовлень</p>
- **Sellers.amount** `String` **_(обов'язково)_** - <p>Загальна вартість нових замовлень</p>
- **Sellers.order_chat** `Integer` **_(обов'язково)_** - <p>Кількість повідомлень про замовлення</p>
- **Sellers.item_chat** `Integer` **_(обов'язково)_** - <p>Кількість повідомлень про товари</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":{
         "balance": "18179.64",
         "new_orders": 52,
         "new_amount": "30324.00",
         "order_chat": 12,
         "item_chat": 3
     }
}
```

---

### 6.2 Отримати статус двостадійної оплати

**get** `/markets/auto-hold`

<p><a href="#api-MarketPaymentMethods-ViewMarketPaymentMethod">Актуальний метод</a></p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>
- **hold** `Boolean` **_(обов'язково)_** - <p>Статус двостадійної оплати</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
         "hold":true
    }
}
```

---

### 2.1 Отримати внутрішній рейтинг магазину

**get** `/markets/{id}/internal-rating`

<p>Рейтинг магазину</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID продавця в системі Розетка Маркетплейс.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>
- **InternalRating.type** `String` **_(обов'язково)_** - <p>Тип рейтингу: all -&gt; за весь час; 30_days -&gt; 30 днів; 180_days -&gt; за 180 днів</p>
- **InternalRating.positive_reviews** `Number` **_(обов'язково)_** - <p>Зовнішній рейтинг в %</p>
- **InternalRating.stars** `Number` **_(обов'язково)_** - <p>Зовнішній рейтинг в зірках</p>
- **InternalRating.internal_rating** `Number` **_(обов'язково)_** - <p>Зовнішній рейтинг</p>
- **InternalRating.rate_good_s** `Number` **_(обов'язково)_** - <p>Позитивні відгуки про магазин в %</p>
- **InternalRating.user_feedback_perc** `Number` **_(обов'язково)_** - <p>Відсоток негативних відгуків від користувачів</p>
- **InternalRating.count_feedbacks** `Integer|null` **_(обов'язково)_** - <p>Кількість зворотного зв'язку від клієнта за типами</p>
- **InternalRating.all_orders** `Integer|null` **_(обов'язково)_** - <p>Всього замовлень</p>
- **InternalRating.done_orders** `Integer|null` **_(обов'язково)_** - <p>Кількість успішно виконаних замовлень</p>
- **InternalRating.review_orders** `Integer|null` **_(обов'язково)_** - <p>Кількість відновлених замовлень</p>
- **InternalRating.broken_orders** `Integer|null` **_(обов'язково)_** - <p>Кількість скасованих замовлень</p>
- **InternalRating.restored_orders_rate** `Number` **_(обов'язково)_** - <p>Частка відновлених замовлень</p>
- **InternalRating.cancelled_orders_rate** `Number` **_(обов'язково)_** - <p>Частка скасованих замовлень</p>
- **InternalRating.avg_diff_1_26_minutes** `Number` **_(обов'язково)_** - <p>Середній час взяття в роботу замовлення з урахуванням графіка роботи магазину</p>
- **InternalRating.avg_diff_1_6_minutes** `Number` **_(обов'язково)_** - <p>Середній час виконання замовлення з урахуванням графіка роботи магазину</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "all": {
           "type": "all",
           "positive_reviews": 0.89,
           "stars": 47,
           "internal_rating": 60,
           "rate_good_s": 1,
           "user_feedback_perc": 0.02703,
           "count_feedbacks": 1,
           "all_orders": 37,
           "done_orders": 16,
           "broken_orders": 17,
           "review_orders": 0,
           "cancelled_orders_rate": 0.46,
           "restored_orders_rate": 0,
           "avg_diff_1_26_minutes": 40.7,
           "avg_diff_1_6_minutes": 1856
       },
       "30_days": {
           "type": "30_days",
           "positive_reviews": 0,
           "stars": 0,
           "internal_rating": 50,
           "rate_good_s": 0,
           "user_feedback_perc": 0,
           "count_feedbacks": 0,
           "all_orders": 0,
           "done_orders": 0,
           "broken_orders": 0,
           "review_orders": 0,
           "cancelled_orders_rate": null,
           "restored_orders_rate": null,
           "avg_diff_1_26_minutes": null,
           "avg_diff_1_6_minutes": null
       },
       "180_days": {
           "type": "180_days",
           "positive_reviews": 0,
           "stars": 0,
           "internal_rating": 20,
           "rate_good_s": 1,
           "user_feedback_perc": 0,
           "count_feedbacks": 0,
           "all_orders": 13,
           "done_orders": 6,
           "broken_orders": 6,
           "review_orders": 0,
           "cancelled_orders_rate": 0.46,
           "restored_orders_rate": 0,
           "avg_diff_1_26_minutes": 50.8,
           "avg_diff_1_6_minutes": 2265
       }
   }
}
```

---

### 3.2 Отримати платіжний ідентифікатор

**get** `/markets/payment-identifier`

<p>Отримати платіжний ідентифікатор</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>
- **oc_entity_id** `String` **_(обов'язково)_** - <p>Платіжний ідентифікатор</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
         "oc_entity_id": "qwertyqwertyqwertyqwertyqwertyqwerty"
    }
}
```

---

### 3.1 Зберегти платіжний ідентифікатор

**post** `/markets/payment-identifier`

<p>Зберегти платіжний ідентифікатор</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **oc_entity_id** `String` **_(обов'язково)_** - <p>Платіжний ідентифікатор</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Object }</p>
- **oc_entity_id** `String` **_(обов'язково)_** - <p>Платіжний ідентифікатор</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
         "oc_entity_id": "qwertyqwertyqwertyqwertyqwertyqwerty"
    }
}
```

---

### 2.2 Отримати зовнішній рейтинг магазину

**get** `/markets/seller-rating`

<p>Зовнішній рейтинг магазину (Seller Service)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **type** `String` _(опціонально)_ - <p>Фільтр по періоду (30 днів, 180 днів, весь час)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Market.stars** `Float` **_(обов'язково)_** - <p>Зовнішній рейнінг продавця (від 0 до 5)</p>
- **Market.mark_all_cnt** `Number` **_(обов'язково)_** - <p>Загальна кількість оцінок по зовнішньому рейтингу</p>
- **Market.mark_excellent_cnt** `Number` **_(обов'язково)_** - <p>Кількість оцінок користувачів які поставили 5 зірок</p>
- **Market.mark_good_cnt** `Number` **_(обов'язково)_** - <p>Кількість оцінок користувачів які поставили 4 зірки</p>
- **Market.mark_middle_cnt** `Number` **_(обов'язково)_** - <p>Кількість оцінок користувачів які поставили 3 зірки</p>
- **Market.mark_bad_cnt** `Number` **_(обов'язково)_** - <p>Кількість оцінок користувачів які поставили 2 зірки</p>
- **Market.mark_worst_cnt** `Number` **_(обов'язково)_** - <p>Кількість оцінок користувачів які поставили 1 зірку</p>
- **Market.manager_avg_stars** `Json` **_(обов'язково)_** - <p>Оцінка якості обслуговування<br></p> <pre> {<br>     30_days: {Float} Оцінка за 30 днів (від 0 до 5), <br>     180_days: {Float} Оцінка за пів року (від 0 до 5),<br>     all: {Float} Оцінка за весь час (від 0 до 5),<br> } </pre>
- **Market.convenience_avg_stars** `Json` **_(обов'язково)_** - <p>Оцінка Актуальність ціни і наявності<br></p> <pre> {<br>     30_days: {Float} Оцінка за 30 днів (від 0 до 5), <br>     180_days: {Float} Оцінка за пів року (від 0 до 5),<br>     all: {Float} Оцінка за весь час (від 0 до 5),<br> } </pre>
- **Market.delivery_avg_stars** `Json` **_(обов'язково)_** - <p>Оцінка швидкості доставки<br></p> <pre> {<br>     30_days: {Float} Оцінка за 30 днів (від 0 до 5), <br>     180_days: {Float} Оцінка за пів року (від 0 до 5),<br>     all: {Float} Оцінка за весь час (від 0 до 5),<br> } </pre>
- **Market.user_feedback_perc** `Float` **_(обов'язково)_** - <p>Відсоток скарг в замовленнях (приклад: 0.002)</p>
- **Market.avg_diff_order_call** `Float` **_(обов'язково)_** - <p>Середній час дзвінка по замовленню в хвилинах</p>
- **Market.avg_diff_delivery_time** `Float` **_(обов'язково)_** - <p>Середня швидкість доставки замовлення в хвилинах</p>
- **Market.date_activation** `int` **_(обов'язково)_** - <p>Дата активації магазину</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
  "success": true,
  "content": {
    "stars": 43,
    "mark_all_cnt": 0,
    "mark_excellent_cnt": 0,
    "mark_good_cnt": 0,
    "mark_middle_cnt": 0,
    "mark_bad_cnt": 0,
    "mark_worst_cnt": 0,
    "manager_avg_stars": {
      "30_days": 0,
      "180_days": 0,
      "all": 0
    },
    "convenience_avg_stars": {
      "30_days": 0,
      "180_days": 0,
      "all": 0
    },
    "delivery_avg_stars": {
      "30_days": 0,
      "180_days": 0,
      "all": 0
    },
    "user_feedback_perc": 0.002,
    "avg_diff_order_call": 163,
    "avg_diff_delivery_time": 8758.6,
    "date_activation": 1486405982
  }
}
```

---

### 5.3 Розблокувати магазин

**post** `/markets/unblock`

<p>Розблокувати магазин</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": true
}
```

---

### 9 Редагувати особисту інформацію

**put** `/sellers/{id}/update-self`

<p>Update Self Info</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail<br><b>Для ролі default_owner недоступно редагування цього параметра</b></p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова (ru, uk, en)</p>
- **seller.seller_phones** `Object[]` _(опціонально)_ - <p>SellerPhone[], список телефонів</p>

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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
**ExtraFields:**

- **seller.market** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-MarketDetails">MarketModel</a></b></p>
- **seller.agent** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-AgentDetails">AgentModel</a></b></p>
- **seller.time_table** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-TimeTableDetails">TimeTableModel</a></b></p>
- **seller.time_table_excluded_dates** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-TimetableExcludedDatesDetails">TimetableExcludedDatesModel</a></b></p>
- **seller.permissions** `Array[]` **_(обов'язково)_** - <p>список дозволів менеджера</p>
- **seller.personal_cabinet_settings** `Object` **_(обов'язково)_** - <p>налаштування особистого кабінету</p>
- **seller.seller_roles_feedback** `SellerRoles[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerRolesDetails">SellerRoles</a></b>[], список ролей менеджера для управління доступами до звернень</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
  {
   "success": true,
   "content": {
       "id": 165,
       "login": "test",
       "status": 0,
       "skype": "test",
       "fio": "Стеценко Наталія Олександрівна",
       "email": "test@gmail.com",
       "agent_id": 5,
       "lang": "uk",
       "seller_roles": [
           {
               "name": "default_owner",
               "type": 1,
               "description": "Владелец"
           }
       ],
       "seller_phones": [
           {
               "id": 62,
               "phone_number": "+380114214121",
               "confirmed": false
           }
       ],
       "notify_phone": true,
       "notify_email": true,
   }
}
```

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "id": 18515,
     "login": "test",
     "status": 0,
     "skype": "testskype",
     "fio": "test",
     "email": "test@gmail.com",
     "agent_id": null,
     "lang": "uk",
     "seller_roles": [
         {
             "name": "default_admin",
             "type": 1,
             "description": "Администратор"
         },
         {
             "name": "default_content",
             "type": 1,
             "description": "Контент менеджер"
         },
         {
             "name": "default_finance",
             "type": 1,
             "description": "Менеджер по финансам"
         },
         {
             "name": "default_orders",
             "type": 1,
             "description": "Менеджер по обработке заказов"
         }
     ],
     "seller_phones": [
         {
             "id": 18038,
             "phone_number": "+380112141214",
             "confirmed": false
         }
     ],
     "notify_phone": true,
     "notify_email": true,
     "market": {
         "test_market": 0,
         "logo": "https://rozetka.com.ua/sellers/1351/1351032.jpg",
         "title": "test",
         "business_model": "b2c",
         "market_requisite": {
             "type": 2,
             "name": "Стеценко Наталія Олександрівна",
             "inn": "12321312312",
             "okpo": "12321312312",
             "mfo": "12321312312",
             "score": "12321312312",
             "bank_name": "ПриватБанк",
             "juridical_address": "адрес",
             "physical_address": "адрес",
             "seller_can_edit": false
         },
         "updated": "2020-01-21 18:00:14.105856",
         "use_api": false,
         "sms_template_id": 1,
         "check_stock": false,
         "edit_timetable": true,
         "combination_owox_parent_id": 103952,
         "email": "test@gmail.com"
     },
     "agent": [],
     "time_table": [
         {
             "id": 3905,
             "is_day_off": false,
             "day_of_week": 1,
             "time_start": "00:00:00",
             "time_end": "23:00:00",
             "created_at": "2019-02-06 15:30:06",
             "day_start": null,
             "day_end": null,
             "type": 0,
             "updated_at": "2020-01-21 12:58:16"
         }
     "time_table_excluded_dates": [
         {
             "id": 3802,
             "comment_en": "Women's Day",
             "comment_ru": "Международный Женский День",
             "comment_uk": "Міжнародний Жіночий День",
             "date_end": "2019-03-08",
             "date_start": "2019-03-08",
             "is_default": true,
             "is_active": 1
         }
     ],
     "permissions": [
         "order_edit",
         "correspondence",
         "questions",
         "account_edit",
     ]
 }
}
```

---

### 9 Редагувати особисту інформацію

**put** `/sellers/{id}/update-self`

<p>Update Self Info</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>

**Request Body Parameters:**

- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail<br><b>Для ролі default_owner недоступно редагування цього параметра</b></p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова (ru, uk, en)</p>
- **seller.seller_phones** `Object[]` _(опціонально)_ - <p>SellerPhone[], список телефонів</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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
    "content":{
        "id":4567,
        "login":"Salaka",
        "status":0,
        "skype":"nori.s",
        "fio":"Иванов Иван Иванович",
        "email":"test@google.com",
        "lang":"uk",
        "seller_roles":[
            {
            "name":"default_admin",
            "type":1,
            "description":"Администратор",
            "rule_name":null,
            "data":null,
            "created_at":1485507523,
            "updated_at":null
            }
        ],
        "seller_phones":[
            {
            "id":144,
            "phone_number":"+380112151214",
            "confirmed":false
            },
            {
            "id":145,
            "phone_number":"+380634444439",
            "confirmed":false
            }
        ],
        "notifyPhone":true,
        "notifyEmail":true,
    }
}
```

---

### 1.5 Редагувати профіль менеджера

**put** `/sellers/{id}`

<p>Update Seller</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>

**Request Body Parameters:**

- **seller.id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова (ru, uk, en)</p>
- **seller.seller_roles** `Object` **_(обов'язково)_** - <p>Список ролей менеджера. <br>Ключі списку повинні відповідати <i>default_admin, default_content, default_finance, default_orders</i><br> Значення - тільки <b>boolean</b></p>
- **seller.seller_phones** `Object[]` _(опціонально)_ - <p>SellerPhone[], список телефонів менеджера</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":4567,
        "login":"test",
        "status":0,
        "skype":"testskype",
        "fio":"Иванов Иван Иванович",
        "email":"test@google.com",
        "lang":"uk",
        "seller_roles":[
            {
            "name":"default_owner",
            "type":1,
            "description":"Владелец"
            }
        ],
        "seller_phones":[
            {
            "id":144,
            "phone_number":"+380112151214",
            "confirmed":false
            }
        ],
        "notify_phone":true,
        "notify_email":true,
        "two_step_auth": true
    }
}
```

---

### 1.5 Редагувати профіль менеджера

**put** `/sellers/{id}`

<p>Update Seller</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>

**Request Body Parameters:**

- **seller.id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова (ru, uk, en)</p>
- **seller.seller_roles** `Object` **_(обов'язково)_** - <p>Список ролей менеджера. <br>Ключі списку повинні відповідати <i>default_admin, default_content, default_finance, default_orders</i><br> Значення - тільки <b>boolean</b></p>
- **seller.seller_phones** `Object[]` _(опціонально)_ - <p>SellerPhone[], список телефонів менеджера</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: Seller }</p>
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
    "content":{
        "id":4567,
        "login":"Salaka",
        "status":0,
        "skype":"nori.s",
        "fio":"Иванов Иван Иванович",
        "email":"test@google.com",
        "lang":"uk",
        "seller_roles":[
            {
            "name":"default_owner",
            "type":1,
            "description":"Владелец",
            "rule_name":null,
            "data":null,
            "created_at":1485507523,
            "updated_at":null
            }
        ],
        "seller_phones":[
            {
            "id":144,
            "phone_number":"+380112151214",
            "confirmed":false
            }
        ],
        "notifyPhone":true,
        "notifyEmail":true,
        "two_step_auth":true
    }
}
```

---

### 10 Отримання файлів Річ контенту

**get** `/markets/rich-content-files`

<p>Отримання Файлів Річ контенту</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **file_type** `String` **_(обов'язково)_** - <p>Тип файлу <br>offer - оферта, price - Прайс</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл Річ контенту (.pdf)</p>

---

