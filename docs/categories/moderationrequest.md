# ModerationRequest

### 1. Отримання списку заявок

**get** `/moderation-request`

<p>Отримання списку заявок</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `String` _(опціонально)_ - <p>ID заявки</p>
- **statuses** `String` _(опціонально)_ - <p>ID статусів через кому<br> <code>statuses=1,3,6</code></p>
- **types** `String` _(опціонально)_ - <p>ID типів через кому<br> <code>types=1,3,6</code></p>
- **users** `String` _(опціонально)_ - <p>ID авторів заявок через кому<br> <code>users=100,34465,65656</code></p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **perPage** `Integer` _(опціонально)_ - <p>Кількість записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;requests&quot;: {ModerationRequest[]}, &quot;_meta&quot;: {ModerationRequestMeta} } }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID заявки</p>
- **amount_to_work** `Integer` **_(обов'язково)_** - <p>Кількість товарів</p>
- **type** `String` **_(обов'язково)_** - <p>Тип заявки</p>
- **status** `Object` **_(обов'язково)_** - <p><a href="#api-Models-ModerationRequestStatusDetails">ModerationRequestStatus</a>, Статус заявки</p>
- **subject** `String` **_(обов'язково)_** - <p>Причина заявки</p>
- **side_user_id** `Integer` **_(обов'язково)_** - <p>ID менеджера, створившого заявку</p>
- **created_at** `String` **_(обов'язково)_** - <p>Дата створення заявки</p>
- **user** `Object` **_(обов'язково)_** - <p><a href="#api-Models-ModerationRequestUserDetails">ModerationRequestUser</a>, Менеджер</p>
- **totalCount** `Integer` **_(обов'язково)_** - <p>Всього записів</p>
- **pageCount** `Integer` **_(обов'язково)_** - <p>Кількість сторінок</p>
- **currentPage** `Integer` **_(обов'язково)_** - <p>Поточна сторінка</p>
- **perPage** `Integer` **_(обов'язково)_** - <p>Кількість товарів на сторінці</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "requests": [
           {
               "id": 3,
               "amount_to_work": 10,
               "type": "Перенос товаров",
               "status": {
                   "id": 1,
                   "name": "Нова",
                   "color": "#FFA900"
               },
               "subject": "Проектирование проектирования проектирований",
               "user": {
                   "id": 0,
                   "full_name": "Менеджер Розетки"
               },
               "created_at": "2021-02-02 16:12:29"
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

### 3. Отриманя деталей заявки

**get** `/moderation-request/{id}`

<p>Деталі заявки</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { ModerationRequestDetails } }</p>
- **id** `Integer` **_(обов'язково)_** - <p>ID заявки</p>
- **status** `Object` **_(обов'язково)_** - <p><a href="#api-Models-ModerationRequestStatusDetails">ModerationRequestStatus</a>, Статус заявки</p>
- **type** `Object` **_(обов'язково)_** - <p><a href="#api-Models-ModerationRequestTypeDetails">ModerationRequestType</a>, Тип заявки</p>
- **number_of_processed_items** `Integer` **_(обов'язково)_** - <p>Кількість опрацьованих товарів</p>
- **number_of_hidden_products** `Integer` **_(обов'язково)_** - <p>Кількість прихованих товарів</p>
- **number_of_grouped_products** `Integer` **_(обов'язково)_** - <p>Кількість згрупованих товарів</p>
- **number_of_changed_products** `Integer` **_(обов'язково)_** - <p>Кількість змінених товарів</p>
- **number_of_products_with_videos** `Integer` **_(обов'язково)_** - <p>Кількість товарів, до яких додане відео</p>
- **number_of_added_dimension_meshes** `Integer` **_(обов'язково)_** - <p>Кількість доданих розмірних сіток</p>
- **actual_completion_date** `String` **_(обов'язково)_** - <p>Фактична дата завершення</p>
- **reason** `String` **_(обов'язково)_** - <p>Причина</p>
- **comment** `String` **_(обов'язково)_** - <p>Коментар</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 336,
       "status": {
           "id": 3,
           "name": "На доопрацюванні",
           "color": "#FF5C00"
       },
       "type": {
           "id": 1,
           "name": "Добавление новых товаров"
       },
       "number_of_processed_items": null,
       "number_of_hidden_products": null,
       "number_of_grouped_products": null,
       "number_of_changed_products": null,
       "number_of_products_with_videos": null,
       "number_of_added_dimension_meshes": null,
       "actual_completion_date": null,
       "reason": "Другое (описан в коментариях)",
       "comment": "awd"
   }
}
```

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "message": "Заявка ще не оброблена. Очікуйте на завершення модерації"
   }
}
```

---

### 2. Пошук даних для фільтра заявок

**get** `/moderation-request/search-data`

<p>Пошук даних для фільтра заявок</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **users** `Object[]` **_(обов'язково)_** - <p>Автори заявок</p>
- **users.id** `Integer` **_(обов'язково)_** - <p>ID автора</p>
- **users.full_name** `String` **_(обов'язково)_** - <p>П.І.Б автора</p>
- **statuses** `Object[]` **_(обов'язково)_** - <p>Статуси заявок</p>
- **statuses.id** `Integer` **_(обов'язково)_** - <p>ID статуса</p>
- **statuses.full_name** `String` **_(обов'язково)_** - <p>Назва статуса<br> <code>1, 2</code> - <i>Нова</i><br> <code>3</code> - <i>На доопрацюванні</i><br> <code>4</code> - <i>Скасована</i><br> <code>5</code> - <i>Очікує взяття в роботу</i><br> <code>6, 7</code> - <i>В роботі</i><br> <code>8, 9</code> - <i>Виконана</i><br> <code>11</code> - <i>Закрита</i><br></p>
- **types** `Object[]` **_(обов'язково)_** - <p>Типи заявок</p>
- **types.id** `Integer` **_(обов'язково)_** - <p>ID типу</p>
- **types.full_name** `String` **_(обов'язково)_** - <p>Назва типу <br> <code>1</code> - <i>Додавання товарів</i><br> <code>2</code> - <i>Оновлення товарів</i><br> <code>3</code> - <i>Перенесення товарів (Зміна категорії)</i><br> <code>4</code> - <i>Групування товарів</i><br> <code>5</code> - <i>Заливка фото з фотостудії</i><br> <code>6</code> - <i>Перевірка прихованих товарів</i><br> <code>7</code> - <i>Додавання нового порталу/розділу фат-меню/категорії</i><br> <code>8</code> - <i>Додавання/зміна інформації в існуючих порталах/фат-меню/категоріях</i><br> <code>9</code> - <i>Додавання параметрів/значень</i><br> <code>10</code> - <i>Зміна існуючих параметрів/значень</i><br> <code>11</code> - <i>Проектування структури</i><br> <code>12</code> - <i>Додавання нових СЦ/зміна існуючих СЦ'</i><br> <code>13</code> - <i>Додавання відео</i><br> <code>14</code> - <i>Додавання розмірної сітки</i><br></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK: {
    "success": true,
    "content": {
        "users": [
            {
                "id": 0,
                "full_name": "Менеджер Розетки"
            },
            {
                "id": 100,
                "full_name": "Тестовый менеджер"
            }
        ],
        "statuses": [
            {
                "id": [
                    1,
                    2
                ],
                "full_name": "Новая"
            },
            {
                "id": 3,
                "full_name": "На доработке"
            },
            {
                "id": 4,
                "full_name": "Отменена"
            },
            {
                "id": 5,
                "full_name": "Ожидает взятия в работу"
            },
            {
                "id": [
                    6,
                    7
                ],
                "full_name": "В работе"
            },
            {
                "id": [
                    8,
                    9
                ],
                "full_name": "Выполнена"
            },
            {
                "id": 11,
                "full_name": "Закрыта"
            }
        ],
        "types": [
            {
                "id": 1,
                "full_name": "Добавление товаров"
            },
            {
                "id": 2,
                "full_name": "Обновление товаров"
            },
            {
                "id": 3,
                "full_name": "Перенос товаров (изменение категории в товарах)"
            },
            {
                "id": 4,
                "full_name": "Группировка товаров"
            },
            {
                "id": 6,
                "full_name": "Проверка скрытых товаров"
            },
            {
                "id": 13,
                "full_name": "Добавление/изменение видео"
            },
            {
                "id": 14,
                "full_name": "Добавление/изменение размерной сетки"
            }
        ]
    }
}
```

---

