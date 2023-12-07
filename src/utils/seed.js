import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Este archivo fue unicamente utilizado para cargar la db en firebase
// Para no hacerlo manualmente. Ya no tiene funcion alguna.

export const seed = async (products) => {
  const productsRef = collection(db, "products");
  const querySnap = await getDocs(productsRef);

  try {
    if (querySnap.empty) {
      products.map((product) => {
        addDoc(productsRef, product);
      });
    }
  } catch (e) {
    console.error(e);
  }
};
