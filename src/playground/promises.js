console.log(0);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('error');
  },1500)
});

//
// promise.then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });

// chaining
// promise.then(data => {
//     console.log(1, data);
//     // if we want to get data to second then we return it
//     return 'hippo ho hitty yiyipi';
//   }).then(() => {
//     console.log('hmmm');
//   }).catch(error => {
//     console.log(error);
//   });

// return new promise
promise.then(data => {
    console.log(1, data);
    // if we want to get data to second then we return it
    // have to have `return`
    return new Promise(resolve, reject) => {
      setTimeout(() => {
        resolve('This is my other promise');
      }, 5000);
    }
  }).then(() => {
    console.log('hmmm');
  }).catch(error => {
    console.log(error);
  });


// alt version, two fns
// promise.then(data => {
//   console.log(data);
// }, error => {
//   console.log(error);
// });
