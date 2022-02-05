import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', makeRenderGallery(galleryItems));

galleryEl.addEventListener('click', onGetOriginalImage);

function makeRenderGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGetOriginalImage(e) {
  e.preventDefault();
  if (e.target.nodeName != 'IMG') {
    return;
  }

  const imageUrl = e.target.dataset.source;
  const imageAlt = e.target.alt;
  const largeImage = `<img src="${imageUrl}" alt="${imageAlt}">`;
  modalCreateLargeImage(largeImage);
}

function modalCreateLargeImage(largeImage) {
  const options = {
    onShow: () => {
      window.addEventListener('keydown', onCloseModal);
    },
    onClose: () => {
      window.removeEventListener('keydown', onCloseModal);
    },
  };

  const instance = basicLightbox.create(largeImage, options);
  instance.show();
  function onCloseModal(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(galleryItems);
