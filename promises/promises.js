const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have succeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => value + "!!!!")
  .then((newValue) => console.log(newValue))
  .catch((reject) => console.log(reject));
