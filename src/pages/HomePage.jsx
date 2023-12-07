import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { db } from "../utils/firebaseConfig";
import ProductListContainer from "../components/ProductListContainer";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const bestDiscounts = products
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 4);

  const sliderImages = ["/slider-1.jpg", "/slider-2.jpg"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  useEffect(() => {
    const docRef = collection(db, "products");

    getDocs(docRef)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="antialiased">
      <Slider {...sliderSettings}>
        {sliderImages.map((image, i) => (
          <div key={i} className="h-96">
            <img className="w-full h-full object-cover" src={image} />
          </div>
        ))}
      </Slider>
      <section className="space-y-4 px-8">
        <h2 className="text-3xl font-black uppercase">BIG OFFERS ❤️‍🔥</h2>
        <ProductListContainer products={bestDiscounts} />
      </section>
      <section className="bg-black flex">
        <div className="basis-1/2">
          <img src="./banner-category-electronics.jpg" alt="Electronics Banner" />
        </div>
        <div className="basis-1/2 text-white p-8">
          <h2 className="text-2xl font-bold">Explore our Electronics Deals</h2>
          <p className="text-lg">
            Discover amazing discounts on the latest electronics. From smartphones to laptops,
            find the best deals on cutting-edge technology.
          </p>
        </div>
      </section>
      <ContactUsSection />
    </main>
  );
}

function ContactUsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions or feedback? Reach out to us using the form below.
          </p>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}