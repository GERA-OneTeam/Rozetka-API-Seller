# ItemPromoPriceController

### 1. Пошук товарів для промо-розсилки

**get** `/item-promo-prices/search`

<p>Пошук товарів для промо-розсилки</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **item_id** `Integer` _(опціонально)_ - <p>ID товару</p>
- **ids** `String` _(опціонально)_ - <p>Список ID товарів</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару магазину</p>
- **article** `String` _(опціонально)_ - <p>Артікул</p>
- **sell_status** `Integer` _(опціонально)_ - <p>Наявність товару</p>
- **item_name** `String` _(опціонально)_ - <p>Назва товару</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна: від</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Промо-ціна: до</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Промо-ціна: від</p>
- **is_promo_sent** `Integer` _(опціонально)_ - <p>Ознака відображення товарів, які потрапили до промо-розсилки (1 - немає в розсилці/ 2 - є в розсилці/ 3 - немає: брав участь у попередьному промо)</p>
- **catalog_id** `Integer` _(опціонально)_ - <p>ID категорії товарів</p>
- **catalog_name** `String` _(опціонально)_ - <p>Назва категорії</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;itemPromoPrices&quot;: itemPromoPrices[], &quot;_meta&quot;: MetaResponse }</p>
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
        "itemPromoPrices": [
            {
                "item_id": 332200339,
                "item_name": "МФУ 3",
                "item_url": "https://rozetka.com.ua/332200339/p332200339",
                "price": 999,
                "promo_price": 50,
                "is_promo_sent": 1,
                "article": "A123456",
                "change_date": "2023-02-10 06:36:45",
                "price_offer_id": "3",
                "sell_status": true,
                "reason": [],
                "target_stock_quantity": null,
                "recommended_price": "928.00",
                "sold_with_promocode": 0,
                "sold": 0,
                "catalog_category": {
                    "id": 2560892,
                    "name": "Магниты для досок и аксессуары",
                    "status": 1,
                    "parent": 2460412,
                    "path": "/4625734/2460392/2460412/2560892",
                    "level": 4,
                    "children": 0,
                    "created": "2017-06-07 15:24:38",
                    "updated": "2023-02-01 09:05:43.449822",
                    "name_ua": "Магніти для дошок та аксесуари",
                    "access_download": true,
                    "temp_access_download": true
                },
                "syncSource": {
                    "sync_source_id": 22759,
                    "availability": 4
                }
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

