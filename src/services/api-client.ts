import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b4359dbae4d4b6287a6fb5af0235d60",
  },
});
