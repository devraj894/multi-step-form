"use client";
import { useForm } from "react-hook-form";
import { useFormStore } from "@/store/store";

export default function Step3() {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: formData.username,
      password: formData.password,
      confirmPassword: "",
    },
  });

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    const { confirmPassword, ...rest } = data;
    updateFormData(rest);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl bg-white backdrop-blur-md shadow-2xl rounded-3xl p-8 space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Set Up Your Account
      </h2>

      {/* Username */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          Username <span className="text-pink-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Choose a unique username"
          {...register("username", { required: "Username is required" })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.username
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          Password <span className="text-pink-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter a strong password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.password
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <label className="block text-gray-800 font-semibold">
          Confirm Password <span className="text-pink-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Re-enter your password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
          })}
          className={`w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 text-gray-700 ${
            errors.confirmPassword
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-pink-400"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
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
          Finish
        </button>
      </div>
    </form>
  );
}
