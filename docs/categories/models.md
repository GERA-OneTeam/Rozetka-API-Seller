# Models

### Інформація про агента [AgentInfo]

**** `/`

<p>Опис полів в моделі AgentModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Agent** `Object` **_(обов'язково)_** - <p>AgentModel</p>
- **Agent.id** `Integer` **_(обов'язково)_** - <p>ID юр. особи</p>
- **Agent.title** `String` **_(обов'язково)_** - <p>Назва юр. особи</p>
- **Agent.percent** `Integer` **_(обов'язково)_** - <p>Відсоток</p>
- **Agent.status** `Integer` **_(обов'язково)_** - <p>Статус</p>
- **Agent.type** `Integer` **_(обов'язково)_** - <p>Тип юр. особи</p>
- **Agent.okpo** `String` **_(обов'язково)_** - <p>ЄДРПОУ</p>
- **Agent.inn** `String` **_(обов'язково)_** - <p>ІПН</p>
- **Agent.juridical_address** `String` **_(обов'язково)_** - <p>Юридична адреса</p>
- **Agent.physical_address** `String` **_(обов'язково)_** - <p>Адреса для кореспонденції</p>
- **Agent.mfo** `String` **_(обов'язково)_** - <p>МФО</p>
- **Agent.score** `String` **_(обов'язково)_** - <p>р/р</p>
- **Agent.bank_name** `String` **_(обов'язково)_** - <p>Назва банку</p>
- **Agent.agent_agreement_number** `String` **_(обов'язково)_** - <p>Номер агентського договору</p>
- **Agent.agent_agreement_date** `Date` **_(обов'язково)_** - <p>Дата укладення договору</p>
- **Agent.created** `Date` **_(обов'язково)_** - <p>Created</p>

---

### Права і ролі користувачів [ApiPermissionsInfo]

**** `/`

<p>Опис існуючих доступів і ролей</p>

**Версія:** 0.0.0

#### Успішна відповідь

**Permissions:**

- **order_edit** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Замовлення&quot;</p>
- **correspondence** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Моя переписка&quot;</p>
- **questions** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Відгуки/Питання про товари&quot;</p>
- **account_edit** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Налаштування облікового запису&quot;</p>
- **goods_active** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Активні Товари&quot;</p>
- **goods_not_active** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Неактивні Товари&quot;</p>
- **goods_synchronization** `String` **_(обов'язково)_** - <p>Доступ до &quot;Налаштування синхронізації&quot;</p>
- **balance** `String` **_(обов'язково)_** - <p>Доступ до розділу &quot;Баланс&quot;</p>
- **market_requisite_read_only** `String` **_(обов'язково)_** - <p>Дані власника рахунку</p>
- **market_requisite_edit** `String` **_(обов'язково)_** - <p>Доступ до редагування реквізитів магазину</p>
- **sellers_edit** `String` **_(обов'язково)_** - <p>Доступ до редагування списку користувачів</p>
- **owner** `String` **_(обов'язково)_** - <p>Права тільки для власника магазину</p>
- **phone_add** `String` **_(обов'язково)_** - <p>Додавання нового телефону</p>
- **open_dashboard** `String` **_(обов'язково)_** - <p>Доступ до вкладки дешборда</p>
- **open_advertising** `String` **_(обов'язково)_** - <p>Доступ до вкладки реклами</p>
- **goods_manual_management** `String` **_(обов'язково)_** - <p>Доступ до створення і редагування товарів</p>
- **good_create** `String` **_(обов'язково)_** - <p>Доступ до створення і редагування товарів</p>
- **goods_price_management** `String` **_(обов'язково)_** - <p>Доступ до завантаження товарів зі списку</p>
- **seller_confirm_phone** `String` **_(обов'язково)_** - <p>Доступ для підтвердження телефону</p>
- **open_kits** `String` **_(обов'язково)_** - <p>Доступ до вкладки комплекти</p>
**Roles:**

- **default_owner** `String` **_(обов'язково)_** - <p>Власник</p>
- **default_admin** `String` **_(обов'язково)_** - <p>Адміністратор</p>
- **default_orders** `String` **_(обов'язково)_** - <p>Менеджер по обробці замовлень</p>
- **default_content** `String` **_(обов'язково)_** - <p>Контент менеджер</p>
- **default_finance** `String` **_(обов'язково)_** - <p>Менеджер по фінансам</p>
- **default_owner_c2c** `String` **_(обов'язково)_** - <p>Власник c2c</p>

---

### Дані про баланс логістики [BalanceLogisticData]

**** `/`

<p>Опис полів у BalanceLogisticData <br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **BalanceLogisticData** `Object` **_(обов'язково)_** - <p>Дані про баланс логістики</p>
- **BalanceLogisticData.logistic_status** `String` **_(обов'язково)_** - <p>Статус у білінгу логістики</p>
- **BalanceLogisticData.logistic_autoblock_date_negative_balance** `String` **_(обов'язково)_** - <p>Дата негативного балансу</p>
- **BalanceLogisticData.logistic_autoblock_days** `Integer` **_(обов'язково)_** - <p>Кількість днів перед блокуванням (всього)</p>
- **BalanceLogisticData.count_days_to_block** `Integer` **_(обов'язково)_** - <p>Залишилось днів до блокування</p>

#### Приклад відповіді

```json
{
         "logistic_status": "active",
         "logistic_autoblock_date_negative_balance":"2024.03.01",
         "logistic_autoblock_days":7,
         "count_days_to_block":4
}
```

---

### Транзакції [BillingLogUserBalance]

**** `/`

<p>Опис полів в моделі BillingLogUserBalance <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

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

---

### Cargo [Nova Poshta]

**** `/`

<p>Параметри обраної посилки <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **CargoType** `String` **_(обов'язково)_** - <p>Тип вантажу</p> <ul>     <li><i>Cargo</i> - "Вантаж"</ li>     <li><i>Documents</i> - "Документи"</li>     <li><i>Parcel</i> - "Посилка"</li> </ul>
- **Description** `String` **_(обов'язково)_** - <p>Опис вантажу</p>
- **Weight** `String` **_(обов'язково)_** - <p>Вага в кг</p>
- **Width** `Integer` **_(обов'язково)_** - <p>Загальна ширина вантажу см</p>
- **Height** `Integer` **_(обов'язково)_** - <p>Загальна висота вантажу в см</p>
- **Length** `Integer` **_(обов'язково)_** - <p>Загальна довжина вантажу в см</p>
- **SeatsAmount** `Integer` **_(обов'язково)_** - <p>Кількість місць*<br></p>
- **VolumeGeneral** `String` **_(обов'язково)_** - <p>Об'єм загальний, м.куб*<br></p>
- **VolumeWeight** `String` **_(обов'язково)_** - <p>Об'ємна вага<br></p>
- **Cost** `Float` **_(обов'язково)_** - <p>Оголошена вартість, грн</p>
- **OptionsSeat** `Object[]` **_(обов'язково)_** - <p>Параметри посилки для кожного місця відправлення</p>
- **OptionsSeat.volumetricVolume** `Integer` **_(обов'язково)_** - <p>Об'єм одного місця, см</p>
- **OptionsSeat.volumetricWidth** `Integer` **_(обов'язково)_** - <p>Ширина одного місця, см</p>
- **OptionsSeat.volumetricLength** `Integer` **_(обов'язково)_** - <p>Довжина одного місця, см</p>
- **OptionsSeat.volumetricHeight** `Integer` **_(обов'язково)_** - <p>Висота одного місця, см</p>
- **OptionsSeat.weight** `Integer` **_(обов'язково)_** - <p>Вага одного місця, кг</p>

---

### Каталог категорій [CatalogCategory]

**** `/`

<p>Опис полів каталогу категорій <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **CatalogCategory** `Object` **_(обов'язково)_** - <p>CatalogCategoryModel</p>
- **catalog_category.category_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **catalog_category.name** `String` **_(обов'язково)_** - <p>Назва категорії</p>
- **catalog_category.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнської категорії</p>

---

### Прикріплені файли [ChatAttachments]

**** `/`

<p>Опис полів в моделі ChatAttachments <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **chatAttachments** `Object` **_(обов'язково)_** - <p>ChatAttachments</p>
- **chatAttachments.id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chatAttachments.name** `String` **_(обов'язково)_** - <p>Назва файлу</p>
- **chatAttachments.size** `Integer` **_(обов'язково)_** - <p>Розмір файлу в байтах</p>
- **chatAttachments.chat_message_id** `Integer` **_(обов'язково)_** - <p>ID повідомлення, до якого прикріплений файл</p>
- **chatAttachments.chat_id** `Integer` **_(обов'язково)_** - <p>ID чату</p>
- **chatAttachments.typeName** `String` **_(обов'язково)_** - <p>Назва типу файлу</p>

---

### Переписка [Chat]

**** `/`

<p>Опис полів в моделі Chat <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Chat** `Object` **_(обов'язково)_** - <p>ChatModel</p>
- **chat.id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat.created** `String` **_(обов'язково)_** - <p>Дата і час створення переписки</p>
- **chat.updated** `String` **_(обов'язково)_** - <p>Дата й час останнього повідомлення переписки</p>
- **chat.subject** `String` **_(обов'язково)_** - <p>Тема переписки</p>
- **chat.user** `Object` **_(обов'язково)_** - <p>Користувач чату, <b><a href="#api-Models-UserDetails">User</a></p>
- **chat.read_market** `String` **_(обов'язково)_** - <p>Дата і час прочитання повідомлення продавцем</p>
- **chat.trash_market** `Number` **_(обов'язково)_** - <p>Чат перенесено в кошик продавцем</p>
- **chat.star_market** `Number` **_(обов'язково)_** - <p>Прапор, позначає важливість чату у продавця</p>
- **chat.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення, якщо чат створений в рамках замовлення</p>
- **chat.type** `Number` **_(обов'язково)_** - <p>Тип чату (0 - замовлення, 1 - питання про товар, 2 - запитання продавцеві)</p>
- **chat.item_id** `Integer` **_(обов'язково)_** - <p>ID товару, якщо чат створений по товару</p>
- **chat.user_id** `Integer` **_(обов'язково)_** - <p>ID користувача (покупця)</p>
- **chats.unread_messages_count** `Integer` **_(обов'язково)_** - <p>Кількість непрочитаних повідомлень від покупця в чаті</p>

---

### Повідомлення переписки [ChatMessage]

**** `/`

<p>Опис полів в моделі ChatMessage <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **ChatMessage** `Object` **_(обов'язково)_** - <p>ChatMessage</p>
- **chat_messages.id** `Integer` **_(обов'язково)_** - <p>ID повідомлення</p>
- **chat_messages.chat_id** `Integer` **_(обов'язково)_** - <p>ID переписки</p>
- **chat_messages.body** `Text` **_(обов'язково)_** - <p>Текст повідомлення</p>
- **chat_messages.created** `String` **_(обов'язково)_** - <p>Дата і час створення повідомлення</p>
- **chat_messages.read** `String` **_(обов'язково)_** - <p>Дата і час прочитання повідомлення отримувачем</p>
- **chat_messages.sender** `Number` **_(обов'язково)_** - <p>Відправник<br> <a href="#api-Messages">Детальніше...</a></p>
- **chat_messages.seller** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerDetails">SellerModel</a></b>, менеджер магазину</p>
- **chat_messages.seller_id** `String` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **chat_messages.files** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-ChatAttachments">ChatAttachmentsModel</a></b>[]. Всі файли в повідомленні</p>
- **chat_messages.status** `Integer` **_(обов'язково)_** - <p>Статус модерації повідомлення <ul></p> <li>0 - Новий</li> <li>1 - На модерації</li> <li>2 - Заблокований модератором</li> <li>3 - Пройшов модерацію</li> <li>4 - Автоблокування</li> <li>5 - Автоматично пройшов модерацію</li> </ul>

---

### Дані про замовлення для чату [ChatOrderModel]

**** `/`

<p>Опис полів в замовленні <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.3

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **created** `String` **_(обов'язково)_** - <p>Дата створення</p>
- **amount** `String` **_(обов'язково)_** - <p>Сума товарів у замовленні</p>
- **amount_with_discount** `String` **_(обов'язково)_** - <p>Сума товарів у замовленні (зі знижкою)</p>
- **cost_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення (зі знижкою)</p>
- **total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів у замовленні</p>
- **is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Замовлення фулфілмент</p>
- **status** `Integer` **_(обов'язково)_** - <p>Статус замовлення</p>
- **status_data** `Object` **_(обов'язково)_** - <p>Дані про статус замовлення, <b><a href="#api-Models-OrderStatusDetails">OrderStatusDetails</a></b></p>

---

### Дочірній коментар [ItemComments]

**** `/`

<p>Опис полів у моделі ChildItemComment <br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **ChildItemComment.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **ChildItemComment.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **ChildItemComment.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **ChildItemComment.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **ChildItemComment.is_market** `Number` **_(обов'язково)_** - <p>Ознака коментаря (0 - від покупця, 1 - від продавця)</p>
- **ChildItemComment.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **ChildItemComment.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>

---

### Комбінації доставки [DeliveryCombination]

**** `/`

<p>Опис полів в моделі DeliveryCombination <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **DeliveryCombination** `Object` **_(обов'язково)_** - <p>DeliveryCombinationModel</p>
- **DeliveryCombination.id** `Integer` **_(обов'язково)_** - <p>ID комбінації</p>
- **DeliveryCombination.title** `String` **_(обов'язково)_** - <p>Заголовок комбінації</p>
- **DeliveryCombination.rz_id** `Integer` **_(обов'язково)_** - <p>Внутрішній ID в системі Розетки</p>
- **DeliveryCombination.service_delivery_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **DeliveryCombination.method_delivery_id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **DeliveryCombination.sla_id** `Integer` **_(обов'язково)_** - <p>ID набору доставки, до якого прив'язана комбінація</p>
- **DeliveryCombination.status** `Integer` **_(обов'язково)_** - <p>Статус</p> <ul>  <li>1 - Активний</li>  <li>0 - Заблокований</li> </ul>
- **DeliveryCombination.can_edit** `Integer` **_(обов'язково)_** - <p>Прапор, який відповідає за те, чи можна редагувати комбінацію</p>

---

### Методи оплати в комбінаціях доставки [DeliveryCombinationPaymentMethod]

**** `/`

<p>Опис полів в моделі DeliveryCombinationPaymentMethod <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **DeliveryCombinationPaymentMethod** `Object` **_(обов'язково)_** - <p>Model</p>
- **DeliveryCombinationPaymentMethod.delivery_combination_id** `Integer` **_(обов'язково)_** - <p>ID комбінації доставки</p>
- **DeliveryCombinationPaymentMethod.payment_method_id** `Integer` **_(обов'язково)_** - <p>ID методу оплати</p>
- **DeliveryCombinationPaymentMethod.status** `Integer` **_(обов'язково)_** - <p>Статус методу оплати</p>

---

### Служба доставки замовлення [Delivery]

**** `/`

<p>Опис полів в моделі Delivery <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Delivery** `Object` **_(обов'язково)_** - <p>DeliveryModel</p>
- **delivery.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **delivery.delivery_service_name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **delivery.recipient_title** `String` **_(обов'язково)_** - <p>ПІБ одержувача</p>
- **delivery.recipient_first_name** `String` **_(обов'язково)_** - <p>Ім'я одержувача</p>
- **delivery.recipient_last_name** `String` **_(обов'язково)_** - <p>Прізвище одержувача</p>
- **delivery.recipient_second_name** `String` **_(обов'язково)_** - <p>По батькові одержувача</p>
- **delivery.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача</p>
- **delivery.another_recipient** `Boolean` **_(обов'язково)_** - <p>Прапор, який відповідає за те, що в замовленні покупець і одержувач відрізняються</p>
- **delivery.delivery_method_id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **delivery.place_id** `Integer` **_(обов'язково)_** - <p>ID адреси доставки</p>
- **delivery.pickup_rz_id** `String` **_(обов'язково)_** - <p>ID адреси доставки в системі Розетка</p>
- **delivery.pickup_type** `Integer|Null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **delivery.place_street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **delivery.place_number** `String` **_(обов'язково)_** - <p>Номер відділення служби доставки</p>
- **delivery.place_house** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **delivery.place_flat** `String` **_(обов'язково)_** - <p>Номер квартири</p>
- **delivery.cost** `Number` **_(обов'язково)_** - <p>Вартість доставки</p>
- **delivery.city** `Object` **_(обов'язково)_** - <p>Locality, Населений пункт</p>
- **delivery.ref_id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор адреси точки видачі в НП.</p>
- **delivery.name_logo** `Integer` **_(обов'язково)_** - <p>Назва лого служби доставки транслітом.</p>
- **delivery.street_directory_id** `Number` **_(обов'язково)_** - <p>Id вулиці</p>
- **delivery.street_id** `Number` **_(обов'язково)_** - <p>Id вулиці</p>
- **delivery.email** `String` **_(обов'язково)_** - <p>email одержувача</p>
- **delivery.reserve_date** `String` **_(обов'язково)_** - <p>Дата резерву</p>
- **delivery.delivery_date** `String` **_(обов'язково)_** - <p>Дата доставки</p>

---

### [Створення замовлення] Обрана доставка

**** `/`

<p>Опис полів доставки в новому замовленні <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **locality_id** `Integer` **_(обов'язково)_** - <p>ID міста</p>
- **service_id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **method_id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **pickup_id** `Integer` _(опціонально)_ - <p>ID пункту самовивозу <br></p> <ul> <li><code>Обов'язкове поле</code> при виборі методу доставки <code>1 - Самовивіз</code></li> </ul>
- **pickup_title** `String` _(опціонально)_ - <p>Назва пункту самовивозу</p>
- **street_id** `Integer` _(опціонально)_ - <p>ID вулиці <br></p> <ul> <li><code>Обов'язкове поле</code> при виборі методу доставки <code>2 - Кур'єр</code></li> </ul>
- **street_title** `String` _(опціонально)_ - <p>Назва вулиці <br></p> <ul> <li><code>Обов'язкове поле</code> при виборі методу доставки <code>2 - Кур'єр</code></li> </ul>
- **house** `String` _(опціонально)_ - <p>Номер будинку <br></p> <ul> <li><code>Обов'язкове поле</code> при виборі методу доставки <code>2 - Кур'єр</code></li> </ul>
- **flat** `String` _(опціонально)_ - <p>Номер квартири <br></p>
- **delivery_window** `String` _(опціонально)_ - <p>Час доставки <br></p> <ul> <li><code>Обов'язкове поле</code> при виборі методу доставки <code>2 - Кур'єр</code> <br> Формат заповнення: <code> &quot;2020-05-16 10: 00: 00-2020-05-16 16:00:00&quot; &lt;/ code&gt;</li> </ul>

---

### [Створення замовлення] Метод доставки

**** `/`

<p>Опис полів методу доставки при створенні замовлення <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID методу доставки</p>
- **name** `String` **_(обов'язково)_** - <p>Ключ методу доставки</p>
- **needAddress** `Boolean` **_(обов'язково)_** - <p>Ознака: чи потрібно вводити адресу</p>
- **title** `String` **_(обов'язково)_** - <p>Назва методу доставки</p>
- **active** `Boolean` **_(обов'язково)_** - <p>Ознака: чи обраний даний метод для поточного замовлення</p>

---

### [Створення замовлення] Сервіс доставки

**** `/`

<p>Опис полів сервісу доставки при створенні замовлення <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **title** `String` **_(обов'язково)_** - <p>Назва сервісу доставки</p>
- **active** `Boolean` **_(обов'язково)_** - <p>Ознака: обраний даний сервіс для поточного замовлення</p>
- **pickups** `PickupCO[]` **_(обов'язково)_** - <p><a href="#api-Models-PickupCO">Пункти самовивозу</a></p>

---

### Точки доставки [DeliveryServiceCourier]

**** `/`

<p>Опис полів в моделі DeliveryServiceCourier <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **DeliveryServiceCourier** `Object` **_(обов'язково)_** - <p>Model</p>
- **model.id** `Integer` **_(обов'язково)_** - <p>ID служби самовивозу</p>
- **model.status** `Number` **_(обов'язково)_** - <p>Статус</p>
- **model.title** `String` **_(обов'язково)_** - <p>Назва</p>
- **model.locality_id** `Number` **_(обов'язково)_** - <p>ID місця доставки</p>
- **model.delivery_service_id** `Number` **_(обов'язково)_** - <p>ID служби доставки</p>
- **model.can_edit** `Boolean` **_(обов'язково)_** - <p>Можливість редагування</p>

---

### Служби доставки [DeliveryService]

**** `/`

<p>Опис полів в моделі DeliveryServiceModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **DeliveryService** `Object` **_(обов'язково)_** - <p>DeliveryServiceModel</p>
- **DeliveryService.id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **DeliveryService.name** `String` **_(обов'язково)_** - <p>Назва служби доставки</p>
- **DeliveryService.status** `Integer` **_(обов'язково)_** - <p>Статус служби доставки</p>
- **DeliveryService.type** `Integer` **_(обов'язково)_** - <p>Тип служби доставки</p>
- **DeliveryService.mdm_id** `String` **_(обов'язково)_** - <p>Mdm ID</p>
- **DeliveryService.can_edit** `Boolean` **_(обов'язково)_** - <p>Можна редагувати</p>
- **DeliveryService.can_use** `Boolean` **_(обов'язково)_** - <p>Можна використовувати</p>
- **DeliveryService.is_default** `Boolean` **_(обов'язково)_** - <p>Чи є службою доставки за замовчуванням</p>
**ExtraFields:**

- **pickup.titleTranslate** `String` **_(обов'язково)_** - <p>Назва на обраній мові</p>
- **pickup.delivery_methods** `Integer[]` **_(обов'язково)_** - <p>ID методів доставки:</p> <ul>     <li>1 - самовивіз</li>     <li>2 - кур'єр</li> </ul>

---

### Точки самовивозу [DeliveryServicePickup]

**** `/`

<p>Опис полів в моделі DeliveryServicePickup <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **DeliveryServicePickup** `Object` **_(обов'язково)_** - <p>Model</p>
- **pickup.id** `Integer` **_(обов'язково)_** - <p>ID точки самовивозу</p>
- **pickup.rz_id** `String` **_(обов'язково)_** - <p>ID точки самовивозу в системі Розетка</p>
- **pickup.title** `String` **_(обов'язково)_** - <p>Назва</p>
- **pickup.locality_id** `Integer` **_(обов'язково)_** - <p>ID місця доставки</p>
- **pickup.delivery_service_id** `Integer` **_(обов'язково)_** - <p>ID служби доставки</p>
- **pickup.status** `Integer` **_(обов'язково)_** - <p>Статус</p>
- **pickup.pickup_number** `String` **_(обов'язково)_** - <p>Номер точки самовивозу</p>
- **pickup.street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **pickup.house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **pickup.place_id** `Integer` **_(обов'язково)_** - <p>Id відділення</p>
- **pickup.number** `Integer` **_(обов'язково)_** - <p>Номер відділення</p>
- **pickup.ext_id** `String` **_(обов'язково)_** - <p>Ext id (Зовнішній ID точки самовивозу)</p>
- **pickup.longitude** `String` **_(обов'язково)_** - <p>Довгота</p>
- **pickup.latitude** `String` **_(обов'язково)_** - <p>Широта</p>
- **pickup.can_edit** `Boolean` **_(обов'язково)_** - <p>Можливість редагування</p>
- **pickup.street_rz_id** `String` **_(обов'язково)_** - <p>ID вулиці в системі Розетка</p>
- **pickup.schedule** `Json` **_(обов'язково)_** - <p>Графік роботи</p>
- **pickup.max_weight** `Integer` **_(обов'язково)_** - <p>Максимальна допустима вага вантажу</p>
- **pickup.pickup_type** `Integer|Null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>

---

### Ттн доставки [DeliveryTtnModel]

**** `/`

<p>Опис полів в моделі DeliveryTtnModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

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

---

### Відділ куратора [Department]

**** `/`

<p>Опис полів в моделі Department <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **DepartmentModel.id** `Integer` **_(обов'язково)_** - <p>Id відділу</p>
- **DepartmentModel.name** `String` **_(обов'язково)_** - <p>Назва відділу (ru)</p>

---

### Статус вивантаження файлу [ExportStatus]

**** `/`

<p>Опис статусу вывантаження файлу<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID статусу виватаження файлу</p>
- **text** `String` **_(обов'язково)_** - <p>Назва статусу вивантаження файлу</p>

---

### Товар в заявці на створення заявки на зберігання [Fulfillment]

**** `/`

<p>Опис полів товару в заявці<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **FFItemAccountModel.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **FFItemAccountModel.item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **FFItemAccountModel.name** `Integer` **_(обов'язково)_** - <p>Назва товару</p>
- **FFItemAccountModel.quantity** `Integer` **_(обов'язково)_** - <p>Кількість</p>
- **FFItemAccountModel.price** `Number` **_(обов'язково)_** - <p>Ціна товару</p>

---

### Тема звернення [Feedback]

**** `/`

<p>Тема звернення <br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **FeedbackTheme** `Object` **_(обов'язково)_** - <p>Тема звернення</p>
- **FeedbackTheme.id** `Integer` **_(обов'язково)_** - <p>ID теми</p>
- **FeedbackTheme.title** `String` **_(обов'язково)_** - <p>Тема обраною мовою</p>
- **FeedbackTheme.hints** `FeedbackHintModel[]` **_(обов'язково)_** - <p>Список підказок до теми, об'єкти <a href="#api-Models-FeedbackThemeHint">Підказка до теми звернення</a></p>
- **FeedbackTheme.children** `Array[]` **_(обов'язково)_** - <p>Список дочірніх тем, об'єкти <a href="#api-Models-FeedbackTheme">Тема звернення</a></p>

---

### Підказка до теми звернення [Feedback]

**** `/`

<p>Підказка до теми звернення <br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **FeedbackThemeHint** `Object` **_(обов'язково)_** - <p>Підказка до теми звернення</p>
- **FeedbackThemeHint.link** `String` **_(обов'язково)_** - <p>Посилання на статтю</p>
- **FeedbackThemeHint.title** `String` **_(обов'язково)_** - <p>Заголовок обраною мовою</p>
- **FeedbackThemeHint.description** `String` **_(обов'язково)_** - <p>Опис обраною мовою</p>

---

### Колонки експорту [FileExportColumns]

**** `/`

<p>Поля, що повертаються у CSV/Excel-експорті товарів. <br> <strong>Примітка:</strong> наступні колонки <strong>завжди присутні в експорті</strong>, незалежно від того, чи були передані при створенні:</p> <ul> <li><code>rz_item_id</code></li> <li><code>price_offer_id</code></li> <li><code>price_category_title</code></li> <li><code>rz_category_title</code></li> </ul>

**Версія:** 0.0.1

#### Параметри запиту

**Колонки експорту:**

- **rz_item_id** `String` **_(обов'язково)_** - <p>ID товару в Rozetka <strong>(завжди)</strong></p>
- **price_offer_id** `String` **_(обов'язково)_** - <p>ID товару з прайсу <strong>(завжди)</strong></p>
- **price_category_title** `String` **_(обов'язково)_** - <p>Назва категорії з прайсу продавця <strong>(завжди)</strong></p>
- **rz_category_title** `String` **_(обов'язково)_** - <p>Назва категорії Rozetka <strong>(завжди)</strong></p>
- **article** `String` **_(обов'язково)_** - <p>Артикул</p>
- **producer_title** `String` **_(обов'язково)_** - <p>Виробник</p>
- **item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **item_name_ua** `String` **_(обов'язково)_** - <p>Назва товару UA</p>
- **upload_status_title** `String` **_(обов'язково)_** - <p>Розділ</p>
- **stock_quantity** `String` **_(обов'язково)_** - <p>Залишки (ціле число)</p>
- **price** `String` **_(обов'язково)_** - <p>Ціна</p>
- **price_promo** `String` **_(обов'язково)_** - <p>Промо ціна</p>
- **reason_title** `String` **_(обов'язково)_** - <p>Причина блокування</p>
- **manager_comment** `String` **_(обов'язково)_** - <p>Коментар менеджера</p>
- **state** `String` **_(обов'язково)_** - <p>Стан товару</p>
- **sla_id** `String` **_(обов'язково)_** - <p>ID набору доставки</p>
- **description** `String` **_(обов'язково)_** - <p>Опис товару</p>
- **description_ua** `String` **_(обов'язково)_** - <p>Опис товару UA</p>
- **docket** `String` **_(обов'язково)_** - <p>Докет</p>
- **docket_ua** `String` **_(обов'язково)_** - <p>Докет (UA)</p>
- **series_title** `String` **_(обов'язково)_** - <p>Серія</p>
- **min_cart_quantity** `String` **_(обов'язково)_** - <p>Мін. кількість в кошику</p>
- **max_cart_quantity** `String` **_(обов'язково)_** - <p>Макс. кількість в кошику</p>
- **loaded_images** `String` **_(обов'язково)_** - <p>Завантажені картинки</p>

---

### Фільтри вивантаження товарів [FileFilter]

**** `/`

<p>Опис фільтрів<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **sync_source_id** `Integer[]` _(опціонально)_ - <p>ID джерела</p>
- **rz_sell_status** `Integer[]` _(опціонально)_ - <p>Статус продажу товару</p>
- **price_offer_id** `String[]` _(опціонально)_ - <p>ID товару у продавця</p>
- **price_category_id** `String[]` _(опціонально)_ - <p>ID категорії продавця</p>
- **name** `String` _(опціонально)_ - <p>Назва товару. Пошук працює також по частині назви</p>
- **find_by_text** `String` _(опціонально)_ - <p>Назва товару, артикул або ID товару. Пошук працює також по частині назви, артикула і частини ID товару</p>
- **available** `Integer[]` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)available</p>
- **price_promo** `Boolean` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **reason_id** `Integer[]` _(опціонально)_ - <p>ID причини</p>
- **category_id** `Integer[]` _(опціонально)_ - <p>ID категорії</p>
- **bpm_number** `String[]` _(опціонально)_ - <p>Номер заявки</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **upload_status** `Integer[]` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>
- **is_ff** `Integer` _(опціонально)_ - <p>Ознака роботи товару з fulfillment</p>
- **change_status** `Integer` _(опціонально)_ - <p>Статус змін товару</p>

---

### Sell Статуси товарів

**get** `/items/sell-statuses`

<p>Список Sell-статусів (SellStatuses) товарів</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;sellStatuses&quot;: int[] }</p>
- **sellStatuses** `Integer[]` **_(обов'язково)_** - <p>Список статусів</p>
**Sell-Statuses:**

- **0** `Number` **_(обов'язково)_** - <p>Unavailable (Немає в наявності)</p>
- **1** `Number` **_(обов'язково)_** - <p>Waiting for supply (Очікується поставка)</p>
- **2** `Number` **_(обов'язково)_** - <p>Call (Дзвоніть)</p>
- **3** `Number` **_(обов'язково)_** - <p>Limited (Товар закінчується)</p>
- **4** `Number` **_(обов'язково)_** - <p>Available (Є в наявності)</p>
- **5** `Number` **_(обов'язково)_** - <p>Archive (Архівний)</p>
- **6** `Number` **_(обов'язково)_** - <p>Strict unavailable (Недоступний)</p>
- **7** `Number` **_(обов'язково)_** - <p>Out of stock (Закінчився)</p>
- **8** `Number` **_(обов'язково)_** - <p>Hidden (Прихований)</p>

#### Приклад відповіді

```json
 HTTP/1.1 200 OK
 {
     "success":true,
     "content": {
        "sellStatuses": [
            {
                "id": 0,
                "name": "unavailable"
            },
            {
                "id": 1,
                "name": "waiting_for_supply"
            },
            {
                "id": 2,
                "name": "call"
            },
            {
                "id": 3,
                "name": "limited"
            },
            {
                "id": 4,
                "name": "available"
            },
            {
                "id": 5,
                "name": "archive"
            },
            {
                "id": 7,
                "name": "out_of_stock"
            },
            {
                "id": 8,
                "name": "hidden"
            }
        ]
    }
}
```

---

### Статуси товарів

**** `/`

<p>Список статусів (Statuses) и Sell-статусів (SellStatuses) товарів</p>

**Версія:** 0.0.0

#### Успішна відповідь

**Statuses:**

- **0** `Number` **_(обов'язково)_** - <p>Locked (Не показувати на сайті)</p>
- **1** `Number` **_(обов'язково)_** - <p>Active (Показувати на сайті)</p>
- **2** `Number` **_(обов'язково)_** - <p>New (Новий)</p>
- **3** `Number` **_(обов'язково)_** - <p>On moderation (Додано до списку на модерацію)</p>
- **4** `Number` **_(обов'язково)_** - <p>Under moderation (Модерується)</p>
- **5** `Number` **_(обов'язково)_** - <p>Rejected moderation (Товар відхилений модератором)</p>
- **6** `Number` **_(обов'язково)_** - <p>Head of managers (Необхідне підтвердження модератора)</p>
- **7** `Number` **_(обов'язково)_** - <p>Archived (Видалено)</p>
- **8** `Number` **_(обов'язково)_** - <p>For moderation (Очікує модерації)</p>
**Sell-Statuses:**

- **0** `Number` **_(обов'язково)_** - <p>Unavailable (Немає в наявності)</p>
- **1** `Number` **_(обов'язково)_** - <p>Waiting for supply (Очікується поставка)</p>
- **2** `Number` **_(обов'язково)_** - <p>Call (Дзвоніть)</p>
- **3** `Number` **_(обов'язково)_** - <p>Limited (Товар закінчується)</p>
- **4** `Number` **_(обов'язково)_** - <p>Available (Є в наявності)</p>
- **5** `Number` **_(обов'язково)_** - <p>Archive (Архівний)</p>
- **6** `Number` **_(обов'язково)_** - <p>Strict unavailable (Недоступний)</p>
- **7** `Number` **_(обов'язково)_** - <p>Out of stock (Закінчився)</p>
- **8** `Number` **_(обов'язково)_** - <p>Hidden (Прихований)</p>

---

### Список статусів модерації товарів

**get** `/items/statuses-moderation`

<p>Отримати список статусів модерації товарів</p>

**Версія:** 0.0.0

#### Headers

- **Authorization** `String` **_(обов'язково)_** - <p>authorization header<br></p>

#### Успішна відповідь

- **Success-Response:** `json` **_(обов'язково)_** - <p>{ &quot;success&quot;:boolean, &quot;content&quot;:{ &quot;statusesModeration&quot;: int[] }</p>
- **statusesModeration** `Integer[]` **_(обов'язково)_** - <p>Масив статусів <a href="#api-6_Items-GetItemStatuses">(Statuses)</a>, які відносяться до модерації товару</p>
**ModerationStatuses:**

- **0** `Number` **_(обов'язково)_** - <p>New (Новий)</p>
- **1** `Number` **_(обов'язково)_** - <p>Wait moderation (Очікує модерації)</p>
- **2** `Number` **_(обов'язково)_** - <p>Moderation (На модерації)</p>
- **3** `Number` **_(обов'язково)_** - <p>Approved (Підтверджений)</p>
- **4** `Number` **_(обов'язково)_** - <p>Rejected (Відхилений)</p>
- **5** `Number` **_(обов'язково)_** - <p>Archived (Видалений)</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success":true,
    "content":{
       "statusesModeration": [2, 3, 4, 5, 6]
    }
}
```

---

### Статуси замовлення [OrdersStatuses]

**** `/`

<p>Статуси замовлення <br> <i>Інформація по статусах, не є API-запитом</i></p>

**Версія:** 0.0.1

#### Параметри запиту

- **status_order.1** `Number` **_(обов'язково)_** - <p>Нове замовлення</p>
- **status_order.2** `Number` **_(обов'язково)_** - <p>Комплектується. Дані підтверджені</p>
- **status_order.3** `Number` **_(обов'язково)_** - <p>Передано в службу доставки</p>
- **status_order.4** `Number` **_(обов'язково)_** - <p>Доставляється</p>
- **status_order.5** `Number` **_(обов'язково)_** - <p>Чекає в пункті самовивозу</p>
- **status_order.6** `Number` **_(обов'язково)_** - <p>Замовлення виконано</p>
- **status_order.7** `Number` **_(обов'язково)_** - <p>Не оброблено продавцем протягом дня</p>
- **status_order.11** `Number` **_(обов'язково)_** - <p>Не прийшов за замовленням</p>
- **status_order.12** `Number` **_(обов'язково)_** - <p>Відмова при отриманні</p>
- **status_order.13** `Number` **_(обов'язково)_** - <p>Скасовано Адміністратором</p>
- **status_order.15** `Number` **_(обов'язково)_** - <p>Некоректний ТТН</p>
- **status_order.16** `Number` **_(обов'язково)_** - <p>Немає в наявності / брак</p>
- **status_order.17** `Number` **_(обов'язково)_** - <p>Не влаштовують умови оплати</p>
- **status_order.18** `Number` **_(обов'язково)_** - <p>Не вдалося зв'язатися</p>
- **status_order.19** `Number` **_(обов'язково)_** - <p>Замовлення повернено</p>
- **status_order.20** `Number` **_(обов'язково)_** - <p>Товар не підходить за характеристиками</p>
- **status_order.24** `Number` **_(обов'язково)_** - <p>Скасування. Не влаштовує доставка</p>
- **status_order.25** `Number` **_(обов'язково)_** - <p>Тестове замовлення</p>
- **status_order.26** `Number` **_(обов'язково)_** - <p>Опрацьовується менеджером</p>
- **status_order.27** `Number` **_(обов'язково)_** - <p>Вимагає доукомплектації</p>
- **status_order.28** `Number` **_(обов'язково)_** - <p>Неправильні контактні дані</p>
- **status_order.29** `Number` **_(обов'язково)_** - <p>Ціна змінилася</p>
- **status_order.30** `Number` **_(обов'язково)_** - <p>Закінчився термін резерву</p>
- **status_order.31** `Number` **_(обов'язково)_** - <p>Скасування. Створено дублююче замовлення</p>
- **status_order.33** `Number` **_(обов'язково)_** - <p>Умови доставки не влаштовують</p>
- **status_order.37** `Number` **_(обов'язково)_** - <p>Передоплата не влаштовує</p>
- **status_order.38** `Number` **_(обов'язково)_** - <p>Не влаштовує товар</p>
- **status_order.40** `Number` **_(обов'язково)_** - <p>Клієнт передумав</p>
- **status_order.42** `Number` **_(обов'язково)_** - <p>Немає в наявності</p>
- **status_order.43** `Number` **_(обов'язково)_** - <p>Брак</p>
- **status_order.44** `Number` **_(обов'язково)_** - <p>Скасування. Фейкове замовлення</p>
- **status_order.45** `Number` **_(обов'язково)_** - <p>Скасовано покупцем</p>
- **status_order.46** `Number` **_(обов'язково)_** - <p>Відновлено при продзвоні</p>
- **status_order.47** `Number` **_(обов'язково)_** - <p>Планується повторний дзвінок</p>
- **status_order.49** `Number` **_(обов'язково)_** - <p>Повторне замовлення</p>
- **status_order.50** `Number` **_(обов'язково)_** - <p>Клієнт не оплатив</p>
- **status_order.51** `Number` **_(обов'язково)_** - <p>У кредиті відмовлено</p>
- **status_order.52** `Number` **_(обов'язково)_** - <p>Нове замовлення за 1 клік</p>
- **status_order.53** `Number` **_(обов'язково)_** - <p>Очікує підтвердження клієнтом</p>
- **status_order.54** `Number` **_(обов'язково)_** - <p>Опрацьовано автоматично</p>
- **status_order.55** `Number` **_(обов'язково)_** - <p>Очікує отримання оплати</p>
- **status_order.56** `Number` **_(обов'язково)_** - <p>Комплектується перевізником</p>
- **status_order.57** `Number` **_(обов'язково)_** - <p>Заплановано доставку</p>
- **status_order.58** `Number` **_(обов'язково)_** - <p>Передано до служби доставки в Польщі</p>
- **status_order.59** `Number` **_(обов'язково)_** - <p>На митному контролі</p>
- **status_order.60** `Number` **_(обов'язково)_** - <p>Передано до служби доставки в Україні</p>
- **status_order.61** `Number` **_(обов'язково)_** - <p>Заплановано передачу перевізникові</p>
- **status_order.62** `Number` **_(обов'язково)_** - <p>Змінено дату видачі</p>
- **status_order.63** `Number` **_(обов'язково)_** - <p>Обробляється службою доставки</p>
- **status_order.64** `Number` **_(обов'язково)_** - <p>Доставляється в місто отримувача</p>
- **status_order.65** `Number` **_(обов'язково)_** - <p>Перебуває в місті отримувача</p>
- **status_order.66** `Number` **_(обов'язково)_** - <p>Перебуває в місті отримувача</p>
- **status_order.67** `Number` **_(обов'язково)_** - <p>Видано кур'єру в місті отримувача</p>
- **status_order.68** `Number` **_(обов'язково)_** - <p>Отримано частково</p>
- **status_order.69** `Number` **_(обов'язково)_** - <p>Змінено дату чи адресу доставки</p>
- **status_order.70** `Number` **_(обов'язково)_** - <p>Планується повторний дзвінок (old)</p>
- **status_order.71** `Number` **_(обов'язково)_** - <p>Скасування. Товар повернувся</p>
- **status_order.72** `Number` **_(обов'язково)_** - <p>Скасування. Здійснено повернення коштів</p>
- **status_order.73** `Number` **_(обов'язково)_** - <p>У черзі на отримання</p>
- **status_order.74** `Number` **_(обов'язково)_** - <p>Сьогодні закінчується термін резерву</p>
- **status_order.75** `Number` **_(обов'язково)_** - <p>Скасування. Скасовано КЦ</p>
- **status_order.76** `Number` **_(обов'язково)_** - <p>Очікує клієнта у почтоматі</p>
- **status_order.77** `Number` **_(обов'язково)_** - <p>Скасування. Відмовлено банком</p>
- **status_order.78** `Number` **_(обов'язково)_** - <p>Змінено час видачі</p>
- **status_order.79** `Number` **_(обов'язково)_** - <p>Очікує модерації КЦ</p>
- **status_order.80** `Number` **_(обов'язково)_** - <p>Чекає на отримання від Продавця</p>
- **status_order.81** `Number` **_(обов'язково)_** - <p>Прийнятий від Продавця</p>
- **status_order.82** `Number` **_(обов'язково)_** - <p>Знаходиться у РЦ</p>
- **status_order.83** `Number` **_(обов'язково)_** - <p>Буде повернено відправнику</p>
- **status_order.84** `Number` **_(обов'язково)_** - <p>Знаходиться у точці для повернення</p>
- **status_order.85** `Number` **_(обов'язково)_** - <p>Повернено продавцю</p>
- **status_order.86** `Number` **_(обов'язково)_** - <p>Очікується повернення товару</p>
- **status_order.87** `Number` **_(обов'язково)_** - <p>Виконано. Минув термін обробки</p>
- **status_order.88** `Number` **_(обов'язково)_** - <p>Втрачена перевізником</p>
- **status_order.89** `Number` **_(обов'язково)_** - <p>Повернення доставляється до розподільчого центру</p>
- **status_order.90** `Number` **_(обов'язково)_** - <p>Повернення знаходиться у розподільчому центрі</p>
- **status_order.91** `Number` **_(обов'язково)_** - <p>Доставляється у точку повернення</p>

---

### Статуси замовлення [OrdersStatuses]

**** `/`

<p>Статуси замовлення <br> <i>Інформація по статусах, не є API-запитом</i></p>

**Версія:** 0.0.0

#### Параметри запиту

- **status_order.1** `Number` **_(обов'язково)_** - <p>Нове замовлення</p>
- **status_order.2** `Number` **_(обов'язково)_** - <p>Комплектується. Дані підтверджені</p>
- **status_order.3** `Number` **_(обов'язково)_** - <p>Передано в службу доставки</p>
- **status_order.4** `Number` **_(обов'язково)_** - <p>Доставляється</p>
- **status_order.5** `Number` **_(обов'язково)_** - <p>Чекає в пункті самовивозу</p>
- **status_order.6** `Number` **_(обов'язково)_** - <p>Замовлення виконано</p>
- **status_order.7** `Number` **_(обов'язково)_** - <p>Не оброблено продавцем протягом дня</p>
- **status_order.11** `Number` **_(обов'язково)_** - <p>Не прийшов за замовленням</p>
- **status_order.12** `Number` **_(обов'язково)_** - <p>Відмова при отриманні</p>
- **status_order.13** `Number` **_(обов'язково)_** - <p>Скасовано Адміністратором</p>
- **status_order.15** `Number` **_(обов'язково)_** - <p>Некоректний ТТН</p>
- **status_order.16** `Number` **_(обов'язково)_** - <p>Немає в наявності / брак</p>
- **status_order.17** `Number` **_(обов'язково)_** - <p>Не влаштовують умови оплати</p>
- **status_order.18** `Number` **_(обов'язково)_** - <p>Не вдалося зв'язатися</p>
- **status_order.19** `Number` **_(обов'язково)_** - <p>Замовлення повернено</p>
- **status_order.20** `Number` **_(обов'язково)_** - <p>Товар не підходить за характеристиками</p>
- **status_order.24** `Number` **_(обов'язково)_** - <p>Скасування. Не влаштовує доставка</p>
- **status_order.25** `Number` **_(обов'язково)_** - <p>Тестове замовлення</p>
- **status_order.26** `Number` **_(обов'язково)_** - <p>Опрацьовується менеджером</p>
- **status_order.27** `Number` **_(обов'язково)_** - <p>Вимагає доукомплектації</p>
- **status_order.28** `Number` **_(обов'язково)_** - <p>Неправильні контактні дані</p>
- **status_order.29** `Number` **_(обов'язково)_** - <p>Ціна змінилася</p>
- **status_order.30** `Number` **_(обов'язково)_** - <p>Закінчився термін резерву</p>
- **status_order.31** `Number` **_(обов'язково)_** - <p>Скасування. Створено дублююче замовлення</p>
- **status_order.33** `Number` **_(обов'язково)_** - <p>Умови доставки не влаштовують</p>
- **status_order.37** `Number` **_(обов'язково)_** - <p>Передоплата не влаштовує</p>
- **status_order.38** `Number` **_(обов'язково)_** - <p>Не влаштовує товар</p>
- **status_order.40** `Number` **_(обов'язково)_** - <p>Клієнт передумав</p>
- **status_order.42** `Number` **_(обов'язково)_** - <p>Немає в наявності</p>
- **status_order.43** `Number` **_(обов'язково)_** - <p>Брак</p>
- **status_order.44** `Number` **_(обов'язково)_** - <p>Скасування. Фейкове замовлення</p>
- **status_order.45** `Number` **_(обов'язково)_** - <p>Скасовано покупцем</p>
- **status_order.46** `Number` **_(обов'язково)_** - <p>Відновлено при продзвоні</p>
- **status_order.47** `Number` **_(обов'язково)_** - <p>Планується повторний дзвінок</p>
- **status_order.49** `Number` **_(обов'язково)_** - <p>Повторне замовлення</p>
- **status_order.50** `Number` **_(обов'язково)_** - <p>Клієнт не оплатив</p>
- **status_order.51** `Number` **_(обов'язково)_** - <p>У кредиті відмовлено</p>
- **status_order.52** `Number` **_(обов'язково)_** - <p>Нове замовлення за 1 клік</p>
- **status_order.53** `Number` **_(обов'язково)_** - <p>Очікує підтвердження клієнтом</p>
- **status_order.54** `Number` **_(обов'язково)_** - <p>Опрацьовано автоматично</p>
- **status_order.55** `Number` **_(обов'язково)_** - <p>Очікує отримання оплати</p>
- **status_order.56** `Number` **_(обов'язково)_** - <p>Комплектується перевізником</p>
- **status_order.57** `Number` **_(обов'язково)_** - <p>Заплановано доставку</p>
- **status_order.58** `Number` **_(обов'язково)_** - <p>Передано до служби доставки в Польщі</p>
- **status_order.59** `Number` **_(обов'язково)_** - <p>На митному контролі</p>
- **status_order.60** `Number` **_(обов'язково)_** - <p>Передано до служби доставки в Україні</p>
- **status_order.61** `Number` **_(обов'язково)_** - <p>Заплановано передачу перевізникові</p>
- **status_order.62** `Number` **_(обов'язково)_** - <p>Змінено дату видачі</p>
- **status_order.63** `Number` **_(обов'язково)_** - <p>Обробляється службою доставки</p>
- **status_order.64** `Number` **_(обов'язково)_** - <p>Доставляється в місто отримувача</p>
- **status_order.65** `Number` **_(обов'язково)_** - <p>Перебуває в місті отримувача</p>
- **status_order.66** `Number` **_(обов'язково)_** - <p>Перебуває в місті отримувача</p>
- **status_order.67** `Number` **_(обов'язково)_** - <p>Видано кур'єру в місті отримувача</p>
- **status_order.68** `Number` **_(обов'язково)_** - <p>Отримано частково</p>
- **status_order.69** `Number` **_(обов'язково)_** - <p>Змінено дату чи адресу доставки</p>
- **status_order.70** `Number` **_(обов'язково)_** - <p>Планується повторний дзвінок (old)</p>
- **status_order.71** `Number` **_(обов'язково)_** - <p>Скасування. Товар повернувся</p>
- **status_order.72** `Number` **_(обов'язково)_** - <p>Скасування. Здійснено повернення коштів</p>
- **status_order.73** `Number` **_(обов'язково)_** - <p>У черзі на отримання</p>
- **status_order.74** `Number` **_(обов'язково)_** - <p>Сьогодні закінчується термін резерву</p>
- **status_order.75** `Number` **_(обов'язково)_** - <p>Скасування. Скасовано КЦ</p>
- **status_order.76** `Number` **_(обов'язково)_** - <p>Очікує клієнта у почтоматі</p>
- **status_order.77** `Number` **_(обов'язково)_** - <p>Скасування. Відмовлено банком</p>
- **status_order.78** `Number` **_(обов'язково)_** - <p>Змінено час видачі</p>
- **status_order.79** `Number` **_(обов'язково)_** - <p>Очікує модерації КЦ</p>
- **status_order.80** `Number` **_(обов'язково)_** - <p>Чекає на отримання від Продавця</p>
- **status_order.81** `Number` **_(обов'язково)_** - <p>Прийнятий від Продавця</p>
- **status_order.82** `Number` **_(обов'язково)_** - <p>Знаходиться у РЦ</p>
- **status_order.83** `Number` **_(обов'язково)_** - <p>Буде повернено відправнику</p>
- **status_order.84** `Number` **_(обов'язково)_** - <p>Знаходиться у точці для повернення</p>
- **status_order.85** `Number` **_(обов'язково)_** - <p>Повернено продавцю</p>
- **status_order.86** `Number` **_(обов'язково)_** - <p>Очікується повернення товару</p>
- **status_order.87** `Number` **_(обов'язково)_** - <p>Виконано. Минув термін обробки</p>
- **status_order.88** `Number` **_(обов'язково)_** - <p>Втрачена перевізником</p>
- **status_order.89** `Number` **_(обов'язково)_** - <p>Повернення доставляється до розподільчого центру</p>
- **status_order.90** `Number` **_(обов'язково)_** - <p>Повернення знаходиться у розподільчому центрі</p>
- **status_order.91** `Number` **_(обов'язково)_** - <p>Доставляється у точку повернення</p>

---

### Група товару [GroupsStore]

**** `/`

<p>Опис полів в моделі GroupsStore <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **GroupsStore** `Object` **_(обов'язково)_** - <p>GroupsStoreModel</p>
- **GroupsStore.id** `Integer` **_(обов'язково)_** - <p>ID групи</p>
- **GroupsStore.title** `String` **_(обов'язково)_** - <p>Назва групи</p>
- **GroupsStore.title_ua** `String` **_(обов'язково)_** - <p>Назва групи українською</p>
- **GroupsStore.category_id** `Integer` **_(обов'язково)_** - <p>ID категорії, в якій знаходиться група</p>

---

### Рахунки[Invoice]

**** `/`

<p>Опис полів в моделі Invoice <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **InvoiceModel.id** `Integer` **_(обов'язково)_** - <p>ID інвойса</p>
- **InvoiceModel.contract_number** `String` **_(обов'язково)_** - <p>Номер договору з продавцем</p>
- **InvoiceModel.number** `String` **_(обов'язково)_** - <p>Номер рахунку</p>
- **InvoiceModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **InvoiceModel.type** `String` **_(обов'язково)_** - <p>Тип рахунку</p>
- **InvoiceModel.type_title** `String` **_(обов'язково)_** - <p>Назва типу рахунку обраною мовою</p>
- **InvoiceModel.date_of_invoice** `Date` **_(обов'язково)_** - <p>Дата виставлення рахунку</p>
- **InvoiceModel.amount** `Number` **_(обов'язково)_** - <p>Сума виставленого рахунку</p>
- **InvoiceModel.liqpay_amount** `Number` **_(обов'язково)_** - <p>Сума рахунку</p>
- **InvoiceModel.is_archive** `boolean` **_(обов'язково)_** - <p>Архівний (так/ні)</p>
- **InvoiceModel.status** `Number` **_(обов'язково)_** - <p><a href="#api-Models-InvoiceStatuses">Статус рахунку</a></p>
- **InvoiceModel.payment_service_bill_id** `Integer` **_(обов'язково)_** - <p>Зовнішній Id інвойса</p>
- **InvoiceModel.payment_url** `String` **_(обов'язково)_** - <p>URL сторінки для сплати інвойса</p>

---

### Статус рахунку [InvoiceModel.status]

**** `/`

<p>Опис статусів рахунків <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

**Invoice Statuses:**

- **1** `Number` **_(обов'язково)_** - <p>Оплачений</p>
- **2** `Number` **_(обов'язково)_** - <p>Чекає оплату</p>
- **3** `Number` **_(обов'язково)_** - <p>Немає даних</p>
- **4** `Number` **_(обов'язково)_** - <p>Оплачений (LiqPay)</p>
- **5** `Number` **_(обов'язково)_** - <p>Помилка оплати (LiqPay)</p>

---

### Фільтрація товарів [ItemActionsFilters]

**** `/`

<p>Опис фільтрів<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **ItemActionsFilters** `Object` **_(обов'язково)_** - <p>ItemActionsFiltersModel</p>
- **ItemActionsFilters.sync_source_id** `Array` **_(обов'язково)_** - <p>Джерело магазину</p>
- **ItemActionsFilters.rz_sell_status** `Array` **_(обов'язково)_** - <p>Статус продажу товару</p>
- **ItemActionsFilters.price_offer_id** `Array` **_(обов'язково)_** - <p>ID товару у продавця</p>
- **ItemActionsFilters.price_category_id** `Array` **_(обов'язково)_** - <p>Категорія товару продавця</p>
- **ItemActionsFilters.available** `Array` **_(обов'язково)_** - <p>Наявність товару</p>
- **ItemActionsFilters.bpm_number** `Array` **_(обов'язково)_** - <p>БПМ номер товару</p>
- **ItemActionsFilters.category_id** `Array` **_(обов'язково)_** - <p>ID категорії</p>
- **ItemActionsFilters.reason_id** `Array` **_(обов'язково)_** - <p>Причина блокування товару</p>
- **ItemActionsFilters.name** `String` **_(обов'язково)_** - <p>Название товару</p>
- **ItemActionsFilters.price_promo** `Integer` **_(обов'язково)_** - <p>Признак товару з промо ціною</p>
- **ItemActionsFilters.priceFrom** `Integer` **_(обов'язково)_** - <p>Ціна від</p>
- **ItemActionsFilters.priceTo** `Integer` **_(обов'язково)_** - <p>Ціна дл</p>
- **ItemActionsFilters.pricePromoFrom** `Integer` **_(обов'язково)_** - <p>Промо ціна від</p>
- **ItemActionsFilters.pricePromoTo** `Integer` **_(обов'язково)_** - <p>Промо ціна від</p>

---

### Причина блокування [ItemBlockedReason]

**** `/`

<p>Опис полів причини блокування <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **BlockedReason** `Object` **_(обов'язково)_** - <p>BlockedReasonModel</p>
- **BlockedReason.title** `String` **_(обов'язково)_** - <p>Текст причини блокування</p>
- **BlockedReason.reason_id** `Number` **_(обов'язково)_** - <p>ID причини блокування</p>
- **BlockedReason.affected_fields** `Array` **_(обов'язково)_** - <p>Масив полів що призводять до блокування</p>
- **BlockedReason.logic_operator** `Number` **_(обов'язково)_** - <p>Ознака що вказує на кількість полів що необхідно виправити<br> (0 — AND усі поля мають бути змінені, 1 — OR достатньо одного поля)</p>

---

### Вкладення до коментарів про товар [ItemComments]

**** `/`

<p>Опис полів у моделі ItemCommentAttachment <br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **ItemCommentAttachment.id** `Integer` **_(обов'язково)_** - <p>ID вкладення</p>
- **ItemCommentAttachment.href** `String` **_(обов'язково)_** - <p>Посилання на вкладення</p>
- **ItemCommentAttachment.comment_id** `String` **_(обов'язково)_** - <p>ID коментаря</p>
- **ItemCommentAttachment.type** `String` **_(обов'язково)_** - <p>Тип вкладення</p>
- **ItemCommentAttachment.preview_image** `String` **_(обов'язково)_** - <p>Посилання на попередній перегляд</p>
- **ItemCommentAttachment.big_image** `String` **_(обов'язково)_** - <p>Посилання на зображення</p>
- **ItemCommentAttachment.comment_type** `String` **_(обов'язково)_** - <p>Тип коментарю (запитання або коментар)</p>

#### Приклад відповіді

```json
{
 "id": 123123,
 "href": "http://some_url.jpg",
 "comment_id": 99988811,
 "type": "images",
 "preview_image": "http://some_url.256x256.jpg",
 "big_image": "http://some_url/8428056.675x532.jpg",
 "comment_type": "comment"
}
```

---

### Відгуки про товар [ItemComments]

**** `/`

<p>Опис полів в моделі ItemComments <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **ItemComments** `Object` **_(обов'язково)_** - <p>ItemCommentsModel</p>
- **itemComments.id** `Integer` **_(обов'язково)_** - <p>ID відгуку про товар</p>
- **ChildItemComment.user_id** `Integer` **_(обов'язково)_** - <p>id автора коментаря</p>
- **ChildItemComment.email** `String` **_(обов'язково)_** - <p>email автора коментаря</p>
- **ChildItemComment.parent_comment_id** `Integer` **_(обов'язково)_** - <p>id материнського коментаря</p>
- **itemComments.parent_id** `Number` **_(обов'язково)_** - <p>ID материнського відгуку</p>
- **itemComments.seller_id** `Number` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **itemComments.status** `String` **_(обов'язково)_** - <p>Статус відгуку <br><i>У список відгуків виводяться тільки відгуки, які видно на сайті: <b>active, auto_activated, unapproved</b></i></p>
- **itemComments.name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **itemComments.text** `String` **_(обов'язково)_** - <p>Текст відгуку</p>
- **itemComments.rating** `String` **_(обов'язково)_** - <p>Рейтинг відгуку</p>
- **itemComments.mark** `Integer` **_(обов'язково)_** - <p>Оцінка товару покупцем (от 0 до 5)</p>
- **itemComments.positive_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук схвалений іншими користувачами)</p>
- **itemComments.negative_vote_count** `Integer` **_(обов'язково)_** - <p>Оцінка відгуку (відгук не був корисний іншим користувачам)</p>
- **itemComments.dignity** `String` **_(обов'язково)_** - <p>Переваги <br><i>Може бути пустим рядком</i></p>
- **itemComments.shortcomings** `String` **_(обов'язково)_** - <p>Недоліки <br><i>Може бути пустим рядком</i></p>
- **itemComments.created** `String` **_(обов'язково)_** - <p>Дата створення відгуку</p>
- **itemComments.changed** `String` **_(обов'язково)_** - <p>Дата зміни відгуку</p>
- **itemComments.is_reade** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як прочитаний</p>
- **itemComments.is_important** `Boolean` **_(обов'язково)_** - <p>Прапор, позначати відгук як важливий</p>
- **itemComments.from_buyer** `Integer` **_(обов'язково)_** - <p>Прапор про те, що відгук прийшов від людини, яка вже придбала товар</p>
- **itemComments.allow_html** `Integer` **_(обов'язково)_** - <p>Прапор про те, чи дозволені в відгуку html-теги</p>
- **itemComments.record** `String` **_(обов'язково)_** - <p>Запис про товар у вигляді json {&quot;id&quot;: &quot;9566834&quot;, &quot;title&quot;: &quot;Blackview BV5000 Camouflage&quot;} <br><b>id</b> - ID товару<br><b>title</b> - Назва товару</p>
- **itemComments.dispute** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemReviewDispute" class="nav-list-item">ItemReviewDispute</a></b>. <br><i>Може бути null</i></p>
- **itemComments.has_children** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи є у відкликання відповіді</p>
- **itemComments.is_un_reade_child** `Boolean` **_(обов'язково)_** - <p>Прапор, що позначає, чи прочитані відповіді на відгук</p>
- **itemComments.item** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-ItemDetails">ItemModel</a></b>, повна інформація про товар</p>
- **itemComments.type** `String` **_(обов'язково)_** - <p>Тип, питання або коментар</p>
- **itemComments.orders_created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **itemComments.orders_completed** `Integer` **_(обов'язково)_** - <p>Ознака, що замовлення вже завершено</p>
- **itemComments.orders_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>

---

### Товар [Item]

**** `/`

<p>Опис полів в моделі Item <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Item** `Object` **_(обов'язково)_** - <p>Model</p>
- **Item.id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка</p>
- **Item.name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **Item.name_ua** `String` **_(обов'язково)_** - <p>Назва товару українською</p>
- **Item.article** `String` **_(обов'язково)_** - <p>Артикул товару</p>
- **Item.price_offer_id** `String` **_(обов'язково)_** - <p>ID товару у продавця</p>
- **Item.price** `Number` **_(обов'язково)_** - <p>Ціна товару</p>
- **Item.stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності</p>
- **Item.weight** `Number` **_(обов'язково)_** - <p>Вага товару</p>
- **Item.commission_percent** `Integer` **_(обов'язково)_** - <p>Комісія по товару, %<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br></p>
- **Item.commission_sum** `String(Number)` **_(обов'язково)_** - <p>Сума комісії по товару<br> <code>*</code><small>Дані носять інформативний характер та можуть оновлюватися з затримкою. Актуальні дані про комісії завжди можна переглянути у ДУ договору<br></p>
- **Item.catalog_category** `Object` **_(обов'язково)_** - <p><a href="#api-Models-CatalogCategoryDetails">CatalogCategory</a>, Категорія товару</p>
- **Item.catalog_id** `Integer` **_(обов'язково)_** - <p>ID категорії</p>
- **Item.group_id** `Integer` **_(обов'язково)_** - <p>ID групи</p>
- **Item.photo_preview** `String` **_(обов'язково)_** - <p>Фото-прев'ю, у вигляді посилання</p>
- **Item.photo** `String[]` **_(обов'язково)_** - <p><code>Deprecated</code> Перелік посилань на фото товару<br> Повертає тільки посилання на фото-прев'ю, для отримання якого краще використовувати поле <b><i>photo_preview</i></b></p>
- **Item.moderation_status** `Number` **_(обов'язково)_** - <p><code>Deprecated</code>: Статус товару на модерації <br> <a href="#api-Items-GetItemStatuses">ModerationStatuses</a></p>
- **Item.url** `String` **_(обов'язково)_** - <p>Item url в системі Розетка</p>
- **Item.sold** `Integer` **_(обов'язково)_** - <p>Кількість проданих одиниць товару</p>
- **Item.uploader_offer_id** `String` **_(обов'язково)_** - <p>Id Оффера в Uploader</p>
- **Item.uploader_status** `Integer|null` **_(обов'язково)_** - <p>Статус товару в Uploader</p>
- **Item.sla_id** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>: Набір доставок товару<br> <sup>Замість цього поля бажано використовувати sla_rz_id</sup></p>
- **Item.sla_rz_id** `Integer` **_(обов'язково)_** - <p>Набір доставок товару</p>
- **Item.producer_name** `String` **_(обов'язково)_** - <p>Назва виробника</p>
- **Item.price_old** `Number` **_(обов'язково)_** - <p>Стара ціна</p>
- **Item.can_use** `Boolean` **_(обов'язково)_** - <p>Ознака того, чи можна використовувати товар при створенні замовлення і в комплектах</p>
**ExtraFields:**

- **Item.status** `Number` **_(обов'язково)_** - <p>Статус товару</p>
- **Item.sell_status** `Number` **_(обов'язково)_** - <p>Sell-статус товару</p>
- **Item.price_promo** `Number` **_(обов'язково)_** - <p>Промо ціна товару</p>
- **Item.is_promo_sent** `Boolean` **_(обов'язково)_** - <p>Потрапляє в розсилку чи ні</p>
- **Item.description** `String` **_(обов'язково)_** - <p>Опис товару<br>Строка, де припустимі html-теги<br></p>
- **Item.description_ua** `String` **_(обов'язково)_** - <p>Опис товару українською</p>
- **Item.details** `json` **_(обов'язково)_** - <p>Параметри товару<br>Об'єкт вигляду {id:&quot;value&quot;,...}, де <b>id</b> - ID атрибута (характеристики), <b>&quot;value&quot;</b> - значення (завжди в вигляді строки або порожньої строки) <br></p>
- **Item.options** `json` **_(обов'язково)_** - <p>Те ж саме, що і details<br><i></i></p>
- **Item.parent_category** `Integer[]` **_(обов'язково)_** - <p>Список материнських категорій (каталогів) товару</p>
- **Item.status_available** `Integer[]` **_(обов'язково)_** - <p>Список статусів, які доступні для товара</p>
- **Item.group_item** `Object` **_(обов'язково)_** - <p>GroupsStoreModel</p>
- **Item.isAdditionalItem** `Boolean` **_(обов'язково)_** - <p>Ознака, що товар є додатковим</p>
- **Item.assign_sla_available** `Boolean` **_(обов'язково)_** - <p>Ознака того, що товару можна призначити набір доставки</p>
- **Item.can_use** `Boolean` **_(обов'язково)_** - <p>Признак того, можно ли использовать товар при создании заказа и в комплектах</p>
- **Item.raising_campaign_data** `Object` **_(обов'язково)_** - <p>Інформація про рекламні кампанії в яких рекламується товар</p>
- **Item.raising_campaign_data.count** `Number` **_(обов'язково)_** - <p>Кількість рекламних кампаній в яких рекламується товар</p>
- **Item.raising_campaign_data.items** `Object[]` **_(обов'язково)_** - <p>Дані про рекламні кампанії в яких рекламується товар</p>

---

### Фільтри товарів [ItemFilter]

**** `/`

<p>Опис фільтрів<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **sync_source_id** `Integer[]` _(опціонально)_ - <p>ID джерела</p>
- **rz_sell_status** `Integer[]` _(опціонально)_ - <p>Статус продажу товару</p>
- **price_offer_id** `String[]` _(опціонально)_ - <p>ID товару у продавця</p>
- **price_category_id** `String[]` _(опціонально)_ - <p>ID категорії продавця</p>
- **name** `String` _(опціонально)_ - <p>Назва товару або ID товару. Пошук працює також по частині назви, і частини ID товару</p>
- **available** `Integer[]` _(опціонально)_ - <p>Наявність товару (0 - немає в наявності; 1 - є в наявності; 2 - видалені з прайсу)available</p>
- **price_promo** `Boolean` _(опціонально)_ - <p>Ознака виведення товарів з промо ціною &gt; 0</p>
- **reason_id** `Integer[]` _(опціонально)_ - <p>ID причини</p>
- **category_id** `Integer[]` _(опціонально)_ - <p>ID категорії</p>
- **bpm_number** `String[]` _(опціонально)_ - <p>Номер заявки</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна товару від...</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна товару до...</p>
- **upload_status** `Integer[]` _(опціонально)_ - <p>Внутрішній статус товару</p>
- **price_producer_id** `Integer[]` _(опціонально)_ - <p>ID виробника</p>
- **pricePromoFrom** `Integer` _(опціонально)_ - <p>Ціна промо товару від...</p>
- **pricePromoTo** `Integer` _(опціонально)_ - <p>Ціна промо товару до...</p>

---

### Фільтри товарів для налаштування сла [ItemSlaModuleFilter]

**** `/`

<p>Опис фільтрів<br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Url Parameters:**

- **sla_roz_id** `Integer` _(опціонально)_ - <p>Sla ID</p>
- **id** `Integer` _(опціонально)_ - <p>ID</p>
- **name** `Integer` _(опціонально)_ - <p>Назва</p>
- **catalog_id** `Integer` _(опціонально)_ - <p>Категорія</p>
- **producer_id** `Integer` _(опціонально)_ - <p>Виробник</p>
- **status** `Integer` _(опціонально)_ - <p>Статус</p>
- **sell_status** `Integer` _(опціонально)_ - <p>Наявність</p>
- **uploader_price_offer_id** `String` _(опціонально)_ - <p>ID у прайсі</p>
- **article** `String` _(опціонально)_ - <p>Артикул</p>
- **priceFrom** `Integer` _(опціонально)_ - <p>Ціна від</p>
- **priceTo** `Integer` _(опціонально)_ - <p>Ціна до</p>

---

### Оскаржити відгук про товар [ItemReviewDisputeModel]

**** `/`

<p>Опис полів в моделі ItemReviewDisputeModel <br><i>Не є API-запитом</i></p>

**Версія:** 0.0.2

#### Успішна відповідь

- **ItemReviewDispute** `Object` **_(обов'язково)_** - <p>ItemReviewDisputeModel</p>
- **ItemReviewDispute.item_review_id** `Integer` **_(обов'язково)_** - <p>ID відгуку, який оскаржують</p>
- **ItemReviewDispute.reason_title** `String` **_(обов'язково)_** - <p>Причина оспорювання відгуку</p>
- **ItemReviewDispute.sellers_comment** `String` **_(обов'язково)_** - <p>Текст запиту</p>
- **ItemReviewDispute.status** `Integer` **_(обов'язково)_** - <p>Статус запиту: 1 - Новий, 2 - В роботі, 3 - Відкладений, 4 - Відхилено, 5 - Вирішено</p>
- **ItemReviewDispute.created_at** `Data` **_(обов'язково)_** - <p>Дата створення запису</p>

---

### Комплект [Kit]

**** `/`

<p>Опис полів в моделі Kit <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Kit** `Object` **_(обов'язково)_** - <p>Model</p>
- **Kit.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **Kit.title** `String` **_(обов'язково)_** - <p>Назва комплекту</p>
- **Kit.status** `String` **_(обов'язково)_** - <p>Статус комплекту(Active/Locked)</p>
- **Kit.start_date** `Date` **_(обов'язково)_** - <p>Дата старту продажів комплекту</p>
- **Kit.end_date** `Date` **_(обов'язково)_** - <p>Дата закінчення продажів комплекту</p>

---

### Параметри додаткового товару в комплекті [KitSecondaryItemParams]

**** `/`

<p>Опис полів в моделі KitSecondaryItemParams <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **KitSecondaryItemParam** `Object` **_(обов'язково)_** - <p>Model</p>
- **KitSecondaryItemParam.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **KitSecondaryItemParam.kit_id** `Integer` **_(обов'язково)_** - <p>Kit id</p>
- **KitSecondaryItemParam.title** `String` **_(обов'язково)_** - <p>Title</p>
- **KitSecondaryItemParam.category_id** `Integer` **_(обов'язково)_** - <p>Category id</p>
- **KitSecondaryItemParam.status** `String` **_(обов'язково)_** - <p>Status (Active/Locked)</p>

---

### Додатковий товар комплекту [KitSecondaryItems]

**** `/`

<p>Опис полів в моделі KitSecondaryItems <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **KitSecondaryItem** `Object` **_(обов'язково)_** - <p>Model</p>
- **KitSecondaryItem.id** `Integer` **_(обов'язково)_** - <p>id</p>
- **KitSecondaryItem.param_id** `Integer` **_(обов'язково)_** - <p>KitSecondaryItemParams id</p>
- **KitSecondaryItem.item_id** `Integer` **_(обов'язково)_** - <p>Item id</p>
- **KitSecondaryItem.relative_discount** `Integer` **_(обов'язково)_** - <p>Relative discount</p>
- **KitSecondaryItem.fixed_discount** `Integer` **_(обов'язково)_** - <p>Fixed Discount</p>
- **KitSecondaryItem.fixed_amount** `Integer` **_(обов'язково)_** - <p>Fixed amount</p>
- **KitSecondaryItem.currency** `Integer` **_(обов'язково)_** - <p>Currency</p>
- **KitSecondaryItem.order** `Object` **_(обов'язково)_** - <p>Order</p>

---

### Організаційно-правові форми господарювання [KopfhModel]

**** `/`

<p>Організаційно-правові форми господарювання <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Id запису</p>
- **code** `Integer` **_(обов'язково)_** - <p>Код</p>
- **short_name** `String` **_(обов'язково)_** - <p>Скорочена назва</p>
- **full_name** `String` **_(обов'язково)_** - <p>Повна назва</p>
- **created_at** `Date` **_(обов'язково)_** - <p>Дата створення</p>
- **updated_at** `Date` **_(обов'язково)_** - <p>Дата оновлення</p>
- **group** `Integer` **_(обов'язково)_** - <p>Тип юр. особи <br> Прим.: тип ФОП <code>&quot;type&quot;: 2</code></p>

---

### [Створення замовлення] Місто

**** `/`

<p>Опис полів міста доставки при створенні замовлення <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID міста</p>
- **title** `String` **_(обов'язково)_** - <p>Назва міста</p>
- **bigCity** `Boolean` **_(обов'язково)_** - <p>Ознака: велике місто</p>
- **regionTitle** `String` **_(обов'язково)_** - <p>Назва області</p>
- **distinctTitle** `String` **_(обов'язково)_** - <p>Назва району</p>

---

### Населений пункт [Locality]

**** `/`

<p>Опис полів в моделі Locality <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Locality** `Object` **_(обов'язково)_** - <p>LocalityModel</p>
- **city.id** `Integer` **_(обов'язково)_** - <p>ID міста</p>
- **city.uuid** `String` **_(обов'язково)_** - <p>Ідентифікатор міста в сервісі</p>
- **city.city_name** `String` **_(обов'язково)_** - <p>Назва міста</p>
- **city.name** `String` **_(обов'язково)_** - <p>Назва міста <code>[deprecated]</code></p>
- **city.name_ua** `String` **_(обов'язково)_** - <p>Назва міста ua <code>[deprecated]</code></p>
- **city.name_en** `String` **_(обов'язково)_** - <p>Назва міста en <code>[deprecated]</code></p>
- **city.title** `String` **_(обов'язково)_** - <p>Повна назва міста</p>
- **city.region_title** `String` **_(обов'язково)_** - <p>Назва регіону (області)</p>
- **city.status** `Number` **_(обов'язково)_** - <p>Статус (1 - активний, 0 - заблокований)</p>

---

### Менеджер [Manager]

**** `/`

<p>Опис менеджера<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>

---

### Продавець [Market]

**** `/`

<p>Опис полів в моделі Market <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Market** `Object` **_(обов'язково)_** - <p>MarketModel</p>
- **market.test_market** `Number` **_(обов'язково)_** - <p>Чи є продавець тестовим</p>
- **market.logo** `String` **_(обов'язково)_** - <p>Логотип продавця</p>
- **market.title** `String` **_(обов'язково)_** - <p>Назва продавця</p>
- **market.business_model** `String` **_(обов'язково)_** - <p>Бізнес модель</p>
- **market.marketRequisite** `Object` **_(обов'язково)_** - <p>Реквізити продавця <b><a href="#api-Models-MarketRequisiteDetails" class="nav-list-item">MarketRequisite</a></b>.</p>
- **market.updated** `String` **_(обов'язково)_** - <p>Дата оновлення даних про магазин</p>
- **market.use_api** `Boolean` **_(обов'язково)_** - <p>Чи використовує продавець API</p>
- **market.sms_template_id** `Integer` **_(обов'язково)_** - <p>ID шаблону SMS</p>
- **market.check_stock** `Boolean` **_(обов'язково)_** - <p>Враховувати залишки</p>
- **market.edit_timetable** `Boolean` **_(обов'язково)_** - <p>Дозволити продавцеві редагувати графік в ЛК</p>
- **market.combination_owox_parent_id** `Integer` **_(обов'язково)_** - <p>ID папки комбінацій в системе Розетка</p>
- **market.email** `Text` **_(обов'язково)_** - <p>Email магазину</p>
- **market.market_url** `String` **_(обов'язково)_** - <p>Посилання на магазин на Розетці</p>
- **market.show_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, чи працює магазин по системі Fulfillment</p>
- **market.min_order_amount** `Integer` **_(обов'язково)_** - <p>Мінімальна сума замовлення</p>
- **market.min_order_delivery** `Object[]` **_(обов'язково)_** - <p>Служби доставки для мін. суми замовлення</p>
- **market.min_order_delivery.mdm_id** `String` **_(обов'язково)_** - <p>ID (hash або текстовий ID)</p>
- **market.min_order_delivery.title** `String` **_(обов'язково)_** - <p>Назва служби доставки обраною мовою</p>
- **market.seller_can_edit_min_order_amount** `Boolean` **_(обов'язково)_** - <p>Ознака, чи доступне редагування мінімальної суми замовлення</p>
- **market.feedback_auto_req** `Boolean` **_(обов'язково)_** - <p>Ознака, чи и відправляти автоматично запит на відгук про товар</p>
- **market.is_auto_refund** `Boolean` **_(обов'язково)_** - <p>Автоматичне повернення коштів при відміні замовлення</p>
**ExtraFields:**

- **market.lastSync** `Object` **_(обов'язково)_** - <p>Дата останньої синхронізації</p>
- **market.lastCommissionSync** `String` **_(обов'язково)_** - <p>Дата останньої синхронізації комісій</p>
- **market.marketBillingData** `Object` **_(обов'язково)_** - <p>Дані по балансу магазину</p>
- **market.manager_fio** `Object` **_(обов'язково)_** - <p>Інформація про куратора магазину <a href="#api-Models-MarketManagerDetails">(MarketManager)</a></p>
- **market.department** `Object` **_(обов'язково)_** - <p>Інформація про відділ куратора <a href="#api-Models-DepartmentDetails">(DepartmentModel)</a></p>
- **market.is_show_support** `Boolean` **_(обов'язково)_** - <p>Чи показувати інформацію про відділ саппорта</p>
- **market.logistic_balance_data** `Object` **_(обов'язково)_** - <p><a href="#api-Models-BalanceLogisticDataModel">Дані по балансу логістики</a></p>

---

### Документи продавця [MarketDocument]

**** `/`

<p>Опис полів в моделі MarketDocument <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **MarketDocument** `Object` **_(обов'язково)_** - <p>MarketDocumentModel</p>
- **MarkerDocument.id** `Integer` **_(обов'язково)_** - <p>ID документу</p>
- **MarkerDocument.type** `Number` **_(обов'язково)_** - <p>Тип документу <br>10 - Паспорт (для типів юр осіб 3 - СПД, 5 - ПП, 18 - СП, 20 - ФГ) <br>11 - Витяг про реєстрацію або свідоцтво (для типів юр осіб 3 - СПД, 5 - ПП, 18 - СП, 20 - ФГ) <br>12 - Довідка з банку про відкриття рахунку (для типів юр осіб 3 - СПД, 5 - ПП, 18 - СП, 20 - ФГ) <br>13 - Статут (для всіх інших типів юр.осіб) <br>14 - Витяг про реєстрацію (для всіх інших типів юр. осіб) <br>15 - Довідка з банку про відкриття рахунку (для всіх інших типів юр. осіб) <br>16 - Протокол про призначення керівника (для всіх інших типів юр. осіб) <br>17 - Довідку про вартість чистих активів або рішення / протокол про зняття обмежень на підписання договору з компанією ROZETKA. (для всіх інших типів юр. осіб)</p>
- **MarkerDocument.previewWebPath** `String` **_(обов'язково)_** - <p>Директорія до прев'ю документа</p>
- **MarkerDocument.moderation_status** `Number` **_(обов'язково)_** - <p>Статус модерації документа <br>0 - Новий <br>1 - Модерація пройдена <br>2 - Відхилено. Погана якість <br>3 - Відхилено. Не той розділ <br>4 - Відхилений як дубль</p>
- **MarkerDocument.comment** `String` **_(обов'язково)_** - <p>Коментар при відхиленні</p>

---

### Юр.особа [MarketLegalPerson]

**** `/`

<p>Опис полів у моделі MarketLegalPerson <br> <i>Не є АПІ-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **MarketLegalPerson** `Object` **_(обов'язково)_** - <p>Об'єкт MarketLegalPerson</p>
- **MarketLegalPerson.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **MarketLegalPerson.full_name** `String` **_(обов'язково)_** - <p>Повна назва ФОП</p>
- **MarketLegalPerson.status** `String` **_(обов'язково)_** - <p>Статус</p>
- **MarketLegalPerson.status_title** `String` **_(обов'язково)_** - <p>Статус (назва обраною мовою)</p>

---

### Інформація про куратора [MarketManager]

**** `/`

<p>Опис полів в моделі MarketManager <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **MarketManager.ru** `String` **_(обов'язково)_** - <p>ПІБ (ru) [+внутрішній номер]</p>
- **MarketManager.uk** `String` **_(обов'язково)_** - <p>ПІБ (uk) [+внутрішній номер]</p>
- **MarketManager.en** `String` **_(обов'язково)_** - <p>ПІБ (en) [+внутрішній номер]</p>
- **MarketManager.phone** `String` **_(обов'язково)_** - <p>Телефон</p>
- **MarketManager.email** `String` **_(обов'язково)_** - <p>E-mail</p>

---

### Метод оплати магазину [MarketPaymentMethod]

**** `/`

<p>Опис полів в моделі MarketPaymentMethod <br> <i>Не является АПИ-запросом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Ідентифікатор платіжного методу</p>
- **name** `String` **_(обов'язково)_** - <p>Назва платіжного методу</p>
- **description** `String` **_(обов'язково)_** - <p>Опис платіжного методу</p>
- **must_has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує чи повинні бути у платіжного методу ключі мерчанта</p>
- **has_keys** `Boolean` **_(обов'язково)_** - <p>Прапор вказує, що у платіжного методу є ключі мерчанта</p>
- **is_auto_hold** `Boolean` **_(обов'язково)_** - <p>Статус блокування</p>
- **status** `Number` **_(обов'язково)_** - <p>Статус активації (1 - активний, 0 - неактивний)</p>
- **legal_person** `Object` **_(обов'язково)_** - <p>Юр.особа продавця, до якої підв'язаний даний метод оплати<br> Об'єкт <a href="#api-Models-MarketLegalPerson">MarketLegalPerson</a></p>
**ExtraFields:**

- **available_assign_legal_person** `Boolean` **_(обов'язково)_** - <p>Ознака, чи можливо назначити юр.особу</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
    "success": true,
    "content": {
        "id": 4524,
        "name": "Оплата картой Visa/MasterCard (TRNZ)",
        "description": "Самый простой и быстрый способ оплатить услуги банковской картой Visa/MasterCard.",
        "must_has_keys": true,
        "has_keys": true,
        "status": 1,
        "legal_person":{
             "id": 1,
             "full_name": "Test Test FOP",
             "status": "activated",
             "status_title": "Активный"
        },
        "available_assign_legal_person": true
    }
}
```

---

### Інформація про реквізити продавця [MarketRequisiteInfo]

**** `/`

<p>Опис полів в моделі MarketRequisiteModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **MarketRequisite** `Object` **_(обов'язково)_** - <p>MarketRequisiteModel</p>
- **market_requisite.type** `Number` **_(обов'язково)_** - <p>Тип юр. особи <br> Повний список типів можна отримати через запит <a href="#api-BusinessTypes-GetMarketBusinessTypes">Business Types</a></p>
- **market_requisite.name** `String` **_(обов'язково)_** - <p>Ім'я юр. особи</p>
- **market_requisite.inn** `String` **_(обов'язково)_** - <p>ІПН</p>
- **market_requisite.okpo** `String` **_(обов'язково)_** - <p>ЄДРПОУ (OKPO)</p>
- **market_requisite.mfo** `String` **_(обов'язково)_** - <p>МФО</p>
- **market_requisite.score** `String` **_(обов'язково)_** - <p>Р/р (Розрахунковий рахунок)</p>
- **market_requisite.bank_name** `String` **_(обов'язково)_** - <p>Назва банку продавця</p>
- **market_requisite.with_tax** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є продавець платником ПДВ</p>
- **market_requisite.juridical_address** `Text` **_(обов'язково)_** - <p>Юридична адреса</p>
- **market_requisite.physical_address** `Text` **_(обов'язково)_** - <p>Фізична адреса</p>
- **market_requisite.seller_can_edit** `boolean` **_(обов'язково)_** - <p>Може бути заповнений продавцем</p>

---

### Оскаржити відгук про магазин [MarketReviewDisputeModel]

**** `/`

<p>Опис полів в моделі MarketReviewDisputeModel <br><i>Не є API-запитом</i></p>

**Версія:** 0.0.2

#### Успішна відповідь

- **MarketReviewDispute** `Object` **_(обов'язково)_** - <p>MarketReviewDisputeModel</p>
- **MarketReviewDispute.market_review_id** `Integer` **_(обов'язково)_** - <p>ID відгуку, який оскаржують</p>
- **MarketReviewDispute.sellers_comment** `String` **_(обов'язково)_** - <p>Текст запиту</p>
- **MarketReviewDispute.reason_title** `String` **_(обов'язково)_** - <p>Причина оспорювання відгуку</p>
- **MarketReviewDispute.status** `Integer` **_(обов'язково)_** - <p>Статус запиту: 1 - Новий, 2 - В роботі, 3 - Відкладений, 4 - Відхилено, 5 - Вирішено</p>
- **MarketReviewDispute.created_at** `Data` **_(обов'язково)_** - <p>Дата створення запису</p>

---

### Відгуки про магазин [MarketReviews]

**** `/`

<p>Опис полів в моделі MarketReviews <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **MarketReviews** `Object` **_(обов'язково)_** - <p>MarketReviewsModel</p>
- **marketReviews.id** `Integer` **_(обов'язково)_** - <p>ID відгуку</p>
- **marketReviews.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **marketReviews.user** `String` **_(обов'язково)_** - <p>ПІБ користувача, який залишив відгук</p>
- **marketReviews.order** `Object` **_(обов'язково)_** - <p>OrderModel. <br>Детальна інформація про замовлення</p>
- **marketReviews.comment** `String` **_(обов'язково)_** - <p>коментар до замовлення <br><i>Може бути null</i></p>
- **marketReviews.created_at** `String` **_(обов'язково)_** - <p>Дата створення коментаря</p>
- **marketReviews.vote_convenience** `String` **_(обов'язково)_** - <p>Актуальність ціни і наявності <br><i>Може бути null</i></p>
- **marketReviews.vote_manager** `String` **_(обов'язково)_** - <p>Якість обслуговування <br><i>Може бути null</i></p>
- **marketReviews.vote_delivery** `String` **_(обов'язково)_** - <p>Дотримання термінів доставки <br><i>Може бути null</i></p>
- **marketReviews.vote_payment** `String` **_(обов'язково)_** - <p>Оцінка процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.review_convenience** `String` **_(обов'язково)_** - <p>Коментар зручності вибору товару <br><i>Може бути null</i></p>
- **marketReviews.review_manager** `String` **_(обов'язково)_** - <p>Коментар консультації менеджера <br><i>Може бути null</i></p>
- **marketReviews.review_delivery** `String` **_(обов'язково)_** - <p>Коментар доставки товару <br><i>Може бути null</i></p>
- **marketReviews.review_payment** `String` **_(обов'язково)_** - <p>Коментар процесу оплати <br><i>Може бути null</i></p>
- **marketReviews.vote** `String` **_(обов'язково)_** - <p>Загальна оцінка</p>
- **marketReviews.status** `String` **_(обов'язково)_** - <p>Статус коментаря</p>
- **marketReviews.read** `Boolean` **_(обов'язково)_** - <p>Коментар прочитаний</p>
- **marketReviews.read_ts** `Datetime` **_(обов'язково)_** - <p>Дата прочитання коментаря</p>
- **marketReviews.problem_solved** `Boolean` **_(обов'язково)_** - <p>Ознака, що проблема озвучена в коментарі вирішена</p>

---

### Статуси магазину [MarketStatuses]

**** `/`

<p>Опис статусів магазину<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **0** `Integer` **_(обов'язково)_** - <p>Підготовчий</p>
- **1** `Integer` **_(обов'язково)_** - <p>Потребує верифікації</p>
- **2** `Integer` **_(обов'язково)_** - <p>Заблокований</p>
- **3** `Integer` **_(обов'язково)_** - <p>Призупинений</p>
- **4** `Integer` **_(обов'язково)_** - <p>Відключений</p>
- **5** `Integer` **_(обов'язково)_** - <p>Верифікований</p>
- **6** `Integer` **_(обов'язково)_** - <p>Активний</p>
- **7** `Integer` **_(обов'язково)_** - <p>Проблемний</p>

---

### [Meest Express] Відділення

**** `/`

<p>Опис полів відділення Meest Express<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **MeestBranch** `Object` **_(обов'язково)_** - <p>Відділення Meest</p>
- **MeestBranch.branchID** `String` **_(обов'язково)_** - <p>ID відділення в системі Meest</p>
- **MeestBranch.branchNo** `String` **_(обов'язково)_** - <p>Номер відділення</p>
- **MeestBranch.branchType** `String` **_(обов'язково)_** - <p>Тип відділення</p>
- **MeestBranch.branchTypeID** `String` **_(обов'язково)_** - <p>ID типу відділення</p>
- **MeestBranch.branchTypeDescr** `String` **_(обов'язково)_** - <p>Опис типу відділення, і всіх важливих деталей по ньому (ua)</p>
- **MeestBranch.branchDescr** `Object` **_(обов'язково)_** - <p>Опис відділення</p>
- **MeestBranch.branchDescr.descrUA** `String` **_(обов'язково)_** - <p>Повна адреса відділення (ua)</p>
- **MeestBranch.branchDescr.descrSearchUA** `String` **_(обов'язково)_** - <p>Повна адреса відділення (для пошуку)</p>
- **MeestBranch.addressID** `String` **_(обов'язково)_** - <p>ID вулиці відділення (ua)</p>
- **MeestBranch.addressDescr** `Object` **_(обов'язково)_** - <p>Назва вулиці відділення (на різних мовах)</p>
- **MeestBranch.addressDescr.descrUA** `String` **_(обов'язково)_** - <p>Назва вулиці (ua)</p>
- **MeestBranch.addressDescr.descrRU** `String` **_(обов'язково)_** - <p>Назва вулиці (ru)</p>
- **MeestBranch.addressDescr.descrEN** `String` **_(обов'язково)_** - <p>Назва вулиці (en)</p>
- **MeestBranch.addressMoreInformation** `String` **_(обов'язково)_** - <p>Детальна інформація про місцезнаходження відділення</p>
- **MeestBranch.cityID** `String` **_(обов'язково)_** - <p>ID міста</p>
- **MeestBranch.cityDescr** `Object` **_(обов'язково)_** - <p>Назва міста (на різних мовах)</p>
- **MeestBranch.cityDescr.descrUA** `String` **_(обов'язково)_** - <p>Назва міста (ua)</p>
- **MeestBranch.cityDescr.descrRU** `String` **_(обов'язково)_** - <p>Назва міста (ru)</p>
- **MeestBranch.cityDescr.descrEN** `String` **_(обов'язково)_** - <p>Назва міста (en)</p>
- **MeestBranch.regionID** `String` **_(обов'язково)_** - <p>ID міста</p>
- **MeestBranch.regionDescr** `Object` **_(обов'язково)_** - <p>Назва області (на різних мовах)</p>
- **MeestBranch.regionDescr.descrUA** `String` **_(обов'язково)_** - <p>Назва області (ua)</p>
- **MeestBranch.regionDescr.descrRU** `String` **_(обов'язково)_** - <p>Назва області (ru)</p>
- **MeestBranch.regionDescr.descrEN** `String` **_(обов'язково)_** - <p>Назва області (en)</p>
- **MeestBranch.workingHours** `String` **_(обов'язково)_** - <p>Години роботи відділення</p>
- **MeestBranch.building** `String` **_(обов'язково)_** - <p>Номер будинку</p>
- **MeestBranch.zipCode** `String` **_(обов'язково)_** - <p>ZIP-код</p>
- **MeestBranch.latitude** `Number` **_(обов'язково)_** - <p>Широта (координати)</p>
- **MeestBranch.longitude** `Number` **_(обов'язково)_** - <p>Довгота (координати)</p>
- **MeestBranch.branchLimits** `MeestBranchLimits` **_(обов'язково)_** - <p><a href="#api-Models-MeestBranchLimits">Обмеження відділення</a></p>

---

### [Meest Express] Обмеження відділення

**** `/`

<p>Опис полів обмеження для відділення Meest Express<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **MeestBranchLimits.weightTotalMax** `Number` **_(обов'язково)_** - <p>Максимальна загальна вага відправлення, кг</p>
- **MeestBranchLimits.volumeTotalMax** `Number` **_(обов'язково)_** - <p>Максимальний загальний об'єм відправлення, м<sup>3</sup></p>
- **MeestBranchLimits.insuranceTotalMax** `Integer` **_(обов'язково)_** - <p>Максимальна сума страховки (оціночна вартість)</p>
- **MeestBranchLimits.weightPlaceMax** `Integer` **_(обов'язково)_** - <p>Максимальна вага на одне місце, кг</p>
- **MeestBranchLimits.quantityPlacesMax** `Integer` **_(обов'язково)_** - <p>Максимальна кількість місць</p>
- **MeestBranchLimits.gabaritesMax** `Object` **_(обов'язково)_** - <p>Максимальні габарити посилки</p>
- **MeestBranchLimits.gabaritesMax.length** `Integer` **_(обов'язково)_** - <p>Довжина, см</p>
- **MeestBranchLimits.gabaritesMax.width** `Integer` **_(обов'язково)_** - <p>Ширина, см</p>
- **MeestBranchLimits.gabaritesMax.height** `Integer` **_(обов'язково)_** - <p>Висота, см</p>
- **MeestBranchLimits.formatLimit** `Boolean` **_(обов'язково)_** - <p>Дозволені лише формати «Пакет» і «Коробка»</p>
- **MeestBranchLimits.cashPayUnavailible** `Boolean` **_(обов'язково)_** - <p>Оплата готівкою неможлива</p>
- **MeestBranchLimits.sendingOnly** `Boolean` **_(обов'язково)_** - <p>Тільки відправка (отримання неможливо)</p>
- **MeestBranchLimits.receivingOnly** `Boolean` **_(обов'язково)_** - <p>Тільки отримання (відправка неможлива)</p>
- **MeestBranchLimits.receiverCellPhoneRequired** `Boolean` **_(обов'язково)_** - <p>Обов'язкова наявність мобільного номера одержувача</p>
- **MeestBranchLimits.terminalCash** `Boolean` **_(обов'язково)_** - <p>Доступний термінал готівкової оплати (EasyPay, Приват и т.д.)</p>

---

### Адресний класифікатор модуля MeestExpress [MeestCity]

**** `/`

<p>Інформація по населеному пункту<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

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
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-MeestRegion">MeestRegion</a></b></p>
- **district** `Object|Null` **_(обов'язково)_** - <p>Район області <br><b><a href="#api-Models-MeestDistrict">MeestDistrict</a></b></p>

---

### Адресний класифікатор модуля MeestExpress [MeestDistrict]

**** `/`

<p>Інформація по району<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID району</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва району українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва району російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва району англійською</p>
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-MeestRegion">MeestRegion</a></b></p>

---

### [Meest Express] Очікувана дата і час забору / доставки

**** `/`

<p>Опис полів часового діапазону забору / доставки<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **MeestExpectedDate.date** `String` **_(обов'язково)_** - <p>Бажана дата забору, доставки в форматі dd.MM.yyyy</p>
- **MeestExpectedDate.timeFrom** `String` **_(обов'язково)_** - <p>Час забору, доставки з в форматі HH:00 (години без зазначення хвилин)</p>
- **MeestExpectedDate.timeTo** `String` **_(обов'язково)_** - <p>Час забору, доставки до в форматі HH:00 (години без зазначення хвилин)<br> Проміжок часу між timeFrom та timeTo мінімум 1 година. <br> Заявки на забір створені післе 13:00 виконуються на наступний день.</p>

---

### Адресний класифікатор модуля MeestExpress [MeestPickup]

**** `/`

<p>Інформація по відділенню<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID відділення</p>
- **pickup_id** `String` **_(обов'язково)_** - <p>ID відділення</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва відділення українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва відділення російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва відділення англійською</p>
- **comment_uk** `String` **_(обов'язково)_** - <p>Коментар українською</p>
- **comment_ru** `String` **_(обов'язково)_** - <p>Коментар російською</p>
- **comment_en** `String` **_(обов'язково)_** - <p>Коментар англійською</p>
- **pickup_number** `String` **_(обов'язково)_** - <p>Номер відділення</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця розміщення відділення <br><b><a href="#api-Models-MeestStreet">MeestStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, в якому знаходиться відділення</p>

---

### [Meest Express] Дані відправлення

**** `/`

<p>Опис полів відправлення <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **MeestPlaceItem.quantity** `Integer` **_(обов'язково)_** - <p>Кількість місць (у випадку вказання кількох місць при створенні ТТН, буде створена вказана кількість місць з однаковими параметрами)</p>
- **MeestPlaceItem.weight** `Number` **_(обов'язково)_** - <p>Вага, кг</p>
- **MeestPlaceItem.volume** `Number` _(опціонально)_ - <p>Об`єм, м<sup>3</sup></p>
- **MeestPlaceItem.insurance** `Integer` _(опціонально)_ - <p>Оціночна вартість</p>
- **MeestPlaceItem.length** `Integer` _(опціонально)_ - <p>Довжина, см</p>
- **MeestPlaceItem.width** `Integer` _(опціонально)_ - <p>Ширина, см</p>
- **MeestPlaceItem.height** `Integer` _(опціонально)_ - <p>Висота, см</p>

---

### Адресний класифікатор модуля MeestExpress [MeestRegion]

**** `/`

<p>Інформація по області<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID області</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва області українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва області російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва області англійською</p>

---

### Адресний класифікатор модуля MeestExpress [MeestStreet]

**** `/`

<p>Інформація по вулиці<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID вулиці</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва вулиці українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва вулиці російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва вулиці англійською</p>
- **city** `Object` **_(обов'язково)_** - <p>Місто <br><b><a href="#api-Models-MeestCity">MeestCity</a></b></p>
- **house_numbers** `String[]` **_(обов'язково)_** - <p>Номери будинків по вулиці</p>

---

### [Meest Express] Дані відправника, одержувача

**** `/`

<p>Опис полів відправника, одержувача <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **MeestUser.name** `String` _(опціонально)_ - <p>Ім'я одержувача / відправника <br><code>Обов'язково заповнити при створенні ТТН</code></p>
- **MeestUser.phone** `String` _(опціонально)_ - <p>Телефон одержувача / відправника <br><code>Обов'язково заповнити при створенні ТТН</code></p>
- **MeestUser.branchID** `String` _(опціонально)_ - <p>Ідентифікатор підрозділу <br><code>Обов'язково заповнити при service = Branch</code></p>
- **MeestUser.addressID** `String` _(опціонально)_ - <p>Ідентифікатор адреси <br><code>Обов'язково заповнити при service = Door та створенні ТТН</code></p>
- **MeestUser.cityID** `String` _(опціонально)_ - <p>Ідентифікатор міста <br><code>Обов'язково заповнити при service = Door та прорахунку вартості</code></p>
- **MeestUser.building** `String` _(опціонально)_ - <p>Номер будинку <br><code>Обов'язково заповнити при service = Door та створенні ТТН</code></p>
- **MeestUser.flat** `String` _(опціонально)_ - <p>Номер квартири</p>
- **MeestUser.floor** `Integer` _(опціонально)_ - <p>Номер поверху</p>
- **MeestUser.service** `String` **_(обов'язково)_** - <p>Вид доставки<br> <ul> <li><b>Door</b> - Кур'єр</li> <li><b>Branch</b> - Відділення</li> </ul></p>

---

### Новини [News]

**** `/`

<p>Новини <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>Системний ID новини</p>
- **title** `String` **_(обов'язково)_** - <p>Назва новини</p>
- **photo** `String` **_(обов'язково)_** - <p>Код зображення у форматі base64</p>
- **preview** `String` **_(обов'язково)_** - <p>Прев'ю новини</p>
- **views** `Integer` **_(обов'язково)_** - <p>Кількість переглядів новини</p>
- **is_top** `Boolean` **_(обов'язково)_** - <p>Ознака ТОП</p>
- **created_at** `String` **_(обов'язково)_** - <p>Дата створення</p>
- **body** `String` **_(обов'язково)_** - <p>Текст новини</p>
- **content** `String` **_(обов'язково)_** - <p>Зміст новини</p>

#### Приклад відповіді

```json
HTTP/1.1 200 OK
{
   "success": true,
   "content": {
       "id": 5,
       "title": "Пример Тестовый 5",
       "photo": "data:image/svg+xml;base64,PD94....",
       "preview": "Название островов, скорее всего, происходит от устаревшего португальского слова «azures» ....",
       "created_at": "17 мая 2020, 13:37",
       "views": 2,
       "is_top": false,
       "body": "<! DOCTYPE htm.....",
       "content": "<ul><li><a href=\"#anchor-1\">Азо́рские острова́ </a></li>....</ul>"
   }
}
```

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryCity]

**** `/`

<p>Інформація по населеному пункту<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

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
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-OctopusRegion">RozetkaDeliveryRegion</a></b></p>
- **district** `Object|Null` **_(обов'язково)_** - <p>Район області <br><b><a href="#api-Models-OctopusDistrict">RozetkaDeliveryDistrict</a></b></p>

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryDistrict]

**** `/`

<p>Інформація по району<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID району</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва району українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва району російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва району англійською</p>
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-OctopusRegion">RozetkaDeliveryRegion</a></b></p>

---

### Габарити посилки (ROZETKA Delivery) [RozetkaDeliveryParams]

**** `/`

<p>Габарити посилки<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **weight** `Number` **_(обов'язково)_** - <p>Вага, в кілограмах (мінімальне значення - 0.1кг; максимальне значення - 30кг)</p>
- **length** `Number` **_(обов'язково)_** - <p>Довжина, в сантиметрах (мінімальне значення - 1см; максимальне значення - 120см)</p>
- **width** `Number` **_(обов'язково)_** - <p>Ширина, в сантиметрах (мінімальне значення - 1см; максимальне значення - 120см)</p>
- **height** `Number` **_(обов'язково)_** - <p>Висота, в сантиметрах (мінімальне значення - 1см; максимальне значення - 120см)</p>
- **volume** `Number` _(опціонально)_ - <p>Обʼємна вага, в кілограмах = (Length × Width × Height)/4000 или объем отправления (м³) × 250</p>

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryPickup]

**** `/`

<p>Інформація по відділенню<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **pickup_id** `String` **_(обов'язково)_** - <p>ID відділення</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва відділення українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва відділення російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва відділення англійською</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця розміщення відділення <br><b><a href="#api-Models-OctopusStreet">RozetkaDeliveryStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, в якому знаходиться відділення</p>
- **schedules** `RozetkaDeliveryPickupSchedules[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **schedule** `RozetkaDeliveryScheduleDefault` **_(обов'язково)_** - <p>Графік роботи <br><b><a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></b></p>
- **pickupChildren** `Boolean` **_(обов'язково)_** - <p>Чи доступне ваідділення для отримання посилом з MeestExpress</p>

---

### Налаштування відправника ROZETKA Delivery [RozetkaDeliveryPresetSender]

**** `/`

<p>Відправник<br> <i>Не є API-запитом/i&gt;</p>

**Версія:** 0.0.0

#### Успішна відповідь

**Request Body Parameters:**

- **type** `String` _(опціонально)_ - <p>Тип (физ-natural, юр-legal)</p>
- **city** `String` _(опціонально)_ - <p>Назва міста або UUID</p>
- **address** `String` _(опціонально)_ - <p>Адреса</p>
- **department** `String` _(опціонально)_ - <p>UUID відділення</p>
- **name** `String` _(опціонально)_ - <p>Імʼя (ПІБ або назва організації + данні для индитифікування)</p>
- **phones** `String[]` _(опціонально)_ - <p>Телефони, може бути декілька, перший - основний, інші інформаційні</p>
- **info** `String` _(опціонально)_ - <p>Інформація (Якщо юр особа, то на основі якого договору чи довіреності)</p>
**Response Body Parameters:**

- **carrier** `Integer` _(опціонально)_ - <p>Служба доставки відділення відправлення <br><i>1 - RZ Delivery, 4 - Meest</i></p>

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryRegion]

**** `/`

<p>Інформація по області<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID області</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва області українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва області російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва області англійською</p>

---

### Відправник (ROZETKA Delivery) [RozetkaDeliverySender]

**** `/`

<p>Відправник<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **type** `String` **_(обов'язково)_** - <p>Тип (фіз-natural, юр-legal)</p>
- **city** `String` **_(обов'язково)_** - <p>Назва міста або UUID</p>
- **address** `String` **_(обов'язково)_** - <p>Адреса</p>
- **department** `String` **_(обов'язково)_** - <p>UUID відділення</p>
- **name** `String` **_(обов'язково)_** - <p>Імʼя (ПІБ або назва організації + данні для индитифікування)</p>
- **phones** `String[]` **_(обов'язково)_** - <p>Телефони, може бути декілька, перший - основний, інші інформаційні</p>
- **info** `String` _(опціонально)_ - <p>Інформація (Якщо юр лице, то на основі якого договору чи довіреності)</p>

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryStreet]

**** `/`

<p>Інформація по вулиці<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID вулиці</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва вулиці українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва вулиці російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва вулиці англійською</p>
- **city** `Object` **_(обов'язково)_** - <p>Місто <br><b><a href="#api-Models-OctopusCity">RozetkaDeliveryCity</a></b></p>
- **house_numbers** `String[]` **_(обов'язково)_** - <p>Номери будинків по вулиці</p>

---

### [Створення замовлення] Дані про замовлення

**** `/`

<p>Опис полів при отриманні даних про доступні доставки і оплати замовлення <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **order.purchases** `PurchaseCO[]` **_(обов'язково)_** - <p>Масив товарів в замовленні <br> <a href="#api-Models-PurchaseCO"> Товар в замовленні </a></p>
- **order.delivery** `Object` **_(обов'язково)_** - <p>Дані про доступні доставки</p>
- **order.delivery.delivery_services_couriers** `DeliveryServiceCO[]` **_(обов'язково)_** - <p>Список доступних сервісів з методом доставки &quot;Кур'єр&quot; <br> <a href="#api-Models-DeliveryServiceCO">Сервіс доставки</a></p>
- **order.delivery.delivery_services_pickups** `DeliveryServiceCO[]` **_(обов'язково)_** - <p>Список доступних сервісів з методом доставки&quot;Самовивіз&quot; <b> зі вкладеними пунктами самовивозу</b> <br> <a href="#api-Models-DeliveryServiceCO">Сервіс доставки</a></p>
- **order.delivery.delivery_methods** `DeliveryMethodCO[]` **_(обов'язково)_** - <p>Список доступних методів доставки <br> <a href="#api-Models-DeliveryMethodCO"> Метод доставки </a></p>
- **order.delivery.active_delivery** `DeliveryForm` **_(обов'язково)_** - <p>Дані про активну (обрану) доставку <br> <a href="#api-Models-DeliveryForm">Обрана доставка</a></p>
- **order.delivery.locality** `LocalityCO` **_(обов'язково)_** - <p><a href="#api-Models-LocalityCO"> Місто </a></p>
- **order.payments** `PaymentMethodCO[]` **_(обов'язково)_** - <p>Список доступних методів оплати <br> <a href="#api-Models-PaymentMethodCO">Метод оплати </a></p>

---

### Товар, що конфігурується в замовленні [Config Goods]

**** `/`

<p>Опис полів в деталях товарів, що конфігуруються <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **purchase.transaction_id** `String` **_(обов'язково)_** - <p>ID транзакції</p>
- **conf_details.receiver_id** `String` **_(обов'язково)_** - <p>Унікальний ідентифікатор процесу у одержувача завдання (підрядник-виконавець послуги)</p>
- **conf_details.goods** `Array` **_(обов'язково)_** - <p>Одномірний асоціативний масив [ключ =&gt; значення] з деталями замовленого товару.</p>
- **conf_details.goods.name** `String` **_(обов'язково)_** - <p>Назва конфігураційного товару</p>
- **conf_details.goods.description** `String` **_(обов'язково)_** - <p>Опис конфігураційного товару</p>
- **conf_details.goods.price_base** `String` **_(обов'язково)_** - <p>Вартість товару</p>
- **conf_details.goods.img** `String` **_(обов'язково)_** - <p>Посилання на зображення</p>
- **conf_details.goods.article** `String` **_(обов'язково)_** - <p>Артикул</p>

#### Приклад відповіді

```json
{
 "conf_details":{
     "receiver_id": "1525776449",
     "goods":{
         "name": "Листовка, DIN A8 (52 x 74 mm)",
         "description": "Листовка, DIN A8 (52 x 74 mm), 1000 шт, Мелованая глянцевая, 350 г/м2, Без отделки",
         "price_base": "371.88",
         "img": "url.to.img",
         "article": null,
     }
 }
}
```

---

### Додаткова інформація про замовлення - КРЕДИТНА ФОРМА [OrderCreditInfo]

**** `/`

<p>Опис полів в моделі OrderCreditInfoModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **OrderCreditInfo** `Object` **_(обов'язково)_** - <p>OrderCreditInfoModel</p>
- **credit_info.id** `Number` **_(обов'язково)_** - <p>ID поля</p>
- **credit_info.field** `String` **_(обов'язково)_** - <p>Назва додаткового поля</p>
- **credit_info.value** `String` **_(обов'язково)_** - <p>Значення додаткового поля</p>

---

### Замовлення[Order]

**** `/`

<p>Опис полів в замовленні <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Order** `Object` **_(обов'язково)_** - <p>OrderModel</p>
- **order.id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **order.created** `String` **_(обов'язково)_** - <p>Дата створення замовлення</p>
- **order.changed** `String` **_(обов'язково)_** - <p>Дата зміни замовлення</p>
- **order.amount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах (з системи Розетка)</p>
- **order.amount_with_discount** `String` **_(обов'язково)_** - <p>Сума замовлення по товарах зі знижкою (без урахування доставки)</p>
- **order.cost** `String` **_(обов'язково)_** - <p>Загальна сума замовлення, що включає доставку</p>
- **order.cost_with_discount** `String` **_(обов'язково)_** - <p>Фінальна сума (сума + доставка-знижки), яку платить клієнт за замовлення</p>
- **order.status** `Integer` **_(обов'язково)_** - <p><a href="#api-Orders-GetOrderStatusSearch">Статус замовлення</a></p>
- **order.status_group** `Integer` **_(обов'язково)_** - <p>Група статусу замовлення <br> 1 - В обробці, 2 - Успішні, 3 - Неуспішні</p>
- **order.items_photos** `Object[]` **_(обов'язково)_** - <p>Фото товару</p>
- **order.items_photos.id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **order.items_photos.url** `String` **_(обов'язково)_** - <p>Url прев'ю товару</p>
- **order.items_photos.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **order.items_photos.item_url** `String` **_(обов'язково)_** - <p>Url товару</p>
- **order.items_photos.item_price** `String` **_(обов'язково)_** - <p>Ціна товару (price_with_discount)</p>
- **order.seller_comment** `String[]` **_(обов'язково)_** - <p>Всі коментарі продавця до замовлення. Повертає масив json у вигляді: <b>[{&quot;comment&quot;:&quot;testComment111&quot;,&quot;created&quot;:1490203200},...]</b></p>
- **order.seller_comment_created** `String` **_(обов'язково)_** - <p>Дата створення коментаря продавця</p>
- **order.current_seller_comment** `String` **_(обов'язково)_** - <p>Поточний коментар продавця</p>
- **order.comment** `String` **_(обов'язково)_** - <p>Коментар до замовлення (від покупця)</p>
- **order.user_phone** `String` **_(обов'язково)_** - <p>Телефон покупця</p>
- **order.user_title** `Object` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_title.first_name** `String` **_(обов'язково)_** - <p>Ім'я покупця</p>
- **order.user_title.last_name** `String` **_(обов'язково)_** - <p>Прізвище покупця</p>
- **order.user_title.second_name** `String` **_(обов'язково)_** - <p>По батькові покупця</p>
- **order.user_title.full_name** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **order.user_rating** `Integer|Null` **_(обов'язково)_** - <p><code>Deprecated</code> Відсоток викупу замовлень покупцем<br> 1 - високий, 2 - середній, 3 - низький</p>
- **order.recipient_phone** `String` **_(обов'язково)_** - <p>Телефон одержувача <code>Deprecated</code> <br> Поле &quot;Телефон одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_phone</p>
- **order.recipient_title** `Object` **_(обов'язково)_** - <p>ПІБ одержувача <code>Deprecated</code><br> Поле &quot;ПІБ одержувача&quot; тепер передається в <a href="#api-Models-DeliveryDetails" class="nav-list-item">Інформації про доставку</a>, поле recipient_title</p>
- **order.recipient_title.first_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Ім'я одержувача</p>
- **order.recipient_title.last_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> Прізвище одержувача</p>
- **order.recipient_title.second_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> По батькові одержувача</p>
- **order.recipient_title.full_name** `String` **_(обов'язково)_** - <p><code>Deprecated</code> ПІБ одержувача</p>
- **order.from_warehouse** `Integer` **_(обов'язково)_** - <p>Замовлення формується зі складу, використовують партнери</p>
- **order.ttn** `String` **_(обов'язково)_** - <p>Товарно-транспортна накладна <i>Required - при статусі замовлення = 3</i></p>
- **order.total_quantity** `Integer` **_(обов'язково)_** - <p>Загальна кількість товарів в замовленні</p>
- **order.mk_created** `Boolean` **_(обов'язково)_** - <p>Ознака, де було створено ТТН, true - на нашому боці, false - не на нашому боці</p>
- **order.can_copy** `Boolean` **_(обов'язково)_** - <p>Чи доступне замовлення для копіювання</p>
- **order.created_type** `Number` **_(обов'язково)_** - <p>Тип створення замовлення <br> 1 - По API, 2 - З адмінки, 3 - З кабінету продавця, 4 - Від покупця, 6 - Повторний трекінг</p>
- **order.is_viewed** `Boolean` **_(обов'язково)_** - <p>Переглянуто чи замовлення</p>
- **order.callback_off** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Не передзвонювати мені, я впевнений в Замовленні&quot;</p> <ul>  <li>0 - покупець не вибирав опцію «не передзвонювати"</li>  <li>1 - покупець впевнений в замовленні, не передзвонювати</li> </ul>
- **order.is_fulfillment** `Boolean` **_(обов'язково)_** - <p>Ознака, що замовлення проходить по системі Фулфілмент</p>
- **order.duplicate_order_id** `Integer` **_(обов'язково)_** - <p>ID дубля замовлення</p>
- **order.is_delivery_edit_available** `Boolean` **_(обов'язково)_** - <p>Ознака, що в замовленні доступне редагування доставки</p>
- **order.refund_status** `Integer` **_(обов'язково)_** - <p>Статус повернення коштів. Доступний тільки для фулфілмент замовлень</p>
- **order.ff_can_approve** `Boolean` **_(обов'язково)_** - <p>Ознака можливості підтвердити фулфілмент замовлення. Доступний тільки для фулфілмент замовлень</p>
- **order.can_prolong** `Integer` **_(обов'язково)_** - <p>Ознака, чи можна продовжити термін резерву замовлення</p>
- **order.is_review_request_send** `Integer` **_(обов'язково)_** - <p>Чи відправдений покупцю запит на відгук про магазин</p>
- **order.review_request_status** `String` **_(обов'язково)_** - <p>Статус відправдення покупцю запита на відгук про магазин</p>

---

### [Створення замовлення] Нове замовлення

**** `/`

<p>Опис полів в новому замовленні <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **orderKey** `String` _(опціонально)_ - <p>Ключ замовлення</p>
- **purchases** `PurchaseForm[]` **_(обов'язково)_** - <p>Масив <a href="#api-Models-PurchaseForm"> товарів в замовленні </a></p>
- **delivery** `DeliveryForm` **_(обов'язково)_** - <p><a href="#api-Models-DeliveryForm"> Обрана доставка </a></p>
- **recipient** `RecipientForm` **_(обов'язково)_** - <p><a href="#api-Models-RecipientForm"> Одержувач </a></p>
- **payment_method_id** `Integer` _(опціонально)_ - <p>ID методу оплати</p>
- **user_id** `Integer` _(опціонально)_ - <p>ID покупця *Не обов'язково до заповнення при повністю введених даних про одержувача</p>
- **comment** `String` _(опціонально)_ - <p>Коментар до замовлення</p>

---

### Дані про оплату замовлення [OrderPaymentDto]

**** `/`

<p>Дані про оплату замовлення <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **payment_method_id** `Integer` **_(обов'язково)_** - <p>ID методу оплати</p>
- **payment_method_name** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **payment_type** `String` **_(обов'язково)_** - <p>Тип оплати</p>
- **payment_type_title** `String` **_(обов'язково)_** - <p>Назва типу Назва</p>
- **payment_status** `Object` **_(обов'язково)_** - <p>Дані про поточний статус оплати замовлення<br> <b><a href="#api-Models-OrderStatusPayment" class="nav-list-item">Статус оплати</a></b> (об'ект)</p>
- **credit** `Object` **_(обов'язково)_** - <p>Кредитні дані<br> <i>Доступны для типа оплаты <code>credit</code></i></p>
- **credit.credit_status** `Integer` **_(обов'язково)_** - <p>Статус кредиту</p> <ul>     <li><code>0 - Статус не заданий</code></li>     <li>1 - Відхилений продавцем</li>     <li>2 - Новий</li>     <li>3 - У роботі</li>     <li>4 - Схвалений</li>     <li>5 - Відхилений</li>     <li>6 - Відмова клієнта від кредиту</li> </ul>
- **credit.credit_info** `Object[]` **_(обов'язково)_** - <p>Інформація про кредит<br> <b><a href="#api-Models-OrderCreditInfoDetails" class="nav-list-item">OrderCreditInfo</a></b>[]<br></p>
- **credit.credit_broker** `Boolean` **_(обов'язково)_** - <p>Ознака &quot;Кредитний брокер&quot;</p>

#### Приклад відповіді

```json
"payment":{
     "payment_method_id": 942,
     "payment_method_name": "Кредит 0,01% з пільговим періодом 10 місяців – 12 міс",
     "payment_type": "credit",
     "payment_type_title": "Кредит",
     "payment_status": null,
     "credit":{
         "credit_status": 0,
         "credit_info":[
             {
                 "id": 123123,
                 "field": "identification_code",
                 "value": "99******99"
             }
         ],
         "credit_broker": false
     }
}
```

```json
"payment":{
     "payment_method_id": 1,
     "payment_method_name": "Оплата при отриманні товару",
     "payment_type": "cash",
     "payment_type_title": "Готівкова",
     "payment_status": null,
     "credit": null
}
```

```json
"payment":{
     "payment_method_id": 123,
     "payment_method_name": "Оплата картою",
     "payment_type": "card",
     "payment_type_title": "Банківська карта",
     "payment_status":{
         "order_id": 735754508,
         "status_payment_id": 6,
         "name": "expired",
         "title": "Термін дії минув",
         "value": 5,
         "payment_invoice_id": 500349732,
         "created_at": "2019-11-26 17:58:11"
     },
     "credit": null
}
```

---

### Статус замовлення [OrderStatus]

**** `/`

<p>Опис полів в моделі OrderStatus <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **OrderStatus** `Object` **_(обов'язково)_** - <p>OrderStatusModel, Статус замовлення</p>
- **orderStatus.id** `Integer` **_(обов'язково)_** - <p>ID статусу замовлення</p>
- **orderStatus.name** `String` **_(обов'язково)_** - <p>Назва статусу (рос.)</p>
- **orderStatus.name_uk** `String` **_(обов'язково)_** - <p>Назва статусу (укр.)</p>
- **orderStatus.name_en** `String` **_(обов'язково)_** - <p>Назва статусу (англ.)</p>
- **orderStatus.status_group** `Number` **_(обов'язково)_** - <p>ID статус групи<br></p> <ul><li>1 - В обробці</li><li>2 - Успішно завершені</li><li>3 - Неуспішно завершені (скасовані)</li></ul>
- **orderStatus.status** `Number` **_(обов'язково)_** - <p>Статус (0 - заблокований, 1 - активний)</p>
- **orderStatus.color** `String` **_(обов'язково)_** - <p>Колір статусу</p>
- **orderStatus.title** `String` **_(обов'язково)_** - <p>Назва статусу на мові інтерфейсу</p>

---

### Історія статусів замовлення[OrderStatusHistory]

**** `/`

<p>Опис полів в моделі OrderStatusHistory <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **OrderStatusHistory** `Object` **_(обов'язково)_** - <p>Model</p>
- **order_status_history.status_id** `Integer` **_(обов'язково)_** - <p>ID статусу</p>
- **order_status_history.created** `String` **_(обов'язково)_** - <p>Дата зміни статусу</p>
- **order_status_history.status** `Object` **_(обов'язково)_** - <p><b><a href="#api-Models-OrderStatusDetails" class="nav-list-item">OrderStatusModel</a></b>. <br> Статус замовлення</p>

---

### Статус оплати замовлення [OrderStatusPayment]

**** `/`

<p>Опис полів статусу оплати замовлення (для замовлень з оплатою карткою) <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **OrderStatusPayment** `Object` **_(обов'язково)_** - <p>OrderStatusPaymentModel</p>
- **OrderStatusPayment.order_id** `Integer` **_(обов'язково)_** - <p>ID замовлення</p>
- **OrderStatusPayment.status_payment_id** `Integer` **_(обов'язково)_** - <p>ID статусу оплати</p>
- **OrderStatusPayment.name** `String` **_(обов'язково)_** - <p>Ключ статусу оплати</p>
- **OrderStatusPayment.title** `String` **_(обов'язково)_** - <p>Назва статусу оплати (відповідно до обраної мови)</p>
- **OrderStatusPayment.value** `Integer` **_(обов'язково)_** - <p><code>Deprecated</code>Числове значення (не використовується)</p>
- **OrderStatusPayment.payment_invoice_id** `Number` **_(обов'язково)_** - <p>ID рахунку на оплату</p>
- **OrderStatusPayment.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису про зміну статусу оплати</p>

---

### [Створення замовлення] Метод оплати

**** `/`

<p>Опис полів методу оплати при створенні замовлення <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **paymentMethodId** `Integer` **_(обов'язково)_** - <p>ID методу оплати</p>
- **title** `String` **_(обов'язково)_** - <p>Назва методу оплати</p>
- **infoIcon** `String` **_(обов'язково)_** - <p>Посилання на іконку</p>

---

### [Створення замовлення] Пункт самовивозу

**** `/`

<p>Опис полів пункту самовивозу при створенні замовлення <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID пункту самовивозу</p>
- **deliveryServiceId** `Integer` **_(обов'язково)_** - <p>ID сервісу доставки</p>
- **house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **number** `String` **_(обов'язково)_** - <p>Номер</p>
- **street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **schedule** `String` **_(обов'язково)_** - <p>Графік роботи</p>
- **latitude** `String` **_(обов'язково)_** - <p>Широта (координати)</p>
- **longitude** `String` **_(обов'язково)_** - <p>Довгота (координати)</p>
- **maximumHeight** `Integer` **_(обов'язково)_** - <p>Максимальна висота посилки</p>
- **maximumWeight** `Integer` **_(обов'язково)_** - <p>Максимальна вага посилки</p>
- **forBreakable** `Boolean` **_(обов'язково)_** - <p>Ознака: чи можна відправляти крихке</p>
- **status** `Boolean` **_(обов'язково)_** - <p>Статус <br> <ul> <li>&quot;active&quot; - Активний</li> <li>&quot;locked&quot; - Відключений</li> </ul></p>
- **title** `String` **_(обов'язково)_** - <p>Повна адреса пункту самовивозу (без міста)</p>

---

### Виробник [Producer]

**** `/`

<p>Опис полів виробника <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Producer** `Object` **_(обов'язково)_** - <p>ProducerModel</p>
- **Producer.id** `Number` **_(обов'язково)_** - <p>ID виробника</p>
- **Producer.title** `String` **_(обов'язково)_** - <p>Назва виробника</p>

---

### [Створення замовлення] Товар в замовленні (відповідь)

**** `/`

<p>Опис полів товару в прорахованому замовленні <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Успішна відповідь

- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **quantity** `Integer` **_(обов'язково)_** - <p>Кількість</p>
- **cost** `Integer` **_(обов'язково)_** - <p>Вартість товарів</p>
- **cost_with_discount** `Integer` **_(обов'язково)_** - <p>Вартість товарів зі знижкою</p>
- **price** `Integer` **_(обов'язково)_** - <p>Вартість одиниці товару</p>
- **price_with_discount** `Integer` **_(обов'язково)_** - <p>Вартість одиниці товару зі знижкою</p>
- **old_price** `Integer` **_(обов'язково)_** - <p>Стара вартість одиниці товару</p>
- **item** `PurchaseItem` **_(обов'язково)_** - <p>Дані про товар</p>
- **item.id** `Integer` **_(обов'язково)_** - <p>Id товару</p>
- **item.title** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **item.category** `Array` **_(обов'язково)_** - <p>Категорія товару</p>
- **item.category.id** `Integer` **_(обов'язково)_** - <p>ID категорії товару</p>
- **item.category.title** `String` **_(обов'язково)_** - <p>Назва категорії товару</p>
- **item.sla_rz_id** `Integer` **_(обов'язково)_** - <p>ID SLA в системі Розетка</p>
- **item.url** `String` **_(обов'язково)_** - <p>Посилання на сторінку товару</p>
- **item.photo_preview** `String` **_(обов'язково)_** - <p>Посилання на превью товару</p>
- **item.stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару на складі<br> *<code>Більше цієї кількості не можна додати в замовлення </code></p>

---

### Товар в замовленні [Purchase]

**** `/`

<p>Опис полів в товарі замовлення <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Purchase** `Object` **_(обов'язково)_** - <p>PurchaseModel</p>
- **purchase.id** `Integer` **_(обов'язково)_** - <p>ID покупки</p>
- **purchase.cost** `Number` **_(обов'язково)_** - <p>Загальна ціна покупки (ціна товару Х кількість)</p>
- **purchase.cost_with_discount** `Number` **_(обов'язково)_** - <p>Загальна ціна покупки зі знижкою</p>
- **purchase.price** `Number` **_(обов'язково)_** - <p>Ціна за 1 товар</p>
- **purchase.price_with_discount** `Number` **_(обов'язково)_** - <p>Ціна за 1 товар зі знижкою</p>
- **purchase.quantity** `Integer` **_(обов'язково)_** - <p>Кількість товарів <i>Required при створенні або відновленні замовлення</i></p>
- **purchase.item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **purchase.item_name** `String` **_(обов'язково)_** - <p>Назва товару</p>
- **purchase.kit_id** `Number` **_(обов'язково)_** - <p>Id kit</p>
- **purchase.status** `Integer` **_(обов'язково)_** - <p>статус товару 1 - актуальний товар, 2 - товар повернутий покупцем, 0 - видалений при редагуванні товару</p>
- **purchase.item** `Object` **_(обов'язково)_** - <p>ItemModel <a href="#api-Models-ItemDetails">ItemModel</a> (Товар)</p>
- **purchase.conf_details** `Array` **_(обов'язково)_** - <p>Деталі для конфігурованих</p>
- **purchase.ttn** `String` **_(обов'язково)_** - <p><s>ТТН товару</s> <code>не використовується</code></p>
- **purchase.order_status** `Integer` **_(обов'язково)_** - <p>який статус замовлення для конкрертного товару, якщо товари відправили різними посилками. товарів</a></p>
- **purchase.is_additional_item** `Boolean` **_(обов'язково)_** - <p>Ознака додаткового товару</p>

---

### [Створення замовлення] Товар в замовленні

**** `/`

<p>Опис полів товару в новому замовленні <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **item_id** `Integer` **_(обов'язково)_** - <p>ID товару</p>
- **quantity** `Integer` **_(обов'язково)_** - <p>Кількість</p>

---

### Отримувач ROZETKA Delivery [RZDeliveryReceiverResponseDto]

**** `/`

<p>Відправник<br> <i>Не є API-запитом/i&gt;</p>

**Версія:** 0.0.0

#### Успішна відповідь

- **ttn.receiver** `Object|null` **_(обов'язково)_** - <p>Отримувач</p>
- **ttn.receiver.name** `String|null` **_(обов'язково)_** - <p>Ім'я (ПІБ або назва організації + дані, що ідентифікують)</p>
- **ttn.receiver.address** `String|null` **_(обов'язково)_** - <p>Адреса</p>
- **ttn.receiver.city** `String|null` **_(обов'язково)_** - <p>Назва або UUID міста</p>
- **ttn.receiver.department** `String|null` **_(обов'язково)_** - <p>UUID відділення</p>
- **ttn.receiver.department_schedule** `RozetkaDeliveryScheduleDefault|null` **_(обов'язково)_** - <p>Графік роботи відділення <a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></p>
- **ttn.receiver.department_schedules** `RozetkaDeliveryPickupSchedules[]|[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **ttn.receiver.department_type** `Integer|null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **ttn.receiver.phones** `String[]|null` **_(обов'язково)_** - <p>Телефони <br><small>(може бути декілька, перший - основний, інші інформаційні)</small></p>
- **ttn.receiver.type** `String|null` **_(обов'язково)_** - <p>Тип</p> <ul>     <li><code>natural</code> - Фіз.особа</li>     <li><code>legal</code> - Юр.особа</li> </ul>

---

### Відправник ROZETKA Delivery [RZDeliverySenderResponseDto]

**** `/`

<p>Відправник<br> <i>Не є API-запитом/i&gt;</p>

**Версія:** 0.0.0

#### Успішна відповідь

- **ttn.sender** `Object|null` **_(обов'язково)_** - <p>Відправник</p>
- **ttn.sender.name** `String|null` **_(обов'язково)_** - <p>Ім'я (ПІБ або назва організації + дані, що ідентифікують)</p>
- **ttn.sender.address** `String|null` **_(обов'язково)_** - <p>Адреса</p>
- **ttn.sender.city** `String|null` **_(обов'язково)_** - <p>Назва або UUID міста</p>
- **ttn.sender.department** `String|null` **_(обов'язково)_** - <p>UUID відділення</p>
- **ttn.sender.department_schedule** `RozetkaDeliveryScheduleDefault|null` **_(обов'язково)_** - <p>Графік роботи відділення <a href="#api-Models-RozetkaDeliveryScheduleDefault">RozetkaDeliveryScheduleDefault</a></p>
- **ttn.sender.department_schedules** `RozetkaDeliveryPickupSchedules[]|[]` **_(обов'язково)_** - <p>Список графіків роботи у святкові дні <br> <b><a href="#api-Models-RozetkaDeliveryPickupSchedules">RozetkaDeliveryPickupSchedules</a></b></p>
- **ttn.sender.department_type** `Integer|null` **_(обов'язково)_** - <p>Тип відділення<br></p> <ul>     <li>null - тип не задано</li>     <li>0 - дефолтний</li>     <li>1 - міні-відділення</li> </ul>
- **ttn.sender.phones** `String[]|null` **_(обов'язково)_** - <p>Телефони <br><small>(може бути декілька, перший - основний, інші інформаційні)</small></p>
- **ttn.sender.type** `String|null` **_(обов'язково)_** - <p>Тип</p> <ul>     <li><code>natural</code> - Фіз.особа</li>     <li><code>legal</code> - Юр.особа</li> </ul>

---

### [Створення замовлення] Одержувач

**** `/`

<p>Опис полів одержувача в новому замовленні <br> <i> Не є АПІ-запитом </i></p>

**Версія:** 1.0.0

#### Параметри запиту

**Request Body Parameters:**

- **last_name** `String` **_(обов'язково)_** - <p>Прізвище</p>
- **first_name** `String` **_(обов'язково)_** - <p>Ім'я</p>
- **second_name** `String` _(опціонально)_ - <p>По-батькові</p>
- **phone** `String` **_(обов'язково)_** - <p>Телефон</p>
- **is_another_recipient** `Boolean` _(опціонально)_ - <p>Ознака, що одержувач відрізняється від оформлювача замовлення</p>

---

### Звіт про продажі [Report]

**** `/`

<p>Опис полів в моделі Report <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **ReportModel.id** `Integer` **_(обов'язково)_** - <p>ID звіту</p>
- **ReportModel.created_at** `DateTime` **_(обов'язково)_** - <p>Дата створення звіту</p>
- **ReportModel.report_period** `DateTime` **_(обов'язково)_** - <p>Період звіту</p>
- **ReportModel.filename** `String` **_(обов'язково)_** - <p>Назва файлу рахунку</p>
- **ReportModel.status** `Integer` **_(обов'язково)_** - <p>Статус звіту</p>
- **ReportModel.correction_filename** `String` **_(обов'язково)_** - <p>Назва файлу звіту про коригування</p>

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryPickupSchedules]

**** `/`

<p>Інформація по графіку роботи у святкові дні<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>ID графіка роботи</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва графіка українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва графіка російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва графіка англійською</p>
- **start_date** `String` **_(обов'язково)_** - <p>Дата початку роботи</p>
- **end_date** `String` **_(обов'язково)_** - <p>Дата закінчення роботи</p>
- **start_time** `String` **_(обов'язково)_** - <p>Час початку роботи</p>
- **end_time** `String` **_(обов'язково)_** - <p>Час закінчення роботи</p>
- **status** `Object` **_(обов'язково)_** - <p>Статус графіка роботи</p>
- **status.id** `Object` **_(обов'язково)_** - <p>ID статусу</p>
- **status.name_uk** `String` **_(обов'язково)_** - <p>Назва статусу українською</p>
- **status.name_ru** `String` **_(обов'язково)_** - <p>Назва статусу російською</p>
- **status.name_en** `String` **_(обов'язково)_** - <p>Назва статусу англійською</p>

---

### Адресний класифікатор модуля ROZETKA Delivery [RozetkaDeliveryScheduleDefault]

**** `/`

<p>Інформація по графіку роботи<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **DayName** `Object` **_(обов'язково)_** - <p>День</p>
- **day.from** `String` **_(обов'язково)_** - <p>Години роботи (від)</p>
- **day.to** `String` **_(обов'язково)_** - <p>Години роботи (по)</p>

#### Приклад відповіді

```json
"schedule":{
 "Monday":{"from": "09:00", "to": "20:00"},
 "Tuesday":{"from": "09:00", "to": "20:00"},
 "Wednesday":{"from": "09:00", "to": "20:00"},
 "Thursday":{"from": "09:00", "to": "20:00"},
 "Friday":{"from": "09:00", "to": "20:00"},
 "Saturday":{"from": "09:00", "to": "20:00"},
 "Sunday":{"from": "10:00", "to": "19:00"}
},
```

---

### Менеджер [Seller]

**** `/`

<p>Опис полів в моделі Seller<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Seller** `Object` **_(обов'язково)_** - <p>Model</p>
- **seller.id** `Integer` **_(обов'язково)_** - <p>ID менеджера</p>
- **seller.login** `String` **_(обов'язково)_** - <p>Логін менеджера</p>
- **seller.status** `Number` **_(обов'язково)_** - <p>Cтатус менеджера (0 - активний, 1 - видалений)</p>
- **seller.skype** `String` **_(обов'язково)_** - <p>Skype</p>
- **seller.fio** `String` **_(обов'язково)_** - <p>ПІБ менеджера</p>
- **seller.email** `String` **_(обов'язково)_** - <p>E-mail</p>
- **seller.email_verified** `String` **_(обов'язково)_** - <p>Ознака, чи верифікований email</p>
- **seller.email_verification_date** `String` **_(обов'язково)_** - <p>Дата верифікації email</p>
- **seller.lang** `String` **_(обов'язково)_** - <p>Мова</p>
- **seller.seller_roles** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerRolesDetails">SellerRoles</a></b>[], список ролей менеджера</p>
- **seller.seller_phones** `Object[]` **_(обов'язково)_** - <p><b><a href="#api-Models-SellerPhonesDetails">SellerPhone</a></b>[], список телефонів менеджера</p>
- **seller.notify_phone** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти смс-повідомлення менеджеру</p>
- **seller.notify_email** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно відправляти email-повідомлення менеджеру</p>
- **seller.two_step_auth** `Boolean` **_(обов'язково)_** - <p>Прапор, що відзначає чи потрібно включати двофакторну авторизацію менеджеру</p>
- **seller.agent_id** `Integer|null` **_(обов'язково)_** - <p>Agent ID</p>

---

### Повідомлення менеджера [SellerNotifyOptions]

**** `/`

<p>Опис полів в моделі SellerNotifyOptions <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **SellerNotifyOption** `Object` **_(обов'язково)_** - <p>SellerNotifyOptionModel</p>
- **sellerNotifyOption.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **sellerNotifyOption.seller_id** `Integer` **_(обов'язково)_** - <p>ID менеджера магазину в системі Розетка Маркетплейс</p>
- **sellerNotifyOption.sms_time_setting** `String` **_(обов'язково)_** - <p>Налаштування часу смс-сповіщення у вигляді: <br> {&quot;mon&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;tue&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;wed&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;thu&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;fri&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sat&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true},<br> &quot;sun&quot;:{&quot;from&quot;:&quot;08:00&quot;,&quot;to&quot;:&quot;21:00&quot;,&quot;active&quot;:true}}<br></p>
- **sellerNotifyOption.notify_phone_id** `Integer` **_(обов'язково)_** - <p>ID телефону менеджера для смс</p>
- **sellerNotifyOption.new_ttn** `Bool` **_(обов'язково)_** - <p>Сповіщення про нову ТТН</p>
- **sellerNotifyOption.new_reviews** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий відгук про магазин</p>
- **sellerNotifyOption.new_order** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_user** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання від користувача</p>
- **sellerNotifyOption.new_message** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове повідомлення</p>
- **sellerNotifyOption.sms_new_order** `Bool` **_(обов'язково)_** - <p>Смс-сповіщення про нове замовлення</p>
- **sellerNotifyOption.new_question_item** `Bool` **_(обов'язково)_** - <p>Сповіщення про нове питання про товар</p>
- **sellerNotifyOption.new_invoices** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий виставлений рахунок</p>
- **sellerNotifyOption.new_reports** `Bool` **_(обов'язково)_** - <p>Сповіщення про новий звіт</p>
- **sellerNotifyOption.new_orders_remind** `Bool` **_(обов'язково)_** - <p>Нагадування про нові замовлення</p>
- **sellerNotifyOption.user_cancel_order** `Bool` **_(обов'язково)_** - <p>Нагадування про скасування користувачем замовлення</p>
- **sellerNotifyOption.balance_notification** `Bool` **_(обов'язково)_** - <p>Нагадування про поповнення балансу</p>
- **sellerNotifyOption.channel_new_order** `Number` **_(обов'язково)_** - <p>Канал сповіщення про нове замовлення <br></p> <ul> <li>0 - Не отримувати</li> <li>1 - Telegram</li> <li>2 - Viber/SMS</li> </ul>

---

### Телефони менеджера [SellerPhones]

**** `/`

<p>Опис полів в моделі SellerPhones <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **SellerPhone** `Object` **_(обов'язково)_** - <p>SellerPhoneModel</p>
- **seller_phone.id** `Integer` **_(обов'язково)_** - <p>ID запису</p>
- **seller_phone.phone_number** `String` **_(обов'язково)_** - <p>Телефон</p>
- **seller_phone.confirmed** `Boolean` **_(обов'язково)_** - <p>Чи є телефон підтвердженим</p>
- **seller_phone.confirmation_date** `Boolean` **_(обов'язково)_** - <p>Дата верифікації телефону</p>

---

### Ролі менеджера [SellerRoles]

**** `/`

<p>Опис полів в моделі SellerRoles <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **SellerRoles** `Object` **_(обов'язково)_** - <p>SellerRolesModel</p>
- **seller_rbac_auth_item.name** `String` **_(обов'язково)_** - <p>Назва ролі</p>
- **seller_rbac_auth_item.type** `Integer` **_(обов'язково)_** - <p>Тип (1 - роль, 2 - permission)</p>
- **seller_rbac_auth_item.description** `Text` **_(обов'язково)_** - <p>Опис ролі</p>

---

### Набір доставки [Sla]

**** `/`

<p>Опис полів в моделі SlaModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **Sla.id** `Integer` **_(обов'язково)_** - <p>ID набору доставки</p>
- **Sla.title** `String` **_(обов'язково)_** - <p>Заголовок набору доставки</p>
- **Sla.rz_id** `Integer` **_(обов'язково)_** - <p>Внутрішній ID в системі Розетки<br> <b>*Важливо!</b> Це значення використовується в товарах (<a href="#api-Models-ItemDetails">Item</a>) <br><i>Значення заповнюється, коли активується набір доставки</a></p>
- **Sla.status** `Integer` **_(обов'язково)_** - <p>Статус</p> <ul>  <li>1 - Активний</li>  <li>0 - Заблокований</li> </ul>
- **Sla.default_for_new_items** `Boolean` **_(обов'язково)_** - <p>Набір застосовується за замовчуванням для нових товарів</p>

---

### Джерела які очікують [SourceSynchronizationWait]

**** `/`

<p>Опис полів джерел які очікують <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **id** `Integer` **_(обов'язково)_** - <p>ID джерела</p>
- **last_sync_api** `String` **_(обов'язково)_** - <p>Дата останньої синхронізації</p>

---

### Доступні статуси замовлення [StatusAvailableDetailed]

**** `/`

<p>Опис полів в моделі StatusAvailableDetailed <br> <i>Не является АПИ-запросом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableDetailedModel</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>
- **status_available.name** `String` **_(обов'язково)_** - <p>Назва</p>
- **status_available.front_group** `Integer` **_(обов'язково)_** - <p>Група для мапингу на фронтенді</p>

---

### Доступні статуси замовлення [StatusAvailable]

**** `/`

<p>Опис полів в моделі StatusAvailable <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **StatusAvailable** `Object` **_(обов'язково)_** - <p>StatusAvailableModel</p>
- **status_available.id** `Integer` **_(обов'язково)_** - <p>ID статусу</p>
- **status_available.parent_id** `Integer` **_(обов'язково)_** - <p>ID материнського статусу</p>
- **status_available.child_id** `Integer` **_(обов'язково)_** - <p>ID дочірнього статусу (доступного для материнського)</p>
- **status_available.delivery_type** `Number` **_(обов'язково)_** - <p>Тип доставки (1 - доставка від продавця, 0 - зовнішня служба доставки)</p>
- **status_available.market_group** `Integer` **_(обов'язково)_** - <p>Група продавця</p>

---

### Джерело синхронізації [SyncSource]

**** `/`

<p>Опис полів джерела синхронізації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **SyncSource** `Object` **_(обов'язково)_** - <p>SyncSourceModel</p>
- **SyncSource.id** `Number` **_(обов'язково)_** - <p>ID джерела</p>
- **SyncSource.availability** `Number` **_(обов'язково)_** - <p>Управління товарами <i>3 - По залишкам, 4 - по API</i></p>

---

### Інформація про графіки роботи [TimeTableInfo]

**** `/`

<p>Опис полів в моделі TimeTableModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **TimeTable** `Object` **_(обов'язково)_** - <p>Model</p>
- **timeTable.id** `Integer` **_(обов'язково)_** - <p>ID</p>
- **timeTable.is_day_off** `boolean` **_(обов'язково)_** - <p>Вихідний день (так / ні)</p>
- **timeTable.day_of_week** `Integer` **_(обов'язково)_** - <p>День тижня (1 - понеділок, ... 7 - неділя)</p>
- **timeTable.time_start** `String` **_(обов'язково)_** - <p>Час початку роботи</p>
- **timeTable.time_end** `String` **_(обов'язково)_** - <p>Час закінчення роботи</p>
- **timeTable.day_start** `String` **_(обов'язково)_** - <p>Початок періоду з особливим графіком</p>
- **timeTable.day_end** `String` **_(обов'язково)_** - <p>Кінець періоду з особливим графіком</p>
- **timeTable.type** `Integer` **_(обов'язково)_** - <p>Тип графіка (0 - звичайний, 1 - особливий)</p>
- **timeTable.created_at** `String` **_(обов'язково)_** - <p>Дата створення запису</p>
- **timeTable.updated_at** `String` **_(обов'язково)_** - <p>Дата останньої зміни запису</p>

---

### Інформація про вихідні дні [TimetableExcludedDatesInfo]

**** `/`

<p>Опис полів в моделі TimetableExcludedDatesModel <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

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

---

### [Ukrposhta] Адреса відправника, одержувача (створення ТТН)

**** `/`

<p>Опис полів адреси клієнта Укрпошти (для створення ТТН)<br> <b>UkrPostAddressModel</b><br> <i>Не є API-запитом</i> <br><code>*Обов'язково заповнити при створенні ТТН</code></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **UkrPostAddressModel.postcode** `String` **_(обов'язково)_** - <p>Поштовий індекс<b>*</b><br> <code>**Важливо!</code><i>Зверніть увагу, що зазначений поштовий індекс відповідає певній адресі існуючого відділення. При зазначенні поштового індексу Укрпошта автоматично проставляє Місто і Область доставки.</i></p>
- **UkrPostAddressModel.country** `String` _(опціонально)_ - <p>Країна</p>
- **UkrPostAddressModel.region** `String` _(опціонально)_ - <p>Область <br><code>maxLength: 25</code></p>
- **UkrPostAddressModel.city** `String` _(опціонально)_ - <p>Місто <br><code>maxLength: 45</code></p>
- **UkrPostAddressModel.district** `String` _(опціонально)_ - <p>Район <br><code>maxLength: 45</code></p>
- **UkrPostAddressModel.street** `String` **_(обов'язково)_** - <p>Вулиця<b>*</b><br><code>maxLength: 255</code></p>
- **UkrPostAddressModel.houseNumber** `String` **_(обов'язково)_** - <p>Номер будинку<b>*</b> <br><code>maxLength: 15</code></p>
- **UkrPostAddressModel.apartmentNumber** `String` _(опціонально)_ - <p>Номер квартири <br><code>maxLength: 15</code></p>

---

### [Ukrposhta] Дані відправника, одержувача (створення ТТН)

**** `/`

<p>Опис полів клієнта Укрпошти (для створення ТТН)<br> <b>UkrPostClientModel</b><br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

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

#### Успішна відповідь

**Response Body Parameters:**

- **type** `String` **_(обов'язково)_** - <p>Тип одержувача/відправника <br> <ul> <li><b>INDIVIDUAL</b> - Фіз особа</li> <li><b>COMPANY</b> - Компанія</li> <li><b>PRIVATE_ENTREPRENEUR</b> - ФОП</li> </ul></p>
- **phoneNumber** `String` **_(обов'язково)_** - <p>Телефон одержувача/відправника</p>
- **address** `String` **_(обов'язково)_** - <p><a href=#api-Models-UkrPostAddress>Адреса одержувача/відправника</a><br></p>
- **email** `String` **_(обов'язково)_** - <p>E-mail клієнта/компанії</p>
- **firstName** `String` **_(обов'язково)_** - <p>Ім'я одержувача/відправника</p>
- **lastName** `String` **_(обов'язково)_** - <p>Прізвище одержувача/відправника</p>
- **middleName** `String` **_(обов'язково)_** - <p>По батькові одержувача/відправника</p>
- **name** `String` **_(обов'язково)_** - <p>Назва компанії</p>
- **uniqueRegistrationNumber** `String` **_(обов'язково)_** - <p>Унікальний номер реєстрації</p>
- **bankAccount** `String` **_(обов'язково)_** - <p>Чековий рахунок, обов'язковий для юридичних осіб</p>
- **resident** `Boolean` **_(обов'язково)_** - <p>Резидент</p>
- **edrpou** `String` **_(обов'язково)_** - <p>EDRPOU клієнта</p>

---

### [Ukrposhta] Дані ТТН (отримання списку ТТН)

**** `/`

<p>Опис полів відправлення (для створення ТТН)<br> <b>UkrPostDeliveryTtnModel</b><br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

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

---

### [Ukrposhta] Посилка (створення ТТН)

**** `/`

<p>Опис полів посилки Укрпошти (для створення ТТН)<br> <b>UkrPostParcelModel</b><br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Параметри запиту

**Request Body Parameters:**

- **UkrPostParcelModel.weight** `Integer` _(опціонально)_ - <p>Вага посилки, г (грам) <br>Приклад: <code>1100</code> <br>*<sup>При виборі типу доставки <code>W2D</code> (Кур'єр), обмеження по вазі посилки <code>max 2 кг</code></sup></p>
- **UkrPostParcelModel.length** `Integer` _(опціонально)_ - <p>Довжина посилки, см <br>Приклад: <code>100</code> <br>*<sup>При виборі типу доставки <code>W2D</code> (Кур'єр), обмеження по габаритах посилки <code>max 70 см</code></sup></p>
- **UkrPostParcelModel.height** `Integer` _(опціонально)_ - <p>Висота посилки, см <br>Приклад: <code>100</code></p>
- **UkrPostParcelModel.width** `Integer` _(опціонально)_ - <p>Ширина посилки, см <br>Приклад: <code>100</code></p>
- **UkrPostParcelModel.declaredPrice** `Integer` _(опціонально)_ - <p>Оголошена вартість посилки, UAH <br>Приклад: <code>1000</code></p>
- **UkrPostParcelModel.description** `String` _(опціонально)_ - <p>Опис посилки <br><code>maxLength: 1024</code></p>

#### Успішна відповідь

**Response Body Parameters:**

- **UkrPostParcelModel.weight** `Integer` **_(обов'язково)_** - <p>Вага посилки, г (грам)</p>
- **UkrPostParcelModel.length** `Integer` **_(обов'язково)_** - <p>Довжина посилки, см</p>
- **UkrPostParcelModel.height** `Integer` **_(обов'язково)_** - <p>Висота посилки, см</p>
- **UkrPostParcelModel.declaredPrice** `Integer` **_(обов'язково)_** - <p>Оголошена вартість посилки, UAH</p>
- **UkrPostParcelModel.description** `String` **_(обов'язково)_** - <p>Опис посилки</p>

---

### [Ukrposhta] Відправлення, ТТН (створення ТТН)

**** `/`

<p>Опис полів відправлення (для створення ТТН)<br> <b>UkrPostShipmentModel</b><br> <i>Не є API-запитом</i></p>

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

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaCity]

**** `/`

<p>Інформація по населеному пункту<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

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

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaDistrict]

**** `/`

<p>Інформація по району<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID району</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва району українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва району російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва району англійською</p>
- **region** `Object` **_(обов'язково)_** - <p>Область <br><b><a href="#api-Models-UkrposhtaRegion">UkrposhtaRegion</a></b></p>
- **code_koatuu** `String` **_(обов'язково)_** - <p>Код державного класифікатору об'єктів (КОАТУУ)</p>

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaPickup]

**** `/`

<p>Інформація по відділенню<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **postcode** `String` **_(обов'язково)_** - <p>Поштовий індекс відділення</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця розміщення відділення <br><b><a href="#api-Models-UkrposhtaStreet">UkrposhtaStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, в якому знаходиться відділення</p>

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaPostcode]

**** `/`

<p>Поштовий індекс вулиці<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **postcode** `String` **_(обов'язково)_** - <p>Поштовий індекс вулиці</p>
- **street** `Object` **_(обов'язково)_** - <p>Вулиця <br><b><a href="#api-Models-UkrposhtaStreet">UkrposhtaStreet</a></b></p>
- **house_number** `String[]` **_(обов'язково)_** - <p>Номери будинку, за яким шукався індекс</p>

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaRegion]

**** `/`

<p>Інформація по області<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID області</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва області українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва області російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва області англійською</p>
- **code_koatuu** `String` **_(обов'язково)_** - <p>Код державного класифікатору об'єктів (КОАТУУ)</p>

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaStreet]

**** `/`

<p>Інформація по вулиці<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **id** `String` **_(обов'язково)_** - <p>Системний ID вулиці</p>
- **name_uk** `String` **_(обов'язково)_** - <p>Назва вулиці українською</p>
- **name_ru** `String` **_(обов'язково)_** - <p>Назва вулиці російською</p>
- **name_en** `String` **_(обов'язково)_** - <p>Назва вулиці англійською</p>
- **city** `Object` **_(обов'язково)_** - <p>Місто <br><b><a href="#api-Models-UkrposhtaCity">UkrposhtaCity</a></b></p>
- **type** `Object` **_(обов'язково)_** - <p>Тип вулиці <br><b><a href="#api-Models-UkrposhtaStreetType">UkrposhtaStreetType</a></b></p>
- **code** `String` **_(обов'язково)_** - <p>Код вулиці в довіднику Укрпошти</p>
- **house_numbers** `String[]` **_(обов'язково)_** - <p>Номери будинків по вулиці</p>

---

### Адресний класифікатор модуля Ukrposhta [UkrposhtaStreetType]

**** `/`

<p>Інформація по типу вулиці<br> <i>Не є API-запитом</i></p>

**Версія:** 1.0.0

#### Успішна відповідь

**Response Body Parameters:**

- **type.name_uk** `String` **_(обов'язково)_** - <p>Назва типу українською</p>
- **type.name_ru** `String` **_(обов'язково)_** - <p>Назва типу російською</p>
- **type.name_en** `String` **_(обов'язково)_** - <p>Назва типу англійською</p>
- **type.short_name_uk** `String` **_(обов'язково)_** - <p>Коротка назва типу українською</p>
- **type.short_name_ru** `String` **_(обов'язково)_** - <p>Коротка назва типу російською</p>
- **type.short_name_en** `String` **_(обов'язково)_** - <p>Коротка назва типу англійською</p>

---

### Товар для оновлення [UpdatingItem]

**** `/`

<p>Опис полів товару<br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **UpdatingItem** `Object` **_(обов'язково)_** - <p>UpdatingItemModel</p>
- **UpdatingItem.item_id** `Integer` **_(обов'язково)_** - <p>ID товару у внутрішній системі (технічне поле)</p>
- **UpdatingItem.item_rz_id** `Integer` **_(обов'язково)_** - <p>ID товару в системі Розетка <br><em><i>Через яке працює оновлення товарів. </i> <br></em><i>Отримати можна в ендпоінті <a href="#api-Items-All">ItemsAll</a> в полі ID</i></p>
- **UpdatingItem.price_old** `Integer` **_(обов'язково)_** - <p>Стара ціна товару (для видалення староїї ціни передавати -1)</p>
- **UpdatingItem.price_promo** `Integer` **_(обов'язково)_** - <p>Промо ціна (для видалення промо ціни передавати -1)</p>
- **UpdatingItem.price** `Integer` **_(обов'язково)_** - <p>Ціна товару, грн <br>*<sup>Необов`язковий, якщо передається [stock_quantity]</sup></p>
- **UpdatingItem.stock_quantity** `Integer` **_(обов'язково)_** - <p>Кількість товару в наявності <br>*<sup>Необов`язковий, якщо передається [price]</sup></p>
- **UpdatingItem.max_cart_quantity** `Integer` **_(обов'язково)_** - <p>Максимальна кількість товарів, яку можливо додати у кошик (для видалення максимальної кількості передавати -1)</p>
- **UpdatingItem.min_cart_quantity** `Integer` **_(обов'язково)_** - <p>Мінімальна кількість товарів, яку можливо додати у кошик (для видалення мінімальної кількості передавати -1)</p>

---

### Адреса покупця [User]

**** `/`

<p>Опис полів в моделі UserAddress <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **UserAddress** `Object` **_(обов'язково)_** - <p>Адреса покупця</p>
- **UserAddress.id** `Integer` **_(обов'язково)_** - <p>ID адреси</p>
- **UserAddress.street** `String` **_(обов'язково)_** - <p>Вулиця</p>
- **UserAddress.house** `String` **_(обов'язково)_** - <p>Будинок</p>
- **UserAddress.flat** `String` **_(обов'язково)_** - <p>Квартира</p>
- **UserAddress.user_id** `Integer` **_(обов'язково)_** - <p>ID покупця</p>
- **UserAddress.locality_id** `Integer` **_(обов'язково)_** - <p>ID міста</p>
- **UserAddress.status** `Status` **_(обов'язково)_** - <p>Статус</p>

---

### Покупець [User]

**** `/`

<p>Опис полів в моделі User <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **User** `Object` **_(обов'язково)_** - <p>UserModel</p>
- **user.id** `Integer` **_(обов'язково)_** - <p>ID покупця</p>
- **user.has_email** `Boolean` **_(обов'язково)_** - <p>Ознака, чи є у покупця e-mail</p>
- **user.contact_fio** `String` **_(обов'язково)_** - <p>ПІБ покупця</p>
- **user.email** `String` **_(обов'язково)_** - <p>E-mail покупця <code>[deprecated]</code><br> Технічне поле, приходить пустим рядком в разі якщо has_email == false, і зі значенням &quot;true&quot; якщо has_email == true</p>

---

### Скарги по замовленням [UserFeedback]

**** `/`

<p>Скарги по замовленням  <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **UserFeedback.id** `Integer` **_(обов'язково)_** - <p>ID скарги</p>
- **UserFeedback.comment** `String` **_(обов'язково)_** - <p>Коментар</p>

---

### Телефон покупця [User]

**** `/`

<p>Опис полів в моделі UserPhone <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.1

#### Успішна відповідь

- **UserPhone** `Object` **_(обов'язково)_** - <p>Телефон покупця</p>
- **UserPhone.id** `Integer` **_(обов'язково)_** - <p>ID телефону</p>
- **UserPhone.phone** `String` **_(обов'язково)_** - <p>Номер телефону</p>
- **UserAddress.status** `String` **_(обов'язково)_** - <p>Статус</p>

---

### Статуси реєстрації: оплата платежу [billStatuses]

**** `/`

<p>Статуси реєстрації: оплата платежу <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**bill_status:**

- **billStatuses.15** `integer` **_(обов'язково)_** - <p>(Не сплачено)</p>
- **billStatuses.16** `integer` **_(обов'язково)_** - <p>(Оплачено)</p>

---

### Статуси реєстрації: товари [marketItems]

**** `/`

<p>Опис статусів реєстрації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**:**

- **marketItems.1** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - не заповнено)</p>
- **marketItems.17** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - валідація прайс листа)</p>
- **marketItems.18** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - валідація прайс листа неуспішна)</p>
- **marketItems.9** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - товари на модерації)</p>
- **marketItems.10** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - товари не пройшли модерацію)</p>
- **marketItems.5** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - пройшов модерацію)</p>

---

### Статус реєстрації магазину [marketRegistration]

**** `/`

<p>Опис статусів реєстрації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**:**

- **market.1** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані не внесені)</p>
- **market.2** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані внесені частково)</p>
- **market.3** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані внесені повністю)</p>
- **market.4** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - на модерації)</p>
- **market.5** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - пройшов модерацію)</p>
- **market.6** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - не пройшов модерацію)</p>

---

### Статуси реєстрації: договір [marketRegistrationContract]

**** `/`

<p>Опис статусів реєстрації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**:**

- **marketRegistrationContract.12** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - договір формується)</p>
- **marketRegistrationContract.13** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - договір очікує підписання)</p>
- **marketRegistrationContract.14** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - договір підписаний)</p>

---

### Статуси реєстрації: документи [marketRegistrationDocuments]

**** `/`

<p>Опис статусів реєстрації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**:**

- **marketRegistrationDocuments.1** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані не внесені)</p>
- **marketRegistrationDocuments.2** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані внесені частково)</p>
- **marketRegistrationDocuments.3** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані внесені повністю)</p>
- **marketRegistrationDocuments.4** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - на модерації)</p>
- **marketRegistrationDocuments.5** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - пройшов модерацію)</p>
- **marketRegistrationDocuments.6** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - не пройшов модерацію)</p>

---

### Статуси реєстрації: юридичні дані [marketRequisites]

**** `/`

<p>Опис статусів реєстрації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**:**

- **marketRequisites.1** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані не внесені)</p>
- **marketRequisites.2** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані внесені частково)</p>
- **marketRequisites.3** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - дані внесені повністю)</p>
- **marketRequisites.4** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - на модерації)</p>
- **marketRequisites.5** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - пройшов модерацію)</p>
- **marketRequisites.6** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - не пройшов модерацію)</p>

---

### Статуси модерації полів [moderationFields]

**** `/`

<p>Статуси модерації полів <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

- **status** `integer` **_(обов'язково)_** - <p>Статус модерації поля: 0 - не промодеровано, 1 - прийнято, 2 - відхилено</p>
- **comment** `string` **_(обов'язково)_** - <p>Коментар менеджера</p>

---

### Прогрес реєстрації продавця [registrationProgress]

**** `/`

<p>Опис статусів реєстрації <br> <i>Не є API-запитом</i></p>

**Версія:** 0.0.0

#### Успішна відповідь

**:**

- **registrationProgress.1** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - не заповнений)</p>
- **registrationProgress.2** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - частково заповнений)</p>
- **registrationProgress.3** `integer` **_(обов'язково)_** - <p>(Статус реєстрації - повністю заповнений)</p>

---

