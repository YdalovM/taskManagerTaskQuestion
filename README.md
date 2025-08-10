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

# Сборка для GitHub Pages (с исправлением путей)
yarn build:pages

# Предпросмотр сборки
yarn preview
```

## Настройка GitHub Pages

### Автоматический деплой

1. Убедитесь, что ваш репозиторий находится на GitHub
2. Перейдите в Settings → Pages
3. В разделе "Source" выберите "GitHub Actions"
4. При каждом пуше в ветку `main` приложение будет автоматически деплоиться

### Настройка в GitHub

1. Перейдите в Settings → Pages
2. В разделе "Source" выберите "GitHub Actions"
3. Нажмите "Save"

После настройки ваше приложение будет доступно по адресу:
`https://[ваш-username].github.io/taskManagerTaskQuestion/`

## Технологии

- React 19
- TypeScript
- Vite
- SCSS
- React Router DOM
