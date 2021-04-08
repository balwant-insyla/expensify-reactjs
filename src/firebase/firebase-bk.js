//import * as firebase from 'firebase'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAODuOpu9j_iRo8Sjv5yiHMAsyL7WT5kC8",
    authDomain: "expensify-76e4f.firebaseapp.com",
    projectId: "expensify-76e4f",
    storageBucket: "expensify-76e4f.appspot.com",
    messagingSenderId: "334318004554",
    appId: "1:334318004554:web:77904f0a67bdef986039b3",
    measurementId: "G-NG7ZZ6991L"
  };
  firebase.initializeApp(firebaseConfig); 

  const database = firebase.database()

//   database.ref('expenses').push({
//       description: 'Rent',
//       note: '',
//       amount: 12099,
//       createdAt: 4585608568956
//   })
//   database.ref('expenses').push({
//     description: 'phone bill',
//     note: '',
//     amount: 5099,
//     createdAt: 4585608568956
// })

// database.ref('expenses').push({
//     description: 'Gas Bill',
//     note: '',
//     amount: 1000,
//     createdAt: 4585608568956
// })

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })


database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})
database.ref('expenses').on('value', (snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses)
})

//   const onValueChange = database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val())
//   })

//   setTimeout(()=>{
//     database.ref('age').set(39)
//   }, 3500)

//   //database.ref().off(onValueChange)

//   database.ref().on('value',(snapshot) => {
//       const val = snapshot.val()
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company} .`)
//   })
    // database.ref().once('value').then((snapshot) => {
    //     const val = snapshot.val()
    //     console.log(val)
    // }).catch((e) => {
    //     console.log('Error: ', e)
    // })

//   database.ref().set({
//       name: 'Balwant Neeb',
//       age: 35,
//       stressLevel: 7,
//       job: {
//         title: 'Programmer',
//         company: 'insyla'
//       },
//         location: {
//             city: 'Mandi',
//             country: 'India'
//         }
//   }).then(() => {
//       console.log('Data is saved!')
//   }).catch((e) => {
//       console.log('Error:', e)
//   })

//   firebase.database().ref('age').set(36)
//   firebase.database().ref('location').set({
//       city: 'Mohali',
//       country: 'India'
//   })
//   database.ref('attributes').set({
//       height: 171,
//       weight: 64
//   })

// database.ref('isSingle').remove().then(() => {
//     console.log('Data was removed.')
// }).catch((e) => {
//     console.log('Did not remove data/')
// })

// database.ref().update({
//     name: 'Pihu Neeb',
//     age: 5,
//     isSingle: null,
//     job: 'Student'
// }).then(()=> {
//         console.log('Data updated.')
// }).catch((e) => {
//     console('Error updating data', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Upwork',
//     'location/city': 'Mohali'
// }).then(()=> {
//         console.log('Data updated.')
// }).catch((e) => {
//     console('Error updating data', e)
// })