// promise
const secondPromise = new Promise(
    (resolve, reject) => {
        const randomNumber = Math.random();
        if(randomNumber > 0.5) {
            resolve(randomNumber)
        } else {
            reject(randomNumber)
        }
    }
  );
  
  secondPromise
  .then(promiseFullfilled)
  .catch(promiseRejected)
  .finally(forFinally)

  function promiseFullfilled(a) {
    console.log('Success with result ' + a);
  }

  function promiseRejected(a) {
    console.log('Rejected with result ' + a);
  }

  function forFinally() {
    console.log('Вот и все закончилось');
  }

  // перепишем 
  secondPromise
  .then((a) => {
    console.log('Success with result ' + a);
  })
  .catch((a) => {
    console.log('Rejected with result ' + a);
  })
  .finally(() => {
    console.log('Вот и все закончилось');
  })
