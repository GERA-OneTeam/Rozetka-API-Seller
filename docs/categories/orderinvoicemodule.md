# OrderInvoiceModule

### 1 Отримання рахунків замовлення

**get** `/order-invoices/search`

<p>Отримання рахунків замовлення</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **sort** `Column` _(опціонально)_ - <p>Параметр сортування (asc).</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;order-invoices&quot;: [OrderInvoiceModel] } }</p>
- **OrderInvoice** `Object` **_(обов'язково)_** - <p>OrderInvoiceModel</p>
- **OrderStatusPayment.invoice_id** `Integer` **_(обов'язково)_** - <p>ID рахунка</p>
- **OrderStatusPayment.amount** `Number` **_(обов'язково)_** - <p>Сума рахунка</p>
- **OrderStatusPayment.status** `Integer` **_(обов'язково)_** - <p>Статус рахунка <a href="#api-Orders-GetPaymentStatuses">Статуси платежів</a></p>
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
     "order-invoices": [
         {
             "invoice_id": 1234568,
             "amount": 100,
             "status": 2
         },
         {
             "invoice_id": 1234567,
             "amount": 100,
             "status": 2
         }
     ],
     "_meta": {
         "totalCount": 22,
         "pageCount": 2,
         "currentPage": 2,
         "perPage": 20
     }
 }
}
```

```json
{
    "success": true,
    "content": {
        "orderInvoices": [
            {
                "invoice_id": 12345676,
                "amount": 1,
                "status": 6,
                "can_change_amount_invoice": false,
                "can_get_invoice_url": false
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

