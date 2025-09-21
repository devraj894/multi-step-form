"use client";
import { useFormStore } from "@/store/store.js";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Step4 from "./Step4.jsx";

import Progressbar from "../common/Progressbar.jsx";
export default function Form() {
  const { step } = useFormStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0F172A]">
      <Progressbar step={step} />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </div>
  );
}
