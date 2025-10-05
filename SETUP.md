# Налаштування проекту

## Крок 1: Ініціалізація Git репозиторію

```bash
# Ініціалізація Git
git init

# Додавання файлів
git add .

# Перший commit
git commit -m "🎉 Початковий commit: парсер документації Rozetka API"
```

## Крок 2: Створення репозиторію на GitHub

1. Перейдіть на https://github.com/new
2. Створіть новий репозиторій (наприклад, `rozetka-api-docs`)
3. **НЕ** додавайте README, .gitignore або ліцензію (вони вже є в проекті)

## Крок 3: Підключення до GitHub

```bash
# Замініть YOUR_USERNAME на ваш GitHub username
git remote add origin https://github.com/YOUR_USERNAME/rozetka-api-docs.git

# Перший push
git branch -M main
git push -u origin main
```

## Крок 4: Налаштування GitHub Actions

GitHub Actions автоматично запрацює після push. Переконайтеся, що:

1. В репозиторії є вкладка "Actions"
2. Workflow "Оновлення документації API" з'явився
3. Ви можете запустити його вручну через "Run workflow"

## Крок 5: Оновлення README.md

Відредагуйте `README.md` і замініть `YOUR_USERNAME` на ваш GitHub username:

```markdown
[![Оновлення документації](https://github.com/YOUR_USERNAME/rozetka-api-docs/actions/workflows/update-docs.yml/badge.svg)](https://github.com/YOUR_USERNAME/rozetka-api-docs/actions/workflows/update-docs.yml)
```

## Використання

### Локальне оновлення документації

```bash
npm run parse
```

### Оновлення з автоматичним push

```bash
npm run update
```

### Перегляд документації

Відкрийте `docs/README.md` в браузері або IDE для перегляду повної документації.

## Troubleshooting

### Проблема: GitHub Actions не запускається

**Рішення:** Перевірте, що:
- Репозиторій публічний або у вас є приватні хвилини для Actions
- Файл `.github/workflows/update-docs.yml` знаходиться в правильній директорії

### Проблема: Помилка при push

**Рішення:** Переконайтеся, що:
```bash
git config --global user.email "your.email@example.com"
git config --global user.name "Your Name"
```

### Проблема: npm install не працює

**Рішення:** Видаліть `node_modules` та `package-lock.json`:
```bash
rm -rf node_modules package-lock.json
npm install
```
