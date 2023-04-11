import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector("ul.gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
     alt="${description}"
      />
      </a>
    </li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

const onModalWindow = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`);
  instance.show();
};
galleryEl.addEventListener("click", onModalWindow);
