// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRWDcv6-Z1u0k1aAlgtM00Yu6tzsHeAjo",
    authDomain: "daily-report-neo.firebaseapp.com",
    projectId: "daily-report-neo",
    storageBucket: "daily-report-neo.firebasestorage.app",
    messagingSenderId: "436579993345",
    appId: "1:436579993345:web:529775b44a1727bad7bd00",
    measurementId: "G-6Y0EH4FC9T"
  };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  
//   //Cloud Firebaseの初期化
//   const db = getFirestore(app);

//   //Cloud Firebaseから取得したデータを表示する
// const fetchHistoryData = async() =>{
//     let tags ="";
//     //reportsコレクションのデータを取得
//     const querySnapshot = await getDocs(collection(db,"reports"));
    
//     //データをテーブル表の形式に合わせてHTMLに挿入
//     querySnapshot.forEach((doc)=>{
//         console.log(`${doc.id}=>${doc.data()}`);
//         tags +=`<tr><td>${doc.data().date}</td><td>${doc.data().
//             name}</td><td>${doc.data().work}</td><td>${doc.data().comment}
//         </tr>}`
//     });
//     document.getElementById("js-history").innerHTML = tags;
// }

// //Cloud Firestoreから取得したデータを表示する
// if(document.getElementById("js-history")){
//     fetchHistoryData();
// }

// //Cloud Firestoreにデータを送信する
// const submitData = async(e) =>{
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try{
//         const docRef = await addDoc(collection(db,"reports"),{
//             date: new Date(),
//             name: formData.get("name"),
//             work: formData.get("work"),
//             comment: formData.get("comment")
//         });
//         console.log("Document witten with ID:", docRef.id);
//     } catch(e){
//         console.error("Error adding document:",e);
//     }
// }

// //Cloud FireStoreにデータを送信する
// if(document.getElementById("js-form")){
//     document.getElementById("js-form").addEventListener(("submit"),
//     (e)=>submitData(e));
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestoreの初期化
const db = getFirestore(app);

// Cloud Firestoreから取得したデータを表示する
const fetchHistoryData = async () => {
  let tags = "";

  // reportsコレクションのデータを取得
  const querySnapshot = await getDocs(collection(db, "reports"));
  
  // データをテーブル表の形式に合わせてHTMLに挿入
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    tags += `<tr><td>${doc.data().date}</td><td>${doc.data().name}</td><td>${doc.data().work}</td><td>${doc.data().comment}</td></tr>`;
  });
  document.getElementById("js-history").innerHTML = tags;
};

// Cloud Firestoreから取得したデータを表示する
if (document.getElementById("js-history")) {
  fetchHistoryData(getDocs, collection, db);
}

// Cloud Firestoreにデータを送信する
const submitData = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
    const docRef = await addDoc(collection(db, "reports"), {
      date: new Date(),
      name: formData.get("name"),
      work: formData.get("work"),
      comment: formData.get("comment"),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Cloud Firestoreにデータを送信する
if (document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
}