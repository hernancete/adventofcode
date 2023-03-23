const EventEmitter = require('events');

let waiting = true;

// Main promise
const myPromise = (secs = 5000) => {
  console.log('myPromise called', 'sleeping', secs);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('Resolving myPromise');
      resolve('Done');
    }, secs);
  });
};

// Dummy promise
const dummyPromise = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('Resolving dummyPromise');
      resolve();
    }, 10000);
  });
};

// Call dummyPromise while main promise still pending (waiting == true)
const callDummyPromise = async () => {
  let i = 0;
  while (waiting) {
    console.log('Calling dummyPromise', ++i);
    await dummyPromise();
  }
};

// Calling main promise
myPromise().then((msg) => {
  console.log('myPromise resolved with', msg);
  waiting = false;
});
console.log('Waiting until myPromise finishes');

callDummyPromise();
