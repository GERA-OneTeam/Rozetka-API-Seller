# DeliveryTariff

### 1 Перевірити наявність спецтарифу для служби доставки

**get** `/delivery-tariffs/has-special-tariff`

<p>Перевірити наявність спецтарифу для служби доставки</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **delivery_service_ids** `String` **_(обов'язково)_** - <p>Список ID служб доставки</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;: { special_delivery_tariffs: special_delivery_tariffs[] } }</p>
- **special_delivery_tariffs** `Boolean` **_(обов'язково)_** - <p>Наявність спецтарифу для слубжи доставки</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
 {
    "success": true,
    "content": {
        "special_delivery_tariffs": [
            {
                "5282": true
            },
            {
                "4": false
            }
        ]
    }
}
```

---

