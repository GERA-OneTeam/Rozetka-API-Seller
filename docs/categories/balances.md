# Balances

### 5.1 Підтвердження звіту про продані товари

**put** `/reports/approve-report/{id}`

<p>Підтвердження звіту про продані товари</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id звіту.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:**  **_(обов'язково)_** - <p>{&quot;success&quot;:boolean, &quot;content&quot;: {&quot;status&quot;}}</p>
- **status** `String` **_(обов'язково)_** - 

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content"
     {
         "status": "ok"
     }
}
```

---

### 9 Створення інвойсу

**post** `/balances/invoice`

<p>Створення інвойсу</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Body Parameters:**

- **amount** `Number` **_(обов'язково)_** - <p>Сума поповнення. <br>При поповненні балансу задається вручну.</p>
- **balance** `String` **_(обов'язково)_** - <p>Тип поповнення балансу: <br><b>&quot;fromUser&quot;</b> - Роялті <br> <br><b>&quot;ads&quot;</b> - Рекламний баланс <br></p>
- **split** `Boolean` _(опціонально)_ - <p>Розбити поточний рахунок на два рахунки (Так/Ні)<br> Параметр відпрацьовує тільки для типу поповнення <b>fromUser</b></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **InvoiceModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойса</p>
- **InvoiceModel.liqpay_amount** `Number` **_(обов'язково)_** - <p>Сума рахунку</p>
- **InvoiceModel.contract_number** `String` **_(обов'язково)_** - <p>Номер договору з продавцем</p>
- **InvoiceModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **InvoiceModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceModel.type_title** `String` **_(обов'язково)_** - <p>Назва типу рахунку обраною мовою</p>
- **InvoiceModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceModel.is_archive** `boolean` **_(обов'язково)_** - <p>Архівний (так/ні)</p>
- **InvoiceModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceStatuses">Статус рахунку</a></p>
- **InvoiceModel.payment_service_bill_id** `Integer` **_(обов'язково)_** - <p>Зовнішній Id інвойса</p>
- **InvoiceModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для сплати інвойса</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 56546,
        "contract_number": "556/4109",
        "number": "МП-00629122",
        "filename": "МП-00629122_4109_BILL5_0_2019-10-31.pdf",
        "date_of_invoice": "2019-10-31 12:13:25",
        "type": "BILL5",
        "amount": 1.99,
        "status": 2,
        "liqpay_amount": null
    }
}
```

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 376146,
        "contract_number": "12/165",
        "number": "МП-00000149",
        "filename": "МП-00000149_165_BILL6_3_2020-09-23.pdf",
        "date_of_invoice": "2020-09-23 16:44:30",
        "type": "BILL6",
        "amount": 12,
        "status": 2,
        "liqpay_amount": null,
        "is_archive": null
    }
}
```

---

### 9 Створення інвойсу

**post** `/balances/invoice`

<p>Створення інвойсу</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **amount** `Integer` **_(обов'язково)_** - <p>Сума поповнення. <br>При поповненні балансу задається вручну.</p>
- **balance** `String` **_(обов'язково)_** - <p>Тип поповнення балансу: <br><b>&quot;fromUser&quot;</b> - Роялті <br> <br><b>&quot;ads&quot;</b> - Рекламний баланс <br></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **InvoiceModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойса</p>
- **InvoiceModel.liqpay_amount** `Number` **_(обов'язково)_** - <p>Сума рахунку</p>
- **InvoiceModel.contract_number** `String` **_(обов'язково)_** - <p>Номер договору з продавцем</p>
- **InvoiceModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **InvoiceModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceModel.type_title** `String` **_(обов'язково)_** - <p>Назва типу рахунку обраною мовою</p>
- **InvoiceModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceModel.is_archive** `boolean` **_(обов'язково)_** - <p>Архівний (так/ні)</p>
- **InvoiceModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceStatuses">Статус рахунку</a></p>
- **InvoiceModel.payment_service_bill_id** `Integer` **_(обов'язково)_** - <p>Зовнішній Id інвойса</p>
- **InvoiceModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для сплати інвойса</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 56546,
        "contract_number": "556/4109",
        "number": "МП-00629122",
        "filename": "МП-00629122_4109_BILL5_0_2019-10-31.pdf",
        "date_of_invoice": "2019-10-31 12:13:25",
        "type": "BILL5",
        "amount": 1,
        "status": 2,
        "liqpay_amount": null
    }
}
```

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "id": 376146,
        "contract_number": "12/165",
        "number": "МП-00000149",
        "filename": "МП-00000149_165_BILL6_3_2020-09-23.pdf",
        "date_of_invoice": "2020-09-23 16:44:30",
        "type": "BILL6",
        "amount": 12,
        "status": 2,
        "liqpay_amount": null,
        "is_archive": null
    }
}
```

---

### 5.3 Несхвалення звіту про продані товари

**put** `/reports/disapprove-report/{id}`

<p>Несхвалення звіту про продані товари. <b><a href="#api-Balances-SaveDisapproveForm" class="nav-list-item">Завантаження файлу і додавання коментаря</a></b></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id звіту.</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:**  **_(обов'язково)_** - <p>{&quot;success&quot;:boolean, &quot;content&quot;: {&quot;status&quot;}}</p>
- **status** `String` **_(обов'язково)_** - 

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content"
     {
         "status": "ok"
     }
}
```

---

### 5.4 Несхвалення звіту про продані товари та завантаження файлу

**post** `/reports/disapprove/{id}`

