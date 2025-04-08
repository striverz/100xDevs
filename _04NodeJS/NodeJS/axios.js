import axios from "axios";

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Hello",
    body: "World",
    userId: 1,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
