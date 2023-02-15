import axios from "axios";

class AvatarService {
  constructor() {
    this.avatarsCache = [];
    this.avatarsUsed = 0;
  }

  static #getAvatars = async () => {
    let response = await axios.get(
      "https://tinyfac.es/api/data?limit=50&quality=0"
    );
    return response.data;
  };

  getNewAvatars = async (count = 1) => {
    const res = [];
    while (count) {
      if (this.avatarsCache.length <= this.avatarsUsed) {
        this.avatarsCache = await AvatarService.#getAvatars();
        this.avatarsUsed = 0;
      }
      res.push(this.avatarsCache[this.avatarsUsed++]);
      count--;
    }
    return res;
  };
}

export default AvatarService;
