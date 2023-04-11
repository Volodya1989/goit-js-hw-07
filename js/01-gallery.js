import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "basiclightbox";

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


const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);
instance.show();



galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
    console.log(evt.target.dataset.source);

});
