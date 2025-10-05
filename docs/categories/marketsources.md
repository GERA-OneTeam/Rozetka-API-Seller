# MarketSources

### 1 Отримання джерел магазину

**get** `/markets/sources-list`

<p>Отримання джерел магазину</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID джерела магазину</p>
- **status** `Integer` _(опціонально)_ - <p>Статус джерела</p>
- **sync_type** `Integer` _(опціонально)_ - <p>Тип синхронізації джерела</p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **perPage** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID джерела</p>
- **seller_id** `Integer` **_(обов'язково)_** - <p>ID продавця</p>
- **title** `String` **_(обов'язково)_** - <p>Назва джерела</p>
- **url** `String` **_(обов'язково)_** - <p>Адреса джерела</p>
- **last_sync_ts** `String` **_(обов'язково)_** - <p>Дата останньої синхронізації</p>
- **last_sync_api** `String` **_(обов'язково)_** - <p>Дата останньої синхронизації по api</p>
- **total_items_count** `Integer` **_(обов'язково)_** - <p>Всього товарів</p>
- **synced_items_count** `Integer` **_(обов'язково)_** - <p>Синхронізовано товарів</p>
- **sync_type** `Integer` **_(обов'язково)_** - <p>Тип синхронізації (0 - повна, 1 - коротка)</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус джерела</p>
- **availability** `Integer` **_(обов'язково)_** - <p>Тип синхронізації за наявністю (1 - Наявність у прайсі, 2- За наявністю, 3 - За залишками, 4 - По АПІ)</p>
- **sync_enabled** `Integer` **_(обов'язково)_** - <p>Синхронізація Увімк/Вимк</p>
- **sync_period** `Integer` **_(обов'язково)_** - <p>Період синхронізації</p>
- **name_construct** `String` **_(обов'язково)_** - <p>Структура імені товару</p>
- **additional_text** `String` **_(обов'язково)_** - <p>Додатковий текст для всіх товарів</p>
- **delivery_and_payment** `String` **_(обов'язково)_** - <p>Доставка та оплата</p>
- **columns_for_sync** `String` **_(обов'язково)_** - <p>Поля для синхронізації</p>
- **owox_date_enabled** `Integer` **_(обов'язково)_** - <p>Статус товарів заднім числом</p>
- **count_attributes** `Integer` **_(обов'язково)_** - <p>Загальна кількість параметрів</p>
- **count_linked_attributes** `Integer` **_(обов'язково)_** - <p>Загальна кількість пов'язаних параметрів</p>
- **ou_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела в старому Uploader</p>
- **last_history_date** `String` **_(обов'язково)_** - <p>Дата останньої історії синхронізації</p>
- **file_hash** `String` **_(обов'язково)_** - <p>Хеш файлу, що завантажується</p>
- **moderation_type** `Integer` **_(обов'язково)_** - <p>Тип модерації товарів (0 - ручна, 1 - авто)</p>
- **last_order_ts** `String` **_(обов'язково)_** - <p>Остання дата синхронізації за ордерами з купера</p>
- **resource_id** `Integer` **_(обов'язково)_** - <p>ID ресурсу для застосування довідників автозв'язування</p>
- **partial_sync** `Boolean` **_(обов'язково)_** - <p>Обробка синхронізації для неповного прайсу</p>
- **xml_categories_hash** `String` **_(обов'язково)_** - <p>Хеш категорій прайсу</p>
- **is_virtual_source** `Integer` **_(обов'язково)_** - <p>Прапор для прайсів зі спліттер-контенту. (0 - дефолтне значення для звичайних xml прайсів, що завантажуються за посиланням., 1 - віртуальне джерело для завантаження Excel прайсів зі спліттер-контенту)</p>
- **priority** `Integer` **_(обов'язково)_** - <p>Пріоритет джерела</p>
- **ignore_quarantine** `Boolean` **_(обов'язково)_** - <p>Ігнорувати перевірку діапазону ціни категорії</p>
- **use_listex_catalog** `Boolean` **_(обов'язково)_** - <p>Використання каталогу listex</p>
- **grocery_root_rz_category** `Integer` **_(обов'язково)_** - <p>Рутова категорія RZ для джерела</p>
- **auth_type** `Integer` **_(обов'язково)_** - <p>Тип авторизації при завантаженні прайсу</p>
- **auth_login** `String` **_(обов'язково)_** - <p>Логін для авторизації</p>
- **auth_pass** `String` **_(обов'язково)_** - <p>Пароль для авторизації</p>
- **use_attrs_in_description** `Boolean` **_(обов'язково)_** - <p>Додавання параметрів до опису</p>
- **price_round_type** `Integer` **_(обов'язково)_** - <p>Тип заокруглення ціни (0 - Стндартний, 1 - заокруглення в меншу сторону, 2 - заокруглення у більшу сторону)</p>
- **use_price_promo_rules** `Boolean` **_(обов'язково)_** - <p>Вимкнення перевірки промоцін</p>
- **country_code** `String` **_(обов'язково)_** - <p>Код країни</p>
- **auto_send_lisa_request_new_items** `Integer` **_(обов'язково)_** - <p>Автозаявка Lisa по новим товарам</p>
- **auto_send_lisa_request_changed_items** `Integer` **_(обов'язково)_** - <p>Автозаявка Lisa по оновленим товарам</p>
- **denied_on_by_api** `Integer` **_(обов'язково)_** - <p>Ознака можливості редагування створення автозаявки</p>
- **new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "sources": [
            {
                "id": 1234,
                "seller_id": 1234,
                "title": "Source Title",
                "url": "",
                "last_sync_ts": "2020-06-15 17:48:01",
                "last_sync_api": "2021-11-29 17:17:30",
                "total_items_count": 5,
                "synced_items_count": 0,
                "sync_type": "0",
                "status": "1",
                "availability": 3,
                "sync_enabled": 1,
                "sync_period": 60,
                "name_construct": "name",
                "additional_text": null,
                "delivery_and_payment": null,
                "owox_date_enabled": 1,
                "count_attributes": 14,
                "count_linked_attributes": 4,
                "ou_source_id": null,
                "last_history_date": "2020-06-15 17:48:11",
                "file_hash": "12341234",
                "columns_for_sync": "name price picture description param",
                "moderation_type": 0,
                "last_order_ts": null,
                "resource_id": null,
                "partial_sync": false,
                "xml_categories_hash": "12344567",
                "priority": 5,
                "is_virtual_source": 0,
                "ignore_quarantine": false,
                "use_listex_catalog": false,
                "grocery_root_rz_category": null,
                "auth_type": 0,
                "auth_login": null,
                "auth_pass": null,
                "use_attrs_in_description": false,
                "price_round_type": 0,
                "auto_send_lisa_request_changed_items": 0,
                "auto_send_lisa_request_new_items": 1,
                "denied_on_by_api": 1,
                "new_flow_old_price": 1,
            },
            ...
        ],
        "_meta": {
            "totalCount": 25,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

