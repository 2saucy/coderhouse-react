import { useNavigate, useParams } from "react-router-dom";
import ProductListContainer from "../components/ProductListContainer";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { capitalizeFirstLetter } from "../utils/utils";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  const capitalizedCategoryName = capitalizeFirstLetter(categoryName);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchProducts = async () => {
      const docRef = collection(db, "products");
      const q = query(docRef, where("category", "==", categoryName));

      try {
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          navigate("/404");
          return;
        }

        const orderedDiscounts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(orderedDiscounts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <main className="px-8 py-12 space-y-8 min-h-screen">
      <h1 className="text-4xl font-bold ">{capitalizedCategoryName}</h1>
      <ProductListContainer products={products} />
    </main>
  );
}
