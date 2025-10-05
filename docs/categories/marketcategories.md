# MarketCategories

### 1 Атрибути

**get** `/market-categories/has-options`

<p>Перевірка на наявність доступних для завантаження атрибутів категорії.</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **category_id** `Integer` **_(обов'язково)_** - <p>Category ID.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":true,
}
```

---

### 4 Список категорій, що належать до материнської

**get** `/market-categories/get-categories-by-parent`

<p>Отримання категорій продавця до рівня материнської</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **parent_id** `Integer` **_(обов'язково)_** - <p>ID материнської категорії.</p>
- **name** `String` **_(обов'язково)_** - <p>Назва категорії.</p>
- **children** `Integer` **_(обов'язково)_** - <p>ID дочірньої категорії.</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID категорії.</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: &quot;marketCategorys&quot; { {Array} CatalogCategory }, &quot;_meta&quot; }</p>
- **CatalogCategory** `Object` **_(обов'язково)_** - <p>CatalogCategoryModel</p>
- **catalog_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **catalog_category.parent_id** `Integer` **_(обов'язково)_** - <p>ID батьківської категорії</p>
- **catalog_category.name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
- **children** `Object` **_(обов'язково)_** - <p>CatalogCategory</p>
- **parents** `Object` **_(обов'язково)_** - <p>CatalogCategory</p>
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
        "marketCategorys": [
            {
                "id": 80258,
                "name": "ТВ, Аудио/Видео, Фото",
                "parent_id": 4627949
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "marketCategorys": [
           {
               "id": 80258,
               "name": "ТВ, Аудио/Видео, Фото",
               "parent_id": 4627949,
               "parents": [
                   {
                       "id": 4627949,
                       "name": "Смартфоны, ТВ и электроника",
                       "parent_id": 0
                   }
               ],
               "children": [
                   {
                       "id": 80001,
                       "name": "Фотоаппараты",
                       "parent_id": 80258
                   },
                   {
                       "id": 80002,
                       "name": "Видеокамеры",
                       "parent_id": 80258
                   }
               ]
           }
       ],
       "_meta": {
           "totalCount": 1,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 20
       }
   }
}
```

---

### 2.1 Отримання файлу XLS з параметрами категорій

**get** `/market-categories/download-options`

<p>Отримати XLS файл з параметрами категорій</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **category_id** `Integer` **_(обов'язково)_** - <p>Category ID</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл з параметрами обраної категорії</p>

---

### 6 Отримання списку виробників у вигляді Xls.

**get** `/market-categories/export-producers`

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл списку виробників (.xls)</p>

---

### 5 Отримання параметрів категорій в JSON

**get** `/v1/market-categories/category-options`

<p>Отримати параметри категорії в JSON</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **category_id** `Integer` **_(обов'язково)_** - <p>Category ID</p>
- **id** `Integer` _(опціонально)_ - <p>ID параметра</p>
- **name** `String` _(опціонально)_ - <p>Назва параметра</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>
- **Version** `String` **_(обов'язково)_** - <p>Мінорна версія</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: CategoryAttributes[] }</p>
- **CatalogAttributesParams.id** `Integer` **_(обов'язково)_** - <p>ID параметра</p>
- **CatalogAttributesParams.name** `String` **_(обов'язково)_** - <p>Назва параметра</p>
- **CatalogAttributesParams.attr_type** `String` **_(обов'язково)_** - <p>Тип атрибута</p>
- **CatalogAttributesParams.filter_type** `String` **_(обов'язково)_** - <p>Тип фільтра<br> <ul><li><b>disable</b> - Не використовувати</li> <li><b>main</b> - В основному наборі</li> <li><b>standart</b> - У стандартному наборі</li> <li><b>advanced</b> - У розширеному наборі</li> <li><b>bottom</b> - У наборі внизу сторінки</li> </ul></p>
- **CatalogAttributesParams.unit** `String` **_(обов'язково)_** - <p>Одиниці виміру</p>
- **CatalogAttributesParams.is_global** `Boolean` **_(обов'язково)_** - <p>Наскрізний параметр</p>
- **CatalogAttributesParams.value_id** `Integer` **_(обов'язково)_** - <p>ID значення</p>
- **CatalogAttributesParams.value_name** `String|Json` **_(обов'язково)_** - <p>Значення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":[
       {
           "id": 54107,
           "name": "Вес",
           "attr_type": "TextInput",
           "filter_type": "disable",
           "unit": "кг",
           "is_global": true,
           "value_id": null,
           "value_name": null
       }
       {
           "id": 58922,
           "name": "Цвет",
           "attr_type": "List",
           "filter_type": "main",
           "unit": null,
           "is_global": false,
           "value_id": 172872,
           "value_name": "Белый"
       },
       {...}
    ]
}
```

---

### 2 Отримання посилання на XLS-файл з параметрами категорій

**get** `/market-categories/options-xls`

<p>Отримати xls файл з параметрами категорій</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **category_id** `Integer` **_(обов'язково)_** - <p>Category ID</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {url} }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{"url":"http://api.market.some/tmp/attributes/14112017_category_80100_attributes.xls"},
}
```

---

### 3 Список активних категорій / Пошук

**get** `/market-categories/search`

<p>Вибірка всіх активних категорій</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **parent_id** `Integer` _(опціонально)_ - <p>ID материнської категорії</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSizeLimit** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **SuccessResponse** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;:{ &quot;marketCategorys&quot;: CatalogCategory[], &quot;_meta&quot;: MetaResponse } }</p>
- **CatalogCategory** `Object` **_(обов'язково)_** - <p>CatalogCategoryModel</p>
- **catalog_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **catalog_category.parent_id** `Integer` **_(обов'язково)_** - <p>ID батьківської категорії</p>
- **catalog_category.name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
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
        "marketCategorys":[
            {
                "category_id": 197626,
                "parent_id": 4630027,
                "name": "Аксессуары для ванной",
            },
            {
                "category_id": 238751,
                "parent_id": 4630027,
                "name": "Бумагодержатели и полочки",
            },
            {...}
        ],
        "_meta":{
            "totalCount": 4,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
 }
```

---

