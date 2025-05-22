const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicdode.com/posts/3",
];

const p1 = (url) => {
  return new Promise((resolve, reject) => {
    resolve(fetch(url));
  });
};
const p2 = (url) => {
  return new Promise((resolve, reject) => {
    resolve(fetch(url));
  });
};
const p3 = (url) => {
  return new Promise((resolve, reject) => {
    resolve(fetch(url));
  });
};

Promise.all([p1(urls[0]), p2(urls[1]), p3(urls[2])])
  .then((responses) => console.log(responses))
  .catch((e) => console.log("failed"));
