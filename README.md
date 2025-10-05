# Rozetka Seller API - Документація

[![Оновлення документації](https://github.com/GERA-OneTeam/Rozetka-API-Seller/actions/workflows/update-docs.yml/badge.svg)](https://github.com/GERA-OneTeam/Rozetka-API-Seller/actions/workflows/update-docs.yml)

Автоматично згенерована та оновлювана документація для **Rozetka Marketplace API**.

## 📚 Документація

Повна документація доступна в папці [`docs/`](./docs/):

- **[Повна документація (README.md)](./docs/README.md)** - всі ендпоінти в одному файлі
- **[Окремі категорії](./docs/categories/)** - розділена документація по категоріях

### Основні розділи

- [Authorization](./docs/categories/authorization.md) - Авторізація та токени (5 ендпоінтів)
- [Orders](./docs/categories/orders.md) - Робота з замовленнями (40 ендпоінтів)
- [ApiItems](./docs/categories/apiitems.md) - Управління товарами (32 ендпоінти)
- [Models](./docs/categories/models.md) - Моделі товарів (137 ендпоінтів)
- [Messages](./docs/categories/messages.md) - Повідомлення та комунікація (22 ендпоінти)
- [Sellers](./docs/categories/sellers.md) - Інформація про продавців (22 ендпоінти)

**Всього:** 512 ендпоінтів в 40 категоріях

## 🔄 Автоматичне оновлення

Документація автоматично оновлюється:

- **Щодня о 00:00 UTC** через GitHub Actions
- При кожному завантаженні в гілку `main` (якщо змінився парсер)
- Можна запустити вручну через вкладку "Actions"

## 🛠 Локальне використання

### Встановлення

```bash
npm install
```

### Оновлення документації

```bash
npm run parse
```

### Оновлення та завантаження на GitHub

```bash
npm run update
```

## 📖 Як працює парсер

Парсер завантажує JSON-дані з офіційної документації API:

1. Отримує дані з `https://api-seller.rozetka.com.ua/apidoc/api_data.json`
2. Отримує метадані з `https://api-seller.rozetka.com.ua/apidoc/api_project.json`
3. Конвертує в Markdown формат
4. Групує ендпоінти по категоріях
5. Зберігає локально в папку `docs/`

## 📊 Структура проекту

```
.
├── parser.js              # Головний парсер
├── package.json           # Залежності
├── docs/                  # Згенерована документація
│   ├── README.md         # Повна документація
│   ├── api_data.json     # Сирі дані API
│   ├── api_project.json  # Метадані проекту
│   └── categories/       # Документація по категоріях
│       ├── authorization.md
│       ├── orders.md
│       └── ...
└── .github/
    └── workflows/
        └── update-docs.yml  # Автоматизація оновлень

```

## 🔗 Корисні посилання

- **Офіційна документація:** https://api-seller.rozetka.com.ua/apidoc/
- **Довідковий центр:** https://sellerhelp.rozetka.com.ua/
- **Кабінет продавця:** https://seller.rozetka.com.ua/

## 📝 Ліцензія

MIT

---

**Примітка:** Це неофіційна документація, створена для зручності розробників. Офіційна документація доступна на сайті Rozetka.
