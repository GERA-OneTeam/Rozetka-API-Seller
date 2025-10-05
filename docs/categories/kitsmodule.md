# KitsModule

### 6 Архівування комплектів

**post** `/kits/archive`

<p>Архівування комплектів</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **id** `Integer` _(опціонально)_ - <p>Фільтр по id комплекту</p>
- **title** `String` _(опціонально)_ - <p>Фільтр по назві комплекту</p>
- **includedIds** `Array` _(опціонально)_ - <p>Перелік ID для яких застосувати архівацію</p>
- **excludedIds** `Array` _(опціонально)_ - <p>Перелік ID виключень, для яких не застосувати архівацію</p>
- **start_date** `Date` _(опціонально)_ - <p>Фільтр по даті початку продажів комплекту</p>
- **end_date** `Date` _(опціонально)_ - <p>Фільтр по даті закінчення продажів комплекту</p>
- **status** `String` _(опціонально)_ - <p>Фільтр по статусу комплекту</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": true
}
```

---

### 2 Зміна статусу комплекта

**put** `/kits/{id}/block`

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id комплекту</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

**Request Body Parameters:**

- **status** `String` _(опціонально)_ - <p>Статус комплекту. Якщо не передавати параметр status статус комплекту не змінюється</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:**  **_(обов'язково)_** - <p>HTTP/1.1 200 OK { &quot;success&quot;: true, &quot;content&quot;: { &quot;id&quot;: 15, &quot;title&quot;: &quot;New API kit&quot;, &quot;status&quot;: &quot;locked&quot;, &quot;start_date&quot;: &quot;2020-01-17&quot;, &quot;end_date&quot;: &quot;2020-01-20&quot; } }</p>
- **Kit** `Object` **_(обов'язково)_** - <p>Model</p>
- **Kit.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **Kit.title** `String` **_(обов'язково)_** - <p>Назва комплекту</p>
- **Kit.status** `String` **_(обов'язково)_** - <p>Статус комплекту(Active/Locked)</p>
- **Kit.start_date** `Date` **_(обов'язково)_** - <p>Дата старту продажів комплекту</p>
- **Kit.end_date** `Date` **_(обов'язково)_** - <p>Дата закінчення продажів комплекту</p>
- **Kit.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.item_main** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.second_items** `Array[Object]` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b>[] ExtraField</p>
- **KitExtra.total_price** `Integer` **_(обов'язково)_** - <p>Загальна ціна набору ExtraField</p>
- **KitExtra.validate_sla** `boolean` **_(обов'язково)_** - <p>Валідний sla ExtraField</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 15,
        "title": "New API kit",
        "status": "locked",
        "start_date": "2020-01-17",
        "end_date": "2020-01-20"
        "item": {
            "id": 161683454,
            "name": "Мобиль",
            "name_ua": "Мобиль",
            "article": "5775827",
            "price_offer_id": null,
            "price": "2000.00",
            "catalog_category": {
                "id": 8858,
                "name": "Электромобили",
                "parent_id": 4894
            },
            "catalog_id": 4657424,
            "group_id": null,
            "photo_preview": "/assets/images/no-image.svg",
            "photo": [],
            "moderation_status": 1,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/161683454/p161683454",
            "sold": 0,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "item_main": {
            "id": 49656,
            "name": "Мобиль",
            "name_ua": "Мобиль",
            "article": "15167",
            "price_offer_id": null,
            "price": "2000.00",
            "catalog_category": {
                "id": 9512,
                "name": "Электромобили",
                "parent_id": 4625901
            },
            "catalog_id": 6514,
            "group_id": null,
            "photo_preview": "/assets/images/no-image.svg",
            "photo": [],
            "moderation_status": 1,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/161683454/p161683454",
            "sold": 0,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "second_items": [
            {
                "id": 379583,
                "param_id": 379585,
                "item_id": 122850666,
                "relative_discount": 10,
                "currency": 1,
                "order": null,
                "item_name": "Название товара",
                "item_photo_preview": "/assets/images/no-image.svg",
                "item_price": "249.00",
                "item_price_in_kit": 224,
                "item_relative_amount": 25,
                "item": {
                    "id": 122850666,
                    "name": "Название товара",
                    "name_ua": null,
                    "article": "",
                    "price_offer_id": "26508",
                    "price": "249.00",
                    "catalog_category": {
                        "id": 4326656,
                        "name": "Учебники",
                        "parent_id": 4326572
                    },
                    "catalog_id": 4326656,
                    "group_id": null,
                    "photo_preview": "/assets/images/no-image.svg",
                    "photo": [],
                    "moderation_status": 0,
                    "sla_id": 40,
                    "url": "https://rozetka.com.ua/122850666/p122850666",
                    "sold": 0,
                    "uploader_offer_id": "26508",
                    "uploader_status": 2
                }
            }
        ],
        "total_price": 2224,
        "validate_sla": true
    }
}
```

