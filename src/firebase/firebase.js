import * as firebase from "firebase"
import moment from "moment"


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {firebase, googleAuthProvider, database as default}


// database.ref("Expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("Expenses").on("child_added", (snapshot)=> {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("Expenses").on("value", (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

//   database.ref("Expenses").push({
//       description: "Soccer",
//       notes: "Next game",
//       amount: 1267,
//       createdAt: moment().add(1, "days").format("dddd, MMMM Do YYYY")
//   })

//   setTimeout(()=>{
//     database.ref("Expenses").push({
//         description: "Tennis",
//         notes: "",
//         amount: 3009,
//         createdAt: moment().format("dddd, MMMM Do YYYY")
//     })
//   },6000)







//   database.ref("notes").push({
//       title: "Courses",
//       body: "Node.js"
//   })

//database.ref("notes/-LmpkxvKTJho8z60Scdk").remove()


//   database.ref().on("value", (snapshot) => {
//       const val = snapshot.val()
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   })

//   setTimeout(() => {
//     database.ref("name").set("Ziad Ewais")
//   }, 4000)

//   database.ref().once("value").then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((error) => {
//       console.log("Cannot read data", error)
//   })


//   database.ref().set({
//       name: "Ziad H. Ewais",
//       age: 37,
//       stressLevel: 6,
//       job: {
//         title: "Web Developer",
//         company: "Google"
//       },
//       location: {
//           city: "Cornwall",
//           country: "Canada"
//       }
//   }).then(() => {
//       console.log("Data is Saved")
//   }).catch((error) => {
//       console.log("THIS Failed!!", error)
  //})


// database.ref("isSingle").remove().then(() => {
//     console.log("Data successfully removed")
// }).catch((error) => {
//     console.log("Data Removed FAILED", error)
// })

// database.ref().update({
//     "job/company": "Amazon",
//     stressLevel: 9,
//     "location/city": "Seattle"
// }).then(() => {
//     console.log("Data is updated!!")
// }).catch((error) => {
//     console.log("Data did not update!!!")
// })