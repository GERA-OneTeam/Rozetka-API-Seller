# TtnSetting

### 10 Додати термін дії ключа НП

**post** `/ttn-settings/add-expiration-date-key`

<p>Додати термін дії ключа НП</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **date** `Date` **_(обов'язково)_** - <p>Термін дії ключа</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "result": true
  }
}
```

---

### 2 Запис ключа Нової Пошти в систему МаркетПлейс

**post** `/ttn-settings/create-ttn-key`

<p>Запис ключа Нової Пошти в систему МаркетПлейс</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **ttn_key** `String` **_(обов'язково)_** - <p>Ключ НП</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {TtnSettingModel} }</p>
- **TtnSetting** `Object` **_(обов'язково)_** - <p>Model</p>
- **TtnSetting.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **TtnSetting.ttn_key** `String` **_(обов'язково)_** - <p>Ключ Нової Пошти</p>
- **TtnSetting.selected_sender** `String` **_(обов'язково)_** - <p>Обраний відправник</p>
- **TtnSetting.selected_cargo** `String` **_(обов'язково)_** - <p>Обраний вантаж<br> Об'єкт <a href="#api-Models-CargoNP">Cargo</a> у вигляді json</p>
- **TtnSetting.selected_address** `String` **_(обов'язково)_** - <p>Вибрана адреса</p>
- **TtnSetting.count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **TtnSetting.is_add_cost** `Boolean` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **TtnSetting.is_add_order** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **TtnSetting.is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **TtnSetting.is_warehouse** `Boolean` **_(обов'язково)_** - <p>Ознака, чи адреса відправника є відділенням служби доставки</p>
- **TtnSetting.delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **TtnSetting.is_add_payment_control** `Boolean` **_(обов'язково)_** - <p>Чи потрібно додавати контроль оплати</p>
**ExtraFields:**

- **TtnSetting.conterparty** `String` **_(обов'язково)_** - <p>Контрагент</p>
- **TtnSetting.conterparty.Ref** `String` **_(обов'язково)_** - <p>UUID Контрагента</p>
- **TtnSetting.sender** `String` **_(обов'язково)_** - <p>Відправник</p>
- **TtnSetting.sender.Ref** `String` **_(обов'язково)_** - <p>UUID Контактної особи відправника</p>
- **TtnSetting.address** `String` **_(обов'язково)_** - <p>Адреса відправника (адреса відділення НП)</p>
- **TtnSetting.address.Ref** `String` **_(обов'язково)_** - <p>UUID Адреси відділення відправника</p>
- **TtnSetting.address.CityRef** `String` **_(обов'язково)_** - <p>UUID міста відправника</p>
- **TtnSetting.cargo** `String` **_(обов'язково)_** - <p>Параметри відправлення</p>
- **TtnSetting.cargo.Weight** `String` **_(обов'язково)_** - <p>Вага відправлення</p>
- **TtnSetting.cargo.CargoType** `String` **_(обов'язково)_** - <p>Тип відправлення</p>
- **TtnSetting.cargo.Description** `String` **_(обов'язково)_** - <p>Опис відправлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 123,
       "ttn_key": "XXXXXXXXXXXXXXXXXXXXXX",
       "selected_sender": "{\"Ref\": \"XSXXXXXGXG-XGXGXGXG-XGXG-XGXG-XGFGFGFGFGFG\", \"Email\": \"\", \"Phones\": \"380500000000\", \"LastName\": \"XXXXX\", \"FirstName\": \"XXXX\", \"MiddleName\": XXX, \"Description\": \"xXXX XXX \"}",
       "selected_address": null,
       "selected_cargo": null,
       "conterparty": "{\"Ref\": \"XSXXXXXGXG-XGXGXGXG-XGXG-XGXG-XGFGFGFGFGFG\", \"City\": \"00000000-0000-0000-0000-000000000000\", \"EDRPOU\": \"\", \"LastName\": \"\", \"FirstName\": \"Приватна особа\", \"MiddleName\": \"\", \"Description\": \"Приватна особа\", \"Counterparty\": null, \"CityDescription\": \"\", \"CounterpartyType\": \"PrivatePerson\", \"OwnershipFormRef\": \"\", \"CounterpartyFullName\": \"\", \"OwnershipFormDescription\": \"\"}",
       "count": 0,
       "is_add_cost": false,
       "is_add_order": false,
       "is_add_items": false,
       "is_warehouse": true,
   }
}
```

---

### 3 Видалення ключа НП

**post** `/ttn-settings/delete-ttn-key`

<p>Видалення ключа НП</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "content": true
     "success": true
}
```

---

### 9 Отримати термін дії АПІ ключа НП

**get** `/ttn-settings/expiration-date-key`

<p>Отримати термін дії АПІ ключа НП</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { &quot;key_expiration_date&quot;:&quot;2022-05-30&quot; } }</p>

---

### 1 Перевірка наявності ключа НП

**get** `/ttn-settings/has-key`

<p>Перевірка наявності ключа НП</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { &quot;has_key&quot;:boolean } }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
         "success": boolean,
         "content": {
             "has_key": true
         }
}
```

---

### 4.3 Отримання адрес контрагента

**get** `/ttn-settings/address`

<p>Отримання адрес контрагента</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request URL Parameters:**

