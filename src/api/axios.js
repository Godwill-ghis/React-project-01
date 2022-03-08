import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:30001/",
});

export default instance;
