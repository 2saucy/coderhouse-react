import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const assignMainCategory = (category) => {
  if (
    category.includes("shirts") ||
    category.includes("dresses") ||
    category.includes("tops") ||
    category.includes("shoes") ||
    category.includes("bags") ||
    category.includes("watches") ||
    category.includes("jewellery") ||
    category.includes("sunglasses")
  ) {
    return "Fashion & Accessories";
  }

  if (category.includes("smartphones") || category.includes("laptops")) {
    return "Technology";
  }

  if (
    category.includes("home-decoration") ||
    category.includes("lighting") ||
    category.includes("furniture")
  ) {
    return "Home & Deco";
  }

  if (category.includes("skincare") || category.includes("fragrances")) {
    return "Personal Care";
  }

  if (category.includes("motorcycle") || category.includes("automotive")) {
    return "Automotive";
  }

  if (category.includes("groceries")) {
    return "Groceries";
  }
};

export const generateCategoriesMap = async () => {
  const categoriesMap = new Map();

  try {
    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {
      const productData = doc.data();

      if (productData.category) {
        const mainCategory = assignMainCategory(productData.category);

        if (!categoriesMap.has(mainCategory)) {
          categoriesMap.set(mainCategory, new Set());
        }

        categoriesMap.get(mainCategory).add(productData.category);
      }
    });

    return categoriesMap;
  } catch (e) {
    console.error("Error al obtener las categorías:", e);
    return [];
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getPriceWithoutDiscount = (price, discountPercentage) => {
  return (price / (1 - discountPercentage / 100)).toFixed(2);
}

