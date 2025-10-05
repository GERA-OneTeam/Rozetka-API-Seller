# BusinessTypes

### 1 Список бізнес-моделей

**get** `/markets/business-types`

<p>Список бізнес-моделей</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {businessTypes: array} }</p>
- **businessTypes** `Array` **_(обов'язково)_** - <p>Список всіх бізнес-моделей</p>
- **businessTypes.id** `Number` **_(обов'язково)_** - <p>ID запису</p>
- **businessTypes.name** `String` **_(обов'язково)_** - <p>Назва (абревіатура) бізнес-моделі</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content":{
         businessTypes: [
         {
            "id":1,
            "name":"ФОП"
         },...]
     }
}
```

---

