# TimeTable

### 2.2 Видалення періоду відсутності

**delete** `/markets/excluded-date/{id}`

<p>Видалення періоду відсутності</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request URL Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id періоду відсутності</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": true
}
```

---

### 4 Отримання стану автоблокування товарів на період відсутності

**get** `/markets/items-auto-block`

<p>Повертає стан автоблокування товарів на період відсутності магазину та коментаря магазину</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>
- **items_unavailable** `Boolean` **_(обов'язково)_** - <p>Стан автоблокування товарів</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар магазину</p>
- **transfer_reason** `String` **_(обов'язково)_** - <p>Причина переведення</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "items_unavailable": true,
        "comment": ""
        "transfer_reason": ""
    }
}
```

---

### 3 Редагування графіка роботи для певного дня

**put** `/markets/сertain-period-dates`

<p>Зміна графіка роботи для певного дня</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **timeTable** `Array` **_(обов'язково)_** - <p>Список періодів відсутності.</p>
- **timeTable.id** `Number` **_(обов'язково)_** - <p>Id періоду відсутності (якщо існує)</p>
- **timeTable.dateStart** `String` **_(обов'язково)_** - <p>Дата початку періоду в форматі Y-m-d</p>
- **timeTable.dateEnd** `String` **_(обов'язково)_** - <p>Дата закінчення періоду в форматі Y-m-d</p>
- **timeTable.timeStart** `String` **_(обов'язково)_** - <p>Час початку періоду в форматі HH:mm</p>
- **timeTable.timeEnd** `String` **_(обов'язково)_** - <p>Час закінчення періоду в форматі HH:mm</p>
- **timeTable.isActive** `Number` **_(обов'язково)_** - <p>Статус періоду відсутності по дефолту (0-неактивний, 1-активний)</p>
- **timeTable.isWeekend** `Number` **_(обов'язково)_** - <p>Вихідний день чи ні</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": true
}
```

---

### 2 Створення та редагування періодів відсутності (масове)

**put** `/markets/excludeddates`

<p>Зміна періодів відсутності</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id періоду відсутності (якщо існує)</p>
- **exclDates** `Array` **_(обов'язково)_** - <p>Список періодів відсутності.<br> Важливо: у всіх не вказаних в запиті періодах відсутності 'isActive' встановлюється в false</p>
- **exclDates.commentUk** `String` **_(обов'язково)_** - <p>Коментар українською</p>
- **exclDates.commentRu** `String` **_(обов'язково)_** - <p>Коментар російською</p>
- **exclDates.commentEn** `String` **_(обов'язково)_** - <p>Коментар англійською</p>
- **exclDates.dateStart** `String` **_(обов'язково)_** - <p>Дата початку періоду в форматі Y-m-d</p>
- **exclDates.dateEnd** `String` **_(обов'язково)_** - <p>Дата закінчення періоду в форматі Y-m-d</p>
- **exclDates.isActive** `Boolean` **_(обов'язково)_** - <p>Статус періоду відсутності за замовчуванням (0-неактивний, 1-активний)</p>
- **exclDates.isDefault** `Boolean` _(опціонально)_ - <p>Чи є вихідним за замовчуванням</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": true
}
```

---

### 5 Зміна стану автоблокування товарів на період відсутності

**put** `/markets/items-auto-block`

<p>Змінює стан автоблокування товарів на період відсутності магазину та коментар магазину</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **items_unavailable** `Boolean` **_(обов'язково)_** - <p>Стан автоблокування товарів</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар магазину</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: {} }</p>

#### Приклад відповіді

```json
{
    "success": true,
    "content": {
        "items_unavailable": true,
        "comment": ""
    }
}
```

---

### 1 Редагування графіка роботи

**put** `/markets/timetable`

<p>Зміна графіка роботи</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **timeTable** `Array` **_(обов'язково)_** - <p>Список всіх графіків відсортований з понеділка по неділю. Масив повинен мати 7 елементів</p>
- **timeTable.dayID** `Integer` **_(обов'язково)_** - <p>ID дня тижня</p>
- **timeTable.isWeekend** `Boolean` **_(обов'язково)_** - <p>Чи є даний день тижня вихідним</p>
- **timeTable.timeStart** `String` **_(обов'язково)_** - <p>Час початку роботи в форматі H:i:s</p>
- **timeTable.timeEnd** `String` **_(обов'язково)_** - <p>Час закінчення роботи в форматі H:i:s</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: boolean }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": true
}
```

---

### 2.1 Редагування періоду відсутності

**put** `/markets/excluded-date/{id}`

<p>Редагування періоду відсутності</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request URL Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>Id періоду відсутності</p>

**Request Body Parameters:**

- **comment_uk** `String` _(опціонально)_ - <p>Коментар українською</p>
- **comment_ua** `String` _(опціонально)_ - <p>Коментар російською</p>
- **comment_en** `String` _(опціонально)_ - <p>Коментар англійською</p>
- **date_start** `String` _(опціонально)_ - <p>Дата початку періоду у форматі Y-m-d</p>
- **date_end** `String` _(опціонально)_ - <p>Дата закінчення періоду у форматі Y-m-d</p>
- **status** `Boolean` _(опціонально)_ - <p>Статус періоду відсутності (0-неактивний, 1-активний)</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **TimetableExcludedDates** `Object` **_(обов'язково)_** - <p>Model</p>
- **timeTable.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **timeTableExcludedDates.comment_en** `String` **_(обов'язково)_** - <p>Коментар до додаткового вихідного en</p>
- **timeTableExcludedDates.comment_ru** `String` **_(обов'язково)_** - <p>Коментар до додаткового вихідного ru</p>
- **timeTableExcludedDates.comment_uk** `String` **_(обов'язково)_** - <p>Коментар до додаткового вихідного uk</p>
- **timeTableExcludedDates.day_start** `String` **_(обов'язково)_** - <p>Дата початку додаткового вихідного</p>
- **timeTableExcludedDates.day_end** `String` **_(обов'язково)_** - <p>Дата кінця додаткового вихідного</p>
- **timeTableExcludedDates.is_default** `Boolean` **_(обов'язково)_** - <p>Стандартний вихідний (так / ні)</p>
- **timeTableExcludedDates.isActive** `Integer` **_(обов'язково)_** - <p>Вихідний (1 - Активний, 0 - Неактивний)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "id": 7,
     "date_start": "2023-09-22",
     "date_end": "2023-09-23",
     "comment_ua": "тест122",
     "comment_uk": "тест1",
     "comment_en": "тест1",
     "status": 1,
     "is_default": false
 }
}
```

---

