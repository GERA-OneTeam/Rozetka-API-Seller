# ItemsCreateModule

### 5 Створення товару

**post** `/items-create/create`

<p>Створення товару</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **category_id** `Integer` **_(обов'язково)_** - <p>ID категорії<br> Довідник: <a href="#api-Items-Categories">Список категорій</a></p>
- **price** `Integer` **_(обов'язково)_** - <p>Ціна товару</p>
- **stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість одиниць товару складі</p>
- **state** `Integer` _(опціонально)_ - <p>Стан товару<br></p> <ul>     <li>1 - Новий</li>     <li>0 - Б/У</li>     <li>2 - Відновлений</li>     <li>3 - Уцінка</li> </ul>
- **docket** `String` _(опціонально)_ - <p>Короткий опис товару <i>Обов'язкове якщо state = 3</i></p>
- **docket_ua** `String` _(опціонально)_ - <p>Короткий опис товару <i>Обов'язкове якщо state = 3</i></p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товару у прайсі продавця</p>
- **pictures** `Object[]` **_(обов'язково)_** - <p>Масив картинок товару<br> Допустимі типи файлів: <code>jpeg, png, gif, jpg, webp</code></p>
- **pictures.link** `String` **_(обов'язково)_** - <p>URL зображення товару<br> <small>Необхідно передавати одне з двох полів - або <code>link</code>, або <code>body</code></small></p>
- **pictures.body** `String` **_(обов'язково)_** - <p>Файл зображення товару у Base64<br> <small>Необхідно передавати одне з двох полів - або <code>link</code>, або <code>body</code></small></p>
- **params** `Object[]` _(опціонально)_ - <p>Параметри (характеристики) товару<br> Довідник: <a href="#api-Items-AttributesCreateItem">Пошук характеристик</a></p>
- **params.id** `Integer` **_(обов'язково)_** - <p>ID характеристики</p>
- **params.title** `String` **_(обов'язково)_** - <p>Назва характеристики</p>
- **params.type** `String` **_(обов'язково)_** - <p>Тип характеристики</p>
- **params.value** `Object[]|String|Integer|Number|Boolean` **_(обов'язково)_** - <p>Значення характеристики (залежно від типу характеристики тип даних значення змінюється)<br><br> <small>Для типів <code>'List', 'ListValues', 'ComboBox', 'CheckBoxGroup', 'CheckBoxGroupValues'</code> очікується value в вигляді масиву об'єктів з ID та value отриманими з довідника.</small><br> Довідник: <a href="#api-Items-ValuesCreateItem">Пошук значень характеристик</a><br> <br> <small>Для типу <code>'Integer'</code> очікується value у вигляді значення Integer</small><br> <br> <small>Для типу <code>'Decimal'</code> очікується value у вигляді значення Number</small><br> <br> <small>Для типів <code>'Text', 'TextArea', 'TextInput'</code> очікується value у вигляді рядка</small><br> <br> <small>Для типу <code>'CheckBox'</code> очікується value у вигляді значення Boolean true або false</small><br> <br></p>
- **params.value_ua** `String` **_(обов'язково)_** - <p>Значення характеристики українською. Передавати лише для текстових характеристик ('Text', 'TextArea', 'TextInput')<br><br></p>
- **available** `Boolean` _(опціонально)_ - <p>Наявність товару</p>
- **producer** `Object` _(опціонально)_ - <p>Виробник товару</p>
- **producer.id** `Integer` **_(обов'язково)_** - <p>ID виробника<br> Довідник: <a href="#api-Items-Producers">Список виробників</a><br> <small>Якщо виробника не було знайдено у довіднику, потрібно передати в даному полі <code>0</code>, і вказати назву виробника</small></p>
- **producer.title** `String` **_(обов'язково)_** - <p>Назва виробника</p>
- **series** `Object` _(опціонально)_ - <p>Серія товару</p>
- **series.id** `Integer` **_(обов'язково)_** - <p>ID серії<br> <small>Якщо серію не було знайдено у довіднику, потрібно передати в даному полі <code>0</code>, і вказати назву серії</small></p>
- **series.title** `String` **_(обов'язково)_** - <p>Назва серії</p>
- **article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **description** `String` _(опціонально)_ - <p>Опис товару</p>
- **description_ua** `String` _(опціонально)_ - <p>Опис товару українською</p>
- **price_old** `Integer` _(опціонально)_ - <p>Стара ціна</p>
- **price_promo** `Integer` _(опціонально)_ - <p>Промо-ціна</p>
- **min_cart_quantity** `Integer` _(опціонально)_ - <p>Мінімальна кількість одиниць товару для замовлення</p>
- **max_cart_quantity** `Integer` _(опціонально)_ - <p>Максимальна кількість одиниць товару для замовлення</p>
- **is_approve** `Boolean` _(опціонально)_ - <p>Ознака, що після створення товару, його потрібно автоматично відправити до підготовлених та створити заявку на модерацію</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **item** `Object` **_(обов'язково)_** - <p>Товар</p>
- **item.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі</p>
- **item.sync_source_id** `Integer` **_(обов'язково)_** - <p>ID джерела товару (прайс-листа)</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "item": {
            "item_id": 131415,
            "sync_source_id": 199
        }
    }
}
```

---

### 6 Масове редагування основних даних товара

**put** `/items-create/mass-update-basic-data`

<p>Масове редагування основних даних товара</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **items** `Array` **_(обов'язково)_** - <p>Масив товарів</p>
- **items.item_id** `Integer` **_(обов'язково)_** - <p>ID товара у внутрішній системі <br> (обов'язкове якщо не вказано rz_item_id)</p>
- **items.rz_item_id** `Integer` **_(обов'язково)_** - <p>ID товару Розетки <br> (обов'язкове якщо не вказано item_id)</p>
- **items.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **items.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **items.producer** `Object` _(опціонально)_ - <p>Виробник</p>
- **producer.id** `Integer` _(опціонально)_ - <p>ID виробника</p>
- **producer.title** `String` **_(обов'язково)_** - <p>Назва виробника</p>
- **items.series** `Object` _(опціонально)_ - <p>Серія товару</p>
- **items.series.id** `Integer` **_(обов'язково)_** - <p>ID серії<br> <small>Якщо серію не було знайдено у довіднику, потрібно передати в даному полі <code>0</code>, і вказати назву серії</small></p>
- **items.series.title** `String` **_(обов'язково)_** - <p>Назва серії</p>
- **items.article** `String` _(опціонально)_ - <p>Артикул товару</p>
- **items.description** `String` _(опціонально)_ - <p>Опис товару</p>
- **items.description_ua** `String` _(опціонально)_ - <p>Опис товару українською</p>
- **docket** `String` _(опціонально)_ - <p>Короткий опис товару</p>
- **docket_ua** `String` _(опціонально)_ - <p>Короткий опис товару</p>
- **is_approve** `Boolean` _(опціонально)_ - <p>Ознака, що після оновлення товару потрібно автоматично створити заявку на модерацію</p>
- **items.params** `Object[]` _(опціонально)_ - <p>Параметри (характеристики) товару<br> Довідник: <a href="#api-Items-AttributesCreateItem">Пошук характеристик</a><br> **<code>Важливо!</code> Необхідно завжди передавати весь список актуальних параметрів товару, навіть якщо зміни були тільки по одному з них.</p>
- **items.params.id** `Integer` **_(обов'язково)_** - <p>ID характеристики</p>
- **items.params.title** `String` **_(обов'язково)_** - <p>Назва характеристики</p>
- **items.params.type** `String` **_(обов'язково)_** - <p>Тип характеристики</p>
- **items.params.value** `Object[]|String|Integer|Number|Boolean` **_(обов'язково)_** - <p>Значення характеристики (залежно від типу характеристики тип даних значення змінюється)<br><br> <small>Для типів <code>'List', 'ListValues', 'ComboBox', 'CheckBoxGroup', 'CheckBoxGroupValues'</code> очікується value в вигляді масиву об'єктів з ID та value отриманими з довідника.</small><br> Довідник: <a href="#api-Items-ValuesCreateItem">Пошук значень характеристик</a><br> <br> <small>Для типу <code>'Integer'</code> очікується value у вигляді значення Integer</small><br> <br> <small>Для типу <code>'Decimal'</code> очікується value у вигляді значення Number</small><br> <br> <small>Для типів <code>'Text', 'TextArea', 'TextInput'</code> очікується value у вигляді рядка</small><br> <br> <small>Для типу <code>'CheckBox'</code> очікується value у вигляді значення Boolean true або false</small><br> <br></p>
- **items.params.value_ua** `String` **_(обов'язково)_** - <p>Значення характеристики українською. Передавати лише для текстових характеристик ('Text', 'TextArea', 'TextInput')<br><br></p>
- **items.params.value.id** `Integer` **_(обов'язково)_** - <p>ID значення</p>
- **items.params.value.value** `String` **_(обов'язково)_** - <p>Значення</p>
- **items.pictures** `Object[]` _(опціонально)_ - <p>Масив картинок товару<br> Допустимі типи файлів: <code>jpeg, png, gif, jpg, webp</code>&gt;<br> <small>Послідовність картинок у масиві відповідатиме послідовності їх виведення на сайті.<br> Мінімальна кількість фото ━ 1, максимальна ━ 15. Максимальний розмір всього запиту ━ 150 МБ<br> Максимальний розмір 1 файлу ━ 10 МБ.</small></p>
- **items.pictures.link** `String` **_(обов'язково)_** - <p>URL зображення товару<br> <small>Необхідно передавати одне з двох полів - або <code>link</code>, або <code>body</code></small></p>
- **items.pictures.body** `String` **_(обов'язково)_** - <p>Файл зображення товару у Base64<br> <small>Необхідно передавати одне з двох полів - або <code>link</code>, або <code>body</code></small></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **items_updated** `Integer` **_(обов'язково)_** - <p>кількість оновлених товарів</p>

#### Приклад відповіді

```json
 {
    "success": true,
    "content": {
        "items_updated": 1
    }
}
```

---

