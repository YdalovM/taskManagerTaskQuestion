# Task Manager

React приложение для управления задачами с современным UI.

## Локальная разработка

```bash
# Установка зависимостей
yarn install

# Запуск dev сервера
yarn dev

# Сборка для продакшена
yarn build

# Предпросмотр сборки
yarn preview
```

## Настройка GitHub Pages

### Автоматический деплой (рекомендуется)

1. Убедитесь, что ваш репозиторий находится на GitHub
2. Перейдите в Settings → Pages
3. В разделе "Source" выберите "GitHub Actions"
4. При каждом пуше в ветку `main` приложение будет автоматически деплоиться

### Ручной деплой

```bash
# Установка gh-pages (если еще не установлен)
yarn add -D gh-pages

# Деплой на GitHub Pages
yarn deploy
```

### Настройка в GitHub

1. Перейдите в Settings → Pages
2. В разделе "Source" выберите "Deploy from a branch"
3. Выберите ветку `gh-pages` и папку `/ (root)`
4. Нажмите "Save"

После настройки ваше приложение будет доступно по адресу:
`https://[ваш-username].github.io/taskManagerTaskQuestion/`

## Технологии

- React 19
- TypeScript
- Vite
- SCSS
- React Router DOM
