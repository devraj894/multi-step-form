"use client";
import { useForm } from "react-hook-form";
import { useFormStore } from "@/store/store";

export default function Step2() {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      street: formData.street,
      city: formData.city,
      zip: formData.zip,
      country: formData.country,
    },
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl bg-white backdrop-blur-md shadow-2xl rounded-3xl p-8 space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Where Do You Live?
      </h2>

      {/* Street Address */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          Street <span className="text-pink-500">*</span>
        </label>
        <input
          type="text"
          placeholder="123 Main St"
          {...register("street", { required: "Please enter your street" })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.street
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.street && (
          <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
        )}
      </div>

      {/* City */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          City <span className="text-pink-500">*</span>
        </label>
        <input
          type="text"
          placeholder="New York"
          {...register("city", { required: "Please enter your city" })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.city
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      {/* Zip Code */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          Zip / Postal Code <span className="text-pink-500">*</span>
        </label>
        <input
          type="text"
          placeholder="10001"
          {...register("zip", {
            required: "Zip code is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Zip must be numeric",
            },
          })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.zip
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.zip && (
          <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
        )}
      </div>

      {/* Country */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          Country <span className="text-pink-500">*</span>
        </label>
        <select
          {...register("country", { required: "Please select your country" })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.country
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        >
          <option value="">Choose your country</option>
          <option value="USA">United States</option>
          <option value="India">India</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-7 py-3 rounded-2xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          Previous
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className={`px-7 py-3 rounded-2xl font-semibold shadow-md transition-all ${
            isValid
              ? "bg-pink-500 text-white hover:bg-pink-600"
              : "bg-pink-200 text-white cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
