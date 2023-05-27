import { BASE_URL } from "api";
import axios from "axios";

async function getEquipment() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/category/equipment`);

    return data;
  } catch (_) {
    //Do nothing - react query will catch errors
  }
}

export { getEquipment };
