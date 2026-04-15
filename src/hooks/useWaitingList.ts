import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const useWaitingList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsSuccess(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 300);
  };

  const submitEmail = async (email: string) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("waiting_list")
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) throw error;

      setIsSuccess(true);
      toast.success("You've joined the waiting list!");
    } catch (error) {
      console.error("Error submitting to waiting list:", error);
      toast.error("Failed to join waiting list. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isOpen,
    isSubmitting,
    isSuccess,
    openModal,
    closeModal,
    submitEmail,
  };
};