---

### 1 Створення комплекту

**post** `/kits/create`

<p>Створення комплекту</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **title** `String` **_(обов'язково)_** - <p>Title kit (Назва комплекту)</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>Item id. (ID товару)</p>
- **start_date** `Date` **_(обов'язково)_** - <p>Start date (Дата старту продажів комплекту)</p>
- **end_date** `Date` _(опціонально)_ - <p>End date (Дата закінчення продажів комплекту)</p>
- **secondItems** `Array` **_(обов'язково)_** - <p>Second items (Список дочірніх товарів, які входять в комплект)</p>
- **secondItems.item_id** `Integer` **_(обов'язково)_** - <p>Second item id (ID товару)</p>
- **secondItems.relative_discount** `Integer` **_(обов'язково)_** - <p>Relative discount (Відносна знижка)</p>
- **secondItems.fixed_discount** `Integer` **_(обов'язково)_** - <p>Fixed discount (Фіксована знижка на основний товар)</p>
- **secondItems.fixed_amount** `Integer` **_(обов'язково)_** - <p>Fixed amount (Фіксована ціна основного товару)</p>

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Kit** `Object` **_(обов'язково)_** - <p>Model</p>
- **Kit.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **Kit.title** `String` **_(обов'язково)_** - <p>Назва комплекту</p>
- **Kit.status** `String` **_(обов'язково)_** - <p>Статус комплекту(Active/Locked)</p>
- **Kit.start_date** `Date` **_(обов'язково)_** - <p>Дата старту продажів комплекту</p>
- **Kit.end_date** `Date` **_(обов'язково)_** - <p>Дата закінчення продажів комплекту</p>
- **Kit.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.item_main** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.second_items** `Array[Object]` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b>[] ExtraField</p>
- **KitExtra.total_price** `Integer` **_(обов'язково)_** - <p>Загальна ціна набору ExtraField</p>
- **KitExtra.validate_sla** `boolean` **_(обов'язково)_** - <p>Валідний sla ExtraField</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 273686,
        "title": "New API kit",
        "status": "active",
        "start_date": "2020-01-17",
        "end_date": "2020-01-20"
    }
}
```

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 273686,
        "title": "New API kit",
        "status": "active",
        "start_date": "2020-01-17",
        "end_date": "2020-01-20",
        "item": {
            "id": 161683454,
            "name": "Мобиль",
            "name_ua": "Мобиль",
            "article": "15167",
            "price_offer_id": null,
            "price": "2000.00",
            "catalog_category": {
                "id": 4657424,
                "name": "Электромобили",
                "parent_id": 4625901
            },
            "catalog_id": 4657424,
            "group_id": null,
            "photo_preview": "/assets/images/no-image.svg",
            "photo": [],
            "moderation_status": 1,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/161683454/p161683454",
            "sold": 0,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "item_main": {
            "id": 161683454,
            "name": "Мобиль",
            "name_ua": "Мобиль",
            "article": "15167",
            "price_offer_id": null,
            "price": "2000.00",
            "catalog_category": {
                "id": 4657424,
                "name": "Электромобили",
                "parent_id": 4625901
            },
            "catalog_id": 4657424,
            "group_id": null,
            "photo_preview": "/assets/images/no-image.svg",
            "photo": [],
            "moderation_status": 1,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/161683454/p161683454",
            "sold": 0,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "second_items": [
            {
                "id": 379583,
                "param_id": 379585,
                "item_id": 122850666,
                "relative_discount": 10,
                "currency": 1,
                "order": null,
                "item_name": "Ленивая мама. Календарь настенный на 2020 год (978-5-04-102735-3 - 110798)",
                "item_photo_preview": "/assets/images/no-image.svg",
                "item_price": "249.00",
                "item_price_in_kit": 224,
                "item_relative_amount": 25,
                "item": {
                    "id": 122850666,
                    "name": "Ленивая мама. Календарь настенный на 2020 год (978-5-04-102735-3 - 110798)",
                    "name_ua": null,
                    "article": "",
                    "price_offer_id": "26508",
                    "price": "249.00",
                    "catalog_category": {
                        "id": 4326656,
                        "name": "Учебники",
                        "parent_id": 4326572
                    },
                    "catalog_id": 4326656,
                    "group_id": null,
                    "photo_preview": "/assets/images/no-image.svg",
                    "photo": [],
                    "moderation_status": 0,
                    "sla_id": 40,
                    "url": "https://rozetka.com.ua/122850666/p122850666",
                    "sold": 0,
                    "uploader_offer_id": "26508",
                    "uploader_status": 2
                }
            }
        ],
        "total_price": 2224,
        "validate_sla": true
    }
}
```

---

### 4 Пошук по комплектах

**get** `/kits/search`

<p>Фільтри по комплектах</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc).</p>

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;kits&quot;: Kit[], &quot;_meta&quot;: MetaResponse }</p>
- **Kit** `Object` **_(обов'язково)_** - <p>Model</p>
- **Kit.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **Kit.title** `String` **_(обов'язково)_** - <p>Назва комплекту</p>
- **Kit.status** `String` **_(обов'язково)_** - <p>Статус комплекту(Active/Locked)</p>
- **Kit.start_date** `Date` **_(обов'язково)_** - <p>Дата старту продажів комплекту</p>
- **Kit.end_date** `Date` **_(обов'язково)_** - <p>Дата закінчення продажів комплекту</p>
- **Kit.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.item_main** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.second_items** `Array[Object]` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b>[] ExtraField</p>
- **KitExtra.total_price** `Integer` **_(обов'язково)_** - <p>Загальна ціна набору ExtraField</p>
- **KitExtra.validate_sla** `boolean` **_(обов'язково)_** - <p>Валідний sla ExtraField</p>
- **Item** `Object` **_(обов'язково)_** - <p>Model</p>
- **Item.id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка</p>
- **Item.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **Item.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **Item.article** `String` **_(обов'язково)_** - <p>Артикул товару</p>
- **Item.price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у продавця</p>
- **Item.price** `Number` **_(обов'язково)_** - <p>Ціна товару</p>
- **Item.stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **Item.weight** `Number` **_(обов'язково)_** - <p>Вага товару</p>
- **Item.commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія по товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br></p>
- **Item.commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії по товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br></p>
- **Item.catalog_category** `Object` **_(обов'язково)_** - <p><a href="#api-Models-CatalogCategoryDetails">CatalogCategory</a>, Категорія товару</p>
- **Item.catalog_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **Item.group_id** `Integer` **_(обов'язково)_** - <p>ID групи</p>
- **Item.photo_preview** `String` **_(обов'язково)_** - <p>Фото-прев'ю, у вигляді посилання</p>
- **Item.photo** `String[]` **_(обов'язково)_** - <p><code>Deprecated</code> Перелік посилань на фото товару<br> Повертає тільки посилання на фото-прев'ю, для отримання якого краще використовувати поле <b><i>photo_preview</i></b></p>
- **Item.moderation_status** `Number` **_(обов'язково)_** - <p><code>Deprecated</code>: Статус товару на модерації <br> <a href="#api-Items-GetItemStatuses">ModerationStatuses</a></p>
- **Item.url** `String` **_(обов'язково)_** - <p>Item url в системі Розетка</p>
- **Item.sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **Item.uploader_offer_id** `String` **_(обов'язково)_** - <p>Id Оффера в Uploader</p>
- **Item.uploader_status** `Integer|null` **_(обов'язково)_** - <p>Статус товару в Uploader</p>
- **Item.sla_id** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>: Набір доставок товару<br> <sup>Замість цього поля бажано використовувати sla_rz_id</sup></p>
- **Item.sla_rz_id** `Integer` **_(обов'язково)_** - <p>Набір доставок товару</p>
- **Item.producer_name** `String` **_(обов'язково)_** - <p>Назва виробника</p>
- **Item.price_old** `Number` **_(обов'язково)_** - <p>Стара ціна</p>
- **CatalogCategory** `Object` **_(обов'язково)_** - <p>CatalogCategoryModel</p>
- **catalog_category.category_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **catalog_category.name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
- **catalog_category.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнської категорії</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "kits": [
            {
                "id": 2942,
                "title": "1515",
                "status": "active",
                "start_date": "2018-04-02",
                "end_date": "2019-10-15",
                "item": {
                    "id": 9144643,
                    "name": "AEOLUS AW02 SNOW ACE 185/60 R15 84T",
                    "name_ua": null,
                    "article": "1",
                    "price": "1808.00",
                    "catalog_category": {
                        "id": 4330821,
                        "name": "Автошины",
                        "parent_id": 4627038
                    },
                    "catalog_id": 4330821,
                    "group_id": null,
                    "photo_preview": null,
                    "photo": [
                        "https://rozetka.com.ua/goods/4019883/9144643_images_4019883664.jpg"
                    ],
                    "moderation_status": 0,
                    "sla_id": 40,
                    "url": "https://rozetka.com.ua/9144643/p9144643",
                    "sold": 11,
                    "uploader_offer_id": null,
                    "uploader_status": null
                },
                "item_main": {
                    "id": 9144643,
                    "name": "AEOLUS AW02 SNOW ACE 185/60 R15 84T",
                    "name_ua": null,
                    "article": "1",
                    "price": "1808.00",
                    "catalog_category": {
                        "id": 4330821,
                        "name": "Автошины",
                        "parent_id": 4627038
                    },
                    "catalog_id": 4330821,
                    "group_id": null,
                    "photo_preview": null,
                    "photo": [
                        "https://rozetka.com.ua/goods/4019883/9144643_images_4019883664.jpg"
                    ],
                    "moderation_status": 0,
                    "sla_id": 40,
                    "url": "https://rozetka.com.ua/9144643/p9144643",
                    "sold": 11,
                    "uploader_offer_id": null,
                    "uploader_status": null
                },
                "second_items": [
                    {
                        "id": 3363,
                        "param_id": 3363,
                        "item_id": 9144594,
                        "relative_discount": 5,
                        "currency": 1,
                        "order": null,
                        "item_name": "ROSAVA БЦ-24 185/75 R16C 104/102N",
                        "item_photo_preview": null,
                        "item_price": "1902.00",
                        "item_price_in_kit": 1807,
                        "item_relative_amount": 95,
                        "item": {
                            "id": 9144594,
                            "name": "ROSAVA БЦ-24 185/75 R16C 104/102N",
                            "name_ua": null,
                            "article": "2",
                            "price": "1902.00",
                            "catalog_category": {
                                "id": 4330821,
                                "name": "Автошины",
                                "parent_id": 4627038
                            },
                            "catalog_id": 4330821,
                            "group_id": null,
                            "photo_preview": null,
                            "photo": [
                                "https://rozetka.com.ua/goods/4019884/9144594_images_4019884072.jpg"
                            ],
                            "moderation_status": 0,
                            "sla_id": 40,
                            "url": "https://rozetka.com.ua/9144594/p9144594",
                            "sold": 0,
                            "uploader_offer_id": null,
                            "uploader_status": null
                        }
                    }
                ],
                "total_price": 3615,
                "validate_sla": true
            },...
        ],
        "_meta": {
            "totalCount": 8,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        }
    }
}
```

---

### 5 Перегляд комплекту

**get** `/kits/{id}`

<p>Фільтри по комплектах</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>Id комплекту</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ Kit }</p>
- **Kit** `Object` **_(обов'язково)_** - <p>Model</p>
- **Kit.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **Kit.title** `String` **_(обов'язково)_** - <p>Назва комплекту</p>
- **Kit.status** `String` **_(обов'язково)_** - <p>Статус комплекту(Active/Locked)</p>
- **Kit.start_date** `Date` **_(обов'язково)_** - <p>Дата старту продажів комплекту</p>
- **Kit.end_date** `Date` **_(обов'язково)_** - <p>Дата закінчення продажів комплекту</p>
- **Kit.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.item_main** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b> ExtraField</p>
- **Kit.second_items** `Array[Object]` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails" class="nav-list-item">ItemModel</a></b>[] ExtraField</p>
- **KitExtra.total_price** `Integer` **_(обов'язково)_** - <p>Загальна ціна набору ExtraField</p>
- **KitExtra.validate_sla** `boolean` **_(обов'язково)_** - <p>Валідний sla ExtraField</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 2942,
        "title": "1515",
        "status": "active",
        "start_date": "2018-04-02",
        "end_date": "2019-10-15",
        "item": {
            "id": 9144643,
            "name": "AEOLUS AW02 SNOW ACE 185/60 R15 84T",
            "name_ua": null,
            "article": "1",
            "price": "1808.00",
            "catalog_category": {
                "id": 4330821,
                "name": "Автошины",
                "parent_id": 4627038
            },
            "catalog_id": 4330821,
            "group_id": null,
            "photo_preview": null,
            "photo": [
                "https://rozetka.com.ua/goods/4019883/9144643_images_4019883664.jpg"
            ],
            "moderation_status": 0,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/9144643/p9144643",
            "sold": 11,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "item_main": {
            "id": 9144643,
            "name": "AEOLUS AW02 SNOW ACE 185/60 R15 84T",
            "name_ua": null,
            "article": "1",
            "price": "1808.00",
            "catalog_category": {
                "id": 4330821,
                "name": "Автошины",
                "parent_id": 4627038
            },
            "catalog_id": 4330821,
            "group_id": null,
            "photo_preview": null,
            "photo": [
                "https://rozetka.com.ua/goods/4019883/9144643_images_4019883664.jpg"
            ],
            "moderation_status": 0,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/9144643/p9144643",
            "sold": 11,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "second_items": [
            {
                "id": 3363,
                "param_id": 3363,
                "item_id": 9144594,
                "relative_discount": 5,
                "currency": 1,
                "order": null,
                "item_name": "ROSAVA БЦ-24 185/75 R16C 104/102N",
                "item_photo_preview": null,
                "item_price": "1902.00",
                "item_price_in_kit": 1807,
                "item_relative_amount": 95,
                "item": {
                    "id": 9144594,
                    "name": "ROSAVA БЦ-24 185/75 R16C 104/102N",
                    "name_ua": null,
                    "article": "2",
                    "price": "1902.00",
                    "catalog_category": {
                        "id": 4330821,
                        "name": "Автошины",
                        "parent_id": 4627038
                    },
                    "catalog_id": 4330821,
                    "group_id": null,
                    "photo_preview": null,
                    "photo": [
                        "https://rozetka.com.ua/goods/4019884/9144594_images_4019884072.jpg"
                    ],
                    "moderation_status": 0,
                    "sla_id": 40,
                    "url": "https://rozetka.com.ua/9144594/p9144594",
                    "sold": 0,
                    "uploader_offer_id": null,
                    "uploader_status": null
                }
            }
        ],
        "total_price": 3615,
        "validate_sla": true
    }
}
```

---

### 3 Оновлення комплекту

**put** `/kits/{id}`

<p>Заблоковані комплекти недоступні до оновлення</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id комплекту</p>

**Request Body Parameters:**

- **title** `String` **_(обов'язково)_** - <p>Title kit  (Назва комплекту)</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>Item id. (ID товару)</p>
- **start_date** `Date` **_(обов'язково)_** - <p>Start date (Дата старту продажів комплекту)</p>
- **end_date** `Date` **_(обов'язково)_** - <p>End date (Дата закінчення продажів комплекту)</p>
- **secondItems** `Array` **_(обов'язково)_** - <p>Second items (Список дочірніх товарів, які входять в комплект)</p>
- **secondItems.item_id** `Integer` **_(обов'язково)_** - <p>Second item id (ID товару)</p>
- **secondItems.relative_discount** `Integer` **_(обов'язково)_** - <p>Relative discount (Відносна знижка)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>id</p>
- **start_date** `Date` **_(обов'язково)_** - <p>дата старту продажів комплекту</p>
- **end_date** `Date` **_(обов'язково)_** - <p>дата закінчення продажів комплекту</p>
- **status** `String` **_(обов'язково)_** - <p>статус комплекту</p>
- **title** `String` **_(обов'язково)_** - <p>назва комплекту</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success": true,
    "content": {
          "id": 6,
          "start_date": "2017-11-01",
          "end_date": "2017-11-30",
          "status": "active",
          "title": "тестововый комплект"
      }
}
```

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 15,
        "title": "New API kit",
        "status": "locked",
        "start_date": "2020-01-17",
        "end_date": "2020-01-20",
        "item": {
            "id": 161683454,
            "name": "Мобиль",
            "name_ua": "Мобиль",
            "article": "5775827",
            "price_offer_id": null,
            "price": "2000.00",
            "catalog_category": {
                "id": 8858,
                "name": "Электромобили",
                "parent_id": 4894
            },
            "catalog_id": 4657424,
            "group_id": null,
            "photo_preview": "/assets/images/no-image.svg",
            "photo": [],
            "moderation_status": 1,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/161683454/p161683454",
            "sold": 0,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "item_main": {
            "id": 49656,
            "name": "Мобиль",
            "name_ua": "Мобиль",
            "article": "15167",
            "price_offer_id": null,
            "price": "2000.00",
            "catalog_category": {
                "id": 9512,
                "name": "Электромобили",
                "parent_id": 4625901
            },
            "catalog_id": 6514,
            "group_id": null,
            "photo_preview": "/assets/images/no-image.svg",
            "photo": [],
            "moderation_status": 1,
            "sla_id": 40,
            "url": "https://rozetka.com.ua/161683454/p161683454",
            "sold": 0,
            "uploader_offer_id": null,
            "uploader_status": null
        },
        "second_items": [
            {
                "id": 379583,
                "param_id": 379585,
                "item_id": 122850666,
                "relative_discount": 10,
                "currency": 1,
                "order": null,
                "item_name": "Название товара",
                "item_photo_preview": "/assets/images/no-image.svg",
                "item_price": "249.00",
                "item_price_in_kit": 224,
                "item_relative_amount": 25,
                "item": {
                    "id": 122850666,
                    "name": "Название товара",
                    "name_ua": null,
                    "article": "",
                    "price_offer_id": "26508",
                    "price": "249.00",
                    "catalog_category": {
                        "id": 4326656,
                        "name": "Учебники",
                        "parent_id": 4326572
                    },
                    "catalog_id": 4326656,
                    "group_id": null,
                    "photo_preview": "/assets/images/no-image.svg",
                    "photo": [],
                    "moderation_status": 0,
                    "sla_id": 40,
                    "url": "https://rozetka.com.ua/122850666/p122850666",
                    "sold": 0,
                    "uploader_offer_id": "26508",
                    "uploader_status": 2
                }
            }
        ],
        "total_price": 2224,
        "validate_sla": true
    }
}
```

---

