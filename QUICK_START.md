# 🚀 Швидкий старт

## Для парсингу документації

```bash
# 1. Встановити залежності
npm install

# 2. Запустити парсер
npm run parse

# Документація з'явиться в папці docs/
```

## Для публікації на GitHub

```bash
# 1. Ініціалізувати Git
git init
git add .
git commit -m "🎉 Initial commit"

# 2. Створити репозиторій на GitHub
# Перейдіть на https://github.com/new

# 3. Підключити remote
git remote add origin https://github.com/YOUR_USERNAME/rozetka-api-docs.git
git push -u origin main

# 4. GitHub Actions автоматично оновлюватиме документацію щодня!
```

## Для локальної розробки з API

```bash
# 1. Створити .env файл
cp .env.example .env

# 2. Заповнити облікові дані в .env
# ROZETKA_USERNAME=ваш_логін
# ROZETKA_PASSWORD=ваш_пароль

# 3. Запустити приклад
node examples/example-usage.js
```

## Корисні команди

```bash
# Оновити документацію
npm run parse

# Оновити документацію та запушити в Git
npm run update

# Подивитись статистику endpoints
cat docs/README.md | grep "endpoints"
```

## 📁 Структура документації

- `docs/README.md` - Повна документація (всі 512 endpoints)
- `docs/categories/` - Розділена по категоріях:
  - `authorization.md` - Авторізація
  - `orders.md` - Замовлення (40 endpoints)
  - `apiitems.md` - Товари (32 endpoints)
  - `models.md` - Моделі (137 endpoints)
  - і ще 36 категорій...

## 🔗 Посилання

- [Повна інструкція](./SETUP.md)
- [Приклад використання API](./examples/example-usage.js)
- [Офіційна документація](https://api-seller.rozetka.com.ua/apidoc/)
