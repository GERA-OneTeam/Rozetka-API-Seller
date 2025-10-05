# Authorization

### 1 Логін

**post** `/sites`

<p>Авторизація користувача</p>

**Версія:** 0.0.2

#### Параметри запиту

**Request Body Parameters:**

- **username** `String` **_(обов'язково)_** - <p>Ім'я користувача</p>
- **password** `String` **_(обов'язково)_** - <p>Пароль в base64()</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **access_token** `String` **_(обов'язково)_** - <p>access Токен авторизації</p>
- **permissions** `String[]` **_(обов'язково)_** - <p>Список <b><a href="#api-Models-ApiPermissionsDetails">Permissions</a></p>
- **roles** `String[]` **_(обов'язково)_** - <p>Список <b><a href="#api-Models-ApiPermissionsDetails">Roles</a></p>
- **seller** `Object` **_(обов'язково)_** - 
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>Email менеджера</p>
- **seller.first_phone** `Object` **_(обов'язково)_** - 
- **seller.first_phone.id** `Integer` **_(обов'язково)_** - <p>ID запису номера телефону</p>
- **seller.first_phone.phone_number** `String` **_(обов'язково)_** - <p>Номер телефону</p>
- **seller.first_phone.confirmed** `Boolean` **_(обов'язково)_** - <p>Прапор, чи підтверджений номер</p>
- **seller.wizard** `Boolean` **_(обов'язково)_** - <p>Чи потрібен візард клієнту</p>
- **market** `Object` **_(обов'язково)_** - 
- **market.id** `Integer` **_(обов'язково)_** - <p>ID продавця (магазину) в системі Розетка Маркетплейс</p>
- **market.logo** `String` **_(обов'язково)_** - <p>Логотип (посилання)</p>
- **market.business_model** `String` **_(обов'язково)_** - <p>Бізнес-модель</p>
- **market.title** `String` **_(обов'язково)_** - <p>Назва магазину</p>
- **market.title_translit** `String` **_(обов'язково)_** - <p>Назва магазину (трансліт)</p>
- **market.market_url** `String` **_(обов'язково)_** - <p>Посилання на магазин на Розетці</p>
- **market.war_block** `Boolean` **_(обов'язково)_** - <p>Ознака примусового блокування магазина</p>
- **market.status** `Integer` **_(обов'язково)_** - <p>Статус магазину</p>
- **market.status_label** `String` **_(обов'язково)_** - <p>Назва статусу магазину</p>
- **market.status_description** `String` **_(обов'язково)_** - <p>Опис статусу магазину</p>
- **market.status_transfer_reason** `Object` **_(обов'язково)_** - <p>Причина зміни статусу магазину</p>
- **market.status_transfer_reason.label** `String` **_(обов'язково)_** - <p>Назва причини</p>
- **market.status_transfer_reason.description** `String` **_(обов'язково)_** - <p>Опис причини</p>
- **market.fulfillment_available** `Boolean` **_(обов'язково)_** - <p>Ознака чи доступний магазину функціонал фулфілмента</p>
- **market.is_np_branch_promo_blocked** `Boolean` **_(обов'язково)_** - <p>Ознака, чи підключення акції НП Відділення заблоковане для магазину</p>
- **market.is_np_locker_promo_blocked** `Boolean` **_(обов'язково)_** - <p>Ознака, чи підключення акції НП Поштомати заблоковане для магазину</p>
- **market.premium** `Object` **_(обов'язково)_** - <p>Статус Rozetka Premium</p>
- **market.premium.is_premium** `Boolean` **_(обов'язково)_** - <p>Ознака, чи підключено Rozetka PREMIUM.</p>
- **market.premium.is_auto_new_item** `Boolean` **_(обов'язково)_** - <p>Ознака автоматичного додавання нових товарів до PREMIUM.</p>
- **market.premium.allow_min_order_amount** `Boolean` **_(обов'язково)_** - <p>Дозволено чи ні додавання товару вище поточної суми</p>
- **raising** `Object|Null` **_(обов'язково)_** - <p>Інформація про рекламні кампанії магазину</p>
- **raising.campaigns_type** `Integer` **_(обов'язково)_** - <p>Тип РК<br></p> <ul>       <li><b>0</b> - ще не створено жодної кампанії</li>       <li><b>1</b> – стандартна компанія</li>       <li><b>2</b> – спрощена кампанія</li> </ul>
- **needInterview** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрібно показувати користувачу інтерв'ю</p>
- **lang** `String` **_(обов'язково)_** - <p>Мова користувача за замовчуванням</p>
- **poll_link** `String` **_(обов'язково)_** - <p>Посилання на опитування</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
     "success":true,
     "content":{
         "id":111,
         "access_token":"fHJHJWegsad4fr8798fwe45GDGBfhgawrf33",
         "permissions":[
            "order_edit",
            "correspondence",
         ],
         "roles":[
            "guest",
            "default_owner"
         ],
         "seller":{
             "fio":"Иванов Иван Иванович",
             "email": "test@gmail.com",
             "first_phone": {
                     "id": 1947,
                     "phone_number": "+380745214521",
                     "confirmed": false
             },
            "wizard": false
         },
         "market": {
               "id": 1086,
               "logo": "http://rozetka.com.ua/storage/seller/c35921f405adsfdsfcad3b933474cb6230.png",
               "business_model": "b2c",
               "title": "market_test_22",
               "title_translit": "market_test_22",
               "market_url": "https://rozetka.com.ua/seller/market_test_22",
               "war_block": false,
               "status": "6",
               "status_label": "Активний",
               "status_description": "Ваші товари активні для продажу. Щоб відповідати стандартам нашого сайту та забезпечити високий рівень продажу товарів, при розміщенні контенту дотримуйтесь наших вимог",
               "fulfillment_available": true,
               "status_transfer_reason": {
                   "label": "",
                   "description": ""
                   }
          },
          "needInterview": false,
          "lang":"ru",
          "poll_link":"http://poll.link"
     }
}
```

```json
 HTTP/1.1 200 OK
{
     "success":true,
     "content":{
         "id":111,
         "access_token":"fHJHJWegsad4fr8798fwe45GDGBfhgawrf33",
         "permissions":[
            "order_edit",
            "correspondence",
         ],
         "roles":[
            "guest",
            "default_owner"
         ],
         "seller":{
             "fio":"Иванов Иван Иванович",
             "email": "test@gmail.com",
             "first_phone": {
                     "id": 1947,
                     "phone_number": "+380745214521",
                     "confirmed": false
             },
             "wizard": false
         },
         "market": {
               "id": 1086,
               "logo": "http://rozetka.com.ua/storage/seller/c35921f405adsfdsfcad3b933474cb6230.png",
               "business_model": "b2c",
               "title": "market_test_22",
               "title_translit": "market_test_22",
               "market_url": "https://rozetka.com.ua/seller/market_test_22",
               "war_block": false,
               "status": "6",
               "status_label": "Проблемний",
               "status_description": "На жаль, акаунт Вашого магазину заблоковано до дд/мм/рррр по причині на прохання продавця. Якщо Ви не згодні з причиною або датою блокування, будь ласка, зв'яжіться з нашими менеджерами за адресою support@test.com.ua",
               "status_transfer_reason": {
                   "label": "На прохання продавця",
                   "description": "Робота магазину призупинена у зв'язку з періодом відсутності. Ваші товари зняті з наявності до кінця поточного періоду відсутності. Змінити дату періоду відсутності або повернути магазин у статус \"Активний\" можна у налаштуваннях графіка роботи."
               }
          },
          "needInterview": false,
          "lang":"ru",
          "poll_link":"http://poll.link"
     }
}
```

---

### 1 Логін

**post** `/sites`

<p>Авторизація користувача</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **username** `String` **_(обов'язково)_** - <p>Ім'я користувача</p>
- **password** `String` **_(обов'язково)_** - <p>Пароль в base64()</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **access_token** `String` **_(обов'язково)_** - <p>access Токен авторизації</p>
- **permissions** `String[]` **_(обов'язково)_** - <p>Список <b><a href="#api-Authorization-Permissions">Permissions</a></p>
- **roles** `String[]` **_(обов'язково)_** - <p>Список <b><a href="#api-Authorization-Permissions">Roles</a></p>
- **seller** `Object` **_(обов'язково)_** - 
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>Email менеджера</p>
- **seller.first_phone** `Object` **_(обов'язково)_** - 
- **seller.first_phone.id** `Integer` **_(обов'язково)_** - <p>ID запису номера телефону</p>
- **seller.first_phone.phone_number** `String` **_(обов'язково)_** - <p>Номер телефону</p>
- **seller.first_phone.confirmed** `Boolean` **_(обов'язково)_** - <p>Прапор, чи підтверджений номер</p>
- **seller.wizard** `Boolean` **_(обов'язково)_** - <p>Чи потрібен візард клієнту</p>
- **market** `Object` **_(обов'язково)_** - 
- **market.id** `Integer` **_(обов'язково)_** - <p>ID продавця в системі Розетка Маркетплейс</p>
- **market.logo** `String` **_(обов'язково)_** - <p>Логотип (посилання)</p>
- **market.business_model** `String` **_(обов'язково)_** - <p>Бізнес модель</p>
- **market.title** `String` **_(обов'язково)_** - <p>Назва магазину</p>
- **market.title_translit** `String` **_(обов'язково)_** - <p>Назва магазину трансліт</p>
- **needInterview** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати чи потрібно показувати селлеру інтерв'ю</p>
- **lang** `String` **_(обов'язково)_** - <p>Мова користувача</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
        "success":true,
        "content":{
            "id":111,
            "access_token":"fHJHJWegsad4fr8798fwe45GDGBfhgawrf33",
            "permissions":[
               "order_edit",
               "correspondence",
            ],
            "roles":[
               "guest",
               "default_owner"
            ],
            "seller":{
                  "fio":"Иванов Иван Иванович",
                  "email": "test@gmail.com",
                  "first_phone": {
                        "id": 1947,
                        "phone_number": "+380415478547",
                        "confirmed": false
                  },
                  "wizard": false
            },
            "market": {
                  "id": 1086,
                  "logo": "http://rozetka.com.ua/storage/seller/c35921f405a8e95cad3b933474cb6230.png",
                  "business_model": "b2c",
                  "title": "market_test_22",
                  "title_translit": "market_test_22"
            },
            "needInterview": false,
            "lang":"ru"
        }
   }
```

---

### 1 Логін

**post** `/sites`

<p>Авторизація користувача</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **username** `String` **_(обов'язково)_** - <p>Ім'я користувача</p>
- **password** `String` **_(обов'язково)_** - <p>Пароль в base64()</p>

#### Headers

- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **access_token** `String` **_(обов'язково)_** - <p>access Токен авторизації</p>
- **permissions** `String[]` **_(обов'язково)_** - <p>Список <b><a href="#api-Authorization-Permissions">Permissions</a></p>
- **roles** `String[]` **_(обов'язково)_** - <p>Список <b><a href="#api-Authorization-Permissions">Roles</a></p>
- **seller** `Object` **_(обов'язково)_** - 
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **market** `Object` **_(обов'язково)_** - 
- **market.id** `Integer` **_(обов'язково)_** - <p>ID продавця в системі Розетка Маркетплейс</p>
- **market.logo** `String` **_(обов'язково)_** - <p>Логотип (посилання)</p>
- **market.business_model** `String` **_(обов'язково)_** - <p>Бізнес модель</p>
- **market.title** `String` **_(обов'язково)_** - <p>Назва магазину</p>
- **needInterview** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати чи потрібно показувати селлеру інтерв'ю</p>
- **lang** `String` **_(обов'язково)_** - <p>Мова користувача по дефолту</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":111,
        "access_token":"fHJHJWegsad4fr8798fwe45GDGBfhgawrf33",
        "permissions":[
           "order_edit",
           "correspondence",
        ],
        "roles":[
           "guest",
           "default_owner"
        ],
        "seller":{
            "fio":"Иванов Иван Иванович"
        },
        "market":{
            "id":4585,
            "logo":"http://rozetka.com.ua/sellers/78984/98543519859.jpg",
            "business_model":"b2c",
            "title":"Наш Сад"
        },
        "lang":"ru",
        "personal_cabinet_settings": {
             "seller_id": 12345,
             "is_new_design": 1,
             "theme_color": "dark",
             "seen_feedback_widget": 1
        }
    }
}
```

---

### 2 Відновлення пароля

**post** `/sites/recover-password`

<p>Після успішного завершення операції користувач отримує email з посиланням для відновлення пароля</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **login** `String` **_(обов'язково)_** - <p>Логін для відновлення пароля.</p>

#### Headers

- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content":{}
}
```

---

### 3 Вихід з облікового запису

**post** `/sites/logout`

<p>Вихід користувача з облікового запису</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **seller.logout** `Boolean` **_(обов'язково)_** - <p>Прапор, чи підтверджено дію</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
        "success":true,
        "content":{
           "logout": true
        }
}
```

---

