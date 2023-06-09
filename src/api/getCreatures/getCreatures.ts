import { BASE_URL } from "api";
import axios from "axios";

async function getCreatures() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/category/creatures`);

    return data;
  } catch (error) {
    //Do nothing - react query will catch errors
  }
}

export { getCreatures };
