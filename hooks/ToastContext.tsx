"use client";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import CustomToast from "@/components/atoms/custom-toast";
import { ToastEnumType } from "@/types/enums/toast-enum";

interface ToastState {
  isVisible: boolean;
  type: ToastEnumType;
  title?: string;
  message: string;
  autoClose: boolean;
  duration: number;
}

interface ShowToastOptions {
  type?: ToastEnumType;
  title?: string;
  message: string;
  autoClose?: boolean;
  duration?: number;
}

interface ToastContextType {
  showToast: (options: ShowToastOptions) => void;
  hideToast: () => void;
  showSuccess: (
    message: string,
    title?: string,
    options?: Partial<ShowToastOptions>
  ) => void;
  showError: (
    message: string,
    title?: string,
    options?: Partial<ShowToastOptions>
  ) => void;
  showWarning: (
    message: string,
    title?: string,
    options?: Partial<ShowToastOptions>
  ) => void;
  showInfo: (
    message: string,
    title?: string,
    options?: Partial<ShowToastOptions>
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastState, setToastState] = useState<ToastState>({
    isVisible: false,
    type: ToastEnumType.SUCCESS,
    message: "",
    autoClose: true,
    duration: 3000,
  });

  const showToast = useCallback(
    ({
      type = ToastEnumType.SUCCESS,
      title,
      message,
      autoClose = true,
      duration = 3000,
    }: ShowToastOptions) => {
      setToastState({
        isVisible: true,
        type,
        title,
        message,
        autoClose,
        duration,
      });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToastState((prev) => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  const showSuccess = useCallback(
    (message: string, title?: string, options?: Partial<ShowToastOptions>) => {
      showToast({ type: ToastEnumType.SUCCESS, message, title, ...options });
    },
    [showToast]
  );

  const showError = useCallback(
    (message: string, title?: string, options?: Partial<ShowToastOptions>) => {
      showToast({ type: ToastEnumType.ERROR, message, title, ...options });
    },
    [showToast]
  );

  const showWarning = useCallback(
    (message: string, title?: string, options?: Partial<ShowToastOptions>) => {
      showToast({ type: ToastEnumType.WARNING, message, title, ...options });
    },
    [showToast]
  );

  const showInfo = useCallback(
    (message: string, title?: string, options?: Partial<ShowToastOptions>) => {
      showToast({ type: ToastEnumType.INFO, message, title, ...options });
    },
    [showToast]
  );

  const value = {
    showToast,
    hideToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <CustomToast
        type={toastState.type}
        title={toastState.title}
        message={toastState.message}
        isVisible={toastState.isVisible}
        onClose={hideToast}
        autoClose={toastState.autoClose}
        duration={toastState.duration}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
