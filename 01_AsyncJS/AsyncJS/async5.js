//The Promisified Version of the Fetch function

function promisifiedFetch(url) {
  return new Promise(async function (resolve, reject) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Invalid Response is occured");
    }
    const data = await response.json();
    if (data) resolve(data);
    else reject(data);
  });
}

promisifiedFetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Error Message!");
  });
