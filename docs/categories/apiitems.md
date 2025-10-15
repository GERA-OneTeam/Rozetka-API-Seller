# ApiItems

### 6 Додатковий товар

**get** `/items/default-item`

<p>DefaultItem</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;default_item&quot;: Item|null }</p>
- **default_item** `Object` **_(обов'язково)_** - <p>Додатковий товар</p>
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
        "default_item":
            {
                "id": 87587786,
                "name": "Дополнительная продажа",
                "name_ua": "Додатковий продаж",
                "article": "additional",
                "price": "0.00",
                "catalog_category": {
                    "id": 4657160,
                    "name": "Дополнительная продажа",
                    "parent_id": 4655025
                },
                "catalog_id": 4657160,
                "group_id": null,
                "photo_preview": null,
                "photo": [],
                "moderation_status": 1,
                "sla_id": 40,
                "url": "https://rozetka.com.ua/87587786/p87587786",
                "sold": 1,
                "uploader_offer_id": null,
                "uploader_status": null
            }
    }
}
```

---

### 5.2 Отримання файлів для вивантаження

**get** `/items/file`

<p>Отримання файлів для вивантаження</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Url Parameters:**

- **manager_id** `Integer` _(опціонально)_ - <p>ID менеджера</p>
- **export_id** `Integer[]` _(опціонально)_ - <p>ID вивантаження</p>
- **user_name** `String` _(опціонально)_ - <p>ПIБ користувача</p>
- **created_at_from** `String` _(опціонально)_ - <p>Дата створення от</p>
- **created_at_to** `String` _(опціонально)_ - <p>Дата створення до</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість  записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **manager** `Object` **_(обов'язково)_** - <p><a href="#api-Models-ManagerDetails">Менеджер</a></p>
- **export_id** `Integer` **_(обов'язково)_** - <p>ID вивантаження</p>
- **status** `String` **_(обов'язково)_** - <p><a href="#api-Models-ExportStatusModelDetails">Статус вивантаження</a></p>
- **created_at** `String` **_(обов'язково)_** - <p>Дата створення</p>
- **updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **file_link** `String` **_(обов'язково)_** - <p>Посилання на файл</p>

#### Приклад відповіді

```json
{
   "success": true,
   "content": {
       "items": [
           {
             "manager": {
                 "id": 165,
                 "fio": "Стеценко Наталія Олександрівна"
               },
               "export_id": 55,
               "status": 1,
               "created_at": "2021-09-03 11:33:21",
               "updated_at": "2021-09-03 11:33:28",
               "file_link": "url"
           },
           {
             "manager": {
                 "id": 165,
                 "fio": "Стеценко Наталія Олександрівна"
               },
               "export_id": 54,
               "status": 1,
               "created_at": "2021-09-03 11:29:00",
               "updated_at": "2021-09-03 11:29:06",
               "file_link": "url"
           }
       ],
       "_meta": {
           "totalCount": 12,
           "pageCount": 6,
           "currentPage": 1,
           "perPage": 2
       }
   }
}
```

---

### 1.0 Всі товари

**get** `/goods/all`

<p>Пошук товарів, вкладка &quot;Всі товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **sla_id** `Integer` _(опціонально)_ - <p>ID набору доставки</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **upload_status** `String` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.9 Архівні товари

**get** `/goods/archive`

<p>Пошук товарів, вкладка &quot;Архівні товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **upload_status** `Integer` _(опціонально)_ - <p>Внутрішній статус товару в системі Розетка Маркетплейс<br> <small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично в значення 15 (архівний)</small></p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.7 Оновлені товари

**get** `/goods/changes`

<p>Пошук товарів, вкладка &quot;Оновлені товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **change_status** `Integer` _(опціонально)_ - <p>Статус поновлення товару<br></p> <ul> <li>0 - Очікує підтвердження продавця</li> <li>2 - Оновлення відхилено</li> <li>4 - У черзі на оновлення</li> </ul>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **upload_status** `String` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "items": [
            {
                "rz_item_id": 331722407,
                "price_offer_id": "MC-772",
                "item_id": 41113,
                "sync_source_id": 78,
                "sync_source": {
                    "id": 78,
                    "availability": 3,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "MC-772 Кухонная мойка Solid Квадро из искусственного камня теракот Update",
                "name_ua": null,
                "name_ru": "MC-772 Кухонная мойка Solid Квадро из искусственного камня теракот Update",
                "url": "https://rozetka.com.ua/331722407/p331722407",
                "article": "",
                "description": null,
                "price": 2719,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2133,
                "price_category_id": "113805",
                "rz_category": {
                    "id": 113805,
                    "title": "Кухонные мойки",
                    "title_ua": "Кухонні мийки",
                },
                "price_category": {
                    "id": "113805",
                    "title": "Кухонные мойки",
                    "title_ua": null,
                },
                "rz_producer": {
                    "id": null,
                    "title": null
                },
                "rz_series": null,
                "price_producer_name": "Solid",
                "price_producer_id": 2648,
                "sync_source_producer":{
                    "id": 2648,
                    "title": "Solid",
                    "is_binded": 2,
                    "bind_type": 0
                },
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 9,
                "upload_status_title": "Не пройшов модерацію",
                "blocked_reason": [
                ],
                "change_status": 4,
                "changes": {
                    "changed_fields": {
                        "name": true,
                        "docket": false,
                        "params": false,
                        "sla_id": false,
                        "picture": false,
                        "document": false,
                        "alt_sla_id": false,
                        "description": false,
                        "title_short": false,
                        "country_code": false,
                        "through_params": false,
                        "promo_title_part": false,
                        "max_cart_quantity": false,
                        "min_cart_quantity": false,
                        "sync_source_group_id": false,
                        "sync_source_series_id": false,
                        "sync_source_vendors_id": false,
                        "sync_source_category_id": false,
                        "name_ua": false,
                        "docket_ua": false,
                        "description_ua": false
                    },
                    "status": "У черзі на оновлення",
                    "reasons": [
                        "У товарі є посилання на сторонні ресурси"
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 10,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "234242",
                    "975"
                ],
                "comment": "test",
                "is_ff": 0,
                "max_cart_quantity": null,
                "min_cart_quantity": null,
                "created_at": "2022-01-05 17:03:18",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 0.0 Лічильники товарів

**get** `/goods/counts`

<p>Лічильники товарів</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Активні товари":</p></p> <ul> <li>вкладка "У продажу" - items_on_sale_tab</li> <li>вкладка "Немає" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul> <li>вкладка "Помилки технічні" - items_errors</li> <li>вкладка "Помилки валідаційні" - not_valid</li> <li>вкладка "Видалені з прайсу" - not_available</li> <li>вкладка "Приховані модератором" - items_hidden</li> <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul> <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "Вимагають підтвердження":</p> <ul> <li>вкладка "На оновлення" - items_changes</li> <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li> <li>вкладка "Підтвердження ціни" - items_prices</li> </ul> <p>Розділ "У процесі модерації":</p> <ul> <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "Чекає на підтвердження":</p> <ul> <li>вкладка "Чекає на підтвердження" - items_waiting_approve</li> </ul> <p>Розділ "Оновлення відхилено":</p> <ul> <li>вкладка "Оновлення відхилено" - items_rejected</li> </ul> <p>Розділ "У черзі на оновлення":</p> <ul> <li>вкладка "У черзі на оновлення" - items_for_update</li> </ul> <p>Розділ "Всі товари":</p> <ul> <li>вкладка "Всі" - items_all_tab</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **all_items** `Integer` **_(обов'язково)_** - <p>Всі товари</p>
- **active_items** `Integer` **_(обов'язково)_** - <p>Активні товари</p>
- **inactive_items** `Integer` **_(обов'язково)_** - <p>Неактивні товари</p>
- **new_items** `Integer` **_(обов'язково)_** - <p>Нові товари</p>
- **on_moderation_items** `Integer` **_(обов'язково)_** - <p>Товари на модерації</p>
- **confirmation_requiring_items** `Integer` **_(обов'язково)_** - <p>Товари, які потребують підтвердження</p>
- **items_waiting_approve** `Integer` **_(обов'язково)_** - <p>Товари, які чекають на підтвердження</p>
- **items_rejected** `Integer` **_(обов'язково)_** - <p>Товари по яким оновлення відхилено</p>
- **items_for_update** `Integer` **_(обов'язково)_** - <p>Товари, які знаходяться у черзі на оновлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "active_items": 3,
     "inactive_items": 3,
     "new_items": 0,
     "on_moderation_items": 0,
     "confirmation_requiring_items": 3,
     "items_waiting_approve": 18,
     "items_rejected": 0,
     "items_for_update": 4,
     "all_items": 9
 }
}
```

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "items_errors": 0,
     "items_changes": 0
 }
}
```

---

### 1.3 Товари з помилками

**get** `/goods/errors`

<p>Пошук товарів, вкладка &quot;Товари з помилками&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **upload_status** `String` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.5 Приховані товари

**get** `/goods/hidden`

<p>Пошук товарів, вкладка &quot;Приховані товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **upload_status** `Integer` _(опціонально)_ - <p>Внутрішній статус товару в системі Розетка Маркетплейс<br> <small><ul></p> <li>9 - не пройшли модерацію</li> <li>11 - приховані</li> </ul></small>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 7.1 Деталі зміненого товару

**get** `/goods/changes-details`

<p>Деталі зміненого товару</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **item_id** `Integer` _(опціонально)_ - <p>ID товару у внутрішній системі<br> <code>Є обов'язковим, якщо не заповнено rz_item_id</code></p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс<br> <code>Є обов'язковим, якщо не заповнено item_id</code></p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;item&quot;: { &quot;original&quot;: ItemDetails, &quot;updated&quot;: ItemDetails, &quot;difference&quot;: array } } }</p>
- **item** `Object` **_(обов'язково)_** - <p>Деталі зміненого товару</p>
- **item.original** `ItemDetails` **_(обов'язково)_** - <p>Оригінальний товар<br> Поля відповідають описаним у респонсі методу <a href="#api-ApiItems-GetGoodsItemDetails">Деталі товару</a></p>
- **item.updated** `ItemDetails` **_(обов'язково)_** - <p>Змінений товар<br> Поля відповідають описаним у респонсі методу <a href="#api-ApiItems-GetGoodsItemDetails">Деталі товару</a></p>
- **item.difference** `String[]` **_(обов'язково)_** - <p>Список назв змінених полів у товарі</p>
- **item.changed_fields** `Object` **_(обов'язково)_** - <p>Об'єкт із назвами полів і ознакою, чи змінено це поле<br> <small>Відповідає полю <code>changes.changed_fields</code> у списку змінених товарів</small></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "item": {
            "original": {
                "rz_item_id": 438677915,
                "price_offer_id": "131829",
                "item_id": 123537880,
                "sync_source_id": 9945,
                "sync_source": {
                    "id": 9945,
                    "availability": 3,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 54808,
                "rz_group_id": null,
                "name": "Еволюція українського вбрання. Сторінки історії - 131829",
                "name_ua": "Еволюція українського вбрання. Сторінки історії - 131829",
                "name_ru": "Еволюція українського вбрання. Сторінки історії - 131829",
                "url": "https://rozetka.com.ua/438677915/p438677915",
                "article": "",
                "description": "История украинского наряда насчитывает не одно тысячелетие. Еще в старину наш народ создавал самобытные образцы одежды, обуви и аксессуаров, воплотившихся в дальнейших вариантах традиционного костюма. В разное время на разных территориях украинская одежда развивалась по-своему, обогащалась оригинальными чертами, присущими населению той или иной местности, впитывала опыт и эстетику разнообразных культур. История наряда неотделима от истории народа, от его психологических, эстетических, духовных стремлений, неисчерпаемого творческого потенциала. Только через историю одежды можно получить целостное представление об истории народа, государства, мира. В работе использованы материалы из музеев, фондов, библиотек Украины, Канады, Института археологии НАН Украины, из частных коллекций ПЛАТАР, Стеллы Беньяминовой, работы Народного мастера Валентины Ануаровой-Лисоколенко, а также коллекции реконструкций в материале исторического костюма КДАДМПД им. М. Бойчука.",
                "description_ua": "Історія українського вбрання налічує не одне тисячоліття. Ще за сивої давнини наш народ створював самобутні зразки одягу, взуття й аксесуарів, що втілилися в подальших варіантах традиційного костюма. У різні часи на різних теренах українське вбрання розвивалося по-своєму, збагачувалося оригінальними рисами, притаманними населенню тієї чи іншої місцевості, всотувало досвід і естетику різномантних культур. Історія вбрання невіддільна від історії народу, від його психологічних, естетичних, духовних прагнень, невичерпного творчого потенціалу. Тільки через історію вбрання можна отримати цілісне уявлення про історію народу, держави, світу. У роботі використано матеріали з музеїв, фондів, бібліотек України, Канади, Інституту археології НАН України, з приватних колекцій ПЛАТАР, Стелли Бєньямінової, роботи Народного майстра Валентини Ануарової-Лісоколенко, а також колекції реконструкцій у матеріалі історичного костюма КДАДМПД ім. М. Бойчука.",
                "price": 2500,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 1040581,
                "price_category_id": "124",
                "rz_category": {
                    "id": 4005167,
                    "title": "Детская литература",
                    "title_ua": "Дитяча література"
                },
                "price_category": {
                    "id": "124",
                    "title": "Книги для досуга",
                    "title_ua": null
                },
                "rz_producer": {
                    "id": 1572,
                    "title": "Vivat"
                },
                "price_producer_name": "Vivat",
                "price_producer_id": 709870,
                "sync_source_producer":{
                    "id": 709870,
                    "title": "Vivat",
                    "is_binded": 1,
                    "bind_type": 1
                },
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [],
                "photo_upload_status":1,
                "rz_status": 1,
                "rz_sell_status": 3,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 2,
                "upload_status_title": "Активний",
                "blocked_reason": [
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": null
                },
                "stock_quantity": 1,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": "",
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": null,
                "duplicate_mark": false,
                "bpm_number": [
                    2417408,
                    2569585,
                    2582556
                ],
                "comment": null,
                "is_ff": false,
                "max_cart_quantity": null,
                "min_cart_quantity": null,
                "created_at": "2024-06-28 17:44:34",
                "state": 1,
                "can_update_content_fields": false,
                "sync_source_series": null,
                "sync_source_category": {
                    "id": 1040581,
                    "title": "Книги для досуга",
                    "price_category_id": "124",
                    "category_id": 4005167,
                    "is_virtual": false
                },
                "params": [
                    {
                        "id": 70420,
                        "title": "ISBN",
                        "type": "TextInput",
                        "value": "9789669821379",
                        "bind_fail_reason": 0,
                        "rz_title": "ISBN",
                        "seller_value": "9789669821379"
                    },
                    {
                        "id": 70364,
                        "title": "Автор",
                        "type": "TextInput",
                        "value": "Зінаїда Васіна",
                        "bind_fail_reason": 0,
                        "rz_title": "Автор",
                        "seller_value": "Зінаїда Васіна"
                    },
                    {
                        "id": 70392,
                        "title": "К-во страниц",
                        "type": "TextInput",
                        "value": "560",
                        "bind_fail_reason": 0,
                        "rz_title": "Количество страниц",
                        "seller_value": "560"
                    },
                    {
                        "id": 77961,
                        "title": "Переплет",
                        "type": "ComboBox",
                        "value": [
                            {
                                "id": 363267,
                                "value": "Твердый"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Переплет",
                        "seller_value": "Твердый"
                    },
                    {
                        "id": 70399,
                        "title": "Формат",
                        "type": "TextInput",
                        "value": "225x305 мм",
                        "bind_fail_reason": 0,
                        "rz_title": "Формат книги",
                        "seller_value": "225x305 мм"
                    },
                    {
                        "id": 70378,
                        "title": "Язык",
                        "type": "ComboBox",
                        "value": [
                            {
                                "id": 275240,
                                "value": "Украинский"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Язык",
                        "seller_value": "українська"
                    },
                    {
                        "id": 98900,
                        "title": "Країна-виробник товару",
                        "type": "ListValues",
                        "value": [
                            {
                                "id": 544338,
                                "value": "Украина"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Страна-производитель товара",
                        "seller_value": "Україна"
                    },
                    {
                        "id": 87790,
                        "title": "Країна реєстрації бренду",
                        "type": "ListValues",
                        "value": [
                            {
                                "id": 429058,
                                "value": "Украина"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Страна регистрации бренда",
                        "seller_value": "Україна"
                    }
                ],
                "EAN": "",
                "delivery": "",
                "error_log": ""
            },
            "updated": {
                "rz_item_id": 438677915,
                "price_offer_id": "131829",
                "item_id": 123537880,
                "sync_source_id": 9945,
                "sync_source": {
                    "id": 9945,
                    "availability": 3,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 54808,
                "rz_group_id": null,
                "name": "Еволюція українського вбрання. Сторінки історії - 131829",
                "name_ua": "Еволюція українського вбрання. Сторінки історії - 131829",
                "name_ru": "Еволюція українського вбрання. Сторінки історії - 131829",
                "url": "https://rozetka.com.ua/438677915/p438677915",
                "article": "",
                "description": "История украинского наряда насчитывает не одно тысячелетие. Еще в старину наш народ создавал самобытные образцы одежды, обуви и аксессуаров, воплотившихся в дальнейших вариантах традиционного костюма. В разное время на разных территориях украинская одежда развивалась по-своему, обогащалась оригинальными чертами, присущими населению той или иной местности, впитывала опыт и эстетику разнообразных культур. История наряда неотделима от истории народа, от его психологических, эстетических, духовных стремлений, неисчерпаемого творческого потенциала. Только через историю одежды можно получить целостное представление об истории народа, государства, мира. В работе использованы материалы из музеев, фондов, библиотек Украины, Канады, Института археологии НАН Украины, из частных коллекций ПЛАТАР, Стеллы Беньяминовой, работы Народного мастера Валентины Ануаровой-Лисоколенко, а также коллекции реконструкций в материале исторического костюма КДАДМПД им. М. Бойчука.",
                "description_ua": "Історія українського вбрання налічує не одне тисячоліття. Ще за сивої давнини наш народ створював самобутні зразки одягу, взуття й аксесуарів, що втілилися в подальших варіантах традиційного костюма. У різні часи на різних теренах українське вбрання розвивалося по-своєму, збагачувалося оригінальними рисами, притаманними населенню тієї чи іншої місцевості, всотувало досвід і естетику різномантних культур. Історія вбрання невіддільна від історії народу, від його психологічних, естетичних, духовних прагнень, невичерпного творчого потенціалу. Тільки через історію вбрання можна отримати цілісне уявлення про історію народу, держави, світу. У роботі використано матеріали з музеїв, фондів, бібліотек України, Канади, Інституту археології НАН України, з приватних колекцій ПЛАТАР, Стелли Бєньямінової, роботи Народного майстра Валентини Ануарової-Лісоколенко, а також колекції реконструкцій у матеріалі історичного костюма КДАДМПД ім. М. Бойчука.",
                "price": 2500,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 1040581,
                "price_category_id": "124",
                "rz_category": {
                    "id": 4005167,
                    "title": "Детская литература",
                    "title_ua": "Дитяча література"
                },
                "price_category": {
                    "id": "124",
                    "title": "Книги для досуга",
                    "title_ua": null
                },
                "rz_producer": {
                    "id": 1572,
                    "title": "Vivat"
                },
                "price_producer_name": "Vivat",
                "price_producer_id": 709870,
                "sync_source_producer":{
                    "id": 709870,
                    "title": "Vivat",
                    "is_binded": 1,
                    "bind_type": 1
                },
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 1,
                "rz_sell_status": 3,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 2,
                "upload_status_title": "Активний",
                "blocked_reason": [
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": null
                },
                "stock_quantity": 1,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": "",
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": null,
                "duplicate_mark": false,
                "bpm_number": [
                    2417408,
                    2569585,
                    2582556
                ],
                "comment": null,
                "is_ff": false,
                "max_cart_quantity": null,
                "min_cart_quantity": null,
                "created_at": "2024-06-28 17:44:34",
                "state": 1,
                "can_update_content_fields": false,
                "sync_source_series": null,
                "sync_source_category": {
                    "id": 1040581,
                    "title": "Книги для досуга",
                    "price_category_id": "124",
                    "category_id": 4005167,
                    "is_virtual": false
                },
                "params": [
                    {
                        "id": 68513,
                        "title": "Автор",
                        "type": "TextInput",
                        "value": "Зінаїда Васіна",
                        "bind_fail_reason": 0,
                        "rz_title": "Автор",
                        "seller_value": "Зінаїда Васіна"
                    },
                    {
                        "id": 77355,
                        "title": "Переплет",
                        "type": "ComboBox",
                        "value": [
                            {
                                "id": 356403,
                                "value": "Твердый"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Переплет",
                        "seller_value": "Твердый"
                    },
                    {
                        "id": 68534,
                        "title": "К-во страниц",
                        "type": "Integer",
                        "value": 560,
                        "bind_fail_reason": 0,
                        "rz_title": "Количество страниц",
                        "seller_value": 560
                    },
                    {
                        "id": 68576,
                        "title": "ISBN",
                        "type": "TextInput",
                        "value": "9789669821379",
                        "bind_fail_reason": 0,
                        "rz_title": "ISBN",
                        "seller_value": "9789669821379"
                    },
                    {
                        "id": 68541,
                        "title": "Формат",
                        "type": "TextInput",
                        "value": "225x305 мм",
                        "bind_fail_reason": 0,
                        "rz_title": "Формат",
                        "seller_value": "225x305 мм"
                    },
                    {
                        "id": 68569,
                        "title": "Язык",
                        "type": "ComboBox",
                        "value": [
                            {
                                "id": 253362,
                                "value": "Украинский"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Язык",
                        "seller_value": "українська"
                    },
                    {
                        "id": 98900,
                        "title": "Країна-виробник товару",
                        "type": "ListValues",
                        "value": [
                            {
                                "id": 544338,
                                "value": "Украина"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Страна-производитель товара",
                        "seller_value": "Україна"
                    },
                    {
                        "id": 87790,
                        "title": "Країна реєстрації бренду",
                        "type": "ListValues",
                        "value": [
                            {
                                "id": 429058,
                                "value": "Украина"
                            }
                        ],
                        "bind_fail_reason": 0,
                        "rz_title": "Страна регистрации бренда",
                        "seller_value": "Україна"
                    }
                ],
                "EAN": "",
                "delivery": "",
                "error_log": ""
            },
            "difference": [
                "params"
            ],
            "changed_fields": {
                 "name": false,
                 "docket": false,
                 "params": true,
                 "picture": false,
                 "description": false,
                 "sync_source_series_id": false,
                 "sync_source_vendors_id": false,
                 "name_ua": false,
                 "docket_ua": false,
                 "description_ua": false
             }
        }
    }
}
```

