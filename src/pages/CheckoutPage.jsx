import { useForm } from "react-hook-form";

export default function CheckoutPage() {
  return (
    <main className="flex min-h-screen">
      <div className="min-h-full basis-1/2">
        <img
          className="h-full w-full object-cover"
          src="/banner-category-women's clothing.jpg"
        />
      </div>
      <div className="space-y-8 p-8">
        <h1 className="text-4xl font-semibold">Checkout</h1>
        <CheckoutForm />
      </div>
    </main>
  );
}

function CheckoutForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div>
          <label htmlFor="name" className="block font-semibold text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: "This field is required" })}
            className="w-full rounded border border-gray-300 p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="w-full rounded border border-gray-300 p-2"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="shippingAddress"
          className="font-semibold text-gray-600"
        >
          Shipping Address
        </label>
        <input
          type="text"
          id="shippingAddress"
          name="shippingAddress"
          {...register("shippingAddress", {
            required: "This field is required",
          })}
          className="w-full rounded border border-gray-300 p-2"
        />
        {errors.shippingAddress && (
          <p className="text-red-500">{errors.shippingAddress.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="creditCard" className="font-semibold text-gray-600">
            Credit Card
          </label>
          <input
            type="text"
            id="creditCard"
            name="creditCard"
            {...register("creditCard", { required: "This field is required" })}
            className="w-full rounded border border-gray-300 p-2"
          />
          {errors.creditCard && (
            <p className="text-red-500">{errors.creditCard.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="expirationDate"
            className="font-semibold text-gray-600"
          >
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            {...register("expirationDate", {
              required: "This field is required",
            })}
            className="w-full rounded border border-gray-300 p-2"
          />
          {errors.expirationDate && (
            <p className="text-red-500">{errors.expirationDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="securityCode" className="font-semibold text-gray-600">
            Security Code
          </label>
          <input
            type="text"
            id="securityCode"
            name="securityCode"
            {...register("securityCode", {
              required: "This field is required",
            })}
            className="w-full rounded border border-gray-300 p-2"
          />
          {errors.securityCode && (
            <p className="text-red-500">{errors.securityCode.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}
