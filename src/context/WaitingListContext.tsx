import React, { createContext, useContext, ReactNode } from "react";
import { useWaitingList } from "@/hooks/useWaitingList";

interface WaitingListContextType {
  isOpen: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  openModal: () => void;
  closeModal: () => void;
  submitEmail: (email: string) => Promise<void>;
}

const WaitingListContext = createContext<WaitingListContextType | undefined>(undefined);

export const WaitingListProvider = ({ children }: { children: ReactNode }) => {
  const waitingList = useWaitingList();

  return (
    <WaitingListContext.Provider value={waitingList}>
      {children}
    </WaitingListContext.Provider>
  );
};

export const useWaitingListContext = () => {
  const context = useContext(WaitingListContext);
  if (context === undefined) {
    throw new Error("useWaitingListContext must be used within a WaitingListProvider");
  }
  return context;
};
