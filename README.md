# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# myWork

-----------------------------------------------------------------------------------------------

# Структура README для будущего работодателя

# Garden Products

# О проекте
Garden Products — это веб-приложение, позволяющее пользователям просматривать товары, управлять ими, а также добавлять в корзину и избранное. В основе разработки лежат React и Redux для эффективного управления состоянием.
Мобильная адаптивность: Стили в проекте разработаны с учетом адаптивного дизайна, что обеспечивает корректное отображение интерфейса на различных устройствах — от полноформатных мониторов ПК до планшетов и мобильных телефонов.

# Макет дизайна
Макет проекта находится в Figma по ссылке:
https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=280-1136&mode=design&t=NJTGdloftvn8I6Vz-0 

# Развернутая версия (deploy)
Готовую версию приложения можно посмотреть по ссылке: 
https://main.d30wnfkmepsvtw.amplifyapp.com/


# Скриншот проекта
![alt text](image-1.png)

# Стек технологий
React
Redux / Redux Toolkit


# Авторы
Проверьте правильность написания фио и дайде ссылку на линкедин
Никита Шевченко
[ссылка на LinkedIn](https://www.linkedin.com/in/nikita-shevchenko-a8a832318/)
Игорь Канурный
[ссылка на LinkedIn](https://www.linkedin.com/in/ihor-kanurnyi-b47424318/)
Ирина Показаченко
[ссылка на LinkedIn](https://www.linkedin.com/in/iryna-pokazachenko-00840a294/)
Карина Мирошниченко
[ссылка на LinkedIn](https://www.linkedin.com/in/karina-myroshnychenko/)
Маргарита Лихвар
[ссылка на LinkedIn](https://www.linkedin.com/in/margarita-lykhvar-78910aab/)



# Установка проекта
1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/Hellboy-Nishero/garden-products.git
   ```

2. Перейдите в директорию проекта:

   ```sh
   cd garden-product-main
   ```

3. Установите зависимости:
   ```sh
   npm install
   ```

## Запуск проекта

1. Запустите локальный сервер разработки:

   ```sh
   npm run dev
   ```

2. Откройте браузер и перейдите по адресу:
   ```
   https://main.d3ph9zecmotgl5.amplifyapp.com/
   ```


# Описание структуры проекта и вклада в проект

## Структура проекта
- `src/assets`: статические файлы (изображения и др.).
- `src/components`: React-компоненты, используемые в приложении.
- `src/pages`: Страницы приложения (включая стили).
- `src/store`: Redux store, api и слайсы.

Файл App.jsx отвечает за маршрутизацию в React-приложении с использованием React Router и Redux.
Файл index.scss отвечает за глобальную стилизацию веб-приложения.



## Функционал
Все стили разработаны с учетом адаптивного дизайна для 1000px, 768px, 480px, 360px согласно макету Figma.
Реализована тёмная тема приложения.


### Подвал сайта (Нижняя часть страницы, Footer)
В компоненте "Footer" содержится информация о способах связи с компанией:
- телефонный номер с ссылкой для звонка;
- ссылки на социальные сети (Instagram и WhatsApp);
- адрес компании и информация о часах работы;
- встроенная карта Google для отображения местоположения компании.

### Главная страница 
Реализована возможность навигации по другим страницам (Категории, Продукты , Скидки )
Реализовано отображение списка из 4-х категорий
Реализована форма (HomeDicount) на получение скидки 5% c валидацией вводимых данных на клиентской стороне. Валидация реализуется с использованием библиотеки React Hook Form.
Присутствует отображение 4 случайных товаров со скидкой.
Стили разработаны с учетом адаптивного дизайна, что обеспечивает корректное отображение интерфейса на различных устройствах 1000px, 768px, 480px, 360px.

### Категории товаров и Товары по категориям (Categories & Category) 
Реализовано отображение списка категорий и товаров внутри выбранной категории.
Категории загружаются с сервера и кэшируются в localStorage для быстрого доступа.
Товары сортируются по цене (возрастание/убывание), алфавиту и умолчанию.
Фильтрация возможна по наличию скидки и диапазону цен.
Избранные товары сохраняются в localStorage.
При клике на категорию открываются товары внутри нее.

### Все товары 
Реализовано отображение полного списка товаров, включая блок фильтрации (All Products).
Реализована логика загрузки, фильтрации, отображения и управления избранными товарами с учетом хранения данных в localStorage. 
Есть возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту).
Возможность фильтрации товаров (по наличию скидки и по диапазону цен).

### Товары со скидкой 
Доступно отображение списка товаров со скидкой.
Есть возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту).
Возможность фильтрации товаров по диапазону цен.

### Подробное описание товара 
Реализована страница товара (Product) с возможностью:
- просмтора информации о товаре;
- добавления товара в корзину;
- добавление товара в избранное;
- изменение количества товара перед добавлением;
- просмотр полного описания товара;
- просмотр изображения в увеличенном виде.
Присутствует полная информация о выбранном товаре согласно макету: 
- название товара;
- цена товара (текущая цена, старая цена, процент скидки);
- описание товара (с возможностью "Читать далее");
- изображения.

### Корзина
Есть отображение списка выбранных товаров с их количеством и общей стоимостью.
Реализована возможность изменения количества товаров, удаления товаров из корзины.
Расчет и отображение общей стоимости товаров в корзине.
Возможность отправки данных о заказе при отправке формы.

### Страница не найдена (Page not found, 404) 
Реализовано отображение страницы с сообщением о том, что запрашиваемая страница не найдена.
Имеется возможность вернуться на главную страницу.