---

### 7.0 Деталі товару

**get** `/goods/details`

<p>Деталі товару</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **item_id** `Integer` _(опціонально)_ - <p>ID товару у внутрішній системі<br> <code>Є обов'язковим, якщо не заповнено rz_item_id</code></p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс<br> <code>Є обов'язковим, якщо не заповнено item_id</code></p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;item&quot;: ItemDetails }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
- **sync_source_category** `Object` **_(обов'язково)_** - <p>Категорія у джерелі</p>
- **sync_source_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії у джерелі</p>
- **sync_source_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в джерелі</p>
- **sync_source_category.price_category_id** `String` **_(обов'язково)_** - <p>ID категорії в прайсі</p>
- **sync_source_category.category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **sync_source_category.is_virtual** `Boolean` **_(обов'язково)_** - <p>Чи є віртуальною категорією</p>
- **EAN** `String` **_(обов'язково)_** - <p>EAN товару</p>
- **delivery** `String` **_(обов'язково)_** - <p>Інформація про доставку</p>
- **error_log** `String` **_(обов'язково)_** - <p>Помилки товару</p>
- **params** `Object[]` **_(обов'язково)_** - <p>Атрибути (параметри, характеристики) товару, масив об'єктів Attribute<br></p>
- **params.id** `Integer` **_(обов'язково)_** - <p>ID характеристики</p>
- **params.title** `String` **_(обов'язково)_** - <p>Назва характеристики</p>
- **params.type** `String` **_(обов'язково)_** - <p>Тип характеристики</p>
- **params.value** `Object[]|String|Integer|Number|Boolean` **_(обов'язково)_** - <p>Значення характеристики (залежно від типу характеристики тип даних значення змінюється)<br><br> <small>Для типів <code>'List', 'ListValues', 'ComboBox', 'CheckBoxGroup', 'CheckBoxGroupValues'</code> очікується value в вигляді масиву об'єктів з ID та value отриманими з довідника.</small><br> <br> <small>Для типу <code>'Integer'</code> очікується value у вигляді значення Integer</small><br> <br> <small>Для типу <code>'Decimal'</code> очікується value у вигляді значення Number</small><br> <br> <small>Для типів <code>'Text', 'TextArea', 'TextInput'</code> очікується value у вигляді рядка</small><br> <br> <small>Для типу <code>'CheckBox'</code> очікується value у вигляді значення Boolean true або false</small><br> <br></p>
- **params.value_ua** `String` **_(обов'язково)_** - <p>Значення характеристики українською. Доступно лише для текстових характеристик ('Text', 'TextArea', 'TextInput')<br><br></p>
- **params.value.id** `Integer` **_(обов'язково)_** - <p>ID значення</p>
- **params.value.value** `String` **_(обов'язково)_** - <p>Значення</p>
- **params.bind_fail_reason** `Integer` **_(обов'язково)_** - <p>Причина не прив'язки параметра (0 – Параметр прив'язаний, 1 – Параметр (значення) не прив'язаний, 2 – Відсутня параметр для прив'язки, 3 – Формат значень не підходить для прив'язки, 4 – Помилка прив'язки)</p>
- **params.rz_title** `String` **_(обов'язково)_** - <p>Назва характеристики розетки</p>
- **params.seller_value** `String|Integer|Number|Boolean` **_(обов'язково)_** - <p>Значення характеристики продавця (може приймати різні типи за аналогією з params.value)</p>
- **params.unit** `String` **_(обов'язково)_** - <p>Одиниця виміру товару</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "item": [
            {
                "rz_item_id": null,
                "price_offer_id": "123123AF",
                "item_id": 131415,
                "sync_source_id": 199,
                "sync_source": {
                    "id": 199,
                    "availability": 4,
                    "is_virtual_source": null,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "rz_group_id": null,
                "name": "Телефон",
                "name_ua": null,
                "name_ru": "Телефон",
                "url": null,
                "article": "ERTY23423dg4",
                "description": "",
                "description_ua": "Описанисание товара (на украинском языке)",
                "price": 999,
                "price_old": 1200,
                "price_promo": 777,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 7952,
                "price_category_id": "80007",
                "rz_category": {
                    "id": 80007,
                    "title": "МФУ/Принтеры",
                    "title_ua": null
                },
                "price_category": {
                    "id": "80007",
                    "title": "МФУ/Принтеры",
                    "title_ua": null
                },
                "rz_producer": {
                    "id": 4,
                    "title": "ASUS"
                },
                "price_producer_name": null,
                "price_producer_id": 5988,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "rz_status": null,
                "rz_sell_status": null,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 0,
                "upload_status_title": "Новий",
                "blocked_reason": [
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "stock_quantity": 10,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": null,
                "duplicate_mark": false,
                "bpm_number": [
                ],
                "comment": null,
                "is_ff": false,
                "max_cart_quantity": 10,
                "min_cart_quantity": 2,
                "created_at": null,
                "state": "new",
                "can_update_content_fields": false,
                "sync_source_category": {
                    "id": 7952,
                    "title": "МФУ/Принтеры",
                    "price_category_id": "80007",
                    "category_id": 80007,
                    "is_virtual": false
                },
                "params": [
               {
                 "id": 111,
                 "title": "Длина рукава",
                 "type": "ComboBox",
                 "value": [
                     {
                         "id": 2222,
                         "value": "С короткими рукавами"
                     }
                 ],
                 "bind_fail_reason": 1,
                 "rz_title": "Длина рукава",
                 "seller_value": "С короткими рукавами",
                 "unit": ""
             },
             {
                 "id": 3334,
                 "title": "Сarryover",
                 "type": "CheckBox",
                 "value": true,
                 "bind_fail_reason": 0,
                 "rz_title": "Сarryover",
                 "seller_value": true
             },
             {
                 "id": 55554,
                 "title": "Размер",
                 "type": "ListValues",
                 "value": [
                     {
                         "id": 3334,
                         "value": "XS"
                     },
                     {
                         "id": 5555,
                         "value": "XL"
                      }
                 ],
                 "bind_fail_reason": 4,
                 "rz_title": "Размер",
                 "seller_value": "XS,XL",
                 "unit": ""
             },
             {
                 "id": 4432,
                 "title": "Вес в упаковке, кг",
                 "type": "Decimal",
                 "value": 1.3,
                 "bind_fail_reason": 1,
                 "rz_title": "Вес в упаковке, кг",
                 "seller_value": 1.3,
                 "unit": ""
             },
             {
                 "id": 112222,
                 "title": "Дополнительные характеристики",
                 "type": "TextArea",
                 "value": "значення ру",
                 "value_ua": "значення юа",
                 "bind_fail_reason": 1,
                 "rz_title": "Дополнительные характеристики",
                 "seller_value": "значення юа",
                 "unit": ""
             }
          ],
                 "EAN": "",
                 "delivery": "",
                 "error_log": null
            }
        ]
    }
}
```

---

### 1.8 Товари на модерації

**get** `/goods/moderation`

<p>Пошук товарів, вкладка &quot;Товари на модерації&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **upload_status** `Integer` _(опціонально)_ - <p>Внутрішній статус товару в системі Розетка Маркетплейс<br> <small><ul></p> <li>8 - Підготовлений</li> <li>16 - На модерації</li> </ul></small>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.6 Нові товари

**get** `/goods/new`

<p>Пошук товарів, вкладка &quot;Нові товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **upload_status** `Integer` _(опціонально)_ - <p>Внутрішній статус товару в системі Розетка Маркетплейс<br> <small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично в значення 0 (Новий)</small></p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.2 Неактивні товари

**get** `/goods/not-available`

<p>Пошук товарів, вкладка &quot;Неактивні товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **item_active** `Integer` _(опціонально)_ - <p>Ознака, яка позначає які товари мають бути у видачі.<br> <small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично у значення 0 (Неактивні товари)</small></p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу) <br><small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично у значення 2 (Видалені з прайсу)</small></p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **upload_status** `String` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.4 Невалідні товари

**get** `/goods/not-valid`

<p>Пошук товарів, вкладка &quot;Невалідні товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **state** `Integer` _(опціонально)_ - <p>Стан товару<br><i>В данному методі не параметр не доступний</i></p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **xlsx_upload_id** `Integer` _(опціонально)_ - <p>ID імпорту товарів через файл <a href="#api-ApiItems-GetImportStatusListAction">Отримати список статусів імпорту товарів</a></p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **upload_status** `String` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.1 Активні товари

**get** `/goods/on-sale`

<p>Пошук товарів, вкладка &quot;Активні товари&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **item_active** `Integer` _(опціонально)_ - <p>Ознака, яка позначає які товари повинні бути у видачі.<br> <small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично в значення 1 (Активні товари)</small></p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу) <br><small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично в значення 1 (Є в наявності)</small></p>
- **upload_status** `Integer` _(опціонально)_ - <p>Внутрішній статус товару в системі Розетка Маркетплейс<br> <small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично в значення 2 (Активний)</small></p>
- **sla_id** `Integer` _(опціонально)_ - <p>ID набору доставки</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 344560030,
                "price_offer_id": "7372",
                "item_id": 114053,
                "sync_source_id": 107,
                "sync_source": {
                    "id": 107,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 40,
                "group_id": null,
                "rz_group_id": null,
                "name": "Масляний фiльтр UFI (2348400)",
                "name_ua": "Масляний фiльтр UFI (2348400)",
                "name_ru": "Масляный фильтр UFI (2348400)",
                "url": "https://rozetka.com.ua/344560030/p344560030",
                "article": "2348400",
                "description": null,
                "price": 45003,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 2717,
                "price_category_id": "4656338",
                "rz_category": {
                    "id": 4656338,
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "price_category": {
                    "id": "4656338",
                    "title": "Масляные фильтры",
                    "title_ua": "Масляні фільтри"
                },
                "rz_producer": {
                    "id": 166141,
                    "title": "UFI"
                },
                "price_producer_name": "UFI",
                "sync_source_vendors_id": 3929,
                "sync_source_producer":null,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "photo_upload_status":1,
                "rz_status": 0,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 11,
                "upload_status_title": "Прихований модератором",
                "blocked_reason": [
                    {
                        "reason_id": 15,
                        "title": "Заборонена категорія для продажу на сайті Rozetka"
                    }
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 15,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "267"
                ],
                "comment": "",
                "is_ff": false,
                "max_cart_quantity": 0,
                "min_cart_quantity": 0,
                "created_at": "2022-06-20 15:12:34",
                "state": null,
                "can_update_content_fields": false,
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.7.1 Оновлені ціни

**get** `/goods/prices`

<p>Пошук товарів, вкладка &quot;Оновлені ціни&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **upload_status** `String` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "items": [
            {
                "rz_item_id": 365132964,
                "price_offer_id": "334",
                "item_id": 123103,
                "sync_source_id": 163,
                "sync_source": {
                    "id": 163,
                    "availability": 3,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 3720,
                "group_id": null,
                "rz_group_id": null,
                "name": "Ремешок Apple Watch 50mm Hermes Single Tour Leather Band Fauve Barenia",
                "name_ua": null,
                "name_ru": "Ремешок Apple Watch 50mm Hermes Single Tour Leather Band Fauve Barenia",
                "url": "https://rozetka.com.ua/365132964/p365132964",
                "article": "",
                "description": null,
                "price": 50,
                "price_old": null,
                "price_promo": null,
                "updated_price": 500000,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 4951,
                "price_category_id": "8005087",
                "rz_category": {
                    "id": 3510555,
                    "title": "Шлифовальные элементы",
                    "title_ua": "Шліфувальні елементи",
                },
                "price_category": {
                    "id": "8005087",
                    "title": "Шлифовальные элементы",
                    "title_ua": "Шліфувальні елементи",
                },
                "rz_producer": {
                    "id": 1203,
                    "title": "A4Tech"
                },
                "price_producer_name": "A4Tech",
                "price_producer_id": 5119,
                "rz_series": null,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "rz_status": 3,
                "rz_sell_status": 0,
                "available": 0,
                "available_title": "Немає в наявності",
                "upload_status": 2,
                "upload_status_title": "Активний",
                "blocked_reason": [
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 600,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": "",
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "22"
                ],
                "comment": null,
                "is_ff": false,
                "max_cart_quantity": null,
                "min_cart_quantity": null,
                "state": null,
                "can_update_content_fields": false,
                "created_at": "2023-02-07 16:07:54",
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 1.7.2 Товари, що не потрапили в діапазон ціни

**get** `/goods/quarantine`

<p>Пошук товарів, вкладка &quot;Quarantine&quot;</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **upload_status** `Integer` _(опціонально)_ - <p>Внутрішній статус товару в системі Розетка Маркетплейс<br> <small>Для цього ендпоінта фільтр передавати не потрібно, він встановлений автоматично в значення 14 (Аномальна ціна)</small></p>
- **available** `Integer` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)</p>
- **rz_item_id** `Integer` _(опціонально)_ - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі-листі продавця</p>
- **sync_source_id** `Integer` _(опціонально)_ - <p>ID джерела товару (прайс-листа)</p>
- **item_active** `Integer` _(опціонально)_ - <p>Ознака, що позначає які товари мають бути у видачі.<br> 1 - активні; 0 - Неактивні</p>
- **rz_sell_status** `Integer` _(опціонально)_ - <p>Статус продажу товару</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. <br><i>Пошук працює також по частині назви</i></p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару або ID товару</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Товар фулфілмент (0 - товар не фулфілмент; 1 - товар фулфілмент)</p>
- **bpm_number** `String` _(опціонально)_ - <p>Номер заявки</p>
- **category_id** `Integer` _(опціонально)_ - <p>ID категорії</p>
- **price_category_id** `Integer` _(опціонально)_ - <p>ID категорії продавця</p>
- **producer_id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **price_producer_id** `Integer` _(опціонально)_ - <p>ID виробника продавця</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **block_reason** `Integer` _(опціонально)_ - <p>Причина блокування</p>
- **is_blocked_by_stop_brands** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп брендам</p>
- **is_blocked_by_stop_categories** `Integer` _(опціонально)_ - <p>Прапор блокування по стоп категоріям</p>
- **is_blocked_by_stop_words** `Integer` _(опціонально)_ - <p>Прапор блокування за стоп словами</p>
- **rz_group_id** `Integer` _(опціонально)_ - <p>Група товарів</p>
- **duplicate_mark** `Integer` _(опціонально)_ - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Сторінка пагінації</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>сортування з додаванням +/- (asc/desc).</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;count&quot;: integer, &quot;items&quot;: ItemFormResponse[], &quot;_meta&quot;: MetaResponse }</p>
- **rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у прайсі-листі продавця</p>
- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source** `Object` **_(обов'язково)_** - <p>Джерело товару (деталі)</p>
- **sync_source.id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>
- **sync_source.availability** `Integer` **_(обов'язково)_** - <p>Управління товарами<br></p> <ul>     <li>3 - За залишками (за прайсом)</li>     <li>4 - За API</li> </ul>
- **sync_source.is_virtual_source** `Integer` **_(обов'язково)_** - <p>Тип джерела</p> <ul>      <li>0 - Прайс</li>      <li>3 - За API</li> </ul>
- **sync_source.new_flow_old_price** `Integer` **_(обов'язково)_** - <p>Ознака по якому old_price працює джерело</p>
- **sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **rz_group_id** `Integer` **_(обов'язково)_** - <p>ID групи товару у системі Розетка Маркетплейс</p>
- **name** `String` **_(обов'язково)_** - <p>Назва товару обраною мовою<br> <code>*Якщо назва товару українською не заповнена, при виборі української мови приходитиме назва російською.</code></p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва товару російською</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на товар</p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна</p>
- **price_promo** `Integer` **_(обов'язково)_** - <p>Промо-ціна</p>
- **updated_price** `Number` **_(обов'язково)_** - <p>Оновлена ціна товару</p>
- **commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія з товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії з товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br> <code>**</code>У товарах без rz_item_id комісія не виводиться</small></p>
- **sync_source_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в джерелі</p>
- **price_category_id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **rz_category** `Object` **_(обов'язково)_** - <p>Категорія в системі Розетка Маркетплейс</p>
- **rz_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в системі Розетка Маркетплейс</p>
- **rz_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (RU)</p>
- **rz_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в системі Розетка Маркетплейс (UA)</p>
- **price_category** `Object` **_(обов'язково)_** - <p>Категорія у прайсі продавця</p>
- **price_category.id** `Integer` **_(обов'язково)_** - <p>ID категорії в прайсі продавця</p>
- **price_category.title** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (RU)</p>
- **price_category.title_ua** `String` **_(обов'язково)_** - <p>Назва категорії в прайсі продавця (UA)</p>
- **rz_producer** `Object` **_(обов'язково)_** - <p>Виробник у системі Розетка Маркетплейс</p>
- **rz_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника в системі Розетка Маркетплейс</p>
- **rz_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника в системі Розетка Маркетплейс</p>
- **price_producer_id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі (у прайсі)</p>
- **price_producer_name** `String` **_(обов'язково)_** - <p>Назва виробника, передана продавцем</p>
- **sync_source_producer** `Object` **_(обов'язково)_** - <p>Виробник у джерелі (у прайсі або переданий продавцем)</p>
- **sync_source_producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника у джерелі</p>
- **sync_source_producer.title** `String` **_(обов'язково)_** - <p>Назва виробника у джерелі</p>
- **sync_source_producer.is_binded** `Integer` **_(обов'язково)_** - <p>Ознака прив'язки виробника<br></p> <ul>   <li>0 = 'Виробник не прив'язаний'</li>   <li>1 = 'Виробник прив'язаний'</li>   <li>2 = 'Виробник не існує'</li> </ul>
- **sync_source_producer.bind_type** `Integer` **_(обов'язково)_** - <p>Тип прив'язки виробника<br></p> <ul>  <li>0 = 'відсутня'</li>  <li>1 = 'автоматична'</li>  <li>2 = 'ручна'</li> </ul>
- **photo_preview** `String[]` **_(обов'язково)_** - <p>Фото-прев'ю товару у вигляді посилань</p>
- **photo** `String[]` **_(обов'язково)_** - <p>Фото товару у вигляді посилань</p>
- **photo_upload_status** `Integer` **_(обов'язково)_** - <p>Статус завантаження фото<br></p> <ul>  <li>0 = 'не завантажене'</li>  <li>1 = 'завантажене'</li>  <li>null = 'дані відсутні'</li> </ul>
- **rz_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус товару</a> в системі Розетка Маркетплейс</p>
- **rz_sell_status** `Integer` **_(обов'язково)_** - <p><a href="#api-Items-GetItemStatuses">Статус продажу</a> товару в системі Розетка Маркетплейс</p>
- **available** `Integer` **_(обов'язково)_** - <p>Наявність товару<br></p> <ul>     <li>0 - Немає в наявності</li>     <li>1 - Є в наявності</li>     <li>2 - Видалені з прайсу</li> </ul>
- **available_title** `String` **_(обов'язково)_** - <p>Статус наявності товару (назва обраною мовою)</p>
- **upload_status** `Integer` **_(обов'язково)_** - <p>Внутрішній статус товару у системі Розетка Маркетплейс</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Назва внутрішнього статусу товару</p>
- **blocked_reason** `Object[]` **_(обов'язково)_** - <p>Причини блокування товару</p>
- **blocked_reason.reason_id** `Integer` **_(обов'язково)_** - <p>ID причини</p>
- **blocked_reason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування (обраною мовою)</p>
- **change_status** `Integer` **_(обов'язково)_** - <p>Статус поновлення товару<br></p> <ul>     <li>0 - Очікує підтвердження продавця</li>     <li>2 - Оновлення відхилено</li>     <li>4 - У черзі на оновлення</li> </ul>
- **changes** `Object` **_(обов'язково)_** - <p>Деталі оновлення товару</p>
- **changes.changed_fields** `Object` **_(обов'язково)_** - <p>Змінені поля<br> Json-формат: назва поля - ознака зміни<br> Приклад: <code>{&quot;name&quot;:true, &quot;price&quot;:false}</code></p>
- **changes.status** `String` **_(обов'язково)_** - <p>Назва статусу оновлення (обраною мовою)</p>
- **changes.reasons** `String[]` **_(обов'язково)_** - <p>Список причин відхилення оновлень (обраною мовою)</p>
- **changes.change_date** `String` **_(обов'язково)_** - <p>Дата оновлення</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Ознака, чи потрапляє товар у розсилку</p>
- **error_type** `Integer` **_(обов'язково)_** - <p>Тип помилки</p>
- **error_reason** `String` **_(обов'язково)_** - <p>Причина помилки</p>
- **is_blocked_by_stop_brands** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-брендами</p>
- **is_blocked_by_stop_categories** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-категоріями</p>
- **is_blocked_by_stop_words** `Boolean` **_(обов'язково)_** - <p>Ознака блокування за стоп-словами</p>
- **stop_words** `String[]` **_(обов'язково)_** - <p>Список стоп-слів</p>
- **duplicate_mark** `Boolean` **_(обов'язково)_** - <p>Дубль товару (0 - немає дублів товару; 1 - є дублі товару)</p>
- **bpm_number** `String[]` **_(обов'язково)_** - <p>Список номерів заявок</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар до товару</p>
- **is_ff** `Boolean` **_(обов'язково)_** - <p>Ознака Фулфілмент-товару</p>
- **max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можна додати до кошика</p>
- **min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можна додати до кошика</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення товару<br> Формат <code>Y-m-d H:i:s</code></p>
- **state** `Integer` **_(обов'язково)_** - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **can_update_content_fields** `Boolean` **_(обов'язково)_** - <p>Ознака можливості редагування контент-полів товару</p>
- **promo_state** `Boolean` **_(обов'язково)_** - <p>Ознака можливості просування товару<br></p> <ul>  <li>0 – не можна просувати</li>  <li>1 – просувати</li> </ul>
- **docket** `String` **_(обов'язково)_** - <p>Короткий опис товару</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Короткий опис товару (українською)</p>
- **prices** `Object` **_(обов'язково)_** - <p>Обʼєкт для розрахунку і відображення старої ціни</p>
- **prices.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у системі Розетка Маркетплейс</p>
- **prices.price** `Integer` **_(обов'язково)_** - <p>Ціна</p>
- **prices.price_type** `Integer` **_(обов'язково)_** - <p>Тип ціни (1-стара ціна, 2-поточна)</p>
- **prices.reason** `Integer` **_(обов'язково)_** - <p>Причина</p>
- **prices.reason_title** `String` **_(обов'язково)_** - <p>Причина</p>
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
        "count": 1,
        "items": [
            {
                "rz_item_id": 331227544,
                "price_offer_id": "341",
                "item_id": 40991,
                "sync_source_id": 76,
                "sync_source": {
                    "id": 76,
                    "availability": 4,
                    "is_virtual_source": 0,
                    "new_flow_old_price": 1
                },
                "sla_id": 72719,
                "group_id": null,
                "rz_group_id": 2,
                "name": "Ремешок Apple Watch 38mm Sport Band Yellow",
                "name_ua": null,
                "name_ru": "Ремешок Apple Watch 38mm Sport Band Yellow",
                "url": "https://rozetka.com.ua/331227544/p331227544",
                "article": "",
                "description": null,
                "price": 484,
                "price_old": null,
                "price_promo": null,
                "updated_price": null,
                "commission_percent": null,
                "commission_sum": "0.00",
                "sync_source_category_id": 1822,
                "price_category_id": "8005087",
                "rz_category": {
                    "id": 3510555,
                    "title": "Шлифовальные элементы",
                    "title_ua": "Шліфувальні елементи",
                },
                "price_category": {
                    "id": "8005087",
                    "title": "Шлифовальные элементы",
                    "title_ua": "Шліфувальні елементи",
                },
                "rz_producer": {
                    "id": 69,
                    "title": "Apple"
                },
                "rz_series": null,
                "price_producer_name": "Apple",
                "price_producer_id": 2624,
                "photo_preview": [
                    "http://localhost:4200/assets/images/no-image.svg"
                ],
                "photo": [
                ],
                "rz_status": 1,
                "rz_sell_status": 6,
                "available": 1,
                "available_title": "Є в наявності",
                "upload_status": 14,
                "upload_status_title": "Аномальна ціна",
                "blocked_reason": [
                ],
                "change_status": null,
                "changes": {
                    "changed_fields": null,
                    "status": null,
                    "reasons": [
                    ],
                    "change_date": "2023-10-10 11:24:37"
                },
                "weight": null,
                "stock_quantity": 16777999,
                "sold": null,
                "is_promo_sent": 0,
                "error_type": null,
                "error_reason": null,
                "is_blocked_by_stop_brands": 0,
                "is_blocked_by_stop_categories": 0,
                "is_blocked_by_stop_words": 0,
                "stop_words": [
                ],
                "duplicate_mark": false,
                "bpm_number": [
                    "1"
                ],
                "comment": null,
                "is_ff": false,
                "max_cart_quantity": null,
                "min_cart_quantity": null,
                "state": null,
                "can_update_content_fields": false,
                "created_at": "2021-12-28 09:30:04",
                "promo_state": true,
                "prices": [
                    {
                        "item_id": 129380046,
                        "price": 383,
                        "price_type": 1,
                        "reason": 1,
                        "is_sent": 0,
                        "reason_title": "Товар став дорожчим, ніж продавався раніше"
                    }
                ],
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 2.0 Дані для фільтрів

**get** `/goods/search-data`

<p>Дані для фільтрів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Активні товари":</p></p> <ul> <li>вкладка "У продажу" - items_on_sale_tab</li> <li>вкладка "Немає" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul> <li>вкладка "Помилки технічні" - items_errors</li> <li>вкладка "Помилки валідаційні" - not_valid</li> <li>вкладка "Видалені з прайсу" - not_available</li> <li>вкладка "Приховані модератором" - items_hidden</li> <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul> <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "Вимагають підтвердження":</p> <ul> <li>вкладка "На оновлення" - items_changes</li> <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li> <li>вкладка "Підтвердження ціни" - items_prices</li> </ul> <p>Розділ "У процесі модерації":</p> <ul> <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "Чекає на підтвердження":</p> <ul> <li>вкладка "Чекає на підтвердження" - items_waiting_approve</li> </ul> <p>Розділ "Оновлення відхилено":</p> <ul> <li>вкладка "Оновлення відхилено" - items_rejected</li> </ul> <p>Розділ "У черзі на оновлення":</p> <ul> <li>вкладка "У черзі на оновлення" - items_for_update</li> </ul> <p>Розділ "Всі товари":</p> <ul> <li>вкладка "Всі" - items_all_tab</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "available": [
           {
               "key": 0,
               "value": 0
           },
           {
               "key": 1,
               "value": 1
           }
       ],
       "not_valid_available": [
           {
               "key": 0,
               "value": 0
           }
       ],
       "status": [],
       "blocked_reason": {
           "1": {
              "id": 1,
              "reason": "На фото ассортимент",
              "hidden": false,
              "created_at": null,
              "created_uid": null,
              "deactivated_at": null,
              "deactivated_uid": null,
              "deactivation_reason": null,
              "reason_ua": "На фото ассортимент",
              "reason_en": "Assortment in the photo",
              "slug": "na_foto_assortiment"
           },
           ...
       },
      "change_status": [
            {
                "key": 3,
                "value": "Не изменён"
            }
        ],
      "rz_sell_statuses": [
            {
                "key": 0,
                "value": "Не в наявності"
            }
        ]
   }
}
```

---

### 2.1.0 Дані для фільтрів: категорії продавця

**get** `/goods/search-data/category`

<p>Дані для фільтрів: категорії продавця</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **title** `String` _(опціонально)_ - <p>Назва категорії</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки пагінації</p>
- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Активні товари":</p></p> <ul> <li>вкладка "У продажу" - items_on_sale_tab</li> <li>вкладка "Немає" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul> <li>вкладка "Помилки технічні" - items_errors</li> <li>вкладка "Помилки валідаційні" - not_valid</li> <li>вкладка "Видалені з прайсу" - not_available</li> <li>вкладка "Приховані модератором" - items_hidden</li> <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul> <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "Вимагають підтвердження":</p> <ul> <li>вкладка "На оновлення" - items_changes</li> <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li> <li>вкладка "Підтвердження ціни" - items_prices</li> </ul> <p>Розділ "У процесі модерації":</p> <ul> <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "Чекає на підтвердження":</p> <ul> <li>вкладка "Чекає на підтвердження" - items_waiting_approve</li> </ul> <p>Розділ "Оновлення відхилено":</p> <ul> <li>вкладка "Оновлення відхилено" - items_rejected</li> </ul> <p>Розділ "У черзі на оновлення":</p> <ul> <li>вкладка "У черзі на оновлення" - items_for_update</li> </ul> <p>Розділ "Всі товари":</p> <ul> <li>вкладка "Всі" - items_all_tab</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **category** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів категорій</p>
- **category.key** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **category.value** `String` **_(обов'язково)_** - <p>Назва категорії</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "category": [
           {
               "key": 43348,
               "value": "Название категории"
           },
           ...
       ],
       "_meta": {
         "totalCount": 150,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 500
       }
   }
}
```

---

### 2.2.0 Дані для фільтрів: виробники продавця

**get** `/goods/search-data/producer`

<p>Дані для фільтрів: виробники продавця</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **title** `String` _(опціонально)_ - <p>дителя</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки пагінації</p>
- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Активні товари":</p></p> <ul> <li>вкладка "У продажу" - items_on_sale_tab</li> <li>вкладка "Немає" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul> <li>вкладка "Помилки технічні" - items_errors</li> <li>вкладка "Помилки валідаційні" - not_valid</li> <li>вкладка "Видалені з прайсу" - not_available</li> <li>вкладка "Приховані модератором" - items_hidden</li> <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul> <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "Вимагають підтвердження":</p> <ul> <li>вкладка "На оновлення" - items_changes</li> <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li> <li>вкладка "Підтвердження ціни" - items_prices</li> </ul> <p>Розділ "У процесі модерації":</p> <ul> <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "Чекає на підтвердження":</p> <ul> <li>вкладка "Чекає на підтвердження" - items_waiting_approve</li> </ul> <p>Розділ "Оновлення відхилено":</p> <ul> <li>вкладка "Оновлення відхилено" - items_rejected</li> </ul> <p>Розділ "У черзі на оновлення":</p> <ul> <li>вкладка "У черзі на оновлення" - items_for_update</li> </ul> <p>Розділ "Всі товари":</p> <ul> <li>вкладка "Всі" - items_all_tab</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **producer** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів виробників</p>
- **producer.key** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **producer.value** `String` **_(обов'язково)_** - <p>Назва виробника</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "producer": [
           {
               "key": 5988,
               "value": "Название производителя"
           },
           ...
       ],
       "_meta": {
         "totalCount": 150,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 20
       }
   }
}
```

---

### 2.1.1 Дані для фільтрів: категорії в системі Розетка Маркетплейс

**get** `/goods/search-data/rz-category`

<p>Дані для фільтрів: категорії в системі Розетка Маркетплейс</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **title** `String` _(опціонально)_ - <p>Назва категорії</p>
- **title_ua** `String` _(опціонально)_ - <p>Назва категорії українською</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки пагінації</p>
- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Активні товари":</p></p> <ul> <li>вкладка "У продажу" - items_on_sale_tab</li> <li>вкладка "Немає" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul> <li>вкладка "Помилки технічні" - items_errors</li> <li>вкладка "Помилки валідаційні" - not_valid</li> <li>вкладка "Видалені з прайсу" - not_available</li> <li>вкладка "Приховані модератором" - items_hidden</li> <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul> <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "Вимагають підтвердження":</p> <ul> <li>вкладка "На оновлення" - items_changes</li> <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li> <li>вкладка "Підтвердження ціни" - items_prices</li> </ul> <p>Розділ "У процесі модерації":</p> <ul> <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "Чекає на підтвердження":</p> <ul> <li>вкладка "Чекає на підтвердження" - items_waiting_approve</li> </ul> <p>Розділ "Оновлення відхилено":</p> <ul> <li>вкладка "Оновлення відхилено" - items_rejected</li> </ul> <p>Розділ "У черзі на оновлення":</p> <ul> <li>вкладка "У черзі на оновлення" - items_for_update</li> </ul> <p>Розділ "Всі товари":</p> <ul> <li>вкладка "Всі" - items_all_tab</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **rz_category** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів категорій</p>
- **rz_category.key** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **rz_category.value** `String` **_(обов'язково)_** - <p>Назва категорії</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "rz_category": [
           {
               "key": 43348,
               "value": "Название категории"
           },
           ...
       ],
       "_meta": {
         "totalCount": 150,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 20
       }
   }
}
```

---

### 2.2.1 Дані для фільтрів: виробники в системі Розетка Маркетплейс

**get** `/goods/search-data/rz-producer`

<p>Дані для фільтрів: виробники в системі Розетка Маркетплейс</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **title** `String` _(опціонально)_ - <p>Назва виробника</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки пагінації</p>
- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Активні товари":</p></p> <ul> <li>вкладка "У продажу" - items_on_sale_tab</li> <li>вкладка "Немає" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul> <li>вкладка "Помилки технічні" - items_errors</li> <li>вкладка "Помилки валідаційні" - not_valid</li> <li>вкладка "Видалені з прайсу" - not_available</li> <li>вкладка "Приховані модератором" - items_hidden</li> <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul> <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "Вимагають підтвердження":</p> <ul> <li>вкладка "На оновлення" - items_changes</li> <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li> <li>вкладка "Підтвердження ціни" - items_prices</li> </ul> <p>Розділ "У процесі модерації":</p> <ul> <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "Чекає на підтвердження":</p> <ul> <li>вкладка "Чекає на підтвердження" - items_waiting_approve</li> </ul> <p>Розділ "Оновлення відхилено":</p> <ul> <li>вкладка "Оновлення відхилено" - items_rejected</li> </ul> <p>Розділ "У черзі на оновлення":</p> <ul> <li>вкладка "У черзі на оновлення" - items_for_update</li> </ul> <p>Розділ "Всі товари":</p> <ul> <li>вкладка "Всі" - items_all_tab</li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **rz_producer** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів виробників</p>
- **rz_producer.key** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **rz_producer.value** `String` **_(обов'язково)_** - <p>Назва виробника</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "rz_producer": [
           {
               "key": 5988,
               "value": "Название производителя"
           },
           ...
       ],
       "_meta": {
         "totalCount": 150,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 20
       }
   }
}
```

---

### 9.5 Отримати список статусів імпорту товарів

**get** `/items-file-import/imports-list`

<p>Отримати список статусів імпорту товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID імпорту</p>
- **status** `Integer` _(опціонально)_ - <p>Статус імпорту</p>
- **flow** `Integer` _(опціонально)_ - <p>Тип дії<br> 1 - cтворення товарів, 2 - апдейт товарів</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **id** `Number` **_(обов'язково)_** - <p>Файл шаблон для імпортування товарів (.xlsx)</p>
- **file_name** `String` **_(обов'язково)_** - <p>Назва файла імпорту</p>
- **logs** `String` **_(обов'язково)_** - <p>Короткий звіт імпорту</p>
- **file_size** `Number` **_(обов'язково)_** - <p>розмір файла</p>
- **created_at** `DateTime` **_(обов'язково)_** - <p>Дата імпорту</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус імпорту</p>
- **status_title** `String` **_(обов'язково)_** - <p>Опис статуса імпорту</p>
- **type_source** `String` **_(обов'язково)_** - <p>Джерело імпорту товарів: файл/посилання на файл</p>
- **flow** `String` **_(обов'язково)_** - <p>Тип дії: створення або зміна товарів</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на файл</p>
- **report_key_value** `Object` **_(обов'язково)_** - <p>Детальна інформація імпорту товару</p>
- **report_key_value.id** `Number` **_(обов'язково)_** - <p>Числове значення</p>
- **report_key_value.value** `String` **_(обов'язково)_** - <p>Опис</p>
- **market_manager** `Object` **_(обов'язково)_** - <p>Менеджер що здійснював імпорт</p>
- **market_manager.id** `Number` **_(обов'язково)_** - <p>ID менеджера</p>
- **market_manager.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
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
        "imports": [
{
                "id": 1234567,
                "file_name": "123qwerty.xlsx",
                "file_size": null,
                "report_key_value": {
                    "valid_file": {
                        "value": false,
                        "title": "Файл не/валідний"
                    },
                    "items_count": {
                        "value": 0,
                        "title": "Кількість товарів"
                    },
                    "start_parsing": {
                        "value": true,
                        "title": "Старт парсингу файла"
                    },
                    "vendors_count": {
                        "value": 0,
                        "title": "Кількість виробників"
                    },
                    "finish_parsing": {
                        "value": true,
                        "title": "Парсинг файла завершено"
                    },
                    "items_available": {
                        "value": 0,
                        "title": "Кількість товарів в наявності"
                    },
                    "valid_items_count": {
                        "value": 0,
                        "title": "Кількість валідних товарів"
                    },
                    "end_category_count": {
                        "value": 0,
                        "title": "Кількість кінцевих категорій"
                    },
                    "valid_items_available": {
                        "value": 0,
                        "title": "Кількість валідних товарів в наявності"
                    },
                    "items_count_with_errors": {
                        "value": 0,
                        "title": "Кількість товарів з помилками"
                    },
                    "items_count_with_warnings": {
                        "value": 0,
                        "title": "Кількість товарів із попередженнями"
                    },
                    "vendors_count_with_errors": {
                        "value": 0,
                        "title": "Кількість виробників з помилками"
                    },
                    "end_category_count_with_errors": {
                        "value": 0,
                        "title": "Кількість кінцевих категорій з помилками"
                    }
                },
                "market_manager": {
                    "id": null,
                    "fio": "Mykola"
                },
                "created_at": "2025-04-22 13:45:53",
                "status": 6,
                "status_title": "Помилка",
                "type_source": "0 (URL)",
                "flow": "1 (Create Items by XLSX)",
                "url": "https://get-file.rozetka.com"
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 100
        }
    }
}
```

---

### 3.1 Статуси товарів

**** `/`

<p>Список статусів (Statuses) и Sell-статусів (SellStatuses) товарів</p>

**Версія:** 0.0.0

#### Успішна відповідь

**Statuses:**

- **0** `Number` **_(обов'язково)_** - <p>Locked (Не показувати на сайті)</p>
- **1** `Number` **_(обов'язково)_** - <p>Active (Показувати на сайті)</p>
- **2** `Number` **_(обов'язково)_** - <p>New (Новий)</p>
- **3** `Number` **_(обов'язково)_** - <p>On moderation (Додано до списку на модерацію)</p>
- **4** `Number` **_(обов'язково)_** - <p>Under moderation (Модерується)</p>
- **5** `Number` **_(обов'язково)_** - <p>Rejected moderation (Товар відхилений модератором)</p>
- **6** `Number` **_(обов'язково)_** - <p>Head of managers (Необхідне підтвердження модератора)</p>
- **7** `Number` **_(обов'язково)_** - <p>Archived (Видалено)</p>
- **8** `Number` **_(обов'язково)_** - <p>For moderation (Очікує модерації)</p>
**Sell-Statuses:**

- **0** `Number` **_(обов'язково)_** - <p>Unavailable (Немає в наявності)</p>
- **1** `Number` **_(обов'язково)_** - <p>Waiting for supply (Очікується поставка)</p>
- **2** `Number` **_(обов'язково)_** - <p>Call (Дзвоніть)</p>
- **3** `Number` **_(обов'язково)_** - <p>Limited (Товар закінчується)</p>
- **4** `Number` **_(обов'язково)_** - <p>Available (Є в наявності)</p>
- **5** `Number` **_(обов'язково)_** - <p>Archive (Архівний)</p>
- **6** `Number` **_(обов'язково)_** - <p>Strict unavailable (Недоступний)</p>
- **7** `Number` **_(обов'язково)_** - <p>Out of stock (Закінчився)</p>
- **8** `Number` **_(обов'язково)_** - <p>Hidden (Прихований)</p>

---

### 0.0 Лічильники товарів v1

**get** `/v1/goods/counts`

<p>Лічильники товарів</p>

**Версія:** 1.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **active_items** `Object` **_(обов'язково)_** - <p>Назва секції</p>
- **active_items.sum** `Object` **_(обов'язково)_** - <p>Сума лічильників табів що входять в секцію</p>
- **active_items.tabs** `Object` **_(обов'язково)_** - <p>Таби які входять в секцію</p>
- **all_items** `Object` **_(обов'язково)_** - <p>Всі товари</p>
- **inactive_items** `Object` **_(обов'язково)_** - <p>Неактивні товари</p>
- **new_items** `Object` **_(обов'язково)_** - <p>Нові товари</p>
- **on_moderation_items** `Object` **_(обов'язково)_** - <p>Товари на модерації</p>
- **items_waiting_approve** `Object` **_(обов'язково)_** - <p>Товари, які чекають на підтвердження</p>
- **items_rejected** `Object` **_(обов'язково)_** - <p>Товари по яким оновлення відхилено</p>
- **items_for_update** `Object` **_(обов'язково)_** - <p>Товари, які знаходяться у черзі на оновлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "active_items": {
            "sum": 8,
            "tabs": {
                "items_on_sale_tab": 6,
                "items_not_on_sale_tab": 2
            }
        },
        "inactive_items": {
            "sum": 19,
            "tabs": {
                "items_errors": 1,
                "not_valid": 0,
                "not_available": 1,
                "items_hidden": 16,
                "items_archive": 1
            }
        },
        "new_items": {
            "sum": 10,
            "tabs": {
                "items_new": 10
            }
        },
        "on_moderation_items": {
            "sum": 7,
            "tabs": {
                "items_on_moderation": 7
            }
        },
        "items_blocked_by_stop_label": {
            "sum": 5,
            "tabs": {
                "items_blocked_by_stop_brands": 1,
                "items_blocked_by_stop_categories": 1,
                "items_blocked_by_stop_words": 1,
                "items_blocked_by_stop_attributes": 2
            }
        },
        "items_waiting_approve": {
            "sum": 12,
            "tabs": {
                "items_waiting_approve": 3,
                "items_rejected": 1,
                "items_for_update": 0,
                "items_quarantine": 5,
                "items_prices": 3
            }
        },
        "all_items": {
            "sum": 49,
            "tabs": {
                "items_all_tab": 49
            }
        }
    }
```

---

### 5.0 Створення файлу експорту

**post** `/items/file`

<p>Поміщає файл у чергу на формування.<br> <code>*Важливо!</code> Для формування файлу необхідно передати хоча б один із трьох параметрів.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **items** `Integer[]` _(опціонально)_ - <p>Список товарів у внутрішній системі (item_id)<br> Приклад: <code>&quot;items&quot;: [1231, 7272]</code></p>
- **filters** `Object` _(опціонально)_ - <p><a href="#api-Models-FileFilterDetails">Фільтри</a></p>
- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Всі товари":</p> <ul>    <li>вкладка "Всі" - items_all_tab</li> </ul> <p>Розділ "Активні товари":</p></p> <ul>    <li>вкладка "У продажу" - items_on_sale_tab</li>    <li>вкладка "Немає в наявності" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul>    <li>вкладка "Приховані модератором" - items_hidden</li>    <li>вкладка "Архівні" - items_archive</li>    <li>вкладка "Помилки в прайс-листі" - items_not_valid</li> </ul> <p>Розділ "Нові":</p> <ul>    <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "В процесі модерації":</p> <ul>    <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "На підтвердження":</p>   <ul>   <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li>  <li>вкладка "На оновлення" - items_changes</li>  </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **success** `Boolean` **_(обов'язково)_** - <p>Ознака успішносты запиту</p>
- **message** `String` **_(обов'язково)_** - <p>Повідомлення</p>

#### Приклад відповіді

```json
{
     "success": true,
     "content": {
         "message": "Ваш запит на формування файлу надійшов у чергу на обробку"
     }
}
```

---

### 5.1 Створення файлу експорту з кастомним набором полів

**post** `/items/file/custom`

<p>Поміщає файл у чергу на формування.<br> <code>*Важливо!</code> Для формування файлу необхідно передати хоча б один із трьох параметрів: <code>items, tab_name, filters</code><br> Поле <code>columns</code> відповідає за кастомні колонки у файлі.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **items** `Integer[]` _(опціонально)_ - <p>Список товарів у внутрішній системі (item_id)<br> Приклад: <code>&quot;items&quot;: [1231, 7272]</code></p>
- **filters** `Object` _(опціонально)_ - <p><a href="#api-Models-FileFilterDetails">Фільтри</a></p>
- **columns** `Array` _(опціонально)_ - <p><a href="#api-Models-FileExportColumns">Кастомні колонки у файлі</a><br> <code>*Важливо!</code> Якщо не передавати це поле - вивантажуються тільки основні (обовʼязкові) колонки. <br></p>
- **tab_name** `String` _(опціонально)_ - <p>Назва вкладки</p> <p>Розділ "Всі товари":</p> <ul>    <li>вкладка "Всі" - items_all_tab</li> </ul> <p>Розділ "Активні товари":</p></p> <ul>    <li>вкладка "У продажу" - items_on_sale_tab</li>    <li>вкладка "Немає в наявності" - items_not_on_sale_tab</li> </ul> <p>Розділ "Неактивні":</p> <ul>    <li>вкладка "Приховані модератором" - items_hidden</li>    <li>вкладка "Архівні" - items_archive</li> </ul> <p>Розділ "Нові":</p> <ul>    <li>вкладка "Нові" - items_new</li> </ul> <p>Розділ "В процесі модерації":</p> <ul>    <li>вкладка "на модерації" - items_on_moderation</li> </ul> <p>Розділ "На підтвердження":</p>   <ul>   <li>вкладка "Підтвердження ціни (карантин)" - items_quarantine</li>  </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **success** `Boolean` **_(обов'язково)_** - <p>Ознака успішносты запиту</p>
- **message** `String` **_(обов'язково)_** - <p>Повідомлення</p>

#### Приклад відповіді

```json
{
     "success": true,
     "content": {
         "message": "Ваш запит на формування файлу надійшов у чергу на обробку"
     }
}
```

---

### 4.0 Масова зміна ціни і наявності товарів

**put** `/items/mass-update`

<p>Зміна ціни і кількості товарів. Якщо ціна збільшена більше ніж в 1,5 рази чи зменшена в 2 рази - ціна не застосовується одразу, а потрапляє в оновлення ціни до підтвердження менеджером.</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **isIgnoreCheck** `Integer` _(опціонально)_ - <p>Управління валідацією (0 - виконувати валідацію; 1 - не виконувати валідацію)</p>
- **items** `UpdatingItem[]` **_(обов'язково)_** - <p><a href="#api-Models-UpdatingItemDetails">UpdatingItem</a> Товар для оновлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": null
}
```

```json
HTTP/1.1 200 OK
{
   "success": false,
   "errors": {
       "102069758": {
           "reason": [
               {
                   "id": 1,
                   "value": [
                       "some_text1"
                   ]
               },
               {
                   "id": 2,
                   "value": [
                       "some_text2"
                   ]
               },
               {
                   "id": 3,
                   "value": [
                       "some_text3"
                   ]
               }
           ]
       },
       "192630536": {
           "reason": [
               {
                   "id": 1,
                   "value": [
                       "some_text1"
                   ]
               },
               {
                   "id": 2,
                   "value": [
                       "some_text2"
                   ]
               },
               {
                   "id": 3,
                   "value": [
                       "some_text3"
                   ]
               }
           ]
       }
   }
}
```

---

### 9.2 Створити товари через файл

**post** `/items-file-import/create-items`

<p>Створити товари через файл</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **file** `File` _(опціонально)_ - <p>Файл для імпорту товарів (обов'язкове одне з полів: file, або url)</p>
- **url** `String` _(опціонально)_ - <p>URL до файла .xlsx</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **id** `Number` **_(обов'язково)_** - <p>ID імпорту товарів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
      "id": 1234567
  }
}
```

---

### 9.4 Отримати статус імпорту товарів

**get** `/items-file-import/import-status`

<p>Отримати статус імпорту товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID імпорту</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **id** `Number` **_(обов'язково)_** - <p>Файл шаблон для імпортування товарів (.xlsx)</p>
- **file_name** `String` **_(обов'язково)_** - <p>Назва файла імпорту</p>
- **logs** `String` **_(обов'язково)_** - <p>Короткий звіт імпорту</p>
- **file_size** `Number` **_(обов'язково)_** - <p>розмір файла</p>
- **created_at** `DateTime` **_(обов'язково)_** - <p>Дата імпорту</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус імпорту</p>
- **status_title** `String` **_(обов'язково)_** - <p>Опис статуса імпорту</p>
- **type_source** `String` **_(обов'язково)_** - <p>Джерело імпорту товарів: файл/посилання на файл</p>
- **flow** `String` **_(обов'язково)_** - <p>Тип дії: створення або зміна товарів</p>
- **url** `String` **_(обов'язково)_** - <p>Посилання на файл</p>
- **report_key_value** `Object` **_(обов'язково)_** - <p>Детальна інформація імпорту товару</p>
- **report_key_value.id** `Number` **_(обов'язково)_** - <p>Числове значення</p>
- **report_key_value.value** `String` **_(обов'язково)_** - <p>Опис</p>
- **market_manager** `Object` **_(обов'язково)_** - <p>Менеджер що здійснював імпорт</p>
- **market_manager.id** `Number` **_(обов'язково)_** - <p>ID менеджера</p>
- **market_manager.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
                "id": 1234567,
                "file_name": "123qwerty.xlsx",
                "file_size": null,
                "report_key_value": {
                    "valid_file": {
                        "value": false,
                        "title": "Файл не/валідний"
                    },
                    "items_count": {
                        "value": 0,
                        "title": "Кількість товарів"
                    },
                    "start_parsing": {
                        "value": true,
                        "title": "Старт парсингу файла"
                    },
                    "vendors_count": {
                        "value": 0,
                        "title": "Кількість виробників"
                    },
                    "finish_parsing": {
                        "value": true,
                        "title": "Парсинг файла завершено"
                    },
                    "items_available": {
                        "value": 0,
                        "title": "Кількість товарів в наявності"
                    },
                    "valid_items_count": {
                        "value": 0,
                        "title": "Кількість валідних товарів"
                    },
                    "end_category_count": {
                        "value": 0,
                        "title": "Кількість кінцевих категорій"
                    },
                    "valid_items_available": {
                        "value": 0,
                        "title": "Кількість валідних товарів в наявності"
                    },
                    "items_count_with_errors": {
                        "value": 0,
                        "title": "Кількість товарів з помилками"
                    },
                    "items_count_with_warnings": {
                        "value": 0,
                        "title": "Кількість товарів із попередженнями"
                    },
                    "vendors_count_with_errors": {
                        "value": 0,
                        "title": "Кількість виробників з помилками"
                    },
                    "end_category_count_with_errors": {
                        "value": 0,
                        "title": "Кількість кінцевих категорій з помилками"
                    }
                },
                "market_manager": {
                    "id": null,
                    "fio": "Mykola"
                },
                "created_at": "2025-04-22 13:45:53",
                "status": 6,
                "status_title": "Помилка",
                "type_source": "0 (URL)",
                "flow": "1 (Create Items by XLSX)",
                "url": "https://get-file.rozetka.com"
            }
}
```

---

### 9.1 Отримати шаблон xls для імпортування товарів

**get** `/items-file-import/template`

<p>Отримати шаблон xls для імпортування товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **category_id** `String` **_(обов'язково)_** - <p>ID категорій товарів через кому</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл шаблон для імпортування товарів (.xlsx)</p>

---

### 9.3 Змінити товари через файл

**post** `/items-file-import/update-items`

<p>Змінити товари через файл<br> <code>*Важливо!</code> Валідний файл має містити ID товарів</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **file** `File` _(опціонально)_ - <p>Файл для імпорту товарів (обов'язкове одне з полів: file, або url)</p>
- **url** `String` _(опціонально)_ - <p>URL до файла .xlsx</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **id** `Number` **_(обов'язково)_** - <p>ID імпорту товарів</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
      "id": 1234567
  }
}
```

---

