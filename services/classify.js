import axios from "react-native-axios";
import config from "./config.js";

const ci = axios.create({ baseURL: config.apiURL });

const classify = base64 =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ci.post("/predict", { image: base64 });
      console.log(data);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { classify };
