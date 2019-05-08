import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 385be8afc628a6c1076e4487284f7ef3c8c740acf7d8547dc6ae3946776a1fca"
  }
});
