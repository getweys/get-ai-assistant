"use client";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { ToastProvider } from "@/hooks/ToastContext";
import { Toaster } from "@/lib/toasts";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ToastProvider>
        {children}
        <Toaster />
      </ToastProvider>
    </ReduxProvider>
  );
};
