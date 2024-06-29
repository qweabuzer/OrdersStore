# OrdersStore

Этот проект представляет собой простую систему управления заказами, построенную с использованием React для фронтенда и backend ASP.NET . Система позволяет пользователям создавать, просматривать и управлять заказами.

## Возможности

- Создание новых заказов с деталями.
- Просмотр списка всех заказов.
- Просмотр деталей конкретного заказа.
- Легкая навигация между разными страницами.

## Используемые Технологии

- React
- Material-UI для стилизации
- Axios для HTTP-запросов
- React Router для навигации

- ASP.NET
- Entity Framework
- AutoMapper
- OpenAPI(Swagger)
- Result<T>

## Начало работы

### Требования

- Node.js v20.14.0 или выш
- npm v10.8.1 или выше
- .NET SDK 8.0
- SQL Server

### Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/qweabuzer/OrdersStore.git
   ```

2. Установка зависимостей
- Фронтенд
   ```bash
   cd frontend
   npm install
  ```
- Бэкенд
  ```bash
   cd backend
   cd OrdersStore.DataAccess
   dotnet ef --startup-project ../OrdersStore.Api migrations add InitialCreate
   dotnet ef --startup-project ../OrdersStore.Api database update
  ```
### Запуск
  - Фронтенд
    ```bash
    cd frontend
    npm start
    ```
    Приложение будет доступно по адресу http://localhost:3000.

  - Бэкенд
    ```bash
    cd backend
    dotnet run
    ```
    Бэкенд будет доступен по адресу https://localhost:7295/

### Использование
   - Форма создания заказа
     1. Заполните все поля формы.
     2. Нажмите "Создать" для создания заказа.
     3. Для отмены заполнения формы нажмите "Отменить".
        
   - Список заказов
     1. Перейдите на страницу со списком заказов.
     2. Нажмите на любой заказ для просмотра его деталей.
   
   - Детали заказа
     1. На странице с деталями заказа вы можете увидеть всю информацию о заказе.
     2. Нажмите "Назад" для возврата к списку заказов.

### Обратная связь
   Если возникли какие-то проблемы напишите мне на почту: novodvorski.dev@gmail.com
