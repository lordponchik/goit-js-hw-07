import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEL = document.querySelector('.gallery');

galleryEL.innerHTML = renderGallery(galleryItems);

galleryEL.addEventListener('click', e => {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}">`,
    {
      onShow(instance) {
        window.addEventListener('keydown', onEscapeCloseModal);
      },
      onClose(instance) {
        window.removeEventListener('keydown', onEscapeCloseModal);
      },
    }
  );

  instance.show();

  function onEscapeCloseModal(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
});

function renderGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
