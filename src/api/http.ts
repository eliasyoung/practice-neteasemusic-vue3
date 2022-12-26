import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

interface Http {
  get<T>(url: string, params?: unknown): Promise<T>;
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) =>
      axios
        .get(url, { params })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.message))
    );
  },
};

export default http;
