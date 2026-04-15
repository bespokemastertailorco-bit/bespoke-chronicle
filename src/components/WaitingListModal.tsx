import { X, Check } from "lucide-react";
import { useState } from "react";
import { useWaitingListContext } from "@/context/WaitingListContext";

const WaitingListModal = () => {
  const { isOpen, isSubmitting, isSuccess, closeModal, submitEmail } = useWaitingListContext();
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await submitEmail(email);
    setEmail("");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-[90] transition-opacity"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white z-[100] shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 hover:bg-neutral-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={20} strokeWidth={1} />
        </button>

        <div className="p-8 text-center">
          {!isSuccess ? (
            <>
              {/* Logo */}
              <div className="mb-6">
                <span className="font-heading text-2xl tracking-widest uppercase">
                  BESPOKE MASTER
                </span>
              </div>

              {/* Tagline */}
              <p className="font-heading italic text-neutral-600 mb-6">ONE OF A KIND</p>

              {/* Description */}
              <p className="text-sm font-light text-neutral-600 mb-6">
                Join the waiting list to get early access to the new collection.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 text-sm font-light focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-light hover:bg-neutral-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "JOIN THE WAITING LIST"}
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="mb-6">
                <span className="font-heading text-2xl tracking-widest uppercase">
                  BESPOKE MASTER
                </span>
              </div>

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-green-600" strokeWidth={2} />
              </div>

              <h3 className="font-heading text-lg uppercase tracking-wider mb-2">
                REGISTRATION COMPLETE
              </h3>

              <p className="text-sm font-light text-neutral-600">
                We will contact you with early access. Thank you for your interest.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WaitingListModal;