<p>Завантаження xls файлу, додавання коментаря і зміна статусу звіту</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `string` **_(обов'язково)_** - <p>ID репорта</p>

**Request Body Parameters:**

- **cancelled_comment** `string` **_(обов'язково)_** - <p>Текст коментаря</p>
- **files** `File` **_(обов'язково)_** - <p>Файл документа</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>multipart/form-data</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "status": true
}
```

---

### 7.2 Рекламний бюджет продавця

**get** `/balances/balance-ads`

<p>Поточний рекламний бюджет продавця</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": {
        "balance": 52000.02,
    }
}
```

---

### 10 Поточний баланс (остання транзакція)

**get** `/v1/balances/current`

<p>Поточний баланс магазину</p>

**Версія:** 1.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:**  **_(обов'язково)_** - <p>{&quot;success&quot;:boolean, &quot;content&quot;: CurrentBalanceModel}</p>
- **balance** `String` **_(обов'язково)_** - <p>Поточний баланс підготований (баланс + сіра зона)</p>
- **current_balance** `String` **_(обов'язково)_** - <p>Поточний баланс</p>
- **sum_in_gray** `String` **_(обов'язково)_** - <p>Сіра зона</p>
- **platform_balance** `String` **_(обов'язково)_** - <p>Баланс платформи</p>
- **tm_balance** `String` **_(обов'язково)_** - <p>Баланс торгової марки</p>
- **platform_gray** `String` **_(обов'язково)_** - <p>Сіра зона балансу платформи</p>
- **tm_gray** `String` **_(обов'язково)_** - <p>Сіра зона балансу торгової марки</p>
- **paid_month** `Date` **_(обов'язково)_** - <p>Дата, до якої працює підписка</p>
- **count_days_to_lock** `Integer` **_(обов'язково)_** - <p>Кількість днів до блокування</p>
- **subscription_balance** `String` **_(обов'язково)_** - <p>Баланс підписки</p>
- **gmv_not_earned_while_blocked_60_days** `Number` **_(обов'язково)_** - <p>Орієнтовний (розрахований на даних з попереднього періода) недоотриманий дохід магазина за період блокування</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
  "success": true,
  "content":{
    "balance": "12986.69",
    "current_balance": "5102.54",
    "sum_in_gray": "7884.15",
    "tm_gray":"7884.15",
    "tm_balance":"5102.54",
    "platform_balance": "0.00",
    "platform_gray": "0.00",
    "paid_month": "2021-12-1",
    "count_days_to_lock": null,
    "subscription_balance": "780.00",
    "gmv_not_earned_while_blocked_60_days": null
  }
}
```

---

### 7.1 Поточний баланс (остання транзакція)

**get** `/balances/balance`

<p>Поточний баланс магазину<br><i>По факту - дані про останню транзакцію і поточний стан рахунку</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:**  **_(обов'язково)_** - <p>{&quot;success&quot;:boolean, &quot;content&quot;: BillingLogUserBalanceModel}</p>
- **BillingLogUserBalance** `Object` **_(обов'язково)_** - <p>BillingLogUserBalanceModel</p>
- **BillingLogUserBalance.id** `Integer` **_(обов'язково)_** - <p>ID запису, <i>Unique</i></p>
- **BillingLogUserBalance.logId** `Integer` **_(обов'язково)_** - <p>ID в системі Billing</p>
- **BillingLogUserBalance.orderId** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **BillingLogUserBalance.productId** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **BillingLogUserBalance.purchase_id** `Number` **_(обов'язково)_** - <p>ID покупки</p>
- **BillingLogUserBalance.operationType** `Integer` **_(обов'язково)_** - <p><a href="#api-Balances-GetBalanceOperationTypes">Тип операції</a></p>
- **BillingLogUserBalance.price** `Number` **_(обов'язково)_** - <p>Ціна за одиницю</p>
- **BillingLogUserBalance.quantity** `Integer` **_(обов'язково)_** - <p>Кількість</p>
- **BillingLogUserBalance.cost** `Number` **_(обов'язково)_** - <p>Ціна (price*quantity)</p>
- **BillingLogUserBalance.sumInGrayChanged** `Number` **_(обов'язково)_** - <p>Зміна сірої зони</p>
- **BillingLogUserBalance.balance** `Number` **_(обов'язково)_** - <p>Загальний баланс</p>
- **BillingLogUserBalance.debit** `Number` **_(обов'язково)_** - <p>Дебет</p>
- **BillingLogUserBalance.tm_debit** `Number` **_(обов'язково)_** - <p>Дебет торгової марки</p>
- **BillingLogUserBalance.platform_debit** `Number` **_(обов'язково)_** - <p>Дебет платформи</p>
- **BillingLogUserBalance.debit_nds_amount** `Number` **_(обов'язково)_** - <p>Сума ПДВ</p>
- **BillingLogUserBalance.credit** `Number` **_(обов'язково)_** - <p>Кредит</p>
- **BillingLogUserBalance.tm_credit** `Number` **_(обов'язково)_** - <p>Кредит торгової марки</p>
- **BillingLogUserBalance.platform_credit** `Number` **_(обов'язково)_** - <p>Кредит платформи</p>
- **BillingLogUserBalance.credit_nds_amount** `Number` **_(обов'язково)_** - <p>Сума ПДВ</p>
- **BillingLogUserBalance.currentBalance** `Number` **_(обов'язково)_** - <p>Поточний баланс</p>
- **BillingLogUserBalance.balanceChanged** `Number` **_(обов'язково)_** - <p>Зміна балансу</p>
- **BillingLogUserBalance.subscription_balance** `Number` **_(обов'язково)_** - <p>Subscription_balance</p>
- **BillingLogUserBalance.subscription_balance_changed** `Number` **_(обов'язково)_** - <p>Subscription_balance_changed</p>
- **BillingLogUserBalance.correctionNumber** `Integer` **_(обов'язково)_** - <p>Номер коректування</p>
- **BillingLogUserBalance.platform_balance** `Number` **_(обов'язково)_** - <p>Баланс платформи</p>
- **BillingLogUserBalance.platform_balance_changed** `Number` **_(обов'язково)_** - <p>Зміна балансу платформи</p>
- **BillingLogUserBalance.sum_in_gray** `Number` **_(обов'язково)_** - <p>Сіра зона</p>
- **BillingLogUserBalance.tm_gray** `Number` **_(обов'язково)_** - <p>Сіра зона балансу торгової марки</p>
- **BillingLogUserBalance.platform_gray** `Number` **_(обов'язково)_** - <p>Сіра зона балансу поатформи</p>
- **BillingLogUserBalance.platform_gray_changed** `Number` **_(обов'язково)_** - <p>Зміна сірої зони балансу платформи</p>
- **BillingLogUserBalance.createdAt** `DateTime` **_(обов'язково)_** - <p>Дата створення</p>
- **BillingLogUserBalance.transaction_ts** `DateTime` **_(обов'язково)_** - <p>Дата транзакції</p>
- **BillingLogUserBalance.paidMonth** `String` **_(обов'язково)_** - <p>Місяць, по який сплачено доступ до платформи</p>
- **BillingLogUserBalance.subscriptionStatusID** `Integer` **_(обов'язково)_** - <p>Статус підписки</p>
- **BillingLogUserBalance.countDaysToLock** `Number` **_(обов'язково)_** - <p>Кількість днів до блокування магазину</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": {
        "id": 676828,
        "logId": 530937,
        "orderId": 109445469,
        "productId": 11867836,
        "purchase_id": 109445469,
        "operationType": 1,
        "price": "608.00",
        "quantity": 1,
        "cost": "608.00",
        "sumInGrayChanged": "15.20",
        "sum_in_gray": 1914.06,
        "currentBalance": "259.82",
        "balanceChanged": "0.00",
        "subscription_balance": "0.00",
        "subscription_balance_changed": "0.00",
        "correctionNumber": 0
        "createdAt": "2017-10-11 13:29:34",
        "transaction_ts": "2017-10-11 13:29:34",
    }
}
```

```json
 HTTP/1.1 200 OK
{
    "success":true,
    "content": {
        "id": 676828,
        "logId": 530937,
        "orderId": 109445469,
        "productId": 11867836,
        "purchase_id": 109445469,
        "operationType": 1,
        "price": "608.00",
        "quantity": 1,
        "cost": "608.00",
        "sumInGrayChanged": "15.20",
        "sum_in_gray": 1914.06,
        "currentBalance": "259.82",
        "balanceChanged": "0.00",
        "subscription_balance": "0.00",
        "subscription_balance_changed": "0.00",
        "correctionNumber": 0
        "createdAt": "2017-10-11 13:29:34",
        "transaction_ts": "2017-10-11 13:29:34",
        "paidMonth": "2020-09-1",
        "subscriptionStatusID": 0,
        "countDaysToLock": null
    }
}
```

---

### 3 Типи транзакцій

**get** `/balances/types`

<p>Список типів транзакцій</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{&quot;success&quot;: boolean,</br> &quot;content&quot;: {&quot;operationTypes&quot; : [],&quot;operationTypesObject&quot;: {}}}</p>
- **operationTypes** `String[]` **_(обов'язково)_** - 
- **operationTypesObject** `Object[]` **_(обов'язково)_** - <p>OperationTypesByLang[]</p>
- **OperationTypesList.1** `Number` **_(обов'язково)_** - <p>Резервування суми по зробленому замовленню</p>
- **OperationTypesList.2** `Number` **_(обов'язково)_** - <p>Комісія за продаж</p>
- **OperationTypesList.3** `Number` **_(обов'язково)_** - <p>Зняття резерву за невиконане замовлення</p>
- **OperationTypesList.4** `Number` **_(обов'язково)_** - <p>Поповнення рахунку роялті</p>
- **OperationTypesList.5** `Number` **_(обов'язково)_** - <p>Списання абонплати</p>
- **OperationTypesList.6** `Number` **_(обов'язково)_** - <p>Коректування балансу</p>
- **OperationTypesList.7** `Number` **_(обов'язково)_** - <p>Коректування замовлення</p>
- **OperationTypesList.8** `Number` **_(обов'язково)_** - <p>Зміна кількості в замовленні</p>
- **OperationTypesList.9** `Number` **_(обов'язково)_** - <p>Видалення товару із замовлення, повернення резерву за скасований товар</p>
- **OperationTypesList.10** `Number` **_(обов'язково)_** - <p>Резервування суми по доданому товару</p>
- **OperationTypesList.11** `Number` **_(обов'язково)_** - <p>Коректування рахунка абонплати (проведене вручну)</p>
- **OperationTypesList.12** `Number` **_(обов'язково)_** - <p>Поповнення рахунку за доступ до платформи</p>
- **OperationTypesList.13** `Number` **_(обов'язково)_** - <p>Автокоректування замовлення</p>
- **OperationTypesList.14** `Number` **_(обов'язково)_** - <p>Повернення замовлення</p>
- **OperationTypesList.15** `Number` **_(обов'язково)_** - <p>Коректування роялті по замовленню</p>
- **OperationTypesList.16** `Number` **_(обов'язково)_** - <p>Коректування балансу роялті</p>
- **OperationTypesList.17** `Number` **_(обов'язково)_** - <p>Коректування роялті по замовленню за завершений звітний період</p>
- **OperationTypesList.18** `Number` **_(обов'язково)_** - <p>Розподілення гарантійного платежу</p>
- **OperationTypesByLang** `Object` **_(обов'язково)_** - <p>OperationTypesModel</p>
- **OperationTypes.id** `Integer` **_(обов'язково)_** - <p>ID типу транзакції</p>
- **OperationTypes.name** `String` **_(обов'язково)_** - <p>Ім'я типу транзакції (текстовий ідентифікатор)</p>
- **OperationTypes.title** `String` **_(обов'язково)_** - <p>Назва типу транзакції в залежності від мови, що передається в хедерах (ru, uk, en)</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "operationTypes": {
            "1": "sum_rezerved",
            "2": "sale_commiss",
            "3": "sum_unrezerved",
            "4": "royalty",
            "5": "acsess_pay",
            ....
        },
        "operationTypesObject": {
           "1" : {
               "id": 1,
               "name": "sum_rezerved",
               "title": "Резервирование суммы по сделанному заказу",
           },
           "2" : {
               "id": 2,
               "name": "sale_commiss",
               "title": "Комиссия за продажу",
           }, ....
        }
    }
}
```

---

### 3 Типи транзакцій

**get** `/balances/types`

<p>Operation types</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **operationTypes** `Number[]` **_(обов'язково)_** - 
- **OperationTypesList.1** `Number` **_(обов'язково)_** - <p>Резервування суми по зробленому замовленню</p>
- **OperationTypesList.2** `Number` **_(обов'язково)_** - <p>Комісія за продаж</p>
- **OperationTypesList.3** `Number` **_(обов'язково)_** - <p>Зняття резерву за невиконане замовлення</p>
- **OperationTypesList.4** `Number` **_(обов'язково)_** - <p>Поповнення рахунку роялті</p>
- **OperationTypesList.5** `Number` **_(обов'язково)_** - <p>Списання абонплати</p>
- **OperationTypesList.6** `Number` **_(обов'язково)_** - <p>Коректування балансу</p>
- **OperationTypesList.7** `Number` **_(обов'язково)_** - <p>Коректування замовлення</p>
- **OperationTypesList.8** `Number` **_(обов'язково)_** - <p>Зміна кількості в замовленні</p>
- **OperationTypesList.9** `Number` **_(обов'язково)_** - <p>Видалення товару із замовлення, повернення резерву за скасований товар</p>
- **OperationTypesList.10** `Number` **_(обов'язково)_** - <p>Резервування суми по доданому товару</p>
- **OperationTypesList.11** `Number` **_(обов'язково)_** - <p>Коректування рахунка абонплати (проведене вручну)</p>
- **OperationTypesList.12** `Number` **_(обов'язково)_** - <p>Поповнення рахунку за доступ до платформи</p>
- **OperationTypesList.13** `Number` **_(обов'язково)_** - <p>Автокоректування замовлення</p>
- **OperationTypesList.14** `Number` **_(обов'язково)_** - <p>Повернення замовлення</p>
- **OperationTypesList.15** `Number` **_(обов'язково)_** - <p>Коректування роялті по замовленню</p>
- **OperationTypesList.16** `Number` **_(обов'язково)_** - <p>Коректування балансу роялті</p>
- **OperationTypesList.17** `Number` **_(обов'язково)_** - <p>Коректування роялті по замовленню за завершений звітний період</p>
- **OperationTypesList.18** `Number` **_(обов'язково)_** - <p>Розподілення гарантійного платежу</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "operationTypes": {
            "1": "sum_rezerved",
            "2": "sale_commiss",
            "3": "sum_unrezerved",
            "4": "royalty",
            "5": "acsess_pay",
            "6": "balance_corr",
            "7": "order_corr",
            "8": "product_quantity_update",
            "9": "product_remove",
            "10": "product_add",
            "11": "correct_subscription",
            "12": "from1c_to_subscription",
            "13": "auto_correction",
            "14": "return_order",
            "15": "from_admin_order",
            "16": "from_admin_account",
        }
    }
}
```

---

### 8 Список транзакцій магазину

**get** `/balances/search`

<p>Transactions (Search)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **orderId** `Integer` _(опціонально)_ - <p>Фільтр по id замовлення</p>
- **productId** `Integer` _(опціонально)_ - <p>Фільтр по id товару</p>
- **operationType** `Integer` _(опціонально)_ - <p>Фільтр по типу операци. Кілька типів можуть бути об'єднані комою <a href="#api-Balances-GetBalanceOperationTypes">Опис</a></p>
- **dateFrom** `String` _(опціонально)_ - <p>Фільтр за датою (з)</p>
- **dateTo** `String` _(опціонально)_ - <p>Фільтр за датою (до)</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість зиписів на сторінці</p>
- **sort** `String` _(опціонально)_ - <p>Сортування</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **billingLogUserBalances** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів BillingLogUserBalance</p>
- **BillingLogUserBalance** `Object` **_(обов'язково)_** - <p>BillingLogUserBalanceModel</p>
- **BillingLogUserBalance.id** `Integer` **_(обов'язково)_** - <p>ID запису, <i>Unique</i></p>
- **BillingLogUserBalance.logId** `Integer` **_(обов'язково)_** - <p>ID в системі Billing</p>
- **BillingLogUserBalance.orderId** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **BillingLogUserBalance.productId** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **BillingLogUserBalance.purchase_id** `Number` **_(обов'язково)_** - <p>ID покупки</p>
- **BillingLogUserBalance.operationType** `Integer` **_(обов'язково)_** - <p><a href="#api-Balances-GetBalanceOperationTypes">Тип операції</a></p>
- **BillingLogUserBalance.price** `Number` **_(обов'язково)_** - <p>Ціна за одиницю</p>
- **BillingLogUserBalance.quantity** `Integer` **_(обов'язково)_** - <p>Кількість</p>
- **BillingLogUserBalance.cost** `Number` **_(обов'язково)_** - <p>Ціна (price*quantity)</p>
- **BillingLogUserBalance.sumInGrayChanged** `Number` **_(обов'язково)_** - <p>Зміна сірої зони</p>
- **BillingLogUserBalance.balance** `Number` **_(обов'язково)_** - <p>Загальний баланс</p>
- **BillingLogUserBalance.debit** `Number` **_(обов'язково)_** - <p>Дебет</p>
- **BillingLogUserBalance.tm_debit** `Number` **_(обов'язково)_** - <p>Дебет торгової марки</p>
- **BillingLogUserBalance.platform_debit** `Number` **_(обов'язково)_** - <p>Дебет платформи</p>
- **BillingLogUserBalance.debit_nds_amount** `Number` **_(обов'язково)_** - <p>Сума ПДВ</p>
- **BillingLogUserBalance.credit** `Number` **_(обов'язково)_** - <p>Кредит</p>
- **BillingLogUserBalance.tm_credit** `Number` **_(обов'язково)_** - <p>Кредит торгової марки</p>
- **BillingLogUserBalance.platform_credit** `Number` **_(обов'язково)_** - <p>Кредит платформи</p>
- **BillingLogUserBalance.credit_nds_amount** `Number` **_(обов'язково)_** - <p>Сума ПДВ</p>
- **BillingLogUserBalance.currentBalance** `Number` **_(обов'язково)_** - <p>Поточний баланс</p>
- **BillingLogUserBalance.balanceChanged** `Number` **_(обов'язково)_** - <p>Зміна балансу</p>
- **BillingLogUserBalance.subscription_balance** `Number` **_(обов'язково)_** - <p>Subscription_balance</p>
- **BillingLogUserBalance.subscription_balance_changed** `Number` **_(обов'язково)_** - <p>Subscription_balance_changed</p>
- **BillingLogUserBalance.correctionNumber** `Integer` **_(обов'язково)_** - <p>Номер коректування</p>
- **BillingLogUserBalance.platform_balance** `Number` **_(обов'язково)_** - <p>Баланс платформи</p>
- **BillingLogUserBalance.platform_balance_changed** `Number` **_(обов'язково)_** - <p>Зміна балансу платформи</p>
- **BillingLogUserBalance.sum_in_gray** `Number` **_(обов'язково)_** - <p>Сіра зона</p>
- **BillingLogUserBalance.tm_gray** `Number` **_(обов'язково)_** - <p>Сіра зона балансу торгової марки</p>
- **BillingLogUserBalance.platform_gray** `Number` **_(обов'язково)_** - <p>Сіра зона балансу поатформи</p>
- **BillingLogUserBalance.platform_gray_changed** `Number` **_(обов'язково)_** - <p>Зміна сірої зони балансу платформи</p>
- **BillingLogUserBalance.createdAt** `DateTime` **_(обов'язково)_** - <p>Дата створення</p>
- **BillingLogUserBalance.transaction_ts** `DateTime` **_(обов'язково)_** - <p>Дата транзакції</p>
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
 "billingLogUserBalances": [
       {
           "id": 2869005,
           "logId": 2063419,
           "orderId": 158279336,
           "productId": 6666117,
           "purchase_id": null,
           "operationType": 1,
           "price": "210.00",
           "quantity": 1,
           "cost": "210.00",
           "sumInGrayChanged": "31.50",
           "sum_in_gray": 7884.15,
           "tm_gray": 7884.15,
           "platform_gray": 0,
           "balance": "12986.69\n(-7884.15)",
           "currentBalance": 5102.54,
           "tm_balance": "5102.54",
           "platform_balance": 0,
           "balanceChanged": "0.00",
           "subscription_balance": "780.00",
           "subscription_balance_changed": "0.00",
           "debit": 34.5,
           "tm_debit": 31.5,
           "platform_debit": "00.00",
           "debit_nds_amount": "00.00",
           "credit": 3,
           "tm_credit": "00.00",
           "platform_credit": "00.00",
           "credit_nds_amount": "00.00",
           "correctionNumber": 0,
           "createdAt": "2018-06-18 00:27:55",
           "transaction_ts": "2018-06-18 00:27:55",
           "platform_balance_changed": 0,
           "platform_gray_changed": 0
       }
 ],
 "_meta": {
      "totalCount": 15540,
      "pageCount": 777,
      "currentPage": 1,
      "perPage": 20
   }
}}
```

---

### 8.1 Експорт в XLS

**get** `/balances/export`

<p>Експорт в Excel (використовуючи параметри фільтра за транзакціями)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **orderId** `Integer` _(опціонально)_ - <p>Фільтр по id замовлення</p>
- **productId** `Integer` _(опціонально)_ - <p>Фільтр по id товару</p>
- **operationTypes** `Integer` _(опціонально)_ - <p>Фільтр по типу операції. Кілька типів можуть бути об'єднані комою <a href="#api-Balances-GetBalanceOperationTypes">Опис</a></p>
- **dateFrom** `String` _(опціонально)_ - <p>Фільтр за датою (з)</p>
- **dateTo** `String` _(опціонально)_ - <p>Фільтр за датою (до)</p>
- **file_type** `String` _(опціонально)_ - <p>Тип файлу (default - звичайна версія, expanded - розширена версія)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл історії транзакцій магазину (.xlsx)</p>

---

### 8.2 Фільтри для пошуку транзакцій магазину

**get** `/balances/search-data`

<p>Фільтри для пошуку транзакцій магазину</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { operationTypes: operationTypes[], operationTypesLogistic: operationTypesLogistic[], } }</p>
- **operationTypes** `Object` **_(обов'язково)_** - <p>Список типів операцій</p>
- **operationTypesLogistic** `Object` **_(обов'язково)_** - <p>Список типів операцій логістики</p>

#### Приклад відповіді

```json
  "success": true,
"content": {
        "operationTypes": {
            "1": {
                "id": 1,
                "name": "sum_rezerved",
                "title": "Резервування суми по зробленому замовленню"
            },
            "2": {
                "id": 2,
                "name": "sale_commiss",
                "title": "Комісія за продаж"
            },
            "3": {
                "id": 3,
                "name": "sum_unrezerved",
                "title": "Зняття резерву за невиконане замовлення"
            },
            "4": {
                "id": 4,
                "name": "royalty",
                "title": "Поповнення рахунку роялті"
            },
            "5": {
                "id": 5,
                "name": "acsess_pay",
                "title": "Списання абонплати"
            },
            "6": {
                "id": 6,
                "name": "balance_corr",
                "title": "Коригування балансу"
            },
            "8": {
                "id": 8,
                "name": "product_quantity_update",
                "title": "Правка кількості товару в замовленні"
            },
            "9": {
                "id": 9,
                "name": "product_remove",
                "title": "Повернення резерву за скасований товар"
            },
            "10": {
                "id": 10,
                "name": "product_add",
                "title": "Резервування суми за доданий товар"
            },
            "11": {
                "id": 11,
                "name": "correct_subscription",
                "title": "Коригування рахунку абонплати"
            },
            "14": {
                "id": 14,
                "name": "return_order",
                "title": "Повернення замовлення"
            },
            "15": {
                "id": 15,
                "name": "from_admin_order",
                "title": "Коригування роялті по замовленню"
            },
            "16": {
                "id": 16,
                "name": "from_admin_account",
                "title": "Коригування балансу роялті"
            },
            "17": {
                "id": 17,
                "name": "from_admin_order_act",
                "title": "Коригування роялті по замовленню за завершений звітний період"
            }
        },
        "operationTypesLogistic": {
            "33": {
                "id": 33,
                "name": "replenishmentLogisticMP",
                "title": "Поповнення рахунку МП логістика"
            },
            "35": {
                "id": 35,
                "name": "adjustmentLogisticMPUp",
                "title": "Коригування рахунку МП логістика +"
            },
            "34": {
                "id": 34,
                "name": "withdrawalLogisticMP",
                "title": "Організація видачі відправлень"
            },
            "36": {
                "id": 36,
                "name": "adjustmentLogisticMPDown",
                "title": "Коригування рахунку МП логістика -"
            },
            "37": {
                "id": 37,
                "name": "fulfillmentGoodsAcceptance",
                "title": "Прийом товарів на склад"
            },
            "38": {
                "id": 38,
                "name": "fulfillmentGoodsReturn",
                "title": "Повернення товарів зі складу"
            },
            "39": {
                "id": 39,
                "name": "fulfillmentOrderPickup",
                "title": "Видача замовлення"
            },
            "40": {
                "id": 40,
                "name": "fulfillmentOrderShipment",
                "title": "Відвантаження замовленя"
            },
            "41": {
                "id": 41,
                "name": "fulfillmentOrderSave",
                "title": "Зберігання товарів на складі"
            }
        }
    }
}
```

---

### 7.1 Баланси

**get** `/balances/total`

<p>Баланс і сіра зона<br> Оновлення даних відбувається раз на годину, через що вони можуть не відповідати даним за запитом <a href="#api-Balances-GetBalanceInfo">Поточний баланс</a></p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **totalBalance** `Object[]` **_(обов'язково)_** - 
- **totalBalance.balance** `Number` **_(обов'язково)_** - <p>основний баланс</p>
- **totalBalance.sumInGray** `Number` **_(обов'язково)_** - <p>сіра зона</p>
- **totalBalance.subscription_balance** `Number` **_(обов'язково)_** - <p>баланс абонплати (за доступ до платформи)</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "totalBalance": [
            {
                "balance": "2409.46",
                "sumInGray": "1753.56"
                "subscriptionBalance": "240.00"
            }
        ]
    }
}
```

---

### 1 Файл рахунку

**get** `/invoices/download-invoice/{id}`

<p>Invoice File</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID рахунка</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл рахунку</p>

---

### 1.1 Файл рахунку

**get** `/invoices/invoice-file-tmp-url/{id}`

<p>Invoice File Tmp</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID рахунка</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `String` **_(обов'язково)_** - <p>Директорія до файлу рахунка</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": {
  "file": "http://market.rest-app.dev/tmp/invoices/0997b85d1a0d31c7a8fd0c007dde0c24_МП-00007334_39_BILL4_fromUser_2017-08-08.pdf"
}}
```

---

### 2 Рахунки на оплату

**get** `/invoices/search`

<p>Invoices</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>параметр сортування</p>

**Request Url Parameters:**

- **sumFrom** `Integer` _(опціонально)_ - <p>фільтр по сумі рахунку (від)</p>
- **sumTo** `Integer` _(опціонально)_ - <p>фільтр по сумі рахунку (до)</p>
- **number** `String` _(опціонально)_ - <p>фільтр по номеру рахунку</p>
- **dateFrom** `String` _(опціонально)_ - <p>фільтр по даті (з)</p>
- **dateTo** `String` _(опціонально)_ - <p>фільтр по даті (до)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **invoices** `Object[]` **_(обов'язково)_** - 
- **InvoiceModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойса</p>
- **InvoiceModel.liqpay_amount** `Number` **_(обов'язково)_** - <p>Сума рахунку</p>
- **InvoiceModel.contract_number** `String` **_(обов'язково)_** - <p>Номер договору з продавцем</p>
- **InvoiceModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **InvoiceModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceModel.type_title** `String` **_(обов'язково)_** - <p>Назва типу рахунку обраною мовою</p>
- **InvoiceModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceModel.is_archive** `boolean` **_(обов'язково)_** - <p>Архівний (так/ні)</p>
- **InvoiceModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceStatuses">Статус рахунку</a></p>
- **InvoiceModel.payment_service_bill_id** `Integer` **_(обов'язково)_** - <p>Зовнішній Id інвойса</p>
- **InvoiceModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для сплати інвойса</p>
- **InvoiceModel.liq_pay** `json` **_(обов'язково)_** - <p><i>ExtraField</i> Дані по LiqPay <a href="https://www.liqpay.ua/documentation/uk/data_signature">детальніше</a><br> Об'єкт вигляду {data:&quot;value&quot;, signature: &quot;value&quot;, &quot;action_url&quot;: &quot;value&quot;...}<br> <b>data</b> - Зашифрований масив даних для відправки в LiqPay. (строка)<br> <b>signature</b> - Унікальне значення запиту для відправки в LiqPay (строка)<br> <b>action_url</b> - Урл для відправки форми на LiqPay<br> <i>Може бути null якщо статус 3 або 5</i></p>
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
  "invoices": [
     {
         "id": 6111,
         "contract_number": "11/39",
         "number": "МП-00007334",
         "filename": "МП-00007334_39_BILL4_fromUser_2017-08-08.pdf",
         "date_of_invoice": "2017-08-08 10:37:53",
         "type": "BILL5",
         "type_title": "Роялті",
         "status": 4,
         "liqpay_amount": 5000.00,
            "is_archive": false,
            "payment_service_bill_id": null,
            "payment_url": "",
            "liq_pay": {
                "data": "eyJ2ZXJza......ZVwvaW52b2ljZXMifQ==",
                "signature": "2/6+9zp......n+hCxw=",
                "action_url": "https://www.liqpay.ua/api/3/checkout"
            },
            "evo_payment_allowed": false
     }
 ],
 "_meta":
     {
         "totalCount": 31,
         "pageCount": 2,
         "currentPage": 1,
         "perPage": 20
     }
}}
```

---

### 2 Рахунки на оплату

**get** `/invoices/search`

<p>Invoices</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>параметр сортування</p>

**Request Url Parameters:**

- **sumFrom** `Integer` _(опціонально)_ - <p>фільтр по сумі рахунку (від)</p>
- **sumTo** `Integer` _(опціонально)_ - <p>фільтр по сумі рахунку (до)</p>
- **number** `String` _(опціонально)_ - <p>фільтр по номеру рахунку</p>
- **dateFrom** `String` _(опціонально)_ - <p>фільтр по даті (від)</p>
- **dateTo** `String` _(опціонально)_ - <p>фільтр по даті (до)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **invoices** `Object[]` **_(обов'язково)_** - 
- **InvoiceModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойса</p>
- **InvoiceModel.liqpay_amount** `Number` **_(обов'язково)_** - <p>Сума рахунку</p>
- **InvoiceModel.contract_number** `String` **_(обов'язково)_** - <p>Номер договору з продавцем</p>
- **InvoiceModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **InvoiceModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceModel.type_title** `String` **_(обов'язково)_** - <p>Назва типу рахунку обраною мовою</p>
- **InvoiceModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceModel.is_archive** `boolean` **_(обов'язково)_** - <p>Архівний (так/ні)</p>
- **InvoiceModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceStatuses">Статус рахунку</a></p>
- **InvoiceModel.payment_service_bill_id** `Integer` **_(обов'язково)_** - <p>Зовнішній Id інвойса</p>
- **InvoiceModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для сплати інвойса</p>
- **InvoiceModel.liq_pay** `json` **_(обов'язково)_** - <p><i>ExtraField</i> Дані по LiqPay <a href="https://www.liqpay.ua/documentation/uk/data_signature">детальніше</a><br> Об'єкт вигляду {data:&quot;value&quot;, signature: &quot;value&quot;, &quot;action_url&quot;: &quot;value&quot;...}<br> <b>data</b> - Зашифрований масив даних для відправки в LiqPay. (строка)<br> <b>signature</b> - Унікальне значення запиту для відправки в LiqPay (строка)<br> <b>action_url</b> - Урл для відправки форми на LiqPay<br> <i>Може бути null якщо статус 3 або 5</i></p>
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
  "invoices": [
     {
         "id": 6111,
         "contract_number": "11/39",
         "number": "МП-00007334",
         "filename": "МП-00007334_39_BILL4_fromUser_2017-08-08.pdf",
         "date_of_invoice": "2017-08-08 10:37:53",
         "type": "BILL4",
         "amount":"5000.00"
     }
 ],
 "_meta":
     {
         "totalCount": 31,
         "pageCount": 2,
         "currentPage": 1,
         "perPage": 20
     }
}}
```

---

### 2.1 Типи рахунків на оплату

**get** `/invoices/invoice-type-list`

<p>Invoices Types</p>

**Версія:** 0.0.1

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **types** `String[]` **_(обов'язково)_** - <p>Список типів рахунків на оплату</p>
- **types_titles** `Object[]` **_(обов'язково)_** - <p>Типи рахунків на оплату і їх назви</p>
- **types_titles.type** `String` **_(обов'язково)_** - <p>Тип рахунку на оплату</p>
- **types_titles.title** `String` **_(обов'язково)_** - <p>Назва рахунку на оплату на обраній мові</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "types": [
            "BILL5",
            "BILL6",
            "BILL25",
            "BILL30",
            "BILL31",
            "BILL32"
        ],
        "types_titles": [
            {
                "type": "BILL5",
                "title": "Роялті"
            },
            {
                "type": "BILL6",
                "title": "Реклама"
            },
            {
                "type": "BILL25",
                "title": "Компенсація доставки (поштомати)"
            },
            {
                "type": "BILL30",
                "title": "Компенсація за пакування (поштомати)"
            },
            {
                "type": "BILL31",
                "title": "Компенсація доставки (відділення)"
            },
            {
                "type": "BILL32",
                "title": "Компенсація за пакування (відділення)"
            }
        ]
    }
}
```

---

### 6.1 Комісії по товарам

**get** `/items-commissions/search`

**Версія:** 0.0.3

#### Параметри запиту

**Request Url Parameters:**

- **item** `String` _(опціонально)_ - <p>Шуканий товар. Пошук здійснюється по повному або частковому співпадінню по ID товару , або назві від <b>3-х символів</b></p>
- **item_id** `Integer` _(опціонально)_ - <p>ID товару. Повне співпадіння</p>
- **catalog_id** `Integer` _(опціонально)_ - <p>ID категорії. Повне співпадіння</p>
- **price_from** `Float` _(опціонально)_ - <p>Початкове значення для фільтрації за ціною</p>
- **price_to** `Float` _(опціонально)_ - <p>Кінцеве значення для фільтрації за ціною</p>
- **commission_from** `Float` _(опціонально)_ - <p>Початкове значення для фільтрації за відсотком комісії</p>
- **commission_to** `Float` _(опціонально)_ - <p>Кінцеве значення для фільтрації за відсотком комісії</p>
- **commission_sum_from** `Float` _(опціонально)_ - <p>Початкове значення для фільтрації за сумою комісії</p>
- **commission_sum_to** `Float` _(опціонально)_ - <p>Кінцеве значення для фільтрації за сумою комісії</p>
- **item_article** `String` _(опціонально)_ - <p>Артикул товара, від <b>3-х символів</b></p>
- **price_offer_id** `String` _(опціонально)_ - <p>ID товара в прайсі</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість елементів на сторінці<br> мінімальне значення <code>1</code>, максимальне <code>100</code>. Якщо значення менше мінімуму, то повернеться значення за замовчуванням. Якщо більше максимального - максимальне</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування +/- (asc/desc)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

**Response Body Parameters:**

- **commissions** `Object[]` **_(обов'язково)_** - <p>Список комісій по товарам</p>
- **commissions.item_id** `Integer` **_(обов'язково)_** - <p>ID товару (тільки для товарів в sell_status=1, 2, 3, 4, 6, 7)</p>
- **commissions.price_offer_id** `String|null` **_(обов'язково)_** - <p>ID прайсу</p>
- **commissions.item_article** `String` **_(обов'язково)_** - <p>Артикул товару</p>
- **commissions.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **commissions.catalog_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **commissions.catalog_name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
- **commissions.item_price** `Float` **_(обов'язково)_** - <p>Ціна товару</p>
- **commissions.commission** `Float` **_(обов'язково)_** - <p>Відсоток комісії за товар</p>
- **commissions.commission_sum** `Float` **_(обов'язково)_** - <p>Сума комісії за товар в грн.</p>
**Response Meta Fields:**

- **_filters** `Object` **_(обов'язково)_** - <p>Фільтри</p>
- **_filters.labels** `Object` **_(обов'язково)_** - <p>Назви фільтрів</p>
- **_filters.usedFilters** `Object` **_(обов'язково)_** - <p>Фільтри, що було застосовано до запиту</p>
- **_filters.errors** `Object[String[]]` **_(обов'язково)_** - <p>Причини чому деякі фільтри могло бути не застосовано</p>
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
        "commissions": [
            {
                "item_id": 44217792,
                "price_offer_id": null,
                "item_article": "ST-1001",
                "item_name": "Сабвуфер Test-12",
                "catalog_id": 276545,
                "catalog_name": "Автомобільні сабвуфери",
                "item_price": "18000.00",
                "commission": "15.00",
                "commission_sum": "0.00"
            },
            {
                "item_id": 48724158,
                "price_offer_id": null,
                "item_article": "5449000050939",
                "item_name": "Вода солодка 1л пет Спрайт",
                "catalog_id": 4629520,
                "catalog_name": "Автокилимки",
                "item_price": "12.00",
                "commission": "10.00",
                "commission_sum": "0.00"
            },
            {
                "item_id": 274026223,
                "price_offer_id": "679",
                "item_article": null,
                "item_name": "Ban Ban 2",
                "catalog_id": 651392,
                "catalog_name": "Смарт-годинники",
                "item_price": "170000.00",
                "commission": "20.00",
                "commission_sum": "0.00"
            },
            {
                "item_id": 302687888,
                "price_offer_id": "1329721275",
                "item_article": "sprnt-GRP-rw255-029-1-3-1-001",
                "item_name": "Ноутбук Asus-sprnt-GRP-rw255-029-1-3-1-001",
                "catalog_id": 80004,
                "catalog_name": "Ноутбуки",
                "item_price": "0.00",
                "commission": "10.00",
                "commission_sum": "0.00"
            },
            {
                "item_id": 302687889,
                "price_offer_id": "3188589296",
                "item_article": "sprnt-GRP-rw255-029-1-3-1-002",
                "item_name": "Ноутбук Asus-sprnt-GRP-rw255-029-1-3-1-002",
                "catalog_id": 80004,
                "catalog_name": "Ноутбуки",
                "item_price": "0.00",
                "commission": "10.00",
                "commission_sum": "0.00"
            }
            {
                "item_id": 9144594,
                "price_offer_id": "651",
                "item_article": null,
                "item_name": "ROSAVA БЦ-24 185/75 R16C 104/102N",
                "catalog_id": 4330821,
                "catalog_name": "",
                "item_price": "1902.00",
                "commission": "3.00",
                "commission_sum": "0.00"
            },
            {
                "item_id": 9144622,
                "price_offer_id": "2142",
                "item_article": null,
                "item_name": "LASSA TRANSWAY 235/65 R16C 115/113R",
                "catalog_id": 4330821,
                "catalog_name": "",
                "item_price": "16800.00",
                "commission": "3.00",
                "commission_sum": "0.00"
            }
        ],
        "_meta": {
            "totalCount": 7,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 20
        },
        "_filters": {
            "labels": {
                "item": "Товар",
                "item_id": "ID товару",
                "catalog_id": "Категорія",
                "price_from": "Ціна від",
                "price_to": "Ціна до",
                "commission_from": "Комісія від",
                "commission_to": "Комісія до",
                "commission_sum_from": "Комісія від (грн.)",
                   "commission_sum_to": "Комісія до (грн.)"
            },
            "usedFilters": [],
            "errors": [
                "item": [
                     "Значення \"Товар\" повинно містити мінімум 3 символа."
                 ]
            ]
        }
    }
}
```

---

### 7.3 Статус платежу в LiqPay

**get** `/payments/processing-status/{id}`

<p>Отримання даних по статусу оплати з LiqPay</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID рахунку на оплату (payment_invoice_id)<br> <a href="#api-Orders-GetOrderStatusPayment">Отримання статусу оплати замовлення</a></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **public_key** `String` **_(обов'язково)_** - <p>Публічний ключ магазину</p>
- **sender_card_mask2** `String` **_(обов'язково)_** - <p>Карта відправника</p>
- **sender_card_bank** `String` **_(обов'язково)_** - <p>Банк відправника</p>
- **sender_card_type** `String` **_(обов'язково)_** - <p>Тип карти відправника MC/Visa</p>
- **rrn_debit** `String` **_(обов'язково)_** - <p>Унікальний номер транзакції в системі авторизації і розрахунків обслуговуючого банку (Retrieval Reference number)</p>
- **transaction_id** `Integer` **_(обов'язково)_** - <p>ID транзакції в системі LiqPay</p>
- **order_id** `String` **_(обов'язково)_** - <p>Id замовлення + хеш</p>

#### Приклад відповіді

```json
   HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "public_key": "i65273*****",
        "sender_card_mask2": "9999***99",
        "sender_card_bank": "pb",
        "sender_card_type": "mc",
        "rrn_debit": "001399999999",
        "transaction_id": 1129999999,
        "order_id": "1234567_qwerty"
    }
}
```

```json
{
    "public_key": "i65273*****",
    "sender_card_mask2": "9999***99",
    "sender_card_bank": "pb",
    "sender_card_type": "mc",
    "rrn_debit": "001399999999",
    "transaction_id": 1129999999,
    "order_id": "1234567_qwerty"
}
```

---

### 4 Аванс

**get** `/balances/prepayment`

<p>Сума авансу продавця <br><i>(використовується для автоматичного прорахунку суми поповнення рахунку роялті)</i></p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **content** `Number` **_(обов'язково)_** - <p>(prepayment) Сума авансу продавця</p>

#### Приклад відповіді

```json
  HTTP/1.1 200 OK
{
    "success": true,
    "content": 5000
}
```

---

### 5 Файл звіту про продані товари

**get** `/reports/download-report/{id}`

<p>ReportFile</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID рахунку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `File` **_(обов'язково)_** - <p>Файл звіту</p>

---

### 5.2 Файл звіту про продані товари

**get** `/reports/report-file-tmp-url/{id}`

<p>ReportFileTmp</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID рахунку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **file** `String` **_(обов'язково)_** - <p>Директорія до файлу звіту</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
"success": true,
"content": {
  "file": "http://market.rest-app.dev/tmp/reports/2017_07_chitajka_report.xls"
}}
```

---

### 6 Звіти про продані товари

**get** `/reports/search`

<p>Reports</p>

**Версія:** 0.0.1

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>номер сторінки</p>

**Request Url Parameters:**

- **dateFrom** `String` _(опціонально)_ - <p>фільтр по даті (з)</p>
- **dateTo** `String` _(опціонально)_ - <p>фільтр по даті (до)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **reports** `Ojbect[]` **_(обов'язково)_** - <p>Масив об'єктів ReportModel</p>
- **ReportModel.id** `Integer` **_(обов'язково)_** - <p>ID звіту</p>
- **ReportModel.created_at** `DateTime` **_(обов'язково)_** - <p>Дата створення звіту</p>
- **ReportModel.report_period** `DateTime` **_(обов'язково)_** - <p>Період звіту</p>
- **ReportModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **ReportModel.status** `Integer` **_(обов'язково)_** - <p>Статус звіту</p>
- **ReportModel.correction_filename** `String` **_(обов'язково)_** - <p>Назва файлу звіту про коригування</p>
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
  "reports": [
     {
         "id": 2,
         "created_at": "2017-10-20 14:20:16",
         "report_period": "2017-07-01 00:00:00",
         "status": 3,
         "filename": "2019_01_apteka-kosmo_report.xls",
         "correction_filename": null
     }
 ],
 "_meta":
     {
         "totalCount": 1,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 20
     }
}}
```

---

### 6 Звіти про продані товари

**get** `/reports/search`

<p>Reports</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>номер сторінки</p>

**Request Url Parameters:**

- **dateFrom** `String` _(опціонально)_ - <p>фільтр по даті (з)</p>
- **dateTo** `String` _(опціонально)_ - <p>фільтр по даті (по)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **reports** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів ReportModel</p>
- **ReportModel.id** `Integer` **_(обов'язково)_** - <p>ID звіту</p>
- **ReportModel.created_at** `DateTime` **_(обов'язково)_** - <p>Дата створення звіту</p>
- **ReportModel.report_period** `DateTime` **_(обов'язково)_** - <p>Період звіту</p>
- **ReportModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **ReportModel.status** `Integer` **_(обов'язково)_** - <p>Статус звіту</p>
- **ReportModel.correction_filename** `String` **_(обов'язково)_** - <p>Назва файлу звіту про коригування</p>
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
  "reports": [
     {
         "id": 2,
         "created_at": "2017-10-20 14:20:16",
         "report_period": "2017-07-01 00:00:00",
         "filename": "2017_07_chitajka_report.xls"
     }
 ],
 "_meta":
     {
         "totalCount": 1,
         "pageCount": 1,
         "currentPage": 1,
         "perPage": 20
     }
}}
```

---

### 5.5 Завантаження файлу і додавання коментаря

**post** `/reports/save-disapprove-form`

<p>Завантаження xls файлу і додавання коментаря</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **report_id** `Integer` **_(обов'язково)_** - <p>Id звіту</p>
- **text** `string` **_(обов'язково)_** - <p>Текст коментаря</p>
- **files** `File` **_(обов'язково)_** - <p>Файл документа</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>multipart/form-data</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content" true
}
```

---

### 9.1 Створення платежа

**post** `/balances/evo-payment`

<p>Створення платежа</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **invoice_id** `Number` **_(обов'язково)_** - <p>ID рахунку на оплату<br></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **InvoiceModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойса</p>
- **InvoiceModel.liqpay_amount** `Number` **_(обов'язково)_** - <p>Сума рахунку</p>
- **InvoiceModel.contract_number** `String` **_(обов'язково)_** - <p>Номер договору з продавцем</p>
- **InvoiceModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **InvoiceModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceModel.type_title** `String` **_(обов'язково)_** - <p>Назва типу рахунку обраною мовою</p>
- **InvoiceModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceModel.is_archive** `boolean` **_(обов'язково)_** - <p>Архівний (так/ні)</p>
- **InvoiceModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceStatuses">Статус рахунку</a></p>
- **InvoiceModel.payment_service_bill_id** `Integer` **_(обов'язково)_** - <p>Зовнішній Id інвойса</p>
- **InvoiceModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для сплати інвойса</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "contract_number": "1194/26",
        "number": "МП-00629432",
        "filename": "МП-00629432_26_BILL6_03.pdf",
        "date_of_invoice": "2021-02-03 16:20:59",
        "type": "BILL6",
        "amount": "1.00",
        "billing_invoice_id": 87229,
        "status": 2,
        "id": 214894,
        "liqpay_amount": null,
        "is_archive": false,
        "payment_service_bill_id": 97,
        "payment_url": "https://pay.rozetka.com.ua/api/v1/checkout/f0...ef/form"
    }
}
```

---

### 9.2 Отримання статуса платежа

**get** `/balances/evo-payment-status`

<p>Отримання статуса платежа</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **invoice_id** `Integer` **_(обов'язково)_** - <p>Фільтр по id рахунку на оплату</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **status** `Integer` **_(обов'язково)_** - <p>Статус платежа</p>
- **payment_service_response.bill** `Object` **_(обов'язково)_** - <p>Платіж</p>
- **payment_service_response.bill.id** `String` **_(обов'язково)_** - <p>Id платежа</p>
- **payment_service_response.bill.status** `String` **_(обов'язково)_** - <p>Статус платежа <i>paid - сплачено, wait - очікує на оплату</i></p>
- **payment_service_response.bill.amount** `Integer` **_(обов'язково)_** - <p>Сума платежа</p>
- **payment_service_response.bill.expire** `Datetime` **_(обов'язково)_** - <p>Термін закінчення платежа</p>
- **payment_service_response.bill.payment_merchant_id** `Number` **_(обов'язково)_** - <p>id мерчанта</p>
- **payment_service_response.payment_method** `Object` **_(обов'язково)_** - <p>Платіжний метод</p>
- **payment_service_response.payment_method.title** `String` **_(обов'язково)_** - <p>Назва російською</p>
- **payment_service_response.payment_method.title_ua** `String` **_(обов'язково)_** - <p>Назва українською</p>
- **payment_service_response.payment_method.processing** `String` **_(обов'язково)_** - <p>Тип обробки платежа</p>

#### Приклад відповіді

```json
    HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "status": 1,
        "payment_service_response": {
            "status": "wait",
            "bill": {
                "id": 94,
                "status": "paid",
                "amount": 1,
                "expire": "2021-02-03 16:21:30",
                "payment_merchant_id": 116
            },
            "payment_method": {
                "title": "Оплата роялти за услуги",
                "title_ua": "",
                "processing": "TranzzoHosted"
            }
        }
    }
}
```

---

