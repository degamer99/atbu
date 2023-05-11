// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, get} from "firebase/storage";
// TODO: Add SDKs fr Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQo66rbz1kyGICnTeDgzd2CnxOutJOeM",
  authDomain: "atbu-d619c.firebaseapp.com",
  projectId: "atbu-d619c",
  storageBucket: "atbu-d619c.appspot.com",
  messagingSenderId: "1084816962641",
  appId: "1:1084816962641:web:e31b2838d28879e960b470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Create a storage reference from our storage service
const storageRef = ref(storage);

const pdfRef = ref(storage, 'pdf');

const pdf = ref(pdfRef, "name.rtf")

export const add = async (name, url) => {
  try {
    const docRef = await addDoc(collection(db, "pdf"), {
      name,
      url,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const read = async () => {
  let data = [ ]
  try {
    const querySnapshot = await getDocs(collection(db, "pdf"))
      querySnapshot.forEach((doc) => {
          data.push(doc.data())
        // console.log(doc.data());
        // console.log(`${doc.id} => ${doc.data()}`);
        });
    
  } finally {
    return data
  }

  // querySnapshot.forEach((doc) => {
    //   data.push(doc.data())
    // // console.log(doc.data());
    // // console.log(`${doc.id} => ${doc.data()}`);
    // });
    
  }
   

export const upload = async (file, name) => {
    uploadBytes(ref(pdfRef, name ), file).then( async (snapshot) => {

    console.log('Uploaded a blob or file!');
    let link = await getDownloadURL(ref(pdfRef, name ))
    console.log(link)
    add(name, link)
  });
}

export const download = async (name) => { 
   let link = await getDownloadURL(ref(pdfRef, name ))
   return link
}

