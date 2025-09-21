"use client";
import { useFormStore } from "@/store/store";

export default function Step4() {
  const { formData, prevStep, reset, firstStep } = useFormStore();

  const handleFinalSubmit = () => {
    console.log("Final Submitted Data:", formData);
    alert("Registration Completed Successfully!");
    reset();
    firstStep();
  };

  return (
    <div className="w-full max-w-2xl bg-white backdrop-blur-md shadow-2xl rounded-3xl p-8 space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Review & Confirm Your Details
      </h2>

      {/* Personal Info */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-2">
        <h3 className="font-semibold text-gray-800 mb-2">
          Personal Information
        </h3>
        <p>
          <span className="font-medium">Full Name:</span> {formData.fullName}
        </p>
        <p>
          <span className="font-medium">Email:</span> {formData.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {formData.phone || "—"}
        </p>
      </div>

      {/* Address Info */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-2">
        <h3 className="font-semibold text-gray-800 mb-2">
          Address Information
        </h3>
        <p>
          <span className="font-medium">Street:</span> {formData.street}
        </p>
        <p>
          <span className="font-medium">City:</span> {formData.city}
        </p>
        <p>
          <span className="font-medium">Zip:</span> {formData.zip}
        </p>
        <p>
          <span className="font-medium">Country:</span> {formData.country}
        </p>
      </div>

      {/* Account Info */}
      <div className="bg-gray-50 p-5 rounded-2xl shadow-sm space-y-2">
        <h3 className="font-semibold text-gray-800 mb-2">Account Details</h3>
        <p>
          <span className="font-medium">Username:</span> {formData.username}
        </p>
        <p>
          <span className="font-medium">Password:</span>{" "}
          {formData.password.replace(/./g, "•")}
        </p>
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
          type="button"
          onClick={handleFinalSubmit}
          className="px-7 py-3 rounded-2xl font-semibold shadow-md bg-green-500 text-white hover:bg-green-600 transition-all"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}
