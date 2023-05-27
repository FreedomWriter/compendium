import { BASE_URL } from "api/constants";
import axios from "axios";

async function getCreatures() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/category/creatures`);

    return data;
  } catch (error) {
    //TODO: handle errors
  }
}

export { getCreatures };
