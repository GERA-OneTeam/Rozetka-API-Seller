# Ukrposhta

### 3.3 Отримання інформації по місту

**get** `/v1/ukrposhta/get-city`

<p>Отримання інформації по місту</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **region_id** `String` **_(обов'язково)_** - <p>ID області</p>
- **district_id** `String` **_(обов'язково)_** - <p>ID району</p>
- **city_name** `String` **_(обов'язково)_** - <p>Назва міста</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: UkrposhtaCity[] }</p>
**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID населеного пункту</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва населеного пункту українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва населеного пункту російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва населеного пункту англійською</p>
- **type** `Object` **_(обов'язково)_** - <p>Тип населеного пункту</p>
- **type.name_uk** `String` **_(обов'язково)_** - <p>Назва типу населеного пункту українською</p>
- **type.name_ru** `String` **_(обов'язково)_** - <p>Назва типу населеного пункту російською</p>
- **type.name_en** `String` **_(обов'язково)_** - <p>Назва типу населеного пункту англійською</p>
- **type.short_name_uk** `String` **_(обов'язково)_** - <p>Коротка назва типу населеного пункту українською</p>
- **type.short_name_ru** `String` **_(обов'язково)_** - <p>Коротка назва типу населеного пункту російською</p>
- **type.short_name_en** `String` **_(обов'язково)_** - <p>Коротка назва типу населеного пункту англійською</p>
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-UkrposhtaRegion">UkrposhtaRegion</a></b></p>
- **district** `Object|Null` **_(обов'язково)_** - <p>Район області <br><b><a href="#api-Models-UkrposhtaDistrict">UkrposhtaDistrict</a></b></p>
- **code_koatuu** `String` **_(обов'язково)_** - <p>Код державного класифікатору об'єктів (КОАТУУ)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
            "id": "aac9fb44-e0f6-4bc7-a11d-234a167932d0",
            "name_uk": "Бориспіль",
            "name_ru": "Борисполь",
            "name_en": "Boryspil",
            "type": {
                "name_uk": "Місто",
                "name_ru": "Город",
                "name_en": "City",
                "short_name_uk": "м",
                "short_name_ru": "г",
                "short_name_en": "c"
            },
            "region": {
                "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
                "name_uk": "Київська",
                "name_ru": "Киевская",
                "name_en": "Kyivska",
                "code_koatuu": "3200000000"
            },
            "district": null,
            "code_koatuu": "3210500000"
        }
    ]
}
```

---

### 3.3 Отримання інформації по місту

**get** `/ukrposhta/get-city`

<p>Отримання інформації по місту</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **district_id** `Integer` **_(обов'язково)_** - <p>ID району</p>
- **city_name** `String` **_(обов'язково)_** - <p>Назва міста</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість відображуваних записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: UkrPostLocalityForm[], &quot;_meta&quot;: MetaResponse } }</p>
- **ukrPosts** `Object` **_(обов'язково)_** - <p>UkrPostLocalityForm</p>
- **ukrPosts.region_name** `String` **_(обов'язково)_** - <p>Назва області</p>
- **ukrPosts.district_name** `String` **_(обов'язково)_** - <p>Назва району</p>
- **ukrPosts.city_name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **ukrPosts.city_type_name** `String` **_(обов'язково)_** - <p>Тип населеного пункту</p>
- **ukrPosts.region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **ukrPosts.city_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **ukrPosts.district_id** `Integer` **_(обов'язково)_** - <p>ID району пункту</p>
- **ukrPosts.city_type_id** `Integer` **_(обов'язково)_** - <p>ID типу населеного пункту</p>
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
       "ukrPosts": [
           {
               "region_name": "Винницкая",
               "district_name": "Калиновский",
               "city_name": "Калиновка",
               "city_type_name": null,
               "region_id": "1",
               "city_id": "825",
               "district_id": "24",
               "city_type_id": "1"
           },
           {
               "region_name": "Винницкая",
               "district_name": "Калиновский",
               "city_name": "Калиновка Вторая",
               "city_type_name": null,
               "region_id": "1",
               "city_id": "19991",
               "district_id": "24",
               "city_type_id": "4"
           }
       ],
       "_meta": {
           "totalCount": 2,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 10
       }
   }
}
```

---

### 3.4 Отримання інформації по району

**get** `/v1/ukrposhta/get-district`

<p>Отримання інформації по району</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **region_id** `String` **_(обов'язково)_** - <p>ID області</p>
- **district_name** `String` **_(обов'язково)_** - <p>Назва району</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID району/районного центру</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва району/районного центру українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва району/районного центру російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва району/районного центру англійською</p>
- **type** `Object` **_(обов'язково)_** - <p>Тип районного центру (тільки для районного центру)</p>
- **type.name_uk** `String` **_(обов'язково)_** - <p>Назва типу районного центру українською</p>
- **type.name_ru** `String` **_(обов'язково)_** - <p>Назва типу районного центру російською</p>
- **type.name_en** `String` **_(обов'язково)_** - <p>Назва типу районного центру англійською</p>
- **type.short_name_uk** `String` **_(обов'язково)_** - <p>Коротка назва типу районного центру українською</p>
- **type.short_name_ru** `String` **_(обов'язково)_** - <p>Коротка назва типу районного центру російською</p>
- **type.short_name_en** `String` **_(обов'язково)_** - <p>Коротка назва типу районного центру англійською</p>
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-UkrposhtaRegion">UkrposhtaRegion</a></b></p>
- **district** `Object|Null` **_(обов'язково)_** - <p>Район області (тільки для районного центру)<br><b><a href="#api-Models-UkrposhtaDistrict">UkrposhtaDistrict</a></b></p>
- **code_koatuu** `String` **_(обов'язково)_** - <p>Код державного класифікатору об'єктів (КОАТУУ)</p>
- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: UkrposhtaDistrict[]+UkrposhtaCity[] }</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
            "id": "7ef025b6-36ed-4db5-9758-31a87e41c1c6",
            "name_uk": "Бориспільський",
            "name_ru": "Бориспольский",
            "name_en": "Boryspilskyi",
            "region": {
                "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
                "name_uk": "Київська",
                "name_ru": "Киевская",
                "name_en": "Kyivska",
                "code_koatuu": "3200000000"
            },
            "code_koatuu": "3220800000"
        },
        {
            "id": "aac9fb44-e0f6-4bc7-a11d-234a167932d0",
            "name_uk": "Бориспіль",
            "name_ru": "Борисполь",
            "name_en": "Boryspil",
            "type": {
                "name_uk": "Місто",
                "name_ru": "Город",
                "name_en": "City",
                "short_name_uk": "м",
                "short_name_ru": "г",
                "short_name_en": "c"
            },
            "region": {
                "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
                "name_uk": "Київська",
                "name_ru": "Киевская",
                "name_en": "Kyivska",
                "code_koatuu": "3200000000"
            },
            "district": null,
            "code_koatuu": "3210500000"
        }
    ]
}
```

---

### 3.4 Отримання інформації по району

**get** `/ukrposhta/get-district`

<p>Отримання інформації по району</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **district_name** `String` **_(обов'язково)_** - <p>Назва району</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість відображуваних записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: UkrPostLocalityForm[], &quot;_meta&quot;: MetaResponse } }</p>
- **ukrPosts** `Object` **_(обов'язково)_** - <p>UkrPostLocalityForm</p>
- **ukrPosts.region_name** `String` **_(обов'язково)_** - <p>Назва області</p>
- **ukrPosts.district_name** `String` **_(обов'язково)_** - <p>Назва району</p>
- **ukrPosts.region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **ukrPosts.district_id** `Integer` **_(обов'язково)_** - <p>ID району</p>
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
       "ukrPosts": [
           {
               "region_name": "Винницкая",
               "district_name": "Калиновский",
               "region_id": "1",
               "district_id": "24"
           }
       ],
       "_meta": {
           "totalCount": 1,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 10
       }
   }
}
```

---

### 3.6 Отримання інформації за індексом

**get** `/v1/ukrposhta/get-index`

<p>Отримання інформації за індексом</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **street_id** `String` **_(обов'язково)_** - <p>ID вулиці</p>
- **house_number** `String` **_(обов'язково)_** - <p>Номер будинку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: UkrposhtaPostcode[] }</p>
**Response Body Parameters:**

- **postcode** `String` **_(обов'язково)_** - <p>Поштовий індекс вулиці</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця <br><b><a href="#api-Models-UkrposhtaStreet">UkrposhtaStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, за яким шукався індекс</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
            "postcode": "08301",
            "house_number": "46",
            "street": {
                "id": "a3d3ea3a-d03a-4af1-909d-46aa436f5836",
                "name_uk": "Європейська",
                "name_ru": "Европейская",
                "name_en": "Yevropeiska",
                "city": {
                    "id": "aac9fb44-e0f6-4bc7-a11d-234a167932d0",
                    "name_uk": "Бориспіль",
                    "name_ru": "Борисполь",
                    "name_en": "Boryspil",
                    "type": {
                        "name_uk": "Місто",
                        "name_ru": "Город",
                        "name_en": "City",
                        "short_name_uk": "м",
                        "short_name_ru": "г",
                        "short_name_en": "c"
                    },
                    "region": {
                        "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
                        "name_uk": "Київська",
                        "name_ru": "Киевская",
                        "name_en": "Kyivska",
                        "code_koatuu": "3200000000"
                    },
                    "district": null,
                    "code_koatuu": "3210500000"
                },
                "code": "433192",
                "house_numbers": [
                    "46",
                    "36а",
                    "3",
                    "29а",
                    "50в",
                    "48",
                    "36",
                    "29б",
                    "47а",
                    "12б",
                    "23",
                    "50д",
                    "40а",
                    "50б",
                    "50г",
                    "30",
                    "90",
                    "29",
                    "87",
                    "47б",
                    "5",
                    "4",
                    "87а",
                    "40",
                    "34",
                    "23а",
                    "48а",
                    "27а",
                    "46а",
                    "118",
                    "10",
                    "27б",
                    "1",
                    "32",
                    "8",
                    "7",
                    "6",
                    "38",
                    "90а",
                    "11",
                    "50а",
                    "27",
                    "9",
                    "2",
                    "38а",
                    "50"
                ]
            }
        }
    ]
}
```

---

### 3.6 Отримання інформації за індексом

**get** `/ukrposhta/get-index`

<p>Отримання інформації за індексом</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **street_id** `Integer` **_(обов'язково)_** - <p>ID вулиці</p>
- **house_number** `Integer` _(опціонально)_ - <p>Номер будинку</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість відображуваних записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: UkrPostLocalityForm[], &quot;_meta&quot;: MetaResponse } }</p>
- **ukrPosts.street_id** `Integer` **_(обов'язково)_** - <p>ID вулиці</p>
- **ukrPosts.postcode** `Integer` **_(обов'язково)_** - <p>індекс</p>
- **ukrPosts.house_numbers** `String[]` **_(обов'язково)_** - <p>Номери будинків</p>
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
       "ukrPosts": [
           {
               "postcode": "22400",
               "street_id": "293085",
               "house_numbers": [
                   "1",
                   "2",
                   "3",
                   "4",
                   "5",
                   "6",
                   "7",
                   "8",
                   "9",
                   "10",
                   "11",
                   "12",
                   "13",
                   "14",
                   "15",
                   "16",
                   "17",
                   "18",
                   "19",
                   "20",
                   "21",
                   "22",
                   "23",
                   "24",
                   "25",
                   "26",
                   "27",
                   "28",
                   "29",
                   "30",
                   "40",
                   "44",
                   "45",
                   "46",
                   "46а",
                   "47",
                   "48",
                   "49",
                   "50",
                   "51",
                   "54",
                   "55",
                   "56",
                   "57",
                   "60",
                   "64",
                   "66",
                   "67",
                   "68",
                   "70",
                   "72"
               ]
           }
       ],
       "_meta": {
           "totalCount": 1,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 10
       }
   }
}
```

---

### 3.5 Отримання інформації по області

**get** `/v1/ukrposhta/get-region`

<p>Отримання інформації по області</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **region_name** `String` **_(обов'язково)_** - <p>Назва області</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: UkrposhtaRegion[] }</p>
**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID області</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва області українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва області російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва області англійською</p>
- **code_koatuu** `String` **_(обов'язково)_** - <p>Код державного класифікатору об'єктів (КОАТУУ)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
            "id": "29a00955-5b9d-4d4d-adb3-ff55eb8f4788",
            "name_uk": "Київ",
            "name_ru": "Киев",
            "name_en": "Kyiv",
            "code_koatuu": "8000000000"
        },
        {
            "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
            "name_uk": "Київська",
            "name_ru": "Киевская",
            "name_en": "Kyivska",
            "code_koatuu": "3200000000"
        }
    ]
}
```

---

### 3.5 Отримання інформації по області

**get** `/ukrposhta/get-region`

<p>Отримання інформації по області (Підтримується тільки назва області українською мовою)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **region_name** `String` **_(обов'язково)_** - <p>Назва області</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість відображуваних записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: UkrPostLocalityForm[], &quot;_meta&quot;: MetaResponse } }</p>
- **ukrPosts** `Object` **_(обов'язково)_** - <p>UkrPostLocalityForm</p>
- **ukrPosts.region_name** `String` **_(обов'язково)_** - <p>Назва області (ru)</p>
- **ukrPosts.region_name_ua** `String` **_(обов'язково)_** - <p>Назва області (ua)</p>
- **ukrPosts.region_name_en** `String` **_(обов'язково)_** - <p>Назва області (en)</p>
- **ukrPosts.region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **ukrPosts.region_koatuu** `Integer` **_(обов'язково)_** - <p>КВЕД населеного пункту (Ідентифікатор населеного пункту по класифікатором об'єктів адміністративно-територіального устрою України)</p>
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
       "ukrPosts": [
           {
               "region_name": "Винницкая",
               "region_name_ua": "Вінницька",
               "region_name_en": "Vinnytska",
               "region_id": "1",
               "region_koatuu": "500000000"
           }
       ],
       "_meta": {
           "totalCount": 1,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 10
       }
   }
}
```

---

### 3.2 Отримання інформації по вулиці

**get** `/v1/ukrposhta/get-street`

<p>Отримання інформації по вулиці</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **city_id** `String` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **street_name** `String` **_(обов'язково)_** - <p>Назва вулиці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: UkrposhtaStreet[] }</p>
**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID вулиці</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва вулиці українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва вулиці російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва вулиці англійською</p>
- **city** `Object` **_(обов'язково)_** - <p>Місто <br><b><a href="#api-Models-UkrposhtaCity">UkrposhtaCity</a></b></p>
- **type** `Object` **_(обов'язково)_** - <p>Тип вулиці <br><b><a href="#api-Models-UkrposhtaStreetType">UkrposhtaStreetType</a></b></p>
- **code** `String` **_(обов'язково)_** - <p>Код вулиці в довіднику Укрпошти</p>
- **house_numbers** `String[]` **_(обов'язково)_** - <p>Номери будинків по вулиці</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
            "id": "a3d3ea3a-d03a-4af1-909d-46aa436f5836",
            "name_uk": "Європейська",
            "name_ru": "Европейская",
            "name_en": "Yevropeiska",
            "type":{
                 "name_uk": "вулиця",
                 "name_ru": "улица",
                 "name_en": "street",
                 "short_name_uk": "вул.",
                 "short_name_ru": "ул.",
                 "short_name_en": "ST"
            },
            "city": {
                "id": "aac9fb44-e0f6-4bc7-a11d-234a167932d0",
                "name_uk": "Бориспіль",
                "name_ru": "Борисполь",
                "name_en": "Boryspil",
                "type": {
                    "name_uk": "Місто",
                    "name_ru": "Город",
                    "name_en": "City",
                    "short_name_uk": "м",
                    "short_name_ru": "г",
                    "short_name_en": "c"
                },
                "region": {
                    "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
                    "name_uk": "Київська",
                    "name_ru": "Киевская",
                    "name_en": "Kyivska",
                    "code_koatuu": "3200000000"
                },
                "district": null,
                "code_koatuu": "3210500000"
            },
            "code": "433192",
            "house_numbers": [
                "46",
                "36а",
                "3",
                "29а",
                "50в",
                "48",
                "36",
                "29б",
                "47а",
                "12б",
                "23",
                "50д",
                "40а",
                "50б",
                "50г",
                "30",
                "90",
                "29",
                "87",
                "47б",
                "5",
                "4",
                "87а",
                "40",
                "34",
                "23а",
                "48а",
                "27а",
                "46а",
                "118",
                "10",
                "27б",
                "1",
                "32",
                "8",
                "7",
                "6",
                "38",
                "90а",
                "11",
                "50а",
                "27",
                "9",
                "2",
                "38а",
                "50"
            ]
        }
    ]
}
```

---

### 3.2 Отримання інформації по вулиці

**get** `/ukrposhta/get-street`

<p>Отримання інформації по вулиці (&quot;Укрпошта&quot; не має вулиць російською мовою)</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **city_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **street_name** `String` **_(обов'язково)_** - <p>Назва вулиці</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість відображуваних записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: UkrPostLocalityForm[], &quot;_meta&quot;: MetaResponse } }</p>
- **ukrPosts** `Object` **_(обов'язково)_** - <p>UkrPostLocalityForm</p>
- **ukrPosts.region_name** `String` **_(обов'язково)_** - <p>Назва області</p>
- **ukrPosts.district_name** `String` **_(обов'язково)_** - <p>Назва району</p>
- **ukrPosts.city_name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **ukrPosts.city_type_name** `String` **_(обов'язково)_** - <p>Тип населеного пункту</p>
- **ukrPosts.street_name** `String` **_(обов'язково)_** - <p>Назва вулиці</p>
- **ukrPosts.street_type_name** `String` **_(обов'язково)_** - <p>Тип вулиці</p>
- **ukrPosts.short_street_type_name** `String` **_(обов'язково)_** - <p>Скорочений тип вулиці</p>
- **ukrPosts.old_street_name** `String` **_(обов'язково)_** - <p>Стара назва вулиці</p>
- **ukrPosts.street_type_id** `Integer` **_(обов'язково)_** - <p>ID типу вулиці</p>
- **ukrPosts.region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **ukrPosts.city_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **ukrPosts.street_id** `Integer` **_(обов'язково)_** - <p>ID вулиці</p>
- **ukrPosts.district_id** `Integer` **_(обов'язково)_** - <p>ID району</p>
- **ukrPosts.city_type_id** `Integer` **_(обов'язково)_** - <p>ID типу населеного пункту</p>
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
       "ukrPosts": [
           {
               "region_name": "Вінницька",
               "district_name": "Калинівський",
               "city_name": "Калинівка",
               "city_type_name": "м.",
               "street_name": "Незалежності",
               "street_type_name": "вулиця",
               "short_street_type_name": "вул.",
               "old_street_name": "Леніна",
               "street_type_id": "1",
               "region_id": "1",
               "city_id": "825",
               "street_id": "293085",
               "district_id": "24",
               "city_type_id": "1"
           }
       ],
       "_meta": {
           "totalCount": 1,
           "pageCount": 1,
           "currentPage": 1,
           "perPage": 10
       }
   }
}
```

---

### 1 Створення ТТН

**post** `/ukrposhta/create-ttn`

<p>Створення ТТН Ukrposhta</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **UkrPostTtnModel.senderData** `Object` **_(обов'язково)_** - <p><a href="#api-Models-UkrPostClient">Дані відправника</a></p>
- **UkrPostTtnModel.recipientData** `Object` **_(обов'язково)_** - <p><a href="#api-Models-UkrPostClient">Дані одержувача</a></p>
- **UkrPostTtnModel.deliveryType** `String` **_(обов'язково)_** - <p>Тип доставки<br></p>  <ul>         <li><b>W2D</b> - склад-двері</li>         <li><b>W2W</b> - склад-склад</li>         <li><b>D2D</b> - двері-двері</li>         <li><b>D2W</b> - двері-склад</li>  </ul>  <code>Рекомендується використовувати W2D</code>
- **UkrPostTtnModel.parcels** `Object[]` **_(обов'язково)_** - <p>Масив об'єктів <a href="#api-Models-UkrPostParcel">Посилка</a></p>
- **UkrPostTtnModel.postPay** `String` _(опціонально)_ - <p>Сума післяплати, UAH<br> <code>Важливо!</code> При заповненні цього поля, також обов'язково до заповнення поле &quot;Оголошена вартість посилки&quot; в об'єкті <a href='#api-Models-UkrPostParcel'>Посилка</a><br> *<sup>Сума післяплати повинна бути меншою або дорівнювати Оголошеній вартості посилки.</sup></p>
- **UkrPostTtnModel.paidByRecipient** `Boolean` _(опціонально)_ - <p>Хто оплачує посилку:<br></p>  <ul>         <li><b>true</b> - Одержувач</li>         <li><b>false</b> - Відправник</li>  </ul>
- **UkrPostTtnModel.description** `String` _(опціонально)_ - <p>Опис посилки<br></p>
- **UkrPostTtnModel.fragile** `Boolean` _(опціонально)_ - <p>Крихкий вміст (б'ється)</p>
- **UkrPostTtnModel.type** `String` _(опціонально)_ - <p>Тип відправлення <br> <code>STANDARD</code> - Укрпошта стандарт<br> <code>EXPRESS</code> - Укрпошта експрес<br> За замовчуванням використовується <code>EXPRESS</code></p>
- **UkrPostTtnModel.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **UkrPostTtnModel.checkOnDelivery** `Boolean` **_(обов'язково)_** - <p>Послуга огляд при врученні</p>
- **UkrPostTtnModel.onFailReceiveType** `String` **_(обов'язково)_** - <p>Дії з відправленням у випадку, якщо одержувач не забрав його<br></p>  <ul>      <li><b>RETURN</b> - повернути відправнику (за замовчуванням через 14 календарних днів).</li>      <li><b>RETURN_AFTER_7_DAYS</b> - повернути відправлення після зберігання впродовж 7 календарних днів</li>      <li><b>PROCESS_AS_REFUSAL</b> - знищити відправлення. Дозволяється встановити тільки за умови, що paidByRecipient: false</li> </ul>
- **UkrPostTtnModel.sms** `Boolean` **_(обов'язково)_** - <p>Sms-повідомлення про прибуття посилки</p>
- **UkrPostTtnModel.transferPostPayToBankAccount** `Boolean` _(опціонально)_ - <p>Дозволяє відобразити інформацію щодо банківського рахунку відправника на адресному ярлику. За замовчуванням має значення false. Щоб отримати післяплату на розрахунковий рахунок, вказаний у реквізитах відправника, необхідно вказати true. В такому разі, обовязково слід заповнити поле postpay.<br> *<sup>Використовується тільки при виборі підтвердженого відправника із заповненими реквізитами юр.особами</sup></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **DeliveryTtn** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryTtn" class="nav-list-item">DeliveryTtnModel</a></b></p>
- **DeliveryTtn.id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **DeliveryTtn.ext_id** `String` **_(обов'язково)_** - <p>ID замовлення в сервісі доставки</p>
- **DeliveryTtn.ttn** `String` **_(обов'язково)_** - <p>Номер ТТН в сервісі доставки</p>
- **DeliveryTtn.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс <code>*Важливо!</code> Поле не використовується, повертаємо null, незабаром приберемо його з відповіді.</p>
- **DeliveryTtn.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення до якого прив'язана ТТН</p>
- **DeliveryTtn.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **DeliveryTtn.delivery_service_pickup_id** `Integer` **_(обов'язково)_** - <p>ID точки доставки</p>
- **DeliveryTtn.receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **DeliveryTtn.declared_price** `Number` **_(обов'язково)_** - <p>Заявлена вартість товару</p>
- **DeliveryTtn.status_updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення статусу замовлення</p>
- **DeliveryTtn.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **DeliveryTtn.delivery_payer** `Integer` **_(обов'язково)_** - <p>Платник доставки:<br></p> <ul>      <li><b>0</b> - Відправник</li>      <li><b>1</b> - Одержувач</li>  </ul>
- **DeliveryTtn.payment_type** `Integer` **_(обов'язково)_** - <p>Тип платежу:<br></p>  <ul>         <li><b>0</b> - Готівкою</li>         <li><b>1</b> - Карта</li>  </ul>
- **DeliveryTtn.delivery_status_id** `String` **_(обов'язково)_** - <p>Id статусу доставки</p>
- **DeliveryTtn.delivery_address** `String` **_(обов'язково)_** - <p>Адреса доставки (кур'єром)</p>
- **DeliveryTtn.delivery_type** `Integer` **_(обов'язково)_** - <p>Тип доставки:<br></p> <ul>         <li><b>0</b> - На відділення</li>         <li><b>1</b> - На адресу</li>  </ul>
- **DeliveryTtn.oriented_delivery_date** `String` **_(обов'язково)_** - <p>Орієнтовна дата доставки</p>
- **DeliveryTtn.receiver_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **DeliveryTtn.comment** `String` **_(обов'язково)_** - <p>Коментар до ТТН</p>
- **DeliveryTtn.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису Дата створення ТТН</p>
- **DeliveryTtn.updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення запису Дата оновлення ТТН</p>
- **DeliveryTtn.cod_amount** `Number` **_(обов'язково)_** - <p>Сума накладного платежу</p>
- **DeliveryTtn.free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака акційного тарифу доставки</p>
- **DeliveryTtn.sender_pickup_name** `String` **_(обов'язково)_** - <p>Адреса відділення відправлення ТТН</p>
- **DeliveryTtn.group_id** `Number` **_(обов'язково)_** - <p>ID групи ТТН</p>
- **DeliveryTtn.type** `String` **_(обов'язково)_** - <p>Тип ТТН</p> <ul>         <li><b>EXPRESS</b></li>         <li><b>STANDARD</b></li>  </ul>
- **DeliveryTtn.post_pay_commission** `Number` **_(обов'язково)_** - <p>Сума комісії за накладений платіж</p>
- **DeliveryTtn.post_pay_by_recipient** `Boolean` **_(обов'язково)_** - <p>Хто має платити за комісію (true – одержувач, false – відправник)</p>
- **UkrPostDeliveryTtnExtra.delivery_status_id** `Integer` **_(обов'язково)_** - <p>ID статусу відправлення</p>
**ExtraFields:**

- **DeliveryTtn.delivery_service_pickup** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServicePickupDetails" class="nav-list-item">DeliveryServicePickup</a></b> <i>(ExtraField)</i></p>
- **DeliveryTtn.delivery_status_title** `String` **_(обов'язково)_** - <p>Назва статусу доставки <i>(ExtraField)</i></p>
- **UkrPostDeliveryTtnExtra.shipment_group** `Object` **_(обов'язково)_** - <p>Група відправлення</p>
- **UkrPostDeliveryTtnExtra.ukrposhta_data** `Object` **_(обов'язково)_** - <p>Дані про посилку з API Укрпошти</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 10,
        "ext_id": "36971190-205a-42fd-a104-abd4d2c7f17e",
        "ttn": "0000000708577",
        "seller_id": 165,
        "order_id": 12345,
        "delivery_service_id": 2024,
        "delivery_service_pickup_id": null,
        "receiver_fio": "Петренко Отримувач",
        "declared_price": null,
        "status_updated_at": "2020-05-26 03:26:50",
        "delivery_price": 43,
        "delivery_payer": 1,
        "payment_type": 0,
        "delivery_status_id": "1",
        "delivery_address": null,
        "delivery_type": 1,
        "oriented_delivery_date": "2020-05-30 00:00:00",
        "receiver_phone": "+380677654321",
        "comment": null,
        "updated_at": "2020-05-26 03:26:57",
        "created_at": "2020-05-26 03:26:57",
        "cod_amount": 0,
    }
}
```

---

### 6 Ініціалізація налаштувань Укрпошти

**post** `/ukrposhta/create-ttn-settings`

<p>Ініціалізація налаштувань Укрпошти (Створення налаштувань користувача. Здійснюється один раз)</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **selected_sender** `Object` **_(обов'язково)_** - <p>Обраний відправник <br><b><a href="#api-Models-UkrPostClient">UkrPostClientModel</a></b></p>
- **selected_cargo** `Object` **_(обов'язково)_** - <p>Обраний вантаж <br><b><a href="#api-Models-UkrPostParcel">UkrPostParcelModel</a></b></p>
- **count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **is_add_cost** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_order** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **is_add_items** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати назви і id товарів з замовлення</p>
- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **sender_offer_accept** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи прийнята оферта по відправникам.</p>
**ExtraField:**

- **custom_commission** `Object` **_(обов'язково)_** - <p>Індивідуальні комісії</p>
- **custom_commission.percentage_commission** `String(Number)` **_(обов'язково)_** - <p>Комісія за оплату при отриманні, %</p>
- **custom_commission.absolute_commission** `String(Number)` **_(обов'язково)_** - <p>Комісія за оплату при отриманні, фіксована</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
     "success": true,
     "content": {
         "id": 1792,
         "selected_sender": null,
         "selected_cargo": null,
         "count": null,
         "is_add_cost": null,
         "is_add_order": null,
         "is_add_items": null,
         "delivery_service_id": 2024
     }
  }
```

---

### 6.1 Отримання налаштувань Укрпошти

**get** `/ukrposhta/ttn-settings`

<p>Отримання налаштувань Укрпошти</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **selected_sender** `Object` **_(обов'язково)_** - <p>Обраний відправник <br><b><a href="#api-Models-UkrPostClient">UkrPostClientModel</a></b></p>
- **selected_cargo** `Object` **_(обов'язково)_** - <p>Обраний вантаж <br><b><a href="#api-Models-UkrPostParcel">UkrPostParcelModel</a></b></p>
- **count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **is_add_cost** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_order** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **is_add_items** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати назви і id товарів з замовлення</p>
- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>
- **sender_offer_accept** `Boolean` **_(обов'язково)_** - <p>Прапор. Чи прийнята оферта по відправникам.</p>
**ExtraField:**

- **custom_commission** `Object` **_(обов'язково)_** - <p>Індивідуальні комісії</p>
- **custom_commission.percentage_commission** `String(Number)` **_(обов'язково)_** - <p>Комісія за оплату при отриманні, %</p>
- **custom_commission.absolute_commission** `String(Number)` **_(обов'язково)_** - <p>Комісія за оплату при отриманні, фіксована</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 1792,
       "selected_sender": null,
       "selected_cargo": null,
       "count": null,
       "is_add_cost": null,
       "is_add_order": null,
       "is_add_items": null,
       "delivery_service_id": 2024,
       "sender_offer_accept": false
   }
}
```

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 1792,
       "selected_sender": null,
       "selected_cargo": null,
       "count": null,
       "is_add_cost": null,
       "is_add_order": null,
       "is_add_items": null,
       "delivery_service_id": 2024,
       "sender_offer_accept": false,
       "custom_commission":{
         "percentage_commission": "1.17",
         "absolute_commission": "17.00"
       }
   }
}
```

---

### 6.5 Отримання предзаповнених налаштувань посилки для ТТН

**get** `/ukrposhta/selected-cargo`

<p>Отримання предзаповнених налаштувань посилки для ТТН</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **UkrPostParcelModel**  **_(обов'язково)_** - <p>Обраний вантаж <br><b><a href="#api-Models-UkrPostParcel">UkrPostParcelModel</a></b></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
         "weight": "1200",
         "length": "170",
         "height": "170",
         "width": "170",
         "description":"Товары для дома"
     }
}
```

---

### 6.3 Отримання предзаповнених налаштувань відправника для ТТН

**get** `/ukrposhta/selected-sender`

<p>Отримання предзаповнених налаштувань відправника для ТТН</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **UkrPostClientModel**  **_(обов'язково)_** - <p>Обраний відправник <br><b><a href="#api-Models-UkrPostClient">UkrPostClientModel</a></b></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "type": "INDIVIDUAL",
        "address": {
            "city": "Київ",
            "region": "Київська",
            "street": "Кирилівська",
            "country": "UA",
            "postcode": "04210",
            "houseNumber": "100",
            "apartmentNumber": "100"
        },
        "lastName": "Петренко",
        "firstName": "Відправник",
        "phoneNumber": "380677654321"
        }
    }
}
```

---

### 6.7 Список відправників Укрпошти (ФОП / Юр. Особа)

**get** `/ukrposhta/senders`

<p>Список</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request URL Parameters:**

- **sender_title** `String` **_(обов'язково)_** - <p>Назва відправника</p>
- **approve** `Integer` **_(обов'язково)_** - <p>Статус підтвердження (відхилено - 2, підтверджено - 1, не підтверджено - 0).</p>

**Request Meta Parameters:**

- **sort** `String` _(опціонально)_ - <p>Сортування по полю</p>
- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість виведених записів на сторінці*<br> *<sup>Якщо передати 0 - всі записи виводяться на 1 сторінці</sup></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>
- **Content-Language** `String` **_(обов'язково)_** - <p>Мова</p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **type** `Integer` **_(обов'язково)_** - <p>Тип юр. особи<br> Відповідає id, отриманому в запиті <a href="#api-BusinessTypes-GetMarketBusinessTypes">&quot;Список бізнес-моделей&quot;</a></p>
- **sender_title** `String` **_(обов'язково)_** - <p>Назва відправника</p>
- **edrpou_inn** `String` **_(обов'язково)_** - <p>ЄДРПОУ / ІПН</p>
- **address** `String` **_(обов'язково)_** - <p>Адреса</p>
- **phone** `String` **_(обов'язково)_** - <p>Телефон</p>
- **email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **iban** `String` **_(обов'язково)_** - <p>IBAN</p>
- **mfo** `String` **_(обов'язково)_** - <p>МФО банку</p>
- **bank_title** `String` **_(обов'язково)_** - <p>Назва банку</p>
- **approve_title** `String` **_(обов'язково)_** - <p>Cтатус підтвердження</p>
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
       "senders":[
         {
             "id":2,
             "type": "4",
             "sender_title": "ТОВ Иваненко О.О.",
             "edrpou_inn": "1234567890",
             "address": "Из магазина (Киев), 502, Пулюя ул. 5А",
             "phone": "098#######",
             "email": "test@rozetka.com.ua",
             "iban": "UA903052*****9999",
             "mfo": "123456",
             "bank_title": "АКЦИОНЕРНОЕ ОБЩЕСТВО КОММЕРЧЕСКИЙ БАНК «ПРИВАТБАНК»",
             "approve_title": "Підтверджено"
         }
       ],
       "_meta":{
             "totalCount": 1,
             "pageCount": 1,
             "currentPage": 1,
             "perPage": 20
        }
  }
}
```

---

### 3.1 Отримання відділення за індексом

**get** `/v1/ukrposhta/get-locality-by-index`

<p>Отримання відділення за індексом</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Url Parameters:**

- **postcode** `Integer` **_(обов'язково)_** - <p>Індекс поштового відділення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: UkrposhtaPickup[] }</p>
**Response Body Parameters:**

- **postcode** `String` **_(обов'язково)_** - <p>Поштовий індекс відділення</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця розміщення відділення <br><b><a href="#api-Models-UkrposhtaStreet">UkrposhtaStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, в якому знаходиться відділення</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": [
        {
            "postcode": "08301",
            "street": {
                "id": "0f14a775-edf3-49d0-b4e8-e0c2e939fb9a",
                "name_uk": "Київський Шлях",
                "name_ru": "Киевский Путь",
                "name_en": "Kyivskyi Shliakh",
                "city": {
                    "id": "aac9fb44-e0f6-4bc7-a11d-234a167932d0",
                    "name_uk": "Бориспіль",
                    "name_ru": "Борисполь",
                    "name_en": "Boryspil",
                    "type": {
                        "name_uk": "Місто",
                        "name_ru": "Город",
                        "name_en": "City",
                        "short_name_uk": "м",
                        "short_name_ru": "г",
                        "short_name_en": "c"
                    },
                    "region": {
                        "id": "d4d307e2-f53f-44c6-ad26-4d4347a394e0",
                        "name_uk": "Київська",
                        "name_ru": "Киевская",
                        "name_en": "Kyivska",
                        "code_koatuu": "3200000000"
                    },
                    "district": null,
                    "code_koatuu": "3210500000"
                },
                "code": "472812",
                "house_numbers": null
            },
            "house_number": "86"
        }
    ]
}
```

---

### 3.1 Отримання адреси за індексом

**get** `/ukrposhta/get-locality-by-index`

<p>Отримання адреси за індексом</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **postcode** `Integer` **_(обов'язково)_** - <p>Індекс</p>

**Request Meta Parameters:**

- **page** `Integer` _(опціонально)_ - <p>Номер сторінки</p>
- **pageSize** `Integer` _(опціонально)_ - <p>Кількість відображуваних записів на сторінці</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: UkrPostLocalityForm[], &quot;_meta&quot;: MetaResponse } }</p>
- **ukrPosts** `Object` **_(обов'язково)_** - <p>UkrPostLocalityForm</p>
- **ukrPosts.house_numbers** `String[]` **_(обов'язково)_** - <p>Номери будинків</p>
- **ukrPosts.region_name** `String` **_(обов'язково)_** - <p>Назва області</p>
- **ukrPosts.district_name** `String` **_(обов'язково)_** - <p>Назва району</p>
- **ukrPosts.city_name** `String` **_(обов'язково)_** - <p>Назва населеного пункту</p>
- **ukrPosts.city_type_name** `String` **_(обов'язково)_** - <p>Тип населеного пункту</p>
- **ukrPosts.street_name** `String` **_(обов'язково)_** - <p>Назва вулиці</p>
- **ukrPosts.street_type_name** `String` **_(обов'язково)_** - <p>Тип вулиці</p>
- **ukrPosts.short_street_type_name** `String` **_(обов'язково)_** - <p>Скорочений тип вулиці</p>
- **ukrPosts.old_street_name** `String` **_(обов'язково)_** - <p>Стара назва вулиці</p>
- **ukrPosts.street_type_id** `Integer` **_(обов'язково)_** - <p>ID типу вулиці</p>
- **ukrPosts.region_id** `Integer` **_(обов'язково)_** - <p>ID області</p>
- **ukrPosts.city_id** `Integer` **_(обов'язково)_** - <p>ID населеного пункту</p>
- **ukrPosts.street_id** `Integer` **_(обов'язково)_** - <p>ID вулиці</p>
- **ukrPosts.district_id** `Integer` **_(обов'язково)_** - <p>ID району</p>
- **ukrPosts.city_type_id** `Integer` **_(обов'язково)_** - <p>ID типу населеного пункту</p>
- **ukrPosts.postcode** `Integer` **_(обов'язково)_** - <p>індекс</p>
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
       "ukrPosts": [
           {
               "house_numbers": [
                   "1",
                   "2",
                   "3",
                   "4",
                   "5",
                   "6",
                   "7",
                   "8",
                   "9",
                   "10",
                   "11",
                   "12",
                   "14",
                   "16"
               ],
               "region_name": "Винницкая",
               "district_name": "Калиновский",
               "city_name": "Калиновка",
               "city_type_name": null,
               "street_name": "Вадима Нестерчука",
               "street_type_name": "переулок",
               "short_street_type_name": null,
               "old_street_name": "Дзержинського",
               "street_type_id": "4",
               "region_id": "1",
               "city_id": "825",
               "street_id": "293651",
               "district_id": "24",
               "city_type_id": "1",
               "postcode": "22400"
           },
           {
               "house_numbers": [
                   "1",
                   "3",
                   "3а"
               ],
               "region_name": "Винницкая",
               "district_name": "Калиновский",
               "city_name": "Калиновка",
               "city_type_name": null,
               "street_name": "Європейська",
               "street_type_name": "переулок",
               "short_street_type_name": null,
               "old_street_name": "Паризької Комуни",
               "street_type_id": "4",
               "region_id": "1",
               "city_id": "825",
               "street_id": "293207",
               "district_id": "24",
               "city_type_id": "1",
               "postcode": "22400"
           }
       ],
       "_meta": {
           "totalCount": 66,
           "pageCount": 7,
           "currentPage": 1,
           "perPage": 10
       }
   }
}
```

---

### 3.7 Отримання адреси відділення за індексом

**get** `/ukrposhta/get-postoffice-by-index`

<p>Отримання адреси відділення за індексом<br> Інформація доступна лише українською мовою</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **postcode** `Integer` **_(обов'язково)_** - <p>Індекс</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;: boolean, &quot;content&quot;: { &quot;ukrPosts&quot;: PostofficeAddress[], &quot;_meta&quot;: MetaResponse } }</p>
- **postcode** `Integer` **_(обов'язково)_** - <p>Індекс</p>
- **postoffice_title** `String` **_(обов'язково)_** - <p>Повна назва відділення</p>
- **postoffice_type** `String` **_(обов'язково)_** - <p>Тип відділення</p>
- **region_name** `String` **_(обов'язково)_** - <p>Область</p>
- **district_name** `String` **_(обов'язково)_** - <p>Район</p>
- **city_name** `String` **_(обов'язково)_** - <p>Місто (Населений пункт)</p>
- **city_type_name** `String` **_(обов'язково)_** - <p>Тип населеного пункту</p>
- **street_name** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **street_type_name** `String` **_(обов'язково)_** - <p>Тип вулиці</p>
- **house_number** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **address** `String` **_(обов'язково)_** - <p>Коротка адреса</p>
- **region_id** `Integer` **_(обов'язково)_** - <p>ID області в API Ukrposhta</p>
- **city_id** `Integer` **_(обов'язково)_** - <p>ID міста в API Ukrposhta</p>
- **street_id** `Integer` **_(обов'язково)_** - <p>ID вулиці в API Ukrposhta</p>
- **district_id** `Integer` **_(обов'язково)_** - <p>ID району в API Ukrposhta</p>
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
        "ukrPosts": [
            {
                "postcode": "49115",
                "postoffice_title": "Відділення поштового зв'язку № 115 м. Дніпро Дніпропетровської дирекції",
                "postoffice_type": "Міське відділення поштового зв'язку",
                "region_name": "Дніпропетровська",
                "district_name": "Дніпровський",
                "city_name": "Дніпро",
                "city_type_name": "місто",
                "street_name": "Гайова",
                "street_type_name": "вулиця",
                "house_number": "51",
                "address": "вул. Гайова, 51",
                "region_id": "264",
                "city_id": "3641",
                "street_id": "167084",
                "district_id": "301"
            }
        ],
        "_meta": {
            "totalCount": 1,
            "pageCount": 1,
            "currentPage": 1,
            "perPage": 10
        }
    }
}
```

---

### 2 Список ТТН

**get** `/ukrposhta/ttn-list`

<p>Отримання списку ТТН Ukrposhta</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **id** `Integer` _(опціонально)_ - <p>ID ТТН</p>
- **order_id** `Integer` _(опціонально)_ - <p>ID замовлення прикріпленого до ТТН</p>
- **ext_id** `String` _(опціонально)_ - <p>Зовнішній ID замовлення (в службі доставки)</p>
- **ttn** `String` _(опціонально)_ - <p>Номер ТТН</p>
- **receiver_fio** `String` _(опціонально)_ - <p>ПІБ одержувача</p>
- **delivery_status_id** `String` _(опціонально)_ - <p>ID статусу замовлення <i>Може приймати кілька значень через кому</i> <br>Приклад:<code>delivery_status_id=0,2</code></p>
- **has_group** `Number` _(опціонально)_ - <p>ТТН додана в групу відправлення <br><code>0 - не додана, 1- додана</code></p>
- **group_id** `String` _(опціонально)_ - <p>ID групи відправлення</p>
- **date_from** `String` _(опціонально)_ - <p>Від дати створення ТТН</p>
- **date_to** `String` _(опціонально)_ - <p>До дати створення ТТН</p>
- **sender_pickup_name** `String` _(опціонально)_ - <p>Назва відділеня відправки</p>
- **type** `String` _(опціонально)_ - <p>Тип ТТН</p>  <ul>         <li><b>EXPRESS</b></li>         <li><b>STANDARD</b></li>  </ul>
- **post_pay_by_recipient** `Boolean` _(опціонально)_ - <p>Хто має платити за комісію (1 – одержувач, 0 – відправник)</p>
- **expand** `String` _(опціонально)_ - <p>ExtraFields</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Accept-Validate-Exception** `Boolean` **_(обов'язково)_** - <p>Отримання помилок валідації в методах &quot;search&quot;<br> <i>Якщо немає необхідності отримувати помилки валідації - не передавайте цей хедер, або передавайте зі значенням 0(false)</p>

#### Успішна відповідь

- **ukrPosts** `DeliveryTtnModel[]` **_(обов'язково)_** - <p>Масив об'єктів ТТН</p>
- **DeliveryTtn.post_pay_deliver** `Integer` **_(обов'язково)_** - <p>Ознака яким чином отримати накладений платіж (null - без накладеного платіжу, 0 - готівкою, 1 - на розрахунковий рахунок (тільки для юр осіб), 2 - на картку)</p>
- **DeliveryTtn** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryTtn" class="nav-list-item">DeliveryTtnModel</a></b></p>
- **DeliveryTtn.id** `Integer` **_(обов'язково)_** - <p>ID ТТН</p>
- **DeliveryTtn.ext_id** `String` **_(обов'язково)_** - <p>ID замовлення в сервісі доставки</p>
- **DeliveryTtn.ttn** `String` **_(обов'язково)_** - <p>Номер ТТН в сервісі доставки</p>
- **DeliveryTtn.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс <code>*Важливо!</code> Поле не використовується, повертаємо null, незабаром приберемо його з відповіді.</p>
- **DeliveryTtn.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення до якого прив'язана ТТН</p>
- **DeliveryTtn.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **DeliveryTtn.delivery_service_pickup_id** `Integer` **_(обов'язково)_** - <p>ID точки доставки</p>
- **DeliveryTtn.receiver_fio** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **DeliveryTtn.declared_price** `Number` **_(обов'язково)_** - <p>Заявлена вартість товару</p>
- **DeliveryTtn.status_updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення статусу замовлення</p>
- **DeliveryTtn.delivery_price** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **DeliveryTtn.delivery_payer** `Integer` **_(обов'язково)_** - <p>Платник доставки:<br></p> <ul>      <li><b>0</b> - Відправник</li>      <li><b>1</b> - Одержувач</li>  </ul>
- **DeliveryTtn.payment_type** `Integer` **_(обов'язково)_** - <p>Тип платежу:<br></p>  <ul>         <li><b>0</b> - Готівкою</li>         <li><b>1</b> - Карта</li>  </ul>
- **DeliveryTtn.delivery_status_id** `String` **_(обов'язково)_** - <p>Id статусу доставки</p>
- **DeliveryTtn.delivery_address** `String` **_(обов'язково)_** - <p>Адреса доставки (кур'єром)</p>
- **DeliveryTtn.delivery_type** `Integer` **_(обов'язково)_** - <p>Тип доставки:<br></p> <ul>         <li><b>0</b> - На відділення</li>         <li><b>1</b> - На адресу</li>  </ul>
- **DeliveryTtn.oriented_delivery_date** `String` **_(обов'язково)_** - <p>Орієнтовна дата доставки</p>
- **DeliveryTtn.receiver_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **DeliveryTtn.comment** `String` **_(обов'язково)_** - <p>Коментар до ТТН</p>
- **DeliveryTtn.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису Дата створення ТТН</p>
- **DeliveryTtn.updated_at** `String` **_(обов'язково)_** - <p>Дата оновлення запису Дата оновлення ТТН</p>
- **DeliveryTtn.cod_amount** `Number` **_(обов'язково)_** - <p>Сума накладного платежу</p>
- **DeliveryTtn.free_delivery** `Boolean` **_(обов'язково)_** - <p>Ознака акційного тарифу доставки</p>
- **DeliveryTtn.sender_pickup_name** `String` **_(обов'язково)_** - <p>Адреса відділення відправлення ТТН</p>
- **DeliveryTtn.group_id** `Number` **_(обов'язково)_** - <p>ID групи ТТН</p>
- **DeliveryTtn.type** `String` **_(обов'язково)_** - <p>Тип ТТН</p> <ul>         <li><b>EXPRESS</b></li>         <li><b>STANDARD</b></li>  </ul>
- **DeliveryTtn.post_pay_commission** `Number` **_(обов'язково)_** - <p>Сума комісії за накладений платіж</p>
- **DeliveryTtn.post_pay_by_recipient** `Boolean` **_(обов'язково)_** - <p>Хто має платити за комісію (true – одержувач, false – відправник)</p>
- **UkrPostDeliveryTtnExtra.delivery_status_id** `Integer` **_(обов'язково)_** - <p>ID статусу відправлення</p>
**ExtraFields:**

- **DeliveryTtn.delivery_service_pickup** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-DeliveryServicePickupDetails" class="nav-list-item">DeliveryServicePickup</a></b> <i>(ExtraField)</i></p>
- **DeliveryTtn.delivery_status_title** `String` **_(обов'язково)_** - <p>Назва статусу доставки <i>(ExtraField)</i></p>
- **UkrPostDeliveryTtnExtra.shipment_group** `Object` **_(обов'язково)_** - <p>Група відправлення</p>
- **UkrPostDeliveryTtnExtra.ukrposhta_data** `Object` **_(обов'язково)_** - <p>Дані про посилку з API Укрпошти</p>
**Response Meta Fields:**

- **_meta** `Object` **_(обов'язково)_** - <p>Дані пагінації</p>
- **_meta.totalCount** `Integer` **_(обов'язково)_** - <p>Всього записів</p>
- **_meta.pageCount** `Integer` **_(обов'язково)_** - <p>Кількість сторінок</p>
- **_meta.currentPage** `Integer` **_(обов'язково)_** - <p>Поточна сторінка</p>
- **_meta.perPage** `Integer` **_(обов'язково)_** - <p>Кількість записів на сторінці</p>

#### Приклад відповіді

```json
{
     "success": true,
     "content": {
         "ukrPosts": [
             {
                 "id": 10,
                 "ext_id": "36971190-205a-42fd-a104-abd4d2c7f17e",
                 "ttn": "0000000708577",
                 "seller_id": 165,
                 "order_id": 12345,
                 "delivery_service_id": 2024,
                 "delivery_service_pickup_id": null,
                 "receiver_fio": "Петренко Отримувач",
                 "declared_price": null,
                 "status_updated_at": "2020-05-26 03:26:50",
                 "delivery_price": 43,
                 "delivery_payer": 1,
                 "payment_type": 0,
                 "delivery_status_id": "1",
                 "delivery_address": null,
                 "delivery_type": 1,
                 "oriented_delivery_date": "2020-05-30 00:00:00",
                 "receiver_phone": "+380677654321",
                 "comment": null,
                 "updated_at": "2020-05-26 03:26:57",
                 "created_at": "2020-05-26 03:26:57",
                 "cod_amount": 0,
                 "sender_pickup_name": "Україна, 04210, Київ, Київ (місто), Київ, Оболонська набережна 100, 100",
                 "group_id": null,
                 "type": "EXPRESS",
                 "shipment_group": {
                     "id": 1,
                     "name": "test",
                     "uuid": "e2cddd4c-****-****-****-f5f3f3bbece0",
                     "status": "new"
                 },
                 "post_pay_commission": "10.22",
                 "post_pay_deliver": 2,
                 "post_pay_by_recipient": false
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

```json
 HTTP/1.1 200 OK
{
 "success": true,
 "content": {
     "ukrPosts": [
         {
             "id": 10,
             "ext_id": "36971190-205a-42fd-a104-abd4d2c7f17e",
             "ttn": "0000000708577",
             "seller_id": 165,
             "order_id": 12345,
             "delivery_service_id": 2024,
             "delivery_service_pickup_id": null,
             "receiver_fio": "Петренко Отримувач",
             "declared_price": null,
             "status_updated_at": "2020-05-26 03:26:50",
             "delivery_price": 43,
             "delivery_payer": 1,
             "payment_type": 0,
             "delivery_status_id": "1",
             "delivery_address": null,
             "delivery_type": 1,
             "oriented_delivery_date": "2020-05-30 00:00:00",
             "receiver_phone": "+380677654321",
             "comment": null,
             "updated_at": "2020-05-26 03:26:57",
             "created_at": "2020-05-26 03:26:57",
             "cod_amount": 0,
             "sender_pickup_name": "Україна, 04210, Київ, Київ (місто), Київ, Оболонська набережна 100, 100"
             "ukrposhta_data": {
                 "uuid": "36971190-205a-42fd-a104-abd4d2c7f17e",
                 "type": "EXPRESS",
                 "sender": {
                     "uuid": "e703f824-01fd-47af-8e5a-5f8130faa782",
                     "name": "Петренко Відправник",
                     "firstName": "Відправник",
                     "middleName": null,
                     "lastName": "Петренко",
                     "latinName": null,
                     "postId": null,
                     "externalId": null,
                     "uniqueRegistrationNumber": null,
                     "counterpartyUuid": "2304bbe5-015c-44f6-a5bf-3e750d753a17",
                     "addressId": 2082555,
                     "addresses": [
                         {
                             "uuid": "2c431868-325a-460c-849d-882f80b405cd",
                             "addressId": 2082555,
                             "address": {
                                 "id": 2082555,
                                 "postcode": "04210",
                                 "region": "Київ",
                                 "district": null,
                                 "city": "Київ",
                                 "street": "Кирилівська",
                                 "houseNumber": "100",
                                 "apartmentNumber": "100",
                                 "description": null,
                                 "countryside": false,
                                 "foreignStreetHouseApartment": null,
                                 "detailedInfo": "Україна, 04210, Київ, Київ, Кирилівська 100, 100",
                                 "created": "2020-05-26T03:26:49",
                                 "lastModified": "2020-05-26T03:26:49",
                                 "country": "UA"
                             },
                             "type": "PHYSICAL",
                             "main": true
                         }
                     ],
                     "phoneNumber": "+380677654321",
                     "phones": [
                         {
                             "uuid": "77792bb1-a2ee-4d68-a04f-45df281b84dd",
                             "phoneId": 1354803,
                             "phoneNumber": "+380677654321",
                             "type": "PERSONAL",
                             "main": true
                         }
                     ],
                     "email": "",
                     "emails": [
                     ],
                     "type": "INDIVIDUAL",
                     "postPayPaymentType": "POSTPAY_PAYMENT_CASH_ONLY",
                     "bankAccount": null,
                     "contactPersonName": null,
                     "resident": true,
                     "GDPRRead": false,
                     "GDPRAccept": false,
                     "personalDataApproved": false,
                     "checkOnDeliveryAllowed": true
                 },
                 "dropOffPostcode": "04210",
                 "recipient": {
                     "uuid": "393fcd60-dd3c-461a-b2a9-7853cf255f99",
                     "name": "Петренко Отримувач",
                     "firstName": "Отримувач",
                     "middleName": null,
                     "lastName": "Петренко",
                     "latinName": null,
                     "postId": null,
                     "externalId": null,
                     "uniqueRegistrationNumber": null,
                     "counterpartyUuid": "2304bbe5-015c-44f6-a5bf-3e750d753a17",
                     "addressId": 2082556,
                     "addresses": [
                         {
                             "uuid": "c24f618f-143a-47e6-9075-d3d5eeb5fed7",
                             "addressId": 2082556,
                             "address": {
                                 "id": 2082556,
                                 "postcode": "12345",
                                 "region": "Житомирська",
                                 "district": "Київський",
                                 "city": "Троковичі",
                                 "street": "Котляревського",
                                 "houseNumber": "12",
                                 "apartmentNumber": "33",
                                 "description": null,
                                 "countryside": true,
                                 "foreignStreetHouseApartment": null,
                                 "detailedInfo": "Україна, 12345, Житомирська, Київський, Троковичі, Котляревського 12, 33",
                                 "created": "2020-05-26T03:26:49",
                                 "lastModified": "2020-05-26T03:26:49",
                                 "country": "UA"
                             },
                             "type": "PHYSICAL",
                             "main": true
                         }
                     ],
                     "phoneNumber": "+380677654321",
                     "phones": [
                         {
                             "uuid": "b7bb564c-dbe3-45f2-8999-934ce50eac88",
                             "phoneId": 1354803,
                             "phoneNumber": "+380677654321",
                             "type": "PERSONAL",
                             "main": true
                         }
                     ],
                     "email": "",
                     "emails": [
                     ],
                     "type": "INDIVIDUAL",
                     "postPayPaymentType": "POSTPAY_PAYMENT_CASH_ONLY",
                     "bankAccount": null,
                     "contactPersonName": null,
                     "resident": true,
                     "GDPRRead": false,
                     "GDPRAccept": false,
                     "personalDataApproved": false,
                     "checkOnDeliveryAllowed": true
                 },
                 "recipientPhone": "+380677654321",
                 "recipientEmail": null,
                 "recipientAddressId": 2082556,
                 "senderAddressId": 2082555,
                 "returnAddressId": 2082555,
                 "shipmentGroupUuid": null,
                 "externalId": null,
                 "deliveryType": "W2D",
                 "packageType": null,
                 "onFailReceiveType": "RETURN",
                 "barcode": "0000000708577",
                 "weight": 1200,
                 "length": 60,
                 "width": 0,
                 "height": 0,
                 "declaredPrice": null,
                 "deliveryPrice": 42.56,
                 "rawDeliveryPrice": 56,
                 "postPay": null,
                 "postPayUah": 0,
                 "postPayDeliveryPrice": 0,
                 "currencyCode": null,
                 "postPayCurrencyCode": null,
                 "currencyExchangeRate": null,
                 "discounts": [
                     {
                         "uuid": "f507fa8c-0425-46f3-bff1-c311e96e8d65",
                         "name": "За использование API 24%",
                         "fromDate": "2017-01-01",
                         "toDate": "2099-12-31",
                         "value": 24,
                         "category": "CONTRACT_DISCOUNT",
                         "type": "BASE"
                     }
                 ],
                 "lastModified": "2020-05-26T03:26:50",
                 "description": null,
                 "parcels": [
                     {
                         "uuid": "e186e13e-7d11-4ae3-b063-6d1af3e695da",
                         "name": null,
                         "parcelNumber": 1,
                         "barcode": "0000000708577",
                         "weight": 1200,
                         "length": 60,
                         "width": null,
                         "height": null,
                         "declaredPrice": null,
                         "parcelItems": [
                         ],
                         "description": null
                     }
                 ],
                 "direction": {
                     "regionSortingCenter": "Житомир",
                     "districtSortingCenter": null,
                     "postOfficeNumber": "12345",
                     "postOfficeName": "Черняхівський"
                 },
                 "lifecycle": {
                     "status": "CREATED",
                     "statusDate": "2020-05-26T03:26:50"
                 },
                 "deliveryDate": "2020-05-30T00:00:00",
                 "calculationDescription": "Price=42.56: price for the weight=0.00; tariff (EXPRESS, COUNTRY, 1200 g, 60 cm)=41.00; delivery type(W2D)=15.00; countryside=0.00; За использование API 24%=13.44",
                 "paidByRecipient": true,
                 "postPayPaidByRecipient": true,
                 "bulky": true,
                 "fragile": false,
                 "bees": false,
                 "recommended": false,
                 "sms": false,
                 "toReturnToSender": null,
                 "international": false,
                 "documentBack": false,
                 "checkOnDelivery": false,
                 "transferPostPayToBankAccount": false,
                 "deliveryPricePaid": false,
                 "postPayPaid": false,
                 "postPayDeliveryPricePaid": false,
                 "packedBySender": false,
                 "free": false,
                 "withDeliveryNotification": false
             }
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

### 4 Друк ТТН

**get** `/ukrposhta/ttn-print/sticker/{ttn}`

<p>Отримання інформації за індексом</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **ttn** `String` **_(обов'язково)_** - <p>номер ТТН для друку</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **File** `File` **_(обов'язково)_** - <p>Файл, прикріплений до повідомлення</p>

---

### 5 Отримання даних із замовлення

**get** `/ukrposhta/get-user-info/{orderId}`

<p>Отримання даних із замовлення для створення експрес накладної для Укрпошти</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **orderId** `Integer` **_(обов'язково)_** - <p>Номер замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

**Response Body Parameters:**

- **name** `String` **_(обов'язково)_** - <p>П.І.Б. отримувача</p>
- **phone** `String` **_(обов'язково)_** - <p>Номер телефону отримувача</p>
- **amount** `Number` **_(обов'язково)_** - <p>Сума замовлення</p>
- **items** `Object[]` **_(обов'язково)_** - <p>Список товарів з замовлення</p>
- **deliveryType** `String` **_(обов'язково)_** - <p>Тип доставки</p>
- **items.id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор товару</p>
- **items.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **postcode** `String` **_(обов'язково)_** - <p>Поштовий індекс</p>
- **country** `String` **_(обов'язково)_** - <p>Код країни доставки</p>
- **region** `String` **_(обов'язково)_** - <p>Назва області доставки</p>
- **district** `String` **_(обов'язково)_** - <p>Назва обласного району доставки</p>
- **city** `String` **_(обов'язково)_** - <p>Назва міста доставки</p>
- **street** `String` **_(обов'язково)_** - <p>Назва вулиці доставки</p>
- **streetData** `String` **_(обов'язково)_** - <p>Дані вулиці доставки</p>
- **streetData.name** `String` **_(обов'язково)_** - <p>Назва вулиці</p>
- **streetData.type** `String` **_(обов'язково)_** - <p>Тип вулиці</p>
- **streetData.short_type** `String` **_(обов'язково)_** - <p>Скорочений тип вулиці</p>
- **houseNumber** `String` **_(обов'язково)_** - <p>Номер будинку доставки</p>
- **apartmentNumber** `String` **_(обов'язково)_** - <p>Номер квартири доставки</p>
- **isReturnMoneyCost** `Boolean` **_(обов'язково)_** - <p>Ознака, чи включено зворотню доставку коштів</p>
- **delivery_commission_info** `Object` **_(обов'язково)_** - <p>Об'єкт з данними про комісію за накладений платіж для Укрпошти</p>
- **delivery_commission_info.percentage_commission** `Number` **_(обов'язково)_** - <p>Комісія за оплату при отриманні у відсотках для Укрпошти</p>
- **delivery_commission_info.absolute_commission** `Number` **_(обов'язково)_** - <p>Фіксована комісія за оплату при отриманні для Укрпошти</p>
- **delivery_commission_info.calculated_commission** `Number` **_(обов'язково)_** - <p>Розрахована комісія за оплату для Укрпошти</p>

#### Приклад відповіді

```json
{
    "success": boolean,
    "content": {
        "name": "Вася Пупкін",
        "phone": "380999999999",
        "amount": "200.00",
        "items": [
            {
                "id": 66666666,
                "name": "Тестовий товар"
            }
        ],
        "deliveryType": "W2W",
        "postcode": "88888",
        "country": "UA",
        "region": "Закарпатська",
        "district": "Ужгородський",
        "city": "Ужгород",
        "street": "Кирила і Мефодія",
        "streetData": {
            "name": "Кирила і Мефодія",
            "type": "вулиця",
            "short_type": "вул."
        },
        "houseNumber": "99",
        "apartmentNumber": "100"
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

### 2.1 Отримання даних для фільтрів ТТН

**get** `/ukrposhta/search-data`

<p>Отримання даних для фільтрів ТТН</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **ttn_groups** `Array` **_(обов'язково)_** - <p>Групи ТТН</p>
- **ttn_groups.id** `String` **_(обов'язково)_** - <p>ID групи ТТН</p>
- **ttn_groups.name** `String` **_(обов'язково)_** - <p>Назва групи ТТН</p>
- **ttn_statuses** `Array` **_(обов'язково)_** - <p>Статуси ТТН</p>
- **ttn_statuses.id** `String` **_(обов'язково)_** - <p>ID статуса ТТН</p>
- **ttn_statuses.name** `String` **_(обов'язково)_** - <p>Назва статуса ТТН</p>
- **ttn_types** `Array` **_(обов'язково)_** - <p>Типи ТТН</p>  <ul>         <li><b>EXPRESS</b></li>         <li><b>STANDARD</b></li>  </ul>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
  "success": true,
  "content": {
      "ttn_groups": [
          {
              "id": 70,
              "name": "Назва групи ТТН"
          }
      ],
      "ttn_statuses": [
          {
              "id": "1",
              "name": "Створено"
          },
          {
              "id": "2",
              "name": "Зареєстровано"
          }
      ],
      "ttn_types": [
          "EXPRESS",
          "STANDARD"
      ]
  }
}
```

---

### 6.6  Збереження додаткових дефолтних налаштувань для ТТН Укрпошти

**put** `/ukrposhta/change-setting-flags`

<p>Збереження додаткових дефолтних налаштувань для ТТН Укрпошти</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **is_add_cost** `Boolean` **_(обов'язково)_** - <p>Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_items** `Boolean` **_(обов'язково)_** - <p>Додавати дані про товар в ТТН з замовлення</p>
- **is_add_order** `Boolean` **_(обов'язково)_** - <p>Додавати номер замовлення в ТТН з замовлення</p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

**Response Body Parameters:**

- **id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **selected_sender** `Object` **_(обов'язково)_** - <p>Обраний відправник <br><b><a href="#api-Models-UkrPostClient">UkrPostClientModel</a></b></p>
- **selected_cargo** `Object` **_(обов'язково)_** - <p>Обраний вантаж <br><b><a href="#api-Models-UkrPostParcel">UkrPostParcelModel</a></b></p>
- **count** `Integer` **_(обов'язково)_** - <p>Кількість успішно створених ТТН</p>
- **is_add_cost** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Додавати вартість замовлення в &quot;Оголошена вартість&quot; в ТТН з замовлення</p>
- **is_add_order** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати id замовлення в ТТН з замовлення</p>
- **is_add_items** `Boolean|Null` **_(обов'язково)_** - <p>Прапор. Чи потрібно передавати назви і id товарів з замовлення</p>
- **delivery_service_id** `Integer` **_(обов'язково)_** - <p>Id служби доставки</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
 "success": true,
 "content": {
        "id": 321,
        "selected_sender": {
            "type": "INDIVIDUAL",
            "address": {
                "city": "Київ",
                "region": "Київська",
                "street": "Кирилівська",
                "country": "UA",
                "postcode": "04210",
                "houseNumber": "100",
                "apartmentNumber": "100"
            },
            "lastName": "Петренко",
            "firstName": "Відправник",
            "phoneNumber": "380677654321"
        },
        "selected_cargo": {
             "weight": "1200",
             "length": "170",
             "height": "170",
             "width": "170",
             "description":"Товары для дома",
        },
        "count": 0,
        "is_add_cost": true,
        "is_add_order": true,
        "is_add_items": true,
        "delivery_service_id": 5282
    }
}
```

---

### 6.4 Оновлення предзаповнених налаштувань посилки для ТТН

**put** `/v1/ukrposhta/selected-cargo`

<p>Оновлення предзаповнених налаштувань посилки для ТТН</p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **type** `String` _(опціонально)_ - <p>Тип відправлення <br><code>EXPRESS</code> або <code>STANDARD</code></p>
- **description** `String` _(опціонально)_ - <p>Опис</p>
- **parcels** `Array` _(опціонально)_ - <p>Масив об'єктів посилок в відправленні</p>
- **parcels.weight** `Integer` _(опціонально)_ - <p>Вага посилки, г (грам) <br>Приклад: <code>1100</code> <br>*<sup>При виборі типу доставки <code>W2D</code> (Кур'єр), обмеження по вазі посилки <code>max 2 кг</code></sup></p>
- **parcels.length** `Integer` _(опціонально)_ - <p>Довжина посилки, см <br>Приклад: <code>100</code> <br>*<sup>При виборі типу доставки <code>W2D</code> (Кур'єр), обмеження по габаритах посилки <code>max 70 см</code></sup></p>
- **parcels.height** `Integer` _(опціонально)_ - <p>Висота посилки, см <br>Приклад: <code>100</code></p>
- **parcels.width** `Integer` _(опціонально)_ - <p>Ширина посилки, см <br>Приклад: <code>100</code></p>
- **parcels.description** `String` _(опціонально)_ - <p>Опис посилки <br><code>maxLength: 1024</code></p>
- **parcels.declaredPrice** `Integer` _(опціонально)_ - <p>Оголошена вартість відправлення <br>Приклад: <code>100</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **UkrPostParcelModel**  **_(обов'язково)_** - <p>Обраний вантаж <br><b><a href="#api-Models-UkrPostParcel">UkrPostParcelModel</a></b></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
  "type": "STANDARD",
  "parcels":
  [
      {
          "weight":7000,
          "description":"Товари для дому",
          "declaredPrice": 127,
          "length": 752,
          "height": 170,
          "width": 170,
      },
      {
          "weight":5000,
          "description":"Товари для офіса",
          "declaredPrice": 127,
          "length": 752,
          "height": 170,
          "width": 172,
      }
  ]
}
```

---

### 6.4 Оновлення предзаповнених налаштувань посилки для ТТН

**put** `/ukrposhta/selected-cargo`

<p>Оновлення предзаповнених налаштувань посилки для ТТН</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **weight** `Integer` _(опціонально)_ - <p>Вага посилки, г (грам) <br>Приклад: <code>1100</code> <br>*<sup>При виборі типу доставки <code>W2D</code> (Кур'єр), обмеження по вазі посилки <code>max 2 кг</code></sup></p>
- **length** `Integer` _(опціонально)_ - <p>Довжина посилки, см <br>Приклад: <code>100</code> <br>*<sup>При виборі типу доставки <code>W2D</code> (Кур'єр), обмеження по габаритах посилки <code>max 70 см</code></sup></p>
- **height** `Integer` _(опціонально)_ - <p>Висота посилки, см <br>Приклад: <code>100</code></p>
- **width** `Integer` _(опціонально)_ - <p>Ширина посилки, см <br>Приклад: <code>100</code></p>
- **description** `String` _(опціонально)_ - <p>Опис посилки <br><code>maxLength: 1024</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **UkrPostParcelModel**  **_(обов'язково)_** - <p>Обраний вантаж <br><b><a href="#api-Models-UkrPostParcel">UkrPostParcelModel</a></b></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
         "weight": "1200",
         "length": "170",
         "height": "170",
         "width": "170",
         "description":"Товары для дома"
     }
}
```

---

### 6.2 Створення предзаповнених налаштувань відправника для ТТН

**put** `/ukrposhta/selected-sender`

<p>Створення та оновлення предзаповнених налаштувань відправника для ТТН</p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **default_type** `Integer` _(опціонально)_ - <p>Тип відправника за замовчуванням<br></p> <ul>     <li>0 - фіз.особа</li>     <li>1 - юр.особа</li> </ul> При заповненні поля значенням 1 необхідно заповнити <code>sender_id</code>
- **UkrPostClientModel.sender_id** `Integer` _(опціонально)_ - <p>ID створеного відправника<b>*</b><br> <sup>*Можна відправляти цей параметр для Юр. осіб замість полей <code>type, phoneNumber, email, name, bankAccount, edrpou, tin</code></sup> <br> ID отримуємо зі <a href="#api-Ukrposhta-GetUkrposhtaSenders">Списка відправників</a></p>
- **UkrPostClientModel.type** `String` **_(обов'язково)_** - <p>Тип одержувача/відправника <br> <ul> <li><b>INDIVIDUAL</b> - Фіз особа</li> <li><b>COMPANY</b> - Компанія</li> <li><b>PRIVATE_ENTREPRENEUR</b> - ФОП</li> </ul></p>
- **UkrPostClientModel.phoneNumber** `String` **_(обов'язково)_** - <p>Телефон одержувача/відправника<br> <br>Приклади: <code>&quot;380939999999&quot;</code>, <code>&quot;0931231234&quot;</code></p>
- **UkrPostClientModel.address** `String` **_(обов'язково)_** - <p><a href=#api-Models-UkrPostAddress>Адреса одержувача/відправника</a><br></p>
- **UkrPostClientModel.email** `String` _(опціонально)_ - <p>E-mail клієнта/компанії <br>Приклад: <code>test@test.com</code></p>
- **UkrPostClientModel.firstName** `String` _(опціонально)_ - <p>Ім'я одержувача/відправника<b>*</b> <br> <sup>*Обов'язково заповнити при виборі типу <code>INDIVIDUAL, PRIVATE_ENTREPRENEUR</code></sup></p>
- **UkrPostClientModel.lastName** `String` _(опціонально)_ - <p>Прізвище одержувача/відправника<b>*</b> <br> <sup>*Обов'язково заповнити при виборі типу <code>INDIVIDUAL, PRIVATE_ENTREPRENEUR</code></sup></p>
- **UkrPostClientModel.middleName** `String` _(опціонально)_ - <p>По батькові одержувача/відправника</p>
- **UkrPostClientModel.name** `String` _(опціонально)_ - <p>Назва компанії<b>**</b> <br> <sup>**Обов'язково заповнити при виборі типу <code>COMPANY, PRIVATE_ENTREPRENEUR</code></sup> <br>Приклад: <code>ТОВ Лімон Банк</code></p>
- **UkrPostClientModel.uniqueRegistrationNumber** `String` _(опціонально)_ - <p>Унікальний номер реєстрації<b>**</b> <br> <br>Приклад: <code>0035</code></p>
- **UkrPostClientModel.bankAccount** `String` _(опціонально)_ - <p>Чековий рахунок, обов'язковий для юридичних осіб<b>**</b> <br> <br>Приклад: <code>UA073808050000000026000439806</code></p>
- **UkrPostClientModel.resident** `Boolean` _(опціонально)_ - <p>Резидент<b>**</b> <br> <br>Приклад: <code>true</code></p>
- **UkrPostClientModel.edrpou** `String` _(опціонально)_ - <p>EDRPOU клієнта<b>**</b> <br> <sup>**Обов'язково заповнити при виборі типу <code>COMPANY</code></sup> <br>Приклад: <code>40#####1</code></p>
- **UkrPostClientModel.tin** `String` _(опціонально)_ - <p>ІНН клієнта<b>**</b> <br> <sup>**Обов'язково заповнити при виборі типу <code>PRIVATE_ENTREPRENEUR</code></sup> <br>Приклад: <code>40#######1</code></p>

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>
- **Content-Type** `String` **_(обов'язково)_** - <p>application/json</p>

#### Успішна відповідь

- **UkrPostClientModel**  **_(обов'язково)_** - <p>Обраний відправник <br><b><a href="#api-Models-UkrPostClient">UkrPostClientModel</a></b></p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "type": "INDIVIDUAL",
        "address": {
            "city": "Київ",
            "region": "Київська",
            "street": "Кирилівська",
            "country": "UA",
            "postcode": "04210",
            "houseNumber": "100",
            "apartmentNumber": "100"
        },
        "lastName": "Петренко",
        "firstName": "Відправник",
       "middleName": "Відправник",
        "resident": null,
        "phoneNumber": "380677654321",
        "uniqueRegistrationNumber": "123123",
        "sender_id":null,
        "default_type":0
        }
    }
}
```

---

