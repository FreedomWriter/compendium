import { BASE_URL } from "api";
import axios from "axios";

async function getMonsters() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/category/monsters`);

    return data;
  } catch (_) {
    //Do nothing - react query will catch errors
  }
}

export { getMonsters };
