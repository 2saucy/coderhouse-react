import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { db } from "../utils/firebaseConfig";
import ProductListContainer from "../components/ProductListContainer";
import { useForm } from "react-hook-form";

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
  };

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
    <main className="overflow-x-hidden antialiased">
      <Slider {...sliderSettings}>
        {sliderImages.map((image, i) => (
          <div key={i} className="h-96">
            <img className="h-full w-full object-cover" src={image} />
          </div>
        ))}
      </Slider>

      <section className="space-y-4 p-12">
        <h2 className="font-serif text-3xl italic">Weekly Discounts</h2>
        <ProductListContainer products={bestDiscounts} />
      </section>

      <section className="flex flex-col bg-black md:flex-row">
        <div className="basis-1/2">
          <img
            src="./banner-category-electronics.jpg"
            alt="Electronics Banner"
          />
        </div>
        <div className="basis-1/2 space-y-4 self-center p-8 text-slate-100">
          <h2 className="text-2xl font-bold">Explore our Electronics Deals</h2>
          <p className="font-serif text-lg">
            Discover amazing discounts on the latest electronics. From
            smartphones to laptops, find the best deals on cutting-edge
            technology.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Contact Us</h2>
            <p className="mb-8 text-gray-600">
              Have questions or feedback? Reach out to us using the form below.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: "This field is required" })}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "This field is required" })}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-semibold text-gray-600">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          {...register("message", { required: "This field is required" })}
          className="w-full rounded border border-gray-300 p-2"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}
