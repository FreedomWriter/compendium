import { BASE_URL } from "api";
import axios from "axios";

async function getMaterials() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/category/materials`);

    return data;
  } catch (_) {
    //Do nothing - react query will catch errors
  }
}

export { getMaterials };
