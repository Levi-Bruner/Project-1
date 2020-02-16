import store from "../store.js";
import imageService from "../services/image-service.js";

function _drawBackground() {
  let image = store.State.images;
  document.querySelector("body").style.backgroundImage = `url(${image.url})`;
}

export default class ImageController {
  constructor() {
    store.subscribe("images", _drawBackground)
    imageService.getImage();
  }
}
