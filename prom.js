const login = (username, password) => {
  return new Promise((resolve, reject) => {
    const isLoggedIn = true;
    if (isLoggedIn) {
      resolve({
        isLoggedIn: true,
        username: username,
        message: "User logged in",
      });
    } else {
      reject({
        isLoggedIn: false,
        username: username,
        message: "User not logged in",
      });
    }
  });
};

const fetchdata = (user) => {
  return new Promise((resolve, reject) => {
    const recieved = true;
    if (recieved) {
      resolve(user);
    } else {
      reject(null);
    }
  });
};

login("fenyroykv", "password")
  .then((e) =>
    fetchdata(e))
      .then((e1) => console.log(e1))
      .catch((e) => console.log(e))
  
  .catch((e3) => console.log(e3));
