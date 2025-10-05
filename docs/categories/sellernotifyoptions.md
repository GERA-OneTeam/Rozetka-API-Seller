# SellerNotifyOptions

### 2 Типи і періодичність повідомлень

**get** `/seller-notify-options/{id}`

<p>Відобразити типи і періодичність повідомлень менеджера магазина</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: SellerNotifyOption }</p>
- **SellerNotifyOption** `Object` **_(обов'язково)_** - <p>SellerNotifyOptionModel</p>
- **sellerNotifyOption.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **sellerNotifyOption.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **sellerNotifyOption.sms_time_setting** `String` **_(обов'язково)_** - <p>Налаштування часу смс-сповіщення у вигляді: <br> {&quot;mon&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;tue&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;wed&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;thu&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;fri&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sat&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sun&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true}}<br></p>
- **sellerNotifyOption.notify_phone_id** `Integer` **_(обов'язково)_** - <p>ID телефону менеджера для смс</p>
- **sellerNotifyOption.new_ttn** `Bool` **_(обов'язково)_** - <p>Сповіщення про нову ТТН</p>
- **sellerNotifyOption.new_reviews** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий відгук про магазин</p>
- **sellerNotifyOption.new_order** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_user** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання від користувача</p>
- **sellerNotifyOption.new_message** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове повідомлення</p>
- **sellerNotifyOption.sms_new_order** `Bool` **_(обов'язково)_** - <p>Смс-сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_item** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання про товар</p>
- **sellerNotifyOption.new_invoices** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий виставлений рахунок</p>
- **sellerNotifyOption.new_reports** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий звіт</p>
- **sellerNotifyOption.new_orders_remind** `Bool` **_(обов'язково)_** - <p>Нагадування про нові замовлення</p>
- **sellerNotifyOption.user_cancel_order** `Bool` **_(обов'язково)_** - <p>Нагадування про скасування користувачем замовлення</p>
- **sellerNotifyOption.balance_notification** `Bool` **_(обов'язково)_** - <p>Нагадування про поповнення балансу</p>
- **sellerNotifyOption.channel_new_order** `Number` **_(обов'язково)_** - <p>Канал сповіщення про нове замовлення <br></p> <ul> <li>0 - Не отримувати</li> <li>1 - Telegram</li> <li>2 - Viber/SMS</li> </ul>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":11,
        "seller_id":39,
        "sms_time_setting":"{
            \"mon\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"tue\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"wed\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"thu\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"fri\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"sat\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":false},
            \"sun\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":false}
        }",
        "notify_phone_id":394,
        "new_ttn":false,
        "new_order":false,
        "new_reviews":false,
        "new_question_user":true,
        "new_message":false,
        "sms_new_order":true,
        "new_question_item":true,
        "new_invoices":true,
        "new_reports":false,
        "new_orders_remind":true,
        "user_cancel_order": true,
        "balance_notification": false
    }
}
```

---

### 4 Відключення телеграм канала

**post** `/sellers/inactive-telegram`

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":true
}
```

---

### 3 Встановлення/оновлення канала для сповіщень про нове замовлення

**put** `/seller-notify-options/{id}/channel`

<p>Встановлення/оновлення канала для сповіщень про нове замовлення</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: SellerNotifyOption }</p>
- **SellerNotifyOption** `Object` **_(обов'язково)_** - <p>SellerNotifyOptionModel</p>
- **sellerNotifyOption.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **sellerNotifyOption.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **sellerNotifyOption.sms_time_setting** `String` **_(обов'язково)_** - <p>Налаштування часу смс-сповіщення у вигляді: <br> {&quot;mon&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;tue&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;wed&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;thu&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;fri&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sat&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sun&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true}}<br></p>
- **sellerNotifyOption.notify_phone_id** `Integer` **_(обов'язково)_** - <p>ID телефону менеджера для смс</p>
- **sellerNotifyOption.new_ttn** `Bool` **_(обов'язково)_** - <p>Сповіщення про нову ТТН</p>
- **sellerNotifyOption.new_reviews** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий відгук про магазин</p>
- **sellerNotifyOption.new_order** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_user** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання від користувача</p>
- **sellerNotifyOption.new_message** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове повідомлення</p>
- **sellerNotifyOption.sms_new_order** `Bool` **_(обов'язково)_** - <p>Смс-сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_item** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання про товар</p>
- **sellerNotifyOption.new_invoices** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий виставлений рахунок</p>
- **sellerNotifyOption.new_reports** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий звіт</p>
- **sellerNotifyOption.new_orders_remind** `Bool` **_(обов'язково)_** - <p>Нагадування про нові замовлення</p>
- **sellerNotifyOption.user_cancel_order** `Bool` **_(обов'язково)_** - <p>Нагадування про скасування користувачем замовлення</p>
- **sellerNotifyOption.balance_notification** `Bool` **_(обов'язково)_** - <p>Нагадування про поповнення балансу</p>
- **sellerNotifyOption.channel_new_order** `Number` **_(обов'язково)_** - <p>Канал сповіщення про нове замовлення <br></p> <ul> <li>0 - Не отримувати</li> <li>1 - Telegram</li> <li>2 - Viber/SMS</li> </ul>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":11,
        "seller_id":39,
        "sms_time_setting":"{
            \"mon\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"tue\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"wed\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"thu\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"fri\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"sat\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":false},
            \"sun\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":false}
        }",
        "notify_phone_id":394,
        "new_ttn":false,
        "new_order":false,
        "new_reviews":false,
        "new_question_user":true,
        "new_message":false,
        "sms_new_order":true,
        "new_question_item":true,
        "new_invoices":true,
        "new_reports":false,
        "new_orders_remind":true,
        "user_cancel_order": true,
        "balance_notification": false
        "channel_new_order": 2
    }
}
```

---

### 1 Зміна повідомлень

**put** `/seller-notify-options/{id}`

<p>Змінити типи і періодичність повідомлень</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID запису</p>

**Request Body Parameters:**

- **SellerNotifyOptions** `json` **_(обов'язково)_** - <p>Об'єкт <b><a href="#api-Models-SellerNotifyOptionsDetails" class="nav-list-item">SellerNotifyOptions</a></b>  зі зміненими значеннями прапорів щодо повідомлень або періодичності повідомлень.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: SellerNotifyOptions }</p>
- **SellerNotifyOption** `Object` **_(обов'язково)_** - <p>SellerNotifyOptionModel</p>
- **sellerNotifyOption.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **sellerNotifyOption.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **sellerNotifyOption.sms_time_setting** `String` **_(обов'язково)_** - <p>Налаштування часу смс-сповіщення у вигляді: <br> {&quot;mon&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;tue&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;wed&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;thu&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;fri&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sat&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sun&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true}}<br></p>
- **sellerNotifyOption.notify_phone_id** `Integer` **_(обов'язково)_** - <p>ID телефону менеджера для смс</p>
- **sellerNotifyOption.new_ttn** `Bool` **_(обов'язково)_** - <p>Сповіщення про нову ТТН</p>
- **sellerNotifyOption.new_reviews** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий відгук про магазин</p>
- **sellerNotifyOption.new_order** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_user** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання від користувача</p>
- **sellerNotifyOption.new_message** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове повідомлення</p>
- **sellerNotifyOption.sms_new_order** `Bool` **_(обов'язково)_** - <p>Смс-сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_item** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання про товар</p>
- **sellerNotifyOption.new_invoices** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий виставлений рахунок</p>
- **sellerNotifyOption.new_reports** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий звіт</p>
- **sellerNotifyOption.new_orders_remind** `Bool` **_(обов'язково)_** - <p>Нагадування про нові замовлення</p>
- **sellerNotifyOption.user_cancel_order** `Bool` **_(обов'язково)_** - <p>Нагадування про скасування користувачем замовлення</p>
- **sellerNotifyOption.balance_notification** `Bool` **_(обов'язково)_** - <p>Нагадування про поповнення балансу</p>
- **sellerNotifyOption.channel_new_order** `Number` **_(обов'язково)_** - <p>Канал сповіщення про нове замовлення <br></p> <ul> <li>0 - Не отримувати</li> <li>1 - Telegram</li> <li>2 - Viber/SMS</li> </ul>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
        "id":11,
        "seller_id":39,
        "sms_time_setting":"{
            \"mon\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"tue\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"wed\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"thu\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"fri\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":true},
            \"sat\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":false},
            \"sun\":{\"from\":\"09:00\",\"to\":\"18:00\",\"active\":false}
        }",
        "notify_phone_id":394,
        "new_ttn":false,
        "new_order":false,
        "new_question_user":true,
        "new_message":false,
        "sms_new_order":true,
        "new_question_item":true,
        "new_invoices":true,
        "new_reports":false,
        "new_orders_remind":true,
        "user_cancel_order": true,
        "balance_notification": false
    }
}
```

---

