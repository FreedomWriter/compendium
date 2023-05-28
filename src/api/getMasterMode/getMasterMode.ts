import { BASE_URL } from "api";
import axios from "axios";

async function getMasterMode() {
  try {
    const {
      data: { data },
    } = await axios.get(`${BASE_URL}/master_mode/all`);
    return data;
  } catch (_) {
    //Do nothing - react query will catch errors
  }
}

export { getMasterMode };
