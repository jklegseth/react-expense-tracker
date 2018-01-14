import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

/**
 * firebase.database() - access all database features/functionality (vs firebase.authentication, etc)
 * ref() references different parts of the db. If blank, we get reference to root
 * set() sets a value to ref. Can take primitive or object
 *
 * ref('age').set(55) is how we modify a ref
 * ref('location/city').set('Los Angeles');
 */

const database = firebase.database();

export { firebase, database as default };

// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// }, {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 45095
// }, {
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: 225095
// }];
//
//
// // child removed
// database.ref('expenses').on('child_removed', snapshot => {
//   // snapshot val will be the remove object
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child changed
// database.ref('expenses').on('child_changed', snapshot => {
//   // snapshot val will be the changed object
//   console.log(snapshot.key, snapshot.val());
// });

// child added
// fires once for all EXISTING data
// then runs again on all subsequent added data
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// subscription
// database.ref('expenses')
//   .on('value', snapshot => {
//     // returns a bunch of objects, not what we want
//     //console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// .once version
// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     // returns a bunch of objects, not what we want
//     //console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('notes/-L2WVT46plonRZXTbNgh').update({
//   body: 'buy booze'
// });

//database.ref('notes/-L2WVT46plonRZXTbNgh').remove();

// we use push for arrays
// EACH push creates a new property and adds the id
// the below becomes
// -L2WVT46plonRZXTbNgh { body: 'this', title: 'todo'}
// database.ref('notes').push({
//   title: 'get dog',
//   body: 'oh bark'
// });

// const firebaseNotes = {
//   notes: {
//     blah: {
//       title: 'hi',
//       body: 'ho'
//     },
//     bleh: {
//       title: 'hi',
//       body: 'ho'
//     }
//   }
// };


// const onValueChange = database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, e => {
//   console.log('error', e);
// });



// subscribe to database
// !! returns the callback fn
// const onValueChange = database.ref().on('value', snapshot => {
//   // not in a promise here because promises resolve ONCE
//   console.log(snapshot.val());
// }, e => {
//   console.log('error', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(87);
// }, 3500);
//
// setTimeout(() => {
//   //unsubscribe to all
//   // database.ref().off();
//   // unsubscribe to specific
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(47);
// }, 10500);

// gets data once
// database.ref('location')
//   .once('value')
//   .then(snapshot => {
//     //returns data
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('error', e);
//   })



// database.ref().set({
//   name: 'Yo Yo Mah',
//   stressLevel: 6,
//   age: 44,
//   job: {
//     title: 'developer',
//     company: 'WampWamp'
//   },
//   location: {
//     city: 'Burbank',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data saved');
// }).catch((e) => {
//   console.log('failed', e);
// });

// update must get object, can also add new or delete (with null)
// !! only updates at root level. If a root is an object it will
// overwrite that object
// location: { city: 'Boston'} will overwrite the location object
// so we use paths: 'location/city'
// database.ref().update({
//   job: 'manager',
//   'location/city': 'Boston'
// });

// two ways to remove
// database.ref('isSingle').set(null);

// preferred way to remove
// const rmRef = database.ref();
// rmRef.remove().then(() => {
//   console.log('removed');
// }).catch(e => {
//   console.log('error', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('updated');
// }).catch(e => {
//   console.log('error', e);
// });
