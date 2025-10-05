# PriceMarkets

### 2 Список категорій по прайсу

**get** `/price-markets/categories-by-price`

<p>Список всіх категорій по конкретному прайсу</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **price_id** `Integer` **_(обов'язково)_** - <p>Номер прайсу</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` _(опціонально)_ - <p>Field sorting +/-(asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { PriceCategory[]} }</p>
- **content** `Price` **_(обов'язково)_** - <p>Масив прайсів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": "{[
          {
              "id":1347,
              "title":"test8",*
              "sync_source_id": 1356,
              "price_category_id": "113805",
              "title": "Кухонные мойки",
              "category_id": 113805,
              "is_binded": true,
              "category_id_hint": "{"113805": "Сантехника и ремонт / Сантехника и мебель для ванной / Мойки, смесители, сифоны / Кухонные мойки"}"
              "category_hint": [ {"key" => "113805", "value" => "Сантехника и ремонт / Сантехника и мебель для ванной / Мойки, смесители, сифоны / Кухонные мойки"}"
           },
    ]}"
}
```

---

### 4 Список параметрів по зв'язаним категоріям

**get** `/price-markets/params-for-category`

<p>Список параметрів по зв'язаним категоріям</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **price_id** `Integer` **_(обов'язково)_** - <p>Номер прайсу</p>
- **cat_ids** `String` **_(обов'язково)_** - <p>Строка з номерів категорій через кому</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` **_(обов'язково)_** - <p>Field sorting +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { PriceCategoryParams[]} }</p>
- **content** `Price` **_(обов'язково)_** - <p>Масив прайсів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
  "success": true,
  "content": {
    "params": {
      "data": [
        {
          "id": 98764,
          "title": "Тип",
          "bindType": 0,
          "rzId": null,
          "rzTitle": null,
          "syncSourceId": null,
          "syncSourceCategoryId": null,
          "hints": [
            {
              "id": 567,
              "type": "BoxType",
              "title": "Тип",
              "valueHintIds": []
            }
          ],
          "values": [
            {
              "id": 564565,
              "title": "Product title"
            }
          ],
          "hasRzValues": false
        }
      ],
      "params": {
        "pagination": {
          "page": "1",
          "pageCount": 1
        },
        "totalCount": 12
      }
    }
  }
}
```

---

### 1 Список всіх прайсів

**get** `/price-markets/price`

<p>Список всіх прайсів для даного продавця</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { Price[]} }</p>
- **content** `String` **_(обов'язково)_** - <p>Масив прайсів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": "[
            {
                "id":1347,
                "title":"test8"
             },
    ]"
}
```

---

### 3 Зв'язування категорій прайса з категоріями Розетки

**post** `/price-markets/create-bindings-categories`

<p>Зв'язування категорій прайса з категоріями овокса</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {   } }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content": {
                 "757": "Price category '757' successfully bound to Rozetka category '2028477'",
                "758": "Price category '758' successfully bound to Rozetka category '148966'"
             }
}
```

---

