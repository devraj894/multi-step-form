"use client";
import { useForm } from "react-hook-form";
import { useFormStore } from "@/store/store";

export default function Step1() {
  const { formData, updateFormData, nextStep } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
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
        Enter Your Details
      </h2>

      {/* Full Name */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2">
          Your Name <span className="text-pink-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Jane Smith"
          {...register("fullName", { required: "Please enter your name" })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.fullName
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2">
          Email Address <span className="text-pink-500">*</span>
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.email
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2">
          Contact Number (Optional)
        </label>
        <input
          type="tel"
          placeholder="e.g., +1 234 567 890"
          {...register("phone")}
          className="w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 border-gray-300 focus:ring-pink-400 text-gray-700"
        />
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          disabled
          className="px-7 py-3 rounded-2xl font-semibold bg-gray-200 text-gray-400 cursor-not-allowed"
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
