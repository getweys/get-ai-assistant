"use client";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { ToastProvider } from "@/hooks/ToastContext";
import { Toaster } from "@/lib/toasts";
import { ReactNode } from "react";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ToastProvider>
        {children}
        <Toaster />
      </ToastProvider>
    </ReduxProvider>
  );
};
