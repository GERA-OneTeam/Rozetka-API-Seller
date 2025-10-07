# GroupingServiceModule

### 2.2 Отримання файлу правил та параметрів для групування товарів

**get** `/grouping-service/group-strategy/export`

<p>Отримання файлу експорту правил та параметрів для групування товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **export_id** `Integer` **_(обов'язково)_** - <p>ID експорту</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID експорту</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус експорту</p>
- **status_title** `String` **_(обов'язково)_** - <p>Статус експорту (назва)</p>
- **file_link** `String|Null` **_(обов'язково)_** - <p>Посилання на файл</p>
- **created_at** `String` **_(обов'язково)_** - <p>Дата формування запиту на файл</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "id": 154,
        "status": 3,
        "status_title": "Cформовано",
        "file_link": "http://api-seller.rozetka.com.ua/items/file-mirror?filepath=test",
        "created_at": "2025-07-11 14:00:34"
    }
}
```

```json
{
    "success": true,
    "content": {
        "id": 169,
        "status": 1,
        "status_title": "У черзі",
        "file_link": null,
        "created_at": "2025-07-11 14:52:44"
    }
}
```

---

### 1.1 Отримання правил та параметрів для групування товарів

**get** `/grouping-service/group-strategy/search`

<p>Отримання правил та параметрів для групування товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID стратегії</p>
- **category_id** `Integer[]` _(опціонально)_ - <p>ID категорії (можна передавати кілька значень через кому)</p>
- **category_title** `String` _(опціонально)_ - <p>Назва категорії</p>
- **seller_type** `Integer` _(опціонально)_ - <p>Тип продавця<br></p> <ul>   <li><code>3</code> – Маркет</li>   <li><code>4</code> – Rozetka EU</li> </ul>
- **goods_state** `String` _(опціонально)_ - <p>Стан товару<br></p> <ul>   <li><code>0</code> – Вживаний</li>   <li><code>1</code> – Новий</li>   <li><code>2</code> – Відновлений</li>   <li><code>3</code> – Залишок (stock)</li> </ul><br>  Можна передавати кілька значень через кому

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Field sorting +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID стратегії</p>
- **category_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **seller_type** `Array` **_(обов'язково)_** - <p>Тип продавця</p>
- **producers_filter** `Integer` **_(обов'язково)_** - <p>Фільтр по бренду</p>
- **goods_state** `Integer[]` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>   <li><code>0</code> – Вживаний</li>   <li><code>1</code> – Новий</li>   <li><code>2</code> – Відновлений</li>   <li><code>3</code> – Залишок (stock)</li> </ul>
- **category** `Object` **_(обов'язково)_** - <p>Категорія</p>
- **group_strategy_producers** `Object` **_(обов'язково)_** - <p>Бренди, по яким можна групувати</p>
- **group_strategy_var_params** `Object` **_(обов'язково)_** - <p>Параметри, атрибути, характеристики по яким можна групувати товари</p>
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
        "data": [
            {
                "id": 9828,
                "category_id": 4657334,
                "seller_type": [3,1],
                "producers_filter": 0,
                "category": {
                    "id": 4657334,
                    "title": "Аксесуари по догляду за обличчям"
                },
                "goods_state":[
                     1
                 ],
                "group_strategy_producers": [],
                "group_strategy_var_params": [
                    {
                        "id": 4093,
                        "comment": "",
                        "var_params": [
                            {
                                "id": 92802,
                                "title": "Кількість в упаковці, шт"
                            },
                            {
                                "id": 200714,
                                "title": "Колір"
                            }
                        ]
                    }
                ]
            },
        ],
        "_meta":{
             "totalCount": 1824,
             "pageCount": 92,
             "currentPage": 1,
             "perPage": 20
        }
    }
}
```

---

### 2.1 Формування файлу правил та параметрів для групування товарів

**post** `/grouping-service/group-strategy/export`

<p>Формування файлу експорту правил та параметрів для групування товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID стратегії</p>
- **category_id** `Integer[]` _(опціонально)_ - <p>ID категорії (можна передавати кілька значень через кому)</p>
- **category_title** `String` _(опціонально)_ - <p>Назва категорії</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Field sorting +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **export_id** `Integer` **_(обов'язково)_** - <p>ID експорту</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "export_id": 168
    }
}
```

---

