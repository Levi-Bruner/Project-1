import Image from "../models/image.js"
import store from "../store.js";

// @ts-ignore
const _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

class ImageService {
  getImage() {
    _imgApi
      .get("")
      .then(res => {
        let newImage = new Image(res.data);
        store.commit("images", newImage)
      })
      .catch(error => {
        console.error(error);
      })
  }
}

const imageService = new ImageService();
export default imageService;
