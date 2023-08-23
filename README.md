# Homework / Домашнее задание :clipboard:
## goit-js-hw-07
:us:
<details>
	<summary>English</summary>
# Acceptance criteria

- `goit-js-hw-07` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Clear and descriptive names of variables and functions.
- Code formatted with `Prettier`.

## Start files

- In the [src folder](./src), you will find start files with basic markup and ready-made styles. Copy them to your project. To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.
- In the `gallery-items.js` file, there is an array called `galleryItems`, which contains objects with information about Images: small (preview), original (large) and description. It has already been added to each of the project's JS files.

## Task 1 - image gallery

Create a gallery with the ability to click on its items and view full size images in a modal window. Check out the demo video of the gallery.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Do this task in the `01-gallery.html` and `01-gallery.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery item template.
2. Implementing delegation to `ul.gallery` and getting the `url` of a large image.
3. Adding the script and styles of the modal window library [basicLightbox](https://basiclightbox.electerious.com/). Use the [jsdelivrCDN](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) service and add links to the minified (`.min`) library files to your project.
4. Opening a modal window by clicking on a gallery item. To do this, check out the [documentation](https://github.com/electerious/basicLightbox#readme) and [examples](https://basiclightbox.electerious.com/).
5. Replacing the value of the `src` attribute of the `<img>` element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the [basicLightbox](https://basiclightbox.electerious.com/) library.

### Gallery item markup

The link to the original image must be stored in the `source` data attribute on the `<img>` element and specified in the link's `href`. Do not add any HTML tags or CSS classes other than those in this template.

```html
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.

### Closing from keyboard

> ⚠️ The following features are optional, but they will be good for additional practice.

Add functionality for modal window closing upon pressing the `Escape` key. Make keyboard listening available only while the modal window is open. In the [basicLightbox](https://basiclightbox.electerious.com/) library, there is a method to close the modal window programmatically.

## Task 2 - `SimpleLightbox` library

Create the same gallery as in the first task, but using the [SimpleLightbox](https://simplelightbox.com/) library, which will handle image clicks, modal opening and closing, and image scrolling with the keyboard.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

It is necessary to slightly change the gallery card markup; use this template.

```html
<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>
```

Do this task in the `02-lightbox.html` and `02-lightbox.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery element template. Use the ready-made code from the first task.
2. Adding the script and library styles using the [cdnjs](https://cdnjs.com/libraries/simplelightbox) CDN service. You need to add links to two files: `simple-lightbox.min.js` and `simple-lightbox.min.css`.
3. Library initialization after gallery items are created and added to `ul.gallery`. To do this, read the [SimpleLightbox](https://simplelightbox.com/) documentation - first of all, the Usage and Markup sections.
4. Look in the documentation for the Options section and add an image caption display from the `alt` attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.
</details>
:ukraine:
<details>
<summary>Russian</summary>
	
# Критерии приема

- Создан репозиторий `goit-js-hw-07`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на `GitHub Pages`.
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Имена переменных и функций понятные, описательные.
- Код отформатирован `Prettier`.

## Стартовые файлы

[Скачай стартовые файлы](https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/07/src)
с базовой разметкой, готовыми стилями и подключенными файлами скриптов для
каждого задания. Скопируй их себе в проект.

В файле `gallery-items.js` есть массив `galleryItems`, который содержит объекты
с информацией о изображениях: маленькое (превью), оригинальное (большое) и
описание. Мы уже подключили его к каждому из JS-файлов проекта.

## Задание 1 - галерея изображений

Создай галерею с возможностью клика по её элементам и просмотра полноразмерного
изображения в модальном окне. Посмотри демо видео работы галереи.

<!-- Посмотри
[демо видео](https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4)
работы галереи. -->

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Выполняй это задание в файлах `01-gallery.html` и `01-gallery.js`. Разбей его на
несколько подзадач:

1. Создание и рендер разметки по массиву данных `galleryItems` и
   предоставленному шаблону элемента галереи.
2. Реализация делегирования на `ul.gallery` и получение `url` большого
   изображения.
3. Подключение скрипта и стилей библиотеки модального окна
   [basicLightbox](https://basiclightbox.electerious.com/). Используй
   [CDN сервис jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist)
   и добавь в проект ссылки на минифицированные (`.min`) файлы библиотеки.
4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с
   [документацией](https://github.com/electerious/basicLightbox#readme) и
   [примерами](https://basiclightbox.electerious.com/).
5. Замена значения атрибута `src` элемента `<img>` в модальном окне перед
   открытием. Используй готовую разметку модального окна с изображением из
   примеров библиотеки [basicLightbox](https://basiclightbox.electerious.com/).

### Разметка элемента галереи

Ссылка на оригинальное изображение должна храниться в data-атрибуте `source` на
элементе `<img>`, и указываться в `href` ссылки. Не добавляй другие HTML теги
или CSS классы кроме тех, что есть в этом шаблоне.

```html
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по
умолчанию пользователь будет перенаправлен на другую страницу. Запрети это
поведение по умолчанию.

### Закрытие с клавиатуры

> ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
> дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши `Escape`. Сделай так, чтобы
прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки
[basicLightbox](https://basiclightbox.electerious.com/) есть метод для
программного закрытия модального окна.

## Задание 2 - библиотека `SimpleLightbox`

Сделай такую же галерею как в первом задании, но используя библиотеку
[SimpleLightbox](https://simplelightbox.com/), которая возьмет на себя обработку
кликов по изображениям, открытие и закрытие модального окна, а также
пролистывание изображений при помощи клавиатуры.

Посмотри демо видео работы галереи с подключенной библиотекой.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

<!-- Посмотри
[демо видео](https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4)
работы галереи с подключенной библиотекой. -->

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

```html
<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>
```

Выполняй это задание в файлах `02-lightbox.html` и `02-lightbox.js`. Разбей его
на несколько подзадач:

1. Создание и рендер разметки по массиву данных `galleryItems` и
   предоставленному шаблону элемента галереи. Используй готовый код из первого
   задания.
2. Подключение скрипта и стилей библиотеки используя
   [CDN сервис cdnjs](https://cdnjs.com/libraries/simplelightbox). Необходимо
   добавить ссылки на два файла: `simple-lightbox.min.js` и
   `simple-lightbox.min.css`.
3. Инициализация библиотеки после того как элементы галереи созданы и добавлены
   в `ul.gallery`. Для этого ознакомься с документацией
   [SimpleLightbox](https://simplelightbox.com/) - в первую очередь секции
   «Usage» и «Markup».
4. Посмотри в документации секцию «Options» и добавь отображение подписей к
   изображениям из атрибута `alt`. Пусть подпись будет снизу и появляется через
   250 миллисекунд после открытия изображения.
</details>
