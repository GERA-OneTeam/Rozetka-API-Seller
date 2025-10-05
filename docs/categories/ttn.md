# Ttn

### 2 Отримання даних для створення ТТН

**get** `/ttns/common-data`

<p>Отримання даних для створення ТТН <br><i>Описані лише ті поля з відповіді, які необхідні при створенні ТТН</i><br> <code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **CanAfterpaymentOnGoodsCost** `Boolean` **_(обов'язково)_** - <p>Чи є у продавця можливість приймати гроші на розрахунковий рахунок (чи укладений договір з Новою поштою на послугу &quot;Контроль оплати)</p>
- **CanNonCashPayment** `Boolean` **_(обов'язково)_** - <p>Чи є у продавця можливість обрати тип оплати з розрахункового рахунку</p>
- **cargoTypes** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів &quot;Тип Посилки&quot;</p>
- **cargoType.Description** `String` **_(обов'язково)_** - <p>Опис типу посилки (ua)</p>
- **cargoType.Ref** `String` **_(обов'язково)_** - <p>Ключ типу посилки <code>(для відправки при створенні ТТН, поле &quot;CargoType&quot;)</code></p>
- **counterParties** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів &quot;Контрагент відправника&quot;</p>
- **counterParties.CounterpartyType** `String` **_(обов'язково)_** - <p>Контрагент відправника</p>
- **counterParties.Description** `String` **_(обов'язково)_** - <p>Опис контрагента відправника (ua)</p>
- **counterParties.Ref** `String` **_(обов'язково)_** - <p>Ключ контрагента відправника <br> <code>(заповнюється в полі &quot;Sender&quot; при створенні ТТН)</code></p>
- **recipientCounterParties** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів &quot;Контрагент одержувача&quot;</p>
- **recipientCounterParties.CounterpartyType** `String` **_(обов'язково)_** - <p>Контрагент одержувача</p>
- **recipientCounterParties.Description** `String` **_(обов'язково)_** - <p>Опис контрагента одержувача (ua)</p>
- **recipientCounterParties.Ref** `String` **_(обов'язково)_** - <p>Ключ контрагента одержувача <br> <code>(заповнюється в полі &quot;Recipient&quot; при створенні ТТН)</code></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
"content": {
   "CanAfterpaymentOnGoodsCost": false,
   "CanNonCashPayment": false,
   "cargoTypes": [
       {"Description": "Посилка", "Ref": "Parcel"}
       {"Description": "Вантаж", "Ref": "Cargo"}
       {"Description": "Документи", "Ref": "Documents"}
       {"Description": "Шини-диски", "Ref": "TiresWheels"}
       {"Description": "Палети", "Ref": "Pallet"}
   ]
   "counterParties": [
         {
                 "City": "00000000-0000-0000-0000-000000000000"
                 "CityDescription": ""
                 "Counterparty": null
                 "CounterpartyFullName": ""
                 "CounterpartyType": "PrivatePerson"
                 "Description": "Приватна особа"
                 "EDRPOU": ""
                 "FirstName": "Приватна особа"
                 "LastName": ""
                 "MiddleName": ""
                 "OwnershipFormDescription": ""
                 "OwnershipFormRef": ""
                 "Ref": "9a194f51-91c4-11e9-9937-005056881c6b"
         }
   ]
   "recipientCounterParties": [
       {
            "City": "00000000-0000-0000-0000-000000000000"
            "CityDescription": ""
            "Counterparty": null
            "CounterpartyFullName": ""
            "CounterpartyType": "PrivatePerson"
            "Description": "Приватна особа"
            "EDRPOU": ""
            "FirstName": "Приватна особа"
            "LastName": ""
            "MiddleName": ""
            "OwnershipFormDescription": "Фізична особа"
            "OwnershipFormRef": "d558bfcb-7456-11df-ad52-000c29118aa7"
            "Ref": "9a24c36f-91c4-11e9-9937-005056881c6b"
       }
   ]
}
"success": true
```

---

### 6 Створення ТТН НП

**post** `/ttns/create-ttn`

<p>Створення ТТН НП <br><code>Відпрацьовує тільки при діючому ключі НП</code><br> Всі поля відповіді приходять безпосередньо з API НП</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters - Загальне:**

- **ServiceType** `String` **_(обов'язково)_** - <p>Тип доставки. <ul> <li><i>WarehouseDoors</i> - тип доставки &quot;Кур'єр (Адресна доставка)&quot;</li> <li><i>WarehouseWarehouse</i> - тип доставки &quot;До відділення&quot;</li> <li><i>DoorsDoors</i> - тип доставки &quot;Кур'єр (Адреса-Адреса)&quot;</li> <li><i>DoorsWarehouse</i> - тип доставки &quot;Адреса - відділення&quot;</li> </ul></p>
- **CargoType** `String` **_(обов'язково)_** - <p>Тип вантажу.</p> <ul>     <li><i>Cargo</i> - "Вантаж"</ li>     <li><i>Documents</i> - "Документи"</li>     <li><i>Parcel</i> - "Посилка"</li>     <li><s><i>TiresWheels</i> - "Шини-диски"</s></li>     <li><s><i>Pallet</i> - "Палети"</s></li> </ul>
- **Cost** `String` **_(обов'язково)_** - <p>Сума замовлення. <br><i>В системі НП це сутність &quot;Оголошена вартість&quot;.</i> <br>Пример: <code>&quot;12312&quot;</code></p>
- **Description** `String` **_(обов'язково)_** - <p>Опис вмісту посилки. Приклад: <code>&quot;Обувь, одежда, аксессуары&quot;</code></p>
- **SeatsAmount** `String` **_(обов'язково)_** - <p>Кількість місць в посилці. <code>&quot;1&quot;</code></p>
- **VolumeGeneral** `String` **_(обов'язково)_** - <p>Об'єм загальний, м.куб. Вираховується відправником залежно від розмірів посилки. <br><code>&quot;0.001&quot;</code> <br><code>Обов'язково зазначати, якщо не передається параметр OptionsSeat</code></p>
- **Weight** `String` **_(обов'язково)_** - <p>Вага посилки, кг <br><code>&quot;0.5&quot;</code> <br> При створенні накладної з типом &quot;документи&quot;,можливі значення: <code>&quot;0.1, 0.5, 1&quot;</code></p>
- **Height** `String` _(опціонально)_ - <p>Висота посилки, см <br><code>&quot;10&quot;</code></p>
- **Length** `String` _(опціонально)_ - <p>Довжина посилки, см <br><code>&quot;20&quot;</code></p>
- **Width** `String` _(опціонально)_ - <p>Ширина посилки, см <br><code>&quot;30&quot;</code></p>
- **PayerType** `String` **_(обов'язково)_** - <p>Платник (Відправник, Одержувач)</p>
- **PaymentMethod** `String` **_(обов'язково)_** - <p>Тип оплати.</p> <ul>     <li><i>NonCash</i> - Безготівковий розрахунок</li>     <li><i>Cash</i> - Готівковий розрахунок</li> </ul>
- **DateTime** `String` _(опціонально)_ - <p>Орієнтовна дата отримання.</p>
- **InfoRegClientBarcodes** `String` _(опціонально)_ - <p>ID замовлення для відображення в НП. <code>&quot;123122&quot;</code></p>
- **AdditionalInformation** `String` _(опціонально)_ - <p>Опис товарів</p>
- **BackwardDeliveryMoney** `String` _(опціонально)_ - <p>Сума накладного платежу <br> <i>(заповнюється, коли продавець хоче отримати оплату накладним платежем).</i><br> При заповненні цього поля автоматично проставляється PayerType = Recipient (Платник - Одержувач)<br> Приклад: <code>&quot;422&quot;</code></p>
- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення. Параметр передається, коли створюється ТТН з замовлення</p>
- **delivery_service_id** `Integer` _(опціонально)_ - <p>ID служби доставки (НП відділення або поштомати), якщо не передавати, то проставляємо НП відділення</p>
- **CanAfterpaymentOnGoodsCost** `Boolean` **_(обов'язково)_** - <p>Чи ввімкнено у продавця контроль оплати (зарахування грошей за товар на розрахунковий рахунок)</p>
- **AfterpaymentOnGoodsCost** `String` _(опціонально)_ - <p>Сума зарахування за товар на розрахунковий рахунок продавця</p>
- **BackwardDeliveryPayer** `String` **_(обов'язково)_** - <p>Платник за зворотню доставку грошей (Відправник, Одержувач) <i>при грошовому переказі на карту - платник за послугу зворотної доставки грошей тільки одержувач</i></p>
- **OptionsSeat** `Object[]` _(опціонально)_ - <p>Параметри посилки для кожного місця відправлення</p>
- **OptionsSeat.volumetricWidth** `Integer` **_(обов'язково)_** - <p>Ширина одного місця, см</p>
- **OptionsSeat.volumetricLength** `Integer` **_(обов'язково)_** - <p>Довжина одного місця, см</p>
- **OptionsSeat.volumetricHeight** `Integer` **_(обов'язково)_** - <p>Висота одного місця, см</p>
- **OptionsSeat.weight** `Integer` **_(обов'язково)_** - <p>Вага одного місця, кг</p>

**Request Body Parameters - Відправник:**

- **Sender** `String` **_(обов'язково)_** - <p>Контрагент відправника. UUID. <code>&quot;9a24c36f-91c4-11e9-9937-005056881c6b&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-CommonData">Отримання даних для створення ТТН</a>, поле <b>counterParties.Ref</b></li>     <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>conterparty.Ref</b></li> </ul>
- **CitySender** `String` **_(обов'язково)_** - <p>Місто відправника. UUID НП. <code>&quot;8d5a980d-391c-11dd-90d9-001a92567626&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-Param">Отримання параметрів з API НП</a>, пошук по місту, поле <b>data[].Ref</b></li>     <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>address.CityRef</b></li> </ul>
- **SenderAddress** `String` **_(обов'язково)_** - <p>Адреса відділення відправника. UUID. <code>&quot;e1580458-560e-11e5-8d8d-00&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-Param">Отримання параметрів з API НП</a>, пошук по відділенню, поле <b>data[].Ref</b></li>     <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>address.Ref</b></li> </ul>
- **ContactSender** `String` **_(обов'язково)_** - <p>Контактна особа відправника. UUID. <code>&quot;99fdc877-ba8e-11e9-9937-005056881c6b&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-Persons">Отримання даних щодо контактної персони</a>, поле <b>content[].Ref</b></li>     <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>sender.Ref</b></li> </ul>
- **SendersPhone** `String` **_(обов'язково)_** - <p>Телефон відправника. &quot;380971090521&quot;</p>

**Request Body Parameters - Одержувач:**

- **Recipient** `String` **_(обов'язково)_** - <p>Контрагент одержувача. UUID. <code>&quot;9a24c36f-91c4-11e9-9937-005056881c6b&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-CommonData">Отримання даних для створення ТТН</a>,  поле <b>recipientCounterParties.Ref</b></li> </ul>
- **CityRecipient** `String` **_(обов'язково)_** - <p>Місто одержувача. UUID НП. <code>&quot;8d5a980d-391c-11dd-90d9-001a92567626&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-Param">Отримання параметрів з API НП</a>, пошук по місту, поле <b>data[].Ref</b></li>     <li><a href="#api-Ttn-TtnGetUserInfo">Дані про одержувача і посилку з замовлення</a>, поле <b>cityRef</b></li> </ul>
- **RecipientAddress** `String` **_(обов'язково)_** - <p>Адреса відділення одержувача. UUID. <code>&quot;1ec09d4b-e1c2-11e3-8c4a-0050568002cf&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-Param">Отримання параметрів з API НП</a>, пошук по відділенню, поле <b>data[].Ref</b></li>     <li><a href="#api-Ttn-TtnGetUserInfo">Дані про одержувача і посилку з замовлення</a>, поле <b>warehouseRef</b></li> </ul>
- **ContactRecipient** `String` **_(обов'язково)_** - <p>ПІБ одержувача. &quot;Тест Тестович&quot;<br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-TtnGetUserInfo">Дані про одержувача і посилку з замовлення</a>, поле <b>name</b></li> </ul>
- **RecipientsPhone** `String` **_(обов'язково)_** - <p>Номер телефону одержувача. &quot;0971090521&quot;<br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-TtnGetUserInfo">Дані про одержувача і посилку з замовлення</a>, поле <b>phone</b></li> </ul>

**Request Body Parameters - Одержувач [адресна доставка]:**

- **NewAddress** `String` **_(обов'язково)_** - <p>Прапор, що означає використання нової адреси одержувача.<br> <i>Для адресної доставки з ручним введенням міста, вулиці і будинку необхідно відправляти значення</i> <code>&quot;1&quot;</code></p>
- **RecipientType** `String` **_(обов'язково)_** - <p>Тип одержувача</p>
- **RecipientName** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **RecipientCityName** `String` **_(обов'язково)_** - <p>Місто одержувача (Назва, строка)</p>
- **RecipientArea** `String` _(опціонально)_ - <p>Область одержувача (Назва, строка)</p>
- **RecipientAreaRegions** `String` _(опціонально)_ - <p>Регіон одержувача (Назва, строка)</p>
- **RecipientAddressName** `String` **_(обов'язково)_** - <p>Вулиця одержувача (Назва, строка)</p>
- **RecipientHouse** `String` **_(обов'язково)_** - <p>Будинок одержувача (Номер, строка)</p>
- **RecipientFlat** `String` _(опціонально)_ - <p>Квартира одержувача (Номер, строка)</p>
- **RecipientsPhone** `String` **_(обов'язково)_** - <p>Номер телефону одержувача.&quot;0971090521&quot;<br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-TtnGetUserInfo">Дані про одержувача і посилку з замовлення</a>, поле <b>phone</b></li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **CostOnSite** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **EstimatedDeliveryDate** `String` **_(обов'язково)_** - <p>Очікувана дата доставки</p>
- **IntDocNumber** `String` **_(обов'язково)_** - <p>Номер ТТН (ЕН)</p>
- **Ref** `String` **_(обов'язково)_** - <p>UUID ТТН (Внутрішній код ТТН в API НП)</p>
- **TypeDocument** `String` **_(обов'язково)_** - 

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "content": {
     "success": true,
     "data": [
         {
             "CostOnSite": 107
             "EstimatedDeliveryDate": "25.10.2019"
             "IntDocNumber": "20450174011062"
             "Ref": "912fb43d-f63e-11e9-9937-005056881c6b"
             "TypeDocument": "InternetDocument"
         }
     ]
     "errorCodes": []
     "errors": []
     "info": []
     "infoCodes": []
     "messageCodes": []
     "success": true
     "warningCodes": []
     "warnings": []
 }
}
```

---

### 4 Отримання параметрів з API НП

**get** `/ttns/param`

<p>Отримання параметрів з API НП<br><code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **param** `String` **_(обов'язково)_** - <p>Параметр для пошуку.</p> <ul>     <li><i>area</i> - Область</li>     <li><i>city</i> - Місто</li>     <li><i>warehouse</i> - Відділення <code>(необхідно заповнити параметр ref)</code></li>     <li><i>street</i> - Вулиця <code>(необхідно заповнити параметр ref)</code></li> </ul>
- **search** `String` **_(обов'язково)_** - <p>Підстрока пошуку.</p>
- **ref** `String` _(опціонально)_ - <p>UUID міста. <code>Обов'язкове поле при пошуку 'street' або 'warehouse'</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
  {
     "success":true,
     "content":[
         {
             "Description":"Київ",
             "DescriptionRu":"Киев",
             "Ref":"8d5a980d-391c-11dd-90d9-001a92567626",
             "Delivery1":"1",
             "Delivery2":"1",
             "Delivery3":"1",
             "Delivery4":"1",
             "Delivery5":"1",
             "Delivery6":"1",
             "Delivery7":"0",
             "Area":"71508131-9b87-11de-822f-000c2965ae0e",
             "SettlementType":"563ced10-f210-11e3-8c4a-0050568002cf",
             "IsBranch":"1",
             "PreventEntryNewStreetsUser":null,
             "Conglomerates":[
                 "d4771ed0-4fb7-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac",
                 "f86b75e9-42f4-11e4-91b8-2f592fe1dcac"
             ],
             "CityID":"4",
             "SettlementTypeDescriptionRu":"город",
             "SettlementTypeDescription":"місто",
             "SpecialCashCheck":1,
             "Postomat":1,
             "AreaDescription":"Київська",
             "AreaDescriptionRu":"Киевская"
         }
     ]
 }
```

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content":[
         {
             "SiteKey":"10928",
             "Description":"Відділення №181 (до 30 кг на одне місце): вул. Кирилівська, 64",
             "DescriptionRu":"Отделение №181 (до 30 кг на одно место): ул. Кириловская, 64",
             "ShortAddress":"Київ, Кирилівська, 64",
             "ShortAddressRu":"Киев, Кириловская, 64",
             "Phone":"380800500609",
             "TypeOfWarehouse":"841339c7-591a-42e2-8233-7a0a00f0ed6f",
             "Ref":"16d300ea-8501-11e4-acce-0050568002cf",
             "Number":"181",
             "CityRef":"8d5a980d-391c-11dd-90d9-001a92567626",
             "CityDescription":"Київ",
             "CityDescriptionRu":"Киев",
             "SettlementRef":"e718a680-4b33-11e4-ab6d-005056801329",
             "SettlementDescription":"Київ",
             "SettlementAreaDescription":"Київська",
             "SettlementRegionsDescription":"",
             "SettlementTypeDescription":"місто",
             "Longitude":"30.494373000000000",
             "Latitude":"50.474545000000000",
             "PostFinance":"1",
             "BicycleParking":"0",
             "PaymentAccess":"1",
             "POSTerminal":"0",
             "InternationalShipping":"0",
             "SelfServiceWorkplacesCount":"1",
             "TotalMaxWeightAllowed":"0",
             "PlaceMaxWeightAllowed":"30",
             "Reception":{
                 "Monday":"08:00-21:00",
                 "Tuesday":"08:00-21:00",
                 "Wednesday":"08:00-21:00",
                 "Thursday":"08:00-21:00",
                 "Friday":"08:00-21:00",
                 "Saturday":"09:00-18:00",
                 "Sunday":"-"
             },
             "Delivery":{
                 "Monday":"08:00-18:00",
                 "Tuesday":"08:00-18:00",
                 "Wednesday":"08:00-18:00",
                 "Thursday":"08:00-18:00",
                 "Friday":"08:00-18:00",
                 "Saturday":"09:00-18:00",
                 "Sunday":"11:00-14:50"
             },
             "Schedule":{
                 "Monday":"08:00-21:00",
                 "Tuesday":"08:00-21:00",
                 "Wednesday":"08:00-21:00",
                 "Thursday":"08:00-21:00",
                 "Friday":"08:00-21:00",
                 "Saturday":"09:00-18:00",
                 "Sunday":"11:00-18:00"
             },
             "DistrictCode":"п181",
             "WarehouseStatus":"Working",
             "WarehouseStatusDate":"2018-06-19 00:00:00",
             "CategoryOfWarehouse":"Branch",
             "Direct":""
         }
     ]
 }
```

```json
HTTP/1.1 200 OK
{
     "success":true,
     "content": [
         {
             "Description":"Межигірська",
             "Ref":"c55c9097-4148-11dd-9198-001d60451983",
             "StreetsTypeRef":"Street",
             "StreetsType":"вул."
         },
         {
             "Description":"Межова",
             "Ref":"38f6d482-414c-11dd-9198-001d60451983",
             "StreetsTypeRef":"Street",
             "StreetsType":"вул."
         },
         {
             "Description":"Межова (Жуляни)",
             "Ref":"374b3264-d5fc-11e9-91ff-0025b501a04b",
             "StreetsTypeRef":"Street",
             "StreetsType":"вул."
         }
     ]
 }
```

---

### 3 Отримання даних щодо контактної персони

**get** `/ttns/persons`

<p>Отримання даних щодо контактної персони<br><code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ref** `String` **_(обов'язково)_** - <p>UUID контрагента <code>&quot;9a194f51-91c4-11e9-9937-005056881c6b&quot;</code><br> <i>Значення поля можна отримати з запитів: </i></p> <ul>     <li><a href="#api-Ttn-CommonData">Отримання даних для створення ТТН</a>, поле <b>counterParties.Ref</b></li>     <li><a href="#api-TtnSetting-Setting">Отримання даних про налаштування відправлення</a>, поле <b>conterparty.Ref</b></li> </ul>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
"content": {
     [
         "Description": "Марин Ультра "
         "Email": ""
         "FirstName": "Ультра"
         "LastName": "Марин"
         "MiddleName": null
         "Phones": "380971090521"
         "Ref": "99fdc877-ba8e-11e9-9937-005056881c6b"
     ]
}
"success": true
```

---

### 7 Друк ТТН

**get** `/ttns/ttn-print`

<p>Печать ТТН <br><code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ttnNumbers** `Array` **_(обов'язково)_** - <p>Номера ТТН</p>
- **copies** `Integer` _(опціонально)_ - <p>Кількість копій ТТН в файлі</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл ТТН</p>

---

### 9 Друк маркувань ТТН 85*85 6 шт. А4

**get** `/ttns/ttn-print/stickers`

<p>Друк маркувань ТТН 85*85 аркуші (по дефолту 6 штук) <br><code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ttnNumber** `String` **_(обов'язково)_** - <p>Номер ТТН</p>
- **stickersCount** `Integer` _(опціонально)_ - <p>Кількість стікерів <br> <i>максимально 10, по дефолту 6</i></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл ТТН</p>

---

### 8 Друк маркування ТТН 100 * 100 типу "зебра"

**get** `/ttns/ttn-print/zebra`

<p>Друк маркування ТТН 100 * 100 типу &quot;зебра&quot; <br><code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ttnNumbers** `Array` **_(обов'язково)_** - <p>Номера ТТН</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл ТТН</p>

---

### 5 Дані про одержувача і посилці з замовлення

**get** `/ttns/get-user-info/{orderId}`

<p>Отримання даних про посилку і одержувача з замовлення<br> <code>Відпрацьовує тільки при діючому ключі НП</code><br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **orderId** `Integer` **_(обов'язково)_** - <p>Id замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **name** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **is_warehouse** `Boolean` **_(обов'язково)_** - <p>Ознака, чи відправлення оформлене на відділення, чи на адресу<br> 1 - відділення<br> 0 - адресна доставка</p>
- **city_id** `Integer` **_(обов'язково)_** - <p>ID міста (внутрішній)</p>
- **city_name** `String` **_(обов'язково)_** - <p>Назва міста</p>
- **cityRef** `String` **_(обов'язково)_** - <p>UUID міста в НП<br> <i>*Порожнє для адресної доставки</i></p>
- **warehouseRef** `String` **_(обов'язково)_** - <p>UUID відділення в НП<br> <i>*Порожнє для адресної доставки</i></p>
- **place_number** `String` **_(обов'язково)_** - <p>Номер і адреса відділення<br> <i>*Порожнє для адресної доставки</i></p>
- **payment_method** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **amount** `String` **_(обов'язково)_** - <p>Сума замовлення</p>
- **items** `Object[]` **_(обов'язково)_** - <p>Товари в замовленні</p>
- **items.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **items.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **street** `String` **_(обов'язково)_** - <p>Вулиця одержувача (строка)<br><i>Для заповнення адресної доставки</i></p>
- **region** `String` **_(обов'язково)_** - <p>Регіон одержувача (строка)<br><i>Для заповнення адресної доставки</i></p>
- **area** `String` **_(обов'язково)_** - <p>Область одержувача (строка)<br><i>Для заповнення адресної доставки</i></p>
- **place_house** `String` **_(обов'язково)_** - <p>Будинок одержувача (строка)<br><i>Для заповнення адресної доставки</i></p>
- **place_flat** `String` **_(обов'язково)_** - <p>Квартира одержувача (строка)<br><i>Для заповнення адресної доставки</i></p>
- **isReturnMoneyCost** `Boolean` **_(обов'язково)_** - <p>Ознака, чи включено зворотню доставку коштів</p>
- **delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Нової Пошти</p>
- **delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Нової Пошти</p>
- **delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Нової Пошти</p>
- **delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату для Нової Пошти</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success":true,
 "content":{
     "name":"Тест Тестович",
     "phone":"380999999999",
     "is_warehouse":1,
     "city_id":1,
     "city_name":"Киев",
     "cityRef":"8d5a980d-391c-11dd-90d9-001a92567626",
     "warehouseRef":"7b422fc3-e1b8-11e3-8c4a-0050568002cf",
     "place_number":"Отделение №3, ул. Калачевская, 13",
     "payment_method":"cash",
     "amount":"218.00",
     "items":[
         {
         "id":57518763,
         "name":"Маленькие истории о великих людях. Чарлз Дарвин"
         }
     ],
     "street":"ул. Калачевская",
     "region":"",
     "area":"Київська",
     "place_house":"13",
     "place_flat":"",
     "isReturnMoneyCost": false,
     "delivery_commission_info": {
              "percentage_commission": "1.5",
              "absolute_commission": "15.00",
              "calculated_commission": "20.00"
          }
 }
}
```

---

### 1 Отримання списку ТТН з API НП.

**get** `/ttns/ttn-list`

<p>Отримання списку ТТН з API НП. <br><code>Відпрацьовує тільки при діючому ключі НП</code><br> Всі поля об'єкта ttn з відповіді приходять безпосередньо з API НП<br></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **dateFrom** `String` _(опціонально)_ - <p>Фільтр по даті (3)</p>
- **dateTo** `String` _(опціонально)_ - <p>Фільтр по даті (по)</p>
- **ttn** `String` _(опціонально)_ - <p>Номер ТТН</p>
- **order_id** `Number` _(опціонально)_ - <p>Номер замовлення</p>
- **isBackwardDeliveryMoneyOn** `Number` _(опціонально)_ - <p>Фільтр по ТТН зі зворотньою доставкою коштів</p>
- **page** `Number` _(опціонально)_ - <p>Номер сторінки для пагінації</p>
- **pageSize** `Number` _(опціонально)_ - <p>Кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **ttn_list** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів ЕН від API НП</p>
- **ttn.Ref** `String` **_(обов'язково)_** - <p>Ідентифікатор ЕН в системі НП</p>
- **ttn.DateTime** `String` **_(обов'язково)_** - <p>Фактична дата відправки</p>
- **ttn.PreferredDeliveryDate** `String` **_(обов'язково)_** - <p>Бажана дата доставки</p>
- **ttn.Weight** `String(Number)` **_(обов'язково)_** - <p>Фактична вага</p>
- **ttn.SeatsAmount** `String(Integer)` **_(обов'язково)_** - <p>Кількість місць</p>
- **ttn.IntDocNumber** `String(Number)` **_(обов'язково)_** - <p>Номер інтернет документа (ТТН)</p>
- **ttn.Cost** `String(Number)` **_(обов'язково)_** - <p>Оціночна вартість</p>
- **ttn.CitySender** `String` **_(обов'язково)_** - <p>Ідентифікатор міста відправника (UUID)</p>
- **ttn.CityRecipient** `String` **_(обов'язково)_** - <p>Ідентифікатор міста одержувача (UUID)</p>
- **ttn.SenderAddress** `String` **_(обов'язково)_** - <p>Ідентифікатор адреси відправника (UUID)</p>
- **ttn.RecipientAddress** `String` **_(обов'язково)_** - <p>Ідентифікатор адреси одержувача (UUID)</p>
- **ttn.CostOnSite** `String(Number)` **_(обов'язково)_** - <p>Вартість доставки<br> Пример: <code>&quot;0.00&quot;</code>, <code>&quot;323.80&quot;</code></p>
- **ttn.PayerType** `String` **_(обов'язково)_** - <p>Платник доставки</p>
- **ttn.PaymentMethod** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **ttn.AfterpaymentOnGoodsCost** `String(Number)` **_(обов'язково)_** - <p>Сума за послугою Контроль оплати Приклад: <code>&quot;0.00&quot;</code>, <code>&quot;15.50&quot;</code></p>
- **ttn.PackingNumber** `String` **_(обов'язково)_** - <p>Номер упаковки</p>
- **ttn.RejectionReason** `String` **_(обов'язково)_** - <p>Опис причини неразвозу</p>
- **ttn.DatePayedKeeping** `String` **_(обов'язково)_** - <p>Дата початку платного зберігання</p>
- **ttn.RecipientDateTime** `String` **_(обов'язково)_** - <p>Дата, коли вантаж забрав одержувач</p>
- **ttn.EstimatedDeliveryDate** `String` **_(обов'язково)_** - <p>Орієнтовна дата доставки</p>
- **ttn.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **ttn.LastAmountReceivedCommissionGM** `String(Number)` **_(обов'язково)_** - <p>Комісія за накладений платіж</p>
- **ttn.BackwardDeliveryMoney** `Number` **_(обов'язково)_** - <p>Зворотня доставка коштів в НП</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
         "success": boolean,
         "content": {
             "ttn_list": [
                 {
                     "Ref":"14e52480-89dc-11ea-8513-b88303659df5",
                     "DeletionMark":"0",
                     "DateTime":"2020-04-29 08:41:32",
                     "PreferredDeliveryDate":"0001-01-01 00:00:00",
                     "Weight":"1.00",
                     "SeatsAmount":"1",
                     "IntDocNumber":"20450229737904",
                     "Cost":"12.00",
                     "ServiceType":"WarehouseWarehouse",
                     "Description":"Товары",
                     "CitySender":"88faf8fb-76f7-11e9-898c-005056b24375",
                     "CityRecipient":"8d5a980d-391c-11dd-90d9-001a92567626",
                     "State":"00000000-0000-0000-0000-000000000000",
                     "SenderAddress":"0798063f-7f21-11e9-898c-005056b24375",
                     "RecipientAddress":"7b422fc6-e1b8-11e3-8c4a-0050568002cf",
                     "Sender":"165e993c-7234-11e8-8b24-005056881c6b",
                     "ContactSender":"62990ed3-a488-11e9-9937-005056881c6b",
                     "Recipient":"16650a16-7234-11e8-8b24-005056881c6b",
                     "ContactRecipient":"ad96cc25-89db-11ea-8513-b88303659df5",
                     "CostOnSite":"45.00",
                     "PayerType":"Recipient",
                     "PaymentMethod":"Cash",
                     "AfterpaymentOnGoodsCost":"0.00",
                     "CargoType":"Parcel",
                     "PackingNumber":"",
                     "AdditionalInformation":"",
                     "SendersPhone":"380999999999",
                     "RecipientsPhone":"380999999999",
                     "LoyaltyCard":"ba617a48-7233-11e8-aa3a-0025b501a04b",
                     "Posted":null,
                     "Route":null,
                     "EWNumber":null,
                     "SaturdayDelivery":null,
                     "ExpressWaybill":null,
                     "CarCall":null,
                     "DeliveryDateFrom":null,
                     "Vip":null,
                     "LastModificationDate":null,
                     "ReceiptDate":null,
                     "Redelivery":null,
                     "SaturdayDeliveryString":null,
                     "Note":null,
                     "ThirdPerson":null,
                     "Forwarding":null,
                     "NumberOfFloorsLifting":null,
                     "StatementOfAcceptanceTransferCargoID":null,
                     "StateId":1,
                     "StateName":"Замовлення в обробці",
                     "RecipientFullName":null,
                     "RecipientPost":null,
                     "RecipientDateTime":null,
                     "RejectionReason":null,
                     "OnlineCreditStatus":null,
                     "CitySenderDescription":"Кибинці",
                     "CityRecipientDescription":"Київ",
                     "SenderDescription":"Приватна особа",
                     "RecipientDescription":"Приватна особа",
                     "RecipientContactPhone":"380962157825",
                     "RecipientContactPerson":"Лицо Тестовое ",
                     "SenderContactPerson":"Тестовое Лицо ",
                     "SenderAddressDescription":"Пункт приймання-видачі (до 30 кг): вул. Михайлівська, 145",
                     "RecipientAddressDescription":"Відділення №5: вул. Федорова, 32 (м. Олімпійська)",
                     "Printed":"0",
                     "ChangedDataEW":"0",
                     "EWDateCreated":null,
                     "ScheduledDeliveryDate":null,
                     "EstimatedDeliveryDate":"2020-05-02 15:00:00",
                     "DateLastUpdatedStatus":"2020-04-29 08:41:32",
                     "DateLastPrint":null,
                     "CreateTime":"2020-04-29 08:41:32",
                     "ScanSheetNumber":"",
                     "ScanSheetPrinted":"",
                     "InfoRegClientBarcodes":"1",
                     "StatePayId":"0",
                     "StatePayName":"",
                     "BackwardDeliveryCargoType":"",
                     "BackwardDeliverySum":"",
                     "BackwardDeliveryMoney":0,
                     "BackwardDeliveryDataDocuments":[],
                     "SenderCounterpartyType":"PrivatePerson",
                     "ElevatorRecipient":"0",
                     "RecipientCounterpartyType":"PrivatePerson",
                     "DeliveryByHand":"0",
                     "ForwardingCount":0,
                     "OriginalGeoData":{
                         "RecipientAddressName":"",
                         "RecipientArea":"",
                         "RecipientAreaRegions":"",
                         "RecipientCityName":"",
                         "RecipientFlat":"",
                         "RecipientHouse":""
                     },
                     "OwnershipForm":"",
                     "EDRPOU":"",
                     "RedBoxBarcode":"",
                     "RecipientCityRef":"",
                     "RecipientStreetRef":"",
                     "RecipientWarehouseRef":"",
                     "IsTakeAttorney":"",
                     "SameDayDelivery":"",
                     "TimeInterval":"",
                     "TimeIntervalRef":"",
                     "TimeIntervalString":"",
                     "ExpressPallet":"",
                     "TermExtension":0,
                     "TermExtensionDays":"",
                     "AviaDelivery":0,
                     "DatePayedKeeping":"2020-05-15 15:00:00",
                     "LastAmountReceivedCommissionGM": "123"
                     "order_id": 122332154
                 },
             ]
         }
}
```

---