- **ref** `String` **_(обов'язково)_** - <p>UUID контрагента <br> <i>Значення поля можна отримати із запитів: </i></p> <ul> <li><a href="#api-Ttn-CommonData">Отримання даних для створення ТТН</a>, поле <b>counterParties.Ref</b></li> <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>conterparty.Ref</b></li> </ul>
- **isSender** `Boolean` _(опціонально)_ - <p>Ознака, чи є контрагент відправником</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: addresses[] }</p>
- **Ref** `String` **_(обов'язково)_** - <p>UUID адреси</p>
- **Description** `String` **_(обов'язково)_** - <p>Опис адреси</p>
- **CityRef** `String` **_(обов'язково)_** - <p>UUID міста</p>
- **CityDescription** `String` **_(обов'язково)_** - <p>Назва міста</p>
- **StreetRef** `String` **_(обов'язково)_** - <p>UUID вулиці</p>
- **StreetDescription** `String` **_(обов'язково)_** - <p>Назва вулиці</p>
- **BuildingRef** `String` **_(обов'язково)_** - <p>UUID будинку</p>
- **BuildingDescription** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **Note** `String` **_(обов'язково)_** - <p>Коментар</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "addresses": [
            {
                "Ref": "3bf7e2dd-98d5-11ed-a60f-48df37b921db",
                "Description": "Межигірська вул. 7 кв. 2 Комментарий",
                "CityRef": "8d5a980d-391c-11dd-90d9-001a92567626",
                "CityDescription": "Київ",
                "StreetRef": "c55c9097-4148-11dd-9198-001d60451983",
                "StreetDescription": "Межигірська",
                "BuildingRef": "91ced87d-d187-11dd-8c0d-001d92f78697",
                "BuildingDescription": "7",
                "Note": "Коментар"
            }
        ]
    }
}
```

---

### 4.1 Створення адреси контрагента

**post** `/ttn-settings/create-address`

<p>Створення адреси контрагента</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **CounterpartyRef** `String` **_(обов'язково)_** - <p>UUID контрагента <br> Приклад: <code>&quot;9a194f51-91c4-11e9-9937-005056881c6b&quot;</code><br> <i>Значення поля можна отримати із запитів: </i></p> <ul> <li><a href="#api-Ttn-CommonData">Отримання даних для створення ТТН</a>, поле <b>counterParties.Ref</b></li> <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>conterparty.Ref</b></li> </ul>
- **StreetRef** `String` **_(обов'язково)_** - <p>UUID вулиці з НП<br> <i>Значення поля можна отримати із запиту: </i></p> <ul> <li><a href="#api-Ttn-Param">Отримання параметрів з АПІ НП</a>, пошук вулиць, поле <b>Ref</b></li> </ul>
- **BuildingNumber** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **Flat** `String` **_(обов'язково)_** - <p>Номер квартири</p>
- **Note** `String` _(опціонально)_ - <p>Коментар</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {address[]} }</p>
- **address** `array` **_(обов'язково)_** - <p>Список створених адрес</p>
- **address.Ref** `String` **_(обов'язково)_** - <p>UUID адреси</p>
- **address.Description** `String` **_(обов'язково)_** - <p>Опис адреси</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content":{
"address":[
{
"Ref": "dddaf649-98ca-11ed-a60f-48df37b921db",
"Description": "Межигірська вул. 7 кв. 2 Коментар"
}
]
}
}
```

---

### 4.2 Видалення адреси контрагента

**post** `/ttn-settings/delete-address`

<p>Видалення адреси контрагента</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **Ref** `String` **_(обов'язково)_** - <p>UUID адреси <br> <i>Значення поля можна отримати із запитів: </i></p> <ul> <li><a href="#api-TtnSetting-NPAddress">Отримання даних про адреси контрагента</a></li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": true
}
```

---

### 5 Створення обраного вантажу

**post** `/ttn-settings/selected-cargo`

<p>Створення обраного вантажу</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **CargoType** `String` **_(обов'язково)_** - <p>Тип вантажу</p> <ul>     <li><i>Cargo</i> - "Вантаж"</ li>     <li><i>Documents</i> - "Документи"</li>     <li><i>Parcel</i> - "Посилка"</li>     <li><s><i>TiresWheels</i> - "Шини-диски"</s></li>     <li><s><i>Pallet</i> - "Палети"</s></li> </ul>
- **Description** `String` **_(обов'язково)_** - <p>Опис вантажу</p>
- **Weight** `String` **_(обов'язково)_** - <p>Вага в кг</p>
- **Width** `Integer` _(опціонально)_ - <p>Загальна ширина вантажу см</p>
- **Height** `Integer` _(опціонально)_ - <p>Загальна висота вантажу в см</p>
- **Length** `Integer` _(опціонально)_ - <p>Загальна довжина вантажу в см</p>
- **Cost** `Float` _(опціонально)_ - <p>Оголошена вартість, грн</p>
- **SeatsAmount** `Integer` _(опціонально)_ - <p>Кількість місць*<br> <code>*</code>Якщо кількість місць більше 1, бажано заповнити параметри кожної посилки (OptionsSeat)<br> <code>**</code>Якщо не заповнювати OptionsSeat, за замовчуванням вага кожної посилки дорівнюватиме <code>Weight/SeatsAmount</code></p>
- **VolumeGeneral** `Number` _(опціонально)_ - <p>Об'єм загальний, м.куб*<br> <code>*</code>Якщо заповнити параметри ШДВ, об'єм буде прорахований автоматично.<br> <code>**</code>Якщо заповнити об'єм, ШДВ необов'язкові</p>
- **OptionsSeat** `Object[]` _(опціонально)_ - <p>Параметри посилки для кожного місця відправлення</p>
- **OptionsSeat.volumetricWidth** `Integer` **_(обов'язково)_** - <p>Ширина одного місця, см</p>
- **OptionsSeat.volumetricLength** `Integer` **_(обов'язково)_** - <p>Довжина одного місця, см</p>
- **OptionsSeat.volumetricHeight** `Integer` **_(обов'язково)_** - <p>Висота одного місця, см</p>
- **OptionsSeat.weight** `Integer` **_(обов'язково)_** - <p>Вага одного місця, кг</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {TtnSettingModel} }</p>
- **TtnSetting** `Object` **_(обов'язково)_** - <p>Model</p>
- **TtnSetting.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **TtnSetting.ttn_key** `String` **_(обов'язково)_** - <p>Ключ Нової Пошти</p>
- **TtnSetting.selected_sender** `String` **_(обов'язково)_** - <p>Обраний відправник</p>
- **TtnSetting.selected_cargo** `String` **_(обов'язково)_** - <p>Обраний вантаж<br> Об'єкт <a href="#api-Models-CargoNP">Cargo</a> у вигляді json</p>
- **TtnSetting.selected_address** `String` **_(обов'язково)_** - <p>Вибрана адреса</p>
- **TtnSetting.count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **TtnSetting.is_add_cost** `Boolean` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **TtnSetting.is_add_order** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **TtnSetting.is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **TtnSetting.is_warehouse** `Boolean` **_(обов'язково)_** - <p>Ознака, чи адреса відправника є відділенням служби доставки</p>
- **TtnSetting.delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **TtnSetting.is_add_payment_control** `Boolean` **_(обов'язково)_** - <p>Чи потрібно додавати контроль оплати</p>
**ExtraFields:**

- **TtnSetting.conterparty** `String` **_(обов'язково)_** - <p>Контрагент</p>
- **TtnSetting.conterparty.Ref** `String` **_(обов'язково)_** - <p>UUID Контрагента</p>
- **TtnSetting.sender** `String` **_(обов'язково)_** - <p>Відправник</p>
- **TtnSetting.sender.Ref** `String` **_(обов'язково)_** - <p>UUID Контактної особи відправника</p>
- **TtnSetting.address** `String` **_(обов'язково)_** - <p>Адреса відправника (адреса відділення НП)</p>
- **TtnSetting.address.Ref** `String` **_(обов'язково)_** - <p>UUID Адреси відділення відправника</p>
- **TtnSetting.address.CityRef** `String` **_(обов'язково)_** - <p>UUID міста відправника</p>
- **TtnSetting.cargo** `String` **_(обов'язково)_** - <p>Параметри відправлення</p>
- **TtnSetting.cargo.Weight** `String` **_(обов'язково)_** - <p>Вага відправлення</p>
- **TtnSetting.cargo.CargoType** `String` **_(обов'язково)_** - <p>Тип відправлення</p>
- **TtnSetting.cargo.Description** `String` **_(обов'язково)_** - <p>Опис відправлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
   "success": true,
   "content": {
       "id": 123,
       "ttn_key": "XXXXXXXXXXXXXXXXXXXXXX",
       "selected_sender": "{\"Ref\": \"XSXXXXXGXG-XGXGXGXG-XGXG-XGXG-XGFGFGFGFGFG\", \"Email\": \"\", \"Phones\": \"380500000000\", \"LastName\": \"XXXXX\", \"FirstName\": \"XXX\", \"MiddleName\": null, \"Description\": \"XXXX XXX \"}",
       "selected_address": null,
       "selected_cargo": "{\"CargoType\":\"Parcel\",\"Weight\":null,\"Height\":10,\"Length\":13,\"Width\":20,\"Description\":\"test\",\"VolumeGeneral\":0.0026,\"VolumeWeight\":0.65,\"SeatsAmount\":2,\"OptionsSeat\":[{\"volumetricWidth\":20,\"volumetricLength\":10,\"volumetricHeight\":12,\"weight\":2}]}",
       "conterparty": "{\"Ref\": \"XSXXXXXGXG-XGXGXGXG-XGXG-XGXG-XGFGFGFGFGFG\", \"City\": \"00000000-0000-0000-0000-000000000000\", \"EDRPOU\": \"\", \"LastName\": \"\", \"FirstName\": \"Приватна особа\", \"MiddleName\": \"\", \"Description\": \"Приватна особа\", \"Counterparty\": null, \"CityDescription\": \"\", \"CounterpartyType\": \"PrivatePerson\", \"OwnershipFormRef\": \"\", \"CounterpartyFullName\": \"\", \"OwnershipFormDescription\": \"\"}",
       "count": 0,
       "is_add_cost": false,
       "is_add_order": false,
       "is_add_items": false,
       "is_warehouse": true,
   }
}
```

---

### 4 Створення обраного відправника

**post** `/ttn-settings/selected-sender`

<p>Створення обраного відправника</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **AddressRef** `String` **_(обов'язково)_** - <p>UUID адреси відділення з НП</p>
- **CityRef** `String` **_(обов'язково)_** - <p>UUID міста з НП</p>
- **ContactPerson** `String` **_(обов'язково)_** - <p>UUID контактної особи відправника з НП</p>
- **CounterpartyRef** `String` **_(обов'язково)_** - <p>UUID контрагента відправника з НП</p>
- **is_warehouse** `Boolean` _(опціонально)_ - <p>Ознака, чи адреса відправника є відділенням служби доставки<br> true - Відділення<br> false - Особиста адреса (кур'єр)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {TtnSettingModel} }</p>
- **TtnSetting** `Object` **_(обов'язково)_** - <p>Model</p>
- **TtnSetting.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **TtnSetting.ttn_key** `String` **_(обов'язково)_** - <p>Ключ Нової Пошти</p>
- **TtnSetting.selected_sender** `String` **_(обов'язково)_** - <p>Обраний відправник</p>
- **TtnSetting.selected_cargo** `String` **_(обов'язково)_** - <p>Обраний вантаж<br> Об'єкт <a href="#api-Models-CargoNP">Cargo</a> у вигляді json</p>
- **TtnSetting.selected_address** `String` **_(обов'язково)_** - <p>Вибрана адреса</p>
- **TtnSetting.count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **TtnSetting.is_add_cost** `Boolean` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **TtnSetting.is_add_order** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **TtnSetting.is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **TtnSetting.is_warehouse** `Boolean` **_(обов'язково)_** - <p>Ознака, чи адреса відправника є відділенням служби доставки</p>
- **TtnSetting.delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **TtnSetting.is_add_payment_control** `Boolean` **_(обов'язково)_** - <p>Чи потрібно додавати контроль оплати</p>
**ExtraFields:**

- **TtnSetting.conterparty** `String` **_(обов'язково)_** - <p>Контрагент</p>
- **TtnSetting.conterparty.Ref** `String` **_(обов'язково)_** - <p>UUID Контрагента</p>
- **TtnSetting.sender** `String` **_(обов'язково)_** - <p>Відправник</p>
- **TtnSetting.sender.Ref** `String` **_(обов'язково)_** - <p>UUID Контактної особи відправника</p>
- **TtnSetting.address** `String` **_(обов'язково)_** - <p>Адреса відправника (адреса відділення НП)</p>
- **TtnSetting.address.Ref** `String` **_(обов'язково)_** - <p>UUID Адреси відділення відправника</p>
- **TtnSetting.address.CityRef** `String` **_(обов'язково)_** - <p>UUID міста відправника</p>
- **TtnSetting.cargo** `String` **_(обов'язково)_** - <p>Параметри відправлення</p>
- **TtnSetting.cargo.Weight** `String` **_(обов'язково)_** - <p>Вага відправлення</p>
- **TtnSetting.cargo.CargoType** `String` **_(обов'язково)_** - <p>Тип відправлення</p>
- **TtnSetting.cargo.Description** `String` **_(обов'язково)_** - <p>Опис відправлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
"success": true
"content": {
         "id": 29,
         "is_add_cost": false,
         "is_add_items": false,
         "is_add_order": false,
         "is_warehouse": true,
         "count": 0,
         "selected_address": "{"SiteKey":"13111","Description":"Відділення №375 (до 30 кг): вул. Євгена Сверстюка, 11Б","DescriptionRu":"Отделение №375 (до 30 кг): ул. Евгения Сверстюка, 11Б","ShortAddress":"Київ, Євгена Сверстюка, 11Б","ShortAddressRu":"Киев, Евгения Сверстюка, 11Б","Phone":"380800500609","TypeOfWarehouse":"841339c7-591a-42e2-8233-7a0a00f0ed6f","Ref":"e1580458-560e-11e5-8d8d-005056887b8d","Number":"375","CityRef":"8d5a980d-391c-11dd-90d9-001a92567626","CityDescription":"Київ","CityDescriptionRu":"Киев","SettlementRef":"e718a680-4b33-11e4-ab6d-005056801329","SettlementDescription":"Київ","SettlementAreaDescription":"Київська","SettlementRegionsDescription":"","SettlementTypeDescription":"місто","Longitude":"30.599890040970000","Latitude":"50.449897412453000","PostFinance":"1","BicycleParking":"1","PaymentAccess":"1","POSTerminal":"0","InternationalShipping":"1","TotalMaxWeightAllowed":"30","PlaceMaxWeightAllowed":0,"Reception":{"Monday":"08:00-21:00","Tuesday":"08:00-21:00","Wednesday":"08:00-21:00","Thursday":"08:00-21:00","Friday":"08:00-21:00","Saturday":"09:00-18:00","Sunday":"11:00-16:00"},"Delivery":{"Monday":"08:00-18:00","Tuesday":"08:00-18:00","Wednesday":"08:00-18:00","Thursday":"08:00-18:00","Friday":"08:00-18:00","Saturday":"09:00-18:00","Sunday":"11:00-14:15"},"Schedule":{"Monday":"08:00-21:00","Tuesday":"08:00-21:00","Wednesday":"08:00-21:00","Thursday":"08:00-21:00","Friday":"08:00-21:00","Saturday":"09:00-18:00","Sunday":"11:00-16:00"},"DistrictCode":"п375","WarehouseStatus":"Working","CategoryOfWarehouse":"Branch"}",
         "selected_cargo": null,
         "selected_sender": "{"Description":"Марин Ультра ","Phones":"380971090521","Email":"","Ref":"99fdc877-ba8e-11e9-9937-005056881c6b","LastName":"Марин","FirstName":"Ультра","MiddleName":null}",
         "ttn_key": "9d2d8c93d2c8cccdee72e7a67764052e"
}
```

---

### 7 Отримання даних про налаштування

**get** `/ttn-settings/setting`

<p>Отримання даних про налаштування</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **TtnSetting** `Object` **_(обов'язково)_** - <p>Model</p>
- **TtnSetting.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **TtnSetting.ttn_key** `String` **_(обов'язково)_** - <p>Ключ Нової Пошти</p>
- **TtnSetting.selected_sender** `String` **_(обов'язково)_** - <p>Обраний відправник</p>
- **TtnSetting.selected_cargo** `String` **_(обов'язково)_** - <p>Обраний вантаж<br> Об'єкт <a href="#api-Models-CargoNP">Cargo</a> у вигляді json</p>
- **TtnSetting.selected_address** `String` **_(обов'язково)_** - <p>Вибрана адреса</p>
- **TtnSetting.count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **TtnSetting.is_add_cost** `Boolean` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **TtnSetting.is_add_order** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **TtnSetting.is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **TtnSetting.is_warehouse** `Boolean` **_(обов'язково)_** - <p>Ознака, чи адреса відправника є відділенням служби доставки</p>
- **TtnSetting.delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **TtnSetting.is_add_payment_control** `Boolean` **_(обов'язково)_** - <p>Чи потрібно додавати контроль оплати</p>
**ExtraFields:**

- **TtnSetting.conterparty** `String` **_(обов'язково)_** - <p>Контрагент</p>
- **TtnSetting.conterparty.Ref** `String` **_(обов'язково)_** - <p>UUID Контрагента</p>
- **TtnSetting.sender** `String` **_(обов'язково)_** - <p>Відправник</p>
- **TtnSetting.sender.Ref** `String` **_(обов'язково)_** - <p>UUID Контактної особи відправника</p>
- **TtnSetting.address** `String` **_(обов'язково)_** - <p>Адреса відправника (адреса відділення НП)</p>
- **TtnSetting.address.Ref** `String` **_(обов'язково)_** - <p>UUID Адреси відділення відправника</p>
- **TtnSetting.address.CityRef** `String` **_(обов'язково)_** - <p>UUID міста відправника</p>
- **TtnSetting.cargo** `String` **_(обов'язково)_** - <p>Параметри відправлення</p>
- **TtnSetting.cargo.Weight** `String` **_(обов'язково)_** - <p>Вага відправлення</p>
- **TtnSetting.cargo.CargoType** `String` **_(обов'язково)_** - <p>Тип відправлення</p>
- **TtnSetting.cargo.Description** `String` **_(обов'язково)_** - <p>Опис відправлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
   "success": true,
   "content": {
       "id": 123,
       "ttn_key": "XXXXXссссссс777ewryeryhdf1234",
       "selected_sender": "{\"Ref\": \"XSXXXXXGXG-XGXGXGXG-XGXG-XGXG-XGFGFGFGFGFG\", \"Email\": \"\", \"Phones\": \"380500000000\", \"LastName\": \"XXX\", \"FirstName\": \"XXX\", \"MiddleName\": XXX, \"Description\": \"XXX \"}",
       "selected_address": null,
       "selected_cargo": "{\"Weight\": \"1\", \"CargoType\": \"Parcel\", \"Description\": \"none\"}",
       "count": 0,
       "is_add_cost": true,
       "is_add_order": true,
       "is_add_items": true,
       "is_warehouse": true,
       "delivery_service_id": 5,
       "is_add_payment_control": true
   }
```

```json
HTTP/1.1 200 OK
   "success": true,
   "content": {
       "id": 123,
       "ttn_key": "XXXXXссссссс777ewryeryhdf1234",
       "selected_sender": "{\"Ref\": \"XSXXXXXGXG-XGXGXGXG-XGXG-XGXG-XGFGFGFGFGFG\", \"Email\": \"\", \"Phones\": \"380500000000\", \"LastName\": \"XXX\", \"FirstName\": \"XXX\", \"MiddleName\": XXX, \"Description\": \"XXX \"}",
       "selected_address": null,
       "selected_cargo": "{\"Weight\": \"1\", \"CargoType\": \"Parcel\", \"Description\": \"none\"}",
       "conterparty": {
           "Ref": "XXXXX-XXXX-XXX-XXXX-XXXXXXXXX",
           "City": "00000000-0000-0000-0000-000000000000",
           "EDRPOU": "",
           "LastName": "",
           "FirstName": "Приватна особа",
           "MiddleName": "",
           "Description": "Приватна особа",
           "Counterparty": null,
           "CityDescription": "",
           "CounterpartyType": "PrivatePerson",
           "OwnershipFormRef": "",
           "CounterpartyFullName": "",
           "OwnershipFormDescription": ""
       },
       "count": 0,
       "is_add_cost": true,
       "is_add_order": true,
       "is_add_items": true,
       "is_warehouse": true,
       "delivery_service_id": 5,
       "is_add_payment_control": false
       "sender": {
           "Ref": "XXXXXXXX-XXX-XXXX-XXXX-XXXXXXXXXX",
           "Email": "",
           "Phones": "380500000000",
           "LastName": "XXXXX",
           "FirstName": "XXX",
           "MiddleName": XXX,
           "Description": "XXXX XXX "
       },
       "address": {
         "Ref":"16d300ea-8501-11e4-acce-0050568002cf",
         "Phone":"380800500609",
         "Direct":"",
         "Number":"181",
         "CityRef":"8d5a980d-391c-11dd-90d9-001a92567626",
         "SiteKey":"10928",
         "Delivery":{
             "Friday":"08:00-18:00",
             "Monday":"08:00-18:00",
             "Sunday":"11:00-14:50",
             "Tuesday":"08:00-18:00",
             "Saturday":"09:00-18:00",
             "Thursday":"08:00-18:00",
             "Wednesday":"08:00-18:00"
         },
         "Latitude":"50.474545000000000",
         "Schedule":{
             "Friday":"08:00-21:00",
             "Monday":"08:00-21:00",
             "Sunday":"11:00-18:00",
             "Tuesday":"08:00-21:00",
             "Saturday":"09:00-18:00",
             "Thursday":"08:00-21:00",
             "Wednesday":"08:00-21:00"
         },
         "Longitude":"30.494373000000000",
         "Reception":{
             "Friday":"08:00-21:00",
             "Monday":"08:00-21:00",
             "Sunday":"-",
             "Tuesday":"08:00-21:00",
             "Saturday":"09:00-18:00",
             "Thursday":"08:00-21:00",
             "Wednesday":"08:00-21:00"
         },
         "Description":"Відділення №181 (до 30 кг на одне місце): вул. Кирилівська, 64",
         "POSTerminal":"0",
         "PostFinance":"1",
         "DistrictCode":"п181",
         "ShortAddress":"Київ, Кирилівська, 64",
         "DescriptionRu":"Отделение №181 (до 30 кг на одно место): ул. Кириловская, 64",
         "PaymentAccess":"1",
         "SettlementRef":"e718a680-4b33-11e4-ab6d-005056801329",
         "BicycleParking":"0",
         "ShortAddressRu":"Киев, Кириловская, 64",
         "CityDescription":"Київ",
         "TypeOfWarehouse":"841339c7-591a-42e2-8233-7a0a00f0ed6f",
         "WarehouseStatus":"Working",
         "CityDescriptionRu":"Киев",
         "CategoryOfWarehouse":"Branch",
         "WarehouseStatusDate":"2018-06-19 00:00:00",
         "InternationalShipping":"0",
         "PlaceMaxWeightAllowed":"30",
         "SettlementDescription":"Київ",
         "TotalMaxWeightAllowed":"0",
         "SettlementAreaDescription":"Київська",
         "SettlementTypeDescription":"місто",
         "SelfServiceWorkplacesCount":"1",
         "SettlementRegionsDescription":""
       },
       "cargo": {
           "Weight": "1",
           "CargoType": "Parcel",
           "Description": "none"
       }
   }
```

---

### 6 Зміна налаштувань автозаповнення ТТН

**put** `/ttn-settings/change-setting-flags`

<p>Зміна налаштувань автозаповнення ТТН</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **is_add_cost** `Boolean` **_(обов'язково)_** - <p>Додавати вартість замовлення в &quot;Оголошена вартість&quot; ТТН з замовлення</p>
- **is_add_items** `Boolean` **_(обов'язково)_** - <p>Додавати дані про товар в ТТН з замовлення</p>
- **is_add_order** `Boolean` **_(обов'язково)_** - <p>Додавати номер замовлення в ТТН з замовлення</p>
- **is_add_payment_control** `Boolean` _(опціонально)_ - <p>Додавати контроль оплати (якщо укладений договір з Новою поштою на послугу &quot;Контроль оплати&quot;)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {TtnSettingModel} }</p>
- **TtnSetting** `Object` **_(обов'язково)_** - <p>Model</p>
- **TtnSetting.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **TtnSetting.ttn_key** `String` **_(обов'язково)_** - <p>Ключ Нової Пошти</p>
- **TtnSetting.selected_sender** `String` **_(обов'язково)_** - <p>Обраний відправник</p>
- **TtnSetting.selected_cargo** `String` **_(обов'язково)_** - <p>Обраний вантаж<br> Об'єкт <a href="#api-Models-CargoNP">Cargo</a> у вигляді json</p>
- **TtnSetting.selected_address** `String` **_(обов'язково)_** - <p>Вибрана адреса</p>
- **TtnSetting.count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **TtnSetting.is_add_cost** `Boolean` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **TtnSetting.is_add_order** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **TtnSetting.is_add_items** `Boolean` **_(обов'язково)_** - <p>Чи потрібно передавати назви і id товарів з замовлення</p>
- **TtnSetting.is_warehouse** `Boolean` **_(обов'язково)_** - <p>Ознака, чи адреса відправника є відділенням служби доставки</p>
- **TtnSetting.delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **TtnSetting.is_add_payment_control** `Boolean` **_(обов'язково)_** - <p>Чи потрібно додавати контроль оплати</p>
**ExtraFields:**

- **TtnSetting.conterparty** `String` **_(обов'язково)_** - <p>Контрагент</p>
- **TtnSetting.conterparty.Ref** `String` **_(обов'язково)_** - <p>UUID Контрагента</p>
- **TtnSetting.sender** `String` **_(обов'язково)_** - <p>Відправник</p>
- **TtnSetting.sender.Ref** `String` **_(обов'язково)_** - <p>UUID Контактної особи відправника</p>
- **TtnSetting.address** `String` **_(обов'язково)_** - <p>Адреса відправника (адреса відділення НП)</p>
- **TtnSetting.address.Ref** `String` **_(обов'язково)_** - <p>UUID Адреси відділення відправника</p>
- **TtnSetting.address.CityRef** `String` **_(обов'язково)_** - <p>UUID міста відправника</p>
- **TtnSetting.cargo** `String` **_(обов'язково)_** - <p>Параметри відправлення</p>
- **TtnSetting.cargo.Weight** `String` **_(обов'язково)_** - <p>Вага відправлення</p>
- **TtnSetting.cargo.CargoType** `String` **_(обов'язково)_** - <p>Тип відправлення</p>
- **TtnSetting.cargo.Description** `String` **_(обов'язково)_** - <p>Опис відправлення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
"success": true
"content": {
     "id": 29
     "is_add_cost": false,
     "is_add_items": false,
     "is_add_order": false,
     "is_warehouse": true,
     "is_add_payment_control": false,
     "count": 0,
     "selected_address": "{"SiteKey":"13111","Description":"Відділення №375 (до 30 кг): вул. Євгена Сверстюка, 11Б","DescriptionRu":"Отделение №375 (до 30 кг): ул. Евгения Сверстюка, 11Б","ShortAddress":"Київ, Євгена Сверстюка, 11Б","ShortAddressRu":"Киев, Евгения Сверстюка, 11Б","Phone":"380800500609","TypeOfWarehouse":"841339c7-591a-42e2-8233-7a0a00f0ed6f","Ref":"e1580458-560e-11e5-8d8d-005056887b8d","Number":"375","CityRef":"8d5a980d-391c-11dd-90d9-001a92567626","CityDescription":"Київ","CityDescriptionRu":"Киев","SettlementRef":"e718a680-4b33-11e4-ab6d-005056801329","SettlementDescription":"Київ","SettlementAreaDescription":"Київська","SettlementRegionsDescription":"","SettlementTypeDescription":"місто","Longitude":"30.599890040970000","Latitude":"50.449897412453000","PostFinance":"1","BicycleParking":"1","PaymentAccess":"1","POSTerminal":"0","InternationalShipping":"1","TotalMaxWeightAllowed":"30","PlaceMaxWeightAllowed":0,"Reception":{"Monday":"08:00-21:00","Tuesday":"08:00-21:00","Wednesday":"08:00-21:00","Thursday":"08:00-21:00","Friday":"08:00-21:00","Saturday":"09:00-18:00","Sunday":"11:00-16:00"},"Delivery":{"Monday":"08:00-18:00","Tuesday":"08:00-18:00","Wednesday":"08:00-18:00","Thursday":"08:00-18:00","Friday":"08:00-18:00","Saturday":"09:00-18:00","Sunday":"11:00-14:15"},"Schedule":{"Monday":"08:00-21:00","Tuesday":"08:00-21:00","Wednesday":"08:00-21:00","Thursday":"08:00-21:00","Friday":"08:00-21:00","Saturday":"09:00-18:00","Sunday":"11:00-16:00"},"DistrictCode":"п375","WarehouseStatus":"Working","CategoryOfWarehouse":"Branch"}",
     "selected_cargo": null,
     "selected_sender": "{"Description":"Марин Ультра ","Phones":"380971090521","Email":"","Ref":"99fdc877-ba8e-11e9-9937-005056881c6b","LastName":"Марин","FirstName":"Ультра","MiddleName":null}",
     "ttn_key": "9d2d8c93d2c8cccdee72e7a67764052e"
}
```

---

### 8 Отримання детальних даних по ТТН

**post** `/ttns/ttns-details`

<p>Отримання детальних даних по ТТН</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **Documents** `Array` **_(обов'язково)_** - 
- **Documents.DocumentNumber** `String` **_(обов'язково)_** - <p>Номер ТТН</p>
- **Documents.Phone** `String` **_(обов'язково)_** - <p>Телефон відправника / одержувача</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
    "success": true,
    "content": {
        "success": true,
        "data": [
            {
                "Number": "20450123456",
                "DocumentWeight": 1,
                "CheckWeight": 0,
                "DocumentCost": "36",
                "SumBeforeCheckWeight": 0,
                "PayerType": "Recipient",
                "RecipientFullName": "",
                "RecipientDateTime": "",
                "OwnerDocumentType": "",
                "ScheduledDeliveryDate": "",
                "PaymentMethod": "Cash",
                "CargoDescriptionString": "Тест",
                "CargoType": "Parcel",
                "CitySender": "Київ",
                "CityRecipient": "Київ",
                "WarehouseRecipient": "Відділення №17: вул. Новокостянтинівська, 22/15",
                "CounterpartyType": "",
                "Redelivery": 0,
                "RedeliverySum": 0,
                "RedeliveryNum": "",
                "RedeliveryPayer": "",
                "AfterpaymentOnGoodsCost": 0,
                "ServiceType": "WarehouseWarehouse",
                "UndeliveryReasonsSubtypeDescription": "",
                "WarehouseRecipientNumber": 0,
                "LastCreatedOnTheBasisNumber": "",
                "LastCreatedOnTheBasisDocumentType": "",
                "LastCreatedOnTheBasisPayerType": "",
                "LastCreatedOnTheBasisDateTime": "",
                "LastTransactionStatusGM": "",
                "LastTransactionDateTimeGM": "",
                "WarehouseRecipientInternetAddressRef": "3993ghjghjjjj8002cf",
                "MarketplacePartnerToken": "",
                "DateScan": "0001-01-01 00:00:00",
                "PaymentStatus": "",
                "PaymentStatusDate": "",
                "AmountToPay": "",
                "AmountPaid": "",
                "InternationalDeliveryType": "",
                "UndeliveryReasonsDate": "",
                "RecipientWarehouseTypeRef": "",
                "RedeliveryPaymentCardDescription": "",
                "OwnerDocumentNumber": "",
                "FactualWeight": "",
                "WarehouseSender": "",
                "PhoneRecipient": "380671234567",
                "WarehouseRecipientRef": "9ae54456456596e",
                "RecipientAddress": "м. Київ, Відділення №17, вул. Новокостянтинівська, 22/15",
                "OnlineCreditStatus": "",
                "VolumeWeight": "",
                "ActualDeliveryDate": "",
                "RefCitySender": "8d5a98sdfsdfsdfff7626",
                "RefCityRecipient": "8d5asdfsdfsfdf567626",
                "CardMaskedNumber": "",
                "BarcodeRedBox": "",
                "Packaging": [],
                "SecurePayment": false,
                "CounterpartyRecipientDescription": "",
                "RecipientFullNameEW": "Тест Тест Тест",
                "CargoReturnRefusal": false,
                "CalculatedWeight": 0,
                "CategoryOfWarehouse": "",
                "WarehouseSenderAddress": "",
                "WarehouseRecipientAddress": "Київ, Новокостянтинівська, 22/15",
                "PossibilityCreateRedirecting": false,
                "PossibilityCreateReturn": false,
                "PossibilityCreateRefusal": false,
                "PossibilityChangeEW": false,
                "PossibilityChangeCash2Card": false,
                "PossibilityChangeDeliveryIntervals": false,
                "Status": "Нова пошта очікує надходження від відправника",
                "StatusCode": "1",
                "RefEW": "00000000--000000000000",
                "DatePayedKeeping": "",
                "OnlineCreditStatusCode": ""
            },
            {
                "Number": "2045076543",
                "DocumentWeight": 0.1,
                "CheckWeight": 0,
                "DocumentCost": "41",
                "SumBeforeCheckWeight": 0,
                "PayerType": "Recipient",
                "RecipientFullName": "",
                "RecipientDateTime": "",
                "OwnerDocumentType": "",
                "ScheduledDeliveryDate": "",
                "PaymentMethod": "Cash",
                "CargoDescriptionString": "Заказ",
                "CargoType": "Parcel",
                "CitySender": "Великий Омеляник",
                "CityRecipient": "Ізюм",
                "WarehouseRecipient": "Відділення №2 (до 30 кг на одне місце): пров. Східний, 2",
                "CounterpartyType": "",
                "Redelivery": 0,
                "RedeliverySum": 0,
                "RedeliveryNum": "",
                "RedeliveryPayer": "",
                "AfterpaymentOnGoodsCost": 0,
                "ServiceType": "WarehouseWarehouse",
                "UndeliveryReasonsSubtypeDescription": "",
                "WarehouseRecipientNumber": 0,
                "LastCreatedOnTheBasisNumber": "",
                "LastCreatedOnTheBasisDocumentType": "",
                "LastCreatedOnTheBasisPayerType": "",
                "LastCreatedOnTheBasisDateTime": "",
                "LastTransactionStatusGM": "",
                "LastTransactionDateTimeGM": "",
                "WarehouseRecipientInternetAddressRef": "598ert4565678002cf",
                "MarketplacePartnerToken": "",
                "DateScan": "0001-01-01 00:00:00",
                "PaymentStatus": "",
                "PaymentStatusDate": "",
                "AmountToPay": "",
                "AmountPaid": "",
                "InternationalDeliveryType": "",
                "UndeliveryReasonsDate": "",
                "RecipientWarehouseTypeRef": "",
                "RedeliveryPaymentCardDescription": "",
                "OwnerDocumentNumber": "",
                "FactualWeight": "",
                "WarehouseSender": "",
                "PhoneRecipient": "380399447769",
                "WarehouseRecipientRef": "5981234qwerty",
                "RecipientAddress": "м. Ізюм, Відділення №2 (до 30 кг на одне місце): пров. Східний, 2",
                "OnlineCreditStatus": "",
                "VolumeWeight": "",
                "ActualDeliveryDate": "",
                "RefCitySender": "9f7223453453456b24375",
                "RefCityRecipient": "db5c345345357626",
                "CardMaskedNumber": "",
                "BarcodeRedBox": "",
                "Packaging": [],
                "SecurePayment": false,
                "CounterpartyRecipientDescription": "",
                "RecipientFullNameEW": "Литовка Ирина ",
                "CargoReturnRefusal": false,
                "CalculatedWeight": 0,
                "CategoryOfWarehouse": "",
                "WarehouseSenderAddress": "",
                "WarehouseRecipientAddress": "Ізюм, Східний, 2",
                "PossibilityCreateRedirecting": false,
                "PossibilityCreateReturn": false,
                "PossibilityCreateRefusal": false,
                "PossibilityChangeEW": false,
                "PossibilityChangeCash2Card": false,
                "PossibilityChangeDeliveryIntervals": false,
                "Status": "Нова пошта очікує надходження від відправника",
                "StatusCode": "1",
                "RefEW": "0000000345345500",
                "DatePayedKeeping": "",
                "OnlineCreditStatusCode": ""
            }
        ],
        "errors": [],
        "warnings": [],
        "info": [],
        "messageCodes": [],
        "errorCodes": [],
        "warningCodes": [],
        "infoCodes": []
    }
}
   }
```

---

