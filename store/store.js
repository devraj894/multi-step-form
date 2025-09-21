import { create } from "zustand";

export const useFormStore = create((set) => ({
  step: 1,
  formData: {
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    username: "",
    password: "",
  },

  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  firstStep: () => set({ step: 1 }),

  updateFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),

  reset: () =>
    set({
      step: 1,
      formData: {},
    }),
}));
