import { BASE_URL } from "api";
import axios from "axios";

async function getTreasure() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/category/treasure`);

    return data;
  } catch (_) {
    //Do nothing - react query will catch errors
  }
}

export { getTreasure };
