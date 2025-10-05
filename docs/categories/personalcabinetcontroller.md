# PersonalCabinetController

### Створення налаштувань особистого кабінету

**put** `/personal-cabinets/settings`

<p>Створення та оновлення налаштувань</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **is_new_design** `Integer` _(опціонально)_ - <p>Чи показувати новий дизайн</p> <ul>  <li>0 - старий дизайн</li>  <li>1 - новий дизайн</li>  <li>2 - тільки новий дизайн, без можливості переходу в старий</li> </ul>
- **theme_color** `String` _(опціонально)_ - <p>Колір теми</p>
- **seen_feedback_widget** `Integer` _(опціонально)_ - <p>Остання версія ЛК по якій був фідбек</p> <ul>  <li>0 - не показувався</li>  <li>1 - показувався</li> </ul>
- **guide_statuses** `Object` _(опціонально)_ - <p>Відображення гайда по розділах<br> <b>Важливо!</b> При зміні цього параметра необхідно передавати весь список розділів з прапорами <code>true/false</code><br></p>
- **guide_shown** `Boolean` _(опціонально)_ - <p>Ознака, чи був показаний гайд</p>
- **tab_columns** `Object` _(опціонально)_ - <p>Колонки по розділах (вкладках)<br> <b>Важливо!</b> При зміні цього параметра необхідно передавати весь список вкладок з колонками у вигляді масиву<br> Якщо передати порожній параметр - будуть присвоєні дефолтні значення.</p>
- **tab_page_size** `Object` _(опціонально)_ - <p>Кількість записів на вкладці<br> <b>Важливо!</b> При зміні цього параметра необхідно передавати весь список вкладок зі значеннями кількості записів (<code>integer</code>)<br> Якщо передати порожній параметр - будуть присвоєні дефолтні значення.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **success** `Boolean` **_(обов'язково)_** - 
- **seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **is_new_design** `Integer` **_(обов'язково)_** - <p>Чи показувати новий дизайн <br></p> <ul>  <li>0 - старий дизайн</li>  <li>1 - новий дизайн</li>  <li>2 - тільки новий дизайн, без можливості переходу в старий</li> </ul>
- **theme_color** `String` **_(обов'язково)_** - <p>Колір теми</p>
- **seen_feedback_widget** `Integer` **_(обов'язково)_** - <p>Остання версія ЛК по якій був фідбек зворотного зв'язку</p> <ul>  <li>0 - не показувався</li>  <li>1 - показувався</li> </ul>
- **guide_statuses** `Object` **_(обов'язково)_** - <p>Відображення гайда по розділах<br> По дефолту для кожного розділу встановлено значення <code>false</code><br></p>
- **guide_shown** `Boolean` **_(обов'язково)_** - <p>Ознака, чи був показаний гайд</p>
- **tab_columns** `Object` **_(обов'язково)_** - <p>Колонки по розділах (вкладках)<br></p>
- **tab_page_size** `Object` **_(обов'язково)_** - <p>Кількість записів на вкладці<br></p>
- **market_ff_status** `Integer` **_(обов'язково)_** - <p>Статус підключення функціоналу &quot;Фулфілмент&quot;<br></p> <ul>     <li>0 - очікується заявка</li>     <li>1 - функціонал підключено</li>     <li>2 - заявка подана</li> </ul>
- **market_rzsp_status** `Integer` **_(обов'язково)_** - <p>Статус підключення функціоналу &quot;Видача в Розетка&quot;<br></p> <ul>     <li>0 - очікується заявка</li>     <li>1 - функціонал підключено</li>     <li>2 - заявка подана</li> </ul>
- **show_instant_notifications** `Integer` **_(обов'язково)_** - <p>Чи відображати миттєві нотифікації</p>
- **rz_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж в Delivery Rozetka</p>
- **rz_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках в Delivery Rozetka</p>
- **rz_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні в Delivery Rozetka</p>
- **rz_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **rz_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Delivery Rozetka</p>
- **np_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Нової Пошти</p>
- **np_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Нової Пошти</p>
- **np_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Нової Пошти</p>
- **np_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **np_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Нової Пошти</p>
- **up_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Укрпошти</p>
- **up_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Укрпошти</p>
- **up_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Укрпошти</p>
- **up_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **up_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Укрпошти</p>
- **meest_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Meest Express</p>
- **meest_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Meest Express</p>
- **meest_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Meest Express</p>
- **meest_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **meest_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Meest Express</p>
- **change_password_reminder** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про нагадування змінити пароль</p>
- **change_password_reminder.need_to_change** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи необхідно нагадувати змінити пароль</p>
- **change_password_reminder.last_time_changed** `Datetime` **_(обов'язково)_** - <p>Дата коли останній раз було змінено пароль</p>
- **change_password_reminder.period_to_change_in_days** `Integer` **_(обов'язково)_** - <p>Період в днях для нагадування змінити пароль</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "is_new_design": 0,
     "theme_color": "light",
     "seen_feedback_widget": 0,
     "guide_statuses":{
         "home": true,
         "goods": true,
         "orders": false,
         "balance": false,
         "modules": false,
         "advertising": false,
         "reviews": false,
         "messages": false,
         "settings": false
     },
     "guide_shown":false,
     "tab_columns":{
         "advertising/items":[
             "product_id",
             "price_offer_id",
             "product_name",
             "article",
             "availability",
             "price",
             "promo_price",
             "recommended_price",
             "reasons",
             "apply_promo_code",
             "change_date",
             "is_promo_sent",
             "sold"
         ]
     },
     "tab_page_size":{
         "goods":40
     },
     "market_ff_status": 1,
     "market_rzsp_status": 0
 }
}
```

---

### Отримання налаштувань

**get** `/personal-cabinets/settings`

<p>Отримання налаштувань</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **success** `Boolean` **_(обов'язково)_** - 
- **seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **is_new_design** `Integer` **_(обов'язково)_** - <p>Чи показувати новий дизайн <br></p> <ul>  <li>0 - старий дизайн</li>  <li>1 - новий дизайн</li>  <li>2 - тільки новий дизайн, без можливості переходу в старий</li> </ul>
- **theme_color** `String` **_(обов'язково)_** - <p>Колір теми</p>
- **seen_feedback_widget** `Integer` **_(обов'язково)_** - <p>Остання версія ЛК по якій був фідбек зворотного зв'язку</p> <ul>  <li>0 - не показувався</li>  <li>1 - показувався</li> </ul>
- **guide_statuses** `Object` **_(обов'язково)_** - <p>Відображення гайда по розділах<br> По дефолту для кожного розділу встановлено значення <code>false</code><br></p>
- **guide_shown** `Boolean` **_(обов'язково)_** - <p>Ознака, чи був показаний гайд</p>
- **tab_columns** `Object` **_(обов'язково)_** - <p>Колонки по розділах (вкладках)<br></p>
- **tab_page_size** `Object` **_(обов'язково)_** - <p>Кількість записів на вкладці<br></p>
- **market_ff_status** `Integer` **_(обов'язково)_** - <p>Статус підключення функціоналу &quot;Фулфілмент&quot;<br></p> <ul>     <li>0 - очікується заявка</li>     <li>1 - функціонал підключено</li>     <li>2 - заявка подана</li> </ul>
- **market_rzsp_status** `Integer` **_(обов'язково)_** - <p>Статус підключення функціоналу &quot;Видача в Розетка&quot;<br></p> <ul>     <li>0 - очікується заявка</li>     <li>1 - функціонал підключено</li>     <li>2 - заявка подана</li> </ul>
- **show_instant_notifications** `Integer` **_(обов'язково)_** - <p>Чи відображати миттєві нотифікації</p>
- **rz_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж в Delivery Rozetka</p>
- **rz_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках в Delivery Rozetka</p>
- **rz_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні в Delivery Rozetka</p>
- **rz_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **rz_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Delivery Rozetka</p>
- **np_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Нової Пошти</p>
- **np_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Нової Пошти</p>
- **np_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Нової Пошти</p>
- **np_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **np_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Нової Пошти</p>
- **up_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Укрпошти</p>
- **up_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Укрпошти</p>
- **up_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Укрпошти</p>
- **up_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **up_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Укрпошти</p>
- **meest_delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Meest Express</p>
- **meest_delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Meest Express</p>
- **meest_delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Meest Express</p>
- **meest_delivery_commission_info.type** `Number` **_(обов'язково)_** - <p>Тип комісії <br></p> <ul>      <li><code>standard</code> - стандартна</li>      <li><code>individual</code> - індивідуальна</li> <ul>
- **meest_delivery_commission_info.can_edit_manager** `Boolean` **_(обов'язково)_** - <p>Ознака редагування комісії для Meest Express</p>
- **change_password_reminder** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про нагадування змінити пароль</p>
- **change_password_reminder.need_to_change** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи необхідно нагадувати змінити пароль</p>
- **change_password_reminder.last_time_changed** `Datetime` **_(обов'язково)_** - <p>Дата коли останній раз було змінено пароль</p>
- **change_password_reminder.period_to_change_in_days** `Integer` **_(обов'язково)_** - <p>Період в днях для нагадування змінити пароль</p>
- **have_recent_ad_campaign** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи були за останні 3 місяці активні рекламні кампанії</p>
- **contact_phone_filled** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи заповнено телефон для зв'язку з покупцями</p>
- **have_active_online_payment_methods** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи є транзакції з платіжними методами онлайн</p>
- **have_api_item_sync_source** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи є у продавця прайс лист з типом синхронізації по АПІ</p>
- **is_auto_refund** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи включено автоматичне повернення коштів при відміні замовлення</p>
- **have_market_premium** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи підключено Маркет преміум</p>
- **is_auto_send_lisa_available** `Boolean` **_(обов'язково)_** - <p>Прапорець зі значенням чи увімкнено автостворення заявок по додаванню і оновленню товарів</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "is_new_design": 0,
     "theme_color": "light",
     "seen_feedback_widget": 0,
     "guide_statuses":{
         "home": true,
         "goods": true,
         "orders": false,
         "balance": false,
         "modules": false,
         "advertising": false,
         "reviews": false,
         "messages": false,
         "settings": false
     },
     "guide_shown":false,
     "tab_columns":{
         "advertising/items":[
             "product_id",
             "price_offer_id",
             "product_name",
             "article",
             "availability",
             "price",
             "promo_price",
             "recommended_price",
             "reasons",
             "apply_promo_code",
             "change_date",
             "is_promo_sent",
             "sold"
         ]
     },
     "tab_page_size":{
         "goods":40
     },
     "market_ff_status": 1,
     "market_rzsp_status": 0,
     "show_instant_notifications": true,
     "rz_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "15",
         "type": "standard",
         "can_edit_manager": false
     },
     "np_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "123",
         "type": "individual",
         "can_edit_manager": false
     },
     "up_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "15",
         "type": "standard",
         "can_edit_manager": false
     },
     "meest_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "15",
         "type": "standard",
         "can_edit_manager": false
     },
      "bonus_campaign": 1,
      "change_password_reminder": {
          "need_to_change": false,
          "last_time_changed": "2024-01-01 10:30:20",
          "period_to_change_in_days": 30
      }
 }
}
```

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "is_new_design": 0,
     "theme_color": "light",
     "seen_feedback_widget": 0,
     "guide_statuses":{
         "home": true,
         "goods": true,
         "orders": false,
         "balance": false,
         "modules": false,
         "advertising": false,
         "reviews": false,
         "messages": false,
         "settings": false
     },
     "guide_shown":false,
     "tab_columns":{
         "advertising/items":[
             "product_id",
             "price_offer_id",
             "product_name",
             "article",
             "availability",
             "price",
             "promo_price",
             "recommended_price",
             "reasons",
             "apply_promo_code",
             "change_date",
             "is_promo_sent",
             "sold"
         ]
     },
     "tab_page_size":{
         "goods":40
     },
     "market_ff_status": 1,
     "market_rzsp_status": 0,
     "show_instant_notifications": true,
     "rz_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "15",
         "type": "standard",
         "can_edit_manager": false
     },
     "np_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "123",
         "type": "individual",
         "can_edit_manager": false
     },
     "up_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "15",
         "type": "standard",
         "can_edit_manager": false
     },
     "meest_delivery_commission_info": {
         "percentage_commission": "1.5",
         "absolute_commission": "15",
         "type": "standard",
         "can_edit_manager": false
     },
      "bonus_campaign": 1,
      "change_password_reminder": {
          "need_to_change": false,
          "last_time_changed": "2024-01-01 10:30:20",
          "period_to_change_in_days": 30
      },
     "have_recent_ad_campaign": true,
        "contact_phone_filled": true,
        "have_active_online_payment_methods": true,
        "have_api_item_sync_source": true,
        "is_auto_refund": false,
        "have_market_premium": false,
        "is_auto_send_lisa_available": false,
 }
}
```

---

